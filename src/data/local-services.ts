// ---------------------------------------------------------------------------
// Local Services — data for /[service]-[city] landing pages
// ---------------------------------------------------------------------------

export interface LocalServiceFAQ {
  question: string;
  answer: string;
}

export interface LocalReference {
  title: string;
  description: string;
}

export interface LocalUSP {
  title: string;
  description: string;
}

export interface PricingRow {
  feature: string;
  basic: string;
  advanced: string;
  premium: string;
}

export interface LocalServiceData {
  service: 'webdesign' | 'webentwicklung' | 'seo';
  serviceLabel: string;
  city: string;
  citySlug: string;
  region: string;
  url: string;
  title: string;
  metaDescription: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  summary: string;
  trustHeadline: string;
  trustPoints: string[];
  uniqueSelling: LocalUSP[];
  pricingHeadline: string;
  pricingIntro: string;
  pricingPackages: { basic: string; advanced: string; premium: string };
  pricingTable: PricingRow[];
  localHeadline: string;
  localIntro: string;
  localReferences: LocalReference[];
  processHeadline: string;
  processIntro: string;
  faqs: LocalServiceFAQ[];
  ctaHeadline: string;
  ctaSubline: string;
  baseServicePath: string;
  baseServiceLabel: string;
  priceRange: string;
}

export const localServices: LocalServiceData[] = [
  {
    service: 'webdesign',
    serviceLabel: 'Webdesign',
    city: 'Coburg',
    citySlug: 'coburg',
    region: 'Oberfranken',
    url: 'https://digitalwerk-coburg.de/webdesign-coburg',
    title: 'Webdesign Coburg | Digitalwerk Coburg',
    metaDescription:
      'Webdesign Coburg ab 3.000 €. Pascal Krason — Fachinformatiker mit 10+ Jahren Erfahrung. Persönlich, lokal, ergebnisorientiert. Kostenloses Erstgespräch.',
    heroBadge: 'Webdesign aus Coburg',
    heroHeadline: 'Webdesign Coburg — Websites, die Ihre Kunden überzeugen',
    heroSubheadline:
      'Professionelle Websites für Coburger Unternehmen. Direkt vor Ort an der Vestestadt — ohne Agentur-Bürokratie und mit fester Ansprechperson über die gesamte Projektlaufzeit.',
    summary:
      'Webdesign aus Coburg von Pascal Krason: maßgeschneiderte Websites für Handwerker, Praxen, Gastronomen und Mittelstand in Oberfranken. Festpreis ab 3.000 Euro, persönlicher Kontakt vor Ort, in 4–6 Wochen online.',
    trustHeadline: 'Warum ein Webdesigner aus Coburg statt Großstadt-Agentur?',
    trustPoints: [
      'Persönliches Treffen vor Ort möglich — kein langer Anfahrtsweg, keine Telko-Hürden bei Designentscheidungen.',
      'Festpreise ab 3.000 € statt undurchsichtiger Tagessätze. Sie wissen vor Auftragsstart, was die Website kostet.',
      'Eine feste Ansprechperson statt Account-Manager-Karussell. Sie sprechen direkt mit dem Entwickler.',
      'Kenntnis der regionalen Wirtschaft — von Coburger Versicherungsbranche bis Handwerk im Itzgrund.',
    ],
    uniqueSelling: [
      {
        title: 'Lokal verwurzelt',
        description:
          'Digitalwerk sitzt direkt in Coburg — Treffen vor Ort, persönliche Übergabe und schnelle Reaktion bei Anliegen sind selbstverständlich.',
      },
      {
        title: 'Festpreise statt Stundenfalle',
        description:
          'Klare Pakete von 3.000 € (Visitenkarten-Website) bis 8.000 € (CMS oder Online-Shop). Keine versteckten Kosten, kein Tagessatz-Risiko.',
      },
      {
        title: 'In 4–6 Wochen online',
        description:
          'Vom Erstgespräch bis Go-Live: 4–6 Wochen sind realistisch. Schnellere Realisierung möglich, wenn Inhalte zeitnah bereitstehen.',
      },
      {
        title: 'DSGVO-konform von Anfang an',
        description:
          'Lokale Schriften, kein Google Maps, kein Google Analytics. Datenschutzkonform aufgesetzt — wichtig für Coburger Praxen, Kanzleien und Vereine.',
      },
      {
        title: 'Mobile First, Lighthouse 95+',
        description:
          'Über 60% der Suchanfragen kommen mobil. Jede Website wird primär für Smartphones gestaltet und auf Lighthouse-Score 95+ optimiert.',
      },
      {
        title: 'Eigene Pflege ohne Programmierkenntnisse',
        description:
          'Optional mit CMS — Sie pflegen Texte, Bilder, Termine selbst. Schulung im Festpreis enthalten.',
      },
    ],
    pricingHeadline: 'Was kostet Webdesign in Coburg?',
    pricingIntro:
      'Eine professionelle Unternehmenswebsite kostet bei Digitalwerk Coburg zwischen 3.000 und 8.000 Euro. Die Tabelle zeigt die drei Standardpakete im Vergleich. Auf Wunsch erstelle ich Ihnen ein individuelles Angebot innerhalb von 48 Stunden.',
    pricingPackages: { basic: 'Basis (3.000 €)', advanced: 'Standard (5.000 €)', premium: 'Premium (8.000 €)' },
    pricingTable: [
      { feature: 'Anzahl Seiten', basic: '5', advanced: '10', premium: '20+' },
      { feature: 'Individuelles Design', basic: 'Vorlagen-basiert', advanced: 'Maßgeschneidert', premium: 'Voll individuell' },
      { feature: 'CMS / selbst pflegbar', basic: '—', advanced: 'Inkl.', premium: 'Inkl. Schulung' },
      { feature: 'SEO-Grundlagen', basic: 'Inkl.', advanced: 'Inkl. + Keywordrecherche', premium: 'Inkl. + Strategie' },
      { feature: 'DSGVO-Setup', basic: 'Inkl.', advanced: 'Inkl.', premium: 'Inkl.' },
      { feature: 'Realisierungszeit', basic: '3–4 Wochen', advanced: '4–6 Wochen', premium: '6–10 Wochen' },
      { feature: 'Persönliche Treffen', basic: '1 (Briefing)', advanced: '2–3', premium: 'Unbegrenzt' },
      { feature: 'Support nach Go-Live', basic: '3 Monate', advanced: '6 Monate', premium: '12 Monate' },
    ],
    localHeadline: 'Wer profitiert in Coburg von professionellem Webdesign?',
    localIntro:
      'Webdesign aus Coburg passt für Betriebe in der Region, die online mehr Anfragen, Termine oder Bestellungen erhalten möchten. Drei typische Beispielszenarien aus der Coburger Wirtschaft:',
    localReferences: [
      {
        title: 'Handwerksbetrieb in Coburg-Cortendorf',
        description:
          'Bauunternehmer mit eigener Werkstatt sucht Auftraggeber für Sanierungen. Eine SEO-optimierte Website mit Coburg-Bezug bringt monatlich 5–10 qualifizierte Anfragen — statt teurer Anzeigen im Coburger Tageblatt.',
      },
      {
        title: 'Arztpraxis in der Innenstadt',
        description:
          'Hausarztpraxis am Marktplatz benötigt Online-Terminbuchung und barrierefreie Website. DSGVO-konforme Lösung mit lokalen Schriften, ohne Google Maps, mit klarer Wegbeschreibung von Bahnhof und Vestefeste.',
      },
      {
        title: 'Restaurant am Schlossplatz',
        description:
          'Coburger Gastronomiebetrieb möchte digitale Speisekarte und Reservierungssystem. Eine moderne Website mit Online-Reservierung und Foodfotografie überzeugt Gäste vor dem Besuch.',
      },
      {
        title: 'Steuerkanzlei nahe der HUK-Coburg',
        description:
          'Mittelständische Kanzlei mit 8 Mitarbeitenden positioniert sich als digitaler Steuerberater. Klare Service-Übersicht, Mitarbeiter-Profile und Mandantenportal heben sich vom regionalen Wettbewerb ab.',
      },
    ],
    processHeadline: 'Wie läuft ein Webdesign-Projekt in Coburg ab?',
    processIntro:
      'Jedes Projekt folgt dem gleichen 6-Schritte-Prozess — bei Bedarf treffen wir uns bei Ihnen vor Ort in Coburg, in der Werkstatt, Praxis oder Kanzlei.',
    faqs: [
      {
        question: 'Was kostet eine Website in Coburg?',
        answer:
          'Eine professionelle Unternehmenswebsite kostet bei Digitalwerk Coburg zwischen 3.000 und 8.000 Euro. Einfache 5-Seiten-Websites liegen am unteren Ende, Projekte mit CMS oder E-Commerce am oberen. Festpreis vor Auftragsstart — keine Stundenabrechnung.',
      },
      {
        question: 'Wie lange dauert die Erstellung einer Website?',
        answer:
          'Vom Erstgespräch bis zum Go-Live vergehen meist 4–6 Wochen. Schneller geht es, wenn Texte und Bilder bereits vorhanden sind. Bei umfangreichen Projekten mit Online-Shop oder Buchungssystem sollten 8–10 Wochen eingeplant werden.',
      },
      {
        question: 'Wo sitzt Digitalwerk Coburg genau?',
        answer:
          'Digitalwerk sitzt in Coburg, Von-Mayer-Straße 25 (96450). Persönliche Treffen sind im Büro oder bei Ihnen vor Ort möglich — innerhalb von Coburg ohne Anfahrtspauschale, im Umkreis von 50 km zu fairen Konditionen.',
      },
      {
        question: 'Brauche ich einen Webdesigner aus Coburg oder reicht eine Agentur aus München?',
        answer:
          'Für reine Software-Projekte spielt der Standort keine große Rolle. Bei Webdesign profitieren Coburger Unternehmen aber von einem lokalen Partner: persönliche Workshops, Kenntnis der regionalen Wirtschaft und schnelle Erreichbarkeit beschleunigen Entscheidungen erheblich.',
      },
      {
        question: 'Ist die Website DSGVO-konform?',
        answer:
          'Ja. Standardmäßig: lokal gehostete Schriften (kein Google Fonts CDN), keine Google Analytics, keine Google Maps. Tracking nur mit Plausible oder Umami (DSGVO-konform). Cookie-Banner nur, wenn technisch erforderlich.',
      },
    ],
    ctaHeadline: 'Ihr Webdesigner für Coburg',
    ctaSubline:
      'Lassen Sie uns in einem kostenlosen Erstgespräch über Ihr Projekt sprechen. Persönlich vor Ort in Coburg oder per Telefon — wie es Ihnen besser passt.',
    baseServicePath: '/leistungen/webdesign',
    baseServiceLabel: 'Mehr zur Leistung Webdesign',
    priceRange: '€€',
  },
  {
    service: 'webentwicklung',
    serviceLabel: 'Webentwicklung',
    city: 'Coburg',
    citySlug: 'coburg',
    region: 'Oberfranken',
    url: 'https://digitalwerk-coburg.de/webentwicklung-coburg',
    title: 'Webentwicklung Coburg | Digitalwerk Coburg',
    metaDescription:
      'Individuelle Webentwicklung aus Coburg: Astro, React, TypeScript. Pascal Krason — Fachinformatiker, 10+ Jahre Erfahrung. Erstgespräch kostenlos.',
    heroBadge: 'Webentwicklung aus Coburg',
    heroHeadline: 'Webentwicklung Coburg — Individuelle Software statt Standard-Baukasten',
    heroSubheadline:
      'Maßgeschneiderte Web-Anwendungen, Portale und Schnittstellen für Coburger Unternehmen. Wenn WordPress oder Wix an seine Grenzen kommt, beginnt meine Arbeit.',
    summary:
      'Individuelle Webentwicklung aus Coburg: Web-Apps, Kundenportale, Schnittstellen und Custom-CMS-Lösungen. Pascal Krason, Fachinformatiker mit 10+ Jahren Erfahrung von CHECK24 bis Digitalwerk. Stack: Astro, React, TypeScript, Node.js, Laravel.',
    trustHeadline: 'Wann brauchen Sie individuelle Webentwicklung statt Baukasten?',
    trustPoints: [
      'Wenn Standard-CMS wie WordPress an Performance- oder Sicherheits-Grenzen stoßen.',
      'Wenn Sie eigene Geschäftslogik abbilden müssen — z.B. Konfiguratoren, Buchungslogik, Kundenportale.',
      'Wenn Schnittstellen zu bestehender Software (ERP, CRM, Warenwirtschaft) erforderlich sind.',
      'Wenn Sie ein digitales Produkt entwickeln möchten — vom MVP bis zum Marktstart.',
    ],
    uniqueSelling: [
      {
        title: 'Moderner Tech-Stack',
        description:
          'Astro, React, TypeScript, Tailwind, Node.js, Laravel — passend zum Anwendungsfall. Keine veralteten PHP-Frameworks, keine Vendor-Lock-ins.',
      },
      {
        title: 'Performance ist kein Nachgedanke',
        description:
          'Lighthouse 95+ ist Standard, nicht Premium-Feature. Core Web Vitals werden vor Go-Live verifiziert.',
      },
      {
        title: 'Saubere, dokumentierte Codebase',
        description:
          'Sie bekommen den Quellcode, eine Dokumentation und Übergabe-Workshop. Kein „Vendor Lock-in" — auch andere Entwickler können später daran arbeiten.',
      },
      {
        title: 'Iterative Lieferung',
        description:
          'Statt Big-Bang-Launch: Funktionsweise nach 2–3 Wochen sichtbar, Feedback früh einarbeiten. Risiko verteilen, nicht aufstauen.',
      },
      {
        title: 'API-First-Architektur',
        description:
          'Wenn sinnvoll: REST oder GraphQL APIs, sodass spätere Mobile-Apps oder externe Systeme angeschlossen werden können.',
      },
      {
        title: 'CHECK24-Erfahrung',
        description:
          'Über 5 Jahre als Entwickler bei einem der größten deutschen Vergleichsportale — Skalierung, Sicherheit und Tooling auf Enterprise-Niveau.',
      },
    ],
    pricingHeadline: 'Was kostet individuelle Webentwicklung?',
    pricingIntro:
      'Webentwicklungs-Projekte starten bei 5.000 € (kleines Tool oder Erweiterung) und reichen bei komplexen Plattformen bis 50.000 € und mehr. Festpreis nur bei klar definiertem Scope — alternativ Tagessatz à 850 € bei agiler Arbeitsweise. Erstgespräch immer kostenlos.',
    pricingPackages: { basic: 'Erweiterung (ab 5.000 €)', advanced: 'Web-App (ab 15.000 €)', premium: 'Plattform (ab 30.000 €)' },
    pricingTable: [
      { feature: 'Typischer Anwendungsfall', basic: 'Tool, Schnittstelle', advanced: 'Kundenportal, Konfigurator', premium: 'SaaS, Marktplatz' },
      { feature: 'Backend-Entwicklung', basic: 'Optional', advanced: 'Inkl.', premium: 'Inkl.' },
      { feature: 'Datenbank-Design', basic: 'Optional', advanced: 'Inkl.', premium: 'Inkl. + Skalierung' },
      { feature: 'Schnittstellen (APIs)', basic: '1', advanced: 'Bis 5', premium: 'Beliebig' },
      { feature: 'Authentifizierung', basic: 'Optional', advanced: 'Inkl.', premium: 'Inkl. + Rollen' },
      { feature: 'Testabdeckung', basic: 'Manuell', advanced: 'Unit + Integration', premium: 'Inkl. E2E' },
      { feature: 'Realisierungszeit', basic: '2–6 Wochen', advanced: '8–16 Wochen', premium: '3–6 Monate' },
      { feature: 'Code-Übergabe', basic: 'Inkl.', advanced: 'Inkl. + Doku', premium: 'Inkl. + Schulung' },
    ],
    localHeadline: 'Welche Coburger Unternehmen profitieren von Webentwicklung?',
    localIntro:
      'Individuelle Webentwicklung lohnt sich, wenn ein Standardprodukt nicht ausreicht. Drei reale Anwendungsfelder aus der Coburger Wirtschaft:',
    localReferences: [
      {
        title: 'Mittelständischer Versicherungsmakler',
        description:
          'Mit Hauptsitz in Coburg betreut der Makler Geschäftskunden über die Region hinaus. Ein Kundenportal mit Vertragsübersicht, Schadenmeldung und Dokumenten-Upload reduziert Telefonaufwand um geschätzt 40 Prozent.',
      },
      {
        title: 'Möbelhersteller im Coburger Land',
        description:
          'Traditionsbetrieb mit eigener Produktion möchte Online-Konfigurator für Massmöbel anbieten. Individuelle Web-App mit 3D-Vorschau und Preiskalkulation generiert qualifizierte Leads ohne Showroom-Termin.',
      },
      {
        title: 'Logistik-Unternehmen Richtung Sonneberg',
        description:
          'Speditionsbetrieb an der bayerisch-thüringischen Grenze digitalisiert Auftragsabwicklung. Schnittstelle zwischen Bestandssystem und Web-Frontend ermöglicht Kunden-Self-Service rund um die Uhr.',
      },
      {
        title: 'Industriedienstleister mit IHK-Mitgliedschaft',
        description:
          'Fünfundzwanzig Mitarbeitende, mehrere Standorte. Zentrales Mitarbeiterportal für Urlaub, Stundenerfassung und interne Dokumente — DSGVO-konform und integriert in bestehende DATEV-Lösung.',
      },
    ],
    processHeadline: 'Wie läuft ein Webentwicklungs-Projekt in Coburg ab?',
    processIntro:
      'Bei Webentwicklung folge ich dem gleichen 6-Schritte-Prozess wie bei Webdesign — mit zusätzlichen Sprint-Reviews alle 2 Wochen, damit Sie früh Feedback geben können.',
    faqs: [
      {
        question: 'Was kostet eine Web-App in Coburg?',
        answer:
          'Webentwicklungs-Projekte starten bei 5.000 € für kleinere Tools, mittlere Web-Apps mit Kundenbereich liegen bei 15.000–30.000 €. Komplexe Plattformen mit Schnittstellen können 50.000 € und mehr kosten. Festpreis nur bei klarem Scope — alternativ 850 € Tagessatz bei agiler Arbeit.',
      },
      {
        question: 'Welche Technologien nutzen Sie?',
        answer:
          'Frontend: Astro, React, TypeScript, Tailwind. Backend: Node.js (Express, Fastify) oder Laravel (PHP). Datenbanken: PostgreSQL, MySQL, MongoDB. Hosting: Hetzner (Deutschland), Vercel oder Coburg-lokale Anbieter — DSGVO-Standort wählbar.',
      },
      {
        question: 'Bekomme ich den Quellcode?',
        answer:
          'Ja, der Quellcode gehört Ihnen. Bei Auftragsabschluss übergebe ich Repository-Zugriff (GitHub/GitLab), Dokumentation und biete einen Übergabe-Workshop an. Sie sind nicht an Digitalwerk gebunden — auch andere Entwickler können später daran arbeiten.',
      },
      {
        question: 'Können Sie auch bestehende Anwendungen erweitern?',
        answer:
          'Ja. Häufige Aufgaben: Modernisierung alter PHP-Anwendungen, Anbindung von Drittanbieter-APIs (DATEV, Stripe, Zahlungssysteme), Performance-Optimierung oder Security-Audits. Erstgespräch klärt, ob Modernisierung oder Neuentwicklung wirtschaftlicher ist.',
      },
      {
        question: 'Wie sieht die Wartung nach Go-Live aus?',
        answer:
          'Drei Optionen: (1) Sie übernehmen mit Ihrem Team, (2) flexibler Stundenpool ab 50 €/Monat, (3) Wartungsvertrag mit fester Reaktionszeit ab 200 €/Monat. Updates für Security und Bugfixes sind im Wartungsvertrag enthalten.',
      },
    ],
    ctaHeadline: 'Ihr Webentwickler für Coburg',
    ctaSubline:
      'Klingt Ihre Idee zu komplex für Standard-Software? Lassen Sie uns in einem kostenlosen Erstgespräch klären, ob individuelle Webentwicklung der richtige Weg ist.',
    baseServicePath: '/leistungen/webentwicklung',
    baseServiceLabel: 'Mehr zur Leistung Webentwicklung',
    priceRange: '€€€',
  },
  {
    service: 'seo',
    serviceLabel: 'SEO',
    city: 'Coburg',
    citySlug: 'coburg',
    region: 'Oberfranken',
    url: 'https://digitalwerk-coburg.de/seo-coburg',
    title: 'SEO Coburg | Digitalwerk Coburg',
    metaDescription:
      'SEO-Beratung & Local SEO aus Coburg. Mehr Sichtbarkeit auf Google für Oberfränkische Unternehmen. Pascal Krason. Kostenloses SEO-Erstgespräch.',
    heroBadge: 'SEO aus Coburg',
    heroHeadline: 'SEO Coburg — Mehr Sichtbarkeit für regionale Unternehmen',
    heroSubheadline:
      'Suchmaschinenoptimierung mit lokalem Fokus. Damit Coburger Kunden Sie auf Google finden, wenn sie nach Ihrer Leistung suchen — nicht nach Ihrem Firmennamen.',
    summary:
      'SEO Coburg von Digitalwerk: Local SEO, technisches SEO und Content-Strategie für Unternehmen in Coburg und Oberfranken. SEO-Audit ab 1.500 €, laufende Betreuung ab 600 €/Monat. Erste messbare Effekte nach 3 Monaten.',
    trustHeadline: 'Warum SEO mit Coburg-Bezug?',
    trustPoints: [
      'Google bevorzugt bei lokalen Suchanfragen Anbieter aus der Region — bei „webdesigner coburg" werden nur eine Handvoll Anbieter überhaupt angezeigt.',
      'Google Business Profile und lokale Backlinks sind entscheidend — beides erfordert Kenntnis der regionalen Wirtschaft.',
      'Wettbewerbsanalyse für Coburger Branchen lohnt sich — die Konkurrenz ist meist überschaubar, gezielte Maßnahmen wirken schnell.',
      'Voice Search („OK Google, Webdesigner in der Nähe") gewinnt regional an Bedeutung — speziell bei Mobile-Suche.',
    ],
    uniqueSelling: [
      {
        title: 'SEO-Audit mit konkreten Maßnahmen',
        description:
          'Statt 30-seitiger PDF-Reports: priorisierte Maßnahmenliste mit geschätztem Aufwand und erwartetem Effekt. Sie wissen, was zuerst zu tun ist.',
      },
      {
        title: 'Local SEO für Coburg',
        description:
          'Google Business Profile-Optimierung, Local-Citations, NAP-Konsistenz und lokale Backlinks (IHK Coburg, Branchenverzeichnisse, regionale Partner).',
      },
      {
        title: 'Technisches SEO als Standard',
        description:
          'Core Web Vitals, Schema.org-Markup, robots.txt, sitemap.xml, Crawling-Optimierung. Die technische Basis muss stimmen, bevor Content-SEO greift.',
      },
      {
        title: 'GEO — KI-Suchmaschinen-Optimierung',
        description:
          'ChatGPT, Perplexity, Google AI Overviews zitieren Websites mit klar strukturierten Daten und Schema.org-Markup 30–50 Prozent häufiger. Wir optimieren von Anfang an dafür.',
      },
      {
        title: 'Content-Strategie für Long-Tail',
        description:
          'Statt nur „webdesigner coburg" auch „webdesigner für arztpraxis coburg", „dsgvo-konforme website coburg" — weniger Konkurrenz, höhere Conversion-Rate.',
      },
      {
        title: 'Transparente Reports',
        description:
          'Monatlicher Report mit Rankings, Klicks, Traffic-Verläufen, Backlink-Profil. Plausible-Tracking DSGVO-konform — kein Google Analytics.',
      },
    ],
    pricingHeadline: 'Was kostet SEO in Coburg?',
    pricingIntro:
      'SEO-Beratung bei Digitalwerk Coburg startet bei einmalig 1.500 € (Audit + Quick-Wins). Laufende Betreuung ab 600 €/Monat. Erste messbare Ranking-Effekte sind nach 3 Monaten realistisch — signifikante Verbesserungen meist nach 6–9 Monaten kontinuierlicher Arbeit.',
    pricingPackages: { basic: 'Audit (1.500 €)', advanced: 'Local SEO (ab 600 €/M)', premium: 'Full-Service (ab 1.500 €/M)' },
    pricingTable: [
      { feature: 'Initial-Audit', basic: 'Inkl.', advanced: 'Inkl.', premium: 'Inkl.' },
      { feature: 'Google Business Profile', basic: 'Quick-Wins', advanced: 'Optimierung', premium: 'Voll betreut' },
      { feature: 'Technisches SEO', basic: 'Audit', advanced: 'Umsetzung', premium: 'Umsetzung + Monitoring' },
      { feature: 'Content / Blog', basic: '—', advanced: '1 Artikel/Monat', premium: '2–4 Artikel/Monat' },
      { feature: 'Backlink-Aufbau', basic: '—', advanced: 'Lokale Citations', premium: 'Kampagnen + Outreach' },
      { feature: 'Monitoring & Reports', basic: 'Einmalig', advanced: 'Monatlich', premium: 'Wöchentlich' },
      { feature: 'Strategie-Calls', basic: '1', advanced: 'Monatlich', premium: 'Wöchentlich' },
      { feature: 'Vertragslaufzeit', basic: 'Einmalig', advanced: 'Ab 6 Monate', premium: 'Ab 12 Monate' },
    ],
    localHeadline: 'Welche Coburger Branchen profitieren am stärksten von SEO?',
    localIntro:
      'Local SEO wirkt bei Suchanfragen mit Stadt- oder Regionsbezug — also bei Branchen, deren Kunden lokal entscheiden. Vier Beispiele aus Coburg:',
    localReferences: [
      {
        title: 'Handwerker und Bauunternehmen',
        description:
          'Suchanfragen wie „dachdecker coburg" oder „elektriker oberfranken" haben hohe Conversion-Rate. Wer auf Seite 1 für die eigene Stadt rankt, gewinnt fast automatisch Anfragen — Konkurrenz oft nur 5–10 Anbieter.',
      },
      {
        title: 'Arzt-, Zahnarzt- und Therapie-Praxen',
        description:
          'Patienten suchen meist Anbieter in Wohnortnähe. Google Business Profile, Bewertungen und eine optimierte Website mit Anfahrtsbeschreibung entscheiden über Termin oder Konkurrenzpraxis.',
      },
      {
        title: 'Restaurants und Cafés am Marktplatz',
        description:
          'Suchanfragen wie „restaurant coburg innenstadt" oder „brunch coburg" sind oft kurz vor Restaurantbesuch. Local SEO + aktuelle Speisekarte + Bewertungen = direkte Buchungen statt Telefonklingeln.',
      },
      {
        title: 'Anwaltskanzleien und Steuerberater',
        description:
          'Mandanten googeln „steuerberater coburg" oder „arbeitsrecht anwalt coburg". Wer hier sichtbar ist, gewinnt qualifizierte Anfragen — Wert pro Mandat oft 4-stellig, ROI von SEO entsprechend hoch.',
      },
    ],
    processHeadline: 'Wie läuft SEO-Betreuung in Coburg ab?',
    processIntro:
      'SEO ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Der Start folgt aber einem klaren 6-Schritte-Plan — anschließend monatliche Maßnahmen.',
    faqs: [
      {
        question: 'Was kostet SEO in Coburg?',
        answer:
          'SEO-Beratung bei Digitalwerk Coburg startet bei einmalig 1.500 € für ein Audit mit Quick-Wins. Laufende Betreuung mit Local SEO und technischer Optimierung ab 600 € pro Monat. Full-Service mit Content-Erstellung und Backlink-Aufbau ab 1.500 € pro Monat.',
      },
      {
        question: 'Wie lange dauert SEO bis erste Erfolge?',
        answer:
          'Erste messbare Ranking-Verbesserungen sind nach 3 Monaten realistisch, signifikante Effekte (Klicks, Traffic, Anfragen) meist nach 6–9 Monaten. SEO ist langfristig — wer schnell Klicks braucht, sollte zusätzlich Google Ads in Betracht ziehen.',
      },
      {
        question: 'Brauche ich SEO als kleiner Coburger Betrieb?',
        answer:
          'Ja, gerade kleine lokale Betriebe profitieren stark. Bei lokalen Suchen („webdesigner coburg") zeigt Google nur eine Handvoll Anbieter — wer in den Top 3 ist, bekommt den Großteil aller Klicks. Konkurrenz ist regional meist überschaubar.',
      },
      {
        question: 'Was ist Local SEO und Google Business Profile?',
        answer:
          'Local SEO optimiert Ihre Sichtbarkeit für regionale Suchen. Google Business Profile (ehemals My Business) ist der wichtigste Hebel — vollständig ausgefüllt, mit aktuellen Fotos, Öffnungszeiten und Bewertungen. Allein die Optimierung dieses Profils bringt oft +30 % Anfragen.',
      },
      {
        question: 'Was ist GEO und brauche ich das?',
        answer:
          'GEO (Generative Engine Optimization) optimiert Websites für KI-Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews. KI extrahiert einzelne Absätze aus Websites — strukturierte Daten und klare Faktenaussagen werden 30–50 % häufiger zitiert. Bei Digitalwerk ist GEO Standard, nicht Aufpreis.',
      },
    ],
    ctaHeadline: 'Mehr Sichtbarkeit auf Google',
    ctaSubline:
      'Im kostenlosen SEO-Erstgespräch analysieren wir Ihren aktuellen Stand und identifizieren die größten Hebel. 30 Minuten — danach wissen Sie, ob SEO für Sie sinnvoll ist.',
    baseServicePath: '/leistungen/seo',
    baseServiceLabel: 'Mehr zur Leistung SEO',
    priceRange: '€€',
  },
];

export function getLocalServiceBySlug(slug: string): LocalServiceData | undefined {
  return localServices.find((ls) => `${ls.service}-${ls.citySlug}` === slug);
}
