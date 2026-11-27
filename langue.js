/* Ambu Track — langue de l'interface (français / anglais).
   Le français est la langue d'origine. En anglais, chaque texte affiché est remplacé par sa
   traduction (dictionnaire ci-dessous), y compris les messages, l'export Excel et le PDF.
   Les données saisies (noms, plaques, sites, commentaires) ne sont jamais traduites.
   Fichier généré : ne pas modifier à la main (voir traductions.txt). */
(function () {
  'use strict';
  var langue = 'fr';
  try { if (localStorage.getItem('ambu.langue') === 'en') langue = 'en'; } catch (e) { /* stockage indisponible */ }
  window.AMBU_LANGUE = langue;
  window.ambuChangerLangue = function (l) {
    try { localStorage.setItem('ambu.langue', l === 'en' ? 'en' : 'fr'); } catch (e) { /* ignoré */ }
    location.reload();
  };
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('[data-langue]') : null;
    if (b) { e.preventDefault(); window.ambuChangerLangue(b.getAttribute('data-langue')); }
  });
  window.t = function (s) { return s; };
  window.ambuTraduireXLSX = function () {};
  if (langue !== 'en') return;
  document.documentElement.lang = 'en';

  var D = {
"(clôture)": "(closure)",
"(planifié)": "(planned)",
"(remplacé)": "(replaced)",
"). Clôturer quand même ?": "). Close anyway?",
", dernière le": ", last on",
", puis choisissez": ", then choose",
". Choisissez un autre chauffeur.": ". Choose another driver.",
". Utilisez": ". Use",
"8 caractères minimum": "8 characters minimum",
"Conflit :": "Conflict:",
"Erreur :": "Error:",
"Ajoutez votre commentaire dans le panneau « Compléter et transmettre ».": "Add your comment in the “Complete and send” panel.",
"Abandonner": "Discard",
"Abandonner cette saisie": "Discard this entry",
"Abandonner définitivement cette saisie ?": "Permanently discard this entry?",
"Abandonner votre version et garder celle du serveur sur cet appareil ?": "Discard your version and keep the server version on this device?",
"Absent": "Missing",
"Accident": "Accident",
"Accueil": "Home",
"Accès refusé": "Access denied",
"Actif": "Active",
"Action": "Action",
"Action / destinataire": "Action / recipient",
"Action ajoutée": "Action added",
"Action de résolution": "Resolution action",
"Action en retard (": "Overdue action (",
"Action en retard —": "Overdue action —",
"Action prise": "Action taken",
"Actions en retard": "Overdue actions",
"Actions immédiates": "Immediate actions",
"Actions rapides": "Quick actions",
"Activité": "Activity",
"Activité par ambulance": "Activity by ambulance",
"Activité par chauffeur": "Activity by driver",
"Administrateur fonctionnel": "Functional administrator",
"Administration": "Administration",
"Adresse de base": "Base address",
"Adresse à ouvrir :": "Address to open:",
"Affichage": "Display",
"Affichage impossible": "Cannot display",
"Afficher aussi les éléments à jour": "Also show up-to-date items",
"Ajouter": "Add",
"Ajouter des photos": "Add photos",
"Ajouter et choisir ce lieu": "Add and choose this place",
"Ajouter la première ambulance": "Add the first ambulance",
"Ajouter sans position": "Add without position",
"Ajouter un document": "Add a document",
"Ajouter un lieu": "Add a place",
"Ajouter un équipement": "Add equipment",
"Ajouter une ambulance": "Add an ambulance",
"Ajouter une anomalie notée": "Add a noted defect",
"Ajouter une destination": "Add a destination",
"Ajouter une destination absente de la liste": "Add a destination not in the list",
"Ajouter une photo": "Add a photo",
"Ajouter «": "Add “",
"Ajoutez le document et sa date de validité": "Add the document and its expiry date",
"Alerte transmise": "Alert sent",
"Alertes": "Alerts",
"Alertes km et pièces du véhicule": "Mileage and vehicle document alerts",
"Ambu Track est déjà installée sur cet appareil.": "Ambu Track is already installed on this device.",
"Ambu Track est installée sur cet appareil": "Ambu Track is installed on this device",
"Ambulance créée": "Ambulance created",
"Ambulance immobilisée : démarrage interdit": "Ambulance grounded: departure not allowed",
"Ambulance inconnue": "Unknown ambulance",
"Ambulance introuvable": "Ambulance not found",
"Ambulances disponibles (aujourd’hui)": "Available ambulances (today)",
"Ambulances suivies": "Ambulances tracked",
"Ambulancier": "Paramedic driver",
"Ambulancier (nom)": "Paramedic (name)",
"Ambulancier / terrain": "Paramedic / field",
"Annuler": "Cancel",
"Annuler la mission": "Cancel the mission",
"Annulé": "Cancelled",
"Annulée": "Cancelled",
"Annulée :": "Cancelled:",
"Annulées": "Cancelled",
"Année": "Year",
"Anomalie": "Defect",
"Anomalie / localisation": "Defect / location",
"Anomalie critique détectée.": "Critical defect detected.",
"Anomalies": "Defects",
"Anomalies & incidents": "Defects & incidents",
"Anomalies / incidents": "Defects / incidents",
"Anomalies déclarées": "Reported defects",
"Anomalies et incidents (période + dossiers ouverts)": "Defects and incidents (period + open cases)",
"Anomalies et incidents ouverts (": "Open defects and incidents (",
"Anomalies notées": "Noted defects",
"Anomalies nouvelles": "New defects",
"Anomalies ouvertes": "Open defects",
"Anomalies, actions et transmission": "Defects, actions and handover",
"Anomalies, incidents et accidents": "Defects, incidents and accidents",
"Anomalies-incidents": "Defects-incidents",
"Aperçu du rapport": "Report preview",
"Appareil en ligne": "Device online",
"Appareil hors ligne : les saisies sont conservées et partiront au retour du réseau": "Device offline: entries are kept and will be sent when the network returns",
"Appliquer la saisie de l’appareil": "Apply the device entry",
"Approximation (vol d’oiseau × 1,25,": "Approximation (straight line × 1.25,",
"Aptitude médicale": "Medical fitness",
"Aptitude médicale à la conduite": "Medical fitness to drive",
"Aptitude médicale à la conduite : valable jusqu’au": "Medical fitness to drive: valid until",
"Aptitudes": "Fitness",
"Archivé": "Archived",
"Arrivée": "Arrival",
"Arrivée de mission": "Mission arrival",
"Arrêt": "Stop",
"Arrêts, retards, détours, incidents…": "Stops, delays, detours, incidents…",
"Assurance": "Insurance",
"Astuce : dans Google Drive, Paramètres → « Convertir les fichiers importés au format de l’éditeur Google Docs » transforme automatiquement le fichier en Google Sheet.": "Tip: in Google Drive, Settings → “Convert uploaded files to Google Docs editor format” automatically turns the file into a Google Sheet.",
"Astuce : touchez d’abord la carte à l’endroit concerné pour joindre la position.": "Tip: first tap the map at the relevant spot to attach the position.",
"Atelier": "Workshop",
"Atelier :": "Workshop:",
"Attention :": "Warning:",
"Au kilométrage": "By mileage",
"Aucun": "None",
"Aucun NC": "No NC",
"Aucun changement déclaré": "No change reported",
"Aucun chauffeur désigné": "No driver assigned",
"Aucun commentaire": "No comment",
"Aucun commentaire.": "No comment.",
"Aucun compte": "No account",
"Aucun contrôle dans cette liste.": "No inspection in this list.",
"Aucun contrôle quotidien enregistré sur la période.": "No daily inspection recorded for the period.",
"Aucun document enregistré.": "No document recorded.",
"Aucun document.": "No document.",
"Aucun entretien enregistré.": "No maintenance recorded.",
"Aucun incident ni accident déclaré.": "No incident or accident reported.",
"Aucun incident ni anomalie déclaré sur la période.": "No incident or defect reported for the period.",
"Aucun lien pour le moment.": "No link yet.",
"Aucun lieu trouvé": "No place found",
"Aucun point d’attention": "No point of attention",
"Aucun point d’attention.": "No point of attention.",
"Aucun rapport transmis pour le moment.": "No report sent yet.",
"Aucun relevé pour le moment.": "No reading yet.",
"Aucun équipement renseigné.": "No equipment entered.",
"Aucun événement noté.": "No event noted.",
"Aucun événement.": "No event.",
"Aucun.": "None.",
"Aucune": "None",
"Aucune action de résolution enregistrée : ajoutez la preuve de résolution si possible.": "No resolution action recorded: add proof of resolution if possible.",
"Aucune action enregistrée.": "No action recorded.",
"Aucune alerte pour ce véhicule.": "No alert for this vehicle.",
"Aucune alerte.": "No alerts.",
"Aucune ambulance": "No ambulance",
"Aucune ambulance dans la portée choisie.": "No ambulance in the chosen scope.",
"Aucune ambulance enregistrée pour vos sites.": "No ambulance recorded for your sites.",
"Aucune ambulance enregistrée.": "No ambulance recorded.",
"Aucune ambulance ne correspond.": "No matching ambulance.",
"Aucune différence de contenu.": "No content difference.",
"Aucune donnée": "No data",
"Aucune entrée.": "No entries.",
"Aucune fiche chauffeur pour le moment.": "No driver profile yet.",
"Aucune fiche chauffeur.": "No driver profile.",
"Aucune fiche dans cette liste.": "No record in this list.",
"Aucune mission avec ce chauffeur.": "No mission with this driver.",
"Aucune mission dans cette liste.": "No mission in this list.",
"Aucune mission.": "No missions.",
"Aucune position indiquée : la distance ne pourra pas être estimée vers ce lieu. Continuer ?": "No position given: the distance to this place cannot be estimated. Continue?",
"Aucune remarque.": "No remarks.",
"Aucune vidange enregistrée": "No oil change recorded",
"Aucune vidange enregistrée : saisissez la dernière vidange pour activer le rappel": "No oil change recorded: enter the last oil change to enable the reminder",
"Aucune échéance proche.": "No upcoming due date.",
"Aucune.": "None.",
"Auteur": "Author",
"Automatique": "Automatic",
"Autorisation / agrément": "Authorisation / approval",
"Autre": "Other",
"Autre document": "Other document",
"Autre document (fiche technique, carte grise…)": "Other document (technical sheet, registration…)",
"Autres indicateurs du jour": "Other indicators today",
"Avec NC": "With NC",
"Base / camp": "Base / camp",
"Basse": "Low",
"Batterie": "Battery",
"Bibliothèque indisponible hors ligne": "Library unavailable offline",
"Bientôt": "Soon",
"Bienvenue": "Welcome",
"Bonjour": "Hello",
"COMMENTAIRE DU RESPONSABLE": "MANAGER’S COMMENT",
"Calcul automatique": "Automatic calculation",
"Calcul de l’itinéraire estimé…": "Calculating estimated route…",
"Calcul…": "Calculating…",
"Caractéristiques": "Features",
"Carburant": "Fuel",
"Carburant (L)": "Fuel (L)",
"Carburant (litres)": "Fuel (litres)",
"Carrosserie": "Bodywork",
"Carte & localités": "Map & places",
"Carte (est.)": "Map (est.)",
"Carte d’identification": "ID card",
"Carte et localités": "Map and places",
"Carte grise": "Registration certificate",
"Carte indisponible hors ligne : utilisez votre position.": "Map unavailable offline: use your position.",
"Catégorie": "Category",
"Catégorie de permis exigée": "Required licence category",
"Catégories": "Categories",
"Catégories de permis": "Licence categories",
"Catégories d’anomalie": "Defect categories",
"Catégories obtenues": "Categories held",
"Ce compte n’a pas (ou plus) accès à Ambu Track. Contactez l’administrateur.": "This account has no (or no longer) access to Ambu Track. Contact the administrator.",
"Ce matricule est déjà utilisé": "This staff number is already used",
"Centre d’alertes": "Alert centre",
"Certaines valeurs sont inhabituelles (": "Some values are unusual (",
"Cet identifiant existe déjà": "This identifier already exists",
"Cette mission n’est pas en cours.": "This mission is not in progress.",
"Cette position est en dehors du Gabon": "This position is outside Gabon",
"Champ": "Field",
"Changement / anomalie documenté(e)": "Change / defect documented",
"Changements": "Changes",
"Changer": "Change",
"Changer le statut": "Change status",
"Changer mon mot de passe": "Change my password",
"Chaque export est enregistré dans l’historique avec les chiffres transmis.": "Each export is recorded in the history with the figures sent.",
"Chargement des données impossible :": "Cannot load data:",
"Chargement…": "Loading…",
"Chauffeur": "Driver",
"Chauffeurs": "Drivers",
"Chauffeurs et ambulanciers": "Drivers and paramedics",
"Chiffres par ambulance sur la période": "Figures by ambulance for the period",
"Choisir": "Choose",
"Choisir dans la galerie": "Choose from gallery",
"Choisir le site": "Choose the site",
"Choisir l’ambulance": "Choose the ambulance",
"Choisir un lieu": "Choose a place",
"Choisir un lieu…": "Choose a place…",
"Choisir une date": "Choose a date",
"Choisir…": "Choose…",
"Choisissez": "Choose",
"Choisissez deux lieux.": "Choose two places.",
"Choisissez la catégorie": "Choose the category",
"Choisissez la destination prévue": "Choose the planned destination",
"Choisissez la nature de l’événement": "Choose the type of event",
"Choisissez le chauffeur pour vérifier son permis (catégorie exigée :": "Choose the driver to check their licence (required category:",
"Choisissez le départ et la destination pour obtenir une estimation d’itinéraire.": "Choose the departure and destination to get a route estimate.",
"Choisissez le point de départ": "Choose the starting point",
"Choisissez le site": "Choose the site",
"Choisissez l’ambulance": "Choose the ambulance",
"Choisissez l’ambulance pour afficher son dernier kilométrage.": "Choose the ambulance to show its latest mileage.",
"Choisissez un mot de passe différent de l’ancien": "Choose a password different from the old one",
"Clair": "Light",
"Climatisation": "Air conditioning",
"Clôture": "Closure",
"Clôture approuvée": "Closure approved",
"Clôture impossible": "Cannot close",
"Clôturer": "Close",
"Clôturer la mission": "Close the mission",
"Clôturez-la d’abord": "Close it first",
"Clôturé": "Closed",
"Clôturée": "Closed",
"Clôturées": "Closed",
"Cochez au moins un site pour ce profil": "Tick at least one site for this profile",
"Cochez l’attestation de réalisation du contrôle": "Tick the inspection completion statement",
"Code": "Code",
"Code, immatriculation, châssis…": "Code, plate, chassis…",
"Commentaire": "Comment",
"Commentaire du responsable": "Manager’s comment",
"Commentaire général": "General comment",
"Comparaison": "Comparison",
"Comparaison avec l’état précédent": "Comparison with previous condition",
"Compléter / modifier": "Complete / edit",
"Compléter et transmettre": "Complete and send",
"Compléter la fiche": "Complete the record",
"Complétez le numéro, les catégories et la date de validité": "Fill in the number, categories and expiry date",
"Compte Ambu Track": "Ambu Track account",
"Compte Ambu Track lié": "Linked Ambu Track account",
"Compte actif": "Active account",
"Compte de": "Account of",
"Compteur": "Odometer",
"Condition": "Condition",
"Condition route / météo / trafic": "Road / weather / traffic conditions",
"Confirmation": "Confirmation",
"Confirmer": "Confirm",
"Confirmez la destination": "Confirm the destination",
"Conflit": "Conflict",
"Conflits à arbitrer (superviseur)": "Conflicts to resolve (supervisor)",
"Conforme": "Compliant",
"Connexion nécessaire pour changer le mot de passe": "Connection required to change the password",
"Connexion nécessaire pour créer un compte": "Connection required to create an account",
"Connexion nécessaire pour créer un lien": "Connection required to create a link",
"Connexion…": "Signing in…",
"Consommation moyenne entre deux pleins :": "Average consumption between two fill-ups:",
"Consultation : les exports ne sont pas enregistrés dans l’historique.": "View only: exports are not recorded in the history.",
"Consultation en ligne uniquement": "Online viewing only",
"Contrôle": "Inspection",
"Contrôle de prise de service": "Start-of-shift inspection",
"Contrôle d’origine": "Original inspection",
"Contrôle enregistré": "Inspection saved",
"Contrôle introuvable": "Inspection not found",
"Contrôle ponctuel": "Spot inspection",
"Contrôle quotidien": "Daily inspection",
"Contrôle ·": "Inspection ·",
"Contrôles": "Inspections",
"Contrôles aujourd’hui": "Inspections today",
"Contrôles quotidiens": "Daily inspections",
"Coordonnées hors du Gabon": "Coordinates outside Gabon",
"Copier": "Copy",
"Copiez ces informations maintenant : la clé du lien ne sera plus affichée. Ne la diffusez qu’aux personnes autorisées.": "Copy this information now: the link key will not be shown again. Share it only with authorised people.",
"Copié": "Copied",
"Coût": "Cost",
"Coût (FCFA)": "Cost (FCFA)",
"Coût :": "Cost:",
"Coût FCFA": "Cost FCFA",
"Critique": "Critical",
"Création": "Creation",
"Création en ligne uniquement. Si la personne a déjà un compte Flottemine avec cet e-mail, il est rattaché et elle garde son mot de passe.": "Online creation only. If the person already has a Flottemine account with this e-mail, it is linked and they keep their password.",
"Création…": "Creating…",
"Créer automatiquement une fiche anomalie pour chaque point NC": "Automatically create a defect record for each NC item",
"Créer la fiche": "Create the record",
"Créer la première fiche": "Create the first record",
"Créer le compte": "Create the account",
"Créer le lien": "Create the link",
"Créer l’ambulance": "Create the ambulance",
"Créer un lien Google Sheets": "Create a Google Sheets link",
"Créer une fiche chauffeur": "Create a driver profile",
"Dans Chrome ou Edge, cliquez sur l’icône": "In Chrome or Edge, click the icon",
"Date": "Date",
"Date de délivrance": "Issue date",
"Date de fin de validité": "Expiry date",
"Date d’expiration / validité": "Expiry / validity date",
"Date d’intervention": "Service date",
"Date d’émission": "Issue date",
"Date et heure": "Date and time",
"Date et heure enregistrées automatiquement (heure du Gabon).": "Date and time recorded automatically (Gabon time).",
"Date non renseignée": "Date not entered",
"Date seulement, aucune information médicale.": "Date only, no medical information.",
"Dernier contrôle :": "Last inspection:",
"Dernier kilométrage connu :": "Last known mileage:",
"Dernier kilométrage connu de": "Last known mileage of",
"Derniers relevés (": "Latest readings (",
"Dernière synchronisation réussie": "Last successful sync",
"Dernières missions": "Latest missions",
"Description": "Description",
"Description des travaux": "Description of work",
"Description factuelle": "Factual description",
"Description trop courte": "Description too short",
"Destinataires": "Recipients",
"Destinataires :": "Recipients:",
"Destination": "Destination",
"Destination (confirmer ou corriger)": "Destination (confirm or correct)",
"Destination prévue": "Planned destination",
"Destination «": "Destination “",
"Deux personnes ont modifié la même fiche": "Two people edited the same record",
"Diesel, 4x4, cellule sanitaire…": "Diesel, 4x4, medical module…",
"Direction / coordinateur": "Management / coordinator",
"Disponibilité à la date d’édition :": "Availability on the date of issue:",
"Disponible": "Available",
"Disponible après synchronisation.": "Available after sync.",
"Disponible avec réserve": "Available with reservation",
"Disponibles": "Available",
"Distance": "Distance",
"Distance carte (estimation)": "Map distance (estimate)",
"Distance carte estimée": "Estimated map distance",
"Distance carte estimée (km)": "Estimated map distance (km)",
"Distance compteur": "Odometer distance",
"Distance compteur (km)": "Odometer distance (km)",
"Distance estimée :": "Estimated distance:",
"Distance inhabituellement élevée": "Unusually high distance",
"Distance max. par mission (km)": "Max. distance per mission (km)",
"Distance réelle déclarée au compteur": "Actual distance from the odometer",
"Document": "Document",
"Document enregistré": "Document saved",
"Document joint (photo ou PDF)": "Attached document (photo or PDF)",
"Documents": "Documents",
"Documents en vigueur": "Current documents",
"Dommages": "Damage",
"Dommages constatés": "Damage observed",
"Donnez un nom au lien": "Give the link a name",
"Données accessibles": "Accessible data",
"Données de cet appareil": "Data on this device",
"Données synchronisées": "Data synced",
"Données à synchroniser (cet appareil)": "Data to sync (this device)",
"Dossiers résolus": "Resolved cases",
"Du": "From",
"Durée": "Duration",
"Durée (min)": "Duration (min)",
"Durée nulle ou négative": "Zero or negative duration",
"Durée totale": "Total duration",
"Durée totale de mission": "Total mission duration",
"Décision": "Decision",
"Déclarer un incident": "Report an incident",
"Déclarer un incident / accident": "Report an incident / accident",
"Déclarer un incident ou un accident": "Report an incident or an accident",
"Déclaré par": "Reported by",
"Décrivez la correction": "Describe the correction",
"Décrivez l’action": "Describe the action",
"Décrivez l’événement": "Describe the event",
"Défectueux": "Faulty",
"Définir un nouveau mot de passe provisoire pour": "Set a new temporary password for",
"Déjà présente": "Already present",
"Déjà présente à la prise ?": "Already present at start of shift?",
"Délivré le": "Issued on",
"Démarrage": "Start",
"Démarrer la mission maintenant": "Start the mission now",
"Démarrer une mission": "Start a mission",
"Démarrée le": "Started on",
"Départ": "Departure",
"Départ de mission": "Mission departure",
"Dépassé": "Overdue",
"Dépenses (FCFA)": "Expenses (FCFA)",
"Dépenses enregistrées (FCFA)": "Recorded expenses (FCFA)",
"Dérogation / justification :": "Exemption / justification:",
"Désactiver": "Deactivate",
"Désactivé": "Deactivated",
"Détail des missions": "Mission details",
"Détails": "Details",
"Détour": "Detour",
"E-mail": "E-mail",
"E-mail (identifiant de connexion)": "E-mail (login)",
"E-mail invalide": "Invalid e-mail",
"E-mail ou mot de passe incorrect": "Incorrect e-mail or password",
"En attente": "Pending",
"En attente d’envoi": "Waiting to be sent",
"En attente d’envoi (": "Waiting to be sent (",
"En attente pièce / approbation": "Waiting for part / approval",
"En cours": "In progress",
"En erreur ou en conflit": "In error or conflict",
"En maintenance": "Under maintenance",
"En mission": "On mission",
"En retard": "Late",
"En vigueur": "Current",
"Encore ouverts": "Still open",
"Enregistrement des trajets au compteur": "Odometer trip logging",
"Enregistrer": "Save",
"Enregistrer la fiche": "Save the record",
"Enregistrer la fiche de contrôle": "Save the inspection sheet",
"Enregistrer le contrôle": "Save the inspection",
"Enregistrer le relevé": "Save the reading",
"Enregistrer les listes": "Save the lists",
"Enregistrer les modifications": "Save changes",
"Enregistrer les seuils": "Save the thresholds",
"Enregistrer un entretien": "Record maintenance",
"Enregistrer un entretien ou une réparation": "Record maintenance or a repair",
"Enregistré": "Saved",
"Entretien": "Maintenance",
"Entretien & documents": "Maintenance & documents",
"Entretien enregistré": "Maintenance saved",
"Entretien et documents": "Maintenance and documents",
"Entretiens": "Maintenance",
"Entretiens et réparations": "Maintenance and repairs",
"Entretiens réalisés": "Maintenance done",
"Envoyer": "Send",
"Erreur d’envoi": "Send error",
"Erreur ou conflit : ouvrez l’écran Synchronisation": "Error or conflict: open the Sync screen",
"Erreur serveur (": "Server error (",
"Estimation carte": "Map estimate",
"Estimation indisponible : coordonnées du lieu manquantes.": "Estimate unavailable: place coordinates missing.",
"Estimer un itinéraire": "Estimate a route",
"Ex. : Chef de projet, Responsable HSE": "E.g. Project manager, HSE manager",
"Ex. : Libreville": "E.g. Libreville",
"Ex. : Tableau de bord direction": "E.g. Management dashboard",
"Ex. : conducteur + infirmier": "E.g. driver + nurse",
"Ex. : erreur de lecture au relevé précédent, compteur remplacé…": "E.g. reading error last time, odometer replaced…",
"Ex. : piste Belinga km 12, garage base…": "E.g. Belinga track km 12, base garage…",
"Ex. : pont coupé entre Ntsenkélé et Belinga depuis le 20/11": "E.g. bridge closed between Ntsenkélé and Belinga since 20/11",
"Ex. : village, campement, carrefour, dispensaire": "E.g. village, camp, crossroads, clinic",
"Excel téléchargé :": "Excel downloaded:",
"Expiration": "Expiry",
"Expiration de session (heures d’inactivité)": "Session expiry (hours of inactivity)",
"Expire dans": "Expires in",
"Expirent dans moins de": "Expire in less than",
"Expiré": "Expired",
"Expiré depuis": "Expired for",
"Expirée": "Expired",
"Expliquez la valeur inhabituelle (compteur remplacé, erreur de relevé, oubli de clôture…)": "Explain the unusual value (odometer replaced, reading error, forgot to close…)",
"Export impossible :": "Export failed:",
"Exporter Excel": "Export Excel",
"Extincteur": "Fire extinguisher",
"FCFA.": "FCFA.",
"Factures, rapports d’intervention, photos": "Invoices, service reports, photos",
"Faire un contrôle": "Do an inspection",
"Faits marquants, décisions, besoins (pièces, budget, personnel)…": "Highlights, decisions, needs (parts, budget, staff)…",
"Faits observés, sans jugement ni donnée médicale nominative": "Observed facts, without judgement or named medical data",
"Fermer": "Close",
"Fiche": "Record",
"Fiche active (proposée pour les missions)": "Active record (offered for missions)",
"Fiche chauffeur": "Driver profile",
"Fiche chauffeur créée": "Driver profile created",
"Fiche de contrôle enregistrée": "Inspection sheet saved",
"Fiche de contrôle et de transmission": "Inspection and handover sheet",
"Fiche de contrôle et de transmission (prise et fin de service)": "Inspection and handover sheet (start and end of shift)",
"Fiche enregistrée": "Record saved",
"Fiche enregistrée — alerte visible par les responsables dès la synchronisation. Suivez la procédure d’urgence Fortescue.": "Record saved — alert visible to managers as soon as it syncs. Follow the Fortescue emergency procedure.",
"Fiche introuvable": "Record not found",
"Fiche mise à jour": "Record updated",
"Fiche technique": "Technical sheet",
"Fiches anomalie créées": "Defect records created",
"Fichier Excel téléchargé": "Excel file downloaded",
"Fin de service": "End of shift",
"Fonction": "Role",
"Format : une ligne « ## Groupe » puis une ligne par point. Ajoutez « ! » en début de ligne pour un point critique. Ne changez pas l’ordre des points existants sans prévenir les équipes.": "Format: one “## Group” line then one line per item. Start a line with “!” for a critical item. Do not change the order of existing items without telling the teams.",
"Formation secourisme": "First-aid training",
"Formation secourisme : valable jusqu’au": "First-aid training: valid until",
"Fournisseur / atelier": "Supplier / workshop",
"Fournisseur / organisme": "Supplier / body",
"Freins": "Brakes",
"Garder la version du serveur": "Keep the server version",
"Garder ma version": "Keep my version",
"Google Sheets relié en direct": "Live-linked Google Sheets",
"Hausse de": "Increase of",
"Hausse inhabituelle depuis le dernier relevé": "Unusual increase since the last reading",
"Haute": "High",
"Hebdomadaire (semaine en cours)": "Weekly (current week)",
"Heure": "Time",
"Heure de clôture corrigée (saisie le": "Closing time corrected (entered on",
"Heure du Gabon (Libreville, UTC+1)": "Gabon time (Libreville, UTC+1)",
"Heure réelle d’arrivée": "Actual arrival time",
"Heures": "Hours",
"Heures de mission": "Mission hours",
"Historique": "History",
"Historique des documents": "Document history",
"Historique des modifications": "Change history",
"Historique des statuts": "Status history",
"Hors ligne": "Offline",
"Hors ligne ·": "Offline ·",
"Hors service": "Out of service",
"Hôpital / centre de santé": "Hospital / health centre",
"Icône sur l’écran d’accueil, ouverture en plein écran, fonctionnement sans réseau.": "Home-screen icon, full-screen, works without network.",
"Icône sur l’écran d’accueil, plein écran, fonctionne sans réseau.": "Home-screen icon, full screen, works without network.",
"Identifiant": "Identifier",
"Identifiant interne": "Internal identifier",
"Identité": "Identity",
"Image illisible": "Unreadable image",
"Imagerie © Esri, Maxar, Earthstar Geographics": "Imagery © Esri, Maxar, Earthstar Geographics",
"Immatriculation": "Plate number",
"Immobilisée": "Grounded",
"Immobilisées": "Grounded",
"Import terminé": "Import complete",
"Importer des ambulances (CSV)": "Import ambulances (CSV)",
"Imprimer / PDF": "Print / PDF",
"Inactif": "Inactive",
"Inc./acc.": "Inc./acc.",
"Incident": "Incident",
"Incident / accident": "Incident / accident",
"Incidents": "Incidents",
"Incidents / accidents": "Incidents / accidents",
"Incidents et anomalies de la période": "Incidents and defects for the period",
"Incidents-anomalies": "Incidents-defects",
"Incidents/accidents": "Incidents/accidents",
"Indicateur": "Indicator",
"Indicateurs clés": "Key indicators",
"Indiquez la date": "Enter the date",
"Indiquez la date et l’heure": "Enter the date and time",
"Indiquez le motif": "Enter the reason",
"Indiquez le motif d’indisponibilité": "Enter the reason for unavailability",
"Indiquez le nom du lieu": "Enter the place name",
"Indiquez le nombre de litres du plein": "Enter the litres filled",
"Indiquez le statut déclaré du véhicule": "Enter the reported vehicle status",
"Indiquez l’heure réelle d’arrivée": "Enter the actual arrival time",
"Indisponible": "Unavailable",
"Infirmier": "Nurse",
"Informations": "Information",
"Inférieur au dernier kilométrage connu": "Lower than the last known mileage",
"Installer": "Install",
"Installer Ambu Track": "Install Ambu Track",
"Installer l’application": "Install the app",
"Installer l’application sur ce téléphone": "Install the app on this phone",
"Installez Ambu Track sur ce téléphone": "Install Ambu Track on this phone",
"Intervalle vidange (jours)": "Oil change interval (days)",
"Intervalle vidange (km)": "Oil change interval (km)",
"Interventions liées": "Linked work orders",
"Jamais": "Never",
"Joindre les vues à la prise et à la fin de service. Décrire les différences ou dommages constatés.": "Attach views at start and end of shift. Describe differences or damage observed.",
"Journal d’audit": "Audit log",
"Justification": "Justification",
"Justification / dérogation": "Justification / exemption",
"Justification obligatoire (5 caractères minimum)": "Justification required (5 characters minimum)",
"J’ai noté le mot de passe": "I have noted the password",
"J’atteste avoir réalisé ce contrôle et déclaré les observations. Cette attestation ne constitue pas une attribution automatique de responsabilité pour les défauts préexistants.": "I certify that I carried out this inspection and reported my observations. This statement does not automatically assign responsibility for pre-existing defects.",
"Kilomètres au compteur": "Odometer kilometres",
"Kilométrage": "Mileage",
"Kilométrage affiché au compteur": "Mileage shown on the odometer",
"Kilométrage courant": "Current mileage",
"Kilométrage courant :": "Current mileage:",
"Kilométrage de départ (compteur)": "Departure mileage (odometer)",
"Kilométrage d’arrivée (compteur)": "Arrival mileage (odometer)",
"Kilométrage d’arrivée inférieur au départ": "Arrival mileage lower than departure",
"Kilométrage initial": "Initial mileage",
"Kilométrage initial (à la mise en service dans l’application)": "Initial mileage (when added to the app)",
"Kilométrages / dates dépassés": "Mileage / dates overdue",
"Kilométrages dépassés, pièces du véhicule expirées, permis des chauffeurs": "Mileage overdue, expired vehicle documents, driver licences",
"Km arrivée": "Arrival km",
"Km départ": "Departure km",
"La clôture doit être approuvée par un superviseur (procédure Fortescue).": "Closure must be approved by a supervisor (Fortescue procedure).",
"La courbe apparaît à partir de deux relevés.": "The chart appears from two readings onwards.",
"La date de validité est obligatoire pour ce document": "The expiry date is required for this document",
"La fiche doit contenir au moins un point": "The sheet must contain at least one item",
"La fin de validité est antérieure à la délivrance": "The expiry date is before the issue date",
"La photo sert à identifier la personne sur le terrain et sur sa carte d’identification": "The photo identifies the person in the field and on their ID card",
"Le changement de statut est enregistré immédiatement et tracé.": "The status change is saved immediately and logged.",
"Le fichier": "The file",
"Le journal d’audit se consulte en ligne.": "The audit log is viewed online.",
"Le kilométrage d’arrivée est obligatoire": "Arrival mileage is required",
"Le kilométrage saisi (": "The mileage entered (",
"Le nom est obligatoire": "The name is required",
"Le superviseur est alerté sur le tableau de bord dès la synchronisation. Appliquez la procédure de notification Fortescue : l’application ne remplace pas le canal d’urgence.": "The supervisor is alerted on the dashboard as soon as it syncs. Apply the Fortescue notification procedure: the app does not replace the emergency channel.",
"Lecture du fichier impossible": "Cannot read the file",
"Les alertes critiques suivent toujours le canal d’urgence Fortescue : l’application ne le remplace pas.": "Critical alerts always follow the Fortescue emergency channel: the app does not replace it.",
"Les deux mots de passe sont différents": "The two passwords are different",
"Libellé": "Label",
"Lien": "Link",
"Lien Google Sheets": "Google Sheets link",
"Lien désactivé": "Link deactivated",
"Lien réactivé": "Link reactivated",
"Lien «": "Link “",
"Lieu": "Place",
"Lieu actif (proposé dans les listes)": "Active place (offered in lists)",
"Lieu concerné (facultatif)": "Place concerned (optional)",
"Lieu de délivrance": "Place of issue",
"Lieu enregistré": "Place saved",
"Lieu manquant": "Missing place",
"Lieu où le chauffeur est basé. Liste gérée dans Administration → Sites.": "Where the driver is based. List managed in Administration → Sites.",
"Lieu vérifié": "Place verified",
"Lignes ignorées :": "Lines skipped:",
"Liste": "List",
"Listes de choix": "Choice lists",
"Listes enregistrées": "Lists saved",
"Litres": "Litres",
"Lié à la fiche :": "Linked to record:",
"Localité": "Place",
"Localité (facultatif)": "Place (optional)",
"Localité de passage": "Place passed through",
"Localités (": "Places (",
"L’ancien document (expiration": "The old document (expiry",
"L’application s’installe comme une application normale : icône sur l’écran d’accueil, ouverture en plein écran et fonctionnement sans réseau.": "The app installs like a normal app: home-screen icon, full-screen opening and works without network.",
"L’expiration est antérieure à l’émission": "The expiry is before the issue date",
"L’heure de démarrage est enregistrée automatiquement": "The start time is recorded automatically",
"L’heure réelle d’arrivée est différente (oubli de clôture)": "The actual arrival time is different (forgot to close)",
"L’identifiant est obligatoire": "The identifier is required",
"L’immatriculation est obligatoire": "The plate number is required",
"L’immobilisation et sa levée sont réservées au superviseur (procédure Fortescue).": "Grounding and releasing are reserved to the supervisor (Fortescue procedure).",
"Manquant": "Missing",
"Manquante": "Missing",
"Marque": "Make",
"Marque / modèle": "Make / model",
"Masquer": "Hide",
"Masquer les éléments à jour": "Hide up-to-date items",
"Matricule": "Staff number",
"Mensuel (mois en cours)": "Monthly (current month)",
"Menu principal": "Main menu",
"Mesure immédiate": "Immediate measure",
"Mesure immédiate prise": "Immediate measure taken",
"Mettre à jour": "Update",
"Mission annulée": "Mission cancelled",
"Mission clôturée :": "Mission closed:",
"Mission démarrée à": "Mission started at",
"Mission en cours": "Mission in progress",
"Mission en cours ·": "Mission in progress ·",
"Mission introuvable": "Mission not found",
"Mission non clôturée —": "Mission not closed —",
"Missions clôturées": "Missions closed",
"Missions démarrées": "Missions started",
"Modification": "Edit",
"Modifications enregistrées": "Changes saved",
"Modifier": "Edit",
"Modifier la fiche": "Edit the record",
"Modifier le lieu": "Edit the place",
"Modifier le site": "Edit the site",
"Modifier les informations": "Edit the information",
"Modifier —": "Edit —",
"Modèle": "Model",
"Mois précédent": "Previous month",
"Mon compte": "My account",
"Montant (FCFA)": "Amount (FCFA)",
"Montant FCFA": "Amount FCFA",
"Mot de passe": "Password",
"Mot de passe changé": "Password changed",
"Mot de passe enregistré": "Password saved",
"Mot de passe provisoire": "Temporary password",
"Mot de passe trop simple": "Password too simple",
"Moteur d’itinéraire OSRM (OpenStreetMap)": "OSRM routing engine (OpenStreetMap)",
"Motif": "Reason",
"Motif / commentaire": "Reason / comment",
"Motif d’annulation": "Cancellation reason",
"Motif d’indisponibilité": "Reason for unavailability",
"Motifs de mission": "Mission reasons",
"Motifs de relevé kilométrique": "Mileage reading reasons",
"Moyenne": "Medium",
"Mécanique": "Mechanical",
"Médecin": "Doctor",
"Météo": "Weather",
"Météo :": "Weather:",
"Même lieu": "Same place",
"Natures d’incident": "Incident types",
"Navigation rapide": "Quick navigation",
"Ne saisissez aucun nom de patient ni information médicale.": "Do not enter any patient name or medical information.",
"Ne saisissez aucune donnée médicale nominative concernant un patient.": "Do not enter any named medical data about a patient.",
"Niveaux de carburant": "Fuel levels",
"Nom": "Name",
"Nom du lien": "Link name",
"Nom du lieu": "Place name",
"Nom et prénom": "Full name",
"Nom normalisé": "Normalised name",
"Nom, matricule, n° de permis…": "Name, staff number, licence no.…",
"Non": "No",
"Non applicable": "Not applicable",
"Non conforme": "Non-compliant",
"Non connecté": "Not signed in",
"Non désigné": "Not assigned",
"Non enregistré": "Not recorded",
"Non renseigné": "Not entered",
"Non synchronisé": "Not synced",
"Note de revue du superviseur": "Supervisor review note",
"Note d’approbation de clôture": "Closure approval note",
"Notes": "Notes",
"Notez-le et remettez-le en main propre (pas par WhatsApp ni SMS). Il ne sera plus affiché. La personne devra le changer à sa première connexion.": "Write it down and hand it over in person (not by WhatsApp or SMS). It will not be shown again. The person must change it at first sign-in.",
"Nouveau": "New",
"Nouveau contrôle": "New inspection",
"Nouveau mot de passe": "New password",
"Nouveau mot de passe (8 caractères minimum)": "New password (8 characters minimum)",
"Nouveau relevé kilométrique": "New mileage reading",
"Nouveau site": "New site",
"Nouveau statut": "New status",
"Nouveau → Importer un fichier": "New → Upload a file",
"Nouvel utilisateur": "New user",
"Nouvelle ambulance": "New ambulance",
"Nouvelle fiche": "New record",
"Nouvelle fiche chauffeur": "New driver profile",
"Nouvelle photo": "New photo",
"Nouvelle version disponible": "New version available",
"Numéro": "Number",
"Numéro de châssis": "Chassis number",
"Numéro de permis": "Licence number",
"N° de châssis": "Chassis no.",
"Objet": "Subject",
"Observation / défaut constaté (obligatoire pour un NC)": "Observation / defect found (required for an NC)",
"Observation obligatoire pour le NC :": "Observation required for the NC:",
"Observations": "Observations",
"Oui": "Yes",
"Oui, c’est bien le compteur": "Yes, that is the odometer reading",
"Oui, le compteur indique bien cela": "Yes, the odometer really shows this",
"Ouverte": "Open",
"Ouverts": "Open",
"Ouvrez": "Open",
"Ouvrez ce lien dans": "Open this link in",
"Ouvrez le fichier : il s’affiche dans": "Open the file: it appears in",
"Ouvrir Google Drive": "Open Google Drive",
"Ouvrir dans Google Sheets": "Open in Google Sheets",
"Ouvrir le centre d’alertes": "Open the alert centre",
"Ouvrir le menu": "Open the menu",
"Ou ouvrez le menu": "Or open the menu",
"PDF trop lourd (1,4 Mo maximum). Prenez plutôt une photo du document.": "PDF too large (1.4 MB maximum). Take a photo of the document instead.",
"PDF téléchargé :": "PDF downloaded:",
"POINTS D’ATTENTION": "POINTS OF ATTENTION",
"Page": "Page",
"Par": "By",
"Par ambulance": "By ambulance",
"Par chauffeur": "By driver",
"Par site": "By site",
"Paramètre": "Setting",
"Paramètres": "Settings",
"Parc": "Fleet",
"Parc ambulances": "Ambulance fleet",
"Partage": "Sharing",
"Partage impossible : le PDF a été téléchargé": "Sharing not possible: the PDF was downloaded",
"Partager": "Share",
"Partager le PDF (WhatsApp, e-mail…)": "Share the PDF (WhatsApp, e-mail…)",
"Pas de réseau : la connexion nécessite Internet.": "No network: signing in requires the Internet.",
"Pas encore synchronisé": "Not synced yet",
"Passer à «": "Switch to “",
"Pendant la mission": "During the mission",
"Permet de proposer automatiquement cette personne comme chauffeur de ses missions.": "Lets the app automatically offer this person as driver for their missions.",
"Permis": "Licence",
"Permis bientôt expiré": "Licence expiring soon",
"Permis de": "Licence of",
"Permis de conduire": "Driving licence",
"Permis de conduire —": "Driving licence —",
"Permis et aptitudes": "Licence and fitness",
"Permis et aptitudes (sans numéro de permis)": "Licence and fitness (without licence number)",
"Permis exigé": "Licence required",
"Permis expiré": "Licence expired",
"Permis non renseigné —": "Licence not entered —",
"Permis valide": "Valid licence",
"Permis à compléter": "Licence to complete",
"Personnes notifiées": "People notified",
"Personnes notifiées selon la procédure": "People notified per procedure",
"Photo": "Photo",
"Photo / pièce jointe": "Photo / attachment",
"Photo de": "Photo of",
"Photo de face, visage dégagé, fond clair. Elle est recadrée automatiquement.": "Front photo, face visible, light background. It is cropped automatically.",
"Photo du compteur (recommandée)": "Odometer photo (recommended)",
"Photo d’identification": "ID photo",
"Photo non disponible hors ligne": "Photo unavailable offline",
"Photos / pièces jointes": "Photos / attachments",
"Photos de l’état du véhicule": "Vehicle condition photos",
"Pièces": "Parts",
"Pièces / travaux :": "Parts / work:",
"Pièces du véhicule": "Vehicle documents",
"Pièces expirées": "Expired documents",
"Pièces expirées, vidanges, permis, incidents prioritaires": "Expired documents, oil changes, licences, priority incidents",
"Pièces obligatoires non enregistrées": "Mandatory documents not recorded",
"Pièces ou travaux": "Parts or work",
"Pièces remplacées": "Parts replaced",
"Plan": "Map",
"Planifié": "Planned",
"Plein soleil": "Bright sun",
"Plus": "More",
"Pneus": "Tyres",
"Point de départ": "Starting point",
"Point de repère": "Landmark",
"Point focal site": "Site focal point",
"Point non coché :": "Item not ticked:",
"Point suivant non coché": "Next item not ticked",
"Points": "Items",
"Points NC": "NC items",
"Points de contrôle": "Inspection items",
"Points de la fiche de contrôle": "Inspection sheet items",
"Points d’attention": "Points of attention",
"Points non conformes": "Non-compliant items",
"Portée": "Scope",
"Position (pour estimer la distance)": "Position (to estimate the distance)",
"Position choisie sur la carte": "Position chosen on the map",
"Position erronée": "Wrong position",
"Position et nom vérifiés avec l’équipe terrain": "Position and name checked with the field team",
"Position non disponible sur cet appareil": "Position not available on this device",
"Position refusée ou indisponible : touchez la carte.": "Position refused or unavailable: tap the map.",
"Position touchée sur la carte :": "Position tapped on the map:",
"Pour une vidange, l’application propose": "For an oil change, the app suggests",
"Premier contrôle de ce véhicule": "First inspection of this vehicle",
"Première connexion : le réseau est nécessaire pour télécharger les données.": "First sign-in: the network is needed to download the data.",
"Prendre la photo": "Take the photo",
"Preuve de résolution (photo, bon d’intervention)": "Proof of resolution (photo, work order)",
"Priorité": "Priority",
"Prise de service": "Start of shift",
"Prochain :": "Next:",
"Prochain km": "Next km",
"Prochain rappel": "Next reminder",
"Prochaine date": "Next date",
"Prochaine vidange :": "Next oil change:",
"Proche": "Close",
"Profil": "Profile",
"Province": "Province",
"Précisez le motif (5 caractères minimum)": "Give the reason (5 characters minimum)",
"Précédent": "Previous",
"Prénom": "First name",
"Préparation…": "Preparing…",
"Préparer le reporting": "Prepare the report",
"Présent / OK": "Present / OK",
"Prévu le": "Planned for",
"Période": "Period",
"Période personnalisée": "Custom period",
"Période précédente": "Previous period",
"Période suivante": "Next period",
"Que constatez-vous ?": "What do you observe?",
"Quotidien": "Daily",
"Rappel des documents": "Document reminder",
"Rappel documents (jours avant)": "Document reminder (days before)",
"Rappel entretien (jours avant)": "Maintenance reminder (days before)",
"Rappel entretien (km avant)": "Maintenance reminder (km before)",
"Rappel permis / aptitudes (jours avant)": "Licence / fitness reminder (days before)",
"Rapport": "Report",
"Rapport d’activité des ambulances - Projet Belinga": "Ambulance activity report - Belinga Project",
"Rapport d’activité des ambulances · Projet Belinga": "Ambulance activity report · Belinga Project",
"Rapport hebdomadaire": "Weekly report",
"Rapport journalier, hebdomadaire ou mensuel prêt à transmettre à vos chefs : PDF, Excel ou Google Sheets": "Daily, weekly or monthly report ready to send to your managers: PDF, Excel or Google Sheets",
"Rapport mensuel": "Monthly report",
"Rapport personnalisé": "Custom report",
"Rapport quotidien": "Daily report",
"Rapport transmis": "Report sent",
"Rapports et analyses": "Reports and analysis",
"Rapports et indicateurs": "Reports and indicators",
"Rapports transmis (": "Reports sent (",
"Recharger toutes les données ? Les saisies en attente sont conservées.": "Reload all data? Pending entries are kept.",
"Recharger toutes les données du serveur": "Reload all data from the server",
"Recherche de la position…": "Finding position…",
"Rechercher une ville, un village, un site…": "Search a town, village, site…",
"Rechercher…": "Search…",
"Reconnectez-vous pour synchroniser": "Sign in again to sync",
"Reconnexion requise": "Sign-in required",
"Rejetée": "Rejected",
"Relevé enregistré :": "Reading saved:",
"Relevé kilométrique": "Mileage reading",
"Relevé km": "Mileage reading",
"Relevés du compteur en dehors des missions (prise de service, plein, contrôle)": "Odometer readings outside missions (start of shift, fill-up, inspection)",
"Relevés kilométriques": "Mileage readings",
"Relevés kilométriques et carburant": "Mileage and fuel readings",
"Relevés km": "Mileage readings",
"Remarque carte": "Map remark",
"Remarque envoyée au référent carte": "Remark sent to the map officer",
"Remarques terrain (": "Field remarks (",
"Remplacé": "Replaced",
"Renouveler": "Renew",
"Renouveler :": "Renew:",
"Reporting": "Reporting",
"Reporting hiérarchie": "Management reporting",
"Reporting à la hiérarchie": "Reporting to management",
"Responsable": "Owner",
"Responsable / équipe": "Owner / team",
"Responsable / équipe de référence": "Owner / reference team",
"Responsable :": "Owner:",
"Responsable du suivi": "Follow-up owner",
"Retirer": "Remove",
"Retour": "Back",
"Retour à l’accueil": "Back to home",
"Revu": "Reviewed",
"Revue": "Review",
"Revue validée": "Review approved",
"Route": "Road",
"Route :": "Road:",
"Route impraticable": "Impassable road",
"Route manquante": "Missing road",
"Rouvrir": "Reopen",
"Réactiver": "Reactivate",
"Réalisé": "Done",
"Réception": "Receipt",
"Réception / responsable médical (nom)": "Receipt / medical lead (name)",
"Réessayer": "Retry",
"Référentiel :": "Reference data:",
"Réparation": "Repair",
"Réparation / entretien lié": "Linked repair / maintenance",
"Réponse": "Response",
"Réseau indisponible — vos saisies restent enregistrées sur l’appareil.": "Network unavailable — your entries remain saved on the device.",
"Réservé au point focal, au superviseur et à l’administrateur.": "Reserved to the focal point, the supervisor and the administrator.",
"Réservé au point focal, au superviseur, à l’administrateur et à la direction.": "Reserved to the focal point, the supervisor, the administrator and management.",
"Réservé au superviseur ou à l’administrateur.": "Reserved to the supervisor or the administrator.",
"Réservé à l’administrateur fonctionnel.": "Reserved to the functional administrator.",
"Résolu": "Resolved",
"Résolus / clôturés": "Resolved / closed",
"Résolus sur la période": "Resolved in the period",
"Résolus sur la période / encore ouverts": "Resolved in the period / still open",
"Résultats de la mission": "Mission results",
"Résumé": "Summary",
"Révision": "Service",
"SYNTHÈSE": "SUMMARY",
"Saisi le": "Entered on",
"Saisi par": "Entered by",
"Saisie de l’appareil": "Device entry",
"Saisie par": "Entered by",
"Saisie terrain": "Field entry",
"Saisies à synchroniser": "Entries to sync",
"Saisissez au moins une information": "Enter at least one item of information",
"Saisissez le kilométrage": "Enter the mileage",
"Saisissez le kilométrage affiché au compteur": "Enter the mileage shown on the odometer",
"Saisissez le kilométrage de départ": "Enter the departure mileage",
"Saisissez votre e-mail et votre mot de passe": "Enter your e-mail and password",
"Sans date": "No date",
"Sans date d’expiration": "No expiry date",
"Satellite": "Satellite",
"Scan du permis": "Licence scan",
"Scan ou photo du permis": "Scan or photo of the licence",
"Se connecter": "Sign in",
"Se déconnecter": "Sign out",
"Se déconnecter de Ambu Track ?": "Sign out of Ambu Track?",
"Se reconnecter": "Sign in again",
"Secourisme": "First aid",
"Secouriste": "First-aider",
"Session expirée : reconnectez-vous": "Session expired: sign in again",
"Session expirée : reconnectez-vous pour envoyer vos saisies": "Session expired: sign in again to send your entries",
"Session expirée ou verrouillée : reconnectez-vous. Vos saisies sont conservées sur l’appareil.": "Session expired or locked: sign in again. Your entries are kept on the device.",
"Seuils : vidange tous les": "Thresholds: oil change every",
"Seuils enregistrés": "Thresholds saved",
"Seuils et rappels": "Thresholds and reminders",
"Seulement": "Only",
"Signalement": "Report",
"Signaler": "Report",
"Signaler une anomalie": "Report a defect",
"Signaler une correction": "Report a correction",
"Signaler une correction de la carte": "Report a map correction",
"Site": "Site",
"Site / base": "Site / base",
"Site :": "Site:",
"Site Fortescue": "Fortescue site",
"Site actif": "Active site",
"Site d’affectation": "Assigned site",
"Site enregistré": "Site saved",
"Sites": "Sites",
"Sites autorisés": "Authorised sites",
"Sites et import": "Sites and import",
"Sombre": "Dark",
"Source": "Source",
"Source de l’estimation :": "Estimate source:",
"Statut": "Status",
"Statut de l’équipement enregistré": "Equipment status saved",
"Statut déclaré": "Reported status",
"Statut déclaré par le contrôleur": "Status reported by the inspector",
"Statut mis à jour": "Status updated",
"Statut opérationnel": "Operational status",
"Stockage local indisponible :": "Local storage unavailable:",
"Stockage local plein ?": "Local storage full?",
"Suivant": "Next",
"Suivi de résolution": "Resolution follow-up",
"Suivi opérationnel des ambulances — Fortescue Belinga": "Operational ambulance tracking — Fortescue Belinga",
"Superviseur / responsable flotte": "Supervisor / fleet manager",
"Superviseur, HSE, responsable médical…": "Supervisor, HSE, medical lead…",
"Sur la carte": "On the map",
"Synchronisation": "Sync",
"Synchronisation terminée": "Sync complete",
"Synchronisation…": "Syncing…",
"Synchroniser maintenant": "Sync now",
"Synthèse": "Summary",
"Système": "System",
"Sélectionné : faites Copier": "Selected: press Copy",
"Tableau de bord": "Dashboard",
"Technique": "Technical",
"Total": "Total",
"Touchez": "Tap",
"Touchez la carte pour placer le point.": "Tap the map to place the point.",
"Touchez la carte à l’emplacement du lieu, ou utilisez votre position si vous y êtes.": "Tap the map where the place is, or use your position if you are there.",
"Touchez le bouton": "Tap the button",
"Touchez le menu": "Tap the menu",
"Touchez un statut pour le changer.": "Tap a status to change it.",
"Tous": "All",
"Tous les points de cette étape sont cochés": "All items of this step are ticked",
"Tous les sites": "All sites",
"Tous les sites autorisés": "All authorised sites",
"Tous les statuts": "All statuses",
"Tous les types": "All types",
"Tous mes sites": "All my sites",
"Tous statuts de mission": "All mission statuses",
"Tous types d’événement": "All event types",
"Tout": "All",
"Tout est en ordre": "All in order",
"Tout est envoyé.": "Everything has been sent.",
"Toutes": "All",
"Toutes les ambulances": "All ambulances",
"Toutes les tables": "All tables",
"Toutes priorités": "All priorities",
"Tracé indicatif entre les lieux choisis — l’application n’utilise pas de GPS.": "Indicative route between the chosen places — the app does not use GPS.",
"Trafic": "Traffic",
"Trafic :": "Traffic:",
"Traiter": "Handle",
"Traiter la remarque": "Handle the remark",
"Traitée": "Handled",
"Traitée (référentiel corrigé)": "Handled (reference data corrected)",
"Trajet": "Trip",
"Transmission": "Handover",
"Type": "Type",
"Type de contrôle": "Inspection type",
"Tél.": "Tel.",
"Télécharger Excel": "Download Excel",
"Télécharger le PDF": "Download the PDF",
"Téléphone": "Phone",
"Un plein de carburant a été fait": "A fuel fill-up was done",
"Une ambulance exige la catégorie indiquée sur sa fiche (B par défaut) : la mission est refusée si le chauffeur ne l’a pas.": "An ambulance requires the category shown on its record (B by default): the mission is refused if the driver does not hold it.",
"Une justification est alors obligatoire (traçabilité).": "A justification is then required (traceability).",
"Une justification est obligatoire (5 caractères minimum)": "A justification is required (5 characters minimum)",
"Une mission est déjà en cours pour cette ambulance": "A mission is already in progress for this ambulance",
"Une valeur par ligne.": "One value per line.",
"Urgence :": "Emergency:",
"Utilisateur": "User",
"Utilisateur mis à jour": "User updated",
"Utilisateurs": "Users",
"Utilisateurs, référentiels, paramètres et journal d’audit": "Users, reference data, settings and audit log",
"Utiliser ma position actuelle": "Use my current position",
"Valeur invalide": "Invalid value",
"Valide": "Valid",
"Valide jusqu’au": "Valid until",
"Valider": "Approve",
"Valider la revue": "Approve the review",
"Validité :": "Validity:",
"Validité permis": "Licence validity",
"Version des données cartographiques": "Map data version",
"Version serveur": "Server version",
"Vidange": "Oil change",
"Vidanges, réparations, assurances, visites techniques, extincteurs": "Oil changes, repairs, insurance, roadworthiness tests, extinguishers",
"Village": "Village",
"Ville": "Town",
"Visa du destinataire": "Recipient’s signature",
"Visite technique": "Roadworthiness test",
"Vit. moy.*": "Avg. speed*",
"Vitesse moy. (km/h, arrêts inclus)": "Avg. speed (km/h, stops included)",
"Vitesse moyenne (arrêts inclus)": "Average speed (stops included)",
"Vitesse moyenne arrêts inclus (km/h)": "Average speed incl. stops (km/h)",
"Vitesse moyenne inhabituelle": "Unusual average speed",
"Vitesse moyenne max. (km/h)": "Max. average speed (km/h)",
"Vitesse moyenne pour estimer les durées (km/h)": "Average speed to estimate durations (km/h)",
"Vitesse moyenne — arrêts et retards inclus": "Average speed — stops and delays included",
"Voir la fiche": "View the record",
"Voir la fiche ambulance": "View the ambulance record",
"Voir le contrôle": "View the inspection",
"Votre accès Ambu Track a été désactivé. Contactez l’administrateur.": "Your Ambu Track access has been deactivated. Contact the administrator.",
"Votre position (précision": "Your position (accuracy",
"Votre profil est en consultation seule.": "Your profile is view-only.",
"Votre session doit être renouvelée pour envoyer les saisies.": "Your session must be renewed to send entries.",
"Vous ne pouvez pas retirer vos propres droits d’administrateur": "You cannot remove your own administrator rights",
"Véhicule": "Vehicle",
"Véhicule déclaré indisponible.": "Vehicle reported unavailable.",
"Vérifié": "Verified",
"Vérifié le": "Verified on",
"Vérifiée au démarrage de chaque mission.": "Checked at the start of each mission.",
"cette ambulance": "this ambulance",
"il y a": "ago",
"immobilisée": "grounded",
"en attente": "pending",
"départ": "departure",
"dépassée": "overdue",
"planifié": "planned",
"valeur initiale": "initial value",
"valide jusqu’au": "valid until",
"mis à jour le": "updated on",
"réessayez": "try again",
"dont critique": "including critical",
"journée du": "day of",
"mois de": "month of",
"à l’instant": "just now",
"à prévoir": "upcoming",
"à traiter": "to handle",
"ou": "or",
"puis": "then",
"avec le bouton ci-dessous.": "with the button below.",
"pour l’envoyer à vos chefs.": "to send it to your managers.",
"vient d’être téléchargé dans un format que Google Sheets ouvre directement.": "has just been downloaded in a format Google Sheets opens directly.",
"« Ajouter à l’écran d’accueil »": "“Add to Home screen”",
"« Installer Ambu Track »": "“Install Ambu Track”",
"« Installer l’application »": "“Install app”",
"« Sur l’écran d’accueil »": "“Add to Home Screen”",
"« Plein soleil » renforce les contrastes et grossit le texte pour la lecture en extérieur.": "“Bright sun” increases contrast and enlarges text for reading outdoors.",
"(carré avec une flèche vers le haut).": "(square with an up arrow).",
"en haut à droite.": "at the top right.",
"à droite de la barre d’adresse.": "to the right of the address bar.",
"· Réponse :": "· Response:",
"· arrivée estimée vers": "· estimated arrival around",
"· arrivée vers": "· arrival around",
"· comparé à la période précédente": "· compared with the previous period",
"· créé le": "· created on",
"· du": "· from",
"· déclaré": "· reported",
"· fond": "· base map",
"· non vérifié": "· not verified",
"· sans coordonnées": "· no coordinates",
"· version de base": "· base version",
"· échéance": "· due",
"· édité le": "· issued on",
"» ? Les Google Sheets qui l’utilisent n’afficheront plus de données.": "”? Google Sheets using it will no longer show data.",
"» ajoutée (à vérifier par un superviseur)": "” added (to be checked by a supervisor)",
"» existe déjà : il a été choisi": "” already exists: it has been chosen",
"À compléter": "To complete",
"À confirmer à partir des procédures Fortescue et des recommandations du constructeur.": "To be confirmed against Fortescue procedures and manufacturer recommendations.",
"À jour": "Up to date",
"À la date": "On the date",
"À prévoir": "Upcoming",
"À prévoir (moins de": "Upcoming (less than",
"À revoir": "To review",
"À revoir par le superviseur": "To be reviewed by the supervisor",
"À traiter": "To handle",
"À vérifier": "To check",
"À vérifier par le terrain": "To be checked by the field",
"Écart": "Gap",
"Écart (%)": "Gap (%)",
"Écart (km)": "Gap (km)",
"Écart carte signalé au-delà de (%)": "Map gap flagged above (%)",
"Écart compteur − carte :": "Odometer − map gap:",
"Écart important avec l’estimation de la carte": "Large gap with the map estimate",
"Écarts": "Gaps",
"Écarts de kilométrage à examiner": "Mileage gaps to examine",
"Écarts à examiner": "Gaps to examine",
"Écarts à vérifier": "Gaps to check",
"Échéance": "Due date",
"Échéance du": "Due on",
"Échéances": "Due dates",
"Échéances proches ou dépassées (": "Due dates close or overdue (",
"Échéances à surveiller": "Due dates to watch",
"Édité le": "Issued on",
"Émission": "Issue",
"Équipage": "Crew",
"Équipe terrain": "Field team",
"Équipement médical": "Medical equipment",
"Équipements": "Equipment",
"Équipements embarqués": "On-board equipment",
"Équipements par défaut (nouvelle ambulance)": "Default equipment (new ambulance)",
"Établi par": "Prepared by",
"Étape": "Step",
"Étapes du contrôle": "Inspection steps",
"État": "Condition",
"État de la route": "Road condition",
"État de la synchronisation": "Sync status",
"État des ambulances, km courant, échéances": "Ambulance status, current km, due dates",
"États de la route": "Road conditions",
"Évacuation sanitaire": "Medical evacuation",
"Évolution": "Trend",
"Évolution du kilométrage": "Mileage trend",
"Événement": "Event",
"Événement ajouté": "Event added",
"Événements": "Events",
"Événements du trajet": "Trip events",
"— saisie de": "— entry by",
"— vérifiez avant de clôturer.": "— check before closing.",
"⇡ À envoyer": "⇡ To send",
"Contrôle à revoir par le superviseur —": "Inspection to be reviewed by the supervisor —",
"Mot de passe oublié : contactez l’administrateur Ambu Track. La première connexion nécessite le réseau ; ensuite l’application fonctionne hors ligne.": "Forgot your password: contact the Ambu Track administrator. The first sign-in needs the network; after that the app works offline.",
"Transfert inter-sites": "Inter-site transfer",
"Couverture d’activité / garde": "Activity cover / standby",
"Intervention sur accident": "Accident response",
"Ravitaillement / logistique": "Supply / logistics",
"Essai / contrôle technique": "Test / technical check",
"Électrique": "Electrical",
"Équipement de sécurité": "Safety equipment",
"Accrochage / collision": "Collision",
"Sortie de route": "Run-off-road",
"Panne en mission": "Breakdown on mission",
"Crevaison": "Puncture",
"Vol / dégradation": "Theft / vandalism",
"Blessure d’un membre d’équipage": "Crew member injured",
"Animal percuté": "Animal struck",
"Bonne": "Good",
"Dégradée": "Poor",
"Boueuse / glissante": "Muddy / slippery",
"Inondée": "Flooded",
"Impraticable": "Impassable",
"Sec": "Dry",
"Pluie": "Rain",
"Forte pluie / orage": "Heavy rain / storm",
"Brouillard": "Fog",
"Nuit": "Night",
"Fluide": "Light",
"Dense": "Heavy",
"Grumiers / engins": "Log trucks / machinery",
"Bloqué": "Blocked",
"Plein": "Full",
"Réserve": "Reserve",
"Bouteilles O2": "O2 cylinders",
"Défibrillateur (DAE)": "Defibrillator (AED)",
"Aspirateur de mucosités": "Suction unit",
"Brancard principal": "Main stretcher",
"Chaise portoir": "Carry chair",
"Trousse First Aid": "First Aid kit",
"Collier cervical / attelles": "Cervical collar / splints",
"Radio VHF": "VHF radio",
"Triangle et gilets": "Triangle and vests",
"Cric et roue de secours": "Jack and spare wheel",
"Extérieur": "Exterior",
"Mécanique / conduite": "Mechanical / driving",
"Cabine et cellule médicale": "Cab and medical module",
"Matériel médical et sécurité": "Medical and safety equipment",
"Carrosserie et impacts": "Bodywork and impacts",
"Pare-brise et vitres": "Windscreen and windows",
"Rétroviseurs": "Mirrors",
"Pneus et roue de secours": "Tyres and spare wheel",
"Phares, clignotants et feux stop": "Headlights, indicators and brake lights",
"Gyrophares, sirène et avertisseur": "Beacons, siren and horn",
"Démarrage moteur et tableau de bord": "Engine start and dashboard",
"Freinage et frein de stationnement": "Brakes and parking brake",
"Direction et suspension": "Steering and suspension",
"Niveaux et absence de fuite": "Fluid levels and no leaks",
"Batterie et alimentation véhicule": "Battery and vehicle power",
"Climatisation cabine conducteur": "Driver cab air conditioning",
"Propreté cabine conducteur": "Driver cab cleanliness",
"Propreté cellule médicale": "Medical module cleanliness",
"Rangement et fixation du matériel": "Equipment storage and securing",
"Climatisation cellule médicale": "Medical module air conditioning",
"Éclairage et prises électriques": "Lighting and power sockets",
"Portes, serrures et ceintures": "Doors, locks and seat belts",
"Bouteilles O2, pression et fixation": "O2 cylinders, pressure and securing",
"Débitmètres et circuit O2": "Flowmeters and O2 circuit",
"Défibrillateur, batterie et accessoires": "Defibrillator, battery and accessories",
"Brancard, verrouillage et sangles": "Stretcher, locking and straps",
"Trousse First Aid et consommables": "First Aid kit and consumables",
"Extincteur et date de validité": "Fire extinguisher and expiry date",
"Face avant": "Front view",
"Face arrière": "Rear view",
"Profil gauche": "Left side",
"Profil droit": "Right side",
"Cabine conducteur": "Driver cab",
"Cellule médicale": "Medical module",
"Brancard / sangles": "Stretcher / straps",
"Matériel médical / anomalies": "Medical equipment / defects",
"En ligne": "Online",
"Synchronisé": "Synced",
"Langue": "Language",
"Langue / Language": "Language / Langue",
"Français": "Français",
"English": "English",
"Changer de langue": "Change language",
"Afficher l’application en anglais": "Show the app in English",
"Afficher l’application en français": "Show the app in French",
"km au compteur aujourd’hui": "odometer km today",
"km au total": "km in total",
"km au compteur (missions clôturées)": "odometer km (closed missions)",
"km au compteur": "odometer km",
"km ce mois": "km this month",
"km compteur": "odometer km",
"Relevé hebdomadaire": "Weekly reading",
"Plein de carburant": "Fuel fill-up",
"Avant entretien": "Before maintenance",
"Missions de la période": "Missions in the period",
"Anomalies et incidents ouverts": "Open defects and incidents",
"Échéances proches ou dépassées": "Due dates close or overdue",
"Derniers relevés": "Latest readings",
"Remarques terrain": "Field remarks",
"Localités": "Places",
"Rapports transmis": "Reports sent",
"conflits": "conflicts",
"Cocher C = conforme, NC = non conforme, NA = non applicable. Aucun résultat n’est présumé conforme.": "Tick C = compliant, NC = non-compliant, NA = not applicable. No result is assumed compliant.",
"Les comptes sont individuels. Mot de passe provisoire à remettre en main propre ; changement obligatoire à la première connexion. Désactiver un compte révoque immédiatement ses accès aux données.": "Accounts are individual. Temporary password to be handed over in person; change required at first sign-in. Deactivating an account immediately revokes its access to the data.",
"Anomalie basse": "Low-priority defect",
"Anomalie moyenne": "Medium-priority defect",
"Anomalie haute": "High-priority defect",
"Anomalie critique": "Critical-priority defect",
"Incident basse": "Low-priority incident",
"Incident moyenne": "Medium-priority incident",
"Incident haute": "High-priority incident",
"Incident critique": "Critical-priority incident",
"Accident basse": "Low-priority accident",
"Accident moyenne": "Medium-priority accident",
"Accident haute": "High-priority accident",
"Accident critique": "Critical-priority accident",
"en cours": "in progress",
"clôturée": "closed",
"annulée": "cancelled",
"prise de service": "start-of-shift",
"fin de service": "end-of-shift",
"contrôle ponctuel": "spot",
"nouveau": "new",
"résolu": "resolved",
"clôturé": "closed",
"en attente pièce / approbation": "waiting for part / approval",
"journalier": "daily",
"hebdomadaire": "weekly",
"mensuel": "monthly",
"Ambulances disponibles (aujourd'hui)": "Available ambulances (today)",
"Appliquer la saisie de l'appareil": "Apply the device entry",
"Approximation (vol d'oiseau × 1,25,": "Approximation (straight line × 1.25,",
"Aptitude médicale à la conduite : valable jusqu'au": "Medical fitness to drive: valid until",
"Astuce : dans Google Drive, Paramètres → « Convertir les fichiers importés au format de l'éditeur Google Docs » transforme automatiquement le fichier en Google Sheet.": "Tip: in Google Drive, Settings → “Convert uploaded files to Google Docs editor format” automatically turns the file into a Google Sheet.",
"Astuce : touchez d'abord la carte à l'endroit concerné pour joindre la position.": "Tip: first tap the map at the relevant spot to attach the position.",
"Aucun point d'attention": "No point of attention",
"Aucun point d'attention.": "No point of attention.",
"Calcul de l'itinéraire estimé…": "Calculating estimated route…",
"Carte d'identification": "ID card",
"Catégories d'anomalie": "Defect categories",
"Ce compte n'a pas (ou plus) accès à Ambu Track. Contactez l'administrateur.": "This account has no (or no longer) access to Ambu Track. Contact the administrator.",
"Centre d'alertes": "Alert centre",
"Cette mission n'est pas en cours.": "This mission is not in progress.",
"Chaque export est enregistré dans l'historique avec les chiffres transmis.": "Each export is recorded in the history with the figures sent.",
"Choisir l'ambulance": "Choose the ambulance",
"Choisissez la nature de l'événement": "Choose the type of event",
"Choisissez le départ et la destination pour obtenir une estimation d'itinéraire.": "Choose the departure and destination to get a route estimate.",
"Choisissez l'ambulance": "Choose the ambulance",
"Choisissez l'ambulance pour afficher son dernier kilométrage.": "Choose the ambulance to show its latest mileage.",
"Choisissez un mot de passe différent de l'ancien": "Choose a password different from the old one",
"Clôturez-la d'abord": "Close it first",
"Cochez l'attestation de réalisation du contrôle": "Tick the inspection completion statement",
"Comparaison avec l'état précédent": "Comparison with previous condition",
"Consultation : les exports ne sont pas enregistrés dans l'historique.": "View only: exports are not recorded in the history.",
"Contrôle d'origine": "Original inspection",
"Contrôles aujourd'hui": "Inspections today",
"Copiez ces informations maintenant : la clé du lien ne sera plus affichée. Ne la diffusez qu'aux personnes autorisées.": "Copy this information now: the link key will not be shown again. Share it only with authorised people.",
"Créer l'ambulance": "Create the ambulance",
"Dans Chrome ou Edge, cliquez sur l'icône": "In Chrome or Edge, click the icon",
"Date d'expiration / validité": "Expiry / validity date",
"Date d'intervention": "Service date",
"Date d'émission": "Issue date",
"Disponibilité à la date d'édition :": "Availability on the date of issue:",
"Décrivez l'action": "Describe the action",
"Décrivez l'événement": "Describe the event",
"En attente d'envoi": "Waiting to be sent",
"En attente d'envoi (": "Waiting to be sent (",
"Erreur d'envoi": "Send error",
"Erreur ou conflit : ouvrez l'écran Synchronisation": "Error or conflict: open the Sync screen",
"Expiration de session (heures d'inactivité)": "Session expiry (hours of inactivity)",
"Factures, rapports d'intervention, photos": "Invoices, service reports, photos",
"Fiche enregistrée — alerte visible par les responsables dès la synchronisation. Suivez la procédure d'urgence Fortescue.": "Record saved — alert visible to managers as soon as it syncs. Follow the Fortescue emergency procedure.",
"Format : une ligne « ## Groupe » puis une ligne par point. Ajoutez « ! » en début de ligne pour un point critique. Ne changez pas l'ordre des points existants sans prévenir les équipes.": "Format: one “## Group” line then one line per item. Start a line with “!” for a critical item. Do not change the order of existing items without telling the teams.",
"Formation secourisme : valable jusqu'au": "First-aid training: valid until",
"Heure réelle d'arrivée": "Actual arrival time",
"Icône sur l'écran d'accueil, ouverture en plein écran, fonctionnement sans réseau.": "Home-screen icon, full-screen, works without network.",
"Icône sur l'écran d'accueil, plein écran, fonctionne sans réseau.": "Home-screen icon, full screen, works without network.",
"Indiquez la date et l'heure": "Enter the date and time",
"Indiquez le motif d'indisponibilité": "Enter the reason for unavailability",
"Indiquez l'heure réelle d'arrivée": "Enter the actual arrival time",
"Installer l'application": "Install the app",
"Installer l'application sur ce téléphone": "Install the app on this phone",
"Journal d'audit": "Audit log",
"J'ai noté le mot de passe": "I have noted the password",
"J'atteste avoir réalisé ce contrôle et déclaré les observations. Cette attestation ne constitue pas une attribution automatique de responsabilité pour les défauts préexistants.": "I certify that I carried out this inspection and reported my observations. This statement does not automatically assign responsibility for pre-existing defects.",
"Kilométrage d'arrivée (compteur)": "Arrival mileage (odometer)",
"Kilométrage d'arrivée inférieur au départ": "Arrival mileage lower than departure",
"Kilométrage initial (à la mise en service dans l'application)": "Initial mileage (when added to the app)",
"La photo sert à identifier la personne sur le terrain et sur sa carte d'identification": "The photo identifies the person in the field and on their ID card",
"Le journal d'audit se consulte en ligne.": "The audit log is viewed online.",
"Le kilométrage d'arrivée est obligatoire": "Arrival mileage is required",
"Le superviseur est alerté sur le tableau de bord dès la synchronisation. Appliquez la procédure de notification Fortescue : l'application ne remplace pas le canal d'urgence.": "The supervisor is alerted on the dashboard as soon as it syncs. Apply the Fortescue notification procedure: the app does not replace the emergency channel.",
"Les alertes critiques suivent toujours le canal d'urgence Fortescue : l'application ne le remplace pas.": "Critical alerts always follow the Fortescue emergency channel: the app does not replace it.",
"L'ancien document (expiration": "The old document (expiry",
"L'application s'installe comme une application normale : icône sur l'écran d'accueil, ouverture en plein écran et fonctionnement sans réseau.": "The app installs like a normal app: home-screen icon, full-screen opening and works without network.",
"L'expiration est antérieure à l'émission": "The expiry is before the issue date",
"L'heure de démarrage est enregistrée automatiquement": "The start time is recorded automatically",
"L'heure réelle d'arrivée est différente (oubli de clôture)": "The actual arrival time is different (forgot to close)",
"L'identifiant est obligatoire": "The identifier is required",
"L'immatriculation est obligatoire": "The plate number is required",
"L'immobilisation et sa levée sont réservées au superviseur (procédure Fortescue).": "Grounding and releasing are reserved to the supervisor (Fortescue procedure).",
"Moteur d'itinéraire OSRM (OpenStreetMap)": "OSRM routing engine (OpenStreetMap)",
"Motif d'annulation": "Cancellation reason",
"Motif d'indisponibilité": "Reason for unavailability",
"Natures d'incident": "Incident types",
"Note d'approbation de clôture": "Closure approval note",
"Oui, c'est bien le compteur": "Yes, that is the odometer reading",
"Ouvrez le fichier : il s'affiche dans": "Open the file: it appears in",
"Ouvrir le centre d'alertes": "Open the alert centre",
"POINTS D'ATTENTION": "POINTS OF ATTENTION",
"Photo d'identification": "ID photo",
"Photos de l'état du véhicule": "Vehicle condition photos",
"Points d'attention": "Points of attention",
"Position et nom vérifiés avec l'équipe terrain": "Position and name checked with the field team",
"Pour une vidange, l'application propose": "For an oil change, the app suggests",
"Preuve de résolution (photo, bon d'intervention)": "Proof of resolution (photo, work order)",
"Rapport d'activité des ambulances - Projet Belinga": "Ambulance activity report - Belinga Project",
"Rapport d'activité des ambulances · Projet Belinga": "Ambulance activity report · Belinga Project",
"Retour à l'accueil": "Back to home",
"Réseau indisponible — vos saisies restent enregistrées sur l'appareil.": "Network unavailable — your entries remain saved on the device.",
"Réservé au point focal, au superviseur et à l'administrateur.": "Reserved to the focal point, the supervisor and the administrator.",
"Réservé au point focal, au superviseur, à l'administrateur et à la direction.": "Reserved to the focal point, the supervisor, the administrator and management.",
"Réservé au superviseur ou à l'administrateur.": "Reserved to the supervisor or the administrator.",
"Réservé à l'administrateur fonctionnel.": "Reserved to the functional administrator.",
"Saisie de l'appareil": "Device entry",
"Sans date d'expiration": "No expiry date",
"Session expirée ou verrouillée : reconnectez-vous. Vos saisies sont conservées sur l'appareil.": "Session expired or locked: sign in again. Your entries are kept on the device.",
"Site d'affectation": "Assigned site",
"Source de l'estimation :": "Estimate source:",
"Statut de l'équipement enregistré": "Equipment status saved",
"Touchez la carte à l'emplacement du lieu, ou utilisez votre position si vous y êtes.": "Tap the map where the place is, or use your position if you are there.",
"Tous types d'événement": "All event types",
"Tracé indicatif entre les lieux choisis — l'application n'utilise pas de GPS.": "Indicative route between the chosen places — the app does not use GPS.",
"Une ambulance exige la catégorie indiquée sur sa fiche (B par défaut) : la mission est refusée si le chauffeur ne l'a pas.": "An ambulance requires the category shown on its record (B by default): the mission is refused if the driver does not hold it.",
"Utilisateurs, référentiels, paramètres et journal d'audit": "Users, reference data, settings and audit log",
"Valide jusqu'au": "Valid until",
"Votre accès Ambu Track a été désactivé. Contactez l'administrateur.": "Your Ambu Track access has been deactivated. Contact the administrator.",
"Vous ne pouvez pas retirer vos propres droits d'administrateur": "You cannot remove your own administrator rights",
"valide jusqu'au": "valid until",
"à l'instant": "just now",
"pour l'envoyer à vos chefs.": "to send it to your managers.",
"vient d'être téléchargé dans un format que Google Sheets ouvre directement.": "has just been downloaded in a format Google Sheets opens directly.",
"« Ajouter à l'écran d'accueil »": "“Add to Home screen”",
"« Installer l'application »": "“Install app”",
"« Sur l'écran d'accueil »": "“Add to Home Screen”",
"à droite de la barre d'adresse.": "to the right of the address bar.",
"» ? Les Google Sheets qui l'utilisent n'afficheront plus de données.": "”? Google Sheets using it will no longer show data.",
"Écart important avec l'estimation de la carte": "Large gap with the map estimate",
"Mot de passe oublié : contactez l'administrateur Ambu Track. La première connexion nécessite le réseau ; ensuite l'application fonctionne hors ligne.": "Forgot your password: contact the Ambu Track administrator. The first sign-in needs the network; after that the app works offline.",
"Couverture d'activité / garde": "Activity cover / standby",
"Blessure d'un membre d'équipage": "Crew member injured",
"Afficher l'application en anglais": "Show the app in English",
"Afficher l'application en français": "Show the app in French",
"km au compteur aujourd'hui": "odometer km today",
"Cocher C = conforme, NC = non conforme, NA = non applicable. Aucun résultat n'est présumé conforme.": "Tick C = compliant, NC = non-compliant, NA = not applicable. No result is assumed compliant."
};
  var M = [
[
"+{0} km depuis le dernier relevé",
"+{0} km since the last reading"
],
[
"+{0} km depuis le dernier relevé : valeur inhabituelle, vérifiez la saisie.",
"+{0} km since the last reading: unusual value, check the entry."
],
[
"0 / {0} points cochés",
"0 / {0} items ticked"
],
[
"Action en retard ({0}, échéance du {1}) : {2}",
"Overdue action ({0}, due {1}): {2}"
],
[
"Action en retard — {0}",
"Overdue action — {0}"
],
[
"Approximation (vol d’oiseau × 1,25, {0} km/h de moyenne)",
"Approximation (straight line × 1.25, {0} km/h average)"
],
[
"Attention : {0} est indiquée « en maintenance ». Vérifiez avec le point focal avant de partir.",
"Warning: {0} is marked “under maintenance”. Check with the focal point before leaving."
],
[
"Bienvenue {0}. Pour votre sécurité, choisissez votre mot de passe personnel (8 caractères minimum).",
"Welcome {0}. For your security, choose your personal password (8 characters minimum)."
],
[
"Bonjour {0}",
"Hello {0}"
],
[
"Catégorie {0}",
"Category {0}"
],
[
"Clôturer la mission {0}",
"Close mission {0}"
],
[
"Contrôle {0} — {1}",
"Inspection {0} — {1}"
],
[
"Contrôle {0} — {1} : {2}",
"Inspection {0} — {1}: {2}"
],
[
"Contrôle · {0}",
"Inspection · {0}"
],
[
"Contrôle à revoir par le superviseur — {0}",
"Inspection to be reviewed by the supervisor — {0}"
],
[
"Contrôles ({0} NC)",
"Inspections ({0} NC)"
],
[
"Date et heure enregistrées automatiquement · Contrôleur : {0}",
"Date and time recorded automatically · Inspector: {0}"
],
[
"Dernier contrôle : {0} · {1} NC{2}",
"Last inspection: {0} · {1} NC{2}"
],
[
"Dernier kilométrage connu : {0} km{1}",
"Last known mileage: {0} km{1}"
],
[
"Destination « {0} » ajoutée (à vérifier par un superviseur)",
"Destination “{0}” added (to be checked by a supervisor)"
],
[
"Disponibilité à la date d’édition : {0} ambulance(s) disponible(s) sur {1}{2}.",
"Availability on the date of issue: {0} ambulance(s) available out of {1}{2}."
],
[
"Données synchronisées {0}",
"Data synced {0}"
],
[
"Du {0} au {1} · comparé à la période précédente",
"From {0} to {1} · compared with the previous period"
],
[
"Définir un nouveau mot de passe provisoire pour {0} ? Attention : si cette personne utilise le même compte pour d’autres applications Flottemine, son mot de passe y changera aussi.",
"Set a new temporary password for {0}? Warning: if this person uses the same account for other Flottemine apps, their password will change there too."
],
[
"Démarrée le {0}",
"Started on {0}"
],
[
"Démarrée le {0} à {1} km",
"Started on {0} at {1} km"
],
[
"Désactiver le lien « {0} » ? Les Google Sheets qui l’utilisent n’afficheront plus de données.",
"Deactivate the link “{0}”? Google Sheets using it will no longer show data."
],
[
"Expirent dans moins de {0} j",
"Expire in less than {0} d"
],
[
"Expire dans {0} j ({1})",
"Expires in {0} d ({1})"
],
[
"Expiré depuis {0} j ({1})",
"Expired {0} d ago ({1})"
],
[
"Fortescue Belinga · du {0} au {1} · édité le {2} par {3}",
"Fortescue Belinga · from {0} to {1} · issued on {2} by {3}"
],
[
"Hausse de {0} km depuis le dernier relevé. Confirmez-vous {1} km ?",
"Increase of {0} km since the last reading. Do you confirm {1} km?"
],
[
"Heure de clôture corrigée (saisie le {0})",
"Closing time corrected (entered on {0})"
],
[
"Hors ligne · {0} en attente",
"Offline · {0} pending"
],
[
"Kilométrage courant : {0} km.",
"Current mileage: {0} km."
],
[
"Kilométrage courant : {0}{1}",
"Current mileage: {0}{1}"
],
[
"Le kilométrage saisi ({0} km) est inférieur au dernier connu ({1} km). Confirmez-vous ce relevé ?",
"The mileage entered ({0} km) is lower than the last known ({1} km). Do you confirm this reading?"
],
[
"Lien « {0} »",
"Link “{0}”"
],
[
"Mission clôturée : {0} km au compteur",
"Mission closed: {0} km on the odometer"
],
[
"Mission en cours · {0}",
"Mission in progress · {0}"
],
[
"Mission non clôturée — {0}",
"Mission not closed — {0}"
],
[
"Mission {0}",
"Mission {0}"
],
[
"Mission {0} · {1} → {2}",
"Mission {0} · {1} → {2}"
],
[
"Missions ({0} clôturées, {1} ouvertes)",
"Missions ({0} closed, {1} open)"
],
[
"Modifier {0}",
"Edit {0}"
],
[
"Modifier — {0}",
"Edit — {0}"
],
[
"Observation obligatoire pour le NC : {0}",
"Observation required for the NC: {0}"
],
[
"Page {0} / {1}",
"Page {0} / {1}"
],
[
"Passer à « {0} »",
"Switch to “{0}”"
],
[
"Permis de conduire — {0}",
"Driving licence — {0}"
],
[
"Permis de {0} : {1}",
"Licence of {0}: {1}"
],
[
"Permis de {0} non renseigné dans sa fiche",
"Licence of {0} not entered in their record"
],
[
"Permis non renseigné — {0}",
"Licence not entered — {0}"
],
[
"Permis {0} valide jusqu’au {1}",
"Licence {0} valid until {1}"
],
[
"Permis de conduire n° {0}",
"Driving licence no. {0}"
],
[
"Point non coché : {0}",
"Item not ticked: {0}"
],
[
"Pour une vidange, l’application propose {0} km / {1} jours (paramètres de l’administrateur, à confirmer selon le constructeur et Fortescue).",
"For an oil change, the app suggests {0} km / {1} days (administrator settings, to be confirmed with the manufacturer and Fortescue)."
],
[
"Prévu le {0}",
"Planned for {0}"
],
[
"Rappel des documents {0} jours avant expiration · vidange tous les {1} km ou {2} jours (paramétrable).",
"Document reminder {0} days before expiry · oil change every {1} km or {2} days (configurable)."
],
[
"Rapport {0} d’activité des ambulances",
"{0} ambulance activity report"
],
[
"Relevé enregistré : {0} km",
"Reading saved: {0} km"
],
[
"Remarques terrain ({0} ouvertes)",
"Field remarks ({0} open)"
],
[
"Renouveler : {0}",
"Renew: {0}"
],
[
"Référentiel : {0} du {1} · fond {2}",
"Reference data: {0} of {1} · base map {2}"
],
[
"Site : {0} · {1}",
"Site: {0} · {1}"
],
[
"Une mission est déjà en cours pour {0} (démarrée le {1}).",
"A mission is already in progress for {0} (started on {1})."
],
[
"Valide jusqu’au {0}",
"Valid until {0}"
],
[
"Validité : {0}",
"Validity: {0}"
],
[
"Version {0}",
"Version {0}"
],
[
"Votre position (précision {0} m)",
"Your position (accuracy {0} m)"
],
[
"Vérifié le {0}",
"Verified on {0}"
],
[
"avant le {0}",
"before {0}"
],
[
"dans {0} km (à {1} km)",
"in {0} km (at {1} km)"
],
[
"date dépassée de {0} j",
"date overdue by {0} d"
],
[
"départ {0} km",
"departure {0} km"
],
[
"dépassé de {0} km",
"overdue by {0} km"
],
[
"dépassée de {0} km",
"overdue by {0} km"
],
[
"il y a {0} min",
"{0} min ago"
],
[
"il y a {0} h {1}",
"{0} h {1} ago"
],
[
"il y a {0} j",
"{0} d ago"
],
[
"depuis {0} min",
"for {0} min"
],
[
"depuis {0} h {1}",
"for {0} h {1}"
],
[
"depuis {0} j",
"for {0} d"
],
[
"ligne {0}",
"line {0}"
],
[
"ligne {0} ({1} existe déjà)",
"line {0} ({1} already exists)"
],
[
"semaine du {0} au {1}",
"week of {0} to {1}"
],
[
"{0} conflit(s) de modification à arbitrer",
"{0} edit conflict(s) to resolve"
],
[
"{0} en attente",
"{0} pending"
],
[
"{0} est immobilisée : démarrage interdit tant que le superviseur n’a pas levé l’immobilisation.",
"{0} is grounded: departure not allowed until the supervisor releases it."
],
[
"{0} fiche(s) · photo d’identification, permis et aptitudes",
"{0} record(s) · ID photo, licence and fitness"
],
[
"{0} immobilisée",
"{0} grounded"
],
[
"{0} incident(s) ou accident(s) déclaré(s) : voir le détail ci-dessous.",
"{0} incident(s) or accident(s) reported: see details below."
],
[
"{0} mission(s) démarrée(s), dont {1} clôturée(s), pour {2} km au compteur et {3} h de mission (kilomètres : {4} par rapport à la période précédente).",
"{0} mission(s) started, including {1} closed, for {2} odometer km and {3} mission hours (kilometres: {4} versus the previous period)."
],
[
"{0} non enregistrée — {1}",
"{0} not recorded — {1}"
],
[
"{0} n’a pas la catégorie {1} exigée pour {2}",
"{0} does not hold category {1} required for {2}"
],
[
"{0} relevé(s) kilométrique(s){1}.",
"{0} mileage reading(s){1}."
],
[
"{0} saisie(s) ne sont pas encore envoyées. Elles resteront sur cet appareil et partiront à votre prochaine connexion. Se déconnecter ?",
"{0} entry(ies) not sent yet. They will stay on this device and be sent at your next sign-in. Sign out?"
],
[
"{0} saisie(s) non synchronisée(s) à traiter",
"{0} unsynced entry(ies) to handle"
],
[
"{0} véhicule(s)",
"{0} vehicle(s)"
],
[
"{0}. Estimation seulement : la distance réelle est celle du compteur.",
"{0}. Estimate only: the actual distance is the odometer reading."
],
[
"{0} à traiter",
"{0} to handle"
],
[
"« {0} » existe déjà : il a été choisi",
"“{0}” already exists: it has been chosen"
],
[
"À prévoir (moins de {0} km ou {1} j)",
"Upcoming (less than {0} km or {1} d)"
],
[
"Écart compteur − carte : {0}{1} km ({2}{3} %)",
"Odometer − map gap: {0}{1} km ({2}{3} %)"
],
[
"Échéance du {0} : {1}",
"Due on {0}: {1}"
],
[
"Édité le {0}",
"Issued on {0}"
],
[
"Étape {0} / {1} · {2} / {3} points cochés",
"Step {0} / {1} · {2} / {3} items ticked"
],
[
"{0} / {1} points cochés",
"{0} / {1} items ticked"
],
[
"{0} ambulance(s) importée(s).",
"{0} ambulance(s) imported."
],
[
"{0} anomalie(s) signalée(s) et {1} point(s) non conforme(s) relevé(s).",
"{0} defect(s) reported and {1} non-compliant item(s) found."
],
[
"{0} autre(s) alerte(s)",
"{0} other alert(s)"
],
[
"{0} dossier(s) encore ouvert(s)",
"{0} case(s) still open"
],
[
"Tél. {0}",
"Tel. {0}"
],
[
"(mis à jour le {0})",
"(updated on {0})"
],
[
"Kilométrage initial, {0}",
"Initial mileage, {0}"
],
[
"Évolution — {0}",
"Trend — {0}"
],
[
"Choisissez le chauffeur pour vérifier son permis (catégorie exigée : {0}).",
"Choose the driver to check their licence (required category: {0})."
],
[
"Vidange dans {0} km (à {1} km)",
"Oil change in {0} km (at {1} km)"
],
[
"{0} dans {1} km (à {2} km)",
"{0} in {1} km (at {2} km)"
],
[
"Vidange dépassée de {0} km",
"Oil change overdue by {0} km"
],
[
"dernière le {0} à {1} km",
"last on {0} at {1} km"
],
[
"dernière le {0}",
"last on {0}"
],
[
"Seuils : vidange tous les {0} km ou {1} jours ; pour les autres entretiens, indiquez le « prochain rappel » lors de la saisie. Réglages dans Administration → Paramètres.",
"Thresholds: oil change every {0} km or {1} days; for other maintenance, enter the “next reminder” when recording. Settings in Administration → Settings."
],
[
"du {0} au {1}",
"from {0} to {1}"
],
[
"calculés à partir des données enregistrées (données synchronisées {0})",
"calculated from recorded data (data synced {0})"
],
[
"{0} anomalie(s) signalée(s) et {1} dossier(s) résolu(s) ; {2} dossier(s) encore ouvert(s).",
"{0} defect(s) reported and {1} case(s) resolved; {2} case(s) still open."
],
[
"expire dans {0} j ({1})",
"expires in {0} d ({1})"
],
[
"expiré depuis {0} j ({1})",
"expired {0} d ago ({1})"
],
[
"Données synchronisées {0}",
"Data synced {0}"
],
[
"données synchronisées {0}",
"data synced {0}"
],
[
"{0} ouvert",
"{0} open"
],
[
"{0} ouverts",
"{0} open"
],
[
"Voir {0}",
"See {0}"
],
[
"{0} information(s)",
"{0} information item(s)"
],
[
"{0} autre(s) alerte(s) et {1} information(s)",
"{0} other alert(s) and {1} information item(s)"
],
[
"Mission {0} · {1} → {2}",
"Mission {0} · {1} → {2}"
],
[
"Contrôle {0} — {1} : {2}",
"Inspection {0} — {1}: {2}"
],
[
"Permis de {0} : {1}",
"Licence of {0}: {1}"
],
[
"Anomalie {0} ({1}) : {2}",
"Defect {0} ({1}): {2}"
],
[
"Incident {0} ({1}) : {2}",
"Incident {0} ({1}): {2}"
],
[
"Accident {0} ({1}) : {2}",
"Accident {0} ({1}): {2}"
],
[
"arrivée estimée vers {0}",
"estimated arrival around {0}"
],
[
"arrivée vers {0}",
"arrival around {0}"
],
[
"journée du {0}",
"day of {0}"
],
[
"Journée du {0}",
"Day of {0}"
],
[
"semaine du {0} au {1}",
"week of {0} to {1}"
],
[
"Semaine du {0} au {1}",
"Week of {0} to {1}"
],
[
"mois de {0}",
"month of {0}"
],
[
"Mois de {0}",
"Month of {0}"
],
[
"Par {0}",
"By {0}"
],
[
"Destinataires : {0}",
"Recipients: {0}"
],
[
"Ambu Track - {0} - {1}",
"Ambu Track - {0} - {1}"
],
[
"{0} - {1}",
"{0} - {1}"
],
[
"Rapport {0} d'activité des ambulances",
"{0} ambulance activity report"
],
[
"Rapport d'activité des ambulances - Projet Belinga",
"Ambulance activity report - Belinga Project"
],
[
"Site : {0}",
"Site: {0}"
],
[
"Ambulance : {0}",
"Ambulance: {0}"
]
];
  var MOIS = { janvier: 'January', 'février': 'February', mars: 'March', avril: 'April', mai: 'May', juin: 'June', juillet: 'July',
    'août': 'August', septembre: 'September', octobre: 'October', novembre: 'November', 'décembre': 'December',
    lundi: 'Monday', mardi: 'Tuesday', mercredi: 'Wednesday', jeudi: 'Thursday', vendredi: 'Friday', samedi: 'Saturday', dimanche: 'Sunday' };
  var reMois = /(^|[^A-Za-zÀ-ÿ])(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)(?![A-Za-zÀ-ÿ])/gi;
  var echap = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
  var RX = M.map(function (p) {
    var morceaux = p[0].split(/\{(\d+)\}/), src = '^', ordre = [];
    for (var i = 0; i < morceaux.length; i++) {
      if (i % 2) { src += '(.*?)'; ordre.push(+morceaux[i]); } else src += echap(morceaux[i]);
    }
    return { re: new RegExp(src + '$'), en: p[1], ordre: ordre };
  });
  var aDes = Object.prototype.hasOwnProperty;
  function valeur(v) {
    var r = brut(v);
    if (r !== null) return r;
    return v.replace(reMois, function (_, a, m) { var e = MOIS[m.toLowerCase()]; return a + (e || m); });
  }
  function brut(s) {
    if (aDes.call(D, s)) return D[s];
    var n = /^(\d+)\. (.+)$/.exec(s);                     // titres numérotés « 2. Synthèse »
    if (n) { var r0 = brut(n[2]); return r0 === null ? null : n[1] + '. ' + r0; }
    for (var k = 0; k < RX.length; k++) {
      var m = RX[k].re.exec(s);
      if (m) {
        var vals = {};
        for (var i = 0; i < RX[k].ordre.length; i++) vals[RX[k].ordre[i]] = valeur(m[i + 1]);
        return RX[k].en.replace(/\{(\d+)\}/g, function (_, x) { return vals[x] !== undefined ? vals[x] : ''; });
      }
    }
    var c = /^(.+?) \((\d+)\)$/.exec(s);                   // compteurs « Clôturées (3) »
    if (c) { var r1 = brut(c[1]); if (r1 !== null) return r1 + ' (' + c[2] + ')'; }
    var sep = [' · ', ' — ', ' ; '];
    for (var q = 0; q < sep.length; q++) {                      // morceaux séparés « A · B · C »
      if (s.indexOf(sep[q]) > 0) {
        var parts = s.split(sep[q]), chg = false;
        for (var z = 0; z < parts.length; z++) { var rz = parts[z] ? brut(parts[z]) : null; if (rz !== null) { parts[z] = rz; chg = true; } }
        if (chg) return parts.join(sep[q]);
      }
    }
    var lead = /^· (.+)$/.exec(s);
    if (lead) { var rl = brut(lead[1]); if (rl !== null) return '· ' + rl; }
    var dp = /^(.+?) : (.+)$/.exec(s);                          // « Libellé : valeur »
    if (dp) { var a1 = brut(dp[1]), b1 = brut(dp[2]); if (a1 !== null || b1 !== null) return (a1 === null ? dp[1] : a1) + ': ' + (b1 === null ? dp[2] : b1); }
    return null;
  }
  function tr(s) {
    if (typeof s !== 'string' || !/[A-Za-zÀ-ÿ]/.test(s)) return null;
    var t = s.replace(/[\s  ]+/g, ' ').trim();
    if (!t) return null;
    var r = brut(t);
    if (r === null) return null;
    if (/^[A-ZÀ-Ý]/.test(t) && /^[a-z]/.test(r)) r = r.charAt(0).toUpperCase() + r.slice(1);   // majuscule de début conservée
    var avant = /^[\s ]*/.exec(s)[0], apres = /[\s ]*$/.exec(s)[0];
    return (avant ? ' ' : '') + r + (apres ? ' ' : '');
  }
  window.t = function (s) { var r = tr(s); return r === null ? s : r.trim(); };

  var ATTR = ['placeholder', 'title', 'aria-label', 'alt'];
  function noeud(n) {
    if (n.nodeType === 3) {
      var p = n.parentNode;
      if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE' || p.nodeName === 'TEXTAREA') return;
      if (p.closest && p.closest('[data-notr]')) return;
      var r = tr(n.nodeValue);
      if (r !== null && r !== n.nodeValue) n.nodeValue = r;
      return;
    }
    if (n.nodeType !== 1 || n.nodeName === 'SCRIPT' || n.nodeName === 'STYLE' || n.hasAttribute('data-notr')) return;
    attributs(n);
    for (var c = n.firstChild; c; c = c.nextSibling) noeud(c);
  }
  function attributs(el) {
    for (var i = 0; i < ATTR.length; i++) {
      var v = el.getAttribute(ATTR[i]);
      if (v) { var r = tr(v); if (r !== null && r.trim() !== v) el.setAttribute(ATTR[i], r.trim()); }
    }
  }
  new MutationObserver(function (liste) {
    for (var i = 0; i < liste.length; i++) {
      var m = liste[i];
      if (m.type === 'childList') { for (var j = 0; j < m.addedNodes.length; j++) noeud(m.addedNodes[j]); }
      else if (m.type === 'characterData') noeud(m.target);
      else if (m.type === 'attributes' && m.target.nodeType === 1) attributs(m.target);
    }
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTR });
  if (document.readyState !== 'loading') noeud(document.documentElement);
  else document.addEventListener('DOMContentLoaded', function () { noeud(document.documentElement); });

  // Exports Excel : en-têtes, libellés et noms d'onglets traduits
  window.ambuTraduireXLSX = function (X) {
    if (!X || !X.utils || X.utils.__ambuTr) return;
    var u = X.utils, aoa = u.aoa_to_sheet, js = u.json_to_sheet, ajout = u.book_append_sheet;
    var c = function (v) { return typeof v === 'string' ? window.t(v) : v; };
    u.aoa_to_sheet = function (lignes, o) { return aoa.call(u, lignes.map(function (l) { return Array.isArray(l) ? l.map(c) : l; }), o); };
    u.json_to_sheet = function (lignes, o) {
      return js.call(u, lignes.map(function (x) { var y = {}; Object.keys(x).forEach(function (k) { y[window.t(k)] = c(x[k]); }); return y; }), o);
    };
    u.book_append_sheet = function (wb, ws, nom) { return ajout.call(u, wb, ws, nom ? window.t(nom).slice(0, 31) : nom); };
    u.__ambuTr = true;
  };
})();
