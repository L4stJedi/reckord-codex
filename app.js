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
    'nav.calendar': 'Calendar', 'cal.today': 'Today', 'cal.month': 'Month', 'cal.week': 'Week', 'cal.no_events': 'No productions', 'cal.conflict': 'Scheduling conflict!', 'cal.legend': 'Units', 'cal.crew': 'crew',
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
    'label.vatNumber': 'DIČ / VAT', 'label.ico': 'IČO', 'label.riskFlag': 'Risk Flag',
    'label.billingAddress': 'Billing Address', 'label.address': 'Address',
    // Modals
    'modal.newProject': '\ud83d\udcc1 New Project', 'modal.newClient': '\ud83c\udfe2 New Client',
    // Status
    'status.planning': 'Planning', 'status.confirmed': 'Confirmed',
    'status.in_progress': 'In Progress', 'status.completed': 'Completed',
    'status.cancelled': 'Cancelled',
    'status.available': 'Available', 'status.on_project': 'On Project',
    'status.maintenance': 'Maintenance', 'status.retired': 'Retired',
    'status.in_service': 'In Service', 'status.leave': 'On Leave', 'status.inactive': 'Inactive',
    'status.draft': 'Draft', 'status.sent': 'Sent', 'status.negotiation': 'Negotiation',
    'status.won': 'Won', 'status.lost': 'Lost',
    'cat.camera': 'Camera', 'cat.audio': 'Audio', 'cat.cables': 'Cables',
    'cat.monitors': 'Monitors', 'cat.lighting': 'Lighting',
    'cat.transport': 'Transport cases', 'cat.other': 'Other',
    'type.truck': 'Truck', 'type.van': 'Van', 'type.car': 'Car', 'type.trailer': 'Trailer',
    'equip.no_data': 'No equipment', 'equip.edit': 'Edit Equipment',
    'equip.delete_confirm': 'Delete this item?', 'equip.code': 'Asset Code',
    'equip.serial': 'Serial No.', 'equip.purchase_date': 'Purchase Date',
    'equip.purchase_price': 'Purchase Price', 'equip.maintenance_due': 'Maintenance Due',
    'fleet.no_data': 'No vehicles', 'fleet.registration': 'Registration', 'fleet.type': 'Type',
    'fleet.year': 'Year', 'fleet.mileage': 'Mileage (km)', 'fleet.maintenance_due': 'Service Due',
    'fleet.insurance_expiry': 'Insurance Expiry', 'fleet.edit': 'Edit Vehicle',
    'fleet.delete_confirm': 'Delete this vehicle?',
    'fleet.unit_id': 'Unit ID', 'fleet.length_m': 'Length (m)', 'fleet.width_m': 'Width (m)',
    'fleet.height_m': 'Height (m)', 'fleet.power': 'Power Connection',
    'fleet.specs_support': 'Support Specs', 'fleet.specs_video': 'Video Specs',
    'fleet.specs_audio': 'Audio Specs', 'fleet.dimensions': 'Dimensions',
    'fleet.technical': 'Technical Specs',
    'crew.no_data': 'No crew members', 'crew.first_name': 'First Name',
    'crew.last_name': 'Last Name', 'crew.position': 'Position',
    'crew.edit': 'Edit Member', 'crew.delete_confirm': 'Delete this crew member?',
    'offer.no_data': 'No offers', 'offer.number': 'Offer No.', 'offer.total': 'Total Value',
    'offer.margin': 'Margin %', 'offer.valid_until': 'Valid Until',
    'offer.edit': 'Edit Offer', 'offer.delete_confirm': 'Delete this offer?',
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
    'dash.recent_projects': 'Recent Projects', 'dash.pipeline': 'Offer Pipeline',
    'nav.settings': 'Settings',
    'settings.title': 'Settings & Import',
    'settings.import_title': 'Import from CAFLOU',
    'settings.import_desc': 'Import your existing data from a CAFLOU CSV export. Download your data from CAFLOU \u2192 Export, then upload here.',
    'settings.entity': 'Data Type',
    'settings.delimiter': 'CSV Delimiter',
    'settings.file': 'CSV File',
    'settings.preview': 'Preview',
    'settings.import_btn': 'Import',
    'settings.importing': 'Importing...',
    'settings.result_created': 'records created',
    'settings.result_skipped': 'duplicates skipped',
    'settings.db_title': 'Database',
    'settings.db_desc': 'SQLite with WAL \u2014 single-file, zero-ops, offline-ready. Backup by copying reckord.db.',
    'settings.caflou_hint_clients': 'Export: CRM \u2192 Contacts \u2192 Companies \u2192 Export to CSV',
    'settings.caflou_hint_projects': 'Export: Projects \u2192 All projects \u2192 Export to CSV',
    'settings.caflou_hint_crew': 'Export: CRM \u2192 Contacts \u2192 People \u2192 Export to CSV',
    'settings.caflou_hint_units': 'Export: Units \u2192 list view \u2192 Export to CSV',
    'settings.caflou_hint_productions': 'Export: Units \u2192 open unit \u2192 \u00dakoly tab \u2192 Export to CSV (repeat per unit)',
    'offer.to_project': '\u2192 Convert to Project',
    'offer.convert_confirm': 'Create a project from this offer? The offer will be marked as Won.',
    'offer.converted': 'Project created from offer!',
    'offer.items': 'Line Items', 'offer.add_item': '+ Add Line', 'offer.item_qty': 'Qty',
    'offer.item_desc': 'Description', 'offer.item_price': 'Unit Price',
    'offer.print': '\ud83d\uddb8 Print / PDF', 'offer.computed_total': 'Total computed from line items',
    'settings.company': 'Company Settings', 'settings.save_company': 'Save Settings',
    'client.risk': 'Risk',
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
    'nav.calendar': 'Kalend\u00e1\u0159', 'cal.today': 'Dnes', 'cal.month': 'M\u011bs\u00edc', 'cal.week': 'T\u00fdden', 'cal.no_events': '\u017d\u00e1dn\u00e9 produkce', 'cal.conflict': 'Konflikt pl\u00e1nov\u00e1n\u00ed!', 'cal.legend': 'Jednotky', 'cal.crew': '\u0161t\u00e1b',
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
    'label.country': 'Zem\u011b', 'label.vatNumber': 'DI\u010c', 'label.ico': 'I\u010cO',
    'label.riskFlag': 'Rizikov\u00fd p\u0159\u00edznak',
    'label.billingAddress': 'Faktura\u010dn\u00ed adresa', 'label.address': 'Adresa',
    'modal.newProject': '\ud83d\udcc1 Nov\u00fd projekt', 'modal.newClient': '\ud83c\udfe2 Nov\u00fd klient',
    'status.planning': 'Pl\u00e1nov\u00e1n\u00ed', 'status.confirmed': 'Potvrzeno',
    'status.in_progress': 'Prob\u00edh\u00e1', 'status.completed': 'Dokon\u010deno',
    'status.cancelled': 'Zru\u0161eno',
    'status.available': 'Dostupn\u00fd', 'status.on_project': 'Na projektu',
    'status.maintenance': 'Servis', 'status.retired': 'Vy\u0159azeno',
    'status.in_service': 'V servisu', 'status.leave': 'Na dovolen\u00e9', 'status.inactive': 'Neaktivn\u00ed',
    'status.draft': 'N\u00e1vrh', 'status.sent': 'Odesl\u00e1no', 'status.negotiation': 'Jedn\u00e1n\u00ed',
    'status.won': 'Vyhr\u00e1no', 'status.lost': 'Proh\u00e1no',
    'cat.camera': 'Kamera', 'cat.audio': 'Audio', 'cat.cables': 'Kabely',
    'cat.monitors': 'Monitory', 'cat.lighting': 'Osv\u011btlen\u00ed',
    'cat.transport': 'P\u0159epravn\u00ed boxy', 'cat.other': 'Ostatn\u00ed',
    'type.truck': 'Truck', 'type.van': 'Dod\u00e1vka', 'type.car': 'Auto', 'type.trailer': 'P\u0159\u00edv\u011bs',
    'equip.no_data': '\u017d\u00e1dn\u00e1 technika', 'equip.edit': 'Upravit techniku',
    'equip.delete_confirm': 'Smazat tuto polo\u017eku?', 'equip.code': 'K\u00f3d',
    'equip.serial': 'S\u00e9riov\u00e9 \u010d.', 'equip.purchase_date': 'Datum n\u00e1kupu',
    'equip.purchase_price': 'Po\u0159izovac\u00ed cena', 'equip.maintenance_due': 'Datum servisu',
    'fleet.no_data': '\u017d\u00e1dn\u00e1 vozidla', 'fleet.registration': 'SPZ', 'fleet.type': 'Typ',
    'fleet.year': 'Rok', 'fleet.mileage': 'Km', 'fleet.maintenance_due': 'Datum servisu',
    'fleet.insurance_expiry': 'Platnost poji\u0161t\u011bn\u00ed', 'fleet.edit': 'Upravit vozidlo',
    'fleet.delete_confirm': 'Smazat toto vozidlo?',
    'fleet.unit_id': 'ID jednotky', 'fleet.length_m': 'D\u00e9lka (m)', 'fleet.width_m': '\u0160\u00ed\u0159ka (m)',
    'fleet.height_m': 'V\u00fd\u0161ka (m)', 'fleet.power': 'P\u0159ipojen\u00ed el.',
    'fleet.specs_support': 'Technick\u00e1 podpora', 'fleet.specs_video': 'Video specs',
    'fleet.specs_audio': 'Audio specs', 'fleet.dimensions': 'Rozm\u011bry',
    'fleet.technical': 'Technick\u00e9 specifikace',
    'crew.no_data': '\u017d\u00e1dn\u00ed \u010dlenov\u00e9 \u0161t\u00e1bu', 'crew.first_name': 'Jm\u00e9no',
    'crew.last_name': 'P\u0159\u00edjmen\u00ed', 'crew.position': 'Pozice',
    'crew.edit': 'Upravit \u010dlena', 'crew.delete_confirm': 'Smazat tohoto \u010dlena?',
    'offer.no_data': '\u017d\u00e1dn\u00e9 nab\u00eddky', 'offer.number': '\u010c\u00edslo nab\u00eddky',
    'offer.total': 'Celkov\u00e1 hodnota', 'offer.margin': 'Mar\u017ee %',
    'offer.valid_until': 'Platnost do', 'offer.edit': 'Upravit nab\u00eddku',
    'offer.delete_confirm': 'Smazat tuto nab\u00eddku?',
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
    'dash.recent_projects': 'Posledn\u00ed projekty', 'dash.pipeline': 'Pipeline nab\u00eddek',
    'nav.settings': 'Nastaven\u00ed',
    'settings.title': 'Nastaven\u00ed a import',
    'settings.import_title': 'Import z CAFLOU',
    'settings.import_desc': 'Importujte data z CAFLOU CSV exportu. Stahujte data z CAFLOU \u2192 Export, pak nahrajte zde.',
    'settings.entity': 'Typ dat',
    'settings.delimiter': 'Odd\u011blova\u010d CSV',
    'settings.file': 'CSV soubor',
    'settings.preview': 'N\u00e1hled',
    'settings.import_btn': 'Importovat',
    'settings.importing': 'Importuji...',
    'settings.result_created': 'z\u00e1znam\u016f vytvo\u0159eno',
    'settings.result_skipped': 'duplik\u00e1t\u016f p\u0159esko\u010deno',
    'settings.db_title': 'Datab\u00e1ze',
    'settings.db_desc': 'SQLite s WAL \u2014 jeden soubor, \u017e\u00e1dn\u00e1 spr\u00e1va, offline. Z\u00e1loha = kop\u00edrova\u00e1n\u00ed reckord.db.',
    'settings.caflou_hint_clients': 'Export: CRM \u2192 Kontakty \u2192 Firmy \u2192 Exportovat do CSV',
    'settings.caflou_hint_projects': 'Export: Projekty \u2192 V\u0161echny projekty \u2192 Exportovat do CSV',
    'settings.caflou_hint_crew': 'Export: CRM \u2192 Kontakty \u2192 Osoby \u2192 Exportovat do CSV',
    'settings.caflou_hint_units': 'Export: Units \u2192 seznam \u2192 Exportovat do CSV',
    'settings.caflou_hint_productions': 'Export: Units \u2192 otev\u0159\u00edt jednotku \u2192 z\u00e1lo\u017eka \u00dakoly \u2192 Exportovat do CSV',
    'offer.to_project': '\u2192 P\u0159ev\u00e9st na projekt',
    'offer.convert_confirm': 'Vytvo\u0159it projekt z t\u00e9to nab\u00eddky? Nab\u00eddka bude ozna\u010dena jako vyhran\u00e1.',
    'offer.converted': 'Projekt vytvo\u0159en z nab\u00eddky!',
    'offer.items': 'Polo\u017eky', 'offer.add_item': '+ P\u0159idat \u0159\u00e1dek', 'offer.item_qty': 'Mn.',
    'offer.item_desc': 'Popis', 'offer.item_price': 'Jedn. cena',
    'offer.print': '\ud83d\uddb8 Tisk / PDF', 'offer.computed_total': 'Celkem vypo\u010dteno z polo\u017eek',
    'settings.company': 'Nastaven\u00ed firmy', 'settings.save_company': 'Ulo\u017eit nastaven\u00ed',
    'client.risk': 'Riziko',
    'msg.coming_soon': 'Tento modul bude brzy k dispozici.', 'msg.loading': 'Na\u010d\u00edt\u00e1m...',
    'msg.no_data': '\u017d\u00e1dn\u00e1 data', 'msg.saved': 'Ulo\u017eeno', 'msg.deleted': 'Smazano',
    'msg.error': 'Nastala chyba',
  },
  pl: {
    'nav.main': 'G\u0142\u00f3wne', 'nav.operations': 'Operacje', 'nav.commercial': 'Sprzeda\u017c',
    'nav.reports': 'Raporty', 'nav.dashboard': 'Pulpit', 'nav.projects': 'Projekty',
    'nav.clients': 'Klienci', 'nav.equipment': 'Sprz\u0119t', 'nav.fleet': 'Flota',
    'nav.crew': 'Ekipa', 'nav.offers': 'Oferty', 'nav.overview': 'Reporting',
    'nav.calendar': 'Kalendarz', 'cal.today': 'Dzi\u015b', 'cal.month': 'Miesi\u0105c', 'cal.week': 'Tydzie\u0144', 'cal.no_events': 'Brak produkcji', 'cal.conflict': 'Konflikt planowania!', 'cal.legend': 'Jednostki', 'cal.crew': 'ekipa',
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
    'label.country': 'Kraj', 'label.vatNumber': 'NIP VAT', 'label.ico': 'NIP / REGON',
    'label.riskFlag': 'Flaga ryzyka',
    'label.billingAddress': 'Adres rozliczeniowy', 'label.address': 'Adres',
    'modal.newProject': '\ud83d\udcc1 Nowy projekt', 'modal.newClient': '\ud83c\udfe2 Nowy klient',
    'status.planning': 'Planowanie', 'status.confirmed': 'Potwierdzony',
    'status.in_progress': 'W trakcie', 'status.completed': 'Zako\u0144czony',
    'status.cancelled': 'Anulowany',
    'status.available': 'Dost\u0119pny', 'status.on_project': 'Na projekcie',
    'status.maintenance': 'Serwis', 'status.retired': 'Wycofany',
    'status.in_service': 'W serwisie', 'status.leave': 'Na urlopie', 'status.inactive': 'Nieaktywny',
    'status.draft': 'Szkic', 'status.sent': 'Wys\u0142ano', 'status.negotiation': 'Negocjacje',
    'status.won': 'Wygrany', 'status.lost': 'Przegrany',
    'cat.camera': 'Kamera', 'cat.audio': 'Audio', 'cat.cables': 'Kable',
    'cat.monitors': 'Monitory', 'cat.lighting': 'O\u015bwietlenie',
    'cat.transport': 'Skrzynie transportowe', 'cat.other': 'Inne',
    'type.truck': 'Truck', 'type.van': 'Van', 'type.car': 'Samoch\u00f3d', 'type.trailer': 'Przyczepa',
    'equip.no_data': 'Brak sprz\u0119tu', 'equip.edit': 'Edytuj sprz\u0119t',
    'equip.delete_confirm': 'Usun\u0105\u0107 t\u0119 pozycj\u0119?', 'equip.code': 'Kod',
    'equip.serial': 'Nr seryjny', 'equip.purchase_date': 'Data zakupu',
    'equip.purchase_price': 'Cena zakupu', 'equip.maintenance_due': 'Termin serwisu',
    'fleet.no_data': 'Brak pojazd\u00f3w', 'fleet.registration': 'Rejestracja', 'fleet.type': 'Typ',
    'fleet.year': 'Rok', 'fleet.mileage': 'Km', 'fleet.maintenance_due': 'Termin serwisu',
    'fleet.insurance_expiry': 'Wa\u017cno\u015b\u0107 ubezpieczenia', 'fleet.edit': 'Edytuj pojazd',
    'fleet.delete_confirm': 'Usun\u0105\u0107 ten pojazd?',
    'fleet.unit_id': 'ID jednostki', 'fleet.length_m': 'D\u0142ugo\u015b\u0107 (m)', 'fleet.width_m': 'Szeroko\u015b\u0107 (m)',
    'fleet.height_m': 'Wysoko\u015b\u0107 (m)', 'fleet.power': 'Zasilanie',
    'fleet.specs_support': 'Specyf. wsparcia', 'fleet.specs_video': 'Specyf. video',
    'fleet.specs_audio': 'Specyf. audio', 'fleet.dimensions': 'Wymiary',
    'fleet.technical': 'Specyfikacje techniczne',
    'crew.no_data': 'Brak cz\u0142onk\u00f3w ekipy', 'crew.first_name': 'Imi\u0119',
    'crew.last_name': 'Nazwisko', 'crew.position': 'Stanowisko',
    'crew.edit': 'Edytuj cz\u0142onka', 'crew.delete_confirm': 'Usun\u0105\u0107 tego cz\u0142onka?',
    'offer.no_data': 'Brak ofert', 'offer.number': 'Numer oferty',
    'offer.total': 'Warto\u015b\u0107 ca\u0142kowita', 'offer.margin': 'Mar\u017ca %',
    'offer.valid_until': 'Wa\u017cna do', 'offer.edit': 'Edytuj ofert\u0119',
    'offer.delete_confirm': 'Usun\u0105\u0107 t\u0119 ofert\u0119?',
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
    'dash.recent_projects': 'Ostatnie projekty', 'dash.pipeline': 'Pipeline ofert',
    'nav.settings': 'Ustawienia',
    'settings.title': 'Ustawienia i import',
    'settings.import_title': 'Import z CAFLOU',
    'settings.import_desc': 'Importuj dane z eksportu CSV z CAFLOU. Pobierz dane z CAFLOU \u2192 Eksport, nast\u0119pnie wgraj tutaj.',
    'settings.entity': 'Typ danych',
    'settings.delimiter': 'Separator CSV',
    'settings.file': 'Plik CSV',
    'settings.preview': 'Podgl\u0105d',
    'settings.import_btn': 'Importuj',
    'settings.importing': 'Importowanie...',
    'settings.result_created': 'rekord\u00f3w utworzono',
    'settings.result_skipped': 'duplikat\u00f3w pomini\u0119to',
    'settings.db_title': 'Baza danych',
    'settings.db_desc': 'SQLite z WAL \u2014 jeden plik, zero obs\u0142ugi, offline. Kopia zapasowa = skopiuj reckord.db.',
    'settings.caflou_hint_clients': 'Eksport: CRM \u2192 Kontakty \u2192 Firmy \u2192 Eksportuj do CSV',
    'settings.caflou_hint_projects': 'Eksport: Projekty \u2192 Wszystkie projekty \u2192 Eksportuj do CSV',
    'settings.caflou_hint_crew': 'Eksport: CRM \u2192 Kontakty \u2192 Os\u00f3b \u2192 Eksportuj do CSV',
    'settings.caflou_hint_units': 'Eksport: Units \u2192 lista \u2192 Eksportuj do CSV',
    'settings.caflou_hint_productions': 'Eksport: Units \u2192 otw\u00f3rz jednostk\u0119 \u2192 zak\u0142adka \u00dakoly \u2192 Eksportuj do CSV',
    'offer.to_project': '\u2192 Konwertuj na projekt',
    'offer.convert_confirm': 'Utworzy\u0107 projekt z tej oferty? Oferta zostanie oznaczona jako wygrana.',
    'offer.converted': 'Projekt utworzony z oferty!',
    'offer.items': 'Pozycje', 'offer.add_item': '+ Dodaj pozycj\u0119', 'offer.item_qty': 'Ilo\u015b\u0107',
    'offer.item_desc': 'Opis', 'offer.item_price': 'Cena jedn.',
    'offer.print': '\ud83d\uddb8 Drukuj / PDF', 'offer.computed_total': 'Suma obliczona z pozycji',
    'settings.company': 'Ustawienia firmy', 'settings.save_company': 'Zapisz ustawienia',
    'client.risk': 'Ryzyko',
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
  'equipment-item': 'nav-equipment',
  fleet: 'nav-fleet',
  'fleet-item': 'nav-fleet',
  crew: 'nav-crew',
  'crew-member': 'nav-crew',
  offers: 'nav-offers',
  'offer-item': 'nav-offers',
  reports: 'nav-reports',
  calendar: 'nav-calendar',
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
  on_project: 'pill-orange',
  maintenance: 'pill-yellow',
  retired: 'pill-gray',
  in_service: 'pill-yellow',
  leave: 'pill-yellow',
  inactive: 'pill-gray',
  draft: 'pill-gray',
  sent: 'pill-blue',
  negotiation: 'pill-orange',
  won: 'pill-green',
  lost: 'pill-red',
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

function riskPillHtml(flag) {
  if (!flag || flag === 'normal') return '';
  const map = { watch: 'pill-orange', critical: 'pill-red' };
  const cls = map[flag] || 'pill-gray';
  return '<span class="pill ' + cls + '">' + esc(t('pill.' + flag)) + '</span>';
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
      '<button class="btn btn-outline btn-sm" onclick="renderDashboard(document.getElementById(\'content\'))" style="margin-right:6px">↻</button>' +
      '<button class="btn btn-red btn-sm" onclick="openProjectForm(null,null)">' + esc(t('btn.newProject')) + '</button></div>' +
      '<div class="content">' +
      '<div class="stats-grid">' +
      statCard(s.projects_active, t('dash.active_projects'), 'blue') +
      statCard(s.crew_available, t('dash.crew_available'), 'green') +
      statCard(s.equipment_total, t('dash.total_equipment'), 'orange') +
      statCard(s.fleet_total, t('dash.total_fleet'), '') +
      statCard(fmtMoney(s.offers_pipeline || 0), t('dash.pipeline'), '') +
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
    return '<div class="empty-state"><div class="empty-icon">&#128193;</div><div class="empty-text">' + esc(t('proj.no_data')) + '</div>' +
      '<button class="btn btn-red btn-sm" style="margin-top:12px" onclick="openProjectForm(null,null)">' + esc(t('btn.newProject')) + '</button></div>';
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

    // Crew section — always shown with Add button
    let crewRows = '';
    if (p.crew && p.crew.length > 0) {
      p.crew.forEach(function(c) {
        crewRows += '<tr>' +
          '<td><strong>' + esc(c.first_name + ' ' + c.last_name) + '</strong></td>' +
          '<td>' + esc(c.position || '') + '</td>' +
          '<td>' + esc(c.role || '') + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(c.date_from) + ' \u2013 ' + fmtDate(c.date_to) + '</td>' +
          '<td onclick="event.stopPropagation()">' +
          '<button class="btn btn-sm" style="background:#fde8e8;color:#E10B17;padding:3px 8px" ' +
          'onclick="removeAssignment(' + p.id + ',\'crew\',' + c.id + ')" title="Remove">\u2715</button></td>' +
          '</tr>';
      });
    }
    const crewHtml = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-header">' +
      '<div class="card-title">&#128101; ' + esc(t('ct.crewMembers')) + '</div>' +
      '<button class="btn btn-outline btn-sm" onclick="openAssignForm(' + p.id + ',\'crew\')">' + esc(t('btn.add')) + ' ' + esc(t('nav.crew')) + '</button>' +
      '</div>' +
      (crewRows ? '<div class="card-body"><table><thead><tr>' +
      '<th>' + esc(t('th.name')) + '</th><th>' + esc(t('crew.position')) + '</th>' +
      '<th>' + esc(t('th.role')) + '</th><th>' + esc(t('th.dates')) + '</th><th></th>' +
      '</tr></thead><tbody>' + crewRows + '</tbody></table></div>' :
      '<div class="empty-state" style="padding:20px"><div class="empty-text">' + esc(t('crew.no_data')) + '</div></div>') +
      '</div>';

    // Equipment section — always shown with Add button
    let equipRows = '';
    if (p.equipment && p.equipment.length > 0) {
      p.equipment.forEach(function(e) {
        equipRows += '<tr>' +
          '<td><strong>' + esc(e.eq_code || '') + '</strong><br>' + esc(e.eq_name || '') + '</td>' +
          '<td>' + esc(e.category || '') + '</td>' +
          '<td>' + (e.quantity || 1) + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(e.date_from) + ' \u2013 ' + fmtDate(e.date_to) + '</td>' +
          '<td onclick="event.stopPropagation()">' +
          '<button class="btn btn-sm" style="background:#fde8e8;color:#E10B17;padding:3px 8px" ' +
          'onclick="removeAssignment(' + p.id + ',\'equipment\',' + e.id + ')" title="Remove">\u2715</button></td>' +
          '</tr>';
      });
    }
    const equipHtml = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-header">' +
      '<div class="card-title">&#128230; ' + esc(t('nav.equipment')) + '</div>' +
      '<button class="btn btn-outline btn-sm" onclick="openAssignForm(' + p.id + ',\'equipment\')">' + esc(t('btn.add')) + ' ' + esc(t('nav.equipment')) + '</button>' +
      '</div>' +
      (equipRows ? '<div class="card-body"><table><thead><tr>' +
      '<th>' + esc(t('th.item')) + '</th><th>' + esc(t('th.category')) + '</th>' +
      '<th>Qty</th><th>' + esc(t('th.dates')) + '</th><th></th>' +
      '</tr></thead><tbody>' + equipRows + '</tbody></table></div>' :
      '<div class="empty-state" style="padding:20px"><div class="empty-text">' + esc(t('equip.no_data')) + '</div></div>') +
      '</div>';

    // Fleet section — always shown with Add button
    let fleetRows = '';
    if (p.fleet && p.fleet.length > 0) {
      p.fleet.forEach(function(f) {
        const driver = f.driver_first ? f.driver_first + ' ' + f.driver_last : '\u2014';
        fleetRows += '<tr>' +
          '<td>' + esc(f.vehicle_name || '') + '<br><span style="font-size:11px;color:#888">' + esc((f.brand || '') + ' ' + (f.model || '')) + '</span></td>' +
          '<td>' + esc(f.registration || '') + '</td>' +
          '<td>' + esc(driver) + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(f.date_from) + ' \u2013 ' + fmtDate(f.date_to) + '</td>' +
          '<td onclick="event.stopPropagation()">' +
          '<button class="btn btn-sm" style="background:#fde8e8;color:#E10B17;padding:3px 8px" ' +
          'onclick="removeAssignment(' + p.id + ',\'fleet\',' + f.id + ')" title="Remove">\u2715</button></td>' +
          '</tr>';
      });
    }
    const fleetHtml = '<div class="card" style="margin-bottom:16px">' +
      '<div class="card-header">' +
      '<div class="card-title">&#128667; ' + esc(t('nav.fleet')) + '</div>' +
      '<button class="btn btn-outline btn-sm" onclick="openAssignForm(' + p.id + ',\'fleet\')">' + esc(t('btn.add')) + ' ' + esc(t('nav.fleet')) + '</button>' +
      '</div>' +
      (fleetRows ? '<div class="card-body"><table><thead><tr>' +
      '<th>' + esc(t('th.vehicle')) + '</th><th>' + esc(t('th.registration')) + '</th>' +
      '<th>' + esc(t('th.driver')) + '</th><th>' + esc(t('th.dates')) + '</th><th></th>' +
      '</tr></thead><tbody>' + fleetRows + '</tbody></table></div>' :
      '<div class="empty-state" style="padding:20px"><div class="empty-text">' + esc(t('fleet.no_data')) + '</div></div>') +
      '</div>';

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
    return '<div class="empty-state"><div class="empty-icon">&#127970;</div><div class="empty-text">' + esc(t('client.no_data')) + '</div>' +
      '<button class="btn btn-red btn-sm" style="margin-top:12px" onclick="openClientForm(null)">' + esc(t('btn.newClient')) + '</button></div>';
  }
  let rows = '';
  clients.forEach(function(c) {
    rows += '<tr onclick="navigate(\'client\',' + c.id + ')">' +
      '<td><strong>' + esc(c.name) + '</strong>' + (c.risk_flag && c.risk_flag !== 'normal' ? ' ' + riskPillHtml(c.risk_flag) : '') + '</td>' +
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
      (c.ico ? infoRow(t('label.ico'), esc(c.ico)) : '') +
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

    const riskOpts = ['normal', 'watch', 'blocked'].map(function(r) {
      return '<option value="' + r + '"' + (r === (c.risk_flag || 'normal') ? ' selected' : '') + '>' + esc(r.charAt(0).toUpperCase() + r.slice(1)) + '</option>';
    }).join('');

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
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('label.ico')) + '</label><input type="text" id="cf-ico" value="' + esc(c.ico || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('label.vatNumber')) + '</label><input type="text" id="cf-vat" value="' + esc(c.vat_number || '') + '"></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.address')) + '</label>' +
      '<textarea id="cf-address">' + esc(c.address || '') + '</textarea></div></div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('label.riskFlag')) + '</label><select id="cf-risk">' + riskOpts + '</select></div>' +
      '<div class="form-group"><label>' + esc(t('label.notes')) + '</label><input type="text" id="cf-notes" value="' + esc(c.notes || '') + '"></div>' +
      '</div>' +
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
    ico: (document.getElementById('cf-ico') || {}).value || '',
    vat_number: (document.getElementById('cf-vat') || {}).value || '',
    risk_flag: (document.getElementById('cf-risk') || {}).value || 'normal',
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
// Equipment module
// ---------------------------------------------------------------------------
let _equipmentData = null;

async function renderEquipment(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.equipment')) + '</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const items = await api('GET', '/api/equipment');
    if (!items) return;
    _equipmentData = items;
    const topbar = '<div class="topbar">' +
      '<div class="topbar-title">' + esc(t('screen.equipment')) + '</div>' +
      '<div class="topbar-search"><span>&#128269;</span>' +
      '<input type="text" id="equip-search" placeholder="' + esc(t('ph.searchAsset')) + '" oninput="filterEquipment()">' +
      '</div>' +
      '<select id="equip-status-filter" onchange="filterEquipment()" style="border:1.5px solid #e8e8e8;border-radius:4px;padding:6px 10px;font-family:inherit;font-size:13px;outline:none;background:white;cursor:pointer;">' +
      '<option value="">' + esc(t('chip.all')) + '</option>' +
      '<option value="available">' + esc(t('status.available')) + '</option>' +
      '<option value="on_project">' + esc(t('status.on_project')) + '</option>' +
      '<option value="maintenance">' + esc(t('status.maintenance')) + '</option>' +
      '<option value="retired">' + esc(t('status.retired')) + '</option>' +
      '</select>' +
      '<button class="btn btn-red btn-sm" onclick="openEquipmentForm(null)">' + esc(t('btn.addAsset')) + '</button>' +
      '</div>';
    el.innerHTML = topbar + '<div class="content"><div class="card"><div class="card-body"><div id="equip-table-wrap">' + equipmentTableHtml(items) + '</div></div></div></div>';
  } catch (e) {
    el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.equipment')) + '</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div></div>';
  }
}

function filterEquipment() {
  if (!_equipmentData) return;
  const search = (document.getElementById('equip-search') || {}).value || '';
  const status = (document.getElementById('equip-status-filter') || {}).value || '';
  const sl = search.toLowerCase();
  const filtered = _equipmentData.filter(function(r) {
    const matchSearch = !sl ||
      (r.name && r.name.toLowerCase().includes(sl)) ||
      (r.code && r.code.toLowerCase().includes(sl)) ||
      (r.category && r.category.toLowerCase().includes(sl)) ||
      (r.brand && r.brand.toLowerCase().includes(sl));
    const matchStatus = !status || r.status === status;
    return matchSearch && matchStatus;
  });
  const wrap = document.getElementById('equip-table-wrap');
  if (wrap) wrap.innerHTML = equipmentTableHtml(filtered);
}

function equipmentTableHtml(items) {
  if (!items || items.length === 0) {
    return '<div class="empty-state"><div class="empty-icon">&#128230;</div><div class="empty-text">' + esc(t('equip.no_data')) + '</div>' +
      '<button class="btn btn-red btn-sm" style="margin-top:12px" onclick="openEquipmentForm(null)">' + esc(t('btn.addAsset')) + '</button></div>';
  }
  let rows = '';
  items.forEach(function(e) {
    rows += '<tr onclick="navigate(\'equipment-item\',' + e.id + ')">' +
      '<td><strong>' + esc(e.code || '') + '</strong></td>' +
      '<td>' + esc(e.name) + '</td>' +
      '<td>' + esc(e.category || '\u2014') + '</td>' +
      '<td>' + esc((e.brand || '') + (e.model ? ' ' + e.model : '') || '\u2014') + '</td>' +
      '<td>' + pillHtml(e.status) + '</td>' +
      '<td>' + esc(e.project_name || '\u2014') + '</td>' +
      '<td style="font-size:12px;color:#888">' + fmtDate(e.maintenance_due) + '</td>' +
      '<td onclick="event.stopPropagation()">' +
      '<button class="btn btn-outline btn-sm" onclick="openEquipmentForm(' + e.id + ')">' + esc(t('btn.edit')) + '</button>' +
      '</td>' +
      '</tr>';
  });
  return '<table><thead><tr>' +
    '<th>' + esc(t('equip.code')) + '</th>' +
    '<th>' + esc(t('th.name')) + '</th>' +
    '<th>' + esc(t('th.category')) + '</th>' +
    '<th>Brand / Model</th>' +
    '<th>' + esc(t('th.status')) + '</th>' +
    '<th>Current Project</th>' +
    '<th>' + esc(t('equip.maintenance_due')) + '</th>' +
    '<th></th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

async function renderEquipmentItem(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">...</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const e = await api('GET', '/api/equipment/' + S.viewId);
    if (!e) return;

    let assignHtml = '';
    if (e.assignments && e.assignments.length > 0) {
      let rows = '';
      e.assignments.forEach(function(a) {
        rows += '<tr><td>' + esc(a.project_name || '') + '<br><span style="font-size:11px;color:#888">' + esc(a.project_code || '') + '</span></td>' +
          '<td>' + pillHtml(a.project_status) + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(a.date_from) + ' \u2013 ' + fmtDate(a.date_to) + '</td>' +
          '</tr>';
      });
      assignHtml = '<table><thead><tr><th>Project</th><th>Status</th><th>' + esc(t('th.dates')) + '</th></tr></thead><tbody>' + rows + '</tbody></table>';
    } else {
      assignHtml = '<div class="empty-state" style="padding:24px"><div class="empty-text">' + esc(t('msg.no_data')) + '</div></div>';
    }

    el.innerHTML =
      '<div class="topbar">' +
      '<button class="btn btn-outline btn-sm" onclick="navigate(\'equipment\')">' + esc(t('btn.back')) + '</button>' +
      '<div class="topbar-title">' + esc(e.name) + ' ' + pillHtml(e.status) + '</div>' +
      '<button class="btn btn-outline btn-sm" onclick="openEquipmentForm(' + e.id + ')">' + esc(t('equip.edit')) + '</button>' +
      '<button class="btn btn-danger btn-sm" onclick="deleteEquipment(' + e.id + ')">' + esc(t('btn.delete')) + '</button>' +
      '</div>' +
      '<div class="content"><div class="two-col">' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128196; ' + esc(t('tab.overview')) + '</div></div>' +
      '<div class="card-body"><table class="info-table">' +
      infoRow(t('equip.code'), esc(e.code || '\u2014')) +
      infoRow(t('th.category'), esc(e.category || '\u2014')) +
      infoRow('Brand', esc(e.brand || '\u2014')) +
      infoRow('Model', esc(e.model || '\u2014')) +
      infoRow(t('equip.serial'), esc(e.serial_number || '\u2014')) +
      infoRow(t('equip.purchase_date'), fmtDate(e.purchase_date)) +
      infoRow(t('equip.purchase_price'), e.purchase_price ? fmtMoney(e.purchase_price) : '\u2014') +
      infoRow(t('equip.maintenance_due'), fmtDate(e.maintenance_due)) +
      (e.notes ? infoRow(t('label.notes'), esc(e.notes)) : '') +
      '</table></div></div>' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128193; Assignments</div></div>' +
      '<div class="card-body">' + assignHtml + '</div></div>' +
      '</div></div>';
  } catch (e2) {
    el.innerHTML = '<div class="topbar"><button class="btn btn-outline btn-sm" onclick="navigate(\'equipment\')">' + esc(t('btn.back')) + '</button><div class="topbar-title">Error</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e2.message) + '</div></div></div>';
  }
}

async function openEquipmentForm(id) {
  const modal = document.getElementById('modal-equipment');
  if (!modal) return;
  const titleEl = modal.querySelector('.modal-title');
  const bodyEl = modal.querySelector('.modal-body');
  titleEl.textContent = id ? t('equip.edit') : t('btn.addAsset');
  bodyEl.innerHTML = loadingHtml();
  openModal('modal-equipment');

  let e = { status: 'available' };
  try {
    if (id) {
      e = await api('GET', '/api/equipment/' + id);
      if (!e) return;
    }

    const cats = ['camera', 'audio', 'cables', 'monitors', 'lighting', 'transport', 'other'];
    const catOpts = '<option value="">-- Select --</option>' + cats.map(function(c) {
      return '<option value="' + c + '"' + (c === e.category ? ' selected' : '') + '>' + esc(t('cat.' + c)) + '</option>';
    }).join('');

    const statuses = ['available', 'on_project', 'maintenance', 'retired'];
    const statusOpts = statuses.map(function(s) {
      return '<option value="' + s + '"' + (s === (e.status || 'available') ? ' selected' : '') + '>' + esc(t('status.' + s)) + '</option>';
    }).join('');

    bodyEl.innerHTML =
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('equip.code')) + '</label><input type="text" id="ef-code" value="' + esc(e.code || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('th.status')) + '</label><select id="ef-status">' + statusOpts + '</select></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('th.name')) + ' *</label><input type="text" id="ef-name" value="' + esc(e.name || '') + '"></div></div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('th.category')) + '</label><select id="ef-category">' + catOpts + '</select></div>' +
      '<div class="form-group"><label>Brand</label><input type="text" id="ef-brand" value="' + esc(e.brand || '') + '"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>Model</label><input type="text" id="ef-model" value="' + esc(e.model || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('equip.serial')) + '</label><input type="text" id="ef-serial" value="' + esc(e.serial_number || '') + '"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('equip.purchase_date')) + '</label><input type="date" id="ef-purchase-date" value="' + esc(e.purchase_date || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('equip.purchase_price')) + '</label><input type="number" id="ef-purchase-price" value="' + (e.purchase_price || '') + '" min="0"></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group"><label>' + esc(t('equip.maintenance_due')) + '</label><input type="date" id="ef-maintenance" value="' + esc(e.maintenance_due || '') + '"></div></div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.notes')) + '</label><textarea id="ef-notes">' + esc(e.notes || '') + '</textarea></div></div>' +
      '<div class="form-actions">' +
      '<button class="btn btn-outline" onclick="closeModal(\'modal-equipment\')">' + esc(t('btn.cancel')) + '</button>' +
      '<button class="btn btn-red" onclick="saveEquipment(' + (id || 'null') + ')">' + esc(t('btn.save')) + '</button>' +
      '</div>';
  } catch (err) {
    bodyEl.innerHTML = '<div class="alert alert-err">' + esc(t('msg.error') + ': ' + err.message) + '</div>';
  }
}

async function saveEquipment(id) {
  const name = (document.getElementById('ef-name') || {}).value || '';
  if (!name.trim()) { toast(t('th.name') + ' required', 'err'); return; }
  const body = {
    code: (document.getElementById('ef-code') || {}).value || '',
    name: name.trim(),
    category: (document.getElementById('ef-category') || {}).value || '',
    brand: (document.getElementById('ef-brand') || {}).value || '',
    model: (document.getElementById('ef-model') || {}).value || '',
    serial_number: (document.getElementById('ef-serial') || {}).value || '',
    status: (document.getElementById('ef-status') || {}).value || 'available',
    purchase_date: (document.getElementById('ef-purchase-date') || {}).value || null,
    purchase_price: parseFloat((document.getElementById('ef-purchase-price') || {}).value) || 0,
    maintenance_due: (document.getElementById('ef-maintenance') || {}).value || null,
    notes: (document.getElementById('ef-notes') || {}).value || '',
  };
  try {
    if (id) { await api('PUT', '/api/equipment/' + id, body); }
    else { await api('POST', '/api/equipment', body); }
    closeModal('modal-equipment');
    toast(t('msg.saved'), 'ok');
    _equipmentData = null;
    if (id && S.view === 'equipment-item') { navigate('equipment-item', id); }
    else { navigate('equipment'); }
  } catch (e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

async function deleteEquipment(id) {
  if (!confirm(t('equip.delete_confirm'))) return;
  try {
    await api('DELETE', '/api/equipment/' + id);
    toast(t('msg.deleted'), 'ok');
    _equipmentData = null;
    navigate('equipment');
  } catch (e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

// ---------------------------------------------------------------------------
// Fleet module
// ---------------------------------------------------------------------------
let _fleetData = null;

async function renderFleet(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.fleet')) + '</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const items = await api('GET', '/api/fleet');
    if (!items) return;
    _fleetData = items;
    const topbar = '<div class="topbar">' +
      '<div class="topbar-title">' + esc(t('screen.fleet')) + '</div>' +
      '<div class="topbar-search"><span>&#128269;</span>' +
      '<input type="text" id="fleet-search" placeholder="' + esc(t('ph.searchVehicles')) + '" oninput="filterFleet()">' +
      '</div>' +
      '<select id="fleet-status-filter" onchange="filterFleet()" style="border:1.5px solid #e8e8e8;border-radius:4px;padding:6px 10px;font-family:inherit;font-size:13px;outline:none;background:white;cursor:pointer;">' +
      '<option value="">' + esc(t('chip.all')) + '</option>' +
      '<option value="available">' + esc(t('status.available')) + '</option>' +
      '<option value="on_project">' + esc(t('status.on_project')) + '</option>' +
      '<option value="in_service">' + esc(t('status.in_service')) + '</option>' +
      '<option value="retired">' + esc(t('status.retired')) + '</option>' +
      '</select>' +
      '<button class="btn btn-red btn-sm" onclick="openFleetForm(null)">' + esc(t('btn.addVehicle')) + '</button>' +
      '</div>';
    el.innerHTML = topbar + '<div class="content"><div class="card"><div class="card-body"><div id="fleet-table-wrap">' + fleetTableHtml(items) + '</div></div></div></div>';
  } catch (e) {
    el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.fleet')) + '</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div></div>';
  }
}

function filterFleet() {
  if (!_fleetData) return;
  const search = (document.getElementById('fleet-search') || {}).value || '';
  const status = (document.getElementById('fleet-status-filter') || {}).value || '';
  const sl = search.toLowerCase();
  const filtered = _fleetData.filter(function(r) {
    const matchSearch = !sl ||
      (r.name && r.name.toLowerCase().includes(sl)) ||
      (r.registration && r.registration.toLowerCase().includes(sl)) ||
      (r.brand && r.brand.toLowerCase().includes(sl));
    const matchStatus = !status || r.status === status;
    return matchSearch && matchStatus;
  });
  const wrap = document.getElementById('fleet-table-wrap');
  if (wrap) wrap.innerHTML = fleetTableHtml(filtered);
}

function fleetTableHtml(items) {
  if (!items || items.length === 0) {
    return '<div class="empty-state"><div class="empty-icon">&#128667;</div><div class="empty-text">' + esc(t('fleet.no_data')) + '</div>' +
      '<button class="btn btn-red btn-sm" style="margin-top:12px" onclick="openFleetForm(null)">' + esc(t('btn.addVehicle')) + '</button></div>';
  }
  let rows = '';
  items.forEach(function(f) {
    rows += '<tr onclick="navigate(\'fleet-item\',' + f.id + ')">' +
      '<td><strong>' + esc(f.registration) + '</strong></td>' +
      '<td>' + esc(f.name || '\u2014') + (f.unit_id ? ' <span class="tag">#' + f.unit_id + '</span>' : '') + '</td>' +
      '<td>' + esc((f.brand || '') + (f.model ? ' ' + f.model : '') || '\u2014') + '</td>' +
      '<td>' + (f.year || '\u2014') + '</td>' +
      '<td>' + esc(f.type || '\u2014') + '</td>' +
      '<td>' + pillHtml(f.status) + '</td>' +
      '<td>' + esc(f.project_name || '\u2014') + '</td>' +
      '<td style="font-size:12px;color:#888">' + fmtDate(f.maintenance_due) + '</td>' +
      '<td style="font-size:12px;color:#888">' + fmtDate(f.insurance_expiry) + '</td>' +
      '<td onclick="event.stopPropagation()">' +
      '<button class="btn btn-outline btn-sm" onclick="openFleetForm(' + f.id + ')">' + esc(t('btn.edit')) + '</button>' +
      '</td>' +
      '</tr>';
  });
  return '<table><thead><tr>' +
    '<th>' + esc(t('fleet.registration')) + '</th>' +
    '<th>' + esc(t('th.name')) + '</th>' +
    '<th>Brand / Model</th>' +
    '<th>' + esc(t('fleet.year')) + '</th>' +
    '<th>' + esc(t('fleet.type')) + '</th>' +
    '<th>' + esc(t('th.status')) + '</th>' +
    '<th>Current Project</th>' +
    '<th>' + esc(t('fleet.maintenance_due')) + '</th>' +
    '<th>' + esc(t('fleet.insurance_expiry')) + '</th>' +
    '<th></th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

async function renderFleetItem(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">...</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const f = await api('GET', '/api/fleet/' + S.viewId);
    if (!f) return;

    let assignHtml = '';
    if (f.assignments && f.assignments.length > 0) {
      let rows = '';
      f.assignments.forEach(function(a) {
        const driver = a.driver_first ? a.driver_first + ' ' + a.driver_last : '\u2014';
        rows += '<tr><td>' + esc(a.project_name || '') + '<br><span style="font-size:11px;color:#888">' + esc(a.project_code || '') + '</span></td>' +
          '<td>' + esc(driver) + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(a.date_from) + ' \u2013 ' + fmtDate(a.date_to) + '</td>' +
          '</tr>';
      });
      assignHtml = '<table><thead><tr><th>Project</th><th>' + esc(t('th.driver')) + '</th><th>' + esc(t('th.dates')) + '</th></tr></thead><tbody>' + rows + '</tbody></table>';
    } else {
      assignHtml = '<div class="empty-state" style="padding:24px"><div class="empty-text">' + esc(t('msg.no_data')) + '</div></div>';
    }

    el.innerHTML =
      '<div class="topbar">' +
      '<button class="btn btn-outline btn-sm" onclick="navigate(\'fleet\')">' + esc(t('btn.back')) + '</button>' +
      '<div class="topbar-title">' + esc(f.registration) + (f.name ? ' \u2013 ' + esc(f.name) : '') + ' ' + pillHtml(f.status) + '</div>' +
      '<button class="btn btn-outline btn-sm" onclick="openFleetForm(' + f.id + ')">' + esc(t('fleet.edit')) + '</button>' +
      '<button class="btn btn-danger btn-sm" onclick="deleteFleet(' + f.id + ')">' + esc(t('btn.delete')) + '</button>' +
      '</div>' +
      '<div class="content"><div class="two-col">' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128196; ' + esc(t('tab.overview')) + '</div></div>' +
      '<div class="card-body"><table class="info-table">' +
      infoRow(t('fleet.type'), esc(f.type || '\u2014')) +
      infoRow('Brand', esc(f.brand || '\u2014')) +
      infoRow('Model', esc(f.model || '\u2014')) +
      infoRow(t('fleet.year'), f.year ? String(f.year) : '\u2014') +
      infoRow(t('fleet.mileage'), f.mileage ? f.mileage + ' km' : '\u2014') +
      infoRow(t('fleet.maintenance_due'), fmtDate(f.maintenance_due)) +
      infoRow(t('fleet.insurance_expiry'), fmtDate(f.insurance_expiry)) +
      (f.notes ? infoRow(t('label.notes'), esc(f.notes)) : '') +
      (f.unit_id ? infoRow(t('fleet.unit_id'), '<strong>#' + f.unit_id + '</strong>') : '') +
      (f.power_connection ? infoRow(t('fleet.power'), esc(f.power_connection)) : '') +
      ((f.length_m || f.width_m || f.height_m) ? infoRow(t('fleet.dimensions'),
        [f.length_m ? f.length_m + ' m' : null, f.width_m ? f.width_m + ' m' : null, f.height_m ? f.height_m + ' m' : null]
        .filter(Boolean).join(' \u00d7 ')) : '') +
      '</table></div></div>' +
      (f.specs_support || f.specs_video || f.specs_audio ?
        '<div class="card" style="margin-top:0">' +
        '<div class="card-header"><div class="card-title">\u2699\ufe0f ' + esc(t('fleet.technical')) + '</div></div>' +
        '<div class="card-body"><table class="info-table">' +
        (f.specs_support ? infoRow(t('fleet.specs_support'), '<span style="white-space:pre-wrap;font-size:12px">' + esc(f.specs_support) + '</span>') : '') +
        (f.specs_video ? infoRow(t('fleet.specs_video'), '<span style="white-space:pre-wrap;font-size:12px">' + esc(f.specs_video) + '</span>') : '') +
        (f.specs_audio ? infoRow(t('fleet.specs_audio'), '<span style="white-space:pre-wrap;font-size:12px">' + esc(f.specs_audio) + '</span>') : '') +
        '</table></div></div>'
        : '') +
      '<div class="card"><div class="card-header"><div class="card-title">&#128193; Assignments</div></div>' +
      '<div class="card-body">' + assignHtml + '</div></div>' +
      '</div></div>';
  } catch (e2) {
    el.innerHTML = '<div class="topbar"><button class="btn btn-outline btn-sm" onclick="navigate(\'fleet\')">' + esc(t('btn.back')) + '</button><div class="topbar-title">Error</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e2.message) + '</div></div></div>';
  }
}

async function openFleetForm(id) {
  const modal = document.getElementById('modal-fleet');
  if (!modal) return;
  const titleEl = modal.querySelector('.modal-title');
  const bodyEl = modal.querySelector('.modal-body');
  titleEl.textContent = id ? t('fleet.edit') : t('btn.addVehicle');
  bodyEl.innerHTML = loadingHtml();
  openModal('modal-fleet');

  let f = { status: 'available' };
  try {
    if (id) {
      f = await api('GET', '/api/fleet/' + id);
      if (!f) return;
    }

    const types = ['truck', 'van', 'car', 'trailer'];
    const typeOpts = '<option value="">-- Select --</option>' + types.map(function(tp) {
      return '<option value="' + tp + '"' + (tp === f.type ? ' selected' : '') + '>' + esc(t('type.' + tp)) + '</option>';
    }).join('');

    const statuses = ['available', 'on_project', 'in_service', 'retired'];
    const statusOpts = statuses.map(function(s) {
      return '<option value="' + s + '"' + (s === (f.status || 'available') ? ' selected' : '') + '>' + esc(t('status.' + s)) + '</option>';
    }).join('');

    bodyEl.innerHTML =
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('fleet.registration')) + ' *</label><input type="text" id="ff-reg" value="' + esc(f.registration || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('th.name')) + '</label><input type="text" id="ff-name" value="' + esc(f.name || '') + '"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('fleet.type')) + '</label><select id="ff-type">' + typeOpts + '</select></div>' +
      '<div class="form-group"><label>' + esc(t('th.status')) + '</label><select id="ff-status">' + statusOpts + '</select></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>Brand</label><input type="text" id="ff-brand" value="' + esc(f.brand || '') + '"></div>' +
      '<div class="form-group"><label>Model</label><input type="text" id="ff-model" value="' + esc(f.model || '') + '"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('fleet.year')) + '</label><input type="number" id="ff-year" value="' + (f.year || '') + '" min="1900" max="2100"></div>' +
      '<div class="form-group"><label>' + esc(t('fleet.mileage')) + '</label><input type="number" id="ff-mileage" value="' + (f.mileage || 0) + '" min="0"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('fleet.maintenance_due')) + '</label><input type="date" id="ff-maintenance" value="' + esc(f.maintenance_due || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('fleet.insurance_expiry')) + '</label><input type="date" id="ff-insurance" value="' + esc(f.insurance_expiry || '') + '"></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.notes')) + '</label><textarea id="ff-notes">' + esc(f.notes || '') + '</textarea></div></div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('fleet.unit_id')) + '</label><input type="number" id="fl-unit-id" value="' + esc(String(f.unit_id || '')) + '" placeholder="101"></div>' +
      '<div class="form-group"><label>' + esc(t('fleet.power')) + '</label>' +
      '<input type="text" id="fl-power" value="' + esc(f.power_connection || '') + '" placeholder="63A CEE" list="power-presets">' +
      '<datalist id="power-presets"><option value="16A CEE"><option value="32A CEE"><option value="63A CEE"><option value="125A CEE"><option value="2× 63A CEE"><option value="Shore power"><option value="None"></datalist></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('fleet.length_m')) + '</label><input type="number" id="fl-length" value="' + esc(String(f.length_m || '')) + '" step="0.01" placeholder="11.5"></div>' +
      '<div class="form-group"><label>' + esc(t('fleet.width_m')) + '</label><input type="number" id="fl-width" value="' + esc(String(f.width_m || '')) + '" step="0.01" placeholder="2.5"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('fleet.height_m')) + '</label><input type="number" id="fl-height" value="' + esc(String(f.height_m || '')) + '" step="0.01" placeholder="3.75"></div>' +
      '<div class="form-group"></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('fleet.specs_support')) + '</label><textarea id="fl-specs-support" style="min-height:60px">' + esc(f.specs_support || '') + '</textarea></div></div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('fleet.specs_video')) + '</label><textarea id="fl-specs-video" style="min-height:60px">' + esc(f.specs_video || '') + '</textarea></div></div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('fleet.specs_audio')) + '</label><textarea id="fl-specs-audio" style="min-height:60px">' + esc(f.specs_audio || '') + '</textarea></div></div>' +
      '<div class="form-actions">' +
      '<button class="btn btn-outline" onclick="closeModal(\'modal-fleet\')">' + esc(t('btn.cancel')) + '</button>' +
      '<button class="btn btn-red" onclick="saveFleet(' + (id || 'null') + ')">' + esc(t('btn.save')) + '</button>' +
      '</div>';
  } catch (err) {
    bodyEl.innerHTML = '<div class="alert alert-err">' + esc(t('msg.error') + ': ' + err.message) + '</div>';
  }
}

async function saveFleet(id) {
  const reg = (document.getElementById('ff-reg') || {}).value || '';
  if (!reg.trim()) { toast(t('fleet.registration') + ' required', 'err'); return; }
  const body = {
    registration: reg.trim(),
    name: (document.getElementById('ff-name') || {}).value || '',
    type: (document.getElementById('ff-type') || {}).value || '',
    brand: (document.getElementById('ff-brand') || {}).value || '',
    model: (document.getElementById('ff-model') || {}).value || '',
    year: parseInt((document.getElementById('ff-year') || {}).value) || null,
    status: (document.getElementById('ff-status') || {}).value || 'available',
    mileage: parseInt((document.getElementById('ff-mileage') || {}).value) || 0,
    maintenance_due: (document.getElementById('ff-maintenance') || {}).value || null,
    insurance_expiry: (document.getElementById('ff-insurance') || {}).value || null,
    notes: (document.getElementById('ff-notes') || {}).value || '',
    unit_id: parseInt((document.getElementById('fl-unit-id') || {}).value) || null,
    power_connection: (document.getElementById('fl-power') || {}).value || '',
    length_m: parseFloat((document.getElementById('fl-length') || {}).value) || null,
    width_m: parseFloat((document.getElementById('fl-width') || {}).value) || null,
    height_m: parseFloat((document.getElementById('fl-height') || {}).value) || null,
    specs_support: (document.getElementById('fl-specs-support') || {}).value || '',
    specs_video: (document.getElementById('fl-specs-video') || {}).value || '',
    specs_audio: (document.getElementById('fl-specs-audio') || {}).value || '',
  };
  try {
    if (id) { await api('PUT', '/api/fleet/' + id, body); }
    else { await api('POST', '/api/fleet', body); }
    closeModal('modal-fleet');
    toast(t('msg.saved'), 'ok');
    _fleetData = null;
    if (id && S.view === 'fleet-item') { navigate('fleet-item', id); }
    else { navigate('fleet'); }
  } catch (e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

async function deleteFleet(id) {
  if (!confirm(t('fleet.delete_confirm'))) return;
  try {
    await api('DELETE', '/api/fleet/' + id);
    toast(t('msg.deleted'), 'ok');
    _fleetData = null;
    navigate('fleet');
  } catch (e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

// ---------------------------------------------------------------------------
// Crew module
// ---------------------------------------------------------------------------
let _crewData = null;

async function renderCrew(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.crew')) + '</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const items = await api('GET', '/api/crew');
    if (!items) return;
    _crewData = items;
    const topbar = '<div class="topbar">' +
      '<div class="topbar-title">' + esc(t('screen.crew')) + '</div>' +
      '<div class="topbar-search"><span>&#128269;</span>' +
      '<input type="text" id="crew-search" placeholder="' + esc(t('ph.searchCrew')) + '" oninput="filterCrew()">' +
      '</div>' +
      '<select id="crew-status-filter" onchange="filterCrew()" style="border:1.5px solid #e8e8e8;border-radius:4px;padding:6px 10px;font-family:inherit;font-size:13px;outline:none;background:white;cursor:pointer;">' +
      '<option value="">' + esc(t('chip.all')) + '</option>' +
      '<option value="available">' + esc(t('status.available')) + '</option>' +
      '<option value="on_project">' + esc(t('status.on_project')) + '</option>' +
      '<option value="leave">' + esc(t('status.leave')) + '</option>' +
      '<option value="inactive">' + esc(t('status.inactive')) + '</option>' +
      '</select>' +
      '<button class="btn btn-red btn-sm" onclick="openCrewForm(null)">' + esc(t('btn.addMember')) + '</button>' +
      '</div>';
    el.innerHTML = topbar + '<div class="content"><div class="card"><div class="card-body"><div id="crew-table-wrap">' + crewTableHtml(items) + '</div></div></div></div>';
  } catch (e) {
    el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.crew')) + '</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div></div>';
  }
}

function filterCrew() {
  if (!_crewData) return;
  const search = (document.getElementById('crew-search') || {}).value || '';
  const status = (document.getElementById('crew-status-filter') || {}).value || '';
  const sl = search.toLowerCase();
  const filtered = _crewData.filter(function(r) {
    const matchSearch = !sl ||
      (r.first_name && r.first_name.toLowerCase().includes(sl)) ||
      (r.last_name && r.last_name.toLowerCase().includes(sl)) ||
      (r.position && r.position.toLowerCase().includes(sl)) ||
      (r.email && r.email.toLowerCase().includes(sl));
    const matchStatus = !status || r.status === status;
    return matchSearch && matchStatus;
  });
  const wrap = document.getElementById('crew-table-wrap');
  if (wrap) wrap.innerHTML = crewTableHtml(filtered);
}

function crewTableHtml(items) {
  if (!items || items.length === 0) {
    return '<div class="empty-state"><div class="empty-icon">&#128101;</div><div class="empty-text">' + esc(t('crew.no_data')) + '</div>' +
      '<button class="btn btn-red btn-sm" style="margin-top:12px" onclick="openCrewForm(null)">' + esc(t('btn.addMember')) + '</button></div>';
  }
  let rows = '';
  items.forEach(function(c) {
    rows += '<tr onclick="navigate(\'crew-member\',' + c.id + ')">' +
      '<td><strong>' + esc(c.last_name + ', ' + c.first_name) + '</strong></td>' +
      '<td>' + esc(c.position || '\u2014') + '</td>' +
      '<td>' + (c.phone ? '<a href="tel:' + esc(c.phone) + '" onclick="event.stopPropagation()">' + esc(c.phone) + '</a>' : '\u2014') + '</td>' +
      '<td>' + (c.email ? '<a href="mailto:' + esc(c.email) + '" onclick="event.stopPropagation()">' + esc(c.email) + '</a>' : '\u2014') + '</td>' +
      '<td>' + pillHtml(c.status) + '</td>' +
      '<td onclick="event.stopPropagation()">' +
      '<button class="btn btn-outline btn-sm" onclick="openCrewForm(' + c.id + ')">' + esc(t('btn.edit')) + '</button>' +
      '</td>' +
      '</tr>';
  });
  return '<table><thead><tr>' +
    '<th>' + esc(t('th.name')) + '</th>' +
    '<th>' + esc(t('crew.position')) + '</th>' +
    '<th>' + esc(t('label.phone')) + '</th>' +
    '<th>' + esc(t('label.email')) + '</th>' +
    '<th>' + esc(t('th.status')) + '</th>' +
    '<th></th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

async function renderCrewMember(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">...</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const c = await api('GET', '/api/crew/' + S.viewId);
    if (!c) return;

    let assignHtml = '';
    if (c.assignments && c.assignments.length > 0) {
      let rows = '';
      c.assignments.forEach(function(a) {
        rows += '<tr><td>' + esc(a.project_name || '') + '<br><span style="font-size:11px;color:#888">' + esc(a.project_code || '') + '</span></td>' +
          '<td>' + pillHtml(a.project_status) + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(a.date_from) + ' \u2013 ' + fmtDate(a.date_to) + '</td>' +
          '</tr>';
      });
      assignHtml = '<table><thead><tr><th>Project</th><th>Status</th><th>' + esc(t('th.dates')) + '</th></tr></thead><tbody>' + rows + '</tbody></table>';
    } else {
      assignHtml = '<div class="empty-state" style="padding:24px"><div class="empty-text">' + esc(t('msg.no_data')) + '</div></div>';
    }

    el.innerHTML =
      '<div class="topbar">' +
      '<button class="btn btn-outline btn-sm" onclick="navigate(\'crew\')">' + esc(t('btn.back')) + '</button>' +
      '<div class="topbar-title">' + esc(c.first_name + ' ' + c.last_name) + ' ' + pillHtml(c.status) + '</div>' +
      '<button class="btn btn-outline btn-sm" onclick="openCrewForm(' + c.id + ')">' + esc(t('crew.edit')) + '</button>' +
      '<button class="btn btn-danger btn-sm" onclick="deleteCrew(' + c.id + ')">' + esc(t('btn.delete')) + '</button>' +
      '</div>' +
      '<div class="content"><div class="two-col">' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128196; ' + esc(t('tab.overview')) + '</div></div>' +
      '<div class="card-body"><table class="info-table">' +
      infoRow(t('crew.position'), esc(c.position || '\u2014')) +
      infoRow(t('label.phone'), c.phone ? '<a href="tel:' + esc(c.phone) + '">' + esc(c.phone) + '</a>' : '\u2014') +
      infoRow(t('label.email'), c.email ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>' : '\u2014') +
      (c.notes ? infoRow(t('label.notes'), esc(c.notes)) : '') +
      '</table></div></div>' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128193; Assignments</div></div>' +
      '<div class="card-body">' + assignHtml + '</div></div>' +
      '</div></div>';
  } catch (e2) {
    el.innerHTML = '<div class="topbar"><button class="btn btn-outline btn-sm" onclick="navigate(\'crew\')">' + esc(t('btn.back')) + '</button><div class="topbar-title">Error</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e2.message) + '</div></div></div>';
  }
}

async function openCrewForm(id) {
  const modal = document.getElementById('modal-crew');
  if (!modal) return;
  const titleEl = modal.querySelector('.modal-title');
  const bodyEl = modal.querySelector('.modal-body');
  titleEl.textContent = id ? t('crew.edit') : t('btn.addMember');
  bodyEl.innerHTML = loadingHtml();
  openModal('modal-crew');

  let c = { status: 'available' };
  try {
    if (id) {
      c = await api('GET', '/api/crew/' + id);
      if (!c) return;
    }

    const statuses = ['available', 'on_project', 'leave', 'inactive'];
    const statusOpts = statuses.map(function(s) {
      return '<option value="' + s + '"' + (s === (c.status || 'available') ? ' selected' : '') + '>' + esc(t('status.' + s)) + '</option>';
    }).join('');

    bodyEl.innerHTML =
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('crew.first_name')) + ' *</label><input type="text" id="crf-first" value="' + esc(c.first_name || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('crew.last_name')) + ' *</label><input type="text" id="crf-last" value="' + esc(c.last_name || '') + '"></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('crew.position')) + '</label><input type="text" id="crf-position" value="' + esc(c.position || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('th.status')) + '</label><select id="crf-status">' + statusOpts + '</select></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('label.phone')) + '</label><input type="text" id="crf-phone" value="' + esc(c.phone || '') + '"></div>' +
      '<div class="form-group"><label>' + esc(t('label.email')) + '</label><input type="email" id="crf-email" value="' + esc(c.email || '') + '"></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.notes')) + '</label><textarea id="crf-notes">' + esc(c.notes || '') + '</textarea></div></div>' +
      '<div class="form-actions">' +
      '<button class="btn btn-outline" onclick="closeModal(\'modal-crew\')">' + esc(t('btn.cancel')) + '</button>' +
      '<button class="btn btn-red" onclick="saveCrew(' + (id || 'null') + ')">' + esc(t('btn.save')) + '</button>' +
      '</div>';
  } catch (err) {
    bodyEl.innerHTML = '<div class="alert alert-err">' + esc(t('msg.error') + ': ' + err.message) + '</div>';
  }
}

async function saveCrew(id) {
  const first = (document.getElementById('crf-first') || {}).value || '';
  const last = (document.getElementById('crf-last') || {}).value || '';
  if (!first.trim() || !last.trim()) { toast(t('crew.first_name') + ' and ' + t('crew.last_name') + ' required', 'err'); return; }
  const body = {
    first_name: first.trim(),
    last_name: last.trim(),
    position: (document.getElementById('crf-position') || {}).value || '',
    phone: (document.getElementById('crf-phone') || {}).value || '',
    email: (document.getElementById('crf-email') || {}).value || '',
    status: (document.getElementById('crf-status') || {}).value || 'available',
    notes: (document.getElementById('crf-notes') || {}).value || '',
  };
  try {
    if (id) { await api('PUT', '/api/crew/' + id, body); }
    else { await api('POST', '/api/crew', body); }
    closeModal('modal-crew');
    toast(t('msg.saved'), 'ok');
    _crewData = null;
    if (id && S.view === 'crew-member') { navigate('crew-member', id); }
    else { navigate('crew'); }
  } catch (e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

async function deleteCrew(id) {
  if (!confirm(t('crew.delete_confirm'))) return;
  try {
    await api('DELETE', '/api/crew/' + id);
    toast(t('msg.deleted'), 'ok');
    _crewData = null;
    navigate('crew');
  } catch (e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

// ---------------------------------------------------------------------------
// Offers module
// ---------------------------------------------------------------------------
let _offersData = null;
let _offersClients = null;
let _offersProjects = null;

async function renderOffers(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.offers')) + '</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const [items, clients] = await Promise.all([
      api('GET', '/api/offers'),
      api('GET', '/api/clients'),
    ]);
    if (!items) return;
    _offersData = items;
    _offersClients = clients || [];

    const pipeline = items.filter(function(o) { return o.status === 'won' || o.status === 'negotiation' || o.status === 'sent'; })
      .reduce(function(sum, o) { return sum + (o.total_value || 0); }, 0);
    const wonCount = items.filter(function(o) { return o.status === 'won'; }).length;
    const closedCount = items.filter(function(o) { return o.status === 'won' || o.status === 'lost'; }).length;
    const winRate = closedCount > 0 ? Math.round((wonCount / closedCount) * 100) : 0;

    const topbar = '<div class="topbar">' +
      '<div class="topbar-title">' + esc(t('screen.offers')) + '</div>' +
      '<div class="topbar-search"><span>&#128269;</span>' +
      '<input type="text" id="offers-search" placeholder="' + esc(t('ph.searchOffers')) + '" oninput="filterOffers()">' +
      '</div>' +
      '<select id="offers-status-filter" onchange="filterOffers()" style="border:1.5px solid #e8e8e8;border-radius:4px;padding:6px 10px;font-family:inherit;font-size:13px;outline:none;background:white;cursor:pointer;">' +
      '<option value="">' + esc(t('chip.all')) + '</option>' +
      '<option value="draft">' + esc(t('status.draft')) + '</option>' +
      '<option value="sent">' + esc(t('status.sent')) + '</option>' +
      '<option value="negotiation">' + esc(t('status.negotiation')) + '</option>' +
      '<option value="won">' + esc(t('status.won')) + '</option>' +
      '<option value="lost">' + esc(t('status.lost')) + '</option>' +
      '</select>' +
      '<button class="btn btn-red btn-sm" onclick="openOfferForm(null)">' + esc(t('btn.newOffer')) + '</button>' +
      '</div>';

    const statsHtml = '<div class="stats-grid" style="margin-bottom:20px">' +
      statCard(fmtMoney(pipeline), t('stat.pipelineVal'), 'blue') +
      statCard(winRate + '%', t('stat.winRate'), 'green') +
      statCard(items.length, 'Total Offers', '') +
      statCard(wonCount, t('status.won'), '') +
      '</div>';

    el.innerHTML = topbar + '<div class="content">' + statsHtml +
      '<div class="card"><div class="card-body"><div id="offers-table-wrap">' + offersTableHtml(items) + '</div></div></div></div>';
  } catch (e) {
    el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('screen.offers')) + '</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div></div>';
  }
}

function filterOffers() {
  if (!_offersData) return;
  const search = (document.getElementById('offers-search') || {}).value || '';
  const status = (document.getElementById('offers-status-filter') || {}).value || '';
  const sl = search.toLowerCase();
  const filtered = _offersData.filter(function(r) {
    const matchSearch = !sl ||
      (r.number && r.number.toLowerCase().includes(sl)) ||
      (r.client_name && r.client_name.toLowerCase().includes(sl));
    const matchStatus = !status || r.status === status;
    return matchSearch && matchStatus;
  });
  const wrap = document.getElementById('offers-table-wrap');
  if (wrap) wrap.innerHTML = offersTableHtml(filtered);
}

function offersTableHtml(items) {
  if (!items || items.length === 0) {
    return '<div class="empty-state"><div class="empty-icon">&#128176;</div><div class="empty-text">' + esc(t('offer.no_data')) + '</div>' +
      '<button class="btn btn-red btn-sm" style="margin-top:12px" onclick="openOfferForm(null)">' + esc(t('btn.newOffer')) + '</button></div>';
  }
  let rows = '';
  items.forEach(function(o) {
    rows += '<tr onclick="navigate(\'offer-item\',' + o.id + ')">' +
      '<td><strong>' + esc(o.number) + '</strong></td>' +
      '<td>' + esc(o.client_name || '\u2014') + '</td>' +
      '<td>' + (o.project_name ? esc(o.project_name) : '\u2014') + '</td>' +
      '<td>' + pillHtml(o.status) + '</td>' +
      '<td>' + fmtMoney(o.total_value) + '</td>' +
      '<td>' + (o.margin_pct ? o.margin_pct + '%' : '\u2014') + '</td>' +
      '<td style="font-size:12px;color:#888">' + fmtDate(o.valid_until) + '</td>' +
      '<td onclick="event.stopPropagation()">' +
      '<button class="btn btn-outline btn-sm" onclick="openOfferForm(' + o.id + ')">' + esc(t('btn.edit')) + '</button>' +
      '</td>' +
      '</tr>';
  });
  return '<table><thead><tr>' +
    '<th>' + esc(t('offer.number')) + '</th>' +
    '<th>' + esc(t('th.client')) + '</th>' +
    '<th>Project</th>' +
    '<th>' + esc(t('th.status')) + '</th>' +
    '<th>' + esc(t('offer.total')) + '</th>' +
    '<th>' + esc(t('offer.margin')) + '</th>' +
    '<th>' + esc(t('offer.valid_until')) + '</th>' +
    '<th></th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

async function renderOfferItem(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">...</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    const o = await api('GET', '/api/offers/' + S.viewId);
    if (!o) return;

    el.innerHTML =
      '<div class="topbar">' +
      '<button class="btn btn-outline btn-sm" onclick="navigate(\'offers\')">' + esc(t('btn.back')) + '</button>' +
      '<div class="topbar-title">' + esc(o.number) + ' ' + pillHtml(o.status) + '</div>' +
      (o.status !== 'lost' ? '<button class="btn btn-sm" style="background:#e8f5e9;color:#2e7d32;border:1.5px solid #a5d6a7" onclick="convertOfferToProject(' + o.id + ')">' + esc(t('offer.to_project')) + '</button>' : '') +
      '<button class="btn btn-sm" style="background:#E10B17;color:white" onclick="window.open(\'/api/offers/' + o.id + '/print\', \'_blank\')">' + esc(t('offer.print')) + '</button>' +
      '<button class="btn btn-outline btn-sm" onclick="openOfferForm(' + o.id + ')">' + esc(t('offer.edit')) + '</button>' +
      '<button class="btn btn-danger btn-sm" onclick="deleteOffer(' + o.id + ')">' + esc(t('btn.delete')) + '</button>' +
      '</div>' +
      '<div class="content"><div class="card"><div class="card-body"><table class="info-table">' +
      infoRow(t('th.client'), o.client_name ? '<a onclick="navigate(\'client\',' + o.client_id + ')" style="cursor:pointer;color:var(--red)">' + esc(o.client_name) + '</a>' : '\u2014') +
      infoRow('Project', o.project_name ? '<a onclick="navigate(\'project\',' + o.project_id + ')" style="cursor:pointer;color:var(--red)">' + esc(o.project_name) + ' (' + esc(o.project_code || '') + ')</a>' : '\u2014') +
      infoRow(t('th.status'), pillHtml(o.status)) +
      '<tr><td>' + esc(t('offer.total')) + '</td><td style="font-size:20px;font-weight:800">' + fmtMoney(o.total_value) + '</td></tr>' +
      infoRow(t('offer.margin'), o.margin_pct ? o.margin_pct + '%' : '\u2014') +
      infoRow(t('offer.valid_until'), fmtDate(o.valid_until)) +
      (o.notes ? infoRow(t('label.notes'), esc(o.notes)) : '') +
      '</table></div></div></div>';
  } catch (e2) {
    el.innerHTML = '<div class="topbar"><button class="btn btn-outline btn-sm" onclick="navigate(\'offers\')">' + esc(t('btn.back')) + '</button><div class="topbar-title">Error</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e2.message) + '</div></div></div>';
  }
}

async function openOfferForm(id) {
  const modal = document.getElementById('modal-offer');
  if (!modal) return;
  const titleEl = modal.querySelector('.modal-title');
  const bodyEl = modal.querySelector('.modal-body');
  titleEl.textContent = id ? t('offer.edit') : t('btn.newOffer');
  bodyEl.innerHTML = loadingHtml();
  openModal('modal-offer');

  let o = { status: 'draft' };
  try {
    const [clients, projects] = await Promise.all([
      api('GET', '/api/clients'),
      api('GET', '/api/projects'),
    ]);
    if (id) {
      o = await api('GET', '/api/offers/' + id);
      if (!o) return;
    }

    let clientOpts = '<option value="">-- No client --</option>';
    (clients || []).forEach(function(c) {
      clientOpts += '<option value="' + c.id + '"' + (String(c.id) === String(o.client_id) ? ' selected' : '') + '>' + esc(c.name) + '</option>';
    });

    let projectOpts = '<option value="">-- No project --</option>';
    (projects || []).forEach(function(p) {
      projectOpts += '<option value="' + p.id + '"' + (String(p.id) === String(o.project_id) ? ' selected' : '') + '>' + esc(p.name + (p.code ? ' (' + p.code + ')' : '')) + '</option>';
    });

    const statuses = ['draft', 'sent', 'negotiation', 'won', 'lost'];
    const statusOpts = statuses.map(function(s) {
      return '<option value="' + s + '"' + (s === (o.status || 'draft') ? ' selected' : '') + '>' + esc(t('status.' + s)) + '</option>';
    }).join('');

    bodyEl.innerHTML =
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('offer.number')) + ' (auto if empty)</label><input type="text" id="of-number" value="' + esc(o.number || '') + '" placeholder="OFR-2026-001"></div>' +
      '<div class="form-group"><label>' + esc(t('th.status')) + '</label><select id="of-status">' + statusOpts + '</select></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('th.client')) + '</label><select id="of-client">' + clientOpts + '</select></div>' +
      '<div class="form-group"><label>Project</label><select id="of-project">' + projectOpts + '</select></div>' +
      '</div>' +
      '<div class="form-row">' +
      '<div class="form-group"><label>' + esc(t('offer.total')) + ' (CZK)</label><input type="number" id="of-total" value="' + (o.total_value || 0) + '" min="0"></div>' +
      '<div class="form-group"><label>' + esc(t('offer.margin')) + '</label><input type="number" id="of-margin" value="' + (o.margin_pct || 0) + '" min="0" max="100"></div>' +
      '</div>' +
      '<div class="form-row"><div class="form-group"><label>' + esc(t('offer.valid_until')) + '</label><input type="date" id="of-valid" value="' + esc(o.valid_until || '') + '"></div></div>' +
      '<div class="form-row"><div class="form-group full"><label>' + esc(t('label.notes')) + '</label><textarea id="of-notes">' + esc(o.notes || '') + '</textarea></div></div>' +
      '<div style="border-top:1px solid var(--light);margin:16px 0;padding-top:16px">' +
      '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">' +
      '<label style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#555">' + esc(t('offer.items')) + '</label>' +
      '<button type="button" class="btn btn-outline btn-sm" onclick="addOfferItemRow()">' + esc(t('offer.add_item')) + '</button>' +
      '</div>' +
      '<div id="offer-items-wrap">' +
      '<table style="width:100%;font-size:13px;border-collapse:collapse" id="offer-items-table">' +
      '<thead><tr style="border-bottom:1px solid #eee">' +
      '<th style="width:60px;text-align:left;padding:6px 8px;font-size:10px;color:#aaa;text-transform:uppercase">' + esc(t('offer.item_qty')) + '</th>' +
      '<th style="text-align:left;padding:6px 8px;font-size:10px;color:#aaa;text-transform:uppercase">' + esc(t('offer.item_desc')) + '</th>' +
      '<th style="width:120px;text-align:right;padding:6px 8px;font-size:10px;color:#aaa;text-transform:uppercase">' + esc(t('offer.item_price')) + '</th>' +
      '<th style="width:32px"></th>' +
      '</tr></thead>' +
      '<tbody id="offer-items-body"></tbody>' +
      '</table>' +
      '<div style="font-size:11px;color:#aaa;margin-top:6px" id="offer-items-hint">' + esc(t('offer.computed_total')) + '</div>' +
      '</div>' +
      '</div>' +
      '<div class="form-actions">' +
      '<button class="btn btn-outline" onclick="closeModal(\'modal-offer\')">' + esc(t('btn.cancel')) + '</button>' +
      '<button class="btn btn-red" onclick="saveOffer(' + (id || 'null') + ')">' + esc(t('btn.save')) + '</button>' +
      '</div>';

    if (id && o.items && o.items.length > 0) {
      o.items.forEach(function(item) {
        addOfferItemRow(item.qty, item.description, item.unit_price);
      });
    }
  } catch (err) {
    bodyEl.innerHTML = '<div class="alert alert-err">' + esc(t('msg.error') + ': ' + err.message) + '</div>';
  }
}

async function saveOffer(id) {
  const body = {
    number: (document.getElementById('of-number') || {}).value || '',
    client_id: (document.getElementById('of-client') || {}).value || null,
    project_id: (document.getElementById('of-project') || {}).value || null,
    status: (document.getElementById('of-status') || {}).value || 'draft',
    total_value: parseFloat((document.getElementById('of-total') || {}).value) || 0,
    margin_pct: parseFloat((document.getElementById('of-margin') || {}).value) || 0,
    valid_until: (document.getElementById('of-valid') || {}).value || null,
    notes: (document.getElementById('of-notes') || {}).value || '',
  };
  if (!body.client_id) body.client_id = null;
  if (!body.project_id) body.project_id = null;
  if (!body.valid_until) body.valid_until = null;
  try {
    var savedResult;
    if (id) { savedResult = await api('PUT', '/api/offers/' + id, body); }
    else { savedResult = await api('POST', '/api/offers', body); }
    // Save line items if any were entered
    var itemRows = getOfferItemRows();
    var offerId = id;
    if (!offerId && savedResult && savedResult.id) {
      offerId = savedResult.id;
    }
    if (!offerId) {
      try {
        var allOffers = await api('GET', '/api/offers');
        if (allOffers && allOffers.length > 0) {
          offerId = allOffers[allOffers.length - 1].id;
        }
      } catch(e2) {}
    }
    if (offerId) {
      try {
        await api('POST', '/api/offers/' + offerId + '/items/bulk', { items: itemRows });
      } catch(e2) { console.warn('items save failed', e2); }
    }
    closeModal('modal-offer');
    toast(t('msg.saved'), 'ok');
    _offersData = null;
    if (id && S.view === 'offer-item') { navigate('offer-item', id); }
    else { navigate('offers'); }
  } catch (e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

function addOfferItemRow(qty, desc, price) {
  var tbody = document.getElementById('offer-items-body');
  if (!tbody) return;
  var tr = document.createElement('tr');
  tr.style.borderBottom = '1px solid #f5f5f5';
  tr.innerHTML =
    '<td style="padding:4px 8px"><input type="number" step="0.01" min="0.01" value="' + (qty || 1) + '" style="width:52px;border:1px solid #e8e8e8;border-radius:3px;padding:4px;font-family:inherit;font-size:13px" onchange="recalcOfferTotal()" class="item-qty"></td>' +
    '<td style="padding:4px 8px"><input type="text" value="' + esc(desc || '') + '" style="width:100%;border:1px solid #e8e8e8;border-radius:3px;padding:4px;font-family:inherit;font-size:13px" class="item-desc" placeholder="Description"></td>' +
    '<td style="padding:4px 8px"><input type="number" step="0.01" min="0" value="' + (price || 0) + '" style="width:110px;border:1px solid #e8e8e8;border-radius:3px;padding:4px;font-family:inherit;font-size:13px;text-align:right" onchange="recalcOfferTotal()" class="item-price" placeholder="0"></td>' +
    '<td style="padding:4px 4px;text-align:center"><button type="button" style="background:#fde8e8;color:#E10B17;border:none;border-radius:3px;cursor:pointer;padding:3px 7px;font-size:13px" onclick="this.closest(\'tr\').remove();recalcOfferTotal()">×</button></td>';
  tbody.appendChild(tr);
  recalcOfferTotal();
}

function recalcOfferTotal() {
  var tbody = document.getElementById('offer-items-body');
  if (!tbody) return;
  var total = 0;
  Array.from(tbody.rows).forEach(function(tr) {
    var qty = parseFloat((tr.querySelector('.item-qty') || {}).value) || 0;
    var price = parseFloat((tr.querySelector('.item-price') || {}).value) || 0;
    total += qty * price;
  });
  if (total > 0) {
    var totalEl = document.getElementById('of-total');
    if (totalEl) totalEl.value = total.toFixed(2);
  }
}

function getOfferItemRows() {
  var tbody = document.getElementById('offer-items-body');
  if (!tbody) return [];
  var rows = [];
  Array.from(tbody.rows).forEach(function(tr, i) {
    var qty = parseFloat((tr.querySelector('.item-qty') || {}).value) || 1;
    var desc = (tr.querySelector('.item-desc') || {}).value || '';
    var price = parseFloat((tr.querySelector('.item-price') || {}).value) || 0;
    if (desc.trim()) {
      rows.push({ sort_order: i, qty: qty, description: desc, unit_price: price });
    }
  });
  return rows;
}

async function deleteOffer(id) {
  if (!confirm(t('offer.delete_confirm'))) return;
  try {
    await api('DELETE', '/api/offers/' + id);
    toast(t('msg.deleted'), 'ok');
    _offersData = null;
    navigate('offers');
  } catch (e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

async function convertOfferToProject(id) {
  if (!confirm(t('offer.convert_confirm'))) return;
  try {
    const res = await api('POST', '/api/offers/' + id + '/to_project', {});
    toast(t('offer.converted'), 'ok');
    _offersData = null;
    navigate('project', res.project_id);
  } catch (e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

// ---------------------------------------------------------------------------
// Project Assignment Modal
// ---------------------------------------------------------------------------
async function openAssignForm(projectId, type) {
  var url = '/api/projects/' + projectId + '/available_' + type;
  var items = await api('GET', url);
  if (!items) return;
  var title = type === 'crew' ? t('ct.crewMembers') : type === 'equipment' ? t('nav.equipment') : t('nav.fleet');
  var optionsHtml = '';
  items.forEach(function(item) {
    var label = type === 'crew'
      ? (item.first_name + ' ' + item.last_name + (item.position ? ' — ' + item.position : ''))
      : type === 'equipment'
      ? ((item.code ? item.code + ' ' : '') + item.name + (item.category ? ' [' + item.category + ']' : ''))
      : (item.registration + ' — ' + (item.name || '') + ' ' + (item.brand || '') + ' ' + (item.model || ''));
    optionsHtml += '<option value="' + item.id + '">' + esc(label) + '</option>';
  });
  if (!optionsHtml) {
    toast(t('msg.no_data'), 'warn'); return;
  }
  var idField = type === 'crew' ? 'crew_id' : type === 'equipment' ? 'equipment_id' : 'vehicle_id';
  var extraField = type === 'equipment'
    ? '<div class="form-group"><label>Qty</label><input type="number" id="assign-qty" value="1" min="1" style="width:80px"></div>'
    : type === 'fleet'
    ? '<div class="form-group"><label>' + esc(t('th.driver')) + '</label><input type="text" id="assign-driver" placeholder="Driver name (optional)"></div>'
    : '<div class="form-group"><label>' + esc(t('th.role')) + '</label><input type="text" id="assign-role" placeholder="e.g. Camera Operator"></div>';
  var body =
    '<div class="form-row">' +
    '<div class="form-group full"><label>' + esc(title) + '</label>' +
    '<select id="assign-item-id"><option value="">\u2014</option>' + optionsHtml + '</select></div></div>' +
    '<div class="form-row">' + extraField + '</div>' +
    '<div class="form-row">' +
    '<div class="form-group"><label>' + esc(t('label.startDate')) + '</label><input type="date" id="assign-date-from"></div>' +
    '<div class="form-group"><label>' + esc(t('label.endDate')) + '</label><input type="date" id="assign-date-to"></div>' +
    '</div>' +
    '<div class="form-actions">' +
    '<button class="btn btn-outline btn-sm" onclick="closeModal(\'modal-assign\')">' + esc(t('btn.cancel')) + '</button>' +
    '<button class="btn btn-red btn-sm" onclick="saveAssignment(' + projectId + ',\'' + type + '\',\'' + idField + '\')">' + esc(t('btn.add')) + '</button>' +
    '</div>';
  var modal = document.getElementById('modal-assign');
  modal.querySelector('.modal-title').textContent = '\u2795 ' + title;
  modal.querySelector('.modal-body').innerHTML = body;
  openModal('modal-assign');
}

async function saveAssignment(projectId, type, idField) {
  var itemId = parseInt(document.getElementById('assign-item-id').value);
  if (!itemId) { toast(t('msg.error'), 'err'); return; }
  var payload = {};
  payload[idField] = itemId;
  payload.date_from = document.getElementById('assign-date-from').value || null;
  payload.date_to = document.getElementById('assign-date-to').value || null;
  if (type === 'crew') payload.role = (document.getElementById('assign-role') || {}).value || '';
  if (type === 'equipment') payload.quantity = parseInt((document.getElementById('assign-qty') || {}).value) || 1;
  try {
    await api('POST', '/api/projects/' + projectId + '/' + type, payload);
    closeModal('modal-assign');
    toast(t('msg.saved'));
    navigate('project', projectId);
  } catch(e) {
    toast(t('msg.error') + ': ' + e.message, 'err');
  }
}

async function removeAssignment(projectId, type, assignmentId) {
  if (!confirm(t('btn.delete') + '?')) return;
  try {
    await api('DELETE', '/api/projects/' + projectId + '/' + type + '/' + assignmentId);
    toast(t('msg.deleted'));
    navigate('project', projectId);
  } catch(e) {
    toast(t('msg.error') + ': ' + e.message, 'err');
  }
}

// ---------------------------------------------------------------------------
// Reports
// ---------------------------------------------------------------------------
async function renderReports(el) {
  el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('nav.overview')) + '</div></div><div class="content">' + loadingHtml() + '</div>';
  try {
    var d = await api('GET', '/api/reports');
    if (!d) return;

    function barChart(data, colors) {
      var total = Object.values(data).reduce(function(a,b){return a+b;},0) || 1;
      var bars = '';
      Object.keys(data).forEach(function(k) {
        var pct = Math.round(data[k]/total*100);
        if (!data[k]) return;
        bars += '<div style="margin-bottom:6px">' +
          '<div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px">' +
          '<span>' + esc(t('status.'+k) || k) + '</span><span>' + data[k] + '</span></div>' +
          '<div style="height:8px;background:#f0f0f0;border-radius:4px;overflow:hidden">' +
          '<div style="height:100%;border-radius:4px;background:' + (colors[k]||'#888') + ';width:' + pct + '%"></div></div></div>';
      });
      return bars || '<div style="color:#888;font-size:12px">' + t('msg.no_data') + '</div>';
    }

    var statusColors = {
      planning:'#2980b9', confirmed:'#e67e22', in_progress:'#27ae60',
      completed:'#888', cancelled:'#E10B17',
      available:'#27ae60', on_project:'#e67e22', maintenance:'#f39c12', retired:'#888',
      in_service:'#f39c12', leave:'#f39c12', inactive:'#888',
      draft:'#888', sent:'#2980b9', negotiation:'#e67e22', won:'#27ae60', lost:'#E10B17'
    };

    var alertsHtml = '';
    var alerts = d.maintenance_due.concat(d.fleet_maintenance_due).concat(d.insurance_due);
    if (alerts.length) {
      alertsHtml = '<div class="card" style="margin-bottom:16px">' +
        '<div class="card-header"><div class="card-title">&#128276; ' + esc(t('ct.attention')) + '</div></div>' +
        '<div class="card-body"><table><thead><tr><th>' + esc(t('th.item')) + '</th><th>' + esc(t('th.type')) + '</th><th>Due</th></tr></thead><tbody>';
      d.maintenance_due.forEach(function(r) {
        alertsHtml += '<tr><td>' + esc(r.name) + (r.code ? ' <span style="color:#888;font-size:11px">'+esc(r.code)+'</span>' : '') + '</td><td>' + esc(t('equip.maintenance_due')) + '</td><td style="color:#E10B17">' + fmtDate(r.maintenance_due) + '</td></tr>';
      });
      d.fleet_maintenance_due.forEach(function(r) {
        alertsHtml += '<tr><td>' + esc(r.name||'') + ' ' + esc(r.registration) + '</td><td>' + esc(t('fleet.maintenance_due')) + '</td><td style="color:#E10B17">' + fmtDate(r.maintenance_due) + '</td></tr>';
      });
      d.insurance_due.forEach(function(r) {
        alertsHtml += '<tr><td>' + esc(r.name||'') + ' ' + esc(r.registration) + '</td><td>' + esc(t('fleet.insurance_expiry')) + '</td><td style="color:#e67e22">' + fmtDate(r.insurance_expiry) + '</td></tr>';
      });
      alertsHtml += '</tbody></table></div></div>';
    }

    var activeProjectsHtml = '';
    if (d.active_projects && d.active_projects.length) {
      var rows = '';
      d.active_projects.forEach(function(p) {
        rows += '<tr onclick="navigate(\'project\',' + p.id + ')">' +
          '<td><strong>' + esc(p.name) + '</strong><br><span style="font-size:11px;color:#888">' + esc(p.code||'') + '</span></td>' +
          '<td>' + esc(p.client_name||'\u2014') + '</td>' +
          '<td>' + pillHtml(p.status) + '</td>' +
          '<td style="font-size:12px;color:#888">' + fmtDate(p.start_date) + ' \u2013 ' + fmtDate(p.end_date) + '</td>' +
          '</tr>';
      });
      activeProjectsHtml = '<div class="card" style="margin-bottom:16px">' +
        '<div class="card-header"><div class="card-title">&#128193; ' + esc(t('ct.activeProjects')) + '</div></div>' +
        '<div class="card-body"><table><thead><tr>' +
        '<th>' + esc(t('th.project')) + '</th><th>' + esc(t('th.client')) + '</th>' +
        '<th>' + esc(t('th.status')) + '</th><th>' + esc(t('th.dates')) + '</th>' +
        '</tr></thead><tbody>' + rows + '</tbody></table></div></div>';
    }

    el.innerHTML =
      '<div class="topbar"><div class="topbar-title">&#128202; ' + esc(t('nav.overview')) + '</div></div>' +
      '<div class="content">' +
      alertsHtml +
      '<div class="stats-grid" style="margin-bottom:16px">' +
      '<div class="stat-card blue"><div class="stat-num">' + (d.projects_by_status.in_progress||0) + '</div><div class="stat-label">' + esc(t('stat.activeProjects')) + '</div></div>' +
      '<div class="stat-card green"><div class="stat-num">' + fmtMoney(d.pipeline_value) + '</div><div class="stat-label">' + esc(t('stat.revPipeline')) + '</div></div>' +
      '<div class="stat-card orange"><div class="stat-num">' + (d.equipment_by_status.on_project||0) + '</div><div class="stat-label">' + esc(t('stat.onProject')) + '</div></div>' +
      '<div class="stat-card"><div class="stat-num">' + (d.crew_by_status.available||0) + '</div><div class="stat-label">' + esc(t('stat.available')) + ' ' + esc(t('nav.crew')) + '</div></div>' +
      '</div>' +
      '<div class="three-col" style="margin-bottom:16px">' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128193; ' + esc(t('nav.projects')) + '</div></div><div class="card-body-pad">' + barChart(d.projects_by_status, statusColors) + '</div></div>' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128230; ' + esc(t('nav.equipment')) + '</div></div><div class="card-body-pad">' + barChart(d.equipment_by_status, statusColors) + '</div></div>' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128667; ' + esc(t('nav.fleet')) + '</div></div><div class="card-body-pad">' + barChart(d.fleet_by_status, statusColors) + '</div></div>' +
      '</div>' +
      '<div class="two-col" style="margin-bottom:16px">' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128101; ' + esc(t('nav.crew')) + '</div></div><div class="card-body-pad">' + barChart(d.crew_by_status, statusColors) + '</div></div>' +
      '<div class="card"><div class="card-header"><div class="card-title">&#128176; ' + esc(t('nav.offers')) + '</div></div><div class="card-body-pad">' + barChart(d.offers_by_status, statusColors) + '</div></div>' +
      '</div>' +
      activeProjectsHtml +
      '</div>';
  } catch(e) {
    el.innerHTML = '<div class="topbar"><div class="topbar-title">' + esc(t('nav.overview')) + '</div></div>' +
      '<div class="content"><div class="alert alert-err"><div>' + esc(e.message) + '</div></div></div>';
  }
}

// ---------------------------------------------------------------------------
// renderSettings
// ---------------------------------------------------------------------------
async function renderSettings(el) {
  const entityOptions = [
    { value: 'clients', label: t('nav.clients') },
    { value: 'projects', label: t('nav.projects') },
    { value: 'crew', label: t('nav.crew') },
    { value: 'units', label: t('nav.fleet') + ' (Units)' },
    { value: 'productions', label: t('nav.projects') + ' (Productions / \u00dakoly)' },
  ];
  const entityOpts = entityOptions.map(function(o) {
    return '<option value="' + o.value + '">' + esc(o.label) + '</option>';
  }).join('');

  const hints = {
    clients: t('settings.caflou_hint_clients'),
    projects: t('settings.caflou_hint_projects'),
    crew: t('settings.caflou_hint_crew'),
    units: t('settings.caflou_hint_units'),
    productions: t('settings.caflou_hint_productions'),
  };
  const hintsJson = JSON.stringify(hints).replace(/</g, '\\u003c');

  el.innerHTML =
    '<div class="topbar"><div class="topbar-title">&#9881; ' + esc(t('settings.title')) + '</div></div>' +
    '<div class="content">' +

    // Company settings card
    '<div class="card" style="margin-bottom:20px">' +
    '<div class="card-header"><div class="card-title">&#127970; ' + esc(t('settings.company')) + '</div></div>' +
    '<div class="card-body-pad" id="company-settings-wrap">' +
    '<div style="text-align:center;padding:20px;color:#aaa">Loading...</div>' +
    '</div></div>' +

    // CAFLOU Import card
    '<div class="card" style="margin-bottom:20px">' +
    '<div class="card-header"><div class="card-title">&#128190; ' + esc(t('settings.import_title')) + '</div></div>' +
    '<div class="card-body-pad">' +
    '<p style="color:#555;font-size:13px;margin-bottom:20px">' + esc(t('settings.import_desc')) + '</p>' +
    '<div class="form-row">' +
    '<div class="form-group">' +
    '<label>' + esc(t('settings.entity')) + '</label>' +
    '<select id="imp-entity" onchange="updateImportHint(' + hintsJson + ')">' + entityOpts + '</select>' +
    '</div>' +
    '<div class="form-group">' +
    '<label>' + esc(t('settings.delimiter')) + '</label>' +
    '<select id="imp-delim">' +
    '<option value=";">' + esc('; (semicolon \u2013 CAFLOU default)') + '</option>' +
    '<option value=",">' + esc(', (comma)') + '</option>' +
    '<option value="\t">' + esc('Tab') + '</option>' +
    '</select>' +
    '</div>' +
    '</div>' +
    '<div class="form-group" style="margin-bottom:16px">' +
    '<div id="imp-hint" class="alert alert-warn" style="margin-bottom:12px"><div class="alert-icon">&#8505;</div><div>' + esc(hints.clients) + '</div></div>' +
    '<label>' + esc(t('settings.file')) + '</label>' +
    '<input type="file" id="imp-file" accept=".csv,.txt" style="border:1.5px solid #e8e8e8;border-radius:4px;padding:8px 12px;width:100%;font-family:inherit;font-size:13px;background:white">' +
    '</div>' +
    '<div id="imp-preview" style="margin-bottom:16px"></div>' +
    '<div class="form-actions" style="margin-top:0;padding-top:0;border-top:none;justify-content:flex-start">' +
    '<button class="btn btn-outline btn-sm" onclick="previewImport()">' + esc(t('settings.preview')) + '</button>' +
    '<button class="btn btn-red btn-sm" id="imp-btn" onclick="runImport()">' + esc(t('settings.import_btn')) + '</button>' +
    '</div>' +
    '<div id="imp-result" style="margin-top:16px"></div>' +
    '</div></div>' +

    // Database info card
    '<div class="card">' +
    '<div class="card-header"><div class="card-title">&#128196; ' + esc(t('settings.db_title')) + '</div></div>' +
    '<div class="card-body-pad">' +
    '<table class="info-table">' +
    '<tr><td>Engine</td><td><strong>SQLite 3 + WAL</strong></td></tr>' +
    '<tr><td>File</td><td><code style="font-family:monospace;background:#f4f4f4;padding:2px 6px;border-radius:3px">reckord.db</code></td></tr>' +
    '<tr><td>Backup</td><td>' + esc('cp reckord.db reckord.db.backup') + '</td></tr>' +
    '<tr><td>Migrations</td><td>' + esc('schema_migrations table \u2014 version-tracked') + '</td></tr>' +
    '</table>' +
    '<p style="color:#888;font-size:12px;margin-top:12px">' + esc(t('settings.db_desc')) + '</p>' +
    '</div></div>' +

    '</div>';

  // Load company settings
  api('GET', '/api/app_settings').then(function(cfg) {
    if (!cfg) return;
    var wrap = document.getElementById('company-settings-wrap');
    if (!wrap) return;
    var fields = [
      ['company_name', 'Company Name'],
      ['company_address', 'Address'],
      ['company_city', 'City / ZIP'],
      ['company_country', 'Country'],
      ['company_reg_id', 'Reg. ID (I\u010cO)'],
      ['company_vat_id', 'VAT ID (DI\u010c)'],
      ['company_vat_note', 'VAT Note'],
      ['offer_currency', 'Currency'],
      ['offer_vat_rate', 'VAT Rate (e.g. 0.21)'],
      ['offer_footer', 'Offer Footer Text'],
    ];
    var fhtml = '';
    fields.forEach(function(f) {
      var val = esc(cfg[f[0]] || '');
      fhtml += '<div class="form-row" style="margin-bottom:10px"><div class="form-group full">' +
        '<label>' + esc(f[1]) + '</label>' +
        '<input type="text" id="cfg-' + f[0] + '" value="' + val + '">' +
        '</div></div>';
    });
    fhtml += '<div class="form-actions" style="margin-top:0;padding-top:12px"><button class="btn btn-red btn-sm" onclick="saveCompanySettings()">' + esc(t('settings.save_company')) + '</button></div>';
    wrap.innerHTML = fhtml;
  }).catch(function() {});
}

function updateImportHint(hints) {
  var sel = (document.getElementById('imp-entity') || {}).value || 'clients';
  var el = document.getElementById('imp-hint');
  if (el) el.querySelector('div:last-child').textContent = hints[sel] || '';
}

async function previewImport() {
  var fileInput = document.getElementById('imp-file');
  var prevEl = document.getElementById('imp-preview');
  if (!fileInput || !fileInput.files || !fileInput.files[0]) {
    if (prevEl) prevEl.innerHTML = '<div class="alert alert-warn"><div class="alert-icon">&#9888;</div><div>Please select a CSV file first.</div></div>';
    return;
  }
  var file = fileInput.files[0];
  var text = await file.text();
  var delim = (document.getElementById('imp-delim') || {}).value || ';';
  // Show first 3 rows
  var lines = text.trim().split('\n').slice(0, 4); // header + 3 rows
  if (!lines.length) { prevEl.innerHTML = ''; return; }
  var headers = lines[0].split(delim).map(function(h) { return '<th>' + esc(h.trim()) + '</th>'; }).join('');
  var rows = lines.slice(1).map(function(line) {
    var cells = line.split(delim).map(function(c) { return '<td>' + esc(c.trim()) + '</td>'; }).join('');
    return '<tr>' + cells + '</tr>';
  }).join('');
  var totalLines = text.trim().split('\n').length - 1;
  prevEl.innerHTML =
    '<p style="font-size:12px;color:#888;margin-bottom:8px">' + totalLines + ' rows detected \u2014 showing first 3:</p>' +
    '<div style="overflow-x:auto"><table style="font-size:12px"><thead><tr>' + headers + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
}

async function saveCompanySettings() {
  var fields = ['company_name','company_address','company_city','company_country',
    'company_reg_id','company_vat_id','company_vat_note','offer_currency','offer_vat_rate','offer_footer'];
  var body = {};
  fields.forEach(function(f) {
    var el = document.getElementById('cfg-' + f);
    if (el) body[f] = el.value;
  });
  try {
    await api('POST', '/api/app_settings', body);
    toast(t('msg.saved'), 'ok');
  } catch(e) { toast(t('msg.error') + ': ' + e.message, 'err'); }
}

async function runImport() {
  var fileInput = document.getElementById('imp-file');
  var btn = document.getElementById('imp-btn');
  var resultEl = document.getElementById('imp-result');
  if (!fileInput || !fileInput.files || !fileInput.files[0]) {
    toast('Please select a CSV file', 'err');
    return;
  }
  var file = fileInput.files[0];
  var csvText = await file.text();
  var entityType = (document.getElementById('imp-entity') || {}).value || 'clients';
  var delimiter = (document.getElementById('imp-delim') || {}).value || ';';
  if (btn) { btn.disabled = true; btn.textContent = t('settings.importing'); }
  resultEl.innerHTML = '';
  try {
    var res = await api('POST', '/api/import', { entity_type: entityType, csv_text: csvText, delimiter: delimiter });
    var html = '<div class="alert alert-ok"><div class="alert-icon">&#10003;</div><div>' +
      '<strong>' + res.created + '</strong> ' + esc(t('settings.result_created')) + ' &nbsp;|&nbsp; ' +
      '<strong>' + res.skipped + '</strong> ' + esc(t('settings.result_skipped'));
    if (res.errors && res.errors.length) {
      html += '<br><span style="color:#b71c1c">Errors: ' + esc(res.errors.join('; ')) + '</span>';
    }
    html += '</div></div>';
    resultEl.innerHTML = html;
    toast(res.created + ' ' + t('settings.result_created'), 'ok');
  } catch(e) {
    resultEl.innerHTML = '<div class="alert alert-err"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div>';
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = t('settings.import_btn'); }
  }
}

// ---------------------------------------------------------------------------
// 21a. Calendar
// ---------------------------------------------------------------------------
const CAL_COLORS = [
  '#E10B17','#27ae60','#e67e22','#2980b9','#8e44ad',
  '#16a085','#f39c12','#c0392b','#1abc9c','#d35400','#2c3e50','#7f8c8d'
];
var _calFleetColorMap = {};

function calFleetColor(vehicleName) {
  if (!_calFleetColorMap[vehicleName]) {
    var keys = Object.keys(_calFleetColorMap);
    _calFleetColorMap[vehicleName] = CAL_COLORS[keys.length % CAL_COLORS.length];
  }
  return _calFleetColorMap[vehicleName];
}

function calDaysBetween(startStr, endStr) {
  // Returns array of 'YYYY-MM-DD' strings between start and end inclusive
  var days = [];
  var cur = new Date(startStr + 'T00:00:00');
  var end = new Date((endStr || startStr) + 'T00:00:00');
  while (cur <= end) {
    days.push(cur.toISOString().slice(0, 10));
    cur.setDate(cur.getDate() + 1);
  }
  return days;
}

// Global calendar state
var _calYear = new Date().getFullYear();
var _calMonth = new Date().getMonth() + 1; // 1-12
var _calView = 'month'; // 'month' | 'week'
var _calWeekStart = null; // ISO date string for week view start

async function renderCalendar(el) {
  var todayStr = new Date().toISOString().slice(0, 10);
  el.innerHTML =
    '<div class="topbar">' +
    '<div class="topbar-title">&#128197; ' + esc(t('nav.calendar')) + '</div>' +
    '<div style="display:flex;gap:8px;align-items:center">' +
    '<button class="btn btn-outline btn-sm" id="cal-prev">&#8249;</button>' +
    '<button class="btn btn-outline btn-sm" id="cal-today">' + esc(t('cal.today')) + '</button>' +
    '<button class="btn btn-outline btn-sm" id="cal-next">&#8250;</button>' +
    '</div>' +
    '<div style="display:flex;gap:4px">' +
    '<button class="btn btn-sm" id="cal-view-month" style="' + (_calView==='month'?'background:#111;color:white':'background:white;border:1.5px solid #e8e8e8') + '">' + esc(t('cal.month')) + '</button>' +
    '<button class="btn btn-sm" id="cal-view-week" style="' + (_calView==='week'?'background:#111;color:white':'background:white;border:1.5px solid #e8e8e8') + '">' + esc(t('cal.week')) + '</button>' +
    '</div>' +
    '</div>' +
    '<div class="content" id="cal-content">' + loadingHtml() + '</div>';

  // Wire navigation buttons
  document.getElementById('cal-prev').onclick = function() {
    if (_calView === 'month') {
      _calMonth--;
      if (_calMonth < 1) { _calMonth = 12; _calYear--; }
    } else {
      var d = new Date(_calWeekStart + 'T00:00:00');
      d.setDate(d.getDate() - 7);
      _calWeekStart = d.toISOString().slice(0, 10);
    }
    loadCalendarData(el);
  };
  document.getElementById('cal-next').onclick = function() {
    if (_calView === 'month') {
      _calMonth++;
      if (_calMonth > 12) { _calMonth = 1; _calYear++; }
    } else {
      var d = new Date(_calWeekStart + 'T00:00:00');
      d.setDate(d.getDate() + 7);
      _calWeekStart = d.toISOString().slice(0, 10);
    }
    loadCalendarData(el);
  };
  document.getElementById('cal-today').onclick = function() {
    var now = new Date();
    _calYear = now.getFullYear();
    _calMonth = now.getMonth() + 1;
    _calWeekStart = null;
    loadCalendarData(el);
  };
  document.getElementById('cal-view-month').onclick = function() {
    _calView = 'month'; renderCalendar(el);
  };
  document.getElementById('cal-view-week').onclick = function() {
    _calView = 'week';
    if (!_calWeekStart) {
      // Start of current week (Monday)
      var d = new Date();
      var day = d.getDay() || 7; // make Sunday = 7
      d.setDate(d.getDate() - day + 1);
      _calWeekStart = d.toISOString().slice(0, 10);
    }
    renderCalendar(el);
  };

  loadCalendarData(el);
}

async function loadCalendarData(el) {
  var content = document.getElementById('cal-content');
  if (!content) return;
  content.innerHTML = loadingHtml();
  try {
    var data = await api('GET', '/api/calendar?year=' + _calYear + '&month=' + _calMonth);
    if (!data) return;

    // Assign colors to fleet units in a stable order
    _calFleetColorMap = {};
    var allUnits = [];
    (data.projects || []).forEach(function(p) {
      (p.fleet || []).forEach(function(f) {
        if (!allUnits.includes(f.vehicle_name)) allUnits.push(f.vehicle_name);
      });
    });
    allUnits.sort().forEach(function(name, i) {
      _calFleetColorMap[name] = CAL_COLORS[i % CAL_COLORS.length];
    });

    // Build event map: date -> [{project, color, vehicleName}]
    var eventMap = {}; // 'YYYY-MM-DD' -> array of event objects
    var conflictDays = {};
    var conflictProjectIds = new Set();
    (data.conflicts || []).forEach(function(c) {
      (c.project_ids || []).forEach(function(pid) { conflictProjectIds.add(pid); });
    });

    (data.projects || []).forEach(function(p) {
      var start = (p.start_date || '').slice(0, 10);
      var end = (p.end_date || start).slice(0, 10);
      if (!start) return;
      var days = calDaysBetween(start, end);
      var hasConflict = conflictProjectIds.has(p.id);

      if (p.fleet && p.fleet.length > 0) {
        p.fleet.forEach(function(f) {
          var color = calFleetColor(f.vehicle_name);
          var fStart = (f.date_from || start).slice(0, 10);
          var fEnd = (f.date_to || end).slice(0, 10);
          calDaysBetween(fStart, fEnd).forEach(function(day) {
            if (!eventMap[day]) eventMap[day] = [];
            eventMap[day].push({
              project: p, color: color,
              vehicleName: f.vehicle_name, unitId: f.unit_id,
              isFirst: day === fStart, isLast: day === fEnd,
              conflict: hasConflict
            });
          });
        });
      } else {
        // Project without fleet — show as gray
        days.forEach(function(day) {
          if (!eventMap[day]) eventMap[day] = [];
          eventMap[day].push({
            project: p, color: '#95a5a6',
            vehicleName: '', unitId: null,
            isFirst: day === start, isLast: day === end,
            conflict: hasConflict
          });
        });
      }
    });

    if (_calView === 'month') {
      content.innerHTML = renderCalendarMonth(data.year, data.month, eventMap, data.conflicts, allUnits);
    } else {
      content.innerHTML = renderCalendarWeek(eventMap, data.conflicts, allUnits);
    }
  } catch(e) {
    if (content) content.innerHTML = '<div class="alert alert-err" style="margin:20px"><div>' + esc(t('msg.error') + ': ' + e.message) + '</div></div>';
  }
}

function renderCalendarMonth(year, month, eventMap, conflicts, allUnits) {
  // Localized month/day names via Intl
  var locale = S.lang || 'en';
  var monthNames = Array.from({length:12}, function(_,i) {
    return new Date(2000, i, 1).toLocaleDateString(locale, {month:'long'});
  });
  var dayNames = Array.from({length:7}, function(_,i) {
    // Mon=1..Sun=7 → start from Monday
    var d = new Date(2000, 0, 3 + i); // 2000-01-03 is Monday
    return d.toLocaleDateString(locale, {weekday:'short'});
  });
  var todayStr = new Date().toISOString().slice(0, 10);

  // First day of month (0=Sun, convert to Mon-based)
  var firstDate = new Date(year, month - 1, 1);
  var startDow = firstDate.getDay(); // 0=Sun
  startDow = startDow === 0 ? 6 : startDow - 1; // Mon=0
  var daysInMonth = new Date(year, month, 0).getDate();

  var html = '<div style="padding:20px">';

  // Conflicts banner
  if (conflicts && conflicts.length > 0) {
    html += '<div class="alert alert-err" style="margin-bottom:16px"><div class="alert-icon">&#9888;</div><div>' +
      '<strong>' + esc(t('cal.conflict')) + '</strong> ' +
      conflicts.map(function(c) { return esc(c.vehicle_name); }).join(', ') +
      '</div></div>';
  }

  // Legend
  if (allUnits.length > 0) {
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;align-items:center">' +
      '<span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#aaa;margin-right:4px">' + esc(t('cal.legend')) + ':</span>';
    allUnits.forEach(function(name) {
      var color = _calFleetColorMap[name] || '#888';
      html += '<span style="display:flex;align-items:center;gap:5px;font-size:12px">' +
        '<span style="width:12px;height:12px;border-radius:2px;background:' + color + ';flex-shrink:0"></span>' +
        esc(name) + '</span>';
    });
    html += '</div>';
  }

  // Month title
  html += '<div style="text-align:center;font-size:18px;font-weight:800;margin-bottom:16px">' +
    esc(monthNames[month - 1]) + ' ' + year + '</div>';

  // Grid header
  html += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:#e8e8e8;border:1px solid #e8e8e8;border-radius:6px;overflow:hidden">';

  // Day name headers
  dayNames.forEach(function(d, i) {
    html += '<div style="background:#f9f9f9;padding:8px 4px;text-align:center;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#aaa">' + d + '</div>';
  });

  // Empty cells before month start
  for (var i = 0; i < startDow; i++) {
    html += '<div style="background:#fafafa;min-height:110px;padding:6px"></div>';
  }

  // Day cells
  for (var day = 1; day <= daysInMonth; day++) {
    var dateStr = year + '-' + String(month).padStart(2,'0') + '-' + String(day).padStart(2,'0');
    var isToday = dateStr === todayStr;
    var isWeekend = ((startDow + day - 1) % 7) >= 5;
    var events = eventMap[dateStr] || [];

    html += '<div style="background:' + (isToday ? '#fff8f8' : isWeekend ? '#fafafa' : 'white') + ';' +
      'min-height:110px;padding:6px;cursor:default;border-left:' +
      (isToday ? '3px solid #E10B17' : '0') + '">';

    // Day number
    html += '<div style="font-size:12px;font-weight:' + (isToday ? '800' : '500') + ';' +
      'color:' + (isToday ? '#E10B17' : isWeekend ? '#aaa' : '#333') + ';margin-bottom:4px">' + day + '</div>';

    // Events — group by vehicle to avoid duplicates on same day
    var seen = {};
    events.forEach(function(ev) {
      var key = ev.project.id + '-' + ev.vehicleName;
      if (seen[key]) return;
      seen[key] = true;
      var label = ev.vehicleName ? ev.vehicleName + ': ' + (ev.project.name || '').slice(0, 22) :
        (ev.project.name || '').slice(0, 30);
      html += '<div onclick="navigate(\'project\',' + ev.project.id + ')" ' +
        'style="background:' + ev.color + ';color:white;font-size:10px;padding:2px 5px;' +
        'border-radius:3px;margin-bottom:2px;cursor:pointer;white-space:nowrap;overflow:hidden;' +
        'text-overflow:ellipsis;' + (ev.conflict ? 'outline:2px solid #f39c12' : '') + '"' +
        'title="' + esc(ev.project.name) + (ev.project.location ? ' \u2014 ' + ev.project.location : '') + '">' +
        (ev.conflict ? '\u26a0 ' : '') + esc(label) +
        '</div>';
    });

    html += '</div>';
  }

  // Fill remaining cells
  var total = startDow + daysInMonth;
  var remaining = (7 - (total % 7)) % 7;
  for (var i = 0; i < remaining; i++) {
    html += '<div style="background:#fafafa;min-height:110px;padding:6px"></div>';
  }

  html += '</div></div>';
  return html;
}

function renderCalendarWeek(eventMap, conflicts, allUnits) {
  var todayStr = new Date().toISOString().slice(0, 10);
  var locale = S.lang || 'en';
  var dayNames = Array.from({length:7}, function(_,i) {
    var d = new Date(2000, 0, 3 + i);
    return d.toLocaleDateString(locale, {weekday:'short'});
  });
  var monthNames = Array.from({length:12}, function(_,i) {
    return new Date(2000, i, 1).toLocaleDateString(locale, {month:'short'});
  });

  // Get week days (Mon–Sun)
  var weekDays = [];
  var startDate = new Date(_calWeekStart + 'T00:00:00');
  for (var i = 0; i < 7; i++) {
    var d = new Date(startDate);
    d.setDate(d.getDate() + i);
    weekDays.push(d.toISOString().slice(0, 10));
  }

  var html = '<div style="padding:20px">';

  // Conflicts
  if (conflicts && conflicts.length > 0) {
    html += '<div class="alert alert-err" style="margin-bottom:16px"><div class="alert-icon">&#9888;</div><div><strong>' +
      esc(t('cal.conflict')) + '</strong> ' +
      conflicts.map(function(c) { return esc(c.vehicle_name); }).join(', ') +
      '</div></div>';
  }

  // Legend
  if (allUnits.length > 0) {
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;align-items:center">' +
      '<span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#aaa;margin-right:4px">' + esc(t('cal.legend')) + ':</span>';
    allUnits.forEach(function(name) {
      var color = _calFleetColorMap[name] || '#888';
      html += '<span style="display:flex;align-items:center;gap:5px;font-size:12px">' +
        '<span style="width:12px;height:12px;border-radius:2px;background:' + color + ';flex-shrink:0"></span>' +
        esc(name) + '</span>';
    });
    html += '</div>';
  }

  // Week title
  var wStart = new Date(weekDays[0] + 'T00:00:00');
  var wEnd = new Date(weekDays[6] + 'T00:00:00');
  html += '<div style="text-align:center;font-size:18px;font-weight:800;margin-bottom:16px">' +
    wStart.getDate() + ' ' + monthNames[wStart.getMonth()] + ' \u2013 ' +
    wEnd.getDate() + ' ' + monthNames[wEnd.getMonth()] + ' ' + wEnd.getFullYear() + '</div>';

  // Week grid
  html += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px">';

  weekDays.forEach(function(dateStr, i) {
    var d = new Date(dateStr + 'T00:00:00');
    var isToday = dateStr === todayStr;
    var isWeekend = i >= 5;
    var events = eventMap[dateStr] || [];

    html += '<div style="background:' + (isToday ? '#fff8f8' : isWeekend ? '#fafafa' : 'white') + ';' +
      'border:1px solid #eee;border-radius:6px;padding:10px;min-height:200px;' +
      (isToday ? 'border-left:3px solid #E10B17' : '') + '">';

    html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#aaa">' +
      dayNames[i] + '</div>';
    html += '<div style="font-size:20px;font-weight:800;color:' + (isToday ? '#E10B17' : '#111') + ';margin-bottom:8px">' +
      d.getDate() + '</div>';

    var seen = {};
    events.forEach(function(ev) {
      var key = ev.project.id + '-' + ev.vehicleName;
      if (seen[key]) return;
      seen[key] = true;
      html += '<div onclick="navigate(\'project\',' + ev.project.id + ')" ' +
        'style="background:' + ev.color + ';color:white;font-size:11px;padding:4px 7px;' +
        'border-radius:4px;margin-bottom:4px;cursor:pointer;' +
        (ev.conflict ? 'outline:2px solid #f39c12' : '') + '"' +
        'title="' + esc(ev.project.name) + (ev.project.location ? ' \u2014 ' + ev.project.location : '') + '">' +
        (ev.conflict ? '\u26a0 ' : '') +
        (ev.vehicleName ? '<div style="font-weight:700;font-size:10px">' + esc(ev.vehicleName) + '</div>' : '') +
        '<div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(ev.project.name || '') + '</div>' +
        (ev.project.location ? '<div style="opacity:0.8;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">\ud83d\udccd ' + esc(ev.project.location) + '</div>' : '') +
        (ev.project.crew_count ? '<div style="opacity:0.75;font-size:10px">\ud83d\udc65 ' + ev.project.crew_count + ' ' + esc(t('cal.crew')) + '</div>' : '') +
        '</div>';
    });

    if (!events.length) {
      html += '<div style="color:#ddd;font-size:11px;margin-top:8px">' + esc(t('cal.no_events')) + '</div>';
    }

    html += '</div>';
  });

  html += '</div></div>';
  return html;
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
      renderEquipment(el);
      break;
    case 'equipment-item':
      renderEquipmentItem(el);
      break;
    case 'fleet':
      renderFleet(el);
      break;
    case 'fleet-item':
      renderFleetItem(el);
      break;
    case 'crew':
      renderCrew(el);
      break;
    case 'crew-member':
      renderCrewMember(el);
      break;
    case 'offers':
      renderOffers(el);
      break;
    case 'offer-item':
      renderOfferItem(el);
      break;
    case 'reports':
      renderReports(el);
      break;
    case 'settings': renderSettings(el); break;
    case 'calendar': renderCalendar(el); break;
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

  // Mobile sidebar toggle
  var mobBtn = document.getElementById('mob-sidebar-btn');
  var sidebar = document.getElementById('sidebar');
  if (mobBtn && sidebar) {
    mobBtn.addEventListener('click', function() {
      sidebar.classList.toggle('mob-open');
    });
    // Close sidebar when nav item clicked on mobile
    document.querySelectorAll('.nav-item').forEach(function(item) {
      item.addEventListener('click', function() {
        if (window.innerWidth <= 768) sidebar.classList.remove('mob-open');
      });
    });
  }
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
window.openEquipmentForm = openEquipmentForm;
window.saveEquipment = saveEquipment;
window.deleteEquipment = deleteEquipment;
window.filterEquipment = filterEquipment;
window.openFleetForm = openFleetForm;
window.saveFleet = saveFleet;
window.deleteFleet = deleteFleet;
window.filterFleet = filterFleet;
window.openCrewForm = openCrewForm;
window.saveCrew = saveCrew;
window.deleteCrew = deleteCrew;
window.filterCrew = filterCrew;
window.openOfferForm = openOfferForm;
window.saveOffer = saveOffer;
window.deleteOffer = deleteOffer;
window.filterOffers = filterOffers;
window.openAssignForm = openAssignForm;
window.saveAssignment = saveAssignment;
window.removeAssignment = removeAssignment;
window.convertOfferToProject = convertOfferToProject;
window.renderReports = renderReports;
window.renderSettings = renderSettings;
window.renderCalendar = renderCalendar;
window.loadCalendarData = loadCalendarData;
window.updateImportHint = updateImportHint;
window.previewImport = previewImport;
window.runImport = runImport;
window.addOfferItemRow = addOfferItemRow;
window.recalcOfferTotal = recalcOfferTotal;
window.saveCompanySettings = saveCompanySettings;

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
init();
