#!/usr/bin/env python3
"""Reckord Codex – Operations Platform server (stdlib only)."""

import argparse
import csv
import hashlib
import hmac
import http.server
import io
import json
import mimetypes
import os
import re
import socket
import sqlite3
import threading
import time
import unicodedata
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
    ico TEXT DEFAULT '',
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
        c.executescript("""
CREATE TABLE IF NOT EXISTS schema_migrations (
    version INTEGER PRIMARY KEY,
    applied_at TEXT NOT NULL DEFAULT (datetime('now')),
    description TEXT DEFAULT ''
);
""")
        # Migrations for existing databases
        for col_sql in [
            "ALTER TABLE clients ADD COLUMN ico TEXT DEFAULT ''",
        ]:
            try:
                conn.execute(col_sql)
                conn.commit()
            except Exception:
                pass
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


def _normalize_col(name):
    """Lowercase, strip whitespace, remove diacritics for fuzzy column matching."""
    s = name.strip().lower()
    return ''.join(c for c in unicodedata.normalize('NFD', s)
                   if unicodedata.category(c) != 'Mn')


def _parse_caflou_date(s):
    """Parse Czech/ISO date string to ISO YYYY-MM-DD or None."""
    if not s:
        return None
    s = s.strip()
    for fmt in ['%d.%m.%Y', '%Y-%m-%d', '%d/%m/%Y', '%d-%m-%Y']:
        try:
            return datetime.strptime(s, fmt).strftime('%Y-%m-%d')
        except ValueError:
            pass
    return None


def _map_caflou_project_status(raw):
    """Map CAFLOU project status string to Reckord status key."""
    if not raw:
        return 'planning'
    s = _normalize_col(raw)
    if any(x in s for x in ['plan', 'priprav', 'novy', 'new', 'draft', 'navrh', 'concept']):
        return 'planning'
    if any(x in s for x in ['potvrzen', 'schvalen', 'confirm', 'approved']):
        return 'confirmed'
    if any(x in s for x in ['aktivn', 'probiha', 'progress', 'running', 'active', 'open']):
        return 'in_progress'
    if any(x in s for x in ['dokoncen', 'hotov', 'uzavren', 'complet', 'closed', 'done', 'finish']):
        return 'completed'
    if any(x in s for x in ['zrusen', 'cancel', 'pozastav', 'archiv', 'lost', 'rejected']):
        return 'cancelled'
    return 'planning'


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

        if path == "/api/equipment":
            self._api_equipment_list(qs); return
        m = re.match(r"^/api/equipment/(\d+)$", path)
        if m:
            self._api_equipment_get(int(m.group(1))); return

        if path == "/api/fleet":
            self._api_fleet_list(qs); return
        m = re.match(r"^/api/fleet/(\d+)$", path)
        if m:
            self._api_fleet_get(int(m.group(1))); return

        if path == "/api/crew":
            self._api_crew_list(qs); return
        m = re.match(r"^/api/crew/(\d+)$", path)
        if m:
            self._api_crew_get(int(m.group(1))); return

        if path == "/api/offers":
            self._api_offers_list(qs); return
        m = re.match(r"^/api/offers/(\d+)$", path)
        if m:
            self._api_offer_get(int(m.group(1))); return

        m = re.match(r"^/api/projects/(\d+)/available_crew$", path)
        if m:
            self._api_available_crew(int(m.group(1))); return
        m = re.match(r"^/api/projects/(\d+)/available_equipment$", path)
        if m:
            self._api_available_equipment(int(m.group(1))); return
        m = re.match(r"^/api/projects/(\d+)/available_fleet$", path)
        if m:
            self._api_available_fleet(int(m.group(1))); return
        if path == "/api/reports":
            self._api_reports(); return

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
            offers_pipeline = scalar(
                "SELECT COALESCE(SUM(total_value),0) FROM offers WHERE status IN ('sent','negotiation','won')")

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
                    "offers_pipeline": offers_pipeline,
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

        if path == "/api/equipment":
            self._api_equipment_create(body); return
        if path == "/api/fleet":
            self._api_fleet_create(body); return
        if path == "/api/crew":
            self._api_crew_create(body); return
        if path == "/api/offers":
            self._api_offer_create(body); return

        m = re.match(r"^/api/offers/(\d+)/to_project$", path)
        if m:
            self._api_offer_to_project(int(m.group(1))); return

        m = re.match(r"^/api/projects/(\d+)/crew$", path)
        if m:
            self._api_assign_crew(int(m.group(1)), body); return
        m = re.match(r"^/api/projects/(\d+)/equipment$", path)
        if m:
            self._api_assign_equipment(int(m.group(1)), body); return
        m = re.match(r"^/api/projects/(\d+)/fleet$", path)
        if m:
            self._api_assign_fleet(int(m.group(1)), body); return

        if path == "/api/import":
            self._api_import(body); return

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
                    "notes, vat_number, ico, risk_flag, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                    (
                        name,
                        body.get("contact_person") or "",
                        body.get("email") or "",
                        body.get("phone") or "",
                        body.get("address") or "",
                        body.get("country") or "CZ",
                        body.get("notes") or "",
                        body.get("vat_number") or "",
                        body.get("ico") or "",
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

        m = re.match(r"^/api/equipment/(\d+)$", path)
        if m:
            self._api_equipment_update(int(m.group(1)), body); return
        m = re.match(r"^/api/fleet/(\d+)$", path)
        if m:
            self._api_fleet_update(int(m.group(1)), body); return
        m = re.match(r"^/api/crew/(\d+)$", path)
        if m:
            self._api_crew_update(int(m.group(1)), body); return
        m = re.match(r"^/api/offers/(\d+)$", path)
        if m:
            self._api_offer_update(int(m.group(1)), body); return

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
                    "country=?, notes=?, vat_number=?, ico=?, risk_flag=?, updated_at=? WHERE id=?",
                    (
                        name,
                        body.get("contact_person") or "",
                        body.get("email") or "",
                        body.get("phone") or "",
                        body.get("address") or "",
                        body.get("country") or "CZ",
                        body.get("notes") or "",
                        body.get("vat_number") or "",
                        body.get("ico") or "",
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

        m = re.match(r"^/api/equipment/(\d+)$", path)
        if m:
            self._api_generic_delete("equipment", int(m.group(1))); return
        m = re.match(r"^/api/fleet/(\d+)$", path)
        if m:
            self._api_generic_delete("fleet", int(m.group(1))); return
        m = re.match(r"^/api/crew/(\d+)$", path)
        if m:
            self._api_generic_delete("crew", int(m.group(1))); return
        m = re.match(r"^/api/offers/(\d+)$", path)
        if m:
            self._api_generic_delete("offers", int(m.group(1))); return

        m = re.match(r"^/api/projects/(\d+)/crew/(\d+)$", path)
        if m:
            self._api_remove_crew_assignment(int(m.group(1)), int(m.group(2))); return
        m = re.match(r"^/api/projects/(\d+)/equipment/(\d+)$", path)
        if m:
            self._api_remove_equipment_assignment(int(m.group(1)), int(m.group(2))); return
        m = re.match(r"^/api/projects/(\d+)/fleet/(\d+)$", path)
        if m:
            self._api_remove_fleet_assignment(int(m.group(1)), int(m.group(2))); return

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

    def _api_generic_delete(self, table, rid):
        with _db_lock:
            conn = get_conn()
            try:
                conn.execute(f"DELETE FROM {table} WHERE id=?", (rid,))
                conn.commit()
                json_response(self, {"ok": True})
            finally:
                conn.close()

    # ── Equipment ──────────────────────────────────────────────────────────────
    def _api_equipment_list(self, qs):
        conn = get_conn()
        try:
            search = qs.get("search", "").strip().lower()
            status = qs.get("status", "").strip()
            rows = conn.execute("""
                SELECT e.*, p.name as project_name
                FROM equipment e
                LEFT JOIN projects p ON e.current_project_id = p.id
                ORDER BY e.name
            """).fetchall()
            result = [dict(r) for r in rows]
            if search:
                result = [r for r in result if search in r["name"].lower()
                          or search in (r["code"] or "").lower()
                          or search in (r["category"] or "").lower()
                          or search in (r["brand"] or "").lower()]
            if status:
                result = [r for r in result if r["status"] == status]
            json_response(self, result)
        finally:
            conn.close()

    def _api_equipment_get(self, eid):
        conn = get_conn()
        try:
            row = conn.execute("""
                SELECT e.*, p.name as project_name
                FROM equipment e
                LEFT JOIN projects p ON e.current_project_id = p.id
                WHERE e.id=?
            """, (eid,)).fetchone()
            if not row:
                error_response(self, "Not found", 404); return
            item = dict(row)
            item["assignments"] = [dict(r) for r in conn.execute("""
                SELECT pe.*, p.name as project_name, p.code as project_code, p.status as project_status
                FROM project_equipment pe
                JOIN projects p ON pe.project_id = p.id
                WHERE pe.equipment_id=? ORDER BY pe.date_from DESC
            """, (eid,)).fetchall()]
            json_response(self, item)
        finally:
            conn.close()

    def _api_equipment_create(self, body):
        name = (body.get("name") or "").strip()
        if not name:
            error_response(self, "name required"); return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "INSERT INTO equipment (code,name,category,brand,model,serial_number,status,"
                    "purchase_date,purchase_price,maintenance_due,notes,created_at,updated_at) "
                    "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    (body.get("code") or "", name,
                     body.get("category") or "", body.get("brand") or "",
                     body.get("model") or "", body.get("serial_number") or "",
                     body.get("status") or "available",
                     body.get("purchase_date") or None,
                     float(body.get("purchase_price") or 0) or None,
                     body.get("maintenance_due") or None,
                     body.get("notes") or "", now, now)
                )
                conn.commit()
                rid = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
                json_response(self, dict(conn.execute("SELECT * FROM equipment WHERE id=?", (rid,)).fetchone()), 201)
            finally:
                conn.close()

    def _api_equipment_update(self, eid, body):
        name = (body.get("name") or "").strip()
        if not name:
            error_response(self, "name required"); return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "UPDATE equipment SET code=?,name=?,category=?,brand=?,model=?,serial_number=?,"
                    "status=?,purchase_date=?,purchase_price=?,maintenance_due=?,notes=?,updated_at=? WHERE id=?",
                    (body.get("code") or "", name,
                     body.get("category") or "", body.get("brand") or "",
                     body.get("model") or "", body.get("serial_number") or "",
                     body.get("status") or "available",
                     body.get("purchase_date") or None,
                     float(body.get("purchase_price") or 0) or None,
                     body.get("maintenance_due") or None,
                     body.get("notes") or "", now, eid)
                )
                conn.commit()
                json_response(self, dict(conn.execute("SELECT * FROM equipment WHERE id=?", (eid,)).fetchone()))
            finally:
                conn.close()

    # ── Fleet ──────────────────────────────────────────────────────────────────
    def _api_fleet_list(self, qs):
        conn = get_conn()
        try:
            search = qs.get("search", "").strip().lower()
            status = qs.get("status", "").strip()
            rows = conn.execute("""
                SELECT f.*, p.name as project_name
                FROM fleet f
                LEFT JOIN projects p ON f.current_project_id = p.id
                ORDER BY f.name
            """).fetchall()
            result = [dict(r) for r in rows]
            if search:
                result = [r for r in result if search in (r["name"] or "").lower()
                          or search in r["registration"].lower()
                          or search in (r["brand"] or "").lower()]
            if status:
                result = [r for r in result if r["status"] == status]
            json_response(self, result)
        finally:
            conn.close()

    def _api_fleet_get(self, fid):
        conn = get_conn()
        try:
            row = conn.execute("""
                SELECT f.*, p.name as project_name
                FROM fleet f
                LEFT JOIN projects p ON f.current_project_id = p.id
                WHERE f.id=?
            """, (fid,)).fetchone()
            if not row:
                error_response(self, "Not found", 404); return
            item = dict(row)
            item["assignments"] = [dict(r) for r in conn.execute("""
                SELECT pf.*, p.name as project_name, p.code as project_code,
                       cr.first_name as driver_first, cr.last_name as driver_last
                FROM project_fleet pf
                JOIN projects p ON pf.project_id = p.id
                LEFT JOIN crew cr ON pf.driver_id = cr.id
                WHERE pf.vehicle_id=? ORDER BY pf.date_from DESC
            """, (fid,)).fetchall()]
            json_response(self, item)
        finally:
            conn.close()

    def _api_fleet_create(self, body):
        reg = (body.get("registration") or "").strip()
        if not reg:
            error_response(self, "registration required"); return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "INSERT INTO fleet (registration,name,type,brand,model,year,status,"
                    "mileage,maintenance_due,insurance_expiry,notes,created_at,updated_at) "
                    "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    (reg, body.get("name") or "", body.get("type") or "",
                     body.get("brand") or "", body.get("model") or "",
                     int(body.get("year") or 0) or None,
                     body.get("status") or "available",
                     int(body.get("mileage") or 0),
                     body.get("maintenance_due") or None,
                     body.get("insurance_expiry") or None,
                     body.get("notes") or "", now, now)
                )
                conn.commit()
                rid = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
                json_response(self, dict(conn.execute("SELECT * FROM fleet WHERE id=?", (rid,)).fetchone()), 201)
            finally:
                conn.close()

    def _api_fleet_update(self, fid, body):
        reg = (body.get("registration") or "").strip()
        if not reg:
            error_response(self, "registration required"); return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "UPDATE fleet SET registration=?,name=?,type=?,brand=?,model=?,year=?,"
                    "status=?,mileage=?,maintenance_due=?,insurance_expiry=?,notes=?,updated_at=? WHERE id=?",
                    (reg, body.get("name") or "", body.get("type") or "",
                     body.get("brand") or "", body.get("model") or "",
                     int(body.get("year") or 0) or None,
                     body.get("status") or "available",
                     int(body.get("mileage") or 0),
                     body.get("maintenance_due") or None,
                     body.get("insurance_expiry") or None,
                     body.get("notes") or "", now, fid)
                )
                conn.commit()
                json_response(self, dict(conn.execute("SELECT * FROM fleet WHERE id=?", (fid,)).fetchone()))
            finally:
                conn.close()

    # ── Crew ──────────────────────────────────────────────────────────────────
    def _api_crew_list(self, qs):
        conn = get_conn()
        try:
            search = qs.get("search", "").strip().lower()
            status = qs.get("status", "").strip()
            rows = conn.execute("SELECT * FROM crew ORDER BY last_name, first_name").fetchall()
            result = [dict(r) for r in rows]
            if search:
                result = [r for r in result if
                          search in r["first_name"].lower() or search in r["last_name"].lower()
                          or search in (r["position"] or "").lower()
                          or search in (r["email"] or "").lower()]
            if status:
                result = [r for r in result if r["status"] == status]
            json_response(self, result)
        finally:
            conn.close()

    def _api_crew_get(self, cid):
        conn = get_conn()
        try:
            row = conn.execute("SELECT * FROM crew WHERE id=?", (cid,)).fetchone()
            if not row:
                error_response(self, "Not found", 404); return
            item = dict(row)
            item["assignments"] = [dict(r) for r in conn.execute("""
                SELECT pc.*, p.name as project_name, p.code as project_code, p.status as project_status
                FROM project_crew pc
                JOIN projects p ON pc.project_id = p.id
                WHERE pc.crew_id=? ORDER BY pc.date_from DESC
            """, (cid,)).fetchall()]
            json_response(self, item)
        finally:
            conn.close()

    def _api_crew_create(self, body):
        first = (body.get("first_name") or "").strip()
        last = (body.get("last_name") or "").strip()
        if not first or not last:
            error_response(self, "first_name and last_name required"); return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "INSERT INTO crew (first_name,last_name,position,phone,email,status,notes,created_at,updated_at) "
                    "VALUES (?,?,?,?,?,?,?,?,?)",
                    (first, last, body.get("position") or "", body.get("phone") or "",
                     body.get("email") or "", body.get("status") or "available",
                     body.get("notes") or "", now, now)
                )
                conn.commit()
                rid = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
                json_response(self, dict(conn.execute("SELECT * FROM crew WHERE id=?", (rid,)).fetchone()), 201)
            finally:
                conn.close()

    def _api_crew_update(self, cid, body):
        first = (body.get("first_name") or "").strip()
        last = (body.get("last_name") or "").strip()
        if not first or not last:
            error_response(self, "first_name and last_name required"); return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "UPDATE crew SET first_name=?,last_name=?,position=?,phone=?,email=?,status=?,notes=?,updated_at=? WHERE id=?",
                    (first, last, body.get("position") or "", body.get("phone") or "",
                     body.get("email") or "", body.get("status") or "available",
                     body.get("notes") or "", now, cid)
                )
                conn.commit()
                json_response(self, dict(conn.execute("SELECT * FROM crew WHERE id=?", (cid,)).fetchone()))
            finally:
                conn.close()

    # ── Offers ──────────────────────────────────────────────────────────────────
    def _api_offers_list(self, qs):
        conn = get_conn()
        try:
            search = qs.get("search", "").strip().lower()
            status = qs.get("status", "").strip()
            rows = conn.execute("""
                SELECT o.*, c.name as client_name, p.name as project_name, p.code as project_code
                FROM offers o
                LEFT JOIN clients c ON o.client_id = c.id
                LEFT JOIN projects p ON o.project_id = p.id
                ORDER BY o.created_at DESC
            """).fetchall()
            result = [dict(r) for r in rows]
            if search:
                result = [r for r in result if
                          search in (r["number"] or "").lower()
                          or search in (r["client_name"] or "").lower()]
            if status:
                result = [r for r in result if r["status"] == status]
            json_response(self, result)
        finally:
            conn.close()

    def _api_offer_get(self, oid):
        conn = get_conn()
        try:
            row = conn.execute("""
                SELECT o.*, c.name as client_name, p.name as project_name, p.code as project_code
                FROM offers o
                LEFT JOIN clients c ON o.client_id = c.id
                LEFT JOIN projects p ON o.project_id = p.id
                WHERE o.id=?
            """, (oid,)).fetchone()
            if not row:
                error_response(self, "Not found", 404); return
            json_response(self, dict(row))
        finally:
            conn.close()

    def _api_offer_create(self, body):
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                # Auto-generate number if empty
                number = (body.get("number") or "").strip()
                if not number:
                    year = datetime.now(timezone.utc).year
                    count = conn.execute("SELECT COUNT(*) FROM offers WHERE number LIKE ?", (f"OFR-{year}-%",)).fetchone()[0]
                    number = f"OFR-{year}-{count+1:03d}"
                conn.execute(
                    "INSERT INTO offers (number,client_id,project_id,status,total_value,margin_pct,valid_until,notes,created_at,updated_at) "
                    "VALUES (?,?,?,?,?,?,?,?,?,?)",
                    (number,
                     body.get("client_id") or None, body.get("project_id") or None,
                     body.get("status") or "draft",
                     float(body.get("total_value") or 0),
                     float(body.get("margin_pct") or 0),
                     body.get("valid_until") or None,
                     body.get("notes") or "", now, now)
                )
                conn.commit()
                rid = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
                json_response(self, dict(conn.execute("SELECT * FROM offers WHERE id=?", (rid,)).fetchone()), 201)
            finally:
                conn.close()

    def _api_offer_update(self, oid, body):
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "UPDATE offers SET number=?,client_id=?,project_id=?,status=?,total_value=?,margin_pct=?,valid_until=?,notes=?,updated_at=? WHERE id=?",
                    ((body.get("number") or "").strip(),
                     body.get("client_id") or None, body.get("project_id") or None,
                     body.get("status") or "draft",
                     float(body.get("total_value") or 0),
                     float(body.get("margin_pct") or 0),
                     body.get("valid_until") or None,
                     body.get("notes") or "", now, oid)
                )
                conn.commit()
                json_response(self, dict(conn.execute("SELECT * FROM offers WHERE id=?", (oid,)).fetchone()))
            finally:
                conn.close()

    def _api_offer_to_project(self, oid):
        with _db_lock:
            conn = get_conn()
            try:
                offer = conn.execute("SELECT * FROM offers WHERE id=?", (oid,)).fetchone()
                if not offer:
                    error_response(self, "Offer not found", 404); return
                offer = dict(offer)
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                year = datetime.now(timezone.utc).year
                count = conn.execute("SELECT COUNT(*) FROM projects WHERE code LIKE ?",
                                     (f"PRJ-{year}-%",)).fetchone()[0]
                code = f"PRJ-{year}-{count+1:03d}"
                # Build project name from client name + offer number
                client_row = conn.execute("SELECT name FROM clients WHERE id=?",
                                          (offer["client_id"],)).fetchone() if offer["client_id"] else None
                client_name = client_row[0] if client_row else "Project"
                name = f"{client_name} \u2013 {offer['number']}"
                conn.execute(
                    "INSERT INTO projects (code,name,client_id,status,budget_total,"
                    "description,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?)",
                    (code, name, offer["client_id"], "planning",
                     offer["total_value"] or 0,
                     f"Created from offer {offer['number']}", now, now)
                )
                conn.commit()
                pid = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
                conn.execute(
                    "UPDATE offers SET project_id=?, status='won', updated_at=? WHERE id=?",
                    (pid, now, oid)
                )
                conn.commit()
                json_response(self, {"project_id": pid, "project_code": code}, 201)
            finally:
                conn.close()


# ── Project Assignments ────────────────────────────────────────────────────
    def _api_available_crew(self, pid):
        """Return crew members not already assigned to this project."""
        conn = get_conn()
        try:
            assigned_ids = [r[0] for r in conn.execute(
                "SELECT crew_id FROM project_crew WHERE project_id=?", (pid,)).fetchall()]
            rows = conn.execute("SELECT * FROM crew WHERE status != 'inactive' ORDER BY last_name, first_name").fetchall()
            result = [dict(r) for r in rows if r["id"] not in assigned_ids]
            json_response(self, result)
        finally:
            conn.close()

    def _api_available_equipment(self, pid):
        """Return equipment not already assigned to this project."""
        conn = get_conn()
        try:
            assigned_ids = [r[0] for r in conn.execute(
                "SELECT equipment_id FROM project_equipment WHERE project_id=?", (pid,)).fetchall()]
            rows = conn.execute("SELECT * FROM equipment WHERE status != 'retired' ORDER BY name").fetchall()
            result = [dict(r) for r in rows if r["id"] not in assigned_ids]
            json_response(self, result)
        finally:
            conn.close()

    def _api_available_fleet(self, pid):
        """Return fleet vehicles not already assigned to this project."""
        conn = get_conn()
        try:
            assigned_ids = [r[0] for r in conn.execute(
                "SELECT vehicle_id FROM project_fleet WHERE project_id=?", (pid,)).fetchall()]
            rows = conn.execute("SELECT * FROM fleet WHERE status != 'retired' ORDER BY name").fetchall()
            result = [dict(r) for r in rows if r["id"] not in assigned_ids]
            json_response(self, result)
        finally:
            conn.close()

    def _api_assign_crew(self, pid, body):
        crew_id = body.get("crew_id")
        if not crew_id:
            error_response(self, "crew_id required"); return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "INSERT INTO project_crew (project_id, crew_id, role, date_from, date_to) VALUES (?,?,?,?,?)",
                    (pid, crew_id, body.get("role") or "",
                     body.get("date_from") or None, body.get("date_to") or None)
                )
                conn.execute("UPDATE crew SET status='on_project', updated_at=? WHERE id=?", (now, crew_id))
                conn.commit()
                json_response(self, {"ok": True})
            finally:
                conn.close()

    def _api_assign_equipment(self, pid, body):
        equipment_id = body.get("equipment_id")
        if not equipment_id:
            error_response(self, "equipment_id required"); return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "INSERT INTO project_equipment (project_id, equipment_id, quantity, date_from, date_to) VALUES (?,?,?,?,?)",
                    (pid, equipment_id, int(body.get("quantity") or 1),
                     body.get("date_from") or None, body.get("date_to") or None)
                )
                conn.execute("UPDATE equipment SET status='on_project', current_project_id=?, updated_at=? WHERE id=?",
                             (pid, now, equipment_id))
                conn.commit()
                json_response(self, {"ok": True})
            finally:
                conn.close()

    def _api_assign_fleet(self, pid, body):
        vehicle_id = body.get("vehicle_id")
        if not vehicle_id:
            error_response(self, "vehicle_id required"); return
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                conn.execute(
                    "INSERT INTO project_fleet (project_id, vehicle_id, driver_id, date_from, date_to) VALUES (?,?,?,?,?)",
                    (pid, vehicle_id, body.get("driver_id") or None,
                     body.get("date_from") or None, body.get("date_to") or None)
                )
                conn.execute("UPDATE fleet SET status='on_project', current_project_id=?, updated_at=? WHERE id=?",
                             (pid, now, vehicle_id))
                conn.commit()
                json_response(self, {"ok": True})
            finally:
                conn.close()

    def _api_remove_crew_assignment(self, pid, assignment_id):
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                row = conn.execute("SELECT crew_id FROM project_crew WHERE id=? AND project_id=?",
                                   (assignment_id, pid)).fetchone()
                if row:
                    crew_id = row["crew_id"]
                    conn.execute("DELETE FROM project_crew WHERE id=?", (assignment_id,))
                    # If no other active assignments, set back to available
                    still_assigned = conn.execute(
                        "SELECT COUNT(*) FROM project_crew WHERE crew_id=?", (crew_id,)).fetchone()[0]
                    if not still_assigned:
                        conn.execute("UPDATE crew SET status='available', updated_at=? WHERE id=?", (now, crew_id))
                conn.commit()
                json_response(self, {"ok": True})
            finally:
                conn.close()

    def _api_remove_equipment_assignment(self, pid, assignment_id):
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                row = conn.execute("SELECT equipment_id FROM project_equipment WHERE id=? AND project_id=?",
                                   (assignment_id, pid)).fetchone()
                if row:
                    eid = row["equipment_id"]
                    conn.execute("DELETE FROM project_equipment WHERE id=?", (assignment_id,))
                    still_assigned = conn.execute(
                        "SELECT COUNT(*) FROM project_equipment WHERE equipment_id=?", (eid,)).fetchone()[0]
                    if not still_assigned:
                        conn.execute("UPDATE equipment SET status='available', current_project_id=NULL, updated_at=? WHERE id=?",
                                     (now, eid))
                conn.commit()
                json_response(self, {"ok": True})
            finally:
                conn.close()

    def _api_remove_fleet_assignment(self, pid, assignment_id):
        with _db_lock:
            conn = get_conn()
            try:
                now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
                row = conn.execute("SELECT vehicle_id FROM project_fleet WHERE id=? AND project_id=?",
                                   (assignment_id, pid)).fetchone()
                if row:
                    vid = row["vehicle_id"]
                    conn.execute("DELETE FROM project_fleet WHERE id=?", (assignment_id,))
                    still_assigned = conn.execute(
                        "SELECT COUNT(*) FROM project_fleet WHERE vehicle_id=?", (vid,)).fetchone()[0]
                    if not still_assigned:
                        conn.execute("UPDATE fleet SET status='available', current_project_id=NULL, updated_at=? WHERE id=?",
                                     (now, vid))
                conn.commit()
                json_response(self, {"ok": True})
            finally:
                conn.close()

# ── Reports ────────────────────────────────────────────────────────────────
    def _api_reports(self):
        conn = get_conn()
        try:
            def scalar(q, *p):
                return conn.execute(q, p).fetchone()[0] or 0

            projects_by_status = {r["status"]: r["cnt"] for r in conn.execute(
                "SELECT status, COUNT(*) as cnt FROM projects GROUP BY status").fetchall()}

            equipment_by_status = {r["status"]: r["cnt"] for r in conn.execute(
                "SELECT status, COUNT(*) as cnt FROM equipment GROUP BY status").fetchall()}

            fleet_by_status = {r["status"]: r["cnt"] for r in conn.execute(
                "SELECT status, COUNT(*) as cnt FROM fleet GROUP BY status").fetchall()}

            crew_by_status = {r["status"]: r["cnt"] for r in conn.execute(
                "SELECT status, COUNT(*) as cnt FROM crew GROUP BY status").fetchall()}

            offers_by_status = {r["status"]: r["cnt"] for r in conn.execute(
                "SELECT status, COUNT(*) as cnt FROM offers GROUP BY status").fetchall()}

            pipeline_value = scalar(
                "SELECT COALESCE(SUM(total_value),0) FROM offers WHERE status IN ('sent','negotiation','won')")
            won_value = scalar("SELECT COALESCE(SUM(total_value),0) FROM offers WHERE status='won'")

            maintenance_due = [dict(r) for r in conn.execute(
                "SELECT name, code, maintenance_due FROM equipment WHERE maintenance_due IS NOT NULL "
                "AND maintenance_due <= date('now','+30 days') ORDER BY maintenance_due").fetchall()]

            insurance_due = [dict(r) for r in conn.execute(
                "SELECT name, registration, insurance_expiry FROM fleet WHERE insurance_expiry IS NOT NULL "
                "AND insurance_expiry <= date('now','+30 days') ORDER BY insurance_expiry").fetchall()]

            fleet_maintenance_due = [dict(r) for r in conn.execute(
                "SELECT name, registration, maintenance_due FROM fleet WHERE maintenance_due IS NOT NULL "
                "AND maintenance_due <= date('now','+30 days') ORDER BY maintenance_due").fetchall()]

            recent_projects = [dict(r) for r in conn.execute(
                "SELECT p.*, c.name as client_name FROM projects p "
                "LEFT JOIN clients c ON c.id=p.client_id "
                "WHERE p.status IN ('in_progress','confirmed') ORDER BY p.start_date LIMIT 10").fetchall()]

            json_response(self, {
                "projects_by_status": projects_by_status,
                "equipment_by_status": equipment_by_status,
                "fleet_by_status": fleet_by_status,
                "crew_by_status": crew_by_status,
                "offers_by_status": offers_by_status,
                "pipeline_value": pipeline_value,
                "won_value": won_value,
                "maintenance_due": maintenance_due,
                "insurance_due": insurance_due,
                "fleet_maintenance_due": fleet_maintenance_due,
                "active_projects": recent_projects,
            })
        finally:
            conn.close()

# ── CAFLOU Import ───────────────────────────────────────────────────────────
    def _api_import(self, body):
        entity_type = (body.get("entity_type") or "").strip()
        csv_text = body.get("csv_text") or ""
        delimiter = body.get("delimiter") or ";"
        if not entity_type or not csv_text.strip():
            error_response(self, "entity_type and csv_text required"); return
        try:
            if entity_type == "clients":
                result = self._import_clients_csv(csv_text, delimiter)
            elif entity_type == "projects":
                result = self._import_projects_csv(csv_text, delimiter)
            elif entity_type == "crew":
                result = self._import_crew_csv(csv_text, delimiter)
            else:
                error_response(self, "Unknown entity_type"); return
            json_response(self, result)
        except Exception as e:
            error_response(self, f"Import error: {e}")

    def _import_clients_csv(self, csv_text, delimiter):
        # Column aliases: normalized header → field name
        COL_MAP = {
            'nazev': 'name', 'jmeno firmy': 'name', 'company': 'name', 'name': 'name',
            'firma': 'name', 'spolecnost': 'name',
            'ico': 'ico', 'ic': 'ico',
            'dic': 'vat_number', 'vat': 'vat_number', 'vat number': 'vat_number',
            'email': 'email', 'e-mail': 'email', 'mail': 'email',
            'telefon': 'phone', 'phone': 'phone', 'tel': 'phone', 'mobil': 'phone',
            'adresa': 'address', 'address': 'address', 'ulice': 'address', 'sidlo': 'address',
            'stat': 'country', 'zeme': 'country', 'country': 'country',
            'kontaktni osoba': 'contact_person', 'kontakt': 'contact_person',
            'contact': 'contact_person', 'contact person': 'contact_person',
            'poznamky': 'notes', 'notes': 'notes', 'poznamka': 'notes',
        }
        reader = csv.DictReader(csv_text.splitlines(), delimiter=delimiter)
        # Build header mapping: original col name → field name
        hdr_map = {}
        for col in (reader.fieldnames or []):
            norm = _normalize_col(col)
            if norm in COL_MAP:
                hdr_map[col] = COL_MAP[norm]
            else:
                # Try partial match for multi-word keys
                for alias, field in COL_MAP.items():
                    if alias in norm or norm in alias:
                        hdr_map[col] = field
                        break
        created = skipped = 0
        errors = []
        now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
        with _db_lock:
            conn = get_conn()
            try:
                for i, row in enumerate(reader):
                    mapped = {}
                    for col, val in row.items():
                        if col in hdr_map:
                            mapped[hdr_map[col]] = (val or "").strip()
                    name = mapped.get('name', '').strip()
                    if not name:
                        continue
                    # Skip if client with same name already exists
                    exists = conn.execute("SELECT id FROM clients WHERE name=?", (name,)).fetchone()
                    if exists:
                        skipped += 1
                        continue
                    conn.execute(
                        "INSERT INTO clients (name,contact_person,email,phone,address,country,"
                        "ico,vat_number,notes,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                        (name, mapped.get('contact_person',''), mapped.get('email',''),
                         mapped.get('phone',''), mapped.get('address',''),
                         mapped.get('country','CZ') or 'CZ',
                         mapped.get('ico',''), mapped.get('vat_number',''),
                         mapped.get('notes',''), now, now)
                    )
                    created += 1
                conn.commit()
            except Exception as e:
                errors.append(str(e))
            finally:
                conn.close()
        return {"created": created, "skipped": skipped, "errors": errors}

    def _import_projects_csv(self, csv_text, delimiter):
        COL_MAP = {
            'nazev': 'name', 'name': 'name', 'projekt': 'name', 'project': 'name',
            'nazev projektu': 'name',
            'klient': 'client_name', 'client': 'client_name', 'zakaznik': 'client_name',
            'customer': 'client_name',
            'stav': 'status', 'status': 'status', 'stav projektu': 'status',
            'zacatek': 'start_date', 'datum zahajeni': 'start_date', 'start': 'start_date',
            'start date': 'start_date', 'od': 'start_date',
            'konec': 'end_date', 'datum ukonceni': 'end_date', 'end': 'end_date',
            'end date': 'end_date', 'do': 'end_date',
            'rozpocet': 'budget_total', 'budget': 'budget_total', 'celkem': 'budget_total',
            'hodnota': 'budget_total', 'cena': 'budget_total',
            'misto': 'location', 'location': 'location', 'lokalita': 'location',
            'popis': 'description', 'description': 'description',
            'poznamky': 'notes', 'notes': 'notes',
        }
        reader = csv.DictReader(csv_text.splitlines(), delimiter=delimiter)
        hdr_map = {}
        for col in (reader.fieldnames or []):
            norm = _normalize_col(col)
            if norm in COL_MAP:
                hdr_map[col] = COL_MAP[norm]
            else:
                for alias, field in COL_MAP.items():
                    if alias in norm or norm in alias:
                        hdr_map[col] = field
                        break
        created = skipped = 0
        errors = []
        now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
        year = datetime.now(timezone.utc).year
        with _db_lock:
            conn = get_conn()
            try:
                for row in reader:
                    mapped = {}
                    for col, val in row.items():
                        if col in hdr_map:
                            mapped[hdr_map[col]] = (val or "").strip()
                    name = mapped.get('name', '').strip()
                    if not name:
                        continue
                    exists = conn.execute("SELECT id FROM projects WHERE name=?", (name,)).fetchone()
                    if exists:
                        skipped += 1
                        continue
                    # Look up client
                    client_id = None
                    client_name = mapped.get('client_name', '')
                    if client_name:
                        cr = conn.execute("SELECT id FROM clients WHERE name=?", (client_name,)).fetchone()
                        if cr:
                            client_id = cr[0]
                    # Auto-code
                    count = conn.execute("SELECT COUNT(*) FROM projects WHERE code LIKE ?",
                                        (f"PRJ-{year}-%",)).fetchone()[0]
                    code = f"PRJ-{year}-{count+1:03d}"
                    status = _map_caflou_project_status(mapped.get('status', ''))
                    start_date = _parse_caflou_date(mapped.get('start_date'))
                    end_date = _parse_caflou_date(mapped.get('end_date'))
                    budget = 0.0
                    try:
                        raw_budget = mapped.get('budget_total', '0').replace(',', '.').replace(' ', '').replace('\xa0', '')
                        budget = float(raw_budget) if raw_budget else 0.0
                    except Exception:
                        pass
                    conn.execute(
                        "INSERT INTO projects (code,name,client_id,status,start_date,end_date,"
                        "location,budget_total,description,notes,created_at,updated_at) "
                        "VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                        (code, name, client_id, status, start_date, end_date,
                         mapped.get('location',''), budget,
                         mapped.get('description',''), mapped.get('notes',''), now, now)
                    )
                    created += 1
                conn.commit()
            except Exception as e:
                errors.append(str(e))
            finally:
                conn.close()
        return {"created": created, "skipped": skipped, "errors": errors}

    def _import_crew_csv(self, csv_text, delimiter):
        COL_MAP = {
            'jmeno': 'first_name', 'krestni jmeno': 'first_name', 'first name': 'first_name',
            'firstname': 'first_name', 'first': 'first_name',
            'prijmeni': 'last_name', 'last name': 'last_name', 'lastname': 'last_name',
            'last': 'last_name', 'surname': 'last_name',
            # Handle "Celé jméno" / "Full name" → split on space
            'cele jmeno': 'full_name', 'full name': 'full_name', 'fullname': 'full_name',
            'name': 'full_name', 'jmeno prijmeni': 'full_name',
            'email': 'email', 'e-mail': 'email', 'mail': 'email',
            'telefon': 'phone', 'phone': 'phone', 'tel': 'phone', 'mobil': 'phone',
            'pozice': 'position', 'funkce': 'position', 'position': 'position',
            'role': 'position', 'pracovni pozice': 'position', 'job title': 'position',
            'poznamky': 'notes', 'notes': 'notes',
        }
        reader = csv.DictReader(csv_text.splitlines(), delimiter=delimiter)
        hdr_map = {}
        for col in (reader.fieldnames or []):
            norm = _normalize_col(col)
            if norm in COL_MAP:
                hdr_map[col] = COL_MAP[norm]
            else:
                for alias, field in COL_MAP.items():
                    if alias in norm or norm in alias:
                        hdr_map[col] = field
                        break
        created = skipped = 0
        errors = []
        now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
        with _db_lock:
            conn = get_conn()
            try:
                for row in reader:
                    mapped = {}
                    for col, val in row.items():
                        if col in hdr_map:
                            mapped[hdr_map[col]] = (val or "").strip()
                    # Resolve first/last name
                    first = mapped.get('first_name', '')
                    last = mapped.get('last_name', '')
                    if not first and not last and mapped.get('full_name'):
                        parts = mapped['full_name'].split(None, 1)
                        first = parts[0] if parts else ''
                        last = parts[1] if len(parts) > 1 else ''
                    if not first and not last:
                        continue
                    email = mapped.get('email', '')
                    # Skip if email matches existing crew member
                    if email:
                        exists = conn.execute("SELECT id FROM crew WHERE email=?", (email,)).fetchone()
                    else:
                        exists = conn.execute("SELECT id FROM crew WHERE first_name=? AND last_name=?",
                                              (first, last)).fetchone()
                    if exists:
                        skipped += 1
                        continue
                    conn.execute(
                        "INSERT INTO crew (first_name,last_name,email,phone,position,status,notes,created_at,updated_at) "
                        "VALUES (?,?,?,?,?,?,?,?,?)",
                        (first, last, email, mapped.get('phone',''),
                         mapped.get('position',''), 'available',
                         mapped.get('notes',''), now, now)
                    )
                    created += 1
                conn.commit()
            except Exception as e:
                errors.append(str(e))
            finally:
                conn.close()
        return {"created": created, "skipped": skipped, "errors": errors}


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
