# Action Plan — Digitalwerk Coburg SEO Audit

**Generated:** 2026-05-09
**Overall SEO Health Score:** 65/100 — see `FULL-AUDIT-REPORT.md`
**Local SEO Score:** 41/100 (separate)

Items grouped by priority. Each entry includes effort estimate (15min / 1h / 2h+ / day+) and expected impact.

---

## Critical — fix this week

### C-1. Remove `aggregateRating` from LocalBusiness schema (or replace with real third-party widget)
**Why:** Schema includes `ratingValue: 5.0 / reviewCount: 3` sourced from on-site testimonials. This violates Google's structured-data review policy ([reference](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)) and risks rich-result suppression or manual action.

**Where:** `src/utils/schema.ts`, `buildLocalBusiness()` — locate the `aggregateRating` block and remove. Re-add only when ProvenExpert / Google reviews exist as a real third-party source.

**Effort:** 10 min
**Impact:** Removes acute Google policy risk

---

### C-2. Create + verify Google Business Profile
**Why:** No GBP detected. For a SAB hybrid (physical address + remote service area) targeting "Webdesign Coburg" / "SEO Coburg" / "Webentwicklung Coburg", local pack eligibility is zero without a verified profile. This is the single biggest local-SEO blocker.

**Steps:**
1. Go to [business.google.com](https://business.google.com)
2. Create profile "Digitalwerk Coburg"
3. Primary category: "Webdesigner" or "Internet-Marketing-Agentur" (verify available German category names)
4. Secondary: "IT-Dienstleistungen", "SEO-Agentur"
5. Set up as Service Area Business; enumerate 8 service cities (Coburg, Bamberg, Kronach, Lichtenfels, Sonneberg, Kulmbach, Bayreuth, Hildburghausen)
6. Upload ≥10 photos: headshot, workspace, logo, portfolio thumbnails
7. Write 750-char description with primary keywords
8. List services with price ranges (e.g., "Webdesign ab 3.000 €")
9. Set hours (or "By appointment")
10. Submit for verification (postcard for SAB, ~14 days)

**Effort:** 60 min setup + 14-day verification window
**Impact:** Unlocks local pack eligibility

---

### C-3. Rebuild `/leistungen/ki-beratung` with DSGVO copy + regional positioning
**Why:** 576 words (thinnest page on site) targeting "KI Beratung Mittelstand Oberfranken" — a SERP dominated by specialized regional KI consultancies that lead with "DSGVO-konform, ohne Cloud-Abhängigkeit". Persona Klaus (Vertretungsarzt) — explicitly named in the project's audience definition — scores the page 28/100. The page has zero DSGVO content.

**Action:** Add visible sections covering:
- "Wie ist KI-Beratung DSGVO-konform möglich?" (top-of-page H2, address Klaus persona directly)
- "On-premise vs. Cloud — welche Lösung passt für Praxis und Kanzlei?"
- "Welche KI-Use-Cases gibt es im Mittelstand Oberfranken?"
- Pricing table (consultation hourly rate + audit package + ongoing support)
- Reference to DSGVO Article 32 (technical safeguards) without legal jargon
- Optionally: create dedicated `/ki-beratung-coburg` city LP

**Effort:** 3–4 h
**Impact:** Critical — unlocks conversion for highest-trust-friction keyword

---

### C-4. Fix site-wide canonical/sitemap URL mismatch (.html suffix)
**Why:** Every non-root canonical adds `.html` (e.g., `/leistungen/webdesign.html`) while sitemap lists clean URLs (`/leistungen/webdesign`). Confirmed via curl on 6 sampled pages. Creates two valid URLs per resource and could split organic equity during Google's consolidation.

**Where:** `src/utils/seo.ts` `buildSeoMeta()` and/or page templates that pass `canonical` prop. Likely a shared helper hardcodes `.html` extension. Check Astro routing config — verify whether GitHub Pages serves both `/leistungen/webdesign` and `/leistungen/webdesign.html` (likely yes via `trailingSlash: 'never'` setting).

**Action:** Either:
- Strip `.html` from canonical (preferred) — match sitemap
- Or update sitemap to include `.html` (less clean)

Verify after fix that `og:url` also matches.

**Effort:** 30 min
**Impact:** Removes site-wide canonical signal noise

---

## High — fix within 2 weeks

### H-1. Replace generic H2s on all 4 `/leistungen/*` pages with question-format headings
**Why:** Pages share identical H2 template ("Leistungen im Detail", "Ihre Vorteile", "Das ist im Paket enthalten"). CLAUDE.md GEO rule explicitly forbids this — H2s should be searchable questions or assertions.

**Recommended H2 set per page:**
- `/leistungen/webdesign`: "Was kostet Webdesign?", "Wie lange dauert ein Webdesign-Projekt?", "Welche Branchen unterstützen wir?", "Wie läuft ein Webdesign-Auftrag ab?"
- `/leistungen/webentwicklung`: already has decent H2s on city page — port the question-format H2s back here
- `/leistungen/seo`: "Wie funktioniert SEO?", "Was kostet SEO-Beratung?", "Wann sehe ich erste SEO-Ergebnisse?", "Welche SEO-Leistungen sind sinnvoll für KMU?"
- `/leistungen/ki-beratung`: see C-3 above

**Effort:** 1 h
**Impact:** Direct alignment with PAA / AI Overview triggers

---

### H-2. Expand `/leistungen/*` pages from 576–641 words to 1,200+ words
**Why:** All under 650 words vs CLAUDE.md 1,500-word minimum. Each is meant to be a hub serving its city LP — currently too thin to rank or convert.

**Target structure per page:** Hero → Trust bar → Pricing → Service detail → Process → FAQ (5 questions) → CTA. Reference `/seo-coburg` (1,499 words) as the working template.

**Effort:** 4–6 h total (1–1.5 h each)
**Impact:** Hub depth + topical authority

---

### H-3. Differentiate `/leistungen/webdesign` H1 from `/webdesign-coburg`
**Why:** Both pages currently share H1 "Webdesign, das Vertrauen aufbaut und Kunden gewinnt". Even with separate canonicals, identical H1 reads as duplicate to crawlers when both are fetched.

**Suggested:**
- `/leistungen/webdesign` → "Webdesign — der Service im Überblick" (hub framing)
- `/webdesign-coburg` → "Webdesign Coburg — Websites, die Kunden gewinnen" (city framing, exact-match keyword)

**Effort:** 15 min
**Impact:** Removes duplicate H1 signal

---

### H-4. Fix LocalBusiness schema details
**Action items:**

1. `address.addressRegion: "Oberfranken"` → `"BY"` (ISO Bundesland; matches `geo.region: DE-BY` meta)
2. Replace `areaServed: GeoCircle` with named `City[]` array:
   ```json
   "areaServed": [
     { "@type": "City", "name": "Coburg" },
     { "@type": "City", "name": "Bamberg" },
     { "@type": "City", "name": "Kronach" },
     { "@type": "City", "name": "Lichtenfels" },
     { "@type": "City", "name": "Sonneberg" },
     { "@type": "City", "name": "Kulmbach" },
     { "@type": "City", "name": "Bayreuth" },
     { "@type": "City", "name": "Hildburghausen" }
   ]
   ```
3. Add direct `geo` property on LocalBusiness (currently only nested in `areaServed.GeoCircle.geoMidpoint`):
   ```json
   "geo": { "@type": "GeoCoordinates", "latitude": 50.26121, "longitude": 10.96280 }
   ```
4. Add `openingHoursSpecification` (e.g., `Mo-Fr 09:00–18:00` or "By appointment")
5. Format `telephone` as E.164: `+491746603656` (no parentheses, no internal spaces in schema; visible page text can keep human format)
6. Add raster logo (PNG ≥112×112) for Knowledge Panel — current SVG works for in-page but Google prefers raster for the schema `logo` property

**Where:** `src/utils/schema.ts` `buildLocalBusiness()` and `src/data/site.ts`

**Effort:** 45 min
**Impact:** Schema precision + local rich-result eligibility

---

### H-5. Submit to Tier-1 German citation directories
**Priority order (all free):**
1. Gelbe Seiten — gelbeseiten.de
2. Das Örtliche — dasoertliche.de
3. 11880.com / klicktel.de (Coburg has 18 webdesign listings; Digitalwerk currently absent)
4. Cylex.de
5. Yelp.de
6. Bing Places — bing.com/places (syncs Bing Maps + Apple Maps)
7. OpenStreetMap — add node at Von-Mayer-Straße 25
8. IHK Coburg member directory
9. Xing company page
10. ProvenExpert (paid tier optional, free profile available)

**NAP format consistency:** use `+49 174 660 3656` (no parentheses, single spacing) across every listing — match what the schema will use after E.164 fix.

**Effort:** 2 h batch entry
**Impact:** Citation corroboration for local rankings + foundation backlinks

---

### H-6. Convert 3 on-site testimonials → Google reviews (after GBP verified)
Reach out to:
- Thomas Richter (Richter Schreinerei Coburg)
- Dr. Maria Hofmann (Praxis für Physiotherapie Hofmann)
- Stefan Weber (Weber Gastro GmbH)

Send each a personalized review request link from GBP. Target: 5 reviews in month 1, 10 within 3 months. Per the 18-day Sterling Sky rule, maintain a steady review velocity to avoid the cliff.

**Effort:** 30 min outreach + ongoing
**Impact:** Real third-party review signals (also unlocks the future return of `aggregateRating` schema)

---

### H-7. Add PageSummary box (zitierfähiger Absatz) to all `/wissen/*` and `/blog/*` entries that lack it
**Why:** CLAUDE.md content rule: "Jeder Artikel: Zusammenfassungs-Box am Anfang (1–3 Sätze, GEO-optimiert) via PageSummary-Komponente". Sample audit found this missing on `/wissen/was-kostet-eine-website` and `/blog/local-seo-coburg-google-business-profile`. Audit all 7 blog posts + 5 wissen entries; add where missing.

**Where:** Each `.md`/`.mdx` file's frontmatter `summary:` field + ensure layout renders `PageSummary`.

**Effort:** 2 h
**Impact:** Directly improves AI-Overview/ChatGPT citation eligibility

---

### H-8. Expand `/wissen/was-kostet-eine-website` from 1,170 → 2,000+ words
**Why:** SERP competitors (krisnetics.com, neuzeitwerber.de) at 2,000–4,000 words. Current page is structurally correct (price tables, H2 coverage) but ~50% of competitor depth.

**Add:**
- PageSummary box at top
- Expand "Warum sind Coburger Webdesigner oft günstiger als Großstadt-Agenturen?" into 300+ word section (this is the unique differentiating angle)
- Add interactive-style "Preis-Rechner" structured input table (5–7 questions → estimated range)
- Add author byline + datePublished/dateModified visible
- Add E-E-A-T paragraph: "Pascal Krason hat als Fachinformatiker bei CHECK24 …"

**Effort:** 3 h
**Impact:** Contender for top-3 ranking on "Was kostet eine Website 2026"

---

## Medium — fix within 1 month

### M-1. Audit and fix image strategy site-wide
Zero `<img>` tags found across 6 sampled pages. Identify which assets should be `<img>` / Astro `<Image>` rather than CSS background:
- Pascal's headshot (currently CSS background?) → `<Image>` with `alt`
- Testimonial avatars → `<Image>` (raster preferred over generated)
- Project portfolio mockups → `<Image>` with WebP/AVIF
- Service icon library (lucide-astro SVGs) — keep as-is

Apply Astro `<Image>` with `widths`, `formats={['avif','webp','jpg']}`, and `loading="lazy"` for below-fold.

**Effort:** 4 h (depends on asset count)
**Impact:** Image SERP eligibility, accessibility, performance, E-E-A-T (visible Pascal photo)

---

### M-2. Create city landing pages for service-area expansion
**CLAUDE.md secondary keywords already define:**
- /webdesign-bamberg (population 76k — biggest opportunity)
- /webdesign-kronach
- /seo-bamberg

**Per CLAUDE.md GEO checklist:** 60%+ unique content vs base service page, local hooks, city-specific FAQs (3–5), CTA with city reference, schema with City reference.

**Effort:** 4–6 h per page
**Impact:** Long-tail local keyword capture in nearby markets

---

### M-3. Add OpenStreetMap embed to `/kontakt`
DSGVO-compliant alternative to Google Maps. Renders Von-Mayer-Straße 25 with marker.

```html
<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=10.955,50.255,10.972,50.270&layer=mapnik&marker=50.2612,10.9628"
  width="100%" height="400" loading="lazy" title="Standort Coburg">
</iframe>
```

**Effort:** 30 min
**Impact:** Local relevance signal + UX

---

### M-4. Add Astro `lastmod: true` to sitemap config
Astro doesn't emit `<lastmod>` by default. Update `astro.config.mjs`:

```js
import sitemap from '@astrojs/sitemap';
// ...
sitemap({
  // existing config
  serialize: (item) => ({ ...item, lastmod: new Date().toISOString() })
})
```

**Effort:** 15 min
**Impact:** Crawl efficiency, freshness signal

---

### M-5. Add author byline component to blog posts and `/wissen/*` entries
Visible "Von Pascal Krason — aktualisiert am DD.MM.YYYY" at top of each article. Reference Pascal's `/ueber-mich` page. Component props from BlogPosting schema (`author`, `dateModified`).

**Effort:** 1 h
**Impact:** E-E-A-T visible authorship signal

---

### M-6. Expand `llms.txt` enumeration
Currently lists ~12 anchor links. Enumerate all 5 Wissen entries and 7 blog posts for better LLM extraction coverage. Keep `llms-full.txt` updated as the long-form source.

**Effort:** 30 min
**Impact:** AI search readiness

---

### M-7. Add Xing profile + ProvenExpert (once registered) to `sameAs`
Xing is the dominant German B2B network — high-priority `sameAs` addition.

**Where:** `src/utils/schema.ts` `buildLocalBusiness()` `sameAs` array

**Effort:** 30 min (incl. Xing profile creation)
**Impact:** Entity corroboration signals

---

## Low — backlog

### L-1. Add IndexNow protocol support
Bing/Yandex push notifications. Astro plugin or manual ping endpoint.

**Effort:** 1 h
**Impact:** Faster Bing/Yandex indexation

---

### L-2. Add Cloudflare in front of GitHub Pages for security headers
GitHub Pages doesn't allow custom HTTP headers. Cloudflare proxy enables HSTS, CSP, X-Content-Type-Options, Referrer-Policy.

**Effort:** 2 h
**Impact:** Reputation/security signals (low SEO impact)

---

### L-3. Generate raster logo for schema `logo` property
SVG works for in-page; Knowledge Panel prefers PNG. Generate 256×256 PNG version, point schema `logo` to it.

**Effort:** 30 min
**Impact:** Knowledge Panel logo display

---

### L-4. Add `industry use-case` row to `/webdesign-coburg`
Per persona analysis, "Gastronomie", "Handwerker", "Praxis" each warrant a 1–2 sentence callout.

**Effort:** 1 h
**Impact:** Long-tail capture ("Website für Handwerker Coburg" etc.)

---

### L-5. Capture SEO drift baseline
Run `python scripts/drift_baseline.py https://digitalwerk-coburg.de` after critical fixes are deployed. Provides snapshot for future regression detection.

**Effort:** 5 min
**Impact:** Future change tracking

---

## Suggested execution order (first 14 days)

| Day | Items |
|-----|-------|
| 1 | C-1 (remove aggregateRating), C-4 (fix .html canonicals), H-3 (differentiate H1) |
| 2 | C-2 (start GBP creation — postcard takes ~14 days) |
| 3–4 | C-3 (rebuild /leistungen/ki-beratung) |
| 5 | H-1 (question-format H2s) |
| 6 | H-4 (schema fixes — addressRegion, areaServed, geo, openingHours, telephone) |
| 7–8 | H-2 (expand 4 leistungen pages) |
| 9 | H-5 (submit to Tier-1 citations) |
| 10 | H-7 (add PageSummary site-wide) |
| 11–12 | H-8 (expand was-kostet-eine-website) |
| 13 | M-1 begin image audit |
| 14 | C-2 (GBP postcard arrives — verify), H-6 (request reviews) |

After Day 14: re-run `/seo audit https://digitalwerk-coburg.de` and compare scores.

---

## Score recovery projection

Implementing all Critical + High items projects:
- Overall SEO Health Score: 65 → ~83
- Local SEO Score: 41 → ~75
- AI Search Readiness: 78 → ~88

Projection assumes GBP verification, citation submissions, and content depth fixes complete. Backlink growth and brand mentions remain dependent on time and ongoing outreach.
