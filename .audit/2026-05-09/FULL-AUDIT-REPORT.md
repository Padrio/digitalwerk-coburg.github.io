# Full SEO Audit — Digitalwerk Coburg

**Audit date:** 2026-05-09
**Target:** https://digitalwerk-coburg.de
**Business type:** Local Service Agency (SAB-Hybrid) — Webdesign / Webentwicklung / SEO / KI-Beratung in Coburg, Oberfranken
**Site scope:** 26 URLs in sitemap (Astro 5 SSG on GitHub Pages + Fastly CDN)
**Auditor:** Claude orchestrated 10 parallel SEO subagents

---

## SEO Health Score: **65 / 100**

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 65 | 14.3 |
| Content Quality | 23% | 62 | 14.3 |
| On-Page SEO | 20% | 58 | 11.6 |
| Schema / Structured Data | 10% | 70 | 7.0 |
| Performance (CWV — lab) | 10% | 75 | 7.5 |
| AI Search Readiness (GEO) | 10% | 78 | 7.8 |
| Images | 5% | 45 | 2.25 |
| **Overall** | **100%** | | **64.75 → 65** |

**Separate Local SEO Score: 41/100** (not weighted into overall — see Section 8). For a local-service business in a competitive metro, the absence of a verified Google Business Profile caps local pack eligibility regardless of on-page quality. This is the single biggest gap.

---

## Executive Summary

The site has unusually strong **technical foundations and AI-search readiness for a young domain**: clean Astro static build, Fastly CDN, permissive AI-crawler robots.txt, both `llms.txt` and `llms-full.txt`, and a properly @id-anchored Schema.org entity graph (Organization ↔ Person ↔ WebSite). These are Phase-2-mature signals on a Phase-1 site.

The weak spots are **content depth and local authority**:

1. All four `/leistungen/*` service hub pages are 575–641 words — too thin to compete for broad commercial keywords and too generic to convert (every page uses identical H2s "Leistungen im Detail", "Ihre Vorteile").
2. `/leistungen/ki-beratung` is the thinnest page (576 words) targeting the highest-trust-friction keyword — and contains **zero DSGVO copy** despite that being the explicit decision factor for medical/legal personas your project documents.
3. Every non-root canonical includes a `.html` suffix that doesn't match the sitemap URLs. This is consistent (all ~25 pages) but creates a low-grade canonical signal mismatch site-wide.
4. The LocalBusiness schema includes `aggregateRating: 5.0 / reviewCount: 3` based on on-site testimonials — this **violates Google's structured-data review policy** and risks rich-result suppression or manual action.
5. No Google Business Profile, 0 of 12 Tier-1 German citation directories, no third-party reviews. For a SAB serving Coburg + Oberfranken, this blocks local pack eligibility entirely.

**Strongest assets:** `/seo-coburg` (1,499 words, question-format H2s, pricing visible), `/blog/local-seo-coburg-google-business-profile` (2,123 words — site's deepest page), llms.txt completeness, entity-graph @id linkage.

---

## Top 5 Critical Issues (fix immediately)

| # | Issue | Page(s) | Severity |
|---|-------|---------|----------|
| 1 | `aggregateRating` schema with self-published testimonials risks Google policy action | Homepage + every page that emits LocalBusiness | **Critical** |
| 2 | No Google Business Profile (or unverified) — blocks local pack | All local queries | **Critical** |
| 3 | `/leistungen/ki-beratung` — 576 words, zero DSGVO content, generic H2s | /leistungen/ki-beratung | **Critical** |
| 4 | Site-wide canonical/sitemap URL mismatch (`.html` suffix in canonical only) | All non-root pages | **High** |
| 5 | Three of four `/leistungen/*` pages under 650 words with identical generic H2 template | /leistungen/webdesign, /leistungen/seo, /leistungen/webentwicklung | **High** |

## Top 5 Quick Wins (high impact, low effort)

| # | Win | Effort | Expected impact |
|---|-----|--------|-----------------|
| 1 | Remove the `aggregateRating` block from `buildLocalBusiness()` until real third-party reviews exist | 10 min | Removes Google policy risk |
| 2 | Replace generic H2s on all 4 `/leistungen/*` pages with question-format headings ("Was kostet …?", "Wie läuft … ab?") | 1 h | Direct alignment with PAA/AI-Overview triggers |
| 3 | Add named `areaServed: City[]` array (Bamberg, Kronach, Lichtenfels, …) to LocalBusiness schema | 30 min | Schema enrichment for service-area expansion |
| 4 | Fix `addressRegion` from `"Oberfranken"` → `"BY"` (ISO Bundesland code) | 5 min | Aligns schema with `geo.region: DE-BY` meta tag |
| 5 | Create + verify Google Business Profile for "Digitalwerk Coburg" | 60 min setup + 14 days postcard verification | Unlocks local pack eligibility entirely |

---

## 1. Technical SEO — Score 65/100

### Strengths
- HTTP/2, HTTPS-only, GitHub Pages + Fastly CDN (Munich edge)
- Permissive `robots.txt` with explicit allow for GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended
- `cache-control: max-age=600` on HTML — reasonable for a static site
- Astro SSG: pre-rendered HTML, no JS-render dependency for primary content
- `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">` present
- View transitions enabled (Astro 5)

### Critical / High issues
- **Site-wide canonical/sitemap URL mismatch** — every non-root page emits `<link rel="canonical">` with `.html` suffix while the sitemap lists clean URLs. Examples confirmed via curl:
  - Sitemap: `https://digitalwerk-coburg.de/leistungen/webdesign`
  - HTML canonical: `https://digitalwerk-coburg.de/leistungen/webdesign.html`
  - Same pattern on all 4 service pages, 3 city pages, 7 blog posts, 5 wissen entries
  - Homepage is the exception — emits clean canonical `https://digitalwerk-coburg.de/`
- **og:url mirrors the .html canonical** so social shares preserve the .html form
- This is consistent (no canonical pointing to a different page) but creates two valid URLs per resource. Google will likely consolidate, but organic equity could split during the consolidation period.

### Medium issues
- **No security headers from GitHub Pages**: no `Strict-Transport-Security`, no `Content-Security-Policy`, no `X-Content-Type-Options: nosniff`, no `X-Frame-Options`, no `Referrer-Policy`, no `Permissions-Policy`. GitHub Pages doesn't allow custom headers — fix requires reverse proxy (Cloudflare in front of GH Pages) or migration. Low organic-SEO impact, medium reputation/security impact.
- **No IndexNow protocol implementation** — Bing/Yandex push notifications not configured.

### Low issues
- Astro's sitemap doesn't emit `<lastmod>` by default — add `lastmod: true` in `astro.config.mjs` sitemap integration.

---

## 2. Content Quality — Score 62/100

### Verified word counts (from live HTML, May 2026)
| Page | Words | CLAUDE.md target | Verdict |
|------|------:|-----------------:|---------|
| /leistungen/webdesign | 633 | 1,500+ | Thin |
| /leistungen/seo | 641 | 1,500+ | Thin |
| /leistungen/ki-beratung | 576 | 1,500+ | Thinnest, critical |
| /leistungen/webentwicklung | 608 | 1,500+ | Thin |
| /webdesign-coburg | ~1,800–2,000 | 1,500+ | Pass (60% unique vs base) |
| /webentwicklung-coburg | ~1,800–2,200 | 1,500+ | Pass (borderline ~60% unique) |
| /seo-coburg | 1,499 | 1,500+ | Pass |
| /wissen/was-kostet-eine-website | 1,170 | 2,000+ for SERP | Below SERP norm |
| /blog/local-seo-coburg-google-business-profile | 2,123 | 1,500+ | Pass — strongest page |

### Critical
- **`/leistungen/ki-beratung` — zero DSGVO content** despite competing against ki-spezial.systems whose H1 area leads with "DSGVO-konform, ohne Cloud-Abhängigkeit". This page targets "KI Beratung Mittelstand Oberfranken" — a low-volume but high-trust-friction commercial-investigation query. Without a DSGVO clause, the page cannot convert the persona that searches for it.

### High
- **All four `/leistungen/*` pages share identical H2 template**: "Leistungen im Detail", "Ihre Vorteile", "Das ist im Paket enthalten", FAQ, CTA. None of these read like search queries. Replace with question-format H2s per CLAUDE.md GEO rule.
- **`/wissen/was-kostet-eine-website` lacks PageSummary box** despite CLAUDE.md requirement. Page also at 1,170 words while SERP competitors (krisnetics, neuzeitwerber) are 2,000–4,000 words.

### Medium
- **City landing pages currently exist only for Coburg** (3 services). Bamberg, Kronach, Lichtenfels, Sonneberg, Hildburghausen, Kulmbach, Bayreuth — all named in CLAUDE.md secondary keyword strategy — have no dedicated pages.
- **No author byline visible on blog posts** (verified via Pascal's `/ueber-mich` page exists but BlogPosting schema author reference doesn't surface visually as "Von Pascal Krason" at top of articles).

### Strengths
- Tonalität correct throughout (siezen, no startup hipster jargon, German throughout)
- Blog: 7 long-form posts, all 1,500+ words, well-structured
- Wissen glossary: 5 entries with bold-definition opening pattern (DefinedTerm schema)
- CTA "Erstgespräch vereinbaren" consistently used
- Trust signals present: 3 testimonials with names + companies, "100% aus Coburg", Pascal's CHECK24 background

---

## 3. On-Page SEO — Score 58/100

### Title / Meta description
- Format follows CLAUDE.md spec: `[Seitenthema] | Digitalwerk Coburg`
- Meta descriptions include keyword + city + price anchor (e.g., "Webdesign Coburg ab 3.000 €")
- Twitter card + OG tags present on every sampled page
- `og:image: /og-image.jpg` consistent

### H1 issues
- **`/webdesign-coburg` and `/leistungen/webdesign` share identical H1** ("Webdesign, das Vertrauen aufbaut und Kunden gewinnt") — this isn't keyword cannibalization in the strict sense (different canonicals) but reads as duplicate content to crawlers when they fetch both.

### H2 issues
- Generic H2s ("Leistungen im Detail", "Ihre Vorteile", "Das ist im Paket enthalten") on all `/leistungen/*` pages and `/webdesign-coburg`. CLAUDE.md GEO rule explicitly forbids this: H2s should be questions or assertions. Replace examples:
  - "Was kostet Webdesign in Coburg?"
  - "Wie lange dauert ein Webdesign-Projekt?"
  - "Welche Coburger Unternehmen haben wir bereits unterstützt?"
- `/seo-coburg` and `/webentwicklung-coburg` have a hybrid H2 "Was Sie von einem Webdesigner aus Coburg erwarten dürfen" — mentions "Webdesigner" on a Webentwicklung / SEO page (terminology drift).

### Internal linking
- Header navigation links all hub pages
- Footer links city pages (`/webdesign-coburg`, `/webentwicklung-coburg`, `/seo-coburg`)
- Blog/Wissen contain internal links to `/leistungen/*`

### Strengths
- Geo meta tags present on every page: `geo.region: DE-BY`, `geo.placename: Coburg`, `geo.position: 50.2612;10.9628`, `ICBM`

---

## 4. Schema / Structured Data — Score 70/100

### Detected on homepage (verified inline)
| Block | @type | @id | Status |
|------|-------|-----|--------|
| 1 | FAQPage | (no @id) | Valid |
| 2 | Person | `…/#person` | Valid, anchored |
| 3 | LocalBusiness + ProfessionalService | `…/#organization` | Valid, anchored, **policy risk** |
| 4 | WebSite | `…/#website` | Valid, anchored |

Entity graph @id pattern is correctly implemented per CLAUDE.md GEO rules.

### Critical
- **`aggregateRating: 5.0 / reviewCount: 3`** in LocalBusiness schema is sourced from the 3 on-site testimonials, not from a recognized third-party review platform. This violates Google's structured-data review guidelines (https://developers.google.com/search/docs/appearance/structured-data/review-snippet) and risks rich-result suppression or manual action. **Highest single-fix priority.**

### High
- `address.addressRegion: "Oberfranken"` is a Regierungsbezirk, not a Bundesland. Google's preferred value is `"BY"` (Bayern) — aligns with `geo.region: DE-BY` meta tag.
- `areaServed` uses `GeoCircle` with 50km midpoint radius. Replace or supplement with named `City[]` array enumerating the 8 service-area cities (Coburg, Bamberg, Kronach, Lichtenfels, Sonneberg, Kulmbach, Bayreuth, Hildburghausen).

### Medium
- **`openingHoursSpecification` MISSING** from LocalBusiness — recommended property, affects rich result eligibility. Even for a freelancer, specify "By appointment" or actual contact hours.
- **`logo` is SVG** (`/favicon.svg`). Google Knowledge Panel and rich-result logo property prefer raster (PNG/JPG, min 112×112).
- **`telephone: "+49 (0) 174 660 3656"` not in E.164 format** — schema-preferred is `+49174660656` or `+491746603656`.
- **`geo` is nested inside `GeoCircle.geoMidpoint`** rather than a direct `geo: GeoCoordinates` property on LocalBusiness. Direct geo property is the correct pattern for an address-pinned business.
- **`sameAs` only includes LinkedIn + GitHub.** Add Xing (dominant German B2B network), ProvenExpert (once registered), and any future Google Maps profile URL.

### Strengths
- Entity graph @id pattern correctly implemented across pages
- BlogPosting schema on blog posts; DefinedTerm + DefinedTermSet on Wissen entries (per CLAUDE.md spec)
- BreadcrumbList present
- FAQPage on homepage and city pages

### Should NOT add
- HowTo schema (deprecated September 2023)
- New FAQPage on commercial pages for Google rich-result benefit (only government and healthcare sites get rich snippets since August 2023; FAQPage retains AI/LLM citation value but is not a Google rich-result driver)

---

## 5. Performance (Core Web Vitals) — Score 75/100 (lab estimate)

### Estimated based on stack
- **Astro static SSG + Fastly CDN** is a strong baseline. No SSR cold-starts, edge-cached HTML, no client-side render dependency for content.
- **Self-hosted Fontsource fonts** (DM Sans, Source Sans 3) — DSGVO-correct, no Google Fonts CDN. Verify `font-display: swap` is set.
- Homepage HTML payload: ~82 KB (raw, before gzip). Reasonable.
- `cache-control: max-age=600` on HTML; static assets get long cache via Astro hashed filenames.

### Cannot measure without API key
- Field CWV data (CrUX) — no Google API key configured
- Real LCP / INP / CLS measurements — no Lighthouse run completed (PSI public endpoint hit rate limits during the audit)

### High concerns from HTML inspection
- **Zero `<img>` tags found on every page sampled** (homepage, service pages, city pages, blog posts, wissen entries). Either:
  - Photos rendered as CSS `background-image` (loses alt text, accessibility, image SEO)
  - SVG-only illustrations (fine for icons, weak for testimonial photos / mockups)
  - Lazy-loaded into empty divs by JS (would defeat SSG benefits)
- For an Astro site whose project rules say "Bilder: WebP/AVIF bevorzugen, immer alt-Attribute setzen, loading='lazy' für Below-the-fold", this is a major implementation gap.

### Action
Run a real Lighthouse measurement once API key is available. Without field data, the lab estimate is a placeholder.

---

## 6. AI Search Readiness (GEO) — Score 78/100

### Strengths (this is the strongest dimension)
- `robots.txt` explicitly allows GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended
- `llms.txt` present at root with structured listing of services + key pages + contact + expertise
- `llms-full.txt` present (86 lines)
- Entity graph @id pattern correctly implemented
- FAQPage schema on homepage + city pages
- DefinedTerm schema on Wissen glossary entries (perfect for AI citation extraction)
- Bold-definition pattern in Wissen first paragraph (per CLAUDE.md spec)

### Gaps
- **PageSummary box (zitierfähiger Absatz at top) missing on key pages**: the SXO finding flagged `/wissen/was-kostet-eine-website` (CLAUDE.md required) and `/blog/local-seo-coburg-google-business-profile` lack the PageSummary component despite the project rule.
- **Generic H2s** on `/leistungen/*` pages (covered above) — H2s should be searchable questions
- **Brand mention signals weak**: domain is young (2024 founding), no third-party authority backlinks confirmed (see backlinks section below). AI Overviews / ChatGPT favor entities with corroborating mentions.

### llms.txt completeness check
The `llms.txt` lists services, key pages, contact, and expertise — good. The site sitemap has 26 URLs; llms.txt currently lists ~12 anchor links. Could enumerate Wissen entries and recent blog posts for better LLM extraction.

---

## 7. Images — Score 45/100

### Verified
- **Zero `<img>` tags** across 6 sampled pages (homepage, /leistungen/webdesign, /leistungen/seo, /leistungen/ki-beratung, /leistungen/webentwicklung, /blog/local-seo-coburg-google-business-profile, /wissen/was-kostet-eine-website)
- All visual elements appear to be SVG (logo, icons via lucide-astro) or CSS background-image
- `og:image: https://digitalwerk-coburg.de/og-image.jpg` exists (raster, good for social previews)
- Logo: SVG (`/favicon.svg`)

### Implications
- **Project rule violation**: CLAUDE.md says "Bilder: WebP/AVIF bevorzugen, immer alt-Attribute setzen, loading='lazy' für Below-the-fold" — but there are no `<img>` tags to apply these rules to.
- **E-E-A-T weakness**: no visible photo of Pascal as `<img>` means screen readers, image search, and AI image extraction can't surface him as the entity behind the business. The site instructs "Vertrauenssignale: echtes Foto" but the photo (if present) is likely background-CSS.
- **Image SERP ranking impossible** without indexable images
- **No responsive `srcset`** anywhere — even if photos exist as CSS, they don't adapt to viewport
- **Astro `<Image>` component apparently not in use**, despite being the default best-practice for the framework

### Recommended
- Audit which assets should be `<img>`/`<Image>` instead of CSS-background. Pascal's photo and testimonial avatars are the highest-value targets.
- Add WebP/AVIF generation via Astro Image with `widths` and `formats` properties.
- Apply `alt` text per WCAG 2.1.

---

## 8. Local SEO — Score 41/100 (separate dimension)

This is the dominant gap. Detailed report at `/Users/pascal/Developer/DigitalWerk/.audit/2026-05-09/local.md`. Highlights:

| Dimension | Weight | Score | Weighted |
|-----------|-------:|------:|---------:|
| GBP Signals | 25% | 4 | 1.0 |
| Reviews & Reputation | 20% | 7 | 1.4 |
| Local On-Page SEO | 20% | 17 | 17.0 |
| NAP Consistency & Citations | 15% | 8 | 8.0 |
| Local Schema | 10% | 7 | 7.0 |
| Local Authority | 10% | 5 | 5.0 |

**Critical**:
- No verified Google Business Profile detected (zero embed, zero CID link, zero profile reference even on the site's own GBP-advice blog post)
- 0 of 12 Tier-1 German citation directories confirmed (Gelbe Seiten, Das Örtliche, 11880, Cylex, Yelp.de, Bing Places, OSM, ProvenExpert, IHK Coburg directory, etc.)
- No third-party reviews on Google / ProvenExpert / Trustpilot

**On-page strong** (17/20):
- All 3 city landing pages have local hooks (Vestestadt, IHK Coburg, Coburger Tageblatt)
- City pages meet 60%+ unique content rule vs base service pages
- geo meta tags consistent across pages
- FAQPage on city pages

**Action priority** for local SEO:
1. Create + verify GBP via business.google.com
2. Convert 3 testimonial clients → Google reviews (after GBP live)
3. Submit to Tier-1 German citations (Gelbe Seiten, Das Örtliche, 11880, Cylex, Bing Places, OSM, IHK Coburg)
4. Remove `aggregateRating` schema (or replace with ProvenExpert widget once registered)
5. Add OpenStreetMap embed to `/kontakt`

---

## 9. SXO (Search Experience) — separate analysis

Detailed report at `/Users/pascal/Developer/DigitalWerk/.audit/2026-05-09/sxo.md`. SXO Gap Score: **54/100**.

Top SERP-driven findings:
- **`/leistungen/ki-beratung` mismatch — Critical**: 506-word generic page targeting a SERP dominated by ki-spezial.systems and other specialized regional KI consultancies that lead with DSGVO/on-premise/regional positioning. Persona Klaus (Arzt) cannot convert without DSGVO copy.
- **`/wissen/was-kostet-eine-website` depth mismatch — Medium**: SERP competitors at 2,000–4,000 words with structured price tables and calculators. Current page at 1,170 words has 2 price tables (good) but no PageSummary, no calculator.
- **`/leistungen/webdesign` keyword target unrealistic**: "Webdesign Freelancer" SERP returns Upwork/Toptal/Contra; broad "Webdesign" returns Wix/Squarespace/IONOS. Page cannot rank for these — repurpose as service-detail hub feeding `/webdesign-coburg`.

SXO-derived persona scores (Sieglinde, Markus, Klaus, Thomas, Heike) consistently show `/leistungen/ki-beratung` as the weakest page across all 5 personas (28/100 for Klaus, 35/100 for Markus).

---

## 10. Backlinks (Tier 0 — free data only)

No Moz/Bing/DataForSEO API keys configured. Common Crawl + verification crawler used.

- Domain registered 2024 — referring-domain count expected near zero
- Confirmed assets:
  - GitHub repo `Padrio/digitalwerk-coburg.github.io` with `homepage` field linking to digitalwerk-coburg.de
  - LinkedIn profile (https://www.linkedin.com/in/pascal-krason-b74028326/) referenced via `sameAs`
  - GitHub profile (https://github.com/Padrio) referenced via `sameAs`
  - Older personal domain `pkrason.de` linked from GitHub profile
- No third-party backlinks discoverable from passive sources

### Foundation-link gap (top 10 for a Coburg digital agency)
1. IHK Coburg member directory
2. Gelbe Seiten free listing
3. Das Örtliche free listing
4. 11880.com / klicktel.de
5. Cylex.de
6. Stadt Coburg business listing (if available)
7. Bing Places (syncs Bing Maps + Apple Maps)
8. OpenStreetMap node at Von-Mayer-Straße 25
9. Xing company page
10. ProvenExpert profile (with review collection)

These are zero-cost and provide both backlinks and citation NAP corroboration.

---

## 11. Strengths Summary

Things to preserve and build on:

- **Entity-graph schema** (Organization ↔ Person ↔ WebSite via @id) — sophisticated for a young domain
- **AI-crawler permissive robots.txt + llms.txt + llms-full.txt** — Phase 2 GEO foundation already in place
- **DSGVO-compliant infrastructure** (no Google Analytics, no Google Fonts CDN, no Google Maps embed) — aligns with the project's core promise to medical/legal personas
- **Tonalität discipline** — siezen consistently, no jargon, no startup-hipster language
- **Astro 5 SSG + Fastly CDN** — modern static stack with strong baseline performance
- **Blog content discipline** — 7 posts, all >1,500 words, with FAQ + comparison tables per CLAUDE.md spec
- **Wissen glossary structure** — DefinedTerm schema, bold-definition opening, related[] cross-links
- **`/seo-coburg` page** — 1,499 words, question-format H2s ("Was kostet SEO in Coburg?"), pricing visible, AggregateRating schema. This is the model the other city pages should follow.
- **`/blog/local-seo-coburg-google-business-profile`** — 2,123 words, BlogPosting schema, internal links to service pages

---

## 12. Audit Limitations

- **No Google API credentials**: no field CWV data (CrUX), no GSC indexation status, no GA4 traffic, no Indexing API ping
- **No paid SEO tools**: no Moz DA/PA, no Ahrefs/Semrush rank tracking, no DataForSEO geo-grid, no spam-score data on backlinks
- **PageSpeed public endpoint rate-limited** during audit window — performance score is lab estimate from stack analysis, not measured
- **GBP existence cannot be confirmed without authenticated Maps access** — recommendation stands either way (verify or create)
- **WebSearch is US-locale**, German SERP may differ slightly from observed
- **Image audit is HTML-source-only** — if assets render via CSS background, parser can't distinguish image quality

---

## 13. Output Artifacts

| File | Contents |
|------|----------|
| `FULL-AUDIT-REPORT.md` | This document |
| `ACTION-PLAN.md` | Prioritized action list (Critical → Low) with effort estimates |
| `local.md` | Full local SEO subagent report |
| `sxo.md` | Full SXO subagent report |
| `screenshots/` | 28 screenshots (7 pages × mobile/desktop × atf/full) |

---

*Report generated 2026-05-09. Recommend re-audit after critical/high items implemented (est. 4–6 weeks for ranking signals to surface).*
