# SEO-Audit digitalwerk-coburg.de

**Erhoben:** 2026-09-01 · **Umsetzung:** 2026-09-01 · **Basis-Commit:** `020c361`
**Anlass:** GSC-Export 2026-05-30 – 2026-08-29 (Web, 3 Monate)

---

## Ausgangslage

| Kennzahl | Wert |
|---|---|
| Klicks | 21 |
| Impressionen | ~1.885 |
| CTR | 1,1 % |
| Ø-Position | 34 |
| URLs mit Impressionen | **6 von 35** |

Money-Keywords ohne einen einzigen Klick: „webdesign coburg" (582 Impr., Pos. 16,6),
„webentwicklung coburg" (154, Pos. 5,9), „seo coburg" (109, Pos. 23,9).

### Kernanalyse: kein CTR-Problem, ein Positions-Problem

| Position | Impressionen | Anteil | Klicks |
|---|---|---|---|
| **1–3** | **0** | 0,0 % | 0 |
| 4–10 | 154 | 9,2 % | 0 |
| 11–20 | 586 | 35,1 % | 0 |
| 21–50 | 465 | 27,9 % | 0 |
| 51+ | 463 | 27,8 % | 0 |

91 % der Impressionen liegen auf Position 11+. Alle 91 im Export sichtbaren Queries haben
zusammen **0 Klicks** — die 21 Klicks stammen aus dem anonymisierten Longtail (Markensuchen).
Gegenprobe: `/ueber-mich` erreicht **16,7 % CTR bei Position 5,2**. Das Snippet funktioniert;
es wird nur fast nie gesehen. 82,7 % der Impressionen sind echte Regional-Queries — das
Targeting stimmt, es fehlt Ranking.

**Ausreißer:** „webentwicklung coburg" steht auf Position 5,9 und liefert bei 154 Impressionen
null Klicks. Naheliegende Ursache ist das Local Pack, in dem Digitalwerk mangels
Google-Unternehmensprofil nicht vertreten ist.

---

## Messgrundlage

| Quelle | Methode | Zeitpunkt |
|---|---|---|
| GSC-Export | Nutzer-Upload, Suchtyp Web, 3 Monate | 2026-09-01 |
| Live-HTML 9 Money-Pages | `curl`, roh, ungerendert | 2026-09-01 11:52 CEST |
| Linkgraph | Crawl aller 35 Sitemap-URLs, `href="/…"` nach Script-Strip | 2026-09-01 11:55 CEST |
| Ladezeit | `curl -w`, Desktop, ungedrosselt, kalt — TTFB 0,19 s, total 0,34 s, 72,8 KB | 2026-09-01 11:56 CEST |
| Backlinks | claude-seo `commoncrawl_graph.py`, cc-main-2026-jan-feb-mar | 2026-09-01 |
| SERP-Umfeld | WebSearch — **US-lokalisiert, keine DE-SERP**, nur Wettbewerber-Indiz | 2026-09-01 |
| Duplicate-Content | 5-gram Shingle-Jaccard über 9 Live-Seiten | 2026-09-01 |

**Key-gated (nicht geprüft):** CrUX-Felddaten, PageSpeed v5, GSC-API, GA4, Indexing API
(`google_auth.py --check` → Tier −1). Moz und Bing Webmaster ebenfalls ohne Key.
**Echte Core Web Vitals aus Felddaten liegen nicht vor** — die Ladezeitwerte sind
Labormessung und ersetzen kein INP/LCP.

---

## Befunde und Status

Legende: `erledigt` · `blockiert` (wartet auf externe Angabe) · `vorgelegt` (Stufe 3, Freigabe nötig) · `hinfaellig` (Verifikation war bereits grün)

### S0 — Blocker

| ID | Befund | Status | Beleg |
|---|---|---|---|
| S0-1 | **Kontaktformular tot.** `ContactForm.astro:28` → `action="https://formspree.io/f/FORM_ID"`, Platzhalter nie ersetzt; `curl -X POST` → **HTTP 404**. Ziel jedes CTA der Website. | **erledigt** | Formular entfernt, ersetzt durch E-Mail/Telefon/WhatsApp als Aktionskarten. `grep -c '<form' dist/kontakt.html` → 0 |
| S0-2 | **Clarity ohne Consent** im `<head>` (`BaseLayout.astro:35-38`), während `CookieBanner.astro:16` „ausschließlich technisch notwendige Cookies" behauptet. | **erledigt** | Consent-Gate (`src/utils/consent.ts`); Clarity liegt im Lazy-Chunk und wird erst nach Zustimmung geladen. `grep -c 'clarity.ms' dist/index.html` → 0 |
| S0-2b | Plausible/Umami wird an 7 Stellen als eigene Praxis beworben, real läuft Clarity. | **vorgelegt** | Geschäftsaussage — siehe Entscheidungsvorlage |
| S0-3 | **Erfundene Testimonials** (`testimonials.ts:16-41`) mit 5-Sterne-Rating und nie erbrachten Leistungen. | **erledigt** | Datei gelöscht, Sektion und Toggle aus `index.astro` entfernt |
| S0-4 | **„Demnächst"-Platzhalter** (Calendly) live auf `/kontakt`. | **erledigt** | `grep -c 'Demnächst' dist/kontakt.html` → 0 |

### S1 — Sichtbarkeit

| ID | Befund | Status | Beleg |
|---|---|---|---|
| S1-1 | **6 von 9 Stadt-Landingpages waren Orphans** (0 interne Inbound-Links): Bamberg, Kronach, Lichtenfels je Webdesign + SEO. | **erledigt** | Jetzt von Startseite **und** sitewide im Footer verlinkt |
| S1-2 | `LocalSection.astro:46-62` rendert 8 Ortsnamen als `<span>`-Pills statt Links. | **erledigt** | Pills sind Links mit keyword-tragendem Ankertext („Webdesign Coburg") |
| S1-3 | **Hub–Spoke einseitig gebrochen:** keine der 5 Leistungsseiten verlinkte einen Blog-/Wissen-Artikel. | **erledigt** | `RelatedContent.astro` + `content-clusters.ts`; jeder Hub verlinkt 3–5 Spokes |
| S1-4 | **Keyword-Kannibalisierung:** Startseiten-Title „Webdesign & Webentwicklung Coburg" dupliziert den Head-Term von `/webdesign-coburg` und `/webentwicklung-coburg`. | **erledigt** | Title → „Digitalpartner für den Mittelstand in Oberfranken"; H1 thematisch belegt |
| S1-5 | **Domain nicht im Common-Crawl-Webgraph** (PageRank `None`) — praktisch kein externes Linkprofil. | **blockiert** | Off-Page-Arbeit, nicht im Code lösbar |
| S1-6 | **Geografische Fehlverankerung:** Sitz Lichtenfels, Brand und Money-Keywords auf Coburg. | **bewusst beibehalten** | Entscheidung: Lichtenfels ausbauen, Coburg halten (kein Adresswechsel) |
| S1-7 | **Drei nicht synchronisierte Ortslisten:** `cities.ts` (ungenutzt), `LocalSection` hartkodiert, `schema.ts:99-107` erneut. | **erledigt** | `cities.ts` ist Single Source für Startseite und `areaServed`; Landingpage-Links kommen aus `local-services.ts` |

### S2 — Schema und Meta

| ID | Befund | Status | Beleg |
|---|---|---|---|
| S2-1 | **2× FAQPage und 2× BreadcrumbList** je Stadt-/Wissen-Seite, mit widersprüchlichen Labels („Webdesign Coburg" vs. „Webdesign coburg"). | **erledigt** | `FAQ.astro` ist reine Präsentation; `PageLayout` alleiniger Breadcrumb-Erzeuger; `LABEL_MAP` aus `local-services.ts` abgeleitet. Je 1 pro Seite |
| S2-2 | **og:image-Default divergent:** `seo.ts:33` `.jpg` vs. `BaseHead.astro:20` `.webp`. | **erledigt** | Einheitlich `.jpg` in `seo.ts`, `BaseHead.astro`, `schema.ts`. Die 2 Blog-Hero-Bilder bleiben gewollt eigenständig |
| S2-3 | **Sitemap-`lastmod` wertlos:** `new Date()` für alle 35 URLs. | **erledigt** | `serialize()` liest `updatedDate`/`pubDate`; 15 URLs mit echtem Datum, 20 ohne statt falschem |
| S2-4 | Schwache Entity-Signale: kein GBP in `sameAs`, `logo` als SVG, kein `ContactPage`. | **teilweise erledigt** | `ContactPage`-Schema ergänzt. GBP-`sameAs` und Logo-Raster: siehe blockiert |
| S2-5 | **`.html`-Dubletten liefern HTTP 200** (`/webentwicklung-coburg.html`), GSC hat eine indexiert. | **hinfaellig** | Canonicals der `.html`-Varianten zeigen korrekt auf die saubere URL — live geprüft für 4 URLs. Kein Eingriff nötig |

### S3 — Content und GEO

| ID | Befund | Status | Beleg |
|---|---|---|---|
| S3-1 | **llms.txt kannte keine einzige Stadt-Seite** und listete null Wissen-Einträge; Blog-Titel wichen ab. | **erledigt** | Als Endpoints (`llms.txt.ts`, `llms-full.txt.ts`) aus den Datenquellen generiert: 9 Stadt-URLs, 6 Wissen, 9 Blog. `robots.txt` verweist darauf |
| S3-2 | **Content-Stillstand:** letzter Artikel 2026-05-26, 8 von 9 Posts ohne `updatedDate`. | **blockiert** | Datum ohne echte Überarbeitung wäre eine Falschangabe |
| S3-3 | **FAQ-Duplikate:** alle 9 Blog-Posts führen FAQs doppelt (Frontmatter + Markdown-Body). | **vorgelegt** | Redaktionelle Entscheidung, siehe Vorlage |
| S3-4 | **Falsches H2 auf 9 Seiten:** „Was Sie von einem Webdesigner aus Coburg erwarten dürfen" — auch auf `/seo-bamberg`. | **erledigt** | Jetzt service- und stadtabhängig; Formulierung „für <Stadt>" statt „aus <Stadt>", da der Sitz Lichtenfels ist |
| S3-5 | Kategorien inkonsistent; `industries.ts` mit toten `/branchen/*`-hrefs; `LandingPageLayout` ungenutzt; keine 404-Seite; `package.json` heißt `tmp-astro-init`. | **erledigt** | Enum + Anzeige-Labels; tote hrefs entfernt; Layout gelöscht; `404.astro` mit `noindex`; Paket umbenannt |

**Ausdrücklich kein Befund:** Der Fließtext der 9 Stadt-Seiten ist echt unikat
(5-gram-Jaccard: kein Paar über 25 %; Blockvergleich Coburg↔Bamberg: 6 geteilte Blöcke,
allesamt Template-Fragmente). Kein Doorway-Page-Problem.

**Widerlegt:** Die Annahme „seit 3 Monaten kein Deploy" ist falsch — `last-modified` der
Startseite (10.06. 15:43 UTC) passt exakt zum letzten Commit (15:40 UTC), alle Workflow-Runs
grün. Es wurde nichts committet, nicht: nichts deployed. Ebenso falsch war der Zwischenbefund
„WhatsApp fehlt in der Datenschutzerklärung" — es existiert Abschnitt 6.

---

## Verifikation

31 Checks, alle grün. Vollständig reproduzierbar über den Build:

```bash
npm run build

grep -rl 'formspree.io/f/FORM_ID' dist/ | wc -l          # 0
grep -c 'clarity.ms' dist/index.html                      # 0  (vor Consent)
grep -c 'cookie-decline' dist/index.html                  # 1  (Ablehnen gleichwertig)
for c in webdesign-bamberg seo-bamberg webdesign-kronach \
         seo-kronach webdesign-lichtenfels seo-lichtenfels; do
  grep -c "href=\"/$c\"" dist/index.html                  # jeweils >=1
done
for h in webdesign webentwicklung seo ki-beratung; do
  grep -oE 'href="/(blog|wissen)/[a-z0-9-]+"' dist/leistungen/$h.html | sort -u | wc -l
done                                                      # jeweils >=3
grep -o '"@type":"FAQPage"' dist/webdesign-coburg.html | wc -l        # 1
grep -o '"@type":"BreadcrumbList"' dist/webdesign-coburg.html | wc -l # 1
grep -c 'Webdesign coburg' dist/webdesign-coburg.html                 # 0
grep -cE 'de/(webdesign|seo|webentwicklung)-(coburg|bamberg|kronach|lichtenfels)' dist/llms.txt  # 9
grep -rl 'Webdesigner aus Coburg erwarten' dist/ | wc -l              # 0
```

Regressionskontrolle: 38 Seiten gebaut, 35 Sitemap-URLs, kein fehlender Canonical,
`noindex` nur auf `/404`, `/impressum`, `/datenschutz`.

---

## Offen

**Blockiert (externe Angabe nötig):** GBP-Profil-URL für `sameAs` · Logo als Rasterbild
(≥112 px) statt `favicon.svg` · echte Bewertungen für `aggregateRating` · `updatedDate`
nur nach echter Artikel-Überarbeitung · Backlink-Aufbau gegen S1-5.

**Nicht umgesetzt, bewusst:** `potentialAction`/SearchAction im `WebSite`-Schema — die Site
hat keine Suchfunktion, die Auszeichnung wäre eine Falschangabe.

**Nächste Stufe (Volumen):** Transaktions-Longtail („homepage erstellen lassen coburg",
47 Impr. ohne Zielseite) · Branchenseiten `/branchen/*` (Inhalte liegen in `industries.ts`) ·
weitere Städte erst nach Wirkungsnachweis.
