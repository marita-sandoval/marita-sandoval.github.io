// Système de traduction multilingue
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',

    // Hero section
    'hero.title': 'Maria Sandoval',
    'hero.tagline': "I'm a Real Estate Student",
    'hero.cta': 'Contact me on WhatsApp',
    'hero.cv': 'Download my CV',

    // About section
    'about.title': 'About',
    'about.subtitle': 'Administrative and sales professional specializing in Real Estate',
    'about.description': 'Detail-oriented, organized and proactive, with hands-on experience in real estate administration and remote sales for U.S.-based companies.',
    'about.firstLang': 'First language:',
    'about.firstLang.value': 'Spanish (native)',
    'about.secondLang': 'Second language:',
    'about.secondLang.value': 'English (C1)',
    'about.thirdLang': 'Third language:',
    'about.thirdLang.value': 'German (B2)',
    'about.city': 'City:',
    'about.city.value': 'Tigre, Buenos Aires, Argentina',
    'about.degree': 'Studies:',
    'about.degree.value': 'Real Estate Brokerage & Property Management, UAI (2026 - 2028)',
    'about.email': 'Email:',
    'about.phone': 'Phone:',
    'about.seeking': 'I am studying to become a Public Auctioneer, Real Estate Broker and Condominium Administrator at UAI (2026 - 2028). After an internship at a real estate agency in Buenos Aires, remote sales for U.S. clients, and several years of account management and invoicing, I am looking to join a real estate agency or a condominium management company to apply what I am studying.',

    // Skills section
    'skills.title': 'Skills',
    'skills.subtitle': 'Acquired through professional experience and studies.',
    'skills.realestate': 'Real estate administration',
    'skills.sales': 'Sales & deal closing',
    'skills.accounts': 'Account management & invoicing',
    'skills.communication': 'Communication & customer service',
    'skills.calendar': 'Calendar management',
    'skills.ai': 'AI tools : ChatGPT, Claude, Mammouth AI',
    'skills.virtual': 'Remote work tools : Slack, Quo',
    'skills.office': 'Microsoft Office, Google Workspace, Notion',

    // Resume section
    'resume.title': 'Resume',
    'resume.subtitle': 'Qualifications and experiences',
    'resume.diplomas': 'Education and certificates',
    'resume.experience': 'Professional Experience',
    'resume.uai.title': 'Public Auctioneer, Real Estate Broker & Condominium Administrator',
    'resume.uai.period': '2026 - 2028',
    'resume.uai.school': 'Universidad Abierta Interamericana (UAI), Argentina',
    'resume.uai.description': 'Degree in Real Estate Brokerage, Auctioneering and Property Management (in progress).',
    'resume.uq.title': 'Introduction to Social Psychology',
    'resume.uq.period': '2023 - 2024',
    'resume.uq.school': 'The University of Queensland - Online course',
    'resume.harvard.title': 'Fundamentals of Neuroscience',
    'resume.harvard.period': '2021 - 2023',
    'resume.harvard.school': 'Harvard University - Online course',
    'resume.ib.title': 'International Baccalaureate (IB) Program',
    'resume.ib.period': '2010 - 2024',
    'resume.ib.school': 'German School of Samborondón, Ecuador',
    'resume.ib.description': 'Primary and secondary education.',
    'resume.realtor.title': 'Independent Realtor',
    'resume.realtor.period': 'Present',
    'resume.realtor.location': 'Self-employed - Nordelta, Buenos Aires, Argentina',
    'resume.realtor.description': "I'm currently working as an independent realtor, managing my own clients. I also administer some properties in Nordelta.",
    'resume.ccs.title': 'Sales Closer & Administrative Assistant (Internship)',
    'resume.ccs.period': 'June 2026 - October 2026',
    'resume.ccs.location': 'CCS Cleaning LLC - Remote (California, USA)',
    'resume.ccs.description': '<li>Closed sales remotely for a U.S.-based cleaning services company, guiding clients from the first inquiry through closing.</li><li>Handled weekend administrative operations, including invoicing, documentation and record keeping.</li><li>Provided customer service before and after the sale.</li><li>Worked independently in a fully remote, English-speaking environment.</li>',
    'resume.libertador.title': 'Administrative Assistant Intern',
    'resume.libertador.period': 'December 2025 - May 2026',
    'resume.libertador.location': 'Administración Libertador (real estate agency) - Buenos Aires, Argentina',
    'resume.libertador.description': '<li>Managed calendars, correspondence and day-to-day administrative tasks for a real estate agency.</li><li>Organized and maintained property documentation and client records, ensuring accuracy and completeness.</li><li>Handled client inquiries by phone and email, and coordinated next steps.</li><li>Supported the property sales process and the marketing of active listings.</li><li>Assisted with sales administration and B2B processes.</li>',
    'resume.calvanase.title': 'Virtual Assistant',
    'resume.calvanase.period': 'January 2021 - January 2024',
    'resume.calvanase.location': 'Calvanase S.A. (architecture studio) - Remote (Guayas, Ecuador)',
    'resume.calvanase.description': '<li>Managed client accounts for the studio, handling ongoing communication and relationship follow-up.</li><li>Oversaw invoicing and billing documentation, ensuring accuracy across client accounts.</li><li>Managed calendars, emails and daily task coordination.</li><li>Handled data entry, record keeping and general administrative support.</li><li>Provided accounting and marketing support, plus call handling and client communication.</li>',

    // Contact section
    'contact.title': 'Contact',
    'contact.location': 'Location:',
    'contact.location.value': 'Tigre, Buenos Aires, Argentina',
    'contact.email': 'Email:',
    'contact.call': 'Call:',
  },
  de: {
    // Navigation
    'nav.home': 'Start',
    'nav.about': 'Über mich',
    'nav.skills': 'Kenntnisse',
    'nav.resume': 'Lebenslauf',
    'nav.contact': 'Kontakt',

    // Hero section
    'hero.title': 'Maria Sandoval',
    'hero.tagline': 'Ich bin Immobilienstudentin',
    'hero.cta': 'Kontakt per WhatsApp',
    'hero.cv': 'Lebenslauf herunterladen',

    // About section
    'about.title': 'Über mich',
    'about.subtitle': 'Verwaltungs- und Vertriebsfachkraft mit Schwerpunkt Immobilien',
    'about.description': 'Sorgfältig, organisiert und proaktiv, mit praktischer Erfahrung in der Immobilienverwaltung und im Remote-Vertrieb für US-amerikanische Unternehmen.',
    'about.firstLang': 'Erste Sprache:',
    'about.firstLang.value': 'Spanisch (Muttersprache)',
    'about.secondLang': 'Zweite Sprache:',
    'about.secondLang.value': 'Englisch (C1)',
    'about.thirdLang': 'Dritte Sprache:',
    'about.thirdLang.value': 'Deutsch (B2)',
    'about.city': 'Wohnort:',
    'about.city.value': 'Tigre, Buenos Aires, Argentinien',
    'about.degree': 'Studium:',
    'about.degree.value': 'Immobilienvermittlung und -verwaltung, UAI (2026 - 2028)',
    'about.email': 'E-Mail:',
    'about.phone': 'Telefon:',
    'about.seeking': 'Ich studiere an der UAI (2026 - 2028) den Studiengang zur öffentlichen Auktionatorin (Martillero Público), Immobilienmaklerin und Verwalterin von Eigentümergemeinschaften. Nach einem Praktikum bei einer Immobilienagentur in Buenos Aires, Remote-Vertrieb für US-amerikanische Kunden und mehreren Jahren Kundenbetreuung und Rechnungsstellung möchte ich in einer Immobilienagentur oder einer Hausverwaltung arbeiten, um das Gelernte in die Praxis umzusetzen.',

    // Skills section
    'skills.title': 'Kenntnisse',
    'skills.subtitle': 'Erworben durch Berufserfahrung und Studium.',
    'skills.realestate': 'Immobilienverwaltung',
    'skills.sales': 'Vertrieb und Verkaufsabschluss',
    'skills.accounts': 'Kundenbetreuung und Rechnungsstellung',
    'skills.communication': 'Kommunikation und Kundenservice',
    'skills.calendar': 'Terminverwaltung',
    'skills.ai': 'KI-Tools : ChatGPT, Claude, Mammouth AI',
    'skills.virtual': 'Tools für Remote-Arbeit : Slack, Quo',
    'skills.office': 'Microsoft Office, Google Workspace, Notion',

    // Resume section
    'resume.title': 'Lebenslauf',
    'resume.subtitle': 'Qualifikationen und Erfahrungen',
    'resume.diplomas': 'Ausbildung und Zertifikate',
    'resume.experience': 'Berufserfahrung',
    'resume.uai.title': 'Öffentliche Auktionatorin, Immobilienmaklerin und Verwalterin von Eigentümergemeinschaften',
    'resume.uai.period': '2026 - 2028',
    'resume.uai.school': 'Universidad Abierta Interamericana (UAI), Argentinien',
    'resume.uai.description': 'Studiengang Immobilienvermittlung, Auktionswesen und Immobilienverwaltung (laufend).',
    'resume.uq.title': 'Einführung in die Sozialpsychologie',
    'resume.uq.period': '2023 - 2024',
    'resume.uq.school': 'The University of Queensland - Online-Kurs',
    'resume.harvard.title': 'Grundlagen der Neurowissenschaften',
    'resume.harvard.period': '2021 - 2023',
    'resume.harvard.school': 'Harvard University - Online-Kurs',
    'resume.ib.title': 'International-Baccalaureate-Programm (IB)',
    'resume.ib.period': '2010 - 2024',
    'resume.ib.school': 'Deutsche Schule Samborondón, Ecuador',
    'resume.ib.description': 'Grund- und Sekundarschule.',
    'resume.realtor.title': 'Selbstständige Immobilienmaklerin',
    'resume.realtor.period': 'Aktuell',
    'resume.realtor.location': 'Selbstständig - Nordelta, Buenos Aires, Argentinien',
    'resume.realtor.description': 'Derzeit arbeite ich als selbstständige Immobilienmaklerin und betreue meine eigenen Kunden. Ich verwalte einige Immobilien in Nordelta.',
    'resume.ccs.title': 'Sales Closer und Verwaltungsassistentin (Praktikum)',
    'resume.ccs.period': 'Juni 2026 - Oktober 2026',
    'resume.ccs.location': 'CCS Cleaning LLC - Remote (Kalifornien, USA)',
    'resume.ccs.description': '<li>Verkaufsabschlüsse im Remote-Vertrieb für ein US-amerikanisches Reinigungsunternehmen, mit Begleitung der Kunden von der ersten Anfrage bis zum Abschluss.</li><li>Übernahme der administrativen Aufgaben am Wochenende, einschließlich Rechnungsstellung, Dokumentation und Aktenführung.</li><li>Kundenservice vor und nach dem Verkauf.</li><li>Selbstständiges Arbeiten in einem vollständig ortsunabhängigen, englischsprachigen Umfeld.</li>',
    'resume.libertador.title': 'Praktikantin in der Verwaltungsassistenz',
    'resume.libertador.period': 'Dezember 2025 - Mai 2026',
    'resume.libertador.location': 'Administración Libertador (Immobilienagentur) - Buenos Aires, Argentinien',
    'resume.libertador.description': '<li>Verwaltung von Terminkalendern, Korrespondenz und täglichen administrativen Aufgaben einer Immobilienagentur.</li><li>Organisation und Pflege von Objektunterlagen und Kundenakten mit Blick auf Genauigkeit und Vollständigkeit.</li><li>Bearbeitung von Kundenanfragen per Telefon und E-Mail sowie Koordination der nächsten Schritte.</li><li>Unterstützung des Immobilienverkaufs und der Vermarktung aktueller Angebote.</li><li>Mitarbeit in der Vertriebsadministration und bei B2B-Prozessen.</li>',
    'resume.calvanase.title': 'Virtuelle Assistentin',
    'resume.calvanase.period': 'Januar 2021 - Januar 2024',
    'resume.calvanase.location': 'Calvanase S.A. (Architekturbüro) - Remote (Guayas, Ecuador)',
    'resume.calvanase.description': '<li>Betreuung der Kundenkonten des Büros mit laufender Kommunikation und Beziehungspflege.</li><li>Verantwortung für Rechnungsstellung und Abrechnungsunterlagen mit Blick auf die Richtigkeit aller Kundenkonten.</li><li>Verwaltung von Kalendern und E-Mails sowie Koordination der täglichen Aufgaben.</li><li>Datenerfassung, Aktenführung und allgemeine administrative Unterstützung.</li><li>Unterstützung in Buchhaltung und Marketing sowie Telefonannahme und Kundenkommunikation.</li>',

    // Contact section
    'contact.title': 'Kontakt',
    'contact.location': 'Standort:',
    'contact.location.value': 'Tigre, Buenos Aires, Argentinien',
    'contact.email': 'E-Mail:',
    'contact.call': 'Telefon:',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.skills': 'Habilidades',
    'nav.resume': 'Currículum',
    'nav.contact': 'Contacto',

    // Hero section
    'hero.title': 'Maria Sandoval',
    'hero.tagline': 'Soy estudiante de Corretaje Inmobiliario',
    'hero.cta': 'Contactarme por WhatsApp',
    'hero.cv': 'Descargar mi CV',

    // About section
    'about.title': 'Acerca de',
    'about.subtitle': 'Profesional administrativa y de ventas especializada en el sector inmobiliario',
    'about.description': 'Detallista, organizada y proactiva, con experiencia práctica en administración inmobiliaria y en ventas remotas para empresas de Estados Unidos.',
    'about.firstLang': 'Primera lengua:',
    'about.firstLang.value': 'Español (nativo)',
    'about.secondLang': 'Segunda lengua:',
    'about.secondLang.value': 'Inglés (C1)',
    'about.thirdLang': 'Tercera lengua:',
    'about.thirdLang.value': 'Alemán (B2)',
    'about.city': 'Ciudad:',
    'about.city.value': 'Tigre, Buenos Aires, Argentina',
    'about.degree': 'Estudios:',
    'about.degree.value': 'Corretaje y Administración Inmobiliaria, UAI (2026 - 2028)',
    'about.email': 'Email:',
    'about.phone': 'Teléfono:',
    'about.seeking': 'Estudio la carrera de Martillero Público, Corredor Inmobiliario y Administrador de Consorcios en la UAI (2026 - 2028). Tras una pasantía en una inmobiliaria de Buenos Aires, ventas remotas para clientes de Estados Unidos y varios años de gestión de cuentas y facturación, busco incorporarme a una inmobiliaria o a una administración de consorcios para aplicar lo que estoy estudiando.',

    // Skills section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Adquiridas a través de mi experiencia profesional y mis estudios.',
    'skills.realestate': 'Administración inmobiliaria',
    'skills.sales': 'Ventas y cierre de operaciones',
    'skills.accounts': 'Gestión de cuentas y facturación',
    'skills.communication': 'Comunicación y atención al cliente',
    'skills.calendar': 'Gestión de agenda',
    'skills.ai': 'Herramientas de IA : ChatGPT, Claude, Mammouth AI',
    'skills.virtual': 'Herramientas de trabajo remoto : Slack, Quo',
    'skills.office': 'Microsoft Office, Google Workspace, Notion',

    // Resume section
    'resume.title': 'Currículum',
    'resume.subtitle': 'Formación y experiencia',
    'resume.diplomas': 'Formación y certificados',
    'resume.experience': 'Experiencia Profesional',
    'resume.uai.title': 'Martillero Público, Corredor Inmobiliario y Administrador de Consorcios',
    'resume.uai.period': '2026 - 2028',
    'resume.uai.school': 'Universidad Abierta Interamericana (UAI), Argentina',
    'resume.uai.description': 'Carrera de corretaje inmobiliario, martillero público y administración de propiedades (en curso).',
    'resume.uq.title': 'Introducción a la Psicología Social',
    'resume.uq.period': '2023 - 2024',
    'resume.uq.school': 'The University of Queensland - Curso en línea',
    'resume.harvard.title': 'Fundamentos de Neurociencia',
    'resume.harvard.period': '2021 - 2023',
    'resume.harvard.school': 'Harvard University - Curso en línea',
    'resume.ib.title': 'Programa del Bachillerato Internacional (IB)',
    'resume.ib.period': '2010 - 2024',
    'resume.ib.school': 'Colegio Alemán de Samborondón, Ecuador',
    'resume.ib.description': 'Educación primaria y secundaria.',
    'resume.realtor.title': 'Agente inmobiliaria independiente',
    'resume.realtor.period': 'Actualidad',
    'resume.realtor.location': 'Independiente - Nordelta, Buenos Aires, Argentina',
    'resume.realtor.description': 'Actualmente trabajo como agente inmobiliaria independiente, gestionando mis propios clientes. Administro algunas propiedades en Nordelta.',
    'resume.ccs.title': 'Closer de ventas y asistente administrativa (pasantía)',
    'resume.ccs.period': 'Junio 2026 - Octubre 2026',
    'resume.ccs.location': 'CCS Cleaning LLC - Remoto (California, EE. UU.)',
    'resume.ccs.description': '<li>Cierre de ventas de forma remota para una empresa estadounidense de servicios de limpieza, acompañando a los clientes desde la primera consulta hasta el cierre.</li><li>Gestión de las tareas administrativas de fin de semana: facturación, documentación y registro.</li><li>Atención al cliente antes y después de la venta.</li><li>Trabajo autónomo en un entorno totalmente remoto y en inglés.</li>',
    'resume.libertador.title': 'Pasante de asistente administrativa',
    'resume.libertador.period': 'Diciembre 2025 - Mayo 2026',
    'resume.libertador.location': 'Administración Libertador (inmobiliaria) - Buenos Aires, Argentina',
    'resume.libertador.description': '<li>Gestión de agendas, correspondencia y tareas administrativas diarias de una inmobiliaria.</li><li>Organización y mantenimiento de la documentación de las propiedades y de los registros de clientes, con precisión e integridad.</li><li>Atención de consultas de clientes por teléfono y correo electrónico, y coordinación de los pasos siguientes.</li><li>Apoyo al proceso de venta de propiedades y a la comercialización de las publicaciones activas.</li><li>Asistencia en la administración de ventas y en procesos B2B.</li>',
    'resume.calvanase.title': 'Asistente virtual',
    'resume.calvanase.period': 'Enero 2021 - Enero 2024',
    'resume.calvanase.location': 'Calvanase S.A. (estudio de arquitectura) - Remoto (Guayas, Ecuador)',
    'resume.calvanase.description': '<li>Gestión de las cuentas de clientes del estudio: comunicación continua y seguimiento de la relación.</li><li>Supervisión de la facturación y de la documentación de pagos, garantizando su exactitud en todas las cuentas.</li><li>Gestión de agendas, correos electrónicos y coordinación de tareas diarias.</li><li>Carga de datos, registro y apoyo administrativo general.</li><li>Apoyo en contabilidad y marketing, además de atención de llamadas y comunicación con clientes.</li>',

    // Contact section
    'contact.title': 'Contacto',
    'contact.location': 'Ubicación:',
    'contact.location.value': 'Tigre, Buenos Aires, Argentina',
    'contact.email': 'Email:',
    'contact.call': 'Llamar:',
  }
};

const DEFAULT_LANGUAGE = 'en';

// Fonction pour obtenir la langue actuelle :
// la langue choisie par le visiteur si elle existe, sinon l'anglais.
function getCurrentLanguage() {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('preferred-language');
  } catch (e) {
    savedLang = null;
  }
  if (savedLang && translations[savedLang]) {
    return savedLang;
  }
  return DEFAULT_LANGUAGE;
}

// Fonction pour changer la langue
// persist = true uniquement quand le visiteur choisit lui-même une langue
function setLanguage(lang, persist = true) {
  if (!translations[lang]) {
    console.error(`Language ${lang} is not supported`);
    return;
  }

  // Sauvegarder la préférence
  if (persist) {
    try {
      localStorage.setItem('preferred-language', lang);
    } catch (e) {
      // stockage indisponible : la langue ne sera simplement pas mémorisée
    }
  }

  // Mettre à jour l'attribut lang du HTML
  document.documentElement.lang = lang;

  // Traduire tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = translations[lang][key];
      } else if (element.hasAttribute('data-i18n-html')) {
        // Remplacer les \n par <br> pour le HTML
        const htmlContent = translations[lang][key].replace(/\n/g, '<br>');
        element.innerHTML = htmlContent;
      } else if (element.hasAttribute('title') && element.children.length === 0) {
        // Si l'élément a un attribut title et pas d'enfants, mettre à jour le title et le texte
        element.setAttribute('title', translations[lang][key]);
        element.textContent = translations[lang][key];
      } else if (element.hasAttribute('title') && element.children.length > 0) {
        // Si l'élément a un attribut title et des enfants (comme les liens avec icônes), seulement mettre à jour le title
        element.setAttribute('title', translations[lang][key]);
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Mettre à jour le sélecteur de langue
  const langSelector = document.getElementById('language-selector');
  if (langSelector) {
    langSelector.value = lang;
  }
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(getCurrentLanguage(), false);
});

// Exporter les fonctions pour utilisation globale
window.i18n = {
  setLanguage,
  getCurrentLanguage,
  translations
};
