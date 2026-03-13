#!/usr/bin/env python3
"""Reckord Codex – Operations Platform server (stdlib only)."""

import argparse
import hashlib
import hmac
import http.server
import json
import mimetypes
import os
import re
import socket
import sqlite3
import threading
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "reckord.db")
SESSION_COOKIE = "rck_sess"
SESSION_TTL = 30 * 24 * 3600
SESSION_SECRET = os.environ.get("SESSION_SECRET", "reckord-dev-secret-changeme")
GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", "")
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", "")
ALLOWED_DOMAIN = os.environ.get("ALLOWED_DOMAIN", "")

_db_lock = threading.Lock()

# ---------------------------------------------------------------------------
# Database
# ---------------------------------------------------------------------------
def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db():
    with _db_lock:
        conn = get_conn()
        c = conn.cursor()
        c.executescript("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL DEFAULT '',
    picture TEXT DEFAULT '',
    role TEXT NOT NULL DEFAULT 'crew',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    last_login TEXT
);

CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contact_person TEXT DEFAULT '',
    email TEXT DEFAULT '',
    phone TEXT DEFAULT '',
    address TEXT DEFAULT '',
    country TEXT NOT NULL DEFAULT 'CZ',
    notes TEXT DEFAULT '',
    vat_number TEXT DEFAULT '',
    risk_flag TEXT NOT NULL DEFAULT 'normal',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE,
    name TEXT NOT NULL,
    client_id INTEGER REFERENCES clients(id),
    status TEXT NOT NULL DEFAULT 'planning',
    start_date TEXT,
    end_date TEXT,
    location TEXT DEFAULT '',
    venue TEXT DEFAULT '',
    budget_total REAL NOT NULL DEFAULT 0,
    budget_spent REAL NOT NULL DEFAULT 0,
    manager_id INTEGER REFERENCES users(id),
    description TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS equipment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE,
    name TEXT NOT NULL,
    category TEXT DEFAULT '',
    brand TEXT DEFAULT '',
    model TEXT DEFAULT '',
    serial_number TEXT DEFAULT '',
    status TEXT NOT NULL DEFAULT 'available',
    current_project_id INTEGER REFERENCES projects(id),
    purchase_date TEXT,
    purchase_price REAL DEFAULT 0,
    maintenance_due TEXT,
    notes TEXT DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS fleet (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    registration TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    type TEXT DEFAULT '',
    brand TEXT DEFAULT '',
    model TEXT DEFAULT '',
    year INTEGER,
    status TEXT NOT NULL DEFAULT 'available',
    current_project_id INTEGER REFERENCES projects(id),
    current_driver_id INTEGER REFERENCES users(id),
    mileage INTEGER NOT NULL DEFAULT 0,
    maintenance_due TEXT,
    insurance_expiry TEXT,
    notes TEXT DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS crew (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    first_name TEXT NOT NULL DEFAULT '',
    last_name TEXT NOT NULL DEFAULT '',
    position TEXT DEFAULT '',
    phone TEXT DEFAULT '',
    email TEXT UNIQUE NOT NULL,
    status TEXT NOT NULL DEFAULT 'available',
    notes TEXT DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS project_equipment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    equipment_id INTEGER NOT NULL REFERENCES equipment(id),
    quantity INTEGER NOT NULL DEFAULT 1,
    date_from TEXT,
    date_to TEXT,
    notes TEXT DEFAULT ''
);

CREATE TABLE IF NOT EXISTS project_fleet (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    vehicle_id INTEGER NOT NULL REFERENCES fleet(id),
    driver_id INTEGER REFERENCES crew(id),
    date_from TEXT,
    date_to TEXT,
    notes TEXT DEFAULT ''
);

CREATE TABLE IF NOT EXISTS project_crew (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    crew_id INTEGER NOT NULL REFERENCES crew(id),
    role TEXT DEFAULT '',
    date_from TEXT,
    date_to TEXT,
    notes TEXT DEFAULT ''
);

CREATE TABLE IF NOT EXISTS offers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    number TEXT UNIQUE NOT NULL,
    project_id INTEGER REFERENCES projects(id),
    client_id INTEGER REFERENCES clients(id),
    status TEXT NOT NULL DEFAULT 'draft',
    total_value REAL NOT NULL DEFAULT 0,
    margin_pct REAL NOT NULL DEFAULT 0,
    valid_until TEXT,
    notes TEXT DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
        """)
        conn.commit()
        conn.close()


# ---------------------------------------------------------------------------
# Session helpers
# ---------------------------------------------------------------------------
def _sign(payload):
    sig = hmac.new(SESSION_SECRET.encode(), payload.encode(), hashlib.sha256).hexdigest()
    return sig[:16]


def make_session_cookie(email):
    ts = str(int(time.time()))
    payload = email + "|" + ts
    sig = _sign(payload)
    value = payload + "|" + sig
    return value


def parse_session_cookie(value):
    if not value:
        return None
    parts = value.split("|")
    if len(parts) != 3:
        return None
    email, ts, sig = parts
    payload = email + "|" + ts
    if not hmac.compare_digest(_sign(payload), sig):
        return None
    if int(time.time()) - int(ts) > SESSION_TTL:
        return None
    return email


def get_session_email(handler):
    cookie_header = handler.headers.get("Cookie", "")
    for part in cookie_header.split(";"):
        part = part.strip()
        if part.startswith(SESSION_COOKIE + "="):
            value = part[len(SESSION_COOKIE) + 1:]
            return parse_session_cookie(value)
    return None


def set_cookie_header(value, max_age=SESSION_TTL):
    return (SESSION_COOKIE + "=" + value +
            "; Path=/; HttpOnly; SameSite=Lax; Max-Age=" + str(max_age))


# ---------------------------------------------------------------------------
# User helpers
# ---------------------------------------------------------------------------
def upsert_user(email, name, picture=""):
    with _db_lock:
        conn = get_conn()
        try:
            now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
            conn.execute(
                "INSERT INTO users (email, name, picture, role, created_at, last_login) "
                "VALUES (?, ?, ?, 'admin', ?, ?) "
                "ON CONFLICT(email) DO UPDATE SET "
                "name=excluded.name, picture=excluded.picture, last_login=excluded.last_login",
                (email, name, picture, now, now)
            )
            conn.commit()
        finally:
            conn.close()


def get_user_by_email(email):
    conn = get_conn()
    try:
        row = conn.execute("SELECT * FROM users WHERE email=?", (email,)).fetchone()
        return dict(row) if row else None
    finally:
        conn.close()


# ---------------------------------------------------------------------------
# Code generator
# ---------------------------------------------------------------------------
def generate_project_code(conn):
    year = datetime.now().year
    prefix = "PRJ-" + str(year) + "-"
    row = conn.execute(
        "SELECT code FROM projects WHERE code LIKE ? ORDER BY code DESC LIMIT 1",
        (prefix + "%",)
    ).fetchone()
    if row:
        try:
            num = int(row[0].split("-")[-1]) + 1
        except Exception:
            num = 1
    else:
        num = 1
    return prefix + str(num).zfill(3)


# ---------------------------------------------------------------------------
# JSON helpers
# ---------------------------------------------------------------------------
def json_response(handler, data, status=200):
    body = json.dumps(data, default=str).encode()
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)


def error_response(handler, msg, status=400):
    json_response(handler, {"error": msg}, status)


def parse_body(handler):
    length = int(handler.headers.get("Content-Length", 0))
    if length == 0:
        return {}
    raw = handler.rfile.read(length)
    try:
        return json.loads(raw)
    except Exception:
        return {}


def parse_qs(path):
    if "?" in path:
        qs = path.split("?", 1)[1]
        return dict(urllib.parse.parse_qsl(qs))
    return {}


# ---------------------------------------------------------------------------
# Login page HTML
# ---------------------------------------------------------------------------
LOGIN_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reckord Codex – Sign In</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;800&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root { --red: #E10B17; --black: #111111; --dark: #1c1c1c; --mid: #888; }
  body { font-family: 'Roboto', sans-serif; background: var(--black); color: white;
         display: flex; align-items: center; justify-content: center; min-height: 100vh; }
  .card { background: #1c1c1c; border-radius: 12px; padding: 48px 40px; width: 380px;
          max-width: 95vw; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
  .logo-r { width: 52px; height: 52px; background: var(--red); color: white;
             font-weight: 800; font-size: 26px; display: inline-flex; align-items: center;
             justify-content: center; border-radius: 8px; margin-bottom: 20px; }
  .title { font-size: 22px; font-weight: 800; letter-spacing: 2px; margin-bottom: 4px; }
  .sub { font-size: 11px; color: var(--mid); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 36px; }
  .google-btn {
    display: flex; align-items: center; justify-content: center; gap: 12px;
    width: 100%; padding: 14px 20px; border-radius: 6px; border: 1.5px solid #333;
    background: white; color: #222; font-family: inherit; font-size: 14px; font-weight: 500;
    cursor: pointer; text-decoration: none; transition: background 0.15s;
  }
  .google-btn:hover { background: #f5f5f5; }
  .footer { margin-top: 28px; font-size: 11px; color: var(--mid); }
</style>
</head>
<body>
<div class="card">
  <div class="logo-r">R</div>
  <div class="title">RECKORD CODEX</div>
  <div class="sub">Operations Platform</div>
  <a class="google-btn" href="GOOGLE_AUTH_URL">
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z"/>
      <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z"/>
      <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z"/>
      <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z"/>
    </svg>
    Sign in with Google
  </a>
  <div class="footer">Access restricted to authorised personnel only.</div>
</div>
</body>
</html>"""


# ---------------------------------------------------------------------------
# OAuth helpers
# ---------------------------------------------------------------------------
def get_oauth_url(redirect_uri):
    params = urllib.parse.urlencode({
        "client_id": GOOGLE_CLIENT_ID,
        "redirect_uri": redirect_uri,
        "response_type": "code",
        "scope": "openid email profile",
        "access_type": "offline",
        "prompt": "select_account",
    })
    return "https://accounts.google.com/o/oauth2/v2/auth?" + params


def exchange_code(code, redirect_uri):
    data = urllib.parse.urlencode({
        "code": code,
        "client_id": GOOGLE_CLIENT_ID,
        "client_secret": GOOGLE_CLIENT_SECRET,
        "redirect_uri": redirect_uri,
        "grant_type": "authorization_code",
    }).encode()
    req = urllib.request.Request(
        "https://oauth2.googleapis.com/token",
        data=data,
        method="POST"
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        return json.loads(resp.read())


def get_userinfo(access_token):
    req = urllib.request.Request("https://www.googleapis.com/oauth2/v3/userinfo")
    req.add_header("Authorization", "Bearer " + access_token)
    with urllib.request.urlopen(req, timeout=10) as resp:
        return json.loads(resp.read())


# ---------------------------------------------------------------------------
# Request Handler
# ---------------------------------------------------------------------------
class Handler(http.server.BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass  # suppress default access log

    def _redirect(self, location, status=302, headers=None):
        self.send_response(status)
        self.send_header("Location", location)
        if headers:
            for k, v in headers.items():
                self.send_header(k, v)
        self.end_headers()

    def _get_base_url(self):
        host = self.headers.get("Host", "localhost")
        return "http://" + host

    def _require_auth(self):
        email = get_session_email(self)
        if not email:
            return None
        user = get_user_by_email(email)
        return user

    def do_GET(self):
        parsed_path = self.path.split("?")[0]

        # Auth routes
        if parsed_path == "/login":
            self._handle_login()
            return
        if parsed_path == "/auth/callback":
            self._handle_callback()
            return
        if parsed_path == "/logout":
            self._redirect("/login", headers={"Set-Cookie": set_cookie_header("", max_age=0)})
            return

        # API routes
        if parsed_path.startswith("/api/"):
            user = self._require_auth()
            if not user:
                json_response(self, {"error": "Unauthorized"}, 401)
                return
            self._handle_api_get(parsed_path, user)
            return

        # Static files
        self._serve_static(parsed_path)

    def do_POST(self):
        parsed_path = self.path.split("?")[0]
        user = self._require_auth()
        if not user:
            json_response(self, {"error": "Unauthorized"}, 401)
            return
        self._handle_api_post(parsed_path, user)

    def do_PUT(self):
        parsed_path = self.path.split("?")[0]
        user = self._require_auth()
        if not user:
            json_response(self, {"error": "Unauthorized"}, 401)
            return
        self._handle_api_put(parsed_path, user)

    def do_DELETE(self):
        parsed_path = self.path.split("?")[0]
        user = self._require_auth()
        if not user:
            json_response(self, {"error": "Unauthorized"}, 401)
            return
        self._handle_api_delete(parsed_path, user)

    # ------------------------------------------------------------------
    # Static file serving
    # ------------------------------------------------------------------
    def _serve_static(self, path):
        if path == "/" or path == "":
            path = "/index.html"
        # Prevent directory traversal
        file_path = os.path.normpath(os.path.join(BASE_DIR, path.lstrip("/")))
        if not file_path.startswith(BASE_DIR):
            self.send_error(403)
            return
        if os.path.isdir(file_path):
            file_path = os.path.join(file_path, "index.html")
        if not os.path.isfile(file_path):
            # If not found and no session, redirect to login
            email = get_session_email(self)
            if not email:
                self._redirect("/login")
                return
            self.send_error(404)
            return
        # If it's index.html or app.js and user not authenticated, redirect
        if path in ("/index.html", "/app.js", "/"):
            email = get_session_email(self)
            if not email:
                self._redirect("/login")
                return
        mime, _ = mimetypes.guess_type(file_path)
        if not mime:
            mime = "application/octet-stream"
        with open(file_path, "rb") as f:
            body = f.read()
        self.send_response(200)
        self.send_header("Content-Type", mime)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    # ------------------------------------------------------------------
    # Login / OAuth
    # ------------------------------------------------------------------
    def _handle_login(self):
        if not GOOGLE_CLIENT_ID:
            # Dev mode: auto-login as admin@localhost
            upsert_user("admin@localhost", "Admin", "")
            cookie = make_session_cookie("admin@localhost")
            self._redirect("/", headers={"Set-Cookie": set_cookie_header(cookie)})
            return
        redirect_uri = self._get_base_url() + "/auth/callback"
        auth_url = get_oauth_url(redirect_uri)
        html = LOGIN_HTML.replace("GOOGLE_AUTH_URL", auth_url)
        body = html.encode()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _handle_callback(self):
        qs = parse_qs(self.path)
        code = qs.get("code", "")
        if not code:
            self.send_error(400, "Missing code")
            return
        redirect_uri = self._get_base_url() + "/auth/callback"
        try:
            tokens = exchange_code(code, redirect_uri)
            access_token = tokens.get("access_token", "")
            info = get_userinfo(access_token)
            email = info.get("email", "")
            if not email:
                self.send_error(400, "No email returned")
                return
            if ALLOWED_DOMAIN and not email.endswith("@" + ALLOWED_DOMAIN):
                body = b"Access denied: email domain not allowed."
                self.send_response(403)
                self.send_header("Content-Type", "text/plain")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return
            name = info.get("name", email)
            picture = info.get("picture", "")
            upsert_user(email, name, picture)
            cookie = make_session_cookie(email)
            self._redirect("/", headers={"Set-Cookie": set_cookie_header(cookie)})
        except Exception as e:
            self.send_error(500, "OAuth error: " + str(e))

    # ------------------------------------------------------------------
    # API GET
    # ------------------------------------------------------------------
    def _handle_api_get(self, path, user):
        qs = parse_qs(self.path)

        if path == "/api/me":
            json_response(self, user)
            return

        if path == "/api/dashboard":
            self._api_dashboard()
            return

        if path == "/api/projects":
            self._api_projects_list(qs)
            return

        m = re.match(r"^/api/projects/(\d+)$", path)
        if m:
            self._api_project_get(int(m.group(1)))
            return

        if path == "/api/clients":
            self._api_clients_list(qs)
            return

        m = re.match(r"^/api/clients/(\d+)$", path)
        if m:
            self._api_client_get(int(m.group(1)))
            return

        if path == "/api/users":
            self._api_users_list()
            return

        error_response(self, "Not found", 404)

    def _api_dashboard(self):
        conn = get_conn()
        try:
            def scalar(q, *p):
                row = conn.execute(q, p).fetchone()
                return row[0] if row else 0

            projects_total = scalar("SELECT COUNT(*) FROM projects")
            projects_active = scalar("SELECT COUNT(*) FROM projects WHERE status='in_progress'")
            projects_planning = scalar("SELECT COUNT(*) FROM projects WHERE status='planning'")
            clients_total = scalar("SELECT COUNT(*) FROM clients")
            equipment_total = scalar("SELECT COUNT(*) FROM equipment")
            equipment_available = scalar("SELECT COUNT(*) FROM equipment WHERE status='available'")
            fleet_total = scalar("SELECT COUNT(*) FROM fleet")
            crew_total = scalar("SELECT COUNT(*) FROM crew")
            crew_available = scalar("SELECT COUNT(*) FROM crew WHERE status='available'")

            rows = conn.execute(
                "SELECT p.id, p.code, p.name, p.status, p.start_date, p.end_date, "
                "c.name AS client_name, u.name AS manager_name "
                "FROM projects p "
                "LEFT JOIN clients c ON c.id=p.client_id "
                "LEFT JOIN users u ON u.id=p.manager_id "
                "ORDER BY p.start_date DESC LIMIT 5"
            ).fetchall()

            json_response(self, {
                "stats": {
                    "projects_total": projects_total,
                    "projects_active": projects_active,
                    "projects_planning": projects_planning,
                    "clients_total": clients_total,
                    "equipment_total": equipment_total,
                    "equipment_available": equipment_available,
                    "fleet_total": fleet_total,
                    "crew_total": crew_total,
                    "crew_available": crew_available,
                },
                "recent_projects": [dict(r) for r in rows]
            })
        finally:
            conn.close()

    def _api_projects_list(self, qs):
        conn = get_conn()
        try:
            search = qs.get("search", "").strip()
            status = qs.get("status", "").strip()
            q = ("SELECT p.*, c.name AS client_name, u.name AS manager_name "
                 "FROM projects p "
                 "LEFT JOIN clients c ON c.id=p.client_id "
                 "LEFT JOIN users u ON u.id=p.manager_id")
            params = []
            conds = []
            if search:
                conds.append("(p.name LIKE ? OR p.code LIKE ? OR c.name LIKE ?)")
                like = "%" + search + "%"
                params += [like, like, like]
            if status:
                conds.append("p.status=?")
                params.append(status)
            if conds:
                q += " WHERE " + " AND ".join(conds)
            q += " ORDER BY p.start_date DESC"
            rows = conn.execute(q, params).fetchall()
            json_response(self, [dict(r) for r in rows])
        finally:
            conn.close()

    def _api_project_get(self, pid):
        conn = get_conn()
        try:
            row = conn.execute(
                "SELECT p.*, c.name AS client_name, u.name AS manager_name "
                "FROM projects p "
                "LEFT JOIN clients c ON c.id=p.client_id "
                "LEFT JOIN users u ON u.id=p.manager_id "
                "WHERE p.id=?", (pid,)
            ).fetchone()
            if not row:
                error_response(self, "Not found", 404)
                return
            data = dict(row)

            crew_rows = conn.execute(
                "SELECT pc.*, cr.first_name, cr.last_name, cr.position, cr.email "
                "FROM project_crew pc "
                "JOIN crew cr ON cr.id=pc.crew_id "
                "WHERE pc.project_id=?", (pid,)
            ).fetchall()
            data["crew"] = [dict(r) for r in crew_rows]

            eq_rows = conn.execute(
                "SELECT pe.*, e.name AS eq_name, e.code AS eq_code, e.category "
                "FROM project_equipment pe "
                "JOIN equipment e ON e.id=pe.equipment_id "
                "WHERE pe.project_id=?", (pid,)
            ).fetchall()
            data["equipment"] = [dict(r) for r in eq_rows]

            fl_rows = conn.execute(
                "SELECT pf.*, f.name AS vehicle_name, f.brand, f.model, f.registration, "
                "cr.first_name AS driver_first, cr.last_name AS driver_last "
                "FROM project_fleet pf "
                "JOIN fleet f ON f.id=pf.vehicle_id "
                "LEFT JOIN crew cr ON cr.id=pf.driver_id "
                "WHERE pf.project_id=?", (pid,)
            ).fetchall()
            data["fleet"] = [dict(r) for r in fl_rows]

            json_response(self, data)
        finally:
            conn.close()

    def _api_clients_list(self, qs):
        conn = get_conn()
        try:
            search = qs.get("search", "").strip()
            q = ("SELECT c.*, "
                 "(SELECT COUNT(*) FROM projects p WHERE p.client_id=c.id) AS project_count "
                 "FROM clients c")
            params = []
            if search:
                q += " WHERE c.name LIKE ? OR c.contact_person LIKE ? OR c.email LIKE ?"
                like = "%" + search + "%"
                params = [like, like, like]
            q += " ORDER BY c.name"
            rows = conn.execute(q, params).fetchall()
            json_response(self, [dict(r) for r in rows])
        finally:
            conn.close()

    def _api_client_get(self, cid):
        conn = get_conn()
        try:
            row = conn.execute("SELECT * FROM clients WHERE id=?", (cid,)).fetchone()
            if not row:
                error_response(self, "Not found", 404)
                return
            data = dict(row)
            proj_rows = conn.execute(
                "SELECT id, code, name, status, start_date, end_date "
                "FROM projects WHERE client_id=? ORDER BY start_date DESC", (cid,)
            ).fetchall()
            data["projects"] = [dict(r) for r in proj_rows]
            json_response(self, data)
        finally:
            conn.close()

    def _api_users_list(self):
        conn = get_conn()
        try:
            rows = conn.execute("SELECT id, name, email, role FROM users ORDER BY name").fetchall()
            json_response(self, [dict(r) for r in rows])
        finally:
            conn.close()

    # ------------------------------------------------------------------
    # API POST
    # ------------------------------------------------------------------
    def _handle_api_post(self, path, user):
        body = parse_body(self)

        if path == "/api/projects":
            self._api_project_create(body, user)
            return

        if path == "/api/clients":
            self._api_client_create(body)
            return

        error_response(self, "Not found", 404)

    def _api_project_create(self, body, user):
        name = (body.get("name") or "").strip()
        if not name:
            error_response(self, "name required")
            return
        with _db_lock:
            conn = get_conn()
            try:
                code = (body.get("code") or "").strip()
                if not code:
                    code = generate_project_code(conn)
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "INSERT INTO projects (code, name, client_id, status, start_date, end_date, "
                    "location, venue, budget_total, budget_spent, manager_id, description, notes, "
                    "created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    (
                        code, name,
                        body.get("client_id") or None,
                        body.get("status") or "planning",
                        body.get("start_date") or None,
                        body.get("end_date") or None,
                        body.get("location") or "",
                        body.get("venue") or "",
                        body.get("budget_total") or 0,
                        body.get("budget_spent") or 0,
                        body.get("manager_id") or None,
                        body.get("description") or "",
                        body.get("notes") or "",
                        now, now
                    )
                )
                conn.commit()
                row_id = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
                row = conn.execute("SELECT * FROM projects WHERE id=?", (row_id,)).fetchone()
                json_response(self, dict(row), 201)
            finally:
                conn.close()

    def _api_client_create(self, body):
        name = (body.get("name") or "").strip()
        if not name:
            error_response(self, "name required")
            return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "INSERT INTO clients (name, contact_person, email, phone, address, country, "
                    "notes, vat_number, risk_flag, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                    (
                        name,
                        body.get("contact_person") or "",
                        body.get("email") or "",
                        body.get("phone") or "",
                        body.get("address") or "",
                        body.get("country") or "CZ",
                        body.get("notes") or "",
                        body.get("vat_number") or "",
                        body.get("risk_flag") or "normal",
                        now, now
                    )
                )
                conn.commit()
                row_id = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
                row = conn.execute("SELECT * FROM clients WHERE id=?", (row_id,)).fetchone()
                json_response(self, dict(row), 201)
            finally:
                conn.close()

    # ------------------------------------------------------------------
    # API PUT
    # ------------------------------------------------------------------
    def _handle_api_put(self, path, user):
        body = parse_body(self)

        m = re.match(r"^/api/projects/(\d+)$", path)
        if m:
            self._api_project_update(int(m.group(1)), body)
            return

        m = re.match(r"^/api/clients/(\d+)$", path)
        if m:
            self._api_client_update(int(m.group(1)), body)
            return

        error_response(self, "Not found", 404)

    def _api_project_update(self, pid, body):
        name = (body.get("name") or "").strip()
        if not name:
            error_response(self, "name required")
            return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                code = (body.get("code") or "").strip()
                if not code:
                    code = generate_project_code(conn)
                conn.execute(
                    "UPDATE projects SET code=?, name=?, client_id=?, status=?, start_date=?, "
                    "end_date=?, location=?, venue=?, budget_total=?, budget_spent=?, manager_id=?, "
                    "description=?, notes=?, updated_at=? WHERE id=?",
                    (
                        code, name,
                        body.get("client_id") or None,
                        body.get("status") or "planning",
                        body.get("start_date") or None,
                        body.get("end_date") or None,
                        body.get("location") or "",
                        body.get("venue") or "",
                        body.get("budget_total") or 0,
                        body.get("budget_spent") or 0,
                        body.get("manager_id") or None,
                        body.get("description") or "",
                        body.get("notes") or "",
                        now, pid
                    )
                )
                conn.commit()
                row = conn.execute("SELECT * FROM projects WHERE id=?", (pid,)).fetchone()
                if not row:
                    error_response(self, "Not found", 404)
                    return
                json_response(self, dict(row))
            finally:
                conn.close()

    def _api_client_update(self, cid, body):
        name = (body.get("name") or "").strip()
        if not name:
            error_response(self, "name required")
            return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "UPDATE clients SET name=?, contact_person=?, email=?, phone=?, address=?, "
                    "country=?, notes=?, vat_number=?, risk_flag=?, updated_at=? WHERE id=?",
                    (
                        name,
                        body.get("contact_person") or "",
                        body.get("email") or "",
                        body.get("phone") or "",
                        body.get("address") or "",
                        body.get("country") or "CZ",
                        body.get("notes") or "",
                        body.get("vat_number") or "",
                        body.get("risk_flag") or "normal",
                        now, cid
                    )
                )
                conn.commit()
                row = conn.execute("SELECT * FROM clients WHERE id=?", (cid,)).fetchone()
                if not row:
                    error_response(self, "Not found", 404)
                    return
                json_response(self, dict(row))
            finally:
                conn.close()

    # ------------------------------------------------------------------
    # API DELETE
    # ------------------------------------------------------------------
    def _handle_api_delete(self, path, user):
        m = re.match(r"^/api/projects/(\d+)$", path)
        if m:
            self._api_project_delete(int(m.group(1)))
            return

        m = re.match(r"^/api/clients/(\d+)$", path)
        if m:
            self._api_client_delete(int(m.group(1)))
            return

        error_response(self, "Not found", 404)

    def _api_project_delete(self, pid):
        with _db_lock:
            conn = get_conn()
            try:
                conn.execute("DELETE FROM projects WHERE id=?", (pid,))
                conn.commit()
                json_response(self, {"ok": True})
            finally:
                conn.close()

    def _api_client_delete(self, cid):
        with _db_lock:
            conn = get_conn()
            try:
                conn.execute("DELETE FROM clients WHERE id=?", (cid,))
                conn.commit()
                json_response(self, {"ok": True})
            finally:
                conn.close()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    parser = argparse.ArgumentParser(description="Reckord Codex server")
    parser.add_argument("--port", type=int, default=8080)
    args = parser.parse_args()

    init_db()

    try:
        local_ip = socket.gethostbyname(socket.gethostname())
    except Exception:
        local_ip = "127.0.0.1"

    server = http.server.ThreadingHTTPServer(("0.0.0.0", args.port), Handler)
    print("Reckord Codex running:")
    print("  Local:   http://localhost:" + str(args.port))
    print("  Network: http://" + local_ip + ":" + str(args.port))
    if not GOOGLE_CLIENT_ID:
        print("  [DEV MODE] No GOOGLE_CLIENT_ID set – auto-login as admin@localhost")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")


if __name__ == "__main__":
    main()
