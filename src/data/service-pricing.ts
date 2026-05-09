// ---------------------------------------------------------------------------
// Hub-level pricing for /leistungen/* pages.
// More general than city-LP pricing in local-services.ts —
// describes service tiers without local commitment.
// ---------------------------------------------------------------------------

export interface PricingTier {
  name: string;
  priceLabel: string;
  description: string;
  highlights: string[];
  ctaLabel?: string;
}

export interface ServicePricing {
  serviceSlug: string;
  intro: string;
  tiers: PricingTier[];
  footnote?: string;
}

export const servicePricing: ServicePricing[] = [
  {
    serviceSlug: 'webdesign',
    intro:
      'Webdesign-Projekte rechne ich zu Festpreisen ab. Sie wissen vor Auftragsstart, was die Website kostet — keine Tagessatz-Falle, keine versteckten Posten. Drei Standardpakete decken die häufigsten Fälle ab; bei besonderen Anforderungen erstelle ich ein individuelles Angebot innerhalb von 48 Stunden.',
    tiers: [
      {
        name: 'Basis',
        priceLabel: 'ab 3.000 €',
        description:
          'Für kleine Betriebe mit klarem Angebot. Visitenkarten-Website mit den wichtigsten Informationen.',
        highlights: [
          'Bis zu 5 Unterseiten',
          'Vorlagen-basiertes Design',
          'Responsive auf allen Geräten',
          'DSGVO-konformes Setup',
          'Kontaktformular und Impressum',
          '3 Monate Support nach Go-Live',
        ],
      },
      {
        name: 'Standard',
        priceLabel: 'ab 5.000 €',
        description:
          'Für etablierte Unternehmen mit mehreren Leistungen. Eigenständiges Design, einfache Selbstpflege.',
        highlights: [
          'Bis zu 10 Unterseiten',
          'Maßgeschneidertes Design',
          'CMS für Selbstpflege',
          'SEO-Grundlagen + Keyword-Recherche',
          'Bildbearbeitung im Festpreis',
          '6 Monate Support nach Go-Live',
        ],
        ctaLabel: 'Häufigste Wahl',
      },
      {
        name: 'Premium',
        priceLabel: 'ab 8.000 €',
        description:
          'Für Unternehmen mit besonderen Anforderungen. Vollständig individuelles Design, erweiterte Funktionen.',
        highlights: [
          '20+ Unterseiten möglich',
          'Voll individuelles UI/UX',
          'CMS mit Schulung',
          'SEO-Strategie inklusive',
          'Online-Buchung oder Mehrsprachigkeit auf Anfrage',
          '12 Monate Support + Quartals-Reviews',
        ],
      },
    ],
    footnote:
      'Alle Preise zzgl. MwSt. Hosting, Domain und laufende Pflege rechne ich separat ab — meist 5–30 €/Monat für Hosting, ab 50 €/Monat für Wartung. Festpreis gilt bei klarem Scope; bei agilen Projekten Tagessatz nach Aufwand.',
  },
  {
    serviceSlug: 'webentwicklung',
    intro:
      'Webentwicklung rechne ich nach Aufwand ab — entweder Festpreis bei klar definiertem Scope oder Tagessatz à 850 € bei agiler Arbeitsweise. Die folgenden Größenordnungen helfen, eine erste Einordnung zu finden. Erstgespräch immer kostenlos.',
    tiers: [
      {
        name: 'Erweiterung',
        priceLabel: 'ab 5.000 €',
        description:
          'Schnittstellen, einzelne Tools oder gezielte Erweiterungen einer bestehenden Anwendung.',
        highlights: [
          'Typisch: 2–6 Wochen',
          'Eine API- oder Drittanbieter-Integration',
          'Frontend oder Backend, je nach Bedarf',
          'Manuelle Tests + technische Übergabe',
          'Code-Repository in Ihrem Eigentum',
        ],
      },
      {
        name: 'Web-App',
        priceLabel: 'ab 15.000 €',
        description:
          'Kundenportale, Konfiguratoren, Buchungssysteme oder Mitarbeiter-Tools mit Backend und Datenbank.',
        highlights: [
          'Typisch: 8–16 Wochen',
          'Frontend + Backend + Datenbank',
          'Bis zu 5 Schnittstellen',
          'Authentifizierung + Rollen',
          'Unit- und Integrationstests',
          'Doku + Übergabe-Workshop',
        ],
        ctaLabel: 'Häufigste Größe',
      },
      {
        name: 'Plattform',
        priceLabel: 'ab 30.000 €',
        description:
          'SaaS-Produkte, mehrseitige Plattformen oder Marktplätze mit komplexer Geschäftslogik.',
        highlights: [
          'Typisch: 3–6 Monate',
          'Skalierbare Architektur',
          'Beliebig viele Schnittstellen',
          'E2E-Tests + CI/CD-Pipeline',
          'Schulung Ihres Teams',
          'Optional: laufende Wartung',
        ],
      },
    ],
    footnote:
      'Festpreis nur bei klar definiertem Scope. Bei agilen Projekten ohne festen Endpunkt arbeite ich mit Tagessatz und 2-Wochen-Sprints — Sie können jederzeit pausieren. Alle Preise zzgl. MwSt. Hosting bei Hetzner Deutschland (ab 5 €/Monat) oder bei Ihrem Anbieter.',
  },
  {
    serviceSlug: 'seo',
    intro:
      'SEO ist kein einmaliges Projekt, sondern ein laufender Prozess. Ich biete drei Einstiegsformen: ein einmaliges Audit für Klarheit über den Status, eine schlanke Local-SEO-Betreuung für regionale Sichtbarkeit, oder Full-Service inklusive Content. Erste messbare Effekte sind nach drei Monaten realistisch — substanzielle Verbesserungen meist nach sechs bis neun Monaten.',
    tiers: [
      {
        name: 'Audit',
        priceLabel: 'ab 1.500 € einmalig',
        description:
          'Bestandsaufnahme + priorisierte Maßnahmenliste. Keine laufende Betreuung — Sie setzen selbst um.',
        highlights: [
          'Technisches SEO-Audit',
          'Keyword-Recherche für Ihre Branche',
          'Konkurrenz-Analyse (3–5 Wettbewerber)',
          'Maßnahmenliste mit Aufwand und Effekt',
          'Einmaliger 60-Min-Strategie-Call',
          'Schriftlicher Bericht zur Eigenumsetzung',
        ],
      },
      {
        name: 'Local SEO',
        priceLabel: 'ab 600 €/Monat',
        description:
          'Schlanke laufende Betreuung mit Fokus auf Google-Sichtbarkeit in der Region. Ideal für lokale Dienstleister.',
        highlights: [
          'Google Business Profile-Pflege',
          'Lokale Citations + NAP-Konsistenz',
          'On-Page-Optimierung (1–3 Seiten/Monat)',
          'Monatlicher Report (verständlich)',
          'Monatlicher Strategie-Call',
          'Vertragslaufzeit 6 Monate',
        ],
        ctaLabel: 'Empfohlen für KMU',
      },
      {
        name: 'Full-Service',
        priceLabel: 'ab 1.500 €/Monat',
        description:
          'Komplette SEO-Betreuung inklusive Content, Backlink-Aufbau und wöchentlichem Monitoring.',
        highlights: [
          'Alles aus Local SEO',
          '2–4 SEO-Artikel pro Monat',
          'Aktiver Backlink-Aufbau + Outreach',
          'Wöchentliches Monitoring',
          'Quartals-Strategie-Reviews',
          'Vertragslaufzeit 12 Monate',
        ],
      },
    ],
    footnote:
      'Alle Preise zzgl. MwSt. Tools wie Plausible-Tracking sind enthalten — kein Google Analytics, voll DSGVO-konform. Ich arbeite ohne Knebelverträge und ohne Garantien für bestimmte Rankings: SEO ist Wahrscheinlichkeitsarbeit, keine Mathematik.',
  },
  {
    serviceSlug: 'ki-beratung',
    intro:
      'KI-Beratung rechne ich nach Aufwand ab — entweder als einmaliges Audit, als Sprint-basierte Pilotumsetzung oder als längerfristige Begleitung. Die Preisangaben sind Richtwerte für den Mittelstand in Oberfranken. Erstgespräch ist immer kostenlos und ergebnisoffen.',
    tiers: [
      {
        name: 'KI-Audit',
        priceLabel: 'ab 1.800 € einmalig',
        description:
          'Bestandsaufnahme Ihrer Prozesse + 3–5 priorisierte KI-Anwendungsfälle mit Aufwand-Nutzen-Bewertung.',
        highlights: [
          '2 Workshops (je 90 Minuten)',
          'Prozess-Inventur (Bottom-up)',
          'Use-Case-Bewertung mit ROI-Schätzung',
          'DSGVO-Einordnung pro Use-Case',
          'Tool-Empfehlungen (Open-Source vs. Cloud)',
          'Schriftlicher Bericht + Präsentation',
        ],
      },
      {
        name: 'Pilot-Umsetzung',
        priceLabel: 'ab 4.500 €',
        description:
          'Ein konkreter Use-Case wird als Pilot umgesetzt — z.B. Chatbot, Dokumenten-Klassifikation, automatische Angebotserstellung.',
        highlights: [
          'Typisch: 3–6 Wochen',
          'Eine Funktion produktiv',
          'On-Premise oder DSGVO-konformer Cloud-Anbieter',
          'Schulung der Anwender:innen',
          'Messbare Erfolgsmetrik definiert',
          'Übergabe + Wartungsanleitung',
        ],
        ctaLabel: 'Empfohlen für Erstkontakt',
      },
      {
        name: 'KI-Begleitung',
        priceLabel: 'ab 1.200 €/Monat',
        description:
          'Längerfristige Begleitung Ihres Teams beim KI-Einsatz — Sparring, Tool-Auswahl, Schulung, technische Umsetzung.',
        highlights: [
          'Monatlicher Strategie-Tag',
          'Tool-Auswahl + Bewertung',
          'Bis zu 3 Mitarbeiter-Schulungen pro Monat',
          'Laufende Use-Case-Optimierung',
          'DSGVO-Beratung bei neuen Tools',
          'Vertragslaufzeit ab 6 Monate',
        ],
      },
    ],
    footnote:
      'Alle Preise zzgl. MwSt. Lizenzkosten für KI-Tools (z.B. ChatGPT Team, Claude Pro, Open-Source-Hosting) trage ich nicht — diese rechnen Sie direkt mit dem Anbieter ab. Bei sensiblen Branchen (Praxis, Kanzlei, Industrie mit Geschäftsgeheimnissen) empfehle ich On-Premise-Lösungen oder europäische Anbieter mit AVV.',
  },
];

export function getServicePricing(slug: string): ServicePricing | undefined {
  return servicePricing.find((sp) => sp.serviceSlug === slug);
}
