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

## SEO/GEO — Projekt-DNA

Diese Sektion definiert die unveränderlichen Brand- und Zielgruppen-Anker. Alle SEO/GEO-Maßnahmen müssen sich daran messen lassen. Operative Regeln (Wortzahlen, Schema-Aktualität, Citability-Schwellen) liefert das `claude-seo`-Plugin über `/seo`-Kommandos — diese Datei dirigiert nur.

### Brand- und Regions-Anker
- Brand: Digitalwerk Coburg (`digitalwerk-coburg.de`)
- Inhaber & Autorschaft: Pascal Krason — konsistente E-E-A-T-Person, jeder Artikel/Profilbezug verlinkt `/ueber-mich`
- Kernregion: Coburg/Oberfranken; strategisches Nebenfeld: Thüringen-Grenzgebiet (Sonneberg, Hildburghausen)
- Primär-Cities (aktiv in `src/data/cities.ts`): Coburg, Bamberg, Kronach, Lichtenfels

### Keyword-DNA (Source-of-Truth für Cluster-Briefings)
- Primär: „Webdesign Coburg", „Webentwicklung Coburg", „SEO Coburg", „KI-Beratung Coburg", „Individualsoftware Coburg"
- Regional: Bamberg / Kronach / Lichtenfels in Kombination mit Webdesign, SEO, Webentwicklung
- Nische Thüringen-Grenze: Sonneberg, Hildburghausen, Südthüringen
- Long-Tail- und Intent-Auffächerung übernimmt `/seo cluster <seed>` — keine Inline-Pflege hier

### Tonalität (Brand-Voice)
- Sie-Form, deutschsprachig, kein Duzen
- Seriöses Ingenieurbüro, nicht hippe Startup-Landingpage
- Fachbegriffe nur mit Inline-Erklärung
- Konkrete Zahlen und Zeitspannen statt vager Aussagen — Vertrauen durch Transparenz
- Zielgruppe: Geschäftsinhaber, Handwerker, Praxen, Gastronomen, Mittelstand in Oberfranken

### Conversion-Anker
- Primärer CTA-Text: „Kostenloses Erstgespräch vereinbaren"
- Vertrauenssignale Pflicht: echtes Foto, „kostenlos & unverbindlich", regionaler Bezug, Erreichbarkeit
- Keine übertriebenen Versprechen — Trade-offs offen benennen

## SEO/GEO — Architektur-Invarianten

Diese Verträge dürfen nicht ohne Code-Refactor gebrochen werden. Bei Änderungen am Schema-Layer immer `/seo schema <url>` gegen die Live-Seite laufen lassen.

### Schema.org Entity-Graph (`src/utils/schema.ts`)
- Drei fixe `@id`-Konstanten:
  - Organisation: `${SITE.url}/#organization` (`buildLocalBusiness()`)
  - Person: `${SITE.url}/#person` (`buildPerson()`)
  - WebSite: `${SITE.url}/#website` (`buildWebSite()`)
- Neue Schemas referenzieren bestehende Entitäten ausschließlich per `@id` — keine Inline-Duplikate von Person/Organisation
- Verfügbare Builder: `buildLocalBusiness`, `buildPerson`, `buildWebSite`, `buildProfilePage`, `buildService`, `buildLocalService`, `buildFaqPage`, `buildBreadcrumbList`, `buildHowTo`, `buildBlogPosting`, `buildDefinedTerm`
- `PageLayout.astro` injiziert LocalBusiness + WebSite automatisch — Page-Schemas nur additiv

### Datenfile-Verträge (`src/data/`)
- Stadt-Landingpages: `cities.ts` — Interface `City { name, slug, region, description, isActive }`; nur `isActive: true` rendert
- Branchen-Landingpages: `industries.ts` — Interface `Industry { id, title, icon, challenge, solutions[], href }`
- Content Collections: `blog` und `wissen` in `src/content.config.ts`
  - Blog-Frontmatter: `title`, `description`, `summary?`, `pubDate`, `updatedDate?`, `heroImage?`, `tags[]`, `draft`, `faqs[]`
  - Wissen-Frontmatter: `title`, `description`, `summary?`, `category`, `related[]`, `pubDate?`, `updatedDate?`, `faqs[]`

### Komponenten-Verträge
- `CTA` (`src/components/ui/CTA.astro`): Props `headline`, `subline`, `buttonText` (Default „Erstgespräch vereinbaren"), `buttonHref` (Default `/kontakt`)
- `PageSummary` (`src/components/ui/PageSummary.astro`): Prop `summary` — Pflicht-Einbindung auf Blog-Detail, Wissen-Detail, Stadt-Landingpage, Branchen-Landingpage
- FAQ-Sektion: `buildFaqPage(faqs)` aus dem Frontmatter-Feld `faqs[]`
- Breadcrumbs: `buildBreadcrumbList()` — automatisch aus URL via `src/utils/seo.ts`

### URL- und Title-Vertrag
- Stadt-Landingpage: `/[leistung]-[stadt]` (Beispiel: `/webdesign-coburg`)
- Branchen-Landingpage: `/branchen/[branche]`
- Vergleichsseiten: `/vergleich/[slug]`
- Wissen: `/wissen/[slug]`
- Title-Format: `[Seitenthema] | Digitalwerk Coburg`
- Stadt-Title-Format: `[Leistung] [Stadt] | Digitalwerk Coburg`
- Slugs in deutscher Sprache (`/leistungen`, `/ueber-mich`, `/zusammenarbeit`)

### Keyword-Zuordnung
- Jedes Fokus-Keyword gehört zu genau einer Seite — Keyword-Kannibalisierung ist Build-Blocker
- Vor neuer Seite: `/seo cluster <seed>` prüfen, ob das Keyword bereits einer bestehenden Seite zugewiesen ist

### Cluster-Topologie (Hub–Spoke)
- Aktive Cluster: Webdesign, SEO, KI-Beratung, Digitalisierung
- Hub = Leistungsseite unter `/leistungen/*`
- Spokes = Blog-Artikel und Wissen-Einträge
- Pflicht-Verlinkung: jeder Spoke → Hub; jeder Hub → alle Spokes; Spokes untereinander innerhalb des Clusters
- Stadt-Landingpages verlinken auf Leistungs-Hub + `/kontakt`

### KI-Crawler-Konfiguration
- Source-of-Truth: `/public/robots.txt` — erlaubt explizit GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended
- Source-of-Truth: `/public/llms.txt` und `/public/llms-full.txt` — bei neuen Leistungen, Stadt-Seiten oder Schlüsselseiten aktualisieren
- KI-Bots niemals blockieren ohne explizite Entscheidung
- Sitemap: `/sitemap-index.xml` via `@astrojs/sitemap` — Excludes: `/impressum`, `/datenschutz`

## SEO/GEO — Workflow-Dispatcher (claude-seo Plugin)

Operative SEO/GEO-Logik liefert das `claude-seo`-Plugin (Tier 0, ausschließlich kostenfreie Sub-Skills). Diese Sektion mappt projekttypische Anlässe auf `/seo`-Kommandos. Genutzt werden nur Tier-0-Kommandos — `seo-google`, `seo-dataforseo`, `seo-backlinks`, `seo-maps` Tier 1+ sind nicht konfiguriert.

### Wann ruft Claude welches Kommando?

- Neue Landingpage (Stadt, Branche, Vergleich) angelegt → `/seo geo <url>` direkt nach dem Build, ergänzt durch `/seo schema <url>` zur Entity-Graph-Validierung
- Stadt-/Local-Landingpage → zusätzlich `/seo local <url>`
- Neuer Blog-Post oder Wissen-Eintrag → `/seo content <url>` für E-E-A-T-Check, anschließend `/seo geo <url>`
- Neues Cluster-Topic oder Long-Tail-Auffächerung gesucht → `/seo cluster <seed-keyword>`
- Vor Release / nach Astro-Refactor → `/seo drift compare <url>` für jede zuvor baseline-erfasste URL; Schema-Smoke-Test via `/seo schema <url>`
- Quartals-Audit → `/seo audit https://digitalwerk-coburg.de`
- Search-Experience-Check (Persona, User-Story) → `/seo sxo <url>`
- Technischer Drift (INP, Indexierung) → `/seo technical <url>`
- Sitemap-Veränderungen prüfen → `/seo sitemap <url>`
- Strategische Quartals-Planung → `/seo plan local-service`

### Regeln für Plugin-Outputs
- Plugin-Outputs sind Empfehlungen, keine automatischen Edits — Vorschläge erst in einen Plan überführen, dann implementieren
- Plugin-Schwellen (Wortzahlen, Passage-Längen, Citability-Scores, Schema-Deprecations) gelten als aktuelle Wahrheit — diese Datei führt sie nicht doppelt
- Bei Konflikt zwischen Plugin-Empfehlung und Projekt-DNA / Invarianten → siehe Plugin-Overrides unten

## SEO/GEO — Plugin-Overrides

Stellen, an denen wir bewusst von `claude-seo`-Defaults abweichen. Jede Abweichung mit Begründung; ohne dokumentierten Override gilt die Plugin-Empfehlung.

### FAQPage-Schema trotz Rich-Results-Restriction
- Plugin-Default: Neue FAQPage-Schemas auf kommerziellen Seiten werden für Google Rich Results nicht mehr empfohlen
- Override: Wir behalten FAQPage-Schema auf Stadt-, Leistungs- und Wissen-Seiten bei (`buildFaqPage()`)
- Begründung: Hoher Wert für AI-Citation in ChatGPT, Perplexity und AI Overviews; strukturierte Q&A bleibt für GEO ein primärer Zitations-Hebel
- Konsequenz: Wenn `/seo schema` FAQPage als „Info" oder „nicht rich-results-fähig" flaggt, ist das hier dokumentiert und kein Blocker

### HTML-Tabelle pro Content-Seite — Empfehlung statt Pflicht
- Plugin-Default: Tabellen für vergleichende Daten werden für Citability empfohlen
- Override: Wir formulieren als Empfehlung pro Content-Seite (Blog, Wissen, Stadt), nicht als harten Vertrag
- Begründung: Nicht jeder Inhalt hat sinnvoll tabellarisierbare Kennzahlen — erzwungene Tabellen erzeugen Filler-Content
- Konsequenz: Wenn `/seo geo <url>` für eine Seite Tabellen-Lücke flaggt, gezielt nachziehen — nicht pauschal erzwingen

### Tier-1+-Skills nicht verfügbar
- Plugin-Default: bei vorhandenen Credentials werden `seo-google`, `seo-dataforseo`, `seo-backlinks`, `seo-maps` in `/seo audit` automatisch eingebunden
- Override: keine API-Keys konfiguriert — diese Sub-Agents werden bewusst nicht aufgerufen
- Begründung: Tier-0-Workflow bewusst gewählt; Empfehlungen, die nur über kostenpflichtige APIs umsetzbar wären, ignorieren oder als „später" markieren

### `Co-Authored-By`-Tag verboten
- Siehe globale Git-Regel weiter oben. Falls Plugin-Outputs Community-Footer mit Co-Author-Verweisen vorschlagen, werden diese nicht in Commits oder PRs übernommen.

> Vom Refactor entfernt — diese Inhalte liegen jetzt im Plugin (`/seo content`, `/seo geo`, `/seo schema`, `/seo cluster`):
> Wortzahl-Schwellen, CWV/INP-Thresholds, FID-Erwähnung, Schema-Deprecation-Daten (HowTo, FAQ-Restriction, SpecialAnnouncement, CourseInfo, EstimatedSalary), das September-2025-QRG-Update, Long-Tail- und Intent-Keyword-Auffächerung, generische E-E-A-T-Definition, Passage-Length- und Citability-Mikro-Regeln, Beispiele für „gute" vs. „schlechte" Überschriften, die 8-Punkte-GEO-Checkliste sowie die 30–50 %-Schema-Zitations-Statistik. Wenn diese Inhalte gebraucht werden: zuständiges `/seo`-Kommando aufrufen.

## Markenpräsenz & AI-Citation-Signale

Brand-Mentions korrelieren stärker mit AI-Sichtbarkeit als Backlinks (Plugin liefert aktuelle Korrelations-Werte via `/seo geo`). Diese Sektion legt die DACH-spezifischen Quellen und die Akquise-Routine fest, die das Plugin nicht kennen kann.

### Zielquellen für Brand-Mentions (DACH-Fokus)

- Reddit DE-Subreddits: r/de, r/Bayern, r/Coburg, r/Selbststaendig, r/Unternehmertum, r/Webdev (DE-Threads)
- YouTube DE-Channels: Tech-, Gründer- und Mittelstands-Kanäle mit DACH-Reichweite; eigene Erwähnungen in Interviews/Kommentaren
- Wikipedia DE: relevante Artikel im Umfeld Coburg, Oberfranken, Webentwicklung — Belege und Quellenarbeit (keine direkten Selbst-Edits)
- Branchenverzeichnisse Oberfranken: IHK Coburg Mitgliederverzeichnis, Handwerkskammer Oberfranken, „Wirtschaftsregion Coburg"-Listings, ProvenExpert, Gelbe Seiten, regionale Stadtportale (coburg.de, bamberg.info, kronach.de, lichtenfels.de)
- Fachmedien DACH: t3n, heise, dev.to (deutschsprachige Posts), iX, Gründerszene
- LinkedIn DE: Beiträge zu Coburg/Oberfranken-Themen; Erwähnungen durch Kunden und Partner
- GitHub: Open-Source-Beiträge unter Brand-Identität `github.com/Padrio` (verifiziert in `src/data/site.ts`)
- Lokale Events / Stammtische / Coworking-Spaces im Coburger Raum (Zukunftscoburg, Gründerwoche, IHK-Veranstaltungen)

### Akquise-Cadence

- Wöchentlich: 1–2 hochwertige Fachkommentare in Reddit DE oder LinkedIn DE mit Bezug zu Webdesign / SEO / KI im Mittelstand
- Monatlich: 1 Eintrag oder Update in einem Branchenverzeichnis, 1 Outreach an regionales Stadt- oder IHK-Portal
- Quartalsweise: 1 Gastbeitrag, Interview oder Podcast-Auftritt mit DACH-Reichweite
- Halbjährlich: Wikipedia-Quellenarbeit prüfen (Belege ergänzen)

### Messung

- Citation-Tracking: `/seo geo <url>` quartalsweise gegen Schlüsselseiten — Brand-Mention-Score und AI-Citability werden vom Plugin aktuell gehalten
- Drift-Baseline: `/seo drift baseline <url>` für `/`, `/leistungen/*` und die vier aktiven Stadt-Landingpages — Vergleich pro Quartal via `/seo drift compare`
