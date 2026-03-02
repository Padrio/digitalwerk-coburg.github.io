# Digitalwerk Coburg

Freelancer-Portfolio und Unternehmenswebsite von **Pascal Krason** (Digitalwerk Coburg). Webentwicklung, Individualsoftware und KI-Beratung in der Region Coburg/Oberfranken.

## Tech Stack

- [Astro 5](https://astro.build/) — Static Site Generator
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) — Typsicherheit
- [Lucide Icons](https://lucide.dev/) — Icon-Bibliothek
- [Schema.org (schema-dts)](https://github.com/google/schema-dts) — Strukturierte Daten / JSON-LD
- [Fontsource](https://fontsource.org/) — Selbst gehostete Schriften (DM Sans, Source Sans 3)

## Voraussetzungen

- Node.js 20+
- npm

## Setup & Entwicklung

```bash
npm install          # Abhängigkeiten installieren
npm run dev          # Dev-Server starten (localhost:4321)
npm run build        # Produktions-Build nach ./dist/
npm run preview      # Build lokal testen
```

## Projektstruktur

```text
src/
├── components/      # Astro-Komponenten nach Domain
│   ├── footer/      # Footer-Komponenten
│   ├── logo/        # Logo-Komponenten
│   ├── navigation/  # Header & Navigation
│   ├── sections/    # Wiederverwendbare Sektionen
│   ├── seo/         # Meta-Tags, JSON-LD
│   └── ui/          # Buttons, Cards, etc.
├── content/         # Content Collections (Blog, Wissen)
├── data/            # TypeScript-Datendateien (Services, FAQs, etc.)
├── layouts/         # BaseLayout, PageLayout, LandingPageLayout
├── pages/           # Dateibasiertes Routing
├── styles/          # Globale Styles & Design Tokens
└── utils/           # SEO-Helfer, Schema.org-Builder
```

## Seitenstruktur

| Route | Beschreibung |
|:------|:-------------|
| `/` | Startseite / Landing Page |
| `/leistungen` | Leistungsübersicht |
| `/leistungen/webdesign` | Webdesign |
| `/leistungen/webentwicklung` | Webentwicklung |
| `/leistungen/seo` | Suchmaschinenoptimierung |
| `/leistungen/ki-beratung` | KI-Beratung |
| `/ueber-mich` | Über mich |
| `/zusammenarbeit` | Zusammenarbeit & Prozess |
| `/kontakt` | Kontakt |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutzerklärung |
| `/blog` | Blog *(geplant)* |

### Geplant

| Route | Beschreibung | Datenquelle |
|:------|:-------------|:------------|
| `/branchen/[branche]` | Branchenlösungen (Handwerk, Gastronomie, Praxen, Mittelstand, Startups) | `src/data/industries.ts` |
| `/[leistung]-[stadt]` | Stadt-Landingpages (Coburg, Bamberg, Kronach, Lichtenfels, Sonneberg) | `src/data/cities.ts` |
| `/blog/[slug]` | Blog-Artikel | Content Collection `blog` |
| `/wissen/[slug]` | Wissens-/Glossar-Einträge | Content Collection `wissen` |
| `/vergleich/[slug]` | Vergleichsseiten (z.B. Freelancer vs. Agentur) | — |

## Deployment

Automatisches Deployment auf **GitHub Pages** via GitHub Actions (`withastro/action@v2`) bei jedem Push auf `main`.

## SEO

- Schema.org JSON-LD (LocalBusiness, Person, Service, FAQPage, BreadcrumbList, HowTo)
- Automatische Sitemap-Generierung (`@astrojs/sitemap`)
- Lokale SEO-Strategie für Coburg, Bamberg und Oberfranken

## Roadmap

1. **MVP** *(aktuell)* — Kernseiten, responsive Design, SEO-Grundlagen, Schema.org
2. **Content & SEO** — Blog & Wissensbereich, Stadt-Landingpages, Branchen-Landingpages, interne Verlinkung
3. **Conversion-Optimierung** — Kontaktformular-Backend, DSGVO-konformes Tracking, A/B-Tests
4. **Skalierung** — Website-Check-Tool, Preiskalkulator, KI-Chatbot, Vergleichsseiten
5. **Deutschland-Expansion** — Überregionale Keywords, weitere Stadt-Landingpages, Content-Skalierung

## Lizenz

Privates Projekt — alle Rechte vorbehalten.
