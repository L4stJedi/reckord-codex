// Reckord Codex – SPA frontend

// ---------------------------------------------------------------------------
// 1. TRANSLATIONS
// ---------------------------------------------------------------------------
const LANGS = {
  en: {
    // Nav
    'nav.main': 'Main', 'nav.operations': 'Operations', 'nav.commercial': 'Commercial',
    'nav.reports': 'Reports', 'nav.dashboard': 'Dashboard', 'nav.projects': 'Projects',
    'nav.clients': 'Clients', 'nav.equipment': 'Equipment', 'nav.fleet': 'Fleet',
    'nav.crew': 'Crew', 'nav.offers': 'Offers', 'nav.overview': 'Reporting',
    // Roles
    'role.opsManager': 'Operations Manager', 'role.admin': 'Admin', 'role.crew': 'Crew',
    // Screens
    'screen.dashboard': 'Dashboard', 'screen.projects': 'Projects',
    'screen.projectDetail': 'Project Detail', 'screen.clients': 'Clients',
    'screen.equipment': 'Equipment & Warehouse', 'screen.fleet': 'Fleet Management',
    'screen.crew': 'Crew', 'screen.offers': 'Offers & Finance',
    'screen.reports': 'Management Overview',
    // Placeholders
    'ph.searchAnything': 'Search anything\u2026', 'ph.searchProjects': 'Search projects\u2026',
    'ph.searchClients': 'Search clients\u2026', 'ph.searchAsset': 'Search or scan asset tag\u2026',
    'ph.searchVehicles': 'Search vehicles\u2026', 'ph.searchCrew': 'Search crew members\u2026',
    'ph.searchOffers': 'Search offers\u2026',
    // Buttons
    'btn.newProject': '+ New Project', 'btn.filter': 'Filter', 'btn.viewAll': 'View all',
    'btn.scanQR': 'Scan QR', 'btn.addAsset': '+ Add Asset', 'btn.addVehicle': '+ Add Vehicle',
    'btn.addMember': '+ Add Member', 'btn.newOffer': '+ New Offer', 'btn.exportPDF': 'Export PDF',
    'btn.newClient': '+ New Client', 'btn.edit': 'Edit', 'btn.createOffer': 'Create Offer',
    'btn.back': '\u2190 Back', 'btn.approveAll': 'Approve all',
    'btn.reportIssue': 'Report Issue', 'btn.requestLeave': 'Request Leave',
    'btn.followUp': 'Follow up', 'btn.assign': 'Assign', 'btn.review': 'Review',
    'btn.fix': 'Fix', 'btn.open': 'Open', 'btn.view': 'View', 'btn.add': '+ Add',
    'btn.cancel': 'Cancel', 'btn.createProject': 'Create Project', 'btn.saveClient': 'Save Client',
    'btn.save': 'Save', 'btn.delete': 'Delete',
    // Quick actions
    'qa.newProject': 'New Project', 'qa.newClient': 'New Client', 'qa.newOffer': 'New Offer',
    'qa.addCrew': 'Add Crew', 'qa.addVehicle': 'Add Vehicle', 'qa.addAsset': 'Add Asset',
    // Card titles
    'ct.activeProjects': '\ud83d\udcc1 Active Projects', 'ct.quickActions': '\u26a1 Quick Actions',
    'ct.fleetStatus': '\ud83d\ude9b Fleet Status', 'ct.attention': '\ud83d\udd14 Requires Attention',
    'ct.crewAssignments': '\ud83d\udc65 Crew Assignments', 'ct.fleet': '\ud83d\ude9b Fleet',
    'ct.projectAlerts': '\ud83d\udd14 Project Alerts', 'ct.activityLog': '\ud83d\udccb Activity Log',
    'ct.pipeline': '\ud83d\udcca Project Pipeline', 'ct.utilization': '\ud83d\ude9b Utilization by Asset Type',
    'ct.flags72h': '\u26a1 Operational Next 72h \u2013 Flags',
    'ct.crewMembers': '\ud83d\udc65 Crew Members', 'ct.leaveRequests': '\ud83d\udcc5 Leave Requests',
    // Table headers
    'th.project': 'Project', 'th.client': 'Client', 'th.dates': 'Dates',
    'th.location': 'Location', 'th.status': 'Status', 'th.manager': 'Manager',
    'th.company': 'Company', 'th.contact': 'Contact', 'th.country': 'Country',
    'th.projects': 'Projects', 'th.assetTag': 'Asset Tag', 'th.item': 'Item',
    'th.category': 'Category', 'th.serial': 'Serial', 'th.vehicle': 'Vehicle',
    'th.registration': 'Registration', 'th.type': 'Type', 'th.assignedTo': 'Assigned To',
    'th.nextService': 'Next Service', 'th.offerNum': 'Offer #', 'th.total': 'Total',
    'th.discount': 'Discount', 'th.stage': 'Stage', 'th.approval': 'Approval',
    'th.budget': 'Budget', 'th.name': 'Name', 'th.code': 'Code', 'th.driver': 'Driver',
    'th.quantity': 'Qty', 'th.role': 'Role',
    // Pills
    'pill.active': 'Active', 'pill.confirmed': 'Confirmed', 'pill.negotiation': 'Negotiation',
    'pill.offerSent': 'Offer Sent', 'pill.request': 'Request', 'pill.onProject': 'On Project',
    'pill.inService': 'In Service', 'pill.available': 'Available', 'pill.inStock': 'In Stock',
    'pill.faulty': 'Faulty', 'pill.assigned': 'Assigned', 'pill.vacation': 'Vacation',
    'pill.normal': 'Normal', 'pill.watch': 'Watch', 'pill.critical': 'Critical',
    'pill.warning': 'Warning', 'pill.pending': 'Pending', 'pill.approved': 'Approved',
    'pill.rejected': 'Rejected', 'pill.maintenanceDue': 'Maintenance Due',
    'pill.autoApproved': 'Auto-approved', 'pill.accepted': 'Accepted', 'pill.sent': 'Sent', 'pill.ok': 'OK',
    // Chips
    'chip.all': 'All', 'chip.active': 'Active', 'chip.offerStage': 'Offer Stage',
    'chip.completed': 'Completed',
    // Tabs
    'tab.overview': 'Overview', 'tab.activity': 'Activity', 'tab.offer': 'Offer',
    // Stats
    'stat.activeProjects': 'Active Projects', 'stat.crewOnDuty': 'Crew on Duty',
    'stat.pendingOffers': 'Pending Offers', 'stat.fleetUtil': 'Fleet Utilization',
    'stat.totalAssets': 'Total Assets', 'stat.inStock': 'In Stock', 'stat.onProject': 'On Project',
    'stat.maintenanceFaulty': 'Maintenance / Faulty', 'stat.totalVehicles': 'Total Vehicles',
    'stat.available': 'Available', 'stat.inService': 'In Service',
    'stat.revPipeline': 'Revenue Pipeline', 'stat.avgMargin': 'Average Margin',
    'stat.truckUtil': 'Truck Utilization', 'stat.winRate': 'Quote Win Rate',
    'stat.pipelineVal': 'Pipeline Value', 'stat.confirmed': 'Confirmed',
    'stat.pendingApproval': 'Pending Approval', 'stat.winRate90': 'Win Rate (90d)',
    // Labels
    'label.projectName': 'Project Name', 'label.client': 'Client',
    'label.projectManager': 'Project Manager', 'label.startDate': 'Start Date',
    'label.endDate': 'End Date', 'label.location': 'Location', 'label.notes': 'Notes',
    'label.companyName': 'Company Name', 'label.contactPerson': 'Contact Person',
    'label.email': 'Email', 'label.phone': 'Phone', 'label.country': 'Country',
    'label.vatNumber': 'VAT Number', 'label.riskFlag': 'Risk Flag',
    'label.billingAddress': 'Billing Address', 'label.address': 'Address',
    // Modals
    'modal.newProject': '\ud83d\udcc1 New Project', 'modal.newClient': '\ud83c\udfe2 New Client',
    // Status
    'status.planning': 'Planning', 'status.confirmed': 'Confirmed',
    'status.in_progress': 'In Progress', 'status.completed': 'Completed',
    'status.cancelled': 'Cancelled',
    // Project detail
    'proj.code': 'Code', 'proj.location': 'Location', 'proj.venue': 'Venue',
    'proj.budget': 'Budget', 'proj.budget_total': 'Total Budget', 'proj.budget_spent': 'Spent',
    'proj.description': 'Description', 'proj.remaining': 'Remaining', 'proj.role': 'Role',
    'proj.no_data': 'No projects found', 'proj.edit': 'Edit Project',
    'proj.delete_confirm': 'Are you sure you want to delete this project?', 'proj.of': 'of',
    // Client
    'client.no_data': 'No clients yet',
    // Dashboard
    'dash.no_projects': 'No projects yet. Create your first project.',
    'dash.active_projects': 'Active Projects', 'dash.crew_available': 'Crew Available',
    'dash.total_equipment': 'Total Equipment', 'dash.total_fleet': 'Total Fleet',
    'dash.recent_projects': 'Recent Projects',
    // Messages
    'msg.coming_soon': 'This module is coming soon.', 'msg.loading': 'Loading...',
    'msg.no_data': 'No data', 'msg.saved': 'Saved successfully', 'msg.deleted': 'Deleted',
    'msg.error': 'An error occurred',
  },
  cs: {
    'nav.main': 'Hlavn\u00ed', 'nav.operations': 'Provoz', 'nav.commercial': 'Obchod',
    'nav.reports': 'P\u0159ehledy', 'nav.dashboard': 'P\u0159ehled', 'nav.projects': 'Projekty',
    'nav.clients': 'Klienti', 'nav.equipment': 'Technika', 'nav.fleet': 'Vozov\u00fd park',
    'nav.crew': '\u0160t\u00e1b', 'nav.offers': 'Nab\u00eddky', 'nav.overview': 'Reporting',
    'role.opsManager': 'Provozn\u00ed mana\u017eer', 'role.admin': 'Admin', 'role.crew': '\u010clen \u0161t\u00e1bu',
    'screen.dashboard': 'P\u0159ehled', 'screen.projects': 'Projekty',
    'screen.projectDetail': 'Detail projektu', 'screen.clients': 'Klienti',
    'screen.equipment': 'Technika a sklad', 'screen.fleet': 'Spr\u00e1va vozov\u00e9ho parku',
    'screen.crew': '\u0160t\u00e1b', 'screen.offers': 'Nab\u00eddky a finance',
    'screen.reports': 'Mana\u017eersk\u00fd p\u0159ehled',
    'ph.searchAnything': 'Hledat\u2026', 'ph.searchProjects': 'Hledat projekty\u2026',
    'ph.searchClients': 'Hledat klienty\u2026', 'ph.searchAsset': 'Hledat nebo naskenovat \u0161t\u00edtek\u2026',
    'ph.searchVehicles': 'Hledat vozidla\u2026', 'ph.searchCrew': 'Hledat \u010dleny \u0161t\u00e1bu\u2026',
    'ph.searchOffers': 'Hledat nab\u00eddky\u2026',
    'btn.newProject': '+ Nov\u00fd projekt', 'btn.filter': 'Filtrovat', 'btn.viewAll': 'Zobrazit v\u0161e',
    'btn.scanQR': 'Skenovat QR', 'btn.addAsset': '+ P\u0159idat polo\u017eku',
    'btn.addVehicle': '+ P\u0159idat vozidlo', 'btn.addMember': '+ P\u0159idat \u010dlena',
    'btn.newOffer': '+ Nov\u00e1 nab\u00eddka', 'btn.exportPDF': 'Export PDF',
    'btn.newClient': '+ Nov\u00fd klient', 'btn.edit': 'Upravit',
    'btn.createOffer': 'Vytvo\u0159it nab\u00eddku', 'btn.back': '\u2190 Zp\u011bt',
    'btn.approveAll': 'Schv\u00e1lit v\u0161e', 'btn.reportIssue': 'Nahl\u00e1sit probl\u00e9m',
    'btn.requestLeave': '\u017d\u00e1dat dovolenou', 'btn.followUp': 'Sledovat',
    'btn.assign': 'P\u0159i\u0159adit', 'btn.review': 'Zkontrolovat', 'btn.fix': 'Opravit',
    'btn.open': 'Otev\u0159\u00edt', 'btn.view': 'Zobrazit', 'btn.add': '+ P\u0159idat',
    'btn.cancel': 'Zru\u0161it', 'btn.createProject': 'Vytvo\u0159it projekt',
    'btn.saveClient': 'Ulo\u017eit klienta', 'btn.save': 'Ulo\u017eit', 'btn.delete': 'Smazat',
    'qa.newProject': 'Nov\u00fd projekt', 'qa.newClient': 'Nov\u00fd klient',
    'qa.newOffer': 'Nov\u00e1 nab\u00eddka', 'qa.addCrew': 'P\u0159idat \u010dlena',
    'qa.addVehicle': 'P\u0159idat vozidlo', 'qa.addAsset': 'P\u0159idat techniku',
    'ct.activeProjects': '\ud83d\udcc1 Aktivn\u00ed projekty', 'ct.quickActions': '\u26a1 Rychl\u00e9 akce',
    'ct.fleetStatus': '\ud83d\ude9b Stav vozov\u00e9ho parku', 'ct.attention': '\ud83d\udd14 Vy\u017eaduje pozornost',
    'ct.crewAssignments': '\ud83d\udc65 P\u0159i\u0159azen\u00ed \u0161t\u00e1bu', 'ct.fleet': '\ud83d\ude9b Vozov\u00fd park',
    'ct.projectAlerts': '\ud83d\udd14 Upozorn\u011bn\u00ed projektu', 'ct.activityLog': '\ud83d\udccb Protokol aktivit',
    'ct.pipeline': '\ud83d\udcca Pipeline projekt\u016f', 'ct.utilization': '\ud83d\ude9b Vyu\u017eit\u00ed techniky',
    'ct.flags72h': '\u26a1 Provoz \u2013 p\u0159\u00ed\u0161t\u00edch 72h',
    'ct.crewMembers': '\ud83d\udc65 \u010clenov\u00e9 \u0161t\u00e1bu', 'ct.leaveRequests': '\ud83d\udcc5 \u017d\u00e1dosti o dovolenou',
    'th.project': 'Projekt', 'th.client': 'Klient', 'th.dates': 'Term\u00edn',
    'th.location': 'M\u00edsto', 'th.status': 'Stav', 'th.manager': 'Mana\u017eer',
    'th.company': 'Firma', 'th.contact': 'Kontakt', 'th.country': 'Zem\u011b',
    'th.projects': 'Projekty', 'th.assetTag': '\u0160t\u00edtek', 'th.item': 'Polo\u017eka',
    'th.category': 'Kategorie', 'th.serial': 'S\u00e9riov\u00e9 \u010d.', 'th.vehicle': 'Vozidlo',
    'th.registration': 'SPZ', 'th.type': 'Typ', 'th.assignedTo': 'P\u0159i\u0159azeno k',
    'th.nextService': 'P\u0159\u00ed\u0161t\u00ed servis', 'th.offerNum': 'Nab\u00eddka \u010d.',
    'th.total': 'Celkem', 'th.discount': 'Sleva', 'th.stage': 'F\u00e1ze',
    'th.approval': 'Schv\u00e1len\u00ed', 'th.budget': 'Rozpo\u010det', 'th.name': 'N\u00e1zev',
    'th.code': 'K\u00f3d', 'th.driver': '\u0158idi\u010d', 'th.quantity': 'Mn.', 'th.role': 'Role',
    'pill.active': 'Aktivn\u00ed', 'pill.confirmed': 'Potvrzeno', 'pill.negotiation': 'Jedn\u00e1n\u00ed',
    'pill.offerSent': 'Nab\u00eddka odesl\u00e1na', 'pill.request': 'Popt\u00e1vka',
    'pill.onProject': 'Na projektu', 'pill.inService': 'V servisu',
    'pill.available': 'Dostupn\u00fd', 'pill.inStock': 'Na sklad\u011b', 'pill.faulty': 'Vadn\u00fd',
    'pill.assigned': 'P\u0159i\u0159azeno', 'pill.vacation': 'Dovolen\u00e1', 'pill.normal': 'Norm\u00e1ln\u00ed',
    'pill.watch': 'Sledovat', 'pill.critical': 'Kritick\u00e9', 'pill.warning': 'Varov\u00e1n\u00ed',
    'pill.pending': '\u010cek\u00e1', 'pill.approved': 'Schv\u00e1leno', 'pill.rejected': 'Zam\u00edtnuto',
    'pill.maintenanceDue': 'Servis nutn\u00fd', 'pill.autoApproved': 'Auto-schv\u00e1leno',
    'pill.accepted': 'P\u0159ijato', 'pill.sent': 'Odesl\u00e1no', 'pill.ok': 'OK',
    'chip.all': 'V\u0161e', 'chip.active': 'Aktivn\u00ed', 'chip.offerStage': 'Ve f\u00e1zi nab\u00eddky',
    'chip.completed': 'Dokon\u010deno',
    'tab.overview': 'P\u0159ehled', 'tab.activity': 'Aktivita', 'tab.offer': 'Nab\u00eddka',
    'stat.activeProjects': 'Aktivn\u00ed projekty', 'stat.crewOnDuty': '\u0160t\u00e1b ve slu\u017eb\u011b',
    'stat.pendingOffers': '\u010cekaj\u00edc\u00ed nab\u00eddky', 'stat.fleetUtil': 'Vyu\u017eit\u00ed vozov\u00e9ho parku',
    'stat.totalAssets': 'Celkem polo\u017eek', 'stat.inStock': 'Na sklad\u011b', 'stat.onProject': 'Na projektu',
    'stat.maintenanceFaulty': 'Servis / Vadn\u00e9', 'stat.totalVehicles': 'Celkem vozidel',
    'stat.available': 'Dostupn\u00fdch', 'stat.inService': 'V servisu',
    'stat.revPipeline': 'Obchodn\u00ed pipeline', 'stat.avgMargin': 'Pr\u016fm\u011brn\u00e1 mar\u017ee',
    'stat.truckUtil': 'Vyu\u017eit\u00ed truck\u016f', 'stat.winRate': '\u00dasp\u011b\u0161nost nab\u00eddek',
    'stat.pipelineVal': 'Hodnota pipeline', 'stat.confirmed': 'Potvrzeno',
    'stat.pendingApproval': '\u010cek\u00e1 na schv\u00e1len\u00ed', 'stat.winRate90': '\u00dasp\u011b\u0161nost (90d)',
    'label.projectName': 'N\u00e1zev projektu', 'label.client': 'Klient',
    'label.projectManager': 'Projektov\u00fd mana\u017eer', 'label.startDate': 'Datum zah\u00e1jen\u00ed',
    'label.endDate': 'Datum ukon\u010den\u00ed', 'label.location': 'M\u00edsto kon\u00e1n\u00ed',
    'label.notes': 'Pozn\u00e1mky', 'label.companyName': 'N\u00e1zev firmy',
    'label.contactPerson': 'Kontaktn\u00ed osoba', 'label.email': 'E-mail', 'label.phone': 'Telefon',
    'label.country': 'Zem\u011b', 'label.vatNumber': 'DI\u010c', 'label.riskFlag': 'Rizikov\u00fd p\u0159\u00edznak',
    'label.billingAddress': 'Faktura\u010dn\u00ed adresa', 'label.address': 'Adresa',
    'modal.newProject': '\ud83d\udcc1 Nov\u00fd projekt', 'modal.newClient': '\ud83c\udfe2 Nov\u00fd klient',
    'status.planning': 'Pl\u00e1nov\u00e1n\u00ed', 'status.confirmed': 'Potvrzeno',
    'status.in_progress': 'Prob\u00edh\u00e1', 'status.completed': 'Dokon\u010deno',
    'status.cancelled': 'Zru\u0161eno',
    'proj.code': 'K\u00f3d', 'proj.location': 'M\u00edsto', 'proj.venue': 'Venue',
    'proj.budget': 'Rozpo\u010det', 'proj.budget_total': 'Celkov\u00fd rozpo\u010det',
    'proj.budget_spent': 'Vy\u010derpano', 'proj.description': 'Popis',
    'proj.remaining': 'Zb\u00fdv\u00e1', 'proj.role': 'Role', 'proj.no_data': '\u017d\u00e1dn\u00e9 projekty',
    'proj.edit': 'Upravit projekt',
    'proj.delete_confirm': 'Opravdu chcete smazat tento projekt?', 'proj.of': 'z',
    'client.no_data': '\u017d\u00e1dn\u00ed klienti',
    'dash.no_projects': 'Zat\u00edm \u017e\u00e1dn\u00e9 projekty.',
    'dash.active_projects': 'Aktivn\u00ed projekty', 'dash.crew_available': 'Dostupn\u00fd \u0161t\u00e1b',
    'dash.total_equipment': 'Celkem techniky', 'dash.total_fleet': 'Celkem vozidel',
    'dash.recent_projects': 'Posledn\u00ed projekty',
    'msg.coming_soon': 'Tento modul bude brzy k dispozici.', 'msg.loading': 'Na\u010d\u00edt\u00e1m...',
    'msg.no_data': '\u017d\u00e1dn\u00e1 data', 'msg.saved': 'Ulo\u017eeno', 'msg.deleted': 'Smazano',
    'msg.error': 'Nastala chyba',
  },
  pl: {
    'nav.main': 'G\u0142\u00f3wne', 'nav.operations': 'Operacje', 'nav.commercial': 'Sprzeda\u017c',
    'nav.reports': 'Raporty', 'nav.dashboard': 'Pulpit', 'nav.projects': 'Projekty',
    'nav.clients': 'Klienci', 'nav.equipment': 'Sprz\u0119t', 'nav.fleet': 'Flota',
    'nav.crew': 'Ekipa', 'nav.offers': 'Oferty', 'nav.overview': 'Reporting',
    'role.opsManager': 'Kierownik operacyjny', 'role.admin': 'Admin', 'role.crew': 'Ekipa',
    'screen.dashboard': 'Pulpit', 'screen.projects': 'Projekty',
    'screen.projectDetail': 'Szczeg\u00f3\u0142y projektu', 'screen.clients': 'Klienci',
    'screen.equipment': 'Sprz\u0119t i magazyn', 'screen.fleet': 'Zarz\u0105dzanie flot\u0105',
    'screen.crew': 'Ekipa', 'screen.offers': 'Oferty i finanse',
    'screen.reports': 'Przegl\u0105d zarz\u0105du',
    'ph.searchAnything': 'Szukaj\u2026', 'ph.searchProjects': 'Szukaj projekt\u00f3w\u2026',
    'ph.searchClients': 'Szukaj klient\u00f3w\u2026', 'ph.searchAsset': 'Szukaj lub skanuj etykiet\u0119\u2026',
    'ph.searchVehicles': 'Szukaj pojazd\u00f3w\u2026', 'ph.searchCrew': 'Szukaj cz\u0142onk\u00f3w ekipy\u2026',
    'ph.searchOffers': 'Szukaj ofert\u2026',
    'btn.newProject': '+ Nowy projekt', 'btn.filter': 'Filtruj', 'btn.viewAll': 'Poka\u017c wszystkie',
    'btn.scanQR': 'Skanuj QR', 'btn.addAsset': '+ Dodaj sprz\u0119t',
    'btn.addVehicle': '+ Dodaj pojazd', 'btn.addMember': '+ Dodaj cz\u0142onka',
    'btn.newOffer': '+ Nowa oferta', 'btn.exportPDF': 'Eksport PDF',
    'btn.newClient': '+ Nowy klient', 'btn.edit': 'Edytuj',
    'btn.createOffer': 'Utw\u00f3rz ofert\u0119', 'btn.back': '\u2190 Wr\u00f3\u0107',
    'btn.approveAll': 'Zatwierd\u017a wszystko', 'btn.reportIssue': 'Zg\u0142o\u015b problem',
    'btn.requestLeave': 'Wnioskuj o urlop', 'btn.followUp': 'Monitoruj',
    'btn.assign': 'Przypisz', 'btn.review': 'Sprawd\u017a', 'btn.fix': 'Napraw',
    'btn.open': 'Otw\u00f3rz', 'btn.view': 'Wy\u015bwietl', 'btn.add': '+ Dodaj',
    'btn.cancel': 'Anuluj', 'btn.createProject': 'Utw\u00f3rz projekt',
    'btn.saveClient': 'Zapisz klienta', 'btn.save': 'Zapisz', 'btn.delete': 'Usu\u0144',
    'qa.newProject': 'Nowy projekt', 'qa.newClient': 'Nowy klient', 'qa.newOffer': 'Nowa oferta',
    'qa.addCrew': 'Dodaj cz\u0142onka', 'qa.addVehicle': 'Dodaj pojazd', 'qa.addAsset': 'Dodaj sprz\u0119t',
    'ct.activeProjects': '\ud83d\udcc1 Aktywne projekty', 'ct.quickActions': '\u26a1 Szybkie akcje',
    'ct.fleetStatus': '\ud83d\ude9b Status floty', 'ct.attention': '\ud83d\udd14 Wymaga uwagi',
    'ct.crewAssignments': '\ud83d\udc65 Przypisania ekipy', 'ct.fleet': '\ud83d\ude9b Flota',
    'ct.projectAlerts': '\ud83d\udd14 Alerty projektu', 'ct.activityLog': '\ud83d\udccb Dziennik aktywno\u015bci',
    'ct.pipeline': '\ud83d\udcca Pipeline projekt\u00f3w', 'ct.utilization': '\ud83d\ude9b Wykorzystanie sprz\u0119tu',
    'ct.flags72h': '\u26a1 Operacje \u2013 nast\u0119pne 72h',
    'ct.crewMembers': '\ud83d\udc65 Cz\u0142onkowie ekipy', 'ct.leaveRequests': '\ud83d\udcc5 Wnioski urlopowe',
    'th.project': 'Projekt', 'th.client': 'Klient', 'th.dates': 'Daty',
    'th.location': 'Lokalizacja', 'th.status': 'Status', 'th.manager': 'Kierownik',
    'th.company': 'Firma', 'th.contact': 'Kontakt', 'th.country': 'Kraj',
    'th.projects': 'Projekty', 'th.assetTag': 'Etykieta', 'th.item': 'Pozycja',
    'th.category': 'Kategoria', 'th.serial': 'Nr seryjny', 'th.vehicle': 'Pojazd',
    'th.registration': 'Rejestracja', 'th.type': 'Typ', 'th.assignedTo': 'Przypisano do',
    'th.nextService': 'Nast\u0119pny serwis', 'th.offerNum': 'Oferta nr',
    'th.total': 'Suma', 'th.discount': 'Rabat', 'th.stage': 'Etap',
    'th.approval': 'Zatwierdzenie', 'th.budget': 'Bud\u017cet', 'th.name': 'Nazwa',
    'th.code': 'Kod', 'th.driver': 'Kierowca', 'th.quantity': 'Ilo\u015b\u0107', 'th.role': 'Rola',
    'pill.active': 'Aktywny', 'pill.confirmed': 'Potwierdzone', 'pill.negotiation': 'Negocjacje',
    'pill.offerSent': 'Oferta wys\u0142ana', 'pill.request': 'Zapytanie',
    'pill.onProject': 'Na projekcie', 'pill.inService': 'W serwisie',
    'pill.available': 'Dost\u0119pny', 'pill.inStock': 'Na stanie', 'pill.faulty': 'Uszkodzony',
    'pill.assigned': 'Przypisany', 'pill.vacation': 'Urlop', 'pill.normal': 'Normalny',
    'pill.watch': 'Obserwuj', 'pill.critical': 'Krytyczne', 'pill.warning': 'Ostrze\u017cenie',
    'pill.pending': 'Oczekuje', 'pill.approved': 'Zatwierdzone', 'pill.rejected': 'Odrzucone',
    'pill.maintenanceDue': 'Wymagany serwis', 'pill.autoApproved': 'Auto-zatwierdzone',
    'pill.accepted': 'Przyj\u0119te', 'pill.sent': 'Wys\u0142ane', 'pill.ok': 'OK',
    'chip.all': 'Wszystkie', 'chip.active': 'Aktywne', 'chip.offerStage': 'Etap oferty',
    'chip.completed': 'Zako\u0144czone',
    'tab.overview': 'Przegl\u0105d', 'tab.activity': 'Aktywno\u015b\u0107', 'tab.offer': 'Oferta',
    'stat.activeProjects': 'Aktywne projekty', 'stat.crewOnDuty': 'Ekipa w pracy',
    'stat.pendingOffers': 'Oczekuj\u0105ce oferty', 'stat.fleetUtil': 'Wykorzystanie floty',
    'stat.totalAssets': 'Ca\u0142kowity sprz\u0119t', 'stat.inStock': 'Na stanie',
    'stat.onProject': 'Na projekcie', 'stat.maintenanceFaulty': 'Serwis / Uszkodzone',
    'stat.totalVehicles': '\u0141\u0105cznie pojazd\u00f3w', 'stat.available': 'Dost\u0119pnych',
    'stat.inService': 'W serwisie', 'stat.revPipeline': 'Pipeline sprzeda\u017cy',
    'stat.avgMargin': '\u015aredniamar\u017ca', 'stat.truckUtil': 'Wykorzystanie woz\u00f3w',
    'stat.winRate': 'Skuteczno\u015b\u0107 ofert', 'stat.pipelineVal': 'Warto\u015b\u0107 pipeline',
    'stat.confirmed': 'Potwierdzone', 'stat.pendingApproval': 'Oczekuje na zatwierdzenie',
    'stat.winRate90': 'Skuteczno\u015b\u0107 (90d)',
    'label.projectName': 'Nazwa projektu', 'label.client': 'Klient',
    'label.projectManager': 'Kierownik projektu', 'label.startDate': 'Data rozpocz\u0119cia',
    'label.endDate': 'Data zako\u0144czenia', 'label.location': 'Lokalizacja',
    'label.notes': 'Uwagi', 'label.companyName': 'Nazwa firmy',
    'label.contactPerson': 'Osoba kontaktowa', 'label.email': 'E-mail', 'label.phone': 'Telefon',
    'label.country': 'Kraj', 'label.vatNumber': 'NIP', 'label.riskFlag': 'Flaga ryzyka',
    'label.billingAddress': 'Adres rozliczeniowy', 'label.address': 'Adres',
    'modal.newProject': '\ud83d\udcc1 Nowy projekt', 'modal.newClient': '\ud83c\udfe2 Nowy klient',
    'status.planning': 'Planowanie', 'status.confirmed': 'Potwierdzony',
    'status.in_progress': 'W trakcie', 'status.completed': 'Zako\u0144czony',
    'status.cancelled': 'Anulowany',
    'proj.code': 'Kod', 'proj.location': 'Lokalizacja', 'proj.venue': 'Venue',
    'proj.budget': 'Bud\u017cet', 'proj.budget_total': 'Ca\u0142kowity bud\u017cet',
    'proj.budget_spent': 'Wydano', 'proj.description': 'Opis',
    'proj.remaining': 'Pozosta\u0142o', 'proj.role': 'Rola', 'proj.no_data': 'Brak projekt\u00f3w',
    'proj.edit': 'Edytuj projekt',
    'proj.delete_confirm': 'Czy na pewno chcesz usun\u0105\u0107 ten projekt?', 'proj.of': 'z',
    'client.no_data': 'Brak klient\u00f3w',
    'dash.no_projects': 'Brak projekt\u00f3w.',
    'dash.active_projects': 'Aktywne projekty', 'dash.crew_available': 'Dost\u0119pna ekipa',
    'dash.total_equipment': 'Ca\u0142kowity sprz\u0119t', 'dash.total_fleet': 'Ca\u0142kowita flota',
    'dash.recent_projects': 'Ostatnie projekty',
    'msg.coming_soon': 'Ten modu\u0142 b\u0119dzie wkr\u00f3tce dost\u0119pny.',
    'msg.loading': '\u0141adowanie...', 'msg.no_data': 'Brak danych', 'msg.saved': 'Zapisano',
    'msg.deleted': 'Usuni\u0119to', 'msg.error': 'Wyst\u0105pi\u0142 b\u0142\u0105d',
  }
};

// ---------------------------------------------------------------------------
// 2. STATE
// ---------------------------------------------------------------------------
const S = {
  lang: 'en',
  user: null,
  view: 'dashboard',
  viewId: null,
  _projects: null,
  _clients: null,
  clients: null,
  users: null,
};

// ---------------------------------------------------------------------------
// 3. i18n
// ---------------------------------------------------------------------------
function t(key) {
  const dict = LANGS[S.lang] || LANGS.en;
  return dict[key] !== undefined ? dict[key] : (LANGS.en[key] !== undefined ? LANGS.en[key] : key);
}

function setLang(l) {
  S.lang = l;
  localStorage.setItem('reckord-lang', l);
  applyLang();
  render();
}

function applyLang() {
  document.documentElement.lang = S.lang;
  const dict = LANGS[S.lang] || LANGS.en;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(function(btn, i) {
    btn.classList.toggle('active', ['en', 'cs', 'pl'][i] === S.lang);
  });
}

// ---------------------------------------------------------------------------
// 4. API helper
// ---------------------------------------------------------------------------
async function api(method, url, body) {
  const opts = {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  if (res.status === 401) {
    window.location.href = '/login';
    return null;
  }
  if (!res.ok) {
    const err = await res.json().catch(function() { return { error: res.statusText }; });
    throw new Error(err.error || res.statusText);
  }
  return res.json();
}

// ---------------------------------------------------------------------------
// 5. Toast
// ---------------------------------------------------------------------------
function toast(msg, type) {
  type = type || 'ok';
  const el = document.createElement('div');
  el.className = 'toast toast-' + type;
  el.textContent = msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(function() { el.remove(); }, 3000);
}

// ---------------------------------------------------------------------------
// 6. Modal helpers
// ---------------------------------------------------------------------------
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

function closeModalOutside(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}

// ---------------------------------------------------------------------------
// 7. Router
// ---------------------------------------------------------------------------
function navigate(view, id) {
  S.view = view;
  S.viewId = id || null;
  const hash = '#' + view + (id ? '/' + id : '');
  history.pushState({ view: view, id: id || null }, '', hash);
  render();
}

function parseHash() {
  const hash = location.hash.replace('#', '');
  if (!hash) return { view: 'dashboard', id: null };
  const parts = hash.split('/');
  return { view: parts[0] || 'dashboard', id: parts[1] ? parseInt(parts[1], 10) : null };
}

window.addEventListener('popstate', function() {
  const h = parseHash();
  S.view = h.view;
  S.viewId = h.id;
  render();
});

// ---------------------------------------------------------------------------
// 8. updateSidebar
// ---------------------------------------------------------------------------
const VIEW_NAV_MAP = {
  dashboard: 'nav-dashboard',
  projects: 'nav-projects',
  project: 'nav-projects',
  clients: 'nav-clients',
  client: 'nav-clients',
  equipment: 'nav-equipment',
  fleet: 'nav-fleet',
  crew: 'nav-crew',
  offers: 'nav-offers',
  reports: 'nav-reports',
};

function updateSidebar() {
  document.querySelectorAll('.nav-item').forEach(function(el) {
    el.classList.remove('active');
  });
  const navId = VIEW_NAV_MAP[S.view];
  if (navId) {
    const el = document.getElementById(navId);
    if (el) el.classList.add('active');
  }
}

// ---------------------------------------------------------------------------
// 9. Helper functions
// ---------------------------------------------------------------------------
function statusLabel(s) {
  return t('status.' + s) || s;
}

const STATUS_PILL = {
  planning: 'pill-blue',
  confirmed: 'pill-orange',
  in_progress: 'pill-green',
  completed: 'pill-gray',
  cancelled: 'pill-red',
};

const STATUS_DOT = {
  planning: 'list-dot-blue',
  confirmed: 'list-dot-orange',
  in_progress: 'list-dot-green',
  completed: 'list-dot-gray',
  cancelled: 'list-dot-red',
};

function pillHtml(status) {
  const cls = STATUS_PILL[status] || 'pill-gray';
  return '<span class="pill ' + cls + '">' + esc(statusLabel(status)) + '</span>';
}

function dotHtml(status) {
  const cls = STATUS_DOT[status] || 'list-dot-gray';
  return '<div class="list-dot ' + cls + '"></div>';
}

function fmtDate(d) {
  if (!d) return '\u2014';
  try {
    return new Date(d).toLocaleDateString(S.lang, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return d;
  }
}

function fmtMoney(n) {
  if (!n && n !== 0) return '0 CZK';
  return Number(n).toLocaleString(S.lang) + ' CZK';
}

function budgetBar(spent, total) {
  if (!total || total <= 0) {
    return '<div class="progress-bar"><div class="progress-fill fill-blue" style="width:0%"></div></div>';
  }
  const pct = Math.min(100, Math.round((spent / total) * 100));
  const cls = pct > 90 ? 'fill-red' : (pct > 70 ? 'fill-orange' : 'fill-green');
  return (
    '<div style="min-width:140px">' +
    '<div class="progress-label"><span>' + pct + '%</span><span>' + fmtMoney(spent) + ' / ' + fmtMoney(total) + '</span></div>' +
    '<div class="progress-bar"><div class="progress-fill ' + cls + '" style="width:' + pct + '%"></div></div>' +
    '</div>'
  );
}

function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function loadingHtml() {
  return '<div class="empty-state"><div class="empty-icon">&#8987;</div><div class="empty-text">' + esc(t('msg.loading')) + '</div></div>';
}

// ---------------------------------------------------------------------------
// 10. renderDashboard
// ---------------------------------------------------------------------------
async function renderDashboard(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.dashboard')) + '</div></div>' +
    '<div class="content">' + loadingHtml() + '</div>';
  try {
    const data = await api('GET', '/api/dashboard');
    if (!data) return;
    const s = data.stats;
    const html = (
      '<div class="topbar"><div class="topbar-title">' + esc(t('screen.dashboard')) + '</div>' +
      '<button class="btn btn-red btn-sm" onclick="openProjectForm(null,null)">' + esc(t('btn.newProject')) + '</button></div>' +
      '<div class="content">' +
      '<div class="stats-grid">' +
      statCard(s.projects_active, t('dash.active_projects'), 'blue') +
      statCard(s.crew_available, t('dash.crew_available'), 'green') +
      statCard(s.equipment_total, t('dash.total_equipment'), 'orange') +
      statCard(s.fleet_total, t('dash.total_fleet'), '') +
      '</div>' +
      '<div class="card">' +
      '<div class="card-header"><div class="card-title">' + esc(t('dash.recent_projects')) + '</div>' +
      '<button class="btn btn-outline btn-sm" onclick="navigate(\'projects\')">' + esc(t('btn.viewAll')) + '</button></div>' +
      '<div class="card-body">' +
      recentProjectsHtml(data.recent_projects) +
      '</div></div>' +
      '</div>'
    );
    el.innerHTML = html;
  } catch (e) {
    el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.dashboard')) + '</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div></div>';
  }
}

function statCard(num, label, color) {
  return '<div class="stat-card' + (color ? ' ' + color : '') + '">' +
    '<div class="stat-num">' + (num || 0) + '</div>' +
    '<div class="stat-label">' + esc(label) + '</div>' +
    '</div>';
}

function recentProjectsHtml(projects) {
  if (!projects || projects.length === 0) {
    return '<div class="empty-state"><div class="empty-icon">&#128193;</div><div class="empty-text">' + esc(t('dash.no_projects')) + '</div></div>';
  }
  let rows = '';
  projects.forEach(function(p) {
    rows += '<tr onclick="navigate(\'project\',' + p.id + ')">' +
      '<td><strong>' + esc(p.name) + '</strong><br><span style="font-size:11px;color:#888">' + esc(p.code || '') + '</span></td>' +
      '<td>' + esc(p.client_name || '\u2014') + '</td>' +
      '<td style="font-size:12px;color:#888">' + fmtDate(p.start_date) + '<br>' + fmtDate(p.end_date) + '</td>' +
      '<td>' + pillHtml(p.status) + '</td>' +
      '<td>' + esc(p.manager_name || '\u2014') + '</td>' +
      '</tr>';
  });
  return '<table><thead><tr>' +
    '<th>' + esc(t('th.project')) + '</th>' +
    '<th>' + esc(t('th.client')) + '</th>' +
    '<th>' + esc(t('th.dates')) + '</th>' +
    '<th>' + esc(t('th.status')) + '</th>' +
    '<th>' + esc(t('th.manager')) + '</th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

// ---------------------------------------------------------------------------
// 11. renderProjects
// ---------------------------------------------------------------------------
async function renderProjects(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.projects')) + '</div></div>' +
    '<div class="content">' + loadingHtml() + '</div>';
  try {
    const projects = await api('GET', '/api/projects');
    if (!projects) return;
    S._projects = projects;
    const topbar = '<div class="topbar">' +
      '<div class="topbar-title">' + esc(t('screen.projects')) + '</div>' +
      '<div class="topbar-search"><span>&#128269;</span>' +
      '<input type="text" id="proj-search" placeholder="' + esc(t('ph.searchProjects')) + '" oninput="filterProjects()">' +
      '</div>' +
      '<select id="proj-status-filter" onchange="filterProjects()" style="border:1.5px solid #e8e8e8;border-radius:4px;padding:6px 10px;font-family:inherit;font-size:13px;outline:none;background:white;cursor:pointer;">' +
      '<option value="">' + esc(t('chip.all')) + '</option>' +
      '<option value="planning">' + esc(t('status.planning')) + '</option>' +
      '<option value="confirmed">' + esc(t('status.confirmed')) + '</option>' +
      '<option value="in_progress">' + esc(t('status.in_progress')) + '</option>' +
      '<option value="completed">' + esc(t('status.completed')) + '</option>' +
      '<option value="cancelled">' + esc(t('status.cancelled')) + '</option>' +
      '</select>' +
      '<button class="btn btn-red btn-sm" onclick="openProjectForm(null,null)">' + esc(t('btn.newProject')) + '</button>' +
      '</div>';
    el.innerHTML = topbar + '<div class="content"><div class="card"><div class="card-body"><div id="projects-table-wrap">' + projectsTableHtml(projects) + '</div></div></div></div>';
  } catch (e) {
    el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.projects')) + '</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div></div>';
  }
}

function filterProjects() {
  if (!S._projects) return;
  const search = (document.getElementById('proj-search') || {}).value || '';
  const status = (document.getElementById('proj-status-filter') || {}).value || '';
  const sl = search.toLowerCase();
  const filtered = S._projects.filter(function(p) {
    const matchSearch = !sl ||
      (p.name && p.name.toLowerCase().includes(sl)) ||
      (p.code && p.code.toLowerCase().includes(sl)) ||
      (p.client_name && p.client_name.toLowerCase().includes(sl));
    const matchStatus = !status || p.status === status;
    return matchSearch && matchStatus;
  });
  const wrap = document.getElementById('projects-table-wrap');
  if (wrap) wrap.innerHTML = projectsTableHtml(filtered);
}

function projectsTableHtml(projects) {
  if (!projects || projects.length === 0) {
    return '<div class="empty-state"><div class="empty-icon">&#128193;</div><div class="empty-text">' + esc(t('proj.no_data')) + '</div></div>';
  }
  let rows = '';
  projects.forEach(function(p) {
    rows += '<tr onclick="navigate(\'project\',' + p.id + ')">' +
      '<td><strong>' + esc(p.code || '') + '</strong></td>' +
      '<td>' + esc(p.name) + '</td>' +
      '<td>' + esc(p.client_name || '\u2014') + '</td>' +
      '<td style="font-size:12px;color:#888">' + fmtDate(p.start_date) + '<br>' + fmtDate(p.end_date) + '</td>' +
      '<td>' + pillHtml(p.status) + '</td>' +
      '<td style="min-width:140px">' + budgetBar(p.budget_spent, p.budget_total) + '</td>' +
      '<td>' + esc(p.manager_name || '\u2014') + '</td>' +
      '<td onclick="event.stopPropagation()">' +
      '<button class="btn btn-outline btn-sm" onclick="openProjectForm(' + p.id + ',null)">' + esc(t('btn.edit')) + '</button>' +
      '</td>' +
      '</tr>';
  });
  return '<table><thead><tr>' +
    '<th>' + esc(t('th.code')) + '</th>' +
    '<th>' + esc(t('th.project')) + '</th>' +
    '<th>' + esc(t('th.client')) + '</th>' +
    '<th>' + esc(t('th.dates')) + '</th>' +
    '<th>' + esc(t('th.status')) + '</th>' +
    '<th>' + esc(t('th.budget')) + '</th>' +
    '<th>' + esc(t('th.manager')) + '</th>' +
    '<th></th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

// ---------------------------------------------------------------------------
// 12. renderProject (detail)
// ---------------------------------------------------------------------------
async function renderProject(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">...</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const p = await api('GET', '/api/projects/' + S.viewId);
    if (!p) return;
    const remaining = (p.budget_total || 0) - (p.budget_spent || 0);
    const remColor = remaining < 0 ? 'color:var(--red)' : 'color:var(--green)';
    const pct = p.budget_total > 0 ? Math.min(100, Math.round((p.budget_spent / p.budget_total) * 100)) : 0;
    const fillCls = pct > 90 ? 'fill-red' : (pct > 70 ? 'fill-orange' : 'fill-green');

    let crewHtml = '';
    if (p.crew && p.crew.length > 0) {
      let rows = '';
      p.crew.forEach(function(c) {
        rows += '<tr><td>' + esc(c.first_name + ' ' + c.last_name) + '</td>' +
          '<td>' + esc(c.position || '') + '</td>' +
          '<td>' + esc(c.role || '') + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(c.date_from) + ' \u2013 ' + fmtDate(c.date_to) + '</td>' +
          '</tr>';
      });
      crewHtml = '<div class="card"><div class="card-header"><div class="card-title">&#128101; ' + esc(t('ct.crewMembers')) + '</div></div>' +
        '<div class="card-body"><table><thead><tr>' +
        '<th>' + esc(t('th.name')) + '</th><th>' + esc(t('th.type')) + '</th>' +
        '<th>' + esc(t('th.role')) + '</th><th>' + esc(t('th.dates')) + '</th>' +
        '</tr></thead><tbody>' + rows + '</tbody></table></div></div>';
    }

    let equipHtml = '';
    if (p.equipment && p.equipment.length > 0) {
      let rows = '';
      p.equipment.forEach(function(e) {
        rows += '<tr><td><strong>' + esc(e.eq_code || '') + '</strong><br>' + esc(e.eq_name || '') + '</td>' +
          '<td>' + esc(e.category || '') + '</td>' +
          '<td>' + (e.quantity || 1) + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(e.date_from) + ' \u2013 ' + fmtDate(e.date_to) + '</td>' +
          '</tr>';
      });
      equipHtml = '<div class="card"><div class="card-header"><div class="card-title">&#128230; ' + esc(t('nav.equipment')) + '</div></div>' +
        '<div class="card-body"><table><thead><tr>' +
        '<th>' + esc(t('th.item')) + '</th><th>' + esc(t('th.category')) + '</th>' +
        '<th>' + esc(t('th.quantity')) + '</th><th>' + esc(t('th.dates')) + '</th>' +
        '</tr></thead><tbody>' + rows + '</tbody></table></div></div>';
    }

    let fleetHtml = '';
    if (p.fleet && p.fleet.length > 0) {
      let rows = '';
      p.fleet.forEach(function(f) {
        const driver = f.driver_first ? f.driver_first + ' ' + f.driver_last : '\u2014';
        rows += '<tr><td>' + esc(f.vehicle_name || '') + '<br><span style="font-size:11px;color:#888">' + esc((f.brand || '') + ' ' + (f.model || '')) + '</span></td>' +
          '<td>' + esc(f.registration || '') + '</td>' +
          '<td>' + esc(driver) + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(f.date_from) + ' \u2013 ' + fmtDate(f.date_to) + '</td>' +
          '</tr>';
      });
      fleetHtml = '<div class="card"><div class="card-header"><div class="card-title">&#128667; ' + esc(t('nav.fleet')) + '</div></div>' +
        '<div class="card-body"><table><thead><tr>' +
        '<th>' + esc(t('th.vehicle')) + '</th><th>' + esc(t('th.registration')) + '</th>' +
        '<th>' + esc(t('th.driver')) + '</th><th>' + esc(t('th.dates')) + '</th>' +
        '</tr></thead><tbody>' + rows + '</tbody></table></div></div>';
    }

    const html =
      '<div class="topbar">' +
      '<button class="btn btn-outline btn-sm" onclick="navigate(\'projects\')">' + esc(t('btn.back')) + '</button>' +
      '<div class="topbar-title">' + esc(p.name) + ' <span style="font-weight:400;color:#888;font-size:13px">' + esc(p.code || '') + '</span> ' + pillHtml(p.status) + '</div>' +
      '<button class="btn btn-outline btn-sm" onclick="openProjectForm(' + p.id + ',null)">' + esc(t('proj.edit')) + '</button>' +
      '<button class="btn btn-danger btn-sm" onclick="deleteProject(' + p.id + ')">' + esc(t('btn.delete')) + '</button>' +
      '</div>' +
      '<div class="content">' +
      '<div class="two-col">' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128196; ' + esc(t('tab.overview')) + '</div></div>' +
      '<div class="card-body"><table class="info-table">' +
      infoRow(t('th.client'), esc(p.client_name || '\u2014')) +
      infoRow(t('proj.location'), esc(p.location || '\u2014')) +
      infoRow(t('proj.venue'), esc(p.venue || '\u2014')) +
      infoRow(t('label.startDate'), fmtDate(p.start_date)) +
      infoRow(t('label.endDate'), fmtDate(p.end_date)) +
      infoRow(t('th.manager'), esc(p.manager_name || '\u2014')) +
      (p.description ? infoRow(t('proj.description'), esc(p.description)) : '') +
      (p.notes ? infoRow(t('label.notes'), esc(p.notes)) : '') +
      '</table></div></div>' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128184; ' + esc(t('proj.budget')) + '</div></div>' +
      '<div class="card-body-pad">' +
      '<div class="progress-label"><span>' + pct + '%</span><span>' + fmtMoney(p.budget_spent) + ' ' + t('proj.of') + ' ' + fmtMoney(p.budget_total) + '</span></div>' +
      '<div class="progress-bar" style="margin-bottom:16px"><div class="progress-fill ' + fillCls + '" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      '<div class="card-body"><table class="budget-table">' +
      '<tr><td>' + esc(t('proj.budget_total')) + '</td><td>' + fmtMoney(p.budget_total) + '</td></tr>' +
      '<tr><td>' + esc(t('proj.budget_spent')) + '</td><td>' + fmtMoney(p.budget_spent) + '</td></tr>' +
      '<tr><td>' + esc(t('proj.remaining')) + '</td><td style="' + remColor + '">' + fmtMoney(remaining) + '</td></tr>' +
      '</table></div></div>' +
      '</div>' +
      crewHtml + equipHtml + fleetHtml +
      '</div>';
    el.innerHTML = html;
  } catch (e) {
    el.innerHTML = '<div class="topbar"><button class="btn btn-outline btn-sm" onclick="navigate(\'projects\')">' + esc(t('btn.back')) + '</button><div class="topbar-title">Error</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div></div>';
  }
}

function infoRow(label, value) {
  return '<tr><td>' + esc(label) + '</td><td>' + value + '</td></tr>';
}

// ---------------------------------------------------------------------------
// 13. renderClients
// ---------------------------------------------------------------------------
async function renderClients(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.clients')) + '</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const clients = await api('GET', '/api/clients');
    if (!clients) return;
    S._clients = clients;
    const topbar = '<div class="topbar">' +
      '<div class="topbar-title">' + esc(t('screen.clients')) + '</div>' +
      '<div class="topbar-search"><span>&#128269;</span>' +
      '<input type="text" id="client-search" placeholder="' + esc(t('ph.searchClients')) + '" oninput="filterClients()">' +
      '</div>' +
      '<button class="btn btn-red btn-sm" onclick="openClientForm(null)">' + esc(t('btn.newClient')) + '</button>' +
      '</div>';
    el.innerHTML = topbar + '<div class="content"><div class="card"><div class="card-body"><div id="clients-table-wrap">' + clientsTableHtml(clients) + '</div></div></div></div>';
  } catch (e) {
    el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.clients')) + '</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div></div>';
  }
}

function filterClients() {
  if (!S._clients) return;
  const search = (document.getElementById('client-search') || {}).value || '';
  const sl = search.toLowerCase();
  const filtered = S._clients.filter(function(c) {
    return !sl ||
      (c.name && c.name.toLowerCase().includes(sl)) ||
      (c.contact_person && c.contact_person.toLowerCase().includes(sl)) ||
      (c.email && c.email.toLowerCase().includes(sl));
  });
  const wrap = document.getElementById('clients-table-wrap');
  if (wrap) wrap.innerHTML = clientsTableHtml(filtered);
}

function clientsTableHtml(clients) {
  if (!clients || clients.length === 0) {
    return '<div class="empty-state"><div class="empty-icon">&#127970;</div><div class="empty-text">' + esc(t('client.no_data')) + '</div></div>';
  }
  let rows = '';
  clients.forEach(function(c) {
    rows += '<tr onclick="navigate(\'client\',' + c.id + ')">' +
      '<td><strong>' + esc(c.name) + '</strong></td>' +
      '<td>' + esc(c.contact_person || '\u2014') + '</td>' +
      '<td>' + (c.email ? '<a href="mailto:' + esc(c.email) + '" onclick="event.stopPropagation()">' + esc(c.email) + '</a>' : '\u2014') + '</td>' +
      '<td>' + esc(c.phone || '\u2014') + '</td>' +
      '<td>' + esc(c.country || '\u2014') + '</td>' +
      '<td><span class="pill pill-blue">' + (c.project_count || 0) + '</span></td>' +
      '<td onclick="event.stopPropagation()">' +
      '<button class="btn btn-outline btn-sm" onclick="openClientForm(' + c.id + ')">' + esc(t('btn.edit')) + '</button>' +
      '</td>' +
      '</tr>';
  });
  return '<table><thead><tr>' +
    '<th>' + esc(t('th.company')) + '</th>' +
    '<th>' + esc(t('th.contact')) + '</th>' +
    '<th>' + esc(t('label.email')) + '</th>' +
    '<th>' + esc(t('label.phone')) + '</th>' +
    '<th>' + esc(t('th.country')) + '</th>' +
    '<th>' + esc(t('th.projects')) + '</th>' +
    '<th></th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

// ---------------------------------------------------------------------------
// 14. renderClient (detail)
// ---------------------------------------------------------------------------
async function renderClient(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">...</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const c = await api('GET', '/api/clients/' + S.viewId);
    if (!c) return;

    let projHtml = '';
    if (c.projects && c.projects.length > 0) {
      c.projects.forEach(function(p) {
        projHtml += '<div class="list-item" onclick="navigate(\'project\',' + p.id + ')">' +
          dotHtml(p.status) +
          '<div style="flex:1"><div class="list-main">' + esc(p.name) + '</div>' +
          '<div class="list-sub">' + esc(p.code || '') + ' &middot; ' + fmtDate(p.start_date) + '</div></div>' +
          pillHtml(p.status) +
          '</div>';
      });
    } else {
      projHtml = '<div class="empty-state" style="padding:24px"><div class="empty-text">' + esc(t('proj.no_data')) + '</div></div>';
    }

    const html =
      '<div class="topbar">' +
      '<button class="btn btn-outline btn-sm" onclick="navigate(\'clients\')">' + esc(t('btn.back')) + '</button>' +
      '<div class="topbar-title">' + esc(c.name) + '</div>' +
      '<button class="btn btn-outline btn-sm" onclick="openClientForm(' + c.id + ')">' + esc(t('btn.edit')) + '</button>' +
      '</div>' +
      '<div class="content">' +
      '<div class="two-col">' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128196; ' + esc(t('tab.overview')) + '</div></div>' +
      '<div class="card-body"><table class="info-table">' +
      infoRow(t('label.contactPerson'), esc(c.contact_person || '\u2014')) +
      infoRow(t('label.email'), c.email ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>' : '\u2014') +
      infoRow(t('label.phone'), esc(c.phone || '\u2014')) +
      infoRow(t('label.country'), esc(c.country || '\u2014')) +
      infoRow(t('label.address'), esc(c.address || '\u2014')) +
      infoRow(t('label.vatNumber'), esc(c.vat_number || '\u2014')) +
      (c.notes ? infoRow(t('label.notes'), esc(c.notes)) : '') +
      '</table></div></div>' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128193; ' + esc(t('nav.projects')) + '</div>' +
      '<button class="btn btn-red btn-sm" onclick="openProjectForm(null,' + c.id + ')">' + esc(t('btn.newProject')) + '</button>' +
      '</div><div class="card-body">' + projHtml + '</div></div>' +
      '</div></div>';
    el.innerHTML = html;
  } catch (e) {
    el.innerHTML = '<div class="topbar"><button class="btn btn-outline btn-sm" onclick="navigate(\'clients\')">' + esc(t('btn.back')) + '</button><div class="topbar-title">Error</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div></div>';
  }
}

// ---------------------------------------------------------------------------
// 15. renderComingSoon
// ---------------------------------------------------------------------------
function renderComingSoon(el, moduleName) {
  el.innerHTML =
    '<div class="topbar"><div class="topbar-title">' + esc(moduleName) + '</div></div>' +
    '<div class="content"><div class="card"><div class="card-body">' +
    '<div class="empty-state">' +
    '<div class="empty-icon">&#128679;</div>' +
    '<div class="empty-text">' + esc(t('msg.coming_soon')) + '</div>' +
    '</div></div></div></div>';
}

// ---------------------------------------------------------------------------
// 16. openProjectForm
// ---------------------------------------------------------------------------
async function openProjectForm(id, prefillClientId) {
  const titleEl = document.getElementById('modal-project-title');
  const bodyEl = document.getElementById('modal-project-body');
  if (!titleEl || !bodyEl) return;
  titleEl.textContent = id ? t('proj.edit') : t('modal.newProject');
  bodyEl.innerHTML = loadingHtml();
  openModal('modal-project');

  try {
    if (!S.clients) {
      S.clients = await api('GET', '/api/clients');
    }
    if (!S.users) {
      S.users = await api('GET', '/api/users');
    }
    let proj = { status: 'planning' };
    if (id) {
      proj = await api('GET', '/api/projects/' + id);
      if (!proj) return;
    }

    let clientOpts = '<option value="">-- Select --</option>';
    (S.clients || []).forEach(function(c) {
      const sel = (String(c.id) === String(proj.client_id || prefillClientId)) ? ' selected' : '';
      clientOpts += '<option value="' + c.id + '"' + sel + '>' + esc(c.name) + '</option>';
    });

    let userOpts = '<option value="">-- Select --</option>';
    (S.users || []).forEach(function(u) {
      const sel = (String(u.id) === String(proj.manager_id)) ? ' selected' : '';
      userOpts += '<option value="' + u.id + '"' + sel + '>' + esc(u.name) + '</option>';
    });

    const statuses = ['planning', 'confirmed', 'in_progress', 'completed', 'cancelled'];
    let statusOpts = '';
    statuses.forEach(function(s) {
      const sel = s === (proj.status || 'planning') ? ' selected' : '';
      statusOpts += '<option value="' + s + '"' + sel + '>' + esc(t('status.' + s)) + '</option>';
    });

    bodyEl.innerHTML =
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('proj.code')) + '</label>' +
      '<input type="text" id="f-code" value="' + esc(proj.code || '') + '" placeholder="Auto"></div>' +
      '<div class="form-group"><label>' + esc(t('th.status')) + '</label>' +
      '<select id="f-status">' + statusOpts + '</select></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.projectName')) + ' *</label>' +
      '<input type="text" id="f-name" value="' + esc(proj.name || '') + '"></div></div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('label.client')) + '</label><select id="f-client">' + clientOpts + '</select></div>' +
      '<div class="form-group"><label>' + esc(t('label.projectManager')) + '</label><select id="f-manager">' + userOpts + '</select></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('label.startDate')) + '</label><input type="date" id="f-start" value="' + esc(proj.start_date || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('label.endDate')) + '</label><input type="date" id="f-end" value="' + esc(proj.end_date || '') + '"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('proj.location')) + '</label><input type="text" id="f-location" value="' + esc(proj.location || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('proj.venue')) + '</label><input type="text" id="f-venue" value="' + esc(proj.venue || '') + '"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('proj.budget_total')) + '</label><input type="number" id="f-budget-total" value="' + (proj.budget_total || 0) + '" min="0"></div>' +
      '<div class="form-group"><label>' + esc(t('proj.budget_spent')) + '</label><input type="number" id="f-budget-spent" value="' + (proj.budget_spent || 0) + '" min="0"></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('proj.description')) + '</label>' +
      '<textarea id="f-desc">' + esc(proj.description || '') + '</textarea></div></div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.notes')) + '</label>' +
      '<textarea id="f-notes">' + esc(proj.notes || '') + '</textarea></div></div>' +
      '<div class="form-actions">' +
      '<button class="btn btn-outline" onclick="closeModal(\'modal-project\')">' + esc(t('btn.cancel')) + '</button>' +
      '<button class="btn btn-red" onclick="saveProject(' + (id || 'null') + ')">' + esc(id ? t('btn.save') : t('btn.createProject')) + '</button>' +
      '</div>';
  } catch (e) {
    bodyEl.innerHTML = '<div class="alert alert-err">' + esc(t('msg.error') + ': ' + e.message) + '</div>';
  }
}

// ---------------------------------------------------------------------------
// 17. saveProject
// ---------------------------------------------------------------------------
async function saveProject(id) {
  const name = (document.getElementById('f-name') || {}).value || '';
  if (!name.trim()) {
    toast(t('label.projectName') + ' required', 'err');
    return;
  }
  const body = {
    name: name.trim(),
    code: (document.getElementById('f-code') || {}).value || '',
    status: (document.getElementById('f-status') || {}).value || 'planning',
    client_id: (document.getElementById('f-client') || {}).value || null,
    manager_id: (document.getElementById('f-manager') || {}).value || null,
    start_date: (document.getElementById('f-start') || {}).value || null,
    end_date: (document.getElementById('f-end') || {}).value || null,
    location: (document.getElementById('f-location') || {}).value || '',
    venue: (document.getElementById('f-venue') || {}).value || '',
    budget_total: parseFloat((document.getElementById('f-budget-total') || {}).value) || 0,
    budget_spent: parseFloat((document.getElementById('f-budget-spent') || {}).value) || 0,
    description: (document.getElementById('f-desc') || {}).value || '',
    notes: (document.getElementById('f-notes') || {}).value || '',
  };
  // Convert empty strings to null for FK fields
  if (!body.client_id) body.client_id = null;
  if (!body.manager_id) body.manager_id = null;
  if (!body.start_date) body.start_date = null;
  if (!body.end_date) body.end_date = null;

  try {
    if (id) {
      await api('PUT', '/api/projects/' + id, body);
    } else {
      await api('POST', '/api/projects', body);
    }
    closeModal('modal-project');
    toast(t('msg.saved'), 'ok');
    S._projects = null;
    if (id && S.view === 'project') {
      navigate('project', id);
    } else {
      navigate('projects');
    }
  } catch (e) {
    toast(t('msg.error') + ': ' + e.message, 'err');
  }
}

// ---------------------------------------------------------------------------
// 18. deleteProject
// ---------------------------------------------------------------------------
async function deleteProject(id) {
  if (!confirm(t('proj.delete_confirm'))) return;
  try {
    await api('DELETE', '/api/projects/' + id);
    toast(t('msg.deleted'), 'ok');
    S._projects = null;
    navigate('projects');
  } catch (e) {
    toast(t('msg.error') + ': ' + e.message, 'err');
  }
}

// ---------------------------------------------------------------------------
// 19. openClientForm
// ---------------------------------------------------------------------------
async function openClientForm(id) {
  const titleEl = document.getElementById('modal-client-title');
  const bodyEl = document.getElementById('modal-client-body');
  if (!titleEl || !bodyEl) return;
  titleEl.textContent = id ? t('nav.clients') : t('modal.newClient');
  bodyEl.innerHTML = loadingHtml();
  openModal('modal-client');

  let c = {};
  try {
    if (id) {
      c = await api('GET', '/api/clients/' + id);
      if (!c) return;
    }

    const countries = ['CZ', 'SK', 'DE', 'PL', 'AT', 'HU', 'Other'];
    let countryOpts = '';
    countries.forEach(function(co) {
      const sel = co === (c.country || 'CZ') ? ' selected' : '';
      countryOpts += '<option value="' + co + '"' + sel + '>' + co + '</option>';
    });

    bodyEl.innerHTML =
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.companyName')) + ' *</label>' +
      '<input type="text" id="cf-name" value="' + esc(c.name || '') + '"></div></div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('label.contactPerson')) + '</label><input type="text" id="cf-contact" value="' + esc(c.contact_person || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('label.email')) + '</label><input type="email" id="cf-email" value="' + esc(c.email || '') + '"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('label.phone')) + '</label><input type="text" id="cf-phone" value="' + esc(c.phone || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('label.country')) + '</label><select id="cf-country">' + countryOpts + '</select></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.address')) + '</label>' +
      '<textarea id="cf-address">' + esc(c.address || '') + '</textarea></div></div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.notes')) + '</label>' +
      '<textarea id="cf-notes">' + esc(c.notes || '') + '</textarea></div></div>' +
      '<div class="form-actions">' +
      '<button class="btn btn-outline" onclick="closeModal(\'modal-client\')">' + esc(t('btn.cancel')) + '</button>' +
      '<button class="btn btn-red" onclick="saveClient(' + (id || 'null') + ')">' + esc(id ? t('btn.save') : t('btn.saveClient')) + '</button>' +
      '</div>';
  } catch (e) {
    bodyEl.innerHTML = '<div class="alert alert-err">' + esc(t('msg.error') + ': ' + e.message) + '</div>';
  }
}

// ---------------------------------------------------------------------------
// 20. saveClient
// ---------------------------------------------------------------------------
async function saveClient(id) {
  const name = (document.getElementById('cf-name') || {}).value || '';
  if (!name.trim()) {
    toast(t('label.companyName') + ' required', 'err');
    return;
  }
  const body = {
    name: name.trim(),
    contact_person: (document.getElementById('cf-contact') || {}).value || '',
    email: (document.getElementById('cf-email') || {}).value || '',
    phone: (document.getElementById('cf-phone') || {}).value || '',
    country: (document.getElementById('cf-country') || {}).value || 'CZ',
    address: (document.getElementById('cf-address') || {}).value || '',
    notes: (document.getElementById('cf-notes') || {}).value || '',
  };
  try {
    if (id) {
      await api('PUT', '/api/clients/' + id, body);
    } else {
      await api('POST', '/api/clients', body);
    }
    closeModal('modal-client');
    S.clients = null;
    S._clients = null;
    toast(t('msg.saved'), 'ok');
    if (id && S.view === 'client') {
      navigate('client', id);
    } else {
      navigate('clients');
    }
  } catch (e) {
    toast(t('msg.error') + ': ' + e.message, 'err');
  }
}

// ---------------------------------------------------------------------------
// 21. render
// ---------------------------------------------------------------------------
function render() {
  updateSidebar();
  const el = document.getElementById('content');
  if (!el) return;
  el.innerHTML = '';

  switch (S.view) {
    case 'dashboard':
      renderDashboard(el);
      break;
    case 'projects':
      renderProjects(el);
      break;
    case 'project':
      renderProject(el);
      break;
    case 'clients':
      renderClients(el);
      break;
    case 'client':
      renderClient(el);
      break;
    case 'equipment':
      renderComingSoon(el, t('screen.equipment'));
      break;
    case 'fleet':
      renderComingSoon(el, t('screen.fleet'));
      break;
    case 'crew':
      renderComingSoon(el, t('screen.crew'));
      break;
    case 'offers':
      renderComingSoon(el, t('screen.offers'));
      break;
    case 'reports':
      renderComingSoon(el, t('screen.reports'));
      break;
    default:
      renderDashboard(el);
  }
}

// ---------------------------------------------------------------------------
// 22. init
// ---------------------------------------------------------------------------
async function init() {
  // Read language from localStorage
  S.lang = localStorage.getItem('reckord-lang') || 'en';
  applyLang();

  // Get current user
  try {
    const me = await api('GET', '/api/me');
    if (!me) return; // redirected to login
    S.user = me;

    const avatarEl = document.getElementById('user-avatar');
    const nameEl = document.getElementById('user-name');
    const roleEl = document.getElementById('user-role');
    if (avatarEl) {
      if (me.picture) {
        avatarEl.innerHTML = '<img src="' + esc(me.picture) + '" alt="">';
      } else {
        avatarEl.textContent = (me.name || me.email || '?').charAt(0).toUpperCase();
      }
    }
    if (nameEl) nameEl.textContent = me.name || me.email || '';
    if (roleEl) roleEl.textContent = t('role.' + (me.role || 'crew')) || me.role || '';
  } catch (e) {
    // Will have been redirected to /login on 401
    console.error('init /api/me error', e);
  }

  // Parse initial view from hash
  const h = parseHash();
  S.view = h.view || 'dashboard';
  S.viewId = h.id;

  render();
}

// ---------------------------------------------------------------------------
// 23. popstate already set above
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// 24. Expose globals
// ---------------------------------------------------------------------------
window.navigate = navigate;
window.openProjectForm = openProjectForm;
window.openClientForm = openClientForm;
window.openModal = openModal;
window.closeModal = closeModal;
window.closeModalOutside = closeModalOutside;
window.setLang = setLang;
window.filterProjects = filterProjects;
window.filterClients = filterClients;
window.saveProject = saveProject;
window.saveClient = saveClient;
window.deleteProject = deleteProject;

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
init();
