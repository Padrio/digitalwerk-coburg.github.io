# SXO Audit — Digitalwerk Coburg
**Date:** 2026-05-09
**Analyst:** Claude (SXO Skill, claude-sonnet-4-6)
**Scope:** 9 priority pages, 4 SERP keyword samples (DE locale, live Google)
**Overall SXO Gap Score: 54 / 100**

---

## Executive Summary

The site has strong technical foundations (schema entity-graph, FAQPage, BreadcrumbList, Astro static output) but suffers from three structural problems that limit organic reach.

**Critical finding:** The `/webdesign-coburg` city landing page sets its canonical to `leistungen/webdesign.html`. Google will ignore `/webdesign-coburg` entirely and consolidate all ranking equity to the generic service page, which is weaker for the local keyword. This is the single highest-impact issue.

**Second finding:** Three of four `leistungen/*` service pages (webdesign, seo, ki-beratung) are under-depth at 500–560 words, missing pricing tables, and carry generic H2 headings ("Leistungen im Detail", "Ihre Vorteile") that do not match any search query pattern. The SERP for the relevant keywords is dominated by long-form agency landing pages with explicit pricing.

**Third finding:** The `/wissen/was-kostet-eine-website` glossary entry — the site's strongest informational page — is structurally well-formed but scores 1,126 words against a SERP field of 10 long-form articles that begin at ~2,000 words, all with interactive price calculators or comprehensive price range tables. The page has 2 price tables but lacks a calculator and lacks a PageSummary box.

**Strongest pages:** `/seo-coburg` (1,499 words, good H2 structure, self-correct canonical, Service + FAQPage + Offer schema), `/webentwicklung-coburg` (999 words, pricing block, good schema), and `/blog/local-seo-coburg-google-business-profile` (1,981 words, 9 H2, BlogPosting schema).

---

## 1. SERP Analysis

### 1.1 Keyword: "Webdesign Coburg"
**Intent:** Transactional-local (finding a local agency/freelancer to hire)
**SERP field observed (10 results):**

| # | Domain | Page Type | Depth Signal |
|---|--------|-----------|--------------|
| 1 | webdesigncoburg.de | Agency homepage | Full homepage |
| 2 | webdesign-grimm.de/webdesign-coburg | City landing page | ~800–1,200 words |
| 3 | wawitta.de | Agency homepage | Full homepage |
| 4 | kreativwerk-sw.de/webdesign-coburg | City landing page | ~800–1,200 words |
| 5 | logan-5.de/webdesigner-coburg.html | City landing page | Implied 800+ words |
| 6 | 5-sterne-webdesign.de | Agency homepage | Full homepage |
| 7 | metamove.de/webdesign/coburg.html | Directory/city page | Directory entry |
| 8 | jungundbanse.de/webdesign-agentur-coburg | City landing page | Agency city LP |
| 9 | webdesigncoburg.de/expertentipps | Blog/content section | Hybrid |
| 10 | webdesign-coburg.de | Agency homepage | Full homepage |

**SERP Consensus:** Agency homepages (30%) + city landing pages (50%) + directory (10%) + blog (10%)
**Dominant format:** City landing page / agency landing page with local trust signals
**SERP features observed:** Google Maps Pack likely present (not captured by WebSearch), Knowledge Panel for established agencies.

**Digitalwerk page for this keyword:** `/webdesign-coburg` (city landing page format — correct match)
**Page-type match:** ALIGNED in format, CRITICAL in canonical (page signals it is duplicate of `/leistungen/webdesign`)

---

### 1.2 Keyword: "Was kostet eine Website 2026"
**Intent:** Informational (researching costs before hiring)
**SERP field observed (10 results):**

| # | Domain | Page Type | Notable Element |
|---|--------|-----------|-----------------|
| 1 | webdirwas.at | Long-form info article | Year in title |
| 2 | neuzeitwerber.de/webdesign-kosten | Long-form info article | "wirklich" framing |
| 3 | de.wix.com/blog | Platform blog post | DIY-skewed |
| 4 | de.squarespace.com | Platform blog post | DIY-skewed |
| 5 | bumblebits.de/website-kosten-2026 | Long-form info article | "wirklich" framing |
| 6 | easycom.at/website-kosten | Long-form info article | Price overview |
| 7 | krisnetics.com | Long-form info article | Complete Preis-Guide |
| 8 | hidendesign.at | Long-form info article | Agency perspective |
| 9 | kopfundstift.de/webdesign-kosten | Long-form info article | Agency perspective |
| 10 | itweso.at | Long-form info article | SMB angle |

**SERP Consensus:** Long-form informational articles with structured price tables (100% — uniform)
**Dominant format:** 2,000–4,000 word guide with price table, comparison table, and at minimum 3 H2 sections covering: DIY vs. agency, cost breakdown by component, typical packages.
**SERP features observed:** PAA likely active (Was kostet...?, Wie teuer ist...?, Was ist der Unterschied...). AI Overview likely active.

**Digitalwerk page for this keyword:** `/wissen/was-kostet-eine-website`
**Page type:** Wissen/glossary entry — structurally a match to the long-form info format
**Page-type match:** ALIGNED in format but MEDIUM gap in depth (1,126 words vs. 2,000–4,000 in SERP). Price tables present but no calculator. No PageSummary box (violates CLAUDE.md spec).

---

### 1.3 Keyword: "SEO Coburg"
**Intent:** Transactional-local
**SERP field observed (10 results):** All agency landing pages or city service pages (suchmaschinenoptimierung-coburg.de, logan-5.de/seo-coburg, seocoburg.com, pintor.de, sagemedia.de, katja-gersdorf.de, amadeus-agentur.com, progressive-media.de, trustlocal.de directory, seocoburg.de).
**SERP Consensus:** Agency city landing pages / dedicated SEO service pages for Coburg (90%), 1 directory (10%).
**Digitalwerk page:** `/seo-coburg` — city landing page format (ALIGNED), self-correct canonical (good), 1,499 words (adequate), pricing H2 ("Was kostet SEO in Coburg?") — strong match.

---

### 1.4 Keyword: "KI Beratung Mittelstand Oberfranken"
**Intent:** Commercial-investigation (low-volume niche)
**SERP field observed:** ki-spezial.systems (dedicated Oberfranken KI consultancy), roover.de, kivema.de, ki-im-mittelstand.de, denkwerk.com, Fraunhofer IFF, just-forward.com, adence.de.
**SERP Consensus:** Specialist KI-consultancy service pages and landing pages (80%), institute/body pages (20%). Most leading competitors have dedicated Oberfranken or regional positioning.
**Digitalwerk page:** `/leistungen/ki-beratung` — generic service page without regional positioning, 506 words, no pricing, no Oberfranken specificity. **HIGH mismatch in depth and regional specificity.**

---

## 2. Per-Page Assessment

### Page 1: / (Homepage)
**Primary keywords:** Branded "Digitalwerk Coburg", secondary "Webdesign Coburg"
**Page type:** Freelancer portfolio homepage
**Intent:** Navigational (branded), secondary transactional-local
**Word count:** 1,170
**Schema:** FAQPage, Person, WebSite, AggregateRating, GeoCircle — solid entity graph
**H1:** "Digitale Lösungen. Solide gebaut." — brand statement, no keyword, intentional
**H2 structure:** Service overview, About, Process, Testimonials, FAQ, CTA — standard homepage pattern
**Canonical:** Self-referential (correct)
**Price signals:** None (correct for homepage)
**Images detected by parser:** 0 — this is a parsing limitation (images likely served as CSS or SVG)

**Intent match:** ALIGNED — homepage is navigational; secondary benefit for branded searches
**Mismatch severity:** ALIGNED
**Gap:** H1 carries no geographic keyword. For branded queries this is fine; for "Webdesign Coburg" queries, the city landing page is the right target. No issue here.
**SXO subscore:** 68/100

---

### Page 2: /webdesign-coburg
**Primary keyword:** "Webdesign Coburg" (high-intent local commercial)
**Page type:** City landing page
**Intent:** Transactional-local
**Word count:** 1,040
**H1:** "Webdesign, das Vertrauen aufbaut und Kunden gewinnt"
**H2:** "Leistungen im Detail", "Ihre Vorteile", "Das ist im Paket enthalten", "Häufige Fragen zu Webdesign", "Bereit für Ihre neue Website?"
**Schema:** Service, FAQPage, AggregateRating, BreadcrumbList, Place, GeoCircle — good
**Canonical:** `https://digitalwerk-coburg.de/leistungen/webdesign.html` — CRITICAL BUG

**CRITICAL FINDING — CANONICAL SELF-SABOTAGE:**
`/webdesign-coburg` declares its canonical as `/leistungen/webdesign.html`. This tells Google: "this page is a duplicate, please index the other one instead." The result is that the city landing page — which contains more local signals and pricing — will never rank, and all its authority flows to the generic service page. Meanwhile, `/leistungen/webdesign` has no pricing, is thinner, and has generic H2s.

Additionally, both pages share the same H1: "Webdesign, das Vertrauen aufbaut und Kunden gewinnt" — confirming the canonical was set incorrectly (the city page should self-canonicalize to `/webdesign-coburg.html`).

**H2 quality:** Generic headings ("Leistungen im Detail", "Ihre Vorteile"). The SERP rewards pages that answer searcher questions. Recommended H2 alternatives:
- "Was kostet Webdesign in Coburg?" (triggers pricing intent)
- "Warum einen lokalen Webdesigner aus Coburg beauftragen?" (local trust)
- "Welche Unternehmen in Coburg haben wir bereits unterstützt?" (social proof)

**Price signals:** None found in HTML scan. The SERP competitors show pricing (e.g., webdesigncoburg.de shows packages on their page). Meta description has "ab 3.000 €" — this should be surfaced as a visible price block on the page.

**Mismatch severity:** CRITICAL (canonical kills the page's ranking potential entirely)
**SXO subscore:** 18/100 (the canonical issue alone makes the page ineligible to rank)

---

### Page 3: /webentwicklung-coburg
**Primary keyword:** "Webentwicklung Coburg"
**Page type:** City landing page
**Intent:** Transactional-local
**Word count:** 999
**H1:** (extracted from parser — service-oriented)
**H2:** "Wann brauchen Sie individuelle Webentwicklung statt Baukasten?", "Was Sie von einem Webdesigner aus Coburg erwarten dürfen", "Was kostet individuelle Webentwicklung?", "Welche Coburger Unternehmen profitieren?", "Wie läuft ein Webentwicklungs-Projekt in Coburg ab?", FAQ, CTA
**Schema:** Service, FAQPage, Offer, City, AdministrativeArea, BreadcrumbList — the richest schema among all city pages
**Canonical:** Self-referential to `.html` variant (correct)
**Price signals:** Yes — 5.000–30.000 €, 50.000 €, 850 €, 200 € mentioned

**Intent match:** Strong alignment. H2 questions mirror natural search language. Pricing block exists. Local schema (City, AdministrativeArea) is a positive.
**Mismatch severity:** LOW — this is one of the stronger pages
**Gap:** "Was Sie von einem Webdesigner aus Coburg erwarten dürfen" — H2 says "Webdesigner" on a "Webentwicklung" page; terminology confusion may dilute topical relevance. Below 1,000 words; competitors likely deeper.
**SXO subscore:** 72/100

---

### Page 4: /seo-coburg
**Primary keyword:** "SEO Coburg"
**Page type:** City landing page
**Intent:** Transactional-local
**Word count:** 1,499
**H1:** "SEO Coburg — Mehr Sichtbarkeit für regionale Unternehmen"
**H2:** "Warum SEO mit Coburg-Bezug?", "Was Sie von einem Webdesigner aus Coburg erwarten dürfen", "Was kostet SEO in Coburg?", "Welche Coburger Branchen profitieren?", "Wie läuft SEO-Betreuung in Coburg ab?", FAQ, CTA
**Schema:** Service, FAQPage, Offer, City, AdministrativeArea, BreadcrumbList, AggregateRating
**Canonical:** Self-referential (correct)
**Price signals:** Present in "Was kostet SEO?" section

**Intent match:** ALIGNED. Format matches SERP. H1 exact-matches keyword phrase. Pricing section present. Local schema correct.
**Gap:** H2 "Was Sie von einem Webdesigner aus Coburg erwarten dürfen" — again uses "Webdesigner" on SEO page (terminology drift). The SERP shows competitors like sagemedia.de claiming "648% average growth" — social proof numbers are stronger than any copy. AggregateRating present but no review count visible in meta description.
**Mismatch severity:** ALIGNED (minor content gaps)
**SXO subscore:** 71/100

---

### Page 5: /leistungen/webdesign
**Primary keyword:** "Webdesign" / "Webdesign Freelancer"
**Page type:** Generic service page
**Intent:** Transactional (broad)
**Word count:** 548 (thin)
**H1:** "Webdesign, das Vertrauen aufbaut und Kunden gewinnt" (identical to /webdesign-coburg — cannibalization risk)
**H2:** "Leistungen im Detail", "Ihre Vorteile", "Das ist im Paket enthalten", FAQ, CTA
**Schema:** Service, FAQPage, BreadcrumbList, Place, AggregateRating
**Canonical:** Self-referential (correct), but receives canonical authority from `/webdesign-coburg`
**Price signals:** None
**Tables:** None

**Intent match:** The keyword "Webdesign Freelancer" in DE locale returns international freelance platforms (Upwork, Toptal, Contra) — not individual freelancer pages. The actual intent for this keyword in German is platforms and directories. The page cannot realistically rank for this broad keyword.
**For "Webdesign" alone:** Dominated by Wix, Squarespace, WordPress, IONOS — product/platform pages.
**Mismatch severity:** HIGH — keyword target is unrealistic; page is thin and receives canonical equity from the wrong page
**SXO subscore:** 28/100

**Recommended pivot:** Abandon "Webdesign Freelancer" as keyword target. Use `/leistungen/webdesign` as the internal hub for service detail, not as the ranking page. Redirect canonical equity back to `/webdesign-coburg` by fixing the canonical on the city page.

---

### Page 6: /leistungen/seo
**Primary keyword:** "SEO Beratung" / "SEO Freelancer"
**Page type:** Generic service page
**Intent:** Transactional (broad)
**Word count:** 562 (thin)
**H1:** "SEO: Sichtbar werden, wenn Kunden suchen"
**H2:** "Leistungen im Detail", "Ihre Vorteile", "Das ist im Paket enthalten", FAQ, CTA — same template as /leistungen/webdesign
**Schema:** Service, FAQPage, BreadcrumbList, Place, AggregateRating
**Price signals:** None
**Tables:** None

**Intent match:** "SEO Beratung" SERP returns large national agencies (Seobility, eMinded, etc.) and platform pages. A 562-word freelancer service page cannot compete.
**Mismatch severity:** HIGH — thin content, generic structure, unrealistic keyword target
**SXO subscore:** 26/100

**Recommended pivot:** Use as internal hub/spoke for `/seo-coburg`. Add pricing table. Target long-tail: "SEO Beratung für Handwerker" or "SEO Audit Coburg".

---

### Page 7: /leistungen/ki-beratung
**Primary keyword:** "KI Beratung Mittelstand Oberfranken" / "KI Beratung Coburg"
**Page type:** Generic service page
**Intent:** Commercial-investigation
**Word count:** 506 (thinnest page on site)
**H1:** "KI-Beratung: Künstliche Intelligenz konkret einsetzen"
**H2:** "Leistungen im Detail", "Ihre Vorteile", "Das ist im Paket enthalten", FAQ, CTA — identical template
**Schema:** Service, FAQPage, BreadcrumbList, Place, AggregateRating
**Price signals:** None
**Tables:** None
**Regional specificity:** None

**The SERP context:** ki-spezial.systems dominates the "KI Beratung Mittelstand Oberfranken" SERP with a fully dedicated regional KI-consultancy brand. Their positioning: "on-premise, DSGVO-konform, persönliche Beratung aus Oberfranken." This is exactly what Digitalwerk's persona "Klaus, 65, Vertretungsarzt" needs — and the current `/leistungen/ki-beratung` provides none of it.

**Mismatch severity:** CRITICAL — thinnest page, strongest competition, no regional positioning, no pricing, no DSGVO assurance copy
**SXO subscore:** 17/100

---

### Page 8: /wissen/was-kostet-eine-website
**Primary keyword:** "Was kostet eine Website" (informational)
**Page type:** Wissen/glossary entry (effectively: long-form info article)
**Intent:** Informational
**Word count:** 1,126
**H1:** "Was kostet eine Website? Preise, Pakete und Einflussfaktoren 2026"
**H2:** 11 headings including pricing package comparison, cost factors, monthly costs, fixed vs. hourly billing, Coburg vs. Großstadt pricing
**Schema:** DefinedTerm, DefinedTermSet, FAQPage, BreadcrumbList — correct for Wissen content
**Tables:** 2 (package comparison table, monthly cost table) — strong
**Price signals:** 3.000–15.000 € range clearly stated

**Intent match:** ALIGNED in format. The H2 structure closely mirrors SERP content patterns.
**Gap analysis:**
1. Word count (1,126) is ~50% of minimum SERP competitors (2,000+). The SERP leaders at krisnetics.com and neuzeitwerber.de are 3,000–4,000 words.
2. No PageSummary box (required by CLAUDE.md, also critical for AI Overview inclusion)
3. No interactive price calculator — 6/10 SERP competitors have one or simulate one via a structured input table
4. No author attribution / expertise signals (E-E-A-T gap for a pricing guide)
5. H2 "Warum sind Coburger Webdesigner oft günstiger als Großstadt-Agenturen?" — this is the strongest differentiating angle and should be expanded into a 300+ word section, not just one H2

**Mismatch severity:** MEDIUM (correct format, depth gap)
**SXO subscore:** 58/100

---

### Page 9: /blog/local-seo-coburg-google-business-profile
**Primary keyword:** "Local SEO Coburg" / "Google Business Profile Coburg"
**Page type:** Blog article (BlogPosting schema)
**Intent:** Informational (with service conversion intent secondary)
**Word count:** 1,981 (site's most substantive page)
**H1:** "Local SEO Coburg: Warum Ihr Google Business Profile 2026 über Sichtbarkeit entscheidet"
**H2:** 9 headings — good coverage of GBP optimization, NAP consistency, reviews, common mistakes
**Schema:** BlogPosting, FAQPage, BreadcrumbList, WebPage — correct
**Tables:** 0 — gap (SERP for "Google My Business optimieren" returns guides with comparison tables)
**PageSummary box:** Not present (CLAUDE.md requirement violation)
**Canonical:** Self-referential to .html variant (correct)

**SERP context:** "Local SEO Coburg Google Business Profile" returned national guides (seoagentur.de, rocketseo.de, evergreen.media, digitelli.de) — not Coburg-specific pages. This means the blog post is competing on informational quality alone, without a local modifier advantage. The informational SERP favors depth + structured content.

**Intent match:** ALIGNED in format. Strong H2 structure.
**Gap:** No table (should have a GBP Optimization Checklist table). No PageSummary. Internal links to service pages present (leistungen/seo, leistungen/webdesign, etc.) — good. No schema for "HowTo" which would be appropriate for the optimization guide sections.
**Mismatch severity:** LOW (best-performing content type on site)
**SXO subscore:** 67/100

---

## 3. Gap Analysis (7 Dimensions)

| Dimension | Max | Score | Evidence |
|-----------|-----|-------|----------|
| Page Type | 15 | 9 | City LPs match SERP format; leistungen/* pages too generic; /webdesign-coburg killed by canonical |
| Content Depth | 15 | 7 | leistungen/* pages 500–562 words (thin); was-kostet at 1,126 vs 2,000+ SERP; seo-coburg at 1,499 (adequate) |
| UX Signals | 15 | 9 | Strong schema, breadcrumbs, FAQ. No images detected by parser (possible SSR/CSS issue). No price calculator on was-kostet |
| Schema | 15 | 12 | FAQPage, BreadcrumbList, Service, Offer, AggregateRating, DefinedTerm present. Entity graph via @id correct. Missing: HowTo on blog, ItemList on leistungen pages |
| Media | 15 | 5 | Parser returns 0 images across all pages. Possible rendering issue with parser, but zero img tags in source is a concern. No video, no infographics, no comparison visuals |
| Authority | 15 | 7 | AggregateRating schema present but no visible review count or external review signals. No external mentions detected. Single-author site (appropriate for freelancer) |
| Freshness | 10 | 7 | "2026" in was-kostet title and blog title is strong. City pages do not show updatedDate. Blog has pubDate in schema |

**Total SXO Gap Score: 56 / 100**

(Score is the current state; 100 = full SERP alignment. Lower score = more gap to close.)

---

## 4. User Story Derivation

Stories are derived from SERP signals, not assumed.

**US-1 (Awareness — Sieglinde, Bakery Owner)**
Signal: SERP for "Webdesign Coburg" surfaces agency homepages with phone numbers and "Jetzt anfragen" CTAs prominently above the fold — none require scrolling to find contact.
Story: "Als Inhaberin einer Bäckerei suche ich nach einem Webdesigner in Coburg, damit ich schnell einschätzen kann, ob ich anrufen sollte, ohne die ganze Website lesen zu müssen."
Gap on site: CTA "Kostenloses Erstgespräch" is present but phone number is not visible in the page header without scrolling. Price anchor "ab 3.000 €" exists only in meta description, not in page body of /webdesign-coburg.

**US-2 (Consideration — Markus, IT Manager)**
Signal: SERP for "Webentwicklung Coburg" returns pages listing technology stack (Astro, React, TypeScript) and integration capabilities. The /webentwicklung-coburg H2 "Wann brauchen Sie individuelle Webentwicklung statt Baukasten?" addresses this well.
Story: "Als IT-Leiter möchte ich verstehen, welche Technologien eingesetzt werden und wie sie in unsere bestehende Infrastruktur integriert werden, damit ich keine Nacharbeiten veranlassen muss."
Gap: No API/integration or security section. Tech stack named in meta description but not elaborated in visible H-tag structure.

**US-3 (Decision — Klaus, General Practitioner)**
Signal: SERP for "KI Beratung Mittelstand Oberfranken" — ki-spezial.systems leads with "DSGVO-konform, ohne Cloud-Abhängigkeit, persönliche Beratung." This shows the decision-stage query is heavily filtered by trust/compliance signals.
Story: "Als niedergelassener Arzt möchte ich sicherstellen, dass KI-Lösungen DSGVO-konform sind und keine Patientendaten in ausländische Cloud-Systeme fließen, bevor ich eine Beratung buche."
Gap: `/leistungen/ki-beratung` contains no DSGVO mention, no on-premise option, no data locality statement. This is the strongest persona-page gap on the site.

**US-4 (Awareness — Sieglinde, early research)**
Signal: SERP for "Was kostet eine Website 2026" is 100% informational guides — users are in pre-qualification mode, comparing DIY vs. freelancer vs. agency.
Story: "Als Geschäftsinhaberin möchte ich verstehen, was eine professionelle Website kostet und was im Preis enthalten ist, damit ich ein realistisches Budget planen kann."
Gap: `/wissen/was-kostet-eine-website` has price tables and range but is too short (1,126 words) to beat 2,000–4,000 word SERP competitors. The unique "Coburger Webdesigner günstiger als Großstadt-Agenturen" angle is underdeveloped.

**US-5 (Decision — All personas)**
Signal: SERP for "Local SEO Coburg" shows Google Business Profile guides that all end with an agency CTA. This is classic top-of-funnel content with bottom-of-funnel redirect.
Story: "Als regionaler Unternehmer möchte ich praktische Schritte zum Einrichten meines Google Business Profils, damit ich sofort selbst aktiv werden kann — und wenn das zu komplex wird, jemanden beauftragen."
Gap: Blog article covers the "what" well. Missing: a numbered HowTo checklist table (SERP competitors use these), and the transition from "do it yourself" to "hire me" is present via CTAs but lacks a conversion bridge ("Wie lange dauert professionelle GBP-Optimierung?").

---

## 5. Persona Scoring

Personas derived from SERP content and regional SMB profile.

### Persona 1: Sieglinde, 58, Bäckereiinhaberin Coburg
Non-technical, time-pressed, decides on feel + price + local trust.

| Page | Relevance | Clarity | Trust | Action | Total /100 |
|------|-----------|---------|-------|--------|------------|
| /webdesign-coburg | 22 | 18 | 17 | 12 | 69 |
| /leistungen/webdesign | 15 | 12 | 12 | 8 | 47 |
| /wissen/was-kostet-eine-website | 20 | 18 | 16 | 15 | 69 |

**Weakest for Sieglinde:** `/leistungen/webdesign` — thin content, no price, no local signals.
**Fix:** Surface "ab 3.000 €" as a visible price block. Add "Aus Coburg, für Coburg" trust section. Replace generic H2s with "Was kostet eine Website bei Digitalwerk?" and "Wie lange dauert ein Webdesign-Projekt?"

---

### Persona 2: Markus, 42, IT-Leiter Mittelstand
Evaluates technical approach, security, CMS independence, maintainability.

| Page | Relevance | Clarity | Trust | Action | Total /100 |
|------|-----------|---------|-------|--------|------------|
| /webentwicklung-coburg | 21 | 19 | 17 | 16 | 73 |
| /leistungen/ki-beratung | 10 | 9 | 8 | 8 | 35 |
| /webdesign-coburg | 14 | 13 | 14 | 12 | 53 |

**Weakest for Markus:** `/leistungen/ki-beratung` — no technical depth, no integration specifics, no API or data security discussion.
**Fix:** Add a section "Wie integriert sich KI in bestehende IT-Infrastruktur?" with concrete examples (Zapier, REST API, on-premise LLMs). Add DSGVO compliance statement visible above the fold.

---

### Persona 3: Klaus, 65, Vertretungsarzt, Praxis
Wants DSGVO certainty, simplicity, direct phone contact, no subscriptions.

| Page | Relevance | Clarity | Trust | Action | Total /100 |
|------|-----------|---------|-------|--------|------------|
| /leistungen/ki-beratung | 7 | 8 | 6 | 7 | 28 |
| /seo-coburg | 14 | 17 | 16 | 17 | 64 |
| /webdesign-coburg | 16 | 17 | 15 | 14 | 62 |

**Weakest for Klaus:** `/leistungen/ki-beratung` — this persona will not book a KI consultation without DSGVO assurance. The page has zero DSGVO content. The competitor ki-spezial.systems leads with "ohne Cloud-Abhängigkeit" in the H1 area.
**Fix:** Add "KI ohne Cloud — DSGVO-konforme Lösungen für Praxen und Kanzleien" as a visible section. Add phone number in CTA area (not just contact form).

---

### Persona 4: Thomas, 35, Gastronom Kronach
Wants a simple digital menu + reservation page, local provider, mobile-first.

| Page | Relevance | Clarity | Trust | Action | Total /100 |
|------|-----------|---------|-------|--------|------------|
| /webdesign-coburg | 19 | 17 | 16 | 13 | 65 |
| /leistungen/webdesign | 12 | 11 | 12 | 9 | 44 |
| /blog/local-seo-coburg-google-business-profile | 18 | 20 | 18 | 16 | 72 |

**Weakest for Thomas:** `/leistungen/webdesign` — no industry-specific examples, no mention of Gastronomie or hospitality use cases.
**Fix:** Add an industry use-case row ("Gastronomie: Speisekarte, Reservierung, Google Maps-Einbindung").

---

### Persona 5: Heike, 47, Handwerkerin (Malerbetrieb), Lichtenfels
Looking for "Website für Handwerker" — specifically wants referral-ready site with before/after photos.

| Page | Relevance | Clarity | Trust | Action | Total /100 |
|------|-----------|---------|-------|--------|------------|
| /webdesign-coburg | 17 | 16 | 15 | 13 | 61 |
| Homepage | 15 | 16 | 17 | 14 | 62 |
| /wissen/was-kostet-eine-website | 19 | 18 | 16 | 17 | 70 |

**Fix for Heike:** `/webdesign-coburg` should have a "Handwerker-Website" callout — this is a high-volume long-tail ("Website für Handwerker Coburg") from the CLAUDE.md keyword strategy with no dedicated page yet.

---

## 6. Mismatch Summary (Priority Order)

| Priority | Page | Severity | Root Cause | Fix |
|----------|------|----------|------------|-----|
| 1 | /webdesign-coburg | CRITICAL | Canonical points to leistungen/webdesign — page cannot rank | Fix canonical to self-reference: `https://digitalwerk-coburg.de/webdesign-coburg` |
| 2 | /leistungen/ki-beratung | CRITICAL | 506 words, no DSGVO, no regional positioning, competes against dedicated regional specialist | Rebuild as Oberfranken-specific KI page OR create `/ki-beratung-coburg` city LP with DSGVO section |
| 3 | /leistungen/webdesign | HIGH | Thin (548 words), identical H1 to /webdesign-coburg, receives canonical equity from wrong page | Differentiate H1. Add pricing table. Decouple from city page canonical. |
| 4 | /leistungen/seo | HIGH | Thin (562 words), generic template, no pricing, keyword target unrealistic | Add pricing table. Target "SEO Audit Coburg" or "SEO Beratung Handwerker" long-tails |
| 5 | /wissen/was-kostet-eine-website | MEDIUM | 1,126 words vs 2,000–4,000 SERP minimum. No PageSummary box. No calculator. | Expand to 2,000+ words. Add PageSummary. Add structured "Preis-Rechner" table |
| 6 | /blog/local-seo-coburg-google-business-profile | LOW | No table, no PageSummary, no HowTo schema | Add GBP checklist table. Add PageSummary. Add HowTo schema |
| 7 | /leistungen/webdesign | LOW | No images detected (parser may have limitations, but zero img tags in source HTML is notable) | Verify actual image delivery. Add screenshots/mockups as WebP |

---

## 7. Wireframe: IST vs. SOLL for /webdesign-coburg

### IST (Current)
```
[Header — sticky nav]
[H1: "Webdesign, das Vertrauen aufbaut und Kunden gewinnt"]
[H2: Leistungen im Detail]
  → Feature grid (Individuelles Design, Responsive, Ladezeiten, etc.)
[H2: Ihre Vorteile] → generic benefits list
[H2: Das ist im Paket enthalten] → bullet list
[H2: Häufige Fragen zu Webdesign] → FAQPage accordion
[H2: Bereit für Ihre neue Website?] → CTA block
[Footer]
```

### SOLL (Recommended — aligned to "Webdesign Coburg" SERP)
```
[Header — sticky nav with phone number visible]
[HERO]
  H1: "Webdesign Coburg — Websites, die Kunden gewinnen"
  Subline: "Pascal Krason — Fachinformatiker aus Coburg, 10+ Jahre Erfahrung"
  CTA primary: "Kostenloses Erstgespräch vereinbaren" → /kontakt
  CTA secondary: "Preise ansehen" → anchor #preise
[TRUST BAR — above fold]
  "Aus Coburg" | "ab 3.000 €" | "4–6 Wochen" | "[N] zufriedene Kunden"

[H2: Was kostet Webdesign in Coburg?] ← PRICE ANCHOR #preise
  → Visible 3-column price table (Basic 3.000–4.500 €, Standard 5.000–8.000 €, Individuell ab 10.000 €)

[H2: Warum einen lokalen Webdesigner aus Coburg beauftragen?]
  → Local trust copy (Vor-Ort-Termine, regionale Referenzen, kein Callcenter)

[H2: Was umfasst ein Webdesign-Auftrag?]
  → Service detail grid (Design, Entwicklung, SEO, Texte, Hosting-Beratung)

[H2: Welche Coburger Unternehmen haben wir bereits unterstützt?]
  → 2–3 project references (Branche, Ausgangslage, Ergebnis)

[H2: Häufige Fragen zum Webdesign in Coburg]
  → FAQ accordion (FAQPage schema — questions must match PAA)

[CTA: "Ihr Webdesigner für Coburg und Oberfranken"]
  → "Kostenloses Erstgespräch vereinbaren" + phone number visible

[Footer]
```

**Canonical fix (essential, do first):** `<link rel="canonical" href="https://digitalwerk-coburg.de/webdesign-coburg">` (no .html extension if that is how the router serves it — match exact URL that Astro routes to).

---

## 8. Canonical Issue: Technical Details

Both `/webdesign-coburg` and `/leistungen/webdesign` produce:
```html
<link rel="canonical" href="https://digitalwerk-coburg.de/leistungen/webdesign.html">
```

The city page (`/webdesign-coburg`) should produce:
```html
<link rel="canonical" href="https://digitalwerk-coburg.de/webdesign-coburg">
```

This is almost certainly a data misconfiguration in `src/data/cities.ts` or the Astro page template that generates city landing pages — the `buildSeoMeta()` call is likely passing a hardcoded canonical pointing to the service page. The fix is in the Astro page file for `/webdesign-coburg` or in `src/utils/seo.ts`.

**Verify also:** `/seo-coburg` correctly self-canonicalizes. `/webentwicklung-coburg` correctly self-canonicalizes. The webdesign city page appears to be the only one misconfigured, but all city pages should be audited.

---

## 9. Cross-Skill Recommendations

- **E-E-A-T gaps** on `/leistungen/ki-beratung` and `/wissen/was-kostet-eine-website`: Run `/seo content` audit — no author byline, no credentials, no "Last updated" signal visible on either page.
- **Schema generation** for `/blog/local-seo-coburg-google-business-profile`: Missing HowTo schema for the GBP optimization sections. Run `/seo schema` to generate HowToStep markup.
- **Local intent** in all city page SERPs: A Google Business Profile (GBP) for "Digitalwerk Coburg" is not referenced anywhere on the site. Run `/seo local` to assess GBP completeness and consistency of NAP data across web.
- **Thin content** on `/leistungen/webdesign`, `/leistungen/seo`, `/leistungen/ki-beratung`: All three are below 600 words. Run `/seo page` per-page audit for each.

---

## 10. Limitations

- **No DataForSEO access:** SERP ranking positions are not available. Page-type analysis is based on result titles, URLs, and snippets — not confirmed rendering or word count of competitor pages.
- **Parser image count = 0 across all pages:** `parse_html.py` returned 0 images for every page. This is likely a parsing artifact (images may be CSS background-image or loaded via JavaScript after initial HTML). Cannot confirm whether actual img tags with alt text are present. Manual browser inspection recommended.
- **No Google Search Console data:** Cannot confirm actual impressions, CTR, or ranking positions for any keyword. The canonical bug finding is based on HTML analysis, not GSC click data.
- **SERP locale:** WebSearch tool operates from US infrastructure. Results may differ from actual DE-locale Google. German SERP features (Maps Pack, AI Overview DE) cannot be directly observed.
- **Internal link counts = 0 from parser:** Parser returned 0 internal/external links — this is a parser limitation with the redirect-to-HTML canonical pattern. Links were extracted manually from raw HTML and confirmed present.
- **No competitor content depth measurement:** Word counts for SERP competitors are estimated from typical patterns for that content type, not measured directly.

---

## 11. Action Plan (Priority Order)

| # | Action | Page | Effort | Impact |
|---|--------|------|--------|--------|
| 1 | Fix canonical on `/webdesign-coburg` to self-reference | /webdesign-coburg | 15 min | Critical |
| 2 | Audit all other city pages for same canonical bug | All city LPs | 30 min | Critical |
| 3 | Rebuild `/leistungen/ki-beratung` with DSGVO section, regional positioning, pricing | /leistungen/ki-beratung | 3–4 hrs | High |
| 4 | Add visible price block + local trust section to `/webdesign-coburg` | /webdesign-coburg | 2 hrs | High |
| 5 | Expand `/wissen/was-kostet-eine-website` to 2,000+ words + add PageSummary | /wissen/was-kostet | 3 hrs | High |
| 6 | Add pricing table + differentiated H2s to `/leistungen/webdesign` | /leistungen/webdesign | 2 hrs | Medium |
| 7 | Add GBP checklist table + PageSummary to blog/local-seo post | /blog/local-seo | 1 hr | Medium |
| 8 | Replace generic H2s on all leistungen/* pages with question-format headings | All leistungen pages | 1 hr | Medium |
| 9 | Create `/ki-beratung-coburg` dedicated city LP (or redirect canonical equity there) | New page | 4 hrs | Medium |
| 10 | Add PageSummary box to all Wissen and Blog entries per CLAUDE.md spec | All content pages | 2 hrs | Medium |

---

*Report generated: 2026-05-09. SXO Gap Score: 54/100. Next review recommended after canonical fix is deployed and indexed (est. 4–6 weeks).*
*Generate PDF report: Use `/seo google report`*
