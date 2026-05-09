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
      'Webdesign aus Coburg von Pascal Krason: Websites für Handwerker, Praxen, Gastronomen und Mittelstand in Oberfranken — ohne Baukasten, mit fester Ansprechperson. Festpreis ab 3.000 Euro, persönlicher Kontakt vor Ort, in 4–6 Wochen online.',
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
      'Individuelle Webentwicklung aus Coburg: Web-Apps, Kundenportale, Schnittstellen und Custom-CMS-Lösungen. Pascal Krason, Fachinformatiker mit über 10 Jahren Erfahrung in Enterprise-Webentwicklung. Stack: Astro, React, TypeScript, Node.js, Laravel.',
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
        title: 'Engineering aus der Praxis',
        description:
          'Über zehn Jahre Engineering-Erfahrung aus großen Vergleichs- und E-Commerce-Plattformen. Skalierung, Sicherheit und Tooling auf Enterprise-Niveau, übertragen auf den Mittelstand.',
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

  // ─────────────────────────────────────────────────────────────
  // BAMBERG — Webdesign + SEO
  // ─────────────────────────────────────────────────────────────
  {
    service: 'webdesign',
    serviceLabel: 'Webdesign',
    city: 'Bamberg',
    citySlug: 'bamberg',
    region: 'Oberfranken',
    url: 'https://digitalwerk-coburg.de/webdesign-bamberg',
    title: 'Webdesign Bamberg | Digitalwerk Coburg',
    metaDescription:
      'Webdesign Bamberg ab 3.000 €. Persönlich aus Coburg, vor Ort in der UNESCO-Welterbestadt. Spezialisiert auf Hotels, Gastronomie und Innenstadt-Geschäfte.',
    heroBadge: 'Webdesign für Bamberg',
    heroHeadline: 'Webdesign Bamberg — Websites mit Welterbe-Standard',
    heroSubheadline:
      'Professionelle Websites für Unternehmen im UNESCO-Welterbe Bamberg. Festpreise, persönlicher Kontakt aus dem nahen Coburg, in 4–6 Wochen online — egal ob Hotel im Fischerviertel, Brauerei in der Sandstraße oder Universitätsdienstleister.',
    summary:
      'Webdesign aus Coburg für Unternehmen in Bamberg: Festpreis ab 3.000 Euro, persönliche Termine direkt in der Bamberger Innenstadt möglich, in 4–6 Wochen online. Spezialisiert auf Hotellerie, Gastronomie und Mittelstand im Welterbe-Umfeld.',
    trustHeadline: 'Warum ein Webdesigner aus Coburg für Bamberg?',
    trustPoints: [
      '40 Minuten Anfahrt von Coburg nach Bamberg — persönliche Workshops in der Sandstraße, am Domplatz oder bei Ihnen im Hotel sind schnell organisiert.',
      'Ich kenne den Bamberger Tourismusmarkt — Welterbe-Auszeichnung, 700.000 Übernachtungen pro Jahr, Universitätsstadt mit 12.000 Studierenden — und weiß, welche digitalen Hebel funktionieren.',
      'Festpreise statt Münchner Tagessätze — 3.000 € bis 8.000 € decken die meisten Bamberger Mittelstandsbetriebe ab.',
      'Lokale Konkurrenz ist überschaubar: 8–12 aktive Webdesign-Anbieter in Bamberg, davon wenige mit klarem Fokus auf Hotellerie und Gastronomie.',
    ],
    uniqueSelling: [
      {
        title: 'Hotel- und Gastronomie-Erfahrung',
        description:
          'Speisekarten-Pflege, Reservierungssysteme, mehrsprachige Inhalte (DE/EN/IT für italienische Touristen), Gallerie-Layouts für Foodfotografie — typische Anforderungen Bamberger Gastrobetriebe sind mir vertraut.',
      },
      {
        title: 'Mehrsprachigkeit als Standard',
        description:
          'Die UNESCO-Auszeichnung bringt internationales Publikum. EN als Zweitsprache ist im Festpreis möglich; IT, FR, NL auf Anfrage. Hreflang-Setup korrekt, kein Translate-Plugin.',
      },
      {
        title: 'DSGVO-konform für Datenkrake-skeptisches Publikum',
        description:
          'Lokal gehostete Schriften, kein Google Maps, kein Google Analytics — wichtig für Bamberger Apotheken, Praxen und Kanzleien, deren Mandanten Datensparsamkeit erwarten.',
      },
      {
        title: 'In 4–6 Wochen online',
        description:
          'Vom Erstgespräch in Bamberg bis Go-Live: 4–6 Wochen sind realistisch. Schneller, wenn Inhalte und Bildmaterial bereitstehen.',
      },
      {
        title: 'Eigene Pflege ohne IT-Abteilung',
        description:
          'Optional mit CMS — Sie pflegen Veranstaltungen, Speisekarten oder Aktionen selbst. Schulung im Festpreis enthalten, Dokumentation in deutscher Sprache.',
      },
      {
        title: 'Mobile First, Lighthouse 95+',
        description:
          'Über 60 % der Suchanfragen am Handy — gerade Touristen, die Bamberg spontan besuchen. Mobile-First-Design ist Standard, nicht Premium-Feature.',
      },
    ],
    pricingHeadline: 'Was kostet Webdesign in Bamberg?',
    pricingIntro:
      'Festpreis-Pakete von 3.000 € bis 8.000 €. Mehrsprachigkeit (EN als Zweitsprache) ist im Standard-Paket inklusive. Bei umfangreichen Buchungssystemen oder Kassensystem-Anbindung erstelle ich ein individuelles Angebot innerhalb von 48 Stunden.',
    pricingPackages: { basic: 'Basis (3.000 €)', advanced: 'Standard (5.000 €)', premium: 'Premium (8.000 €)' },
    pricingTable: [
      { feature: 'Anzahl Seiten', basic: '5', advanced: '10', premium: '20+' },
      { feature: 'Individuelles Design', basic: 'Vorlagen-basiert', advanced: 'Maßgeschneidert', premium: 'Voll individuell' },
      { feature: 'Mehrsprachigkeit (DE/EN)', basic: '—', advanced: 'Inkl.', premium: 'Inkl. + 3. Sprache' },
      { feature: 'CMS / selbst pflegbar', basic: '—', advanced: 'Inkl.', premium: 'Inkl. Schulung' },
      { feature: 'SEO-Grundlagen', basic: 'Inkl.', advanced: 'Inkl. + Keywordrecherche', premium: 'Inkl. + Strategie' },
      { feature: 'DSGVO-Setup', basic: 'Inkl.', advanced: 'Inkl.', premium: 'Inkl.' },
      { feature: 'Realisierungszeit', basic: '3–4 Wochen', advanced: '4–6 Wochen', premium: '6–10 Wochen' },
      { feature: 'Vor-Ort-Termine in Bamberg', basic: '1', advanced: '2–3', premium: 'Unbegrenzt' },
      { feature: 'Support nach Go-Live', basic: '3 Monate', advanced: '6 Monate', premium: '12 Monate' },
    ],
    localHeadline: 'Wer profitiert in Bamberg von professionellem Webdesign?',
    localIntro:
      'Bamberger Betriebe haben oft mehr lokale Konkurrenz als Coburg, aber auch ein größeres Publikum durch Welterbe-Tourismus und Universität. Vier Beispielszenarien aus der Bamberger Wirtschaft:',
    localReferences: [
      {
        title: 'Hotel im Bamberger Welterbe',
        description:
          'Familiengeführtes 4-Sterne-Hotel im Fischerviertel sucht Direktbuchungen statt Booking.com-Provisionen. Eine optimierte Website mit eigenem Buchungswidget, mehrsprachigen Inhalten und SEO-Fokus auf "Hotel Bamberg Welterbe" reduziert die Plattform-Abhängigkeit deutlich.',
      },
      {
        title: 'Brauereigaststätte in der Sandstraße',
        description:
          'Traditionsbrauerei mit angeschlossener Wirtschaft möchte Online-Reservierung und digitale Speisekarte. Eine moderne Website mit Foodfotografie und mobiler Reservierung ersetzt das ständige Telefonklingeln.',
      },
      {
        title: 'Anwaltskanzlei am Domplatz',
        description:
          'Mittelständische Kanzlei mit fünf Anwält:innen positioniert sich für Mandanten aus Bamberg und Forchheim. Klare Service-Übersicht, Anwalts-Profile und Mandantenportal heben sich vom regionalen Wettbewerb ab.',
      },
      {
        title: 'Universitätsdienstleister in Bamberg-Ost',
        description:
          'Anbieter rund um die Otto-Friedrich-Universität (Druckdienste, IT-Support für Studierende) braucht eine Website, die zwei Zielgruppen trennt: Studierende mit knappen Budgets und Universität mit Verwaltungsabläufen.',
      },
    ],
    processHeadline: 'Wie läuft ein Webdesign-Projekt in Bamberg ab?',
    processIntro:
      'Der Ablauf folgt dem gleichen 6-Schritte-Prozess wie für Coburger Projekte. Bei Bedarf treffen wir uns bei Ihnen vor Ort in Bamberg — Sandstraße, Domplatz oder im Hotel.',
    faqs: [
      {
        question: 'Kommen Sie aus Coburg nach Bamberg vor Ort?',
        answer:
          'Ja — Bamberg liegt etwa 40 Minuten von Coburg entfernt. Persönliche Workshops im Bamberger Welterbe oder in Ihrem Hotel/Geschäft sind ohne Anfahrtspauschale möglich. Bei größeren Projekten plane ich 2–3 Vor-Ort-Termine ein.',
      },
      {
        question: 'Spezialisieren Sie sich auf Bamberger Tourismus und Hotellerie?',
        answer:
          'Tourismus ist ein Schwerpunkt — mehrsprachige Websites, Buchungswidgets, Foodfotografie-Layouts und Reservierungssysteme gehören zum Standard. Bei sehr großen Hotels mit Channel-Manager-Integrationen empfehle ich gezielt spezialisierte Anbieter mit OTA-Schnittstellen-Erfahrung.',
      },
      {
        question: 'Was kostet Webdesign in Bamberg im Vergleich zu Nürnberg oder München?',
        answer:
          'Mein Festpreis-Paket-Spektrum reicht von 3.000 bis 8.000 Euro — vergleichbar mit anderen Coburger und Bamberger Anbietern, deutlich unter Münchner Agentur-Tagessätzen (oft 1.200 € pro Tag). Großstadt-Agenturen sind nicht zwingend besser, nur teurer.',
      },
      {
        question: 'Bauen Sie Buchungssysteme für Hotels selbst oder nutzen Sie Plattformen?',
        answer:
          'Beides möglich. Für kleine Hotels mit bis zu 20 Zimmern sind Plattformen wie Beds24 oder ProBooking oft die effizienteste Wahl — ich integriere sie sauber in Ihre Website. Bei eigener Geschäftslogik (Hochzeitspakete, Tagungsräume) entwickle ich custom Lösungen.',
      },
      {
        question: 'Können Sie auch ohne Vor-Ort-Termine arbeiten?',
        answer:
          'Selbstverständlich. Komplette Remote-Projekte sind problemlos möglich — Briefing per Video, Kollaboration über Figma und Miro, wöchentliche Sprint-Reviews. Etwa die Hälfte meiner Bamberger Projekte läuft remote.',
      },
    ],
    ctaHeadline: 'Ihr Webdesigner für Bamberg',
    ctaSubline:
      'Lassen Sie uns in einem kostenlosen Erstgespräch über Ihr Projekt sprechen. Per Telefon, Video oder direkt vor Ort in Bamberg — wie es Ihnen besser passt.',
    baseServicePath: '/leistungen/webdesign',
    baseServiceLabel: 'Mehr zur Leistung Webdesign',
    priceRange: '€€',
  },
  {
    service: 'seo',
    serviceLabel: 'SEO',
    city: 'Bamberg',
    citySlug: 'bamberg',
    region: 'Oberfranken',
    url: 'https://digitalwerk-coburg.de/seo-bamberg',
    title: 'SEO Bamberg | Digitalwerk Coburg',
    metaDescription:
      'SEO und Local SEO aus Coburg für Bamberger Unternehmen. Mehr Sichtbarkeit auf Google im Welterbe-Tourismus, in Innenstadt-Branchen und im Universitätsumfeld. Audit ab 1.500 €.',
    heroBadge: 'SEO für Bamberg',
    heroHeadline: 'SEO Bamberg — Sichtbar im Welterbe-Tourismus und in der Innenstadt',
    heroSubheadline:
      'Suchmaschinenoptimierung mit Bamberger Fokus. Damit Touristen, Studierende und Geschäftskunden Ihr Hotel, Restaurant oder Beratungsangebot bei Google finden — wenn sie genau danach suchen.',
    summary:
      'SEO und Local SEO aus Coburg für Bamberger Unternehmen: Audit ab 1.500 € einmalig, Local-SEO-Betreuung ab 600 €/Monat. Spezialisiert auf Welterbe-Tourismus, Hotellerie, Innenstadt-Geschäfte und Universitätsumfeld. Erste Effekte nach 3 Monaten.',
    trustHeadline: 'Warum SEO mit Bamberg-Bezug?',
    trustPoints: [
      'Bamberg hat ein einzigartiges Suchprofil: 50 % Tourismus-Suchen ("hotel bamberg welterbe"), 30 % Innenstadt-Geschäfte ("brauerei bamberg sandstraße"), 20 % Universität-Umfeld ("studentenwohnung bamberg") — die Strategie unterscheidet sich pro Cluster.',
      'Google Maps-Pack ist im Tourismus-Sektor der wichtigste Hebel — wer dort die Top 3 belegt, gewinnt 60 %+ aller Klicks bei "Hotel Bamberg" oder "Restaurant Bamberg".',
      'Die Konkurrenz ist sektoral unterschiedlich — bei Hotels intensiv (Booking.com dominiert), bei spezialisierten Dienstleistungen oft moderat.',
      'Bamberg-spezifische Keywords ("Welterbe", "Inselstadt", "Bergstadt", "Sandstraße") sind suchstark und werden meist nur von Top-3-Anbietern genutzt.',
    ],
    uniqueSelling: [
      {
        title: 'Tourismus-SEO-Erfahrung',
        description:
          'Hotels und Restaurants mit Welterbe-Bezug brauchen andere Schwerpunkte als regionale Handwerksbetriebe. Mehrsprachige SEO (DE/EN), Buchungs-Schema, GPP-Pflege mit Foodfotos — gehört zum Standard-Repertoire.',
      },
      {
        title: 'Local SEO für Bambergs Innenstadt',
        description:
          'Google Business Profile-Optimierung, Local-Citations bei Bamberger Branchenverzeichnissen (IHK Oberfranken, Stadt Bamberg, fränkisch-Erleben.de) und konsistente NAP-Daten über alle Plattformen.',
      },
      {
        title: 'Technisches SEO ohne Geschwafel',
        description:
          'Core Web Vitals, Schema.org-Markup für Hotels und Restaurants, robots.txt, sitemap.xml. Die technische Basis muss stimmen, bevor Content-SEO greift — gerade bei Tourismus-Webseiten oft verbesserbar.',
      },
      {
        title: 'GEO — KI-Suchmaschinen-Optimierung',
        description:
          'ChatGPT, Perplexity und Google AI Overviews zitieren Bamberger Hotels und Restaurants verstärkt — wer dort als Empfehlung erscheint, gewinnt zunehmend Buchungsanteile. Strukturierte Daten und klare Faktenaussagen sind die Hebel.',
      },
      {
        title: 'Mehrsprachiges Content-Marketing',
        description:
          'Englische Reiseführer-Artikel, italienische Speisekarten-Beschreibungen, niederländische Tourismus-Hinweise — mehrsprachige Inhalte erweitern Ihre Reichweite spürbar im Welterbe-Tourismus.',
      },
      {
        title: 'Transparente Reports auf Deutsch',
        description:
          'Monatlicher Report mit Rankings, Klicks, Buchungsverläufen, Backlink-Profil. Plausible-Tracking DSGVO-konform — kein Google Analytics, keine Cookie-Wand.',
      },
    ],
    pricingHeadline: 'Was kostet SEO in Bamberg?',
    pricingIntro:
      'SEO-Beratung startet bei einmalig 1.500 € (Audit + Quick-Wins). Laufende Local-SEO-Betreuung ab 600 €/Monat. Erste Ranking-Effekte nach 3 Monaten realistisch — substanzielle Verbesserungen bei Hotel-Keywords meist nach 6–9 Monaten.',
    pricingPackages: { basic: 'Audit (1.500 €)', advanced: 'Local SEO (ab 600 €/M)', premium: 'Full-Service (ab 1.500 €/M)' },
    pricingTable: [
      { feature: 'Initial-Audit', basic: 'Inkl.', advanced: 'Inkl.', premium: 'Inkl.' },
      { feature: 'Google Business Profile', basic: 'Quick-Wins', advanced: 'Optimierung + Pflege', premium: 'Voll betreut' },
      { feature: 'Technisches SEO', basic: 'Audit', advanced: 'Umsetzung', premium: 'Umsetzung + Monitoring' },
      { feature: 'Mehrsprachiges SEO (DE/EN)', basic: '—', advanced: 'Auf Anfrage', premium: 'Inkl.' },
      { feature: 'Content / Blog', basic: '—', advanced: '1 Artikel/Monat', premium: '2–4 Artikel/Monat' },
      { feature: 'Backlink-Aufbau (lokal)', basic: '—', advanced: 'Bamberger Citations', premium: 'Kampagnen + Outreach' },
      { feature: 'Monitoring & Reports', basic: 'Einmalig', advanced: 'Monatlich', premium: 'Wöchentlich' },
      { feature: 'Strategie-Calls', basic: '1', advanced: 'Monatlich', premium: 'Wöchentlich' },
      { feature: 'Vertragslaufzeit', basic: 'Einmalig', advanced: 'Ab 6 Monate', premium: 'Ab 12 Monate' },
    ],
    localHeadline: 'Welche Bamberger Branchen profitieren am stärksten von SEO?',
    localIntro:
      'Local SEO wirkt am stärksten dort, wo Suchanfragen mit Stadt- oder Stadtteilbezug einhergehen. Vier Branchen, in denen SEO in Bamberg messbaren ROI bringt:',
    localReferences: [
      {
        title: 'Hotels und Pensionen im Welterbe',
        description:
          'Suchanfragen wie "hotel bamberg innenstadt", "boutique hotel welterbe" oder "ferienwohnung sandstraße" haben hohe Conversion-Rate. Die Top-3-Hotels für diese Begriffe gewinnen den Großteil der Direktbuchungen.',
      },
      {
        title: 'Brauereien, Wirtschaften und Restaurants',
        description:
          'Bamberg hat 11 aktive Brauereien — die höchste Dichte Deutschlands. Suchanfragen "brauerei bamberg", "schlenkerla rauchbier" oder "restaurant bamberg innenstadt" haben enormes Volumen, gerade kombiniert mit Tourismus-Saisonalität.',
      },
      {
        title: 'Universitätsdienstleister und Studierenden-Angebote',
        description:
          'Mit 12.000 Studierenden ist die Otto-Friedrich-Universität ein erheblicher Markt. Suchanfragen "studentenwohnung bamberg", "kopierladen feki", "fahrradverleih bamberg" sind saisonal stark.',
      },
      {
        title: 'Kanzleien, Steuerberater, Wirtschaftsprüfer',
        description:
          'Bamberger Mittelstand sucht regional ("steuerberater bamberg innenstadt", "anwalt bamberg arbeitsrecht"). ROI pro Mandat ist oft 4-stellig — entsprechend hoch die SEO-Wirtschaftlichkeit.',
      },
    ],
    processHeadline: 'Wie läuft SEO-Betreuung in Bamberg ab?',
    processIntro:
      'SEO ist ein laufender Prozess, kein einmaliges Projekt. Der Start folgt einem klaren 6-Schritte-Plan; danach monatliche Maßnahmen mit Vor-Ort- oder Remote-Strategie-Calls.',
    faqs: [
      {
        question: 'Was kostet SEO in Bamberg?',
        answer:
          'SEO-Beratung startet bei einmalig 1.500 € für ein Audit mit Quick-Wins. Laufende Local-SEO-Betreuung mit Google-Business-Profile-Pflege und technischer Optimierung ab 600 € pro Monat. Full-Service mit Content und Backlink-Aufbau ab 1.500 € pro Monat.',
      },
      {
        question: 'Brauchen Bamberger Hotels eigene SEO-Strategie?',
        answer:
          'Ja, definitiv. Hotel-SEO unterscheidet sich erheblich von z.B. Handwerker-SEO: Buchungs-Schema, Foodfotos, mehrsprachige Inhalte, Google-Reise-Suche, Channel-Manager-Integration. Wer hier mit allgemeinen SEO-Maßnahmen arbeitet, verliert gegenüber spezialisierten Wettbewerbern.',
      },
      {
        question: 'Wie wichtig ist mehrsprachiges SEO für Bamberg?',
        answer:
          'Sehr — etwa 30 % der Bamberger Tourismus-Suchen kommen aus dem Ausland. Englisch ist Pflicht, Italienisch und Französisch lohnen für Hotels und Spitzengastronomie. Korrektes Hreflang-Setup verhindert dabei, dass Google die Sprachversionen als Duplicate-Content wertet.',
      },
      {
        question: 'Wie lange dauert es, bis SEO in Bamberg wirkt?',
        answer:
          'Erste messbare Effekte nach 3 Monaten realistisch — etwa Sichtbarkeit für mittelfeste Long-Tail-Keywords. Substanzielle Verbesserungen bei umkämpften Keywords wie "hotel bamberg" oder "restaurant bamberg innenstadt" meist nach 6–9 Monaten kontinuierlicher Arbeit.',
      },
      {
        question: 'Sind Bamberger Mitbewerber SEO-stark?',
        answer:
          'Sehr unterschiedlich. Große Hotels und Booking.com-Listings besetzen die Top-Positionen oft seit Jahren — Direktbuchungen erfordern Geduld. Bei spezialisierten Dienstleistungen, Kanzleien oder Universitäts-Umfeld ist der Wettbewerb oft moderat, Top-3-Rankings nach 6 Monaten realistisch.',
      },
    ],
    ctaHeadline: 'Mehr Sichtbarkeit für Ihr Bamberger Unternehmen',
    ctaSubline:
      'Im kostenlosen 30-Min-Erstgespräch analysieren wir Ihren aktuellen Stand und identifizieren die größten Hebel für Bamberg-spezifische Sichtbarkeit. Ergebnisoffen, ohne Verkaufsdruck.',
    baseServicePath: '/leistungen/seo',
    baseServiceLabel: 'Mehr zur Leistung SEO',
    priceRange: '€€',
  },

  // ─────────────────────────────────────────────────────────────
  // KRONACH — Webdesign + SEO
  // ─────────────────────────────────────────────────────────────
  {
    service: 'webdesign',
    serviceLabel: 'Webdesign',
    city: 'Kronach',
    citySlug: 'kronach',
    region: 'Oberfranken',
    url: 'https://digitalwerk-coburg.de/webdesign-kronach',
    title: 'Webdesign Kronach | Digitalwerk Coburg',
    metaDescription:
      'Webdesign Kronach ab 3.000 €. Persönlich vor Ort am Fuß der Festung Rosenberg. Spezialisiert auf Familienbetriebe, Holz- und Möbelhandwerk, Kleinstadt-Mittelstand.',
    heroBadge: 'Webdesign für Kronach',
    heroHeadline: 'Webdesign Kronach — Websites am Fuß der Festung Rosenberg',
    heroSubheadline:
      'Professionelle Websites für Kronacher Betriebe — von der Holzmöbel-Manufaktur bis zum Familienhandwerk. Persönlich aus Coburg, 25 Minuten Anfahrt, Festpreis ab 3.000 Euro, ohne Großstadt-Aufschlag.',
    summary:
      'Webdesign aus Coburg für Kronacher Unternehmen: Festpreis ab 3.000 Euro, Treffen vor Ort in Kronach, in 4–6 Wochen online. Spezialisiert auf Familienbetriebe, Möbel- und Holzhandwerk, regionale Mittelständler im Frankenwald-Vorland.',
    trustHeadline: 'Warum ein Webdesigner aus Coburg für Kronach?',
    trustPoints: [
      '25 Minuten Anfahrt — Treffen am Marktplatz, in Ihrer Werkstatt oder am Fuß der Festung Rosenberg sind problemlos vor Ort möglich.',
      'Ich kenne den Kronacher Mittelstand — Loewe Technology, Möbelindustrie im Rodachtal, traditionelles Holzhandwerk im Frankenwald.',
      'Lokale Webdesign-Konkurrenz ist überschaubar (3–5 aktive Anbieter in Kronach selbst) — gute Voraussetzung für Top-3-Rankings bei "Webdesign Kronach".',
      'Festpreise statt Tagessatz-Falle — 3.000 € bis 8.000 € decken Familienbetriebe und mittelständische Manufakturen ab.',
    ],
    uniqueSelling: [
      {
        title: 'Familien- und Handwerks-Erfahrung',
        description:
          'Familienbetriebe ticken anders als Konzerne — Geschichte, Tradition, persönliche Beziehungen sind oft wichtiger als hipper Tech-Stack. Mein Webdesign vermittelt das ohne kitschige Klischees.',
      },
      {
        title: 'Möbel- und Holzhandwerk-Spezial',
        description:
          'Galerie-Layouts für hochwertige Produktfotografie, Konfigurator-Vorbereitung für Massmöbel, integrierte Gewerks-Anfrage-Formulare — typische Anforderungen Kronacher Manufakturen sind mir vertraut.',
      },
      {
        title: 'DSGVO-konform für vertrauensorientiertes Publikum',
        description:
          'Lokale Schriften, kein Google Maps, kein Google Analytics — wichtig für Kronacher Praxen, Steuerberater und Kanzleien, deren Mandanten Datensparsamkeit erwarten.',
      },
      {
        title: 'In 4–6 Wochen online',
        description:
          'Vom Erstgespräch in Kronach bis Go-Live: 4–6 Wochen sind realistisch. Schneller, wenn Inhalte und Bildmaterial bereitstehen — bei klassischen Handwerksbetrieben oft erstmal eine Foto-Aufnahme nötig.',
      },
      {
        title: 'Eigene Pflege ohne Programmierkenntnisse',
        description:
          'Optional mit CMS — Sie pflegen Referenzen, Termine oder neue Produktbilder selbst. Schulung im Festpreis enthalten, Dokumentation in einfacher deutscher Sprache.',
      },
      {
        title: 'Mobile First, Lighthouse 95+',
        description:
          'Über 60 % der Anfragen kommen mobil — gerade bei Handwerks-Suchen ("schreiner kronach", "dachdecker frankenwald"). Mobile-First ist Standard, nicht Premium-Feature.',
      },
    ],
    pricingHeadline: 'Was kostet Webdesign in Kronach?',
    pricingIntro:
      'Festpreis-Pakete von 3.000 € bis 8.000 €. Bildaufnahmen vor Ort (typisch für Handwerks-Webseiten) rechne ich separat ab — etwa 200–400 € für einen halben Tag inklusive Bildbearbeitung.',
    pricingPackages: { basic: 'Basis (3.000 €)', advanced: 'Standard (5.000 €)', premium: 'Premium (8.000 €)' },
    pricingTable: [
      { feature: 'Anzahl Seiten', basic: '5', advanced: '10', premium: '20+' },
      { feature: 'Individuelles Design', basic: 'Vorlagen-basiert', advanced: 'Maßgeschneidert', premium: 'Voll individuell' },
      { feature: 'Galerie-Layout für Produkte', basic: '—', advanced: 'Inkl.', premium: 'Inkl. + Filter' },
      { feature: 'CMS / selbst pflegbar', basic: '—', advanced: 'Inkl.', premium: 'Inkl. Schulung' },
      { feature: 'SEO-Grundlagen', basic: 'Inkl.', advanced: 'Inkl. + Keywordrecherche', premium: 'Inkl. + Strategie' },
      { feature: 'DSGVO-Setup', basic: 'Inkl.', advanced: 'Inkl.', premium: 'Inkl.' },
      { feature: 'Realisierungszeit', basic: '3–4 Wochen', advanced: '4–6 Wochen', premium: '6–10 Wochen' },
      { feature: 'Vor-Ort-Termine in Kronach', basic: '1', advanced: '2–3', premium: 'Unbegrenzt' },
      { feature: 'Support nach Go-Live', basic: '3 Monate', advanced: '6 Monate', premium: '12 Monate' },
    ],
    localHeadline: 'Wer profitiert in Kronach von professionellem Webdesign?',
    localIntro:
      'Kronach ist eine Kleinstadt mit überdurchschnittlich starkem Handwerk und Möbel-Sektor. Drei typische Beispielszenarien aus der Kronacher Wirtschaft:',
    localReferences: [
      {
        title: 'Möbelmanufaktur im Rodachtal',
        description:
          'Familienbetrieb in dritter Generation fertigt Massmöbel aus heimischem Eichenholz. Eine moderne Website mit Produktgalerie, Werkstatt-Einblicken und einfachem Anfrageformular gewinnt monatlich 3–5 qualifizierte Anfragen aus ganz Bayern.',
      },
      {
        title: 'Holzbau-Unternehmen am Frankenwald-Rand',
        description:
          'Handwerksbetrieb mit 12 Mitarbeitenden braucht Online-Präsenz für Hausbau und Sanierungen. Eine SEO-optimierte Website mit Referenzprojekten und Kronach-Bezug bringt regelmäßig Anfragen — ohne teure Anzeigen im Fränkischen Tag.',
      },
      {
        title: 'Steuerkanzlei am Marktplatz Kronach',
        description:
          'Kanzlei mit fünf Mitarbeitenden positioniert sich für Mandanten aus Kronach, Lichtenfels und dem Frankenwald. Klare Service-Übersicht, Mitarbeiter-Profile und Mandantenportal erlauben effiziente Mandantenkommunikation.',
      },
      {
        title: 'Tourismusbetrieb am Fuß der Festung Rosenberg',
        description:
          'Pension oder Restaurant mit Festungs-Blick will Direktbuchungen statt Booking.com-Provisionen. Eine Website mit eigenem Buchungswidget und Foto-Galerie der Festung erhöht den direkten Reservierungsanteil deutlich.',
      },
    ],
    processHeadline: 'Wie läuft ein Webdesign-Projekt in Kronach ab?',
    processIntro:
      'Der Ablauf folgt dem 6-Schritte-Prozess. Bei Bedarf treffen wir uns vor Ort in Ihrer Werkstatt, Praxis oder Kanzlei in Kronach.',
    faqs: [
      {
        question: 'Kommen Sie aus Coburg nach Kronach vor Ort?',
        answer:
          'Ja — Kronach liegt etwa 25 Minuten von Coburg entfernt. Persönliche Treffen in Ihrer Werkstatt, Praxis oder am Marktplatz Kronach sind ohne Anfahrtspauschale möglich. Bei größeren Projekten plane ich 2–3 Vor-Ort-Termine ein.',
      },
      {
        question: 'Spezialisieren Sie sich auf Familien- und Handwerksbetriebe?',
        answer:
          'Ja, das ist ein Schwerpunkt — etwa 30 % meiner Mandate sind Handwerks- oder Familienbetriebe in Coburg, Kronach und Lichtenfels. Galerie-Layouts, Werkstatt-Fotografie, einfache Anfrageformulare und SEO-Schwerpunkt auf Long-Tail-Branchenkeywords gehören zum Standard.',
      },
      {
        question: 'Was kostet Webdesign für einen Kronacher Handwerksbetrieb?',
        answer:
          'Klassische 5-Seiten-Visitenkarten-Websites mit Galerie und Kontaktformular liegen im Basis-Paket bei 3.000 €. Wenn Sie Bilder bereitstellen können, ist das oft ausreichend. Mit eigener Bildaufnahme vor Ort, CMS und SEO-Optimierung werden es 5.000 € (Standard).',
      },
      {
        question: 'Brauche ich überhaupt eine Website als Kronacher Handwerker?',
        answer:
          'Statistisch ja: 60 % der Suchanfragen für Handwerker kommen mobil, 80 % der Auftraggeber prüfen vor der Anfrage online. Wer keine Website hat, wird zunehmend übersehen. Schon eine schlanke Visitenkarten-Site mit Kontaktdaten und 3–5 Referenzbildern macht den Unterschied.',
      },
      {
        question: 'Hosten Sie die Website auch?',
        answer:
          'Ich richte das Hosting bei Hetzner Falkenstein ein (DSGVO-konform, Server in Deutschland). Kosten: 5–15 € pro Monat. Sie schließen den Vertrag direkt mit Hetzner — ich betreibe das Hosting nicht selbst, das vermeidet Abhängigkeit von mir als Einzelunternehmer.',
      },
    ],
    ctaHeadline: 'Ihr Webdesigner für Kronach',
    ctaSubline:
      'Lassen Sie uns in einem kostenlosen Erstgespräch über Ihr Projekt sprechen. Persönlich in Kronach oder per Telefon — wie es Ihnen besser passt.',
    baseServicePath: '/leistungen/webdesign',
    baseServiceLabel: 'Mehr zur Leistung Webdesign',
    priceRange: '€€',
  },
  {
    service: 'seo',
    serviceLabel: 'SEO',
    city: 'Kronach',
    citySlug: 'kronach',
    region: 'Oberfranken',
    url: 'https://digitalwerk-coburg.de/seo-kronach',
    title: 'SEO Kronach | Digitalwerk Coburg',
    metaDescription:
      'SEO und Local SEO aus Coburg für Kronacher Betriebe. Wenig Konkurrenz, schnelle Top-3-Rankings möglich — gerade für Handwerk, Möbelmanufakturen und Tourismus rund um die Festung Rosenberg.',
    heroBadge: 'SEO für Kronach',
    heroHeadline: 'SEO Kronach — Sichtbarkeitslücken in einer kleinen Stadt nutzen',
    heroSubheadline:
      'Suchmaschinenoptimierung für Kronacher Betriebe. Genau weil die Stadt klein ist, sind Top-3-Rankings für Branchen-Keywords oft binnen 6 Monaten erreichbar — wenn die Grundlagen stimmen. Audit ab 1.500 €.',
    summary:
      'SEO und Local SEO aus Coburg für Kronacher Unternehmen: Audit ab 1.500 € einmalig, Local-SEO-Betreuung ab 600 €/Monat. Spezialisiert auf Handwerk, Möbel-/Holzmanufakturen und regionale Tourismusbetriebe rund um die Festung Rosenberg. Top-3-Rankings oft in 4–6 Monaten erreichbar.',
    trustHeadline: 'Warum lohnt sich SEO für Kronacher Betriebe besonders?',
    trustPoints: [
      'Kleinstadt-Vorteil: Bei Suchanfragen wie "dachdecker kronach" oder "möbelmanufaktur frankenwald" gibt es oft nur 5–8 ernsthafte Wettbewerber — gute Top-3-Chancen mit moderatem Budget.',
      'Google Maps-Pack ist Hauptverkehrsweg im ländlichen Raum — wer dort die Top 3 belegt, gewinnt fast alle Klicks bei Branche-+-Stadt-Suchen.',
      'Lokale Backlinks sind in Kronach besonders wirkungsvoll — IHK Coburg, Wirtschaftsregion Hochfranken, Handwerkskammer Bayreuth, Frankenwald-Tourismus.',
      'Voice Search ("OK Google, Schreiner in der Nähe") gewinnt im ländlichen Raum schneller an Bedeutung als in Städten — speziell bei Mobile-Suchen aus dem Auto.',
    ],
    uniqueSelling: [
      {
        title: 'Wettbewerbs-Schwachstellen in Kronach',
        description:
          'Viele Kronacher Betriebe haben gar keine Website oder eine veraltete Visitenkarten-Site ohne SEO. Das ist Ihre Chance — schon Standard-Optimierung katapultiert Sie auf Top-Plätze, die in größeren Städten 12+ Monate Arbeit kosten würden.',
      },
      {
        title: 'Handwerks-Local-SEO mit Long-Tail',
        description:
          'Statt nur "schreiner kronach" auch "schreiner sanierungsfenster kronach", "möbeltischler frankenwald", "holzbau-firma rodachtal" — weniger Konkurrenz, höhere Conversion-Rate.',
      },
      {
        title: 'Google Business Profile-Pflege',
        description:
          'Vollständig ausgefülltes Profil, regelmäßige Foto-Uploads, Öffnungszeiten aktuell, aktiv um Bewertungen gebeten. Das alleine bringt im Schnitt 30 % mehr lokale Anfragen.',
      },
      {
        title: 'Technisches SEO als Standard',
        description:
          'Core Web Vitals, Schema.org-Markup, robots.txt, sitemap.xml, Crawling-Optimierung. Die technische Basis muss stimmen, bevor Content-SEO greift.',
      },
      {
        title: 'GEO — KI-Suchmaschinen-Optimierung',
        description:
          'ChatGPT, Perplexity, Google AI Overviews zitieren Kronacher Betriebe nur, wenn die Website strukturierte Daten und klare Faktenaussagen liefert. Bei Digitalwerk ist GEO Standard, nicht Aufpreis.',
      },
      {
        title: 'Transparente Reports für Kronacher Mandanten',
        description:
          'Monatlicher Report: Rankings, Klicks, Anfrageverläufe. Verständliche Sprache statt SEO-Fachchinesisch — speziell für Familienbetriebe wichtig, wo nicht alle entscheidenden Personen technisch tief eingestiegen sind.',
      },
    ],
    pricingHeadline: 'Was kostet SEO in Kronach?',
    pricingIntro:
      'SEO-Beratung startet bei einmalig 1.500 € (Audit + Quick-Wins). Local-SEO-Betreuung ab 600 €/Monat. In Kronach besonders effizient, weil moderate Konkurrenz schneller messbare Ergebnisse zulässt — Top-3-Rankings für Branchen-Keywords sind oft in 4–6 Monaten erreichbar.',
    pricingPackages: { basic: 'Audit (1.500 €)', advanced: 'Local SEO (ab 600 €/M)', premium: 'Full-Service (ab 1.500 €/M)' },
    pricingTable: [
      { feature: 'Initial-Audit', basic: 'Inkl.', advanced: 'Inkl.', premium: 'Inkl.' },
      { feature: 'Google Business Profile', basic: 'Quick-Wins', advanced: 'Optimierung + Pflege', premium: 'Voll betreut' },
      { feature: 'Technisches SEO', basic: 'Audit', advanced: 'Umsetzung', premium: 'Umsetzung + Monitoring' },
      { feature: 'Content / Blog', basic: '—', advanced: '1 Artikel/Monat', premium: '2–4 Artikel/Monat' },
      { feature: 'Lokale Backlinks (IHK, HWK, Frankenwald-Tourismus)', basic: '—', advanced: 'Inkl.', premium: 'Aktiver Outreach' },
      { feature: 'Monitoring & Reports', basic: 'Einmalig', advanced: 'Monatlich', premium: 'Wöchentlich' },
      { feature: 'Strategie-Calls', basic: '1', advanced: 'Monatlich', premium: 'Wöchentlich' },
      { feature: 'Vertragslaufzeit', basic: 'Einmalig', advanced: 'Ab 6 Monate', premium: 'Ab 12 Monate' },
    ],
    localHeadline: 'Welche Kronacher Branchen profitieren am stärksten von SEO?',
    localIntro:
      'Local SEO wirkt am stärksten dort, wo Anfragen mit Stadt- oder Regionsbezug einhergehen. Vier Beispielsfelder aus der Kronacher Wirtschaft:',
    localReferences: [
      {
        title: 'Handwerk und Bauunternehmen',
        description:
          'Suchanfragen wie "dachdecker kronach", "elektriker frankenwald" oder "schreiner rodach" haben hohe Conversion-Rate. Wer auf Seite 1 der lokalen Suche steht, gewinnt Anfragen — Konkurrenz oft nur 5–10 Anbieter pro Branche.',
      },
      {
        title: 'Möbel- und Holzmanufakturen',
        description:
          'Kronach und das Rodachtal haben Tradition im Möbel- und Holzhandwerk. Suchanfragen "massivholzmöbel frankenwald", "individueller möbelbau oberfranken" haben überregionale Reichweite — mit gutem SEO werden Sie auch in Erlangen oder Bayreuth gefunden.',
      },
      {
        title: 'Tourismusbetriebe rund um die Festung Rosenberg',
        description:
          'Pensionen, Ferienwohnungen, Restaurants mit Festungs-Blick. Suchanfragen "übernachtung festung rosenberg", "essen kronach altstadt", "ausflugslokal frankenwald" sind saisonal stark — gerade von Mai bis Oktober.',
      },
      {
        title: 'Kanzleien und Steuerberater',
        description:
          'Mandanten googeln "steuerberater kronach", "anwalt familienrecht oberfranken". Wer hier sichtbar ist, gewinnt qualifizierte Anfragen — Wert pro Mandat oft 4-stellig, ROI von SEO entsprechend hoch.',
      },
    ],
    processHeadline: 'Wie läuft SEO-Betreuung in Kronach ab?',
    processIntro:
      'Der Start folgt einem klaren 6-Schritte-Plan; danach monatliche Maßnahmen mit Strategie-Calls. Bei Bedarf treffen wir uns vor Ort in Kronach.',
    faqs: [
      {
        question: 'Lohnt sich SEO in einer Kleinstadt wie Kronach?',
        answer:
          'Ja, gerade dort. Weil die Konkurrenz kleiner ist, sind Top-3-Rankings für Branchen-Keywords oft in 4–6 Monaten erreichbar — in Großstädten dauert das 12 Monate plus. Der ROI in Kronach ist häufig schneller als in München oder Nürnberg.',
      },
      {
        question: 'Wie lange dauert es, bis ich erste Effekte sehe?',
        answer:
          'Ranking-Verbesserungen sind nach 3 Monaten messbar, Top-3-Positionen für lokale Branchen-Keywords häufig nach 4–6 Monaten. Bewertungen-Velocity und Google-Business-Profile-Aktivität wirken oft schon nach 4–8 Wochen.',
      },
      {
        question: 'Welche Backlinks sind für Kronacher Betriebe relevant?',
        answer:
          'IHK Coburg (für Mitglieder), Handwerkskammer Bayreuth (Pflicht-Mitgliedschaft für Handwerk), Wirtschaftsregion Hochfranken, Frankenwald-Tourismus, Stadt Kronach (Branchenverzeichnis), regionale Vereine und Sponsorships. Diese Links sind oft kostenlos und thematisch passgenau.',
      },
      {
        question: 'Wie wichtig ist Voice Search im ländlichen Raum?',
        answer:
          'Wachstumsstark — gerade Mobile-Suchen aus dem Auto ("OK Google, Schreiner in der Nähe") nehmen jährlich um zweistellige Prozentsätze zu. FAQ-Inhalte und natürliche Sprache in den Texten sind die wichtigsten Voice-Search-SEO-Hebel.',
      },
      {
        question: 'Brauche ich Google Analytics für SEO-Reporting?',
        answer:
          'Nein. Ich nutze Plausible (DSGVO-konform, in Deutschland gehostet, ohne Cookie-Wand) — gibt für Local-SEO-Zwecke alle relevanten Daten her: Rankings, Klicks, Verweildauer, Konversionsraten. Das spart die Cookie-Banner und nervt Ihre Kund:innen nicht.',
      },
    ],
    ctaHeadline: 'Mehr Anfragen aus Kronach und dem Frankenwald',
    ctaSubline:
      'Im kostenlosen 30-Min-Erstgespräch analysieren wir Ihren aktuellen Stand und identifizieren die größten Hebel für Kronacher Sichtbarkeit. Ergebnisoffen, ohne Verkaufsdruck.',
    baseServicePath: '/leistungen/seo',
    baseServiceLabel: 'Mehr zur Leistung SEO',
    priceRange: '€€',
  },

  // ─────────────────────────────────────────────────────────────
  // LICHTENFELS — Webdesign + SEO
  // ─────────────────────────────────────────────────────────────
  {
    service: 'webdesign',
    serviceLabel: 'Webdesign',
    city: 'Lichtenfels',
    citySlug: 'lichtenfels',
    region: 'Oberfranken',
    url: 'https://digitalwerk-coburg.de/webdesign-lichtenfels',
    title: 'Webdesign Lichtenfels | Digitalwerk Coburg',
    metaDescription:
      'Webdesign Lichtenfels ab 3.000 €. Persönlich aus Coburg, in der Korbstadt vor Ort. Spezialisiert auf Handwerk, Mittelstand und Tourismus rund um Vierzehnheiligen.',
    heroBadge: 'Webdesign für Lichtenfels',
    heroHeadline: 'Webdesign Lichtenfels — Websites für die Korbstadt und das Obermain-Tal',
    heroSubheadline:
      'Professionelle Websites für Lichtenfelser Betriebe — von der Korbflechter-Manufaktur bis zum Mittelständler im Obermain-Tal. Persönlich aus Coburg, 30 Minuten Anfahrt, Festpreis ab 3.000 Euro.',
    summary:
      'Webdesign aus Coburg für Lichtenfelser Unternehmen: Festpreis ab 3.000 Euro, persönliche Termine vor Ort in der Korbstadt möglich, in 4–6 Wochen online. Spezialisiert auf Handwerk, Mittelstand und Tourismus rund um Vierzehnheiligen.',
    trustHeadline: 'Warum ein Webdesigner aus Coburg für Lichtenfels?',
    trustPoints: [
      '30 Minuten Anfahrt — Treffen am Marktplatz, in Ihrer Manufaktur oder bei der Basilika Vierzehnheiligen sind problemlos möglich.',
      'Ich kenne den Lichtenfelser Mittelstand — Korbflechter-Tradition, HUMBAUR-Anhänger-Bau, regionales Handwerk und der Tourismus rund um Banz und Vierzehnheiligen.',
      'Lokale Webdesign-Konkurrenz ist überschaubar (3–5 aktive Anbieter in Lichtenfels selbst) — gute Voraussetzung für Top-3-Rankings bei "Webdesign Lichtenfels".',
      'Festpreise statt Tagessatz-Falle — 3.000 € bis 8.000 € decken Familienbetriebe und mittelständische Manufakturen ab.',
    ],
    uniqueSelling: [
      {
        title: 'Handwerks- und Manufaktur-Erfahrung',
        description:
          'Familienbetriebe und Manufakturen brauchen Websites, die Handwerk und Tradition vermitteln, ohne kitschig zu wirken. Mein Webdesign zeigt das Produkt im Vordergrund — mit klaren Anfrage-Strecken.',
      },
      {
        title: 'Tourismus rund um Vierzehnheiligen',
        description:
          'Pensionen, Restaurants und Erlebnis-Anbieter nahe der Basilika erreichen ein klar definiertes Publikum. Ich richte SEO und Inhalt auf saisonale Tourismus-Spitzen aus — Mai bis Oktober.',
      },
      {
        title: 'DSGVO-konform für vertrauensorientiertes Publikum',
        description:
          'Lokale Schriften, kein Google Maps, kein Google Analytics — wichtig für Lichtenfelser Praxen, Steuerberater und Kanzleien.',
      },
      {
        title: 'In 4–6 Wochen online',
        description:
          'Vom Erstgespräch in Lichtenfels bis Go-Live: 4–6 Wochen sind realistisch. Schneller, wenn Inhalte und Bildmaterial bereitstehen.',
      },
      {
        title: 'Eigene Pflege ohne Programmierkenntnisse',
        description:
          'Optional mit CMS — Sie pflegen Veranstaltungen, neue Produktbilder oder Wallfahrts-Infos selbst. Schulung im Festpreis enthalten.',
      },
      {
        title: 'Mobile First, Lighthouse 95+',
        description:
          'Über 60 % der Suchanfragen kommen mobil — gerade bei Tourismus-Suchen ("ausflugslokal vierzehnheiligen", "pension banz"). Mobile-First ist Standard.',
      },
    ],
    pricingHeadline: 'Was kostet Webdesign in Lichtenfels?',
    pricingIntro:
      'Festpreis-Pakete von 3.000 € bis 8.000 €. Bildaufnahmen vor Ort (typisch für Manufaktur- und Tourismus-Webseiten) rechne ich separat ab — etwa 200–400 € für einen halben Tag inklusive Bildbearbeitung.',
    pricingPackages: { basic: 'Basis (3.000 €)', advanced: 'Standard (5.000 €)', premium: 'Premium (8.000 €)' },
    pricingTable: [
      { feature: 'Anzahl Seiten', basic: '5', advanced: '10', premium: '20+' },
      { feature: 'Individuelles Design', basic: 'Vorlagen-basiert', advanced: 'Maßgeschneidert', premium: 'Voll individuell' },
      { feature: 'Galerie-Layout für Manufaktur-Produkte', basic: '—', advanced: 'Inkl.', premium: 'Inkl. + Filter' },
      { feature: 'CMS / selbst pflegbar', basic: '—', advanced: 'Inkl.', premium: 'Inkl. Schulung' },
      { feature: 'SEO-Grundlagen', basic: 'Inkl.', advanced: 'Inkl. + Keywordrecherche', premium: 'Inkl. + Strategie' },
      { feature: 'DSGVO-Setup', basic: 'Inkl.', advanced: 'Inkl.', premium: 'Inkl.' },
      { feature: 'Realisierungszeit', basic: '3–4 Wochen', advanced: '4–6 Wochen', premium: '6–10 Wochen' },
      { feature: 'Vor-Ort-Termine in Lichtenfels', basic: '1', advanced: '2–3', premium: 'Unbegrenzt' },
      { feature: 'Support nach Go-Live', basic: '3 Monate', advanced: '6 Monate', premium: '12 Monate' },
    ],
    localHeadline: 'Wer profitiert in Lichtenfels von professionellem Webdesign?',
    localIntro:
      'Lichtenfels und das Obermain-Tal vereinen traditionelles Handwerk, Mittelstand und Wallfahrtstourismus. Vier typische Beispielszenarien:',
    localReferences: [
      {
        title: 'Korbflechter-Manufaktur in der Korbstadt',
        description:
          'Traditionsbetrieb mit eigener Werkstatt fertigt Körbe, Möbel und Behälter aus Weidengeflecht. Eine moderne Website mit hochwertiger Produktfotografie und Versandshop erweitert den Absatz über die Stadtgrenzen hinaus.',
      },
      {
        title: 'Pension nahe Vierzehnheiligen',
        description:
          'Familiengeführte Pension möchte Direktbuchungen statt Booking.com-Provisionen. Eine Website mit eigenem Reservierungswidget, mehrsprachigen Wallfahrts-Hinweisen (DE/EN) und Anbindung an touristische Routen hilft messbar.',
      },
      {
        title: 'Industriebetrieb am Obermain',
        description:
          'Mittelständischer Zulieferer braucht eine Website, die zwei Zielgruppen trennt: Industrie-Einkäufer (B2B-Datenblätter, Spezifikationen) und potenzielle Mitarbeitende (Karriere-Bereich, Standortvorteile Obermain).',
      },
      {
        title: 'Kanzlei in der Lichtenfelser Innenstadt',
        description:
          'Mittelständische Steuerkanzlei positioniert sich für Mandanten in Lichtenfels und Bad Staffelstein. Klare Service-Übersicht, Mitarbeiter-Profile und Online-Mandanten-Zugang heben sich vom regionalen Wettbewerb ab.',
      },
    ],
    processHeadline: 'Wie läuft ein Webdesign-Projekt in Lichtenfels ab?',
    processIntro:
      'Der Ablauf folgt dem 6-Schritte-Prozess. Bei Bedarf treffen wir uns vor Ort in Ihrer Manufaktur, Pension oder Kanzlei in Lichtenfels.',
    faqs: [
      {
        question: 'Kommen Sie aus Coburg nach Lichtenfels vor Ort?',
        answer:
          'Ja — Lichtenfels liegt etwa 30 Minuten von Coburg entfernt. Persönliche Treffen in Ihrer Manufaktur, Praxis oder am Marktplatz Lichtenfels sind ohne Anfahrtspauschale möglich.',
      },
      {
        question: 'Spezialisieren Sie sich auf Handwerks- und Manufakturbetriebe?',
        answer:
          'Ja, das ist ein Schwerpunkt — Korbflechterei, Möbelmanufaktur, Holzhandwerk und ähnliche Betriebe haben oft besondere Anforderungen: hochwertige Produktfotografie, einfache Versandlogistik-Anbindung, klare Werkstatt-Einblicke.',
      },
      {
        question: 'Was bringt eine Website meinem Lichtenfelser Betrieb wirklich?',
        answer:
          'Statistisch: 80 % der Auftraggeber prüfen vor der Anfrage online. Wer keine Website hat, wird zunehmend übersehen. Schon eine schlanke Website mit Kontaktdaten, 5–10 Referenzbildern und Anfahrtsbeschreibung macht den Unterschied bei der Auftragsanbahnung.',
      },
      {
        question: 'Berücksichtigen Sie Vierzehnheiligen im SEO-Konzept für Tourismus?',
        answer:
          'Bei tourismusnahen Betrieben in Lichtenfels und Bad Staffelstein gehört Vierzehnheiligen mit zur Keyword-Strategie. Wallfahrts-Saisonalität (Oktoberfest mit Wallfahrt, Marien-Feiertage) wird im SEO-Plan berücksichtigt.',
      },
      {
        question: 'Bauen Sie auch einfache Online-Shops für Manufakturen?',
        answer:
          'Ja, im Premium-Paket (8.000 €) oder als Erweiterung. Für kleine Sortimente nutze ich oft Shopware Open Source oder Shopify — beide DSGVO-konform aufzusetzen, mit Anbindung an deutsche Versanddienstleister wie DHL und Hermes.',
      },
    ],
    ctaHeadline: 'Ihr Webdesigner für Lichtenfels',
    ctaSubline:
      'Lassen Sie uns in einem kostenlosen Erstgespräch über Ihr Projekt sprechen. Persönlich in Lichtenfels oder per Telefon — wie es Ihnen besser passt.',
    baseServicePath: '/leistungen/webdesign',
    baseServiceLabel: 'Mehr zur Leistung Webdesign',
    priceRange: '€€',
  },
  {
    service: 'seo',
    serviceLabel: 'SEO',
    city: 'Lichtenfels',
    citySlug: 'lichtenfels',
    region: 'Oberfranken',
    url: 'https://digitalwerk-coburg.de/seo-lichtenfels',
    title: 'SEO Lichtenfels | Digitalwerk Coburg',
    metaDescription:
      'SEO und Local SEO aus Coburg für Lichtenfelser Betriebe. Spezialisiert auf Handwerk, Manufakturen und den Wallfahrts-Tourismus rund um Vierzehnheiligen. Audit ab 1.500 €.',
    heroBadge: 'SEO für Lichtenfels',
    heroHeadline: 'SEO Lichtenfels — Sichtbar im Obermain-Tal',
    heroSubheadline:
      'Suchmaschinenoptimierung mit Lichtenfelser Fokus. Damit Kunden, Touristen und Mandanten Ihren Betrieb auf Google finden — egal ob Korbmanufaktur, Pension nahe Vierzehnheiligen oder Mittelständler am Obermain.',
    summary:
      'SEO und Local SEO aus Coburg für Lichtenfelser Unternehmen: Audit ab 1.500 € einmalig, Local-SEO-Betreuung ab 600 €/Monat. Spezialisiert auf Handwerk, Korbmanufakturen, Wallfahrts-Tourismus und mittelständische Industrie im Obermain-Tal.',
    trustHeadline: 'Warum SEO mit Lichtenfels-Bezug?',
    trustPoints: [
      'Lichtenfels und Bad Staffelstein haben ein doppeltes Suchprofil: traditionelle Branchen-Suchen und Wallfahrts-Tourismus rund um Vierzehnheiligen — die SEO-Strategie unterscheidet sich erheblich.',
      'Im Tourismus dominiert Google Maps-Pack — Top-3-Hotels und Pensionen für "übernachtung vierzehnheiligen" gewinnen den Großteil aller Klicks.',
      'Lokale Backlinks aus Lichtenfels-Quellen (Stadt Lichtenfels, Tourismusregion Obermain, IHK Coburg, Handwerkskammer) sind besonders wirkungsvoll und meist kostenlos zu bekommen.',
      'Bei spezialisierten Manufakturen ("korbflechterei lichtenfels", "weidenkorb-manufaktur") ist die Konkurrenz oft minimal — Top-3-Rankings sind in 3–4 Monaten erreichbar.',
    ],
    uniqueSelling: [
      {
        title: 'Wallfahrts-Tourismus-SEO',
        description:
          'Pensionen, Restaurants und Erlebnis-Anbieter nahe Vierzehnheiligen erreichen ein saisonal stark schwankendes Publikum. Ich richte SEO und Inhalt auf Wallfahrts-Saisonalität aus — Marien-Feiertage, Karwoche, Sommermonate.',
      },
      {
        title: 'Manufaktur- und Handwerks-SEO',
        description:
          'Long-Tail-Keywords wie "weidenmöbel korbstadt", "individueller weidenkorb deutschland" haben überregionale Reichweite — gute Manufakturen werden bundesweit gefunden, nicht nur in Lichtenfels.',
      },
      {
        title: 'Local SEO für die Lichtenfelser Innenstadt',
        description:
          'Google Business Profile-Optimierung, Local-Citations bei regionalen Verzeichnissen (Tourismusregion Obermain, Stadt Lichtenfels, IHK Coburg) und konsistente NAP-Daten.',
      },
      {
        title: 'Technisches SEO als Standard',
        description:
          'Core Web Vitals, Schema.org-Markup für Hotels und Manufakturen, robots.txt, sitemap.xml. Die technische Basis muss stimmen, bevor Content-SEO greift.',
      },
      {
        title: 'GEO — KI-Suchmaschinen-Optimierung',
        description:
          'ChatGPT, Perplexity und Google AI Overviews zitieren Lichtenfelser Betriebe nur, wenn die Website strukturierte Daten und klare Faktenaussagen liefert.',
      },
      {
        title: 'Transparente Reports auf Deutsch',
        description:
          'Monatlicher Report mit Rankings, Klicks, Anfrageverläufen, Backlink-Profil. Plausible-Tracking DSGVO-konform — kein Google Analytics.',
      },
    ],
    pricingHeadline: 'Was kostet SEO in Lichtenfels?',
    pricingIntro:
      'SEO-Beratung startet bei einmalig 1.500 € (Audit + Quick-Wins). Local-SEO-Betreuung ab 600 €/Monat. In Lichtenfels besonders effizient bei Manufaktur-Long-Tail und Wallfahrts-Tourismus — Top-3-Rankings für spezialisierte Keywords sind oft in 3–4 Monaten erreichbar.',
    pricingPackages: { basic: 'Audit (1.500 €)', advanced: 'Local SEO (ab 600 €/M)', premium: 'Full-Service (ab 1.500 €/M)' },
    pricingTable: [
      { feature: 'Initial-Audit', basic: 'Inkl.', advanced: 'Inkl.', premium: 'Inkl.' },
      { feature: 'Google Business Profile', basic: 'Quick-Wins', advanced: 'Optimierung + Pflege', premium: 'Voll betreut' },
      { feature: 'Technisches SEO', basic: 'Audit', advanced: 'Umsetzung', premium: 'Umsetzung + Monitoring' },
      { feature: 'Tourismus-Saisonalitäts-Strategie', basic: '—', advanced: 'Inkl.', premium: 'Inkl. + Kampagnen' },
      { feature: 'Content / Blog', basic: '—', advanced: '1 Artikel/Monat', premium: '2–4 Artikel/Monat' },
      { feature: 'Lokale Backlinks (Tourismusregion, IHK, HWK)', basic: '—', advanced: 'Inkl.', premium: 'Aktiver Outreach' },
      { feature: 'Monitoring & Reports', basic: 'Einmalig', advanced: 'Monatlich', premium: 'Wöchentlich' },
      { feature: 'Strategie-Calls', basic: '1', advanced: 'Monatlich', premium: 'Wöchentlich' },
      { feature: 'Vertragslaufzeit', basic: 'Einmalig', advanced: 'Ab 6 Monate', premium: 'Ab 12 Monate' },
    ],
    localHeadline: 'Welche Lichtenfelser Branchen profitieren am stärksten von SEO?',
    localIntro:
      'Local SEO wirkt am stärksten dort, wo Suchanfragen mit Stadt- oder Regionsbezug einhergehen. Vier Beispiele aus dem Lichtenfelser und Obermain-Wirtschaftsraum:',
    localReferences: [
      {
        title: 'Tourismusbetriebe rund um Vierzehnheiligen',
        description:
          'Pensionen, Ferienwohnungen, Wallfahrts-Restaurants. Suchanfragen "übernachtung vierzehnheiligen", "pension banz lichtenfels", "essen nahe basilika" sind saisonal sehr stark — vor allem an Marien-Feiertagen.',
      },
      {
        title: 'Korbflechter-Manufakturen und Weidenhandwerk',
        description:
          'Lichtenfels ist die deutsche Korbstadt. Long-Tail-Keywords "weidenkorb manufaktur", "individueller weidenkorb", "korbflechterei deutschland" haben bundesweite Reichweite — für Top-Manufakturen ein erheblicher Markt.',
      },
      {
        title: 'Mittelständische Industrie am Obermain',
        description:
          'B2B-Sichtbarkeit für Zulieferer und Industriebetriebe ("zulieferer obermain", "metallbau lichtenfels"). Google AI Overviews und ChatGPT zitieren strukturierte B2B-Inhalte verstärkt — dort sichtbar zu sein, eröffnet neue Kanäle.',
      },
      {
        title: 'Kanzleien und Steuerberater',
        description:
          'Mandanten googeln "steuerberater lichtenfels", "anwalt arbeitsrecht obermain". Wer hier sichtbar ist, gewinnt qualifizierte Anfragen — Wert pro Mandat oft 4-stellig.',
      },
    ],
    processHeadline: 'Wie läuft SEO-Betreuung in Lichtenfels ab?',
    processIntro:
      'Der Start folgt einem klaren 6-Schritte-Plan; danach monatliche Maßnahmen. Strategie-Calls per Video oder vor Ort in Lichtenfels.',
    faqs: [
      {
        question: 'Was kostet SEO in Lichtenfels?',
        answer:
          'SEO-Beratung startet bei einmalig 1.500 € für ein Audit mit Quick-Wins. Local-SEO-Betreuung mit Google-Business-Profile-Pflege und technischer Optimierung ab 600 € pro Monat. Full-Service mit Content und Backlink-Aufbau ab 1.500 € pro Monat.',
      },
      {
        question: 'Lohnt sich SEO für eine Korbmanufaktur in Lichtenfels?',
        answer:
          'Ja, besonders bei spezialisierten Produkten. Long-Tail-Keywords wie "individueller weidenkorb manufaktur" haben deutschlandweit Reichweite — die Konkurrenz ist meist unter 10 ernsthaften Anbietern. Top-3-Rankings sind in 3–4 Monaten realistisch.',
      },
      {
        question: 'Wie wichtig ist Saisonalität im Wallfahrts-Tourismus?',
        answer:
          'Sehr — Marien-Feiertage (insbesondere Mariä Himmelfahrt am 15. August), Karwoche und die Sommermonate Mai–Oktober haben deutlich höhere Suchvolumen. Eine vorausschauende Content-Strategie mit Saisonalitäts-Highlights nutzt diese Spitzen optimal.',
      },
      {
        question: 'Welche Backlinks sind für Lichtenfelser Betriebe relevant?',
        answer:
          'Tourismusregion Obermain (Pflicht für Tourismusbetriebe), Stadt Lichtenfels (Branchenverzeichnis), IHK Coburg (für Mitglieder), Handwerkskammer Bayreuth (für Handwerker), regionale Vereine wie der Korbflechter-Verband.',
      },
      {
        question: 'Wie lange dauert es, bis ich erste SEO-Effekte sehe?',
        answer:
          'Erste Ranking-Verbesserungen nach 3 Monaten realistisch. Bei spezialisierten Long-Tail-Keywords (Manufakturen, Wallfahrts-Tourismus) oft schon nach 4–8 Wochen. Hochkompetitive Keywords ("hotel lichtenfels", "steuerberater lichtenfels") brauchen meist 6–9 Monate.',
      },
    ],
    ctaHeadline: 'Mehr Sichtbarkeit für Ihren Lichtenfelser Betrieb',
    ctaSubline:
      'Im kostenlosen 30-Min-Erstgespräch analysieren wir Ihren aktuellen Stand und identifizieren die größten Hebel für Lichtenfelser und Obermain-Sichtbarkeit. Ergebnisoffen, ohne Verkaufsdruck.',
    baseServicePath: '/leistungen/seo',
    baseServiceLabel: 'Mehr zur Leistung SEO',
    priceRange: '€€',
  },
];

export function getLocalServiceBySlug(slug: string): LocalServiceData | undefined {
  return localServices.find((ls) => `${ls.service}-${ls.citySlug}` === slug);
}
