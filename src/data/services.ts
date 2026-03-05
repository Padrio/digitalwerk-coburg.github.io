// ---------------------------------------------------------------------------
// Services – full detail for each core offering
// ---------------------------------------------------------------------------

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  usps: string[];
  ctaText?: string;
  deliverables: string[];
  href: string;
}

// ---------------------------------------------------------------------------

export const services: Service[] = [
  // 1 — Webdesign
  {
    id: 'webdesign',
    slug: 'webdesign',
    title: 'Webdesign, das Vertrauen aufbaut und Kunden gewinnt',
    shortTitle: 'Webdesign',
    description:
      'Ihre Website ist oft der erste Eindruck, den potenzielle Kunden von Ihrem Unternehmen bekommen. Ich gestalte moderne, schnelle Websites, die Ihr Angebot klar kommunizieren und Besucher in Anfragen verwandeln. Kein Baukastendesign von der Stange, sondern eine maßgeschneiderte Lösung für Ihr Unternehmen in Coburg und Umgebung.',
    icon: 'palette',
    features: [
      {
        title: 'Individuelles Design',
        description:
          'Jede Website wird von Grund auf für Ihr Unternehmen gestaltet – passend zu Ihrer Marke, Ihrer Zielgruppe und Ihren Zielen.',
      },
      {
        title: 'Responsive auf allen Geräten',
        description:
          'Ob Smartphone, Tablet oder Desktop: Ihre Seite sieht überall professionell aus und funktioniert einwandfrei.',
      },
      {
        title: 'Schnelle Ladezeiten',
        description:
          'Optimierte Performance sorgt dafür, dass Besucher nicht abspringen und Google Ihre Seite bevorzugt anzeigt.',
      },
      {
        title: 'Klare Nutzerführung',
        description:
          'Durchdachte Navigation und Call-to-Actions leiten Besucher gezielt zu den wichtigsten Informationen und zur Kontaktaufnahme.',
      },
      {
        title: 'Barrierefreiheit',
        description:
          'Ihre Website ist für alle zugänglich – das erweitert Ihre Zielgruppe und erfüllt künftige gesetzliche Anforderungen.',
      },
      {
        title: 'SEO-Grundlagen inklusive',
        description:
          'Saubere Struktur, schnelle Technik und optimierte Meta-Daten bilden das Fundament für gute Sichtbarkeit bei Google.',
      },
      {
        title: 'CMS-Integration',
        description:
          'Auf Wunsch erhalten Sie ein einfaches Content-Management-System, mit dem Sie Texte und Bilder selbst aktualisieren können.',
      },
    ],
    usps: [
      'Kein Baukasten – individuell entwickelt mit modernen Technologien',
      'Persönliche Betreuung von Konzept bis Launch',
      'Performance-Scores über 90 bei Google PageSpeed',
      'Transparentes Angebot ohne versteckte Kosten',
    ],
    ctaText: 'Individuell für Ihr Unternehmen',
    deliverables: [
      'Konzept & Wireframes',
      'Individuelles UI-Design (Figma)',
      'Responsive Umsetzung',
      'Basis-SEO-Optimierung',
      'Cookie-Banner & Datenschutz',
      'Einweisung in die Pflege',
      '30 Tage Support nach Launch',
    ],
    href: '/leistungen/webdesign',
  },

  // 2 — Webentwicklung
  {
    id: 'webentwicklung',
    slug: 'webentwicklung',
    title: 'Webentwicklung: Technisch sauber, langfristig wartbar',
    shortTitle: 'Webentwicklung',
    description:
      'Sie brauchen mehr als eine einfache Website? Ich entwickle leistungsstarke Webanwendungen, Schnittstellen und individuelle Funktionen, die Ihre Geschäftsprozesse digital abbilden. Sauberer Code, moderne Frameworks und eine Architektur, die mit Ihren Anforderungen wächst.',
    icon: 'code',
    features: [
      {
        title: 'Moderne Technologien',
        description:
          'Entwicklung mit Astro, React, TypeScript und Tailwind CSS – schnell, sicher und zukunftsfähig.',
      },
      {
        title: 'API-Anbindungen',
        description:
          'Nahtlose Integration externer Systeme wie CRM, Buchungssoftware oder Warenwirtschaft über REST- und GraphQL-Schnittstellen.',
      },
      {
        title: 'Datenbank & Backend',
        description:
          'Von einfachen Formularen bis zu komplexen Datenbanklösungen – ich baue das Backend, das Ihr Projekt braucht.',
      },
      {
        title: 'Performance-Optimierung',
        description:
          'Minimale Ladezeiten durch intelligentes Caching, Code-Splitting und optimierte Asset-Auslieferung.',
      },
      {
        title: 'Automatisierte Tests',
        description:
          'Qualitätssicherung durch Unit- und Integrationstests, damit Updates sicher ausgerollt werden können.',
      },
      {
        title: 'CI/CD & Deployment',
        description:
          'Automatisierte Build- und Deployment-Pipelines für schnelle, fehlerfreie Veröffentlichungen.',
      },
      {
        title: 'Technische Dokumentation',
        description:
          'Verständliche Dokumentation, damit Sie oder andere Entwickler das Projekt jederzeit weiterführen können.',
      },
      {
        title: 'Wartung & Updates',
        description:
          'Regelmäßige Sicherheitsupdates und technische Pflege halten Ihre Anwendung auf dem aktuellen Stand.',
      },
    ],
    usps: [
      'Kein WordPress-Overhead – schlanke, performante Lösungen',
      'Code gehört Ihnen – kein Vendor-Lock-in',
      'Erfahrung mit komplexen Integrationen und Schnittstellen',
      'Transparente Entwicklung mit regelmäßigen Updates',
    ],
    ctaText: 'Zugeschnitten auf Ihre Anforderungen',
    deliverables: [
      'Technisches Konzept & Architektur',
      'Frontend-Entwicklung',
      'Backend & API-Entwicklung (bei Bedarf)',
      'Hosting-Setup & Deployment',
      'Performance-Optimierung',
      'Technische Dokumentation',
      'Code-Repository-Übergabe',
      '60 Tage Support nach Launch',
    ],
    href: '/leistungen/webentwicklung',
  },

  // 3 — KI-Beratung
  {
    id: 'ki-beratung',
    slug: 'ki-beratung',
    title: 'KI-Beratung: Künstliche Intelligenz konkret einsetzen',
    shortTitle: 'KI-Beratung',
    description:
      'Künstliche Intelligenz ist kein Zukunftsthema mehr – sie ist da. Aber wo lohnt sich der Einsatz wirklich? Ich helfe Ihnen, KI-Potenziale in Ihrem Unternehmen zu erkennen, sinnvolle Anwendungsfälle zu identifizieren und erste Lösungen umzusetzen. Praxisnah, ohne Hype, mit echtem Mehrwert.',
    icon: 'brain',
    features: [
      {
        title: 'KI-Potenzialanalyse',
        description:
          'Gemeinsam prüfen wir Ihre Prozesse und identifizieren, wo KI konkret Zeit spart und Qualität steigert.',
      },
      {
        title: 'Chatbot-Entwicklung',
        description:
          'Intelligente Chatbots für Ihre Website, die häufige Kundenfragen automatisch und zuverlässig beantworten.',
      },
      {
        title: 'Automatisierung mit KI',
        description:
          'Wiederkehrende Aufgaben wie Textverarbeitung, Datenaufbereitung oder E-Mail-Sortierung automatisiert lösen.',
      },
      {
        title: 'Integration bestehender KI-Tools',
        description:
          'Einbindung von ChatGPT, Claude oder anderen KI-Diensten in Ihre bestehenden Arbeitsabläufe und Systeme.',
      },
      {
        title: 'Team-Schulungen',
        description:
          'Praxisnahe Workshops, damit Ihr Team KI-Tools sicher und effizient im Arbeitsalltag nutzen kann.',
      },
      {
        title: 'Datenschutz & Compliance',
        description:
          'Beratung zu DSGVO-konformem KI-Einsatz, damit Sie rechtssicher und transparent arbeiten.',
      },
    ],
    usps: [
      'Praxisorientiert statt theoretisch – schnelle erste Ergebnisse',
      'Fokus auf kleine und mittlere Unternehmen in der Region',
      'Verständliche Erklärungen ohne Fachjargon',
      'Unabhängige Beratung – keine Bindung an einen KI-Anbieter',
    ],
    ctaText: 'Passend zu Ihrem Bedarf',
    deliverables: [
      'KI-Potenzialanalyse für Ihr Unternehmen',
      'Priorisierte Anwendungsfälle mit Aufwand-Nutzen-Bewertung',
      'Prototyp oder Pilot-Umsetzung',
      'Team-Workshop (optional)',
      'Handlungsempfehlungen & nächste Schritte',
      'Dokumentation der eingesetzten Tools & Prozesse',
    ],
    href: '/leistungen/ki-beratung',
  },

  // 4 — SEO
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO: Sichtbar werden, wenn Kunden suchen',
    shortTitle: 'SEO',
    description:
      'Die schönste Website bringt nichts, wenn sie niemand findet. Mit gezielter Suchmaschinenoptimierung sorge ich dafür, dass Ihr Unternehmen bei Google genau dann erscheint, wenn potenzielle Kunden in Coburg und Umgebung nach Ihren Leistungen suchen. Nachhaltig, messbar und auf Ihr Budget abgestimmt.',
    icon: 'search',
    features: [
      {
        title: 'Keyword-Recherche',
        description:
          'Ich finde heraus, wonach Ihre Zielgruppe wirklich sucht, und richte Ihre Inhalte gezielt darauf aus.',
      },
      {
        title: 'Technisches SEO',
        description:
          'Ladezeiten, Seitenstruktur, mobile Darstellung und Core Web Vitals – die technische Basis für gute Rankings.',
      },
      {
        title: 'Lokales SEO',
        description:
          'Google Business Profil, lokale Verzeichnisse und standortbezogene Optimierung für maximale Sichtbarkeit in der Region.',
      },
      {
        title: 'Content-Strategie',
        description:
          'Redaktionsplan und SEO-optimierte Inhalte, die Ihre Expertise zeigen und langfristig Besucher anziehen.',
      },
      {
        title: 'On-Page-Optimierung',
        description:
          'Meta-Titel, Beschreibungen, Überschriftenstruktur und interne Verlinkung für jede wichtige Unterseite.',
      },
      {
        title: 'Monatliches Reporting',
        description:
          'Transparente Berichte über Rankings, Besucherzahlen und Fortschritte – verständlich aufbereitet, nicht als Datenwüste.',
      },
      {
        title: 'Wettbewerbsanalyse',
        description:
          'Ich analysiere, was Ihre Mitbewerber online machen, und finde Lücken, die Sie gezielt besetzen können.',
      },
    ],
    usps: [
      'Spezialisiert auf lokale Sichtbarkeit in Oberfranken',
      'Keine langfristigen Knebelverträge – monatlich kündbar',
      'Verständliche Berichte statt SEO-Fachchinesisch',
      'Kombination aus technischem Know-how und Texter-Erfahrung',
    ],
    ctaText: 'Flexibel & monatlich anpassbar',
    deliverables: [
      'SEO-Audit Ihrer bestehenden Website',
      'Keyword-Recherche & Strategie',
      'Technische Optimierung',
      'On-Page-Optimierung (bis zu 10 Seiten)',
      'Google Business Profil Einrichtung/Optimierung',
      'Monatlicher Fortschrittsbericht',
      'Quartals-Review mit Strategieanpassung',
    ],
    href: '/leistungen/seo',
  },
];

// Utility: look up a service by id or slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
