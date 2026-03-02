// ---------------------------------------------------------------------------
// Industries – target verticals with tailored messaging
// ---------------------------------------------------------------------------

export interface Industry {
  id: string;
  title: string;
  icon: string;
  challenge: string;
  solutions: string[];
  href: string;
}

export const industries: Industry[] = [
  {
    id: 'handwerk',
    title: 'Handwerk',
    icon: 'wrench',
    challenge:
      'Viele Handwerksbetriebe in Coburg und Oberfranken gewinnen Kunden noch über Mundpropaganda – aber immer mehr Menschen suchen ihren Elektriker, Schreiner oder Dachdecker zuerst bei Google. Ohne professionelle Online-Präsenz gehen Ihnen Aufträge verloren.',
    solutions: [
      'Professionelle Handwerker-Website mit Leistungsübersicht und Referenzen',
      'Lokales SEO für Suchbegriffe wie „Schreiner Coburg" oder „Elektriker in der Nähe"',
      'Google Business Profil optimieren für mehr Sichtbarkeit in Maps-Ergebnissen',
      'Einfaches Kontaktformular und Rückrufservice für schnelle Kundenanfragen',
    ],
    href: '/branchen/handwerk',
  },
  {
    id: 'gastronomie',
    title: 'Gastronomie',
    icon: 'utensils',
    challenge:
      'Restaurants und Cafés leben von Laufkundschaft und guten Bewertungen. Doch wer online nicht gefunden wird oder eine veraltete Website hat, verliert Gäste an die Konkurrenz – besonders bei Touristen und Neuzugezogenen, die aktiv nach Restaurants suchen.',
    solutions: [
      'Appetitliche Website mit Speisekarte, Öffnungszeiten und Reservierungsfunktion',
      'Google Business Profil mit aktuellen Fotos und Bewertungsmanagement',
      'Lokale SEO-Optimierung für „Restaurant Coburg" und ähnliche Suchbegriffe',
      'Social-Media-Anbindung für Tagesgerichte und Events',
    ],
    href: '/branchen/gastronomie',
  },
  {
    id: 'praxen',
    title: 'Praxen & Gesundheit',
    icon: 'heart-pulse',
    challenge:
      'Arztpraxen, Physiotherapeuten und andere Gesundheitsdienstleister brauchen eine Website, die Vertrauen aufbaut und den Praxisalltag entlastet. Patienten erwarten heute Online-Informationen, digitale Terminbuchung und eine barrierefreie Darstellung.',
    solutions: [
      'Vertrauenswürdige Praxis-Website mit Team-Vorstellung und Behandlungsspektrum',
      'Online-Terminbuchung, die sich in Ihre Praxissoftware integriert',
      'Barrierefreies Webdesign nach WCAG-Richtlinien',
      'Patientenfreundliche Inhalte mit klarer Sprache und schneller Ladezeit',
    ],
    href: '/branchen/praxen',
  },
  {
    id: 'mittelstand',
    title: 'Mittelstand',
    icon: 'building-2',
    challenge:
      'Mittelständische Unternehmen in Oberfranken stehen vor der Herausforderung, Geschäftsprozesse zu digitalisieren, ohne den laufenden Betrieb zu stören. Oft fehlt intern das Know-how für moderne Web-Technologien und KI-Lösungen.',
    solutions: [
      'Individuelle Webanwendungen zur Digitalisierung interner Prozesse',
      'KI-Beratung und Automatisierung für mehr Effizienz im Arbeitsalltag',
      'Schnittstellen-Entwicklung für bestehende ERP- und CRM-Systeme',
      'Schrittweise Modernisierung der digitalen Infrastruktur ohne Betriebsunterbrechung',
    ],
    href: '/branchen/mittelstand',
  },
  {
    id: 'startups',
    title: 'Startups & Gründer',
    icon: 'flame',
    challenge:
      'Als Gründer brauchen Sie schnell eine professionelle Online-Präsenz, die Ihre Geschäftsidee überzeugend darstellt – ohne ein halbes Jahr auf eine Agentur zu warten oder Ihr gesamtes Budget in die Website zu stecken.',
    solutions: [
      'Schlanke, überzeugende Startup-Website innerhalb von 3–4 Wochen',
      'Klar strukturierte Landing Pages, die Investoren und Kunden überzeugen',
      'Flexible, skalierbare Technik, die mit Ihrem Unternehmen wachsen kann',
      'KI-gestützte Tools für Marketing, Kundenservice und Prozessautomatisierung',
    ],
    href: '/branchen/startups',
  },
];
