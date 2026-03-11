# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Freelancer portfolio website for **Digitalwerk Coburg** (digitalwerk-coburg.de). Built with Astro 5, Tailwind CSS 4, and TypeScript. German-language site targeting the Coburg/Oberfranken region.

## Git-Regeln

- Kein `Co-Authored-By`-Tag in Commits — niemals Claude als Co-Author angeben.

## Commands

```bash
npm run dev       # Start dev server on localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No test runner or linter is configured.

## Architecture

**Static site** (pre-rendered HTML) using Astro's file-based routing. Deployed to GitHub Pages via `withastro/action@v2` on push to `main`.

### Data-Driven Pattern

Content is centralized in TypeScript data files (`src/data/`), not hardcoded in components. `site.ts` holds the global site config (SITE object). Services, FAQs, testimonials, navigation, process steps, industries, and cities each have their own data file with typed interfaces. Components iterate over these data structures to render.

### Layout Hierarchy

`BaseLayout` → `PageLayout` (adds header, footer, breadcrumbs) → individual pages. `LandingPageLayout` exists as an alternative wrapper.

### SEO System

- `src/components/seo/BaseHead.astro` handles meta tags, OG/Twitter cards, canonical URLs
- `src/utils/schema.ts` builds Schema.org JSON-LD (LocalBusiness, Person, Service, FAQPage, BreadcrumbList, HowTo, WebSite, BlogPosting, ProfilePage, DefinedTerm) — alle Schemas über @id verknüpft (Entity-Graph)
- `src/utils/seo.ts` provides `buildSeoMeta()` and automatic breadcrumb generation from URL paths
- Sitemap generated via `@astrojs/sitemap` (excludes `/impressum` and `/datenschutz`)

### Content Collections

Two Astro content collections defined in `src/content.config.ts`: `blog` and `wissen` (knowledge base). Both use glob-based markdown/mdx loading. Currently empty with `.gitkeep` placeholders.

### Path Aliases

```
@components/* → src/components/*
@layouts/*    → src/layouts/*
@data/*       → src/data/*
@utils/*      → src/utils/*
@styles/*     → src/styles/*
```

## Design Tokens (in `src/styles/global.css`)

- Primary: `#0f1d3d` (dark navy), Accent: `#e8620a` (orange)
- Fonts: DM Sans (display), Source Sans 3 (body)
- Button classes: `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-link`
- Section spacing: `--spacing-section: 5rem`
- Container max-width: 68.75rem (1100px)

## Key Conventions

- All user-facing text is in German
- URL slugs use German words (`/leistungen`, `/ueber-mich`, `/zusammenarbeit`)
- Icons come from `lucide-astro`
- Components are organized by domain: `navigation/`, `sections/`, `seo/`, `ui/`, `footer/`, `logo/`

## Tonalität & Sprache

- Professionell, nahbar, lösungsorientiert
- Kein Entwickler-Jargon — die Zielgruppe sind keine Tech-Experten
- Außenwirkung: seriöses Ingenieurbüro, nicht hippe Startup-Landingpage
- Zielgruppe: Geschäftsinhaber, Handwerker, Praxen, Gastronomen, Mittelstand in der Region Coburg/Oberfranken
- Duzen vermeiden — der Kunde wird gesiezt
- Fachbegriffe nur verwenden, wenn sie sofort erklärt werden

## SEO-Keyword-Strategie

### Primär-Keywords (Coburg-Fokus)
- Webdesign Coburg, Webentwicklung Coburg, SEO Coburg
- KI-Beratung Coburg, Individualsoftware Coburg
- Freelancer Webdesign Coburg, Webdesigner Coburg

### Sekundär-Keywords (regional)
- Webdesign Bamberg, Webdesign Oberfranken
- Webentwicklung Kronach, Webdesign Lichtenfels, Webdesign Sonneberg
- Homepage erstellen lassen Coburg, Website erstellen lassen Oberfranken

### Thüringen-Grenzgebiet (wenig Konkurrenz)
- Webdesign Sonneberg, SEO Hildburghausen, Webentwickler Südthüringen

### Long-Tail-Keywords
- "Website für Handwerker Coburg", "Arztpraxis Website erstellen", "KI Beratung Mittelstand Oberfranken"

### Transaktionale Keywords
- "Webdesigner beauftragen Oberfranken", "Website Angebot Coburg"

### Keyword-Zuordnung
- Jedes Fokus-Keyword gehört zu genau einer Seite (keine Keyword-Kannibalisierung)

### Title-Tag-Format
`[Seitenthema] | Digitalwerk Coburg` — z.B. „Webdesign Coburg | Digitalwerk Coburg"

## Design & UX Richtlinien

- Mobile First — alle Layouts zuerst für kleine Bildschirme entwickeln
- Lighthouse-Score 95+ anstreben (Performance, Accessibility, Best Practices, SEO)
- Großzügiger Whitespace, klare visuelle Hierarchie
- JavaScript sparsam einsetzen — Astro Islands nur wo echte Interaktivität nötig ist
- WCAG 2.1 AA Accessibility: ausreichende Kontraste, fokusierbare Elemente, semantisches HTML
- Bilder: WebP/AVIF bevorzugen, immer `alt`-Attribute setzen, `loading="lazy"` für Below-the-fold

## DSGVO-Hinweise

- Kein Google Analytics → DSGVO-konforme Alternative (Plausible/Umami) wenn Tracking nötig
- Kein Google Fonts CDN → Schriften lokal gehostet via Fontsource (bereits umgesetzt)
- Kein Google Maps → OpenStreetMap oder statische Kartenbilder
- Cookie-Banner nur wenn technisch nötig (aktuell nicht erforderlich)
- Kontaktformular: Datenverarbeitung transparent dokumentieren

## Entwicklungs-Roadmap

- **Phase 1 (MVP):** ✅ abgeschlossen — Kernseiten, responsive Design, SEO-Grundlagen, Schema.org
- **Phase 2 (Content & SEO & GEO):** Blog befüllen, Wissen-Glossar, Stadt-Landingpages, Branchen-Landingpages, GEO-Grundlagen (Entity-Graph, llms.txt, KI-Bot-Erlaubnis)
- **Phase 3 (Conversion):** Formular-Backend, Analytics (Plausible/Umami), Exit-Intent, Preiskalkulator
- **Phase 4 (Tools & Features):** Website-Check-Tool, KI-Chatbot, Vergleichsseiten
- **Phase 5 (Expansion):** Überregionale Keywords, nationale Stadt-Seiten, Content-Skalierung

## Blog & Content-Regeln

- Minimum 1.500 Wörter pro Artikel (Ziel: 2.000+)
- Jeder Artikel: 1 Fokus-Keyword + 3–5 sekundäre Keywords
- Jeder Artikel: mindestens 2 interne Links zu `/leistungen/*`-Seiten
- Jeder Artikel: FAQ-Sektion (3–5 Fragen) → Schema.org FAQPage (via `buildFaqPage()` in `src/utils/schema.ts`)
- Jeder Artikel: CTA am Ende via `CTA`-Komponente (`src/components/ui/CTA.astro`, Default-Text: "Erstgespräch vereinbaren")
- Veröffentlichungsrhythmus: min. 2 Artikel/Monat, jährliche Aktualisierung bestehender Artikel
- Jeder Artikel: Zusammenfassungs-Box am Anfang (1–3 Sätze, GEO-optimiert) via `PageSummary`-Komponente
- Jeder Artikel: mindestens eine HTML-Tabelle mit Kennzahlen/Vergleichen
- Blog-Frontmatter: `title`, `description`, `summary?`, `pubDate`, `updatedDate?`, `heroImage?`, `tags[]`, `draft`, `faqs[]` (Schema: `src/content.config.ts`)
- Wissen-Frontmatter: `title`, `description`, `summary?`, `category`, `related[]`, `pubDate?`, `updatedDate?`, `faqs[]`

## Seitentyp-Richtlinien

### Stadt-Landingpages (`/[leistung]-[stadt]`)
- GEO-Checkliste (siehe GEO-Abschnitt) bei jeder neuen Seite anwenden
- Min. 60% einzigartiger Content vs. Basis-Leistungsseite
- Lokale Bezüge (Sehenswürdigkeiten, Wirtschaft, regionale Besonderheiten)
- Stadt-spezifische FAQs (3–5 Items)
- CTA mit Stadtbezug (z.B. "Ihr Webdesigner für Bamberg")
- Title: `[Leistung] [Stadt] | Digitalwerk Coburg`
- Datenquelle: `src/data/cities.ts` (Interface: `City { name, slug, region, description, isActive }`)

### Branchen-Landingpages (`/branchen/[branche]`)
- GEO-Checkliste (siehe GEO-Abschnitt) bei jeder neuen Seite anwenden
- Typische Herausforderung der Branche + Lösungsansatz
- Beispiel-Szenario (fiktiv aber realistisch)
- Datenquelle: `src/data/industries.ts` (Interface: `Industry { id, title, icon, challenge, solutions[], href }`)

### Vergleichsseiten (`/vergleich/[slug]`)
- GEO-Checkliste (siehe GEO-Abschnitt) bei jeder neuen Seite anwenden
- Ehrlicher, ausgewogener Vergleich — Trade-offs benennen
- CTA: Beratung anbieten, kein Hard-Sell

### Wissen/Glossar (`/wissen/[slug]`)
- Fachbegriffe in einfacher Sprache erklären
- Erster Absatz: fett gedruckte Definition (direkt zitierfähig für KI)
- Jeder Eintrag: HTML-Vergleichstabelle + FAQ-Sektion mit Schema.org
- Schema: `DefinedTerm` mit `inDefinedTermSet` für jeden Eintrag
- Interne Links zu passenden Leistungsseiten
- `related[]`-Frontmatter für Querverweise nutzen
- GEO-Checkliste (siehe GEO-Abschnitt) bei jeder neuen Seite anwenden

## Conversion & CTA-Regeln

- Jede Seite: mindestens 1 CTA (empfohlen: oben UND unten)
- Primärer CTA-Text: "Kostenloses Erstgespräch vereinbaren"
- `CTA`-Komponente (`src/components/ui/CTA.astro`): Props `headline`, `subline`, `buttonText` (Default: "Erstgespräch vereinbaren"), `buttonHref` (Default: `/kontakt`)
- Vertrauenssignale: echtes Foto, "kostenlos & unverbindlich", Erreichbarkeit, regionaler Bezug
- Konkrete Zahlen statt vager Aussagen ("in 4–6 Wochen" statt "schnell")

## Interne Verlinkung & E-E-A-T

- E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness
- Verlinkungsmatrix:
  - Leistungsseiten ↔ Blog-Artikel ↔ Branchenlösungen
  - Stadt-Landingpages → Leistungsseiten + Kontakt
  - Blog-Artikel → min. 2 Leistungsseiten + verwandte Artikel
- Autorschaft: Pascal Krason als konsistenter Autor, Verweis auf `/ueber-mich`
- Keine übertriebenen Behauptungen — Vertrauen durch Transparenz

## GEO (Generative Engine Optimization)

GEO optimiert die Website für KI-gestützte Suchsysteme (ChatGPT, Perplexity, Google AI Overviews, Copilot). GEO ist bei JEDER Seitenänderung und Content-Erstellung mitzudenken.

### Grundprinzipien
- KI-Engines extrahieren einzelne Absätze, nicht ganze Seiten — jeder Absatz muss für sich stehen können
- Strukturierte Daten (Schema.org) sind der wichtigste technische Hebel — Seiten mit Schema werden 30–50% häufiger zitiert
- Alle Schema-Objekte MÜSSEN über @id-Referenzen verknüpft sein (Entity-Graph)
- Fakten und Zahlen schlagen Marketing-Sprache — konkrete Angaben werden zitiert, vage Aussagen nicht

### Schema.org Entity-Graph
- Organisation: `@id: "${SITE.url}/#organization"` (in `buildLocalBusiness()`)
- Person: `@id: "${SITE.url}/#person"` (in `buildPerson()`)
- WebSite: `@id: "${SITE.url}/#website"` (in `buildWebSite()`)
- Neue Schemas MÜSSEN bestehende Entitäten per @id referenzieren, NICHT inline duplizieren
- Beispiel: `author: { '@id': '${SITE.url}/#person' }` statt `author: { '@type': 'Person', name: '...' }`

### Zitierfähiger-Absatz-Pattern (für alle Inhalte)
Jeder wichtige Absatz folgt diesem Muster:
1. **Erster Satz**: Direkte, faktische Aussage (keine Frage, kein Hedging)
2. **Zweiter Satz**: Konkreter Beleg (Zahl, Quelle, spezifisches Detail)
3. **Maximal 2–3 Sätze** pro zitierfähigem Absatz

Beispiel:
- Falsch: "Es gibt viele Faktoren, die den Preis einer Website beeinflussen..."
- Richtig: "Eine professionelle Unternehmenswebsite kostet bei Digitalwerk Coburg zwischen 3.000 und 8.000 Euro. Einfache 5-Seiten-Websites liegen am unteren Ende, Projekte mit CMS oder E-Commerce am oberen."

### Content-Anforderungen (Blog, Wissen, Landingpages)
- Jeder Artikel/Seite: **Zusammenfassungs-Box** am Anfang (1–3 Sätze, direkt zitierfähig) via `PageSummary`-Komponente
- Jeder Artikel: Mindestens eine **HTML-Tabelle** (Vergleich, Kennzahlen oder Übersicht) — KI parst Tabellen besonders effektiv
- Definitionen im Fließtext mit `<dfn>`-Tag auszeichnen
- FAQ-Antworten: Erster Satz = direkte Antwort, dann Erklärung
- Überschriften als Fragen oder Aussagen formulieren (nicht generisch) — KI matcht Überschriften auf Nutzeranfragen

### Überschriften-Regeln für GEO
- Falsch: "Unsere Leistungen", "Ihre Vorteile", "Details"
- Richtig: "Was umfasst professionelles Webdesign?", "Warum Individualentwicklung statt WordPress?"
- H2/H3-Überschriften sollen wie Suchanfragen klingen

### Neue Seiten — GEO-Checkliste
Bei jeder neuen Seite prüfen:
- [ ] Passende Schema.org-Typen mit @id-Verknüpfung eingebunden?
- [ ] Zusammenfassungs-Box am Anfang vorhanden?
- [ ] Mindestens eine HTML-Tabelle mit Fakten/Vergleichen?
- [ ] FAQ-Sektion mit FAQPage-Schema?
- [ ] Überschriften als Fragen/Aussagen (nicht generisch)?
- [ ] Frische-Signal vorhanden (Stand-Datum oder dateModified)?
- [ ] Interne Links in beide Richtungen (Hub <-> Spoke)?
- [ ] Zitierfähige Absätze (direkte Aussage + Beleg)?

### Content-Cluster-Strategie
Neue Inhalte werden in thematische Cluster eingeordnet:
- Jedes Cluster hat einen **Hub** (Leistungsseite) und **Spokes** (Blog + Wissen)
- Jeder Spoke verlinkt zum Hub, jeder Hub zu allen Spokes
- Spokes verlinken untereinander innerhalb des Clusters
- Aktuelle Cluster: Webdesign, SEO, KI-Beratung, Digitalisierung

### KI-Crawler
- `robots.txt` erlaubt explizit: GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended
- `llms.txt` und `llms-full.txt` im Root-Verzeichnis pflegen bei neuen Seiten/Services
- Keine KI-Bots blockieren ohne explizite Freigabe
