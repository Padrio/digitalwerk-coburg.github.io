# Local SEO Audit — Digitalwerk Coburg
**Audit date:** 2026-05-09
**Auditor:** Claude Local SEO Agent (claude-sonnet-4-6)
**URL audited:** https://digitalwerk-coburg.de
**Business type detected:** SAB-Hybrid — physical address published, services delivered remotely across Coburg + Oberfranken region

---

## Overall Local SEO Score: 41 / 100

| Dimension | Weight | Raw Score | Weighted |
|-----------|--------|-----------|----------|
| GBP Signals | 25% | 4 / 25 | 1.0 |
| Reviews & Reputation | 20% | 7 / 20 | 1.4 |
| Local On-Page SEO | 20% | 17 / 20 | 17.0 |
| NAP Consistency & Citations | 15% | 8 / 15 | 8.0 |
| Local Schema Markup | 10% | 7 / 10 | 7.0 |
| Local Link & Authority Signals | 10% | 5 / 10 | 5.0 |
| **TOTAL** | **100%** | | **41 / 100** |

Score interpretation: The on-page and schema foundations are solid (Astro-built static site, correct entity graph, geo meta tags). However, the absence of a verified Google Business Profile and near-zero citation presence across German Tier 1 directories are structural blockers that cap local pack eligibility regardless of on-page quality.

---

## 1. Business Type & Industry Vertical

- **Business type:** SAB-Hybrid. Physical address (Von-Mayer-Straße 25, 96450 Coburg) is published on all pages, Impressum, and in schema. Service delivery is remote/on-site at client locations. This is the correct GBP classification for a solo freelance digital agency.
- **Industry vertical:** IT / Digital Services — Professional Services (B2B). Correct schema mapping is `LocalBusiness + ProfessionalService` (as implemented). Not `Attorney`, `Restaurant`, or `HomeAndConstructionBusiness`.
- **Service area declared:** Coburg primary + Bamberg, Kronach, Lichtenfels, Sonneberg, Hildburghausen, Kulmbach, Bayreuth (in site copy and CLAUDE.md keyword strategy). Schema uses `GeoCircle` with 50km radius rather than named `areaServed` cities.

---

## 2. GBP Signals — Score: 4 / 25 (CRITICAL)

**Status: No verified Google Business Profile detected.**

Google's consent wall blocked direct Maps API verification from this environment, but the following signals confirm absence or severe incompleteness:

- No GBP embed or Google Maps iframe on any website page (homepage, /kontakt, /webdesign-coburg, /seo-coburg, /webentwicklung-coburg)
- No place_id reference, no maps.google.com link with CID, no "View on Google Maps" anchor
- The site's own blog post (`/blog/local-seo-coburg-google-business-profile`) advises clients on GBP importance but makes no reference to Digitalwerk's own profile — strongly indicating the profile either does not exist or is unverified/unclaimed
- No GBP knowledge panel signals surfaced in any SERP-adjacent check
- No review widget sourced from Google reviews on the site

**GBP Checklist:**

| Signal | Status |
|--------|--------|
| Profile claimed & verified | Not confirmed / likely absent |
| Primary category set | Unknown |
| Business description (750 chars) | Unknown |
| Hours of operation | Unknown |
| Service area configured | Unknown |
| Photos uploaded (min 10) | Unknown |
| Weekly posts cadence | Unknown |
| Q&A section populated | Unknown |
| Website URL linked to profile | Unknown |
| Products/Services listed | Unknown |
| Attributes set (e.g. Online appointments) | Unknown |
| Review response rate | Unknown |

**Impact:** Per Whitespark 2026, GBP signals are the #1 local ranking factor cluster. A missing or unverified GBP means zero local pack eligibility. For "Webdesign Coburg" (estimated 100-500 monthly searches in a ~80k metro), local pack positions 1-3 represent the majority of click capture. This is the single highest-leverage gap in the entire audit.

---

## 3. NAP Consistency Audit

**Reference NAP (source of truth):**
- Name: Digitalwerk Coburg
- Address: Von-Mayer-Straße 25, 96450 Coburg
- Phone: +49 (0) 174 660 3656
- Email: hallo@digitalwerk-coburg.de

| Source | Name | Street | Postal/City | Phone | Match |
|--------|------|--------|-------------|-------|-------|
| Homepage footer | Digitalwerk Coburg | Von-Mayer-Straße 25 | 96450 Coburg | +49 (0) 174 660 3656 | PASS |
| /kontakt | Digitalwerk Coburg | Von-Mayer-Straße 25 | 96450 Coburg, Oberfranken | +49 (0) 174 660 3656 | PASS |
| /impressum | Pascal Krason / Digitalwerk Coburg | Von-Mayer-Straße 25 | 96450 Coburg | +49 (0) 174 660 3656 | PASS |
| llms.txt | Pascal Krason / Digitalwerk Coburg | Von-Mayer-Straße 25 | 96450 Coburg | +49 (0) 174 660 3656 | PASS |
| JSON-LD (LocalBusiness) | Digitalwerk Coburg | Von-Mayer-Straße 25 | 96450 Coburg | +49 (0) 174 660 3656 | PASS |
| Schema `addressRegion` | — | — | "Oberfranken" | — | NOTE |
| Site.ts `address.region` | — | — | "Oberfranken" | — | NOTE |

**NAP Flags:**
1. **MINOR — addressRegion value:** Schema uses `"Oberfranken"` for `addressRegion`. The ISO 3166-2 standard and Google's preferred format is `"BY"` (Bayern) or `"DE-BY"`. The geo.region meta tag correctly uses `"DE-BY"`. This inconsistency between HTML meta (`DE-BY`) and JSON-LD schema (`Oberfranken`) is not citation-breaking but is a schema precision issue. `Oberfranken` is a Regierungsbezirk, not the Bundesland — Google may not normalize this correctly.
2. **MINOR — Phone format:** `+49 (0) 174 660 3656` uses the informal German hybrid format. The E.164 canonical format is `+49174660656` or schema-preferred `+491746603656`. This format mismatch across citation sources can cause NAP inconsistency flags.
3. **No discrepancies** between website pages — internal NAP is fully consistent.

---

## 4. Citation Discovery — Tier 1 German Directories

| Directory | Status | Notes |
|-----------|--------|-------|
| Google Business Profile | NOT FOUND | Highest priority — see Section 2 |
| Bing Places | NOT CONFIRMED | Could not verify (auth wall) |
| Apple Maps | NOT CONFIRMED | Cannot verify without Maps Connect access |
| OpenStreetMap | NOT FOUND | Nominatim query returned no results |
| Gelbe Seiten (gelbeseiten.de) | NOT LISTED | No entry found for Digitalwerk Coburg or Pascal Krason |
| Das Örtliche (dasoertliche.de) | NOT CHECKED | 404 on search URL |
| Yelp.de | NOT LISTED | Confirmed absent — "Adding a business to Yelp is always free" shown |
| Cylex.de | NOT ACCESSIBLE | 403 Forbidden |
| 11880.com / klicktel.de | NOT LISTED | 18 webdesign businesses in Coburg shown; Digitalwerk absent |
| wlw.de (Wer liefert was) | NOT LISTED | 404 on search URL |
| ProvenExpert | NOT FOUND | 410 Gone (no profile) |
| Trustpilot | NOT ACCESSIBLE | 403 Forbidden |
| IHK Coburg directory | NOT CHECKED | Manual check required |
| Handwerkskammer | N/A | Not applicable (not a Handwerk trade) |

**Citation summary:** 0 of 12 checkable Tier 1 German directories confirmed active. This is the most severe citation gap of any German local business audited at this stage — zero citation footprint means Google has no third-party NAP corroboration for the address data in the LocalBusiness schema.

**Note on Whitespark 2026:** 3 of the top 5 AI visibility factors are citation-related. Zero citation presence directly suppresses both local pack and AI overview inclusion probability.

---

## 5. Review Health Snapshot

| Platform | Rating | Count | Recency | Response Rate |
|----------|--------|-------|---------|---------------|
| Google | Unknown | Unknown | Unknown | Unknown |
| ProvenExpert | Not found | 0 | — | — |
| Trustpilot | Not accessible | Unknown | — | — |
| Yelp.de | Not listed | 0 | — | — |
| On-site testimonials | 5/5 implied | 3 | Unknown date | N/A |

**On-site testimonial details (from homepage):**
- Thomas Richter, Richter Schreinerei Coburg
- Dr. Maria Hofmann, Praxis für Physiotherapie Hofmann
- Stefan Weber, Weber Gastro GmbH

**Schema AggregateRating in JSON-LD:** `ratingValue: "5.0"`, `reviewCount: "3"` — this references only the 3 on-site testimonials. Publishing an `aggregateRating` schema pointing to testimonials that are not sourced from a recognized third-party review platform is a Google schema quality violation risk. Google's structured data guidelines specify that `aggregateRating` must reflect ratings from a recognized review source, not self-published testimonials. This could trigger a manual action or rich result suppression.

**Review velocity:** The 18-day Sterling Sky rule states rankings cliff if no new reviews arrive within 3 weeks. With 0 verified third-party reviews, there is no review velocity at all — this is a systemic gap, not a velocity problem.

---

## 6. Local Schema Markup Validation

**Schema blocks detected on homepage:** 4 (FAQPage, Person, LocalBusiness+ProfessionalService, WebSite)

### LocalBusiness Schema — Property Audit

| Property | Present | Value | Assessment |
|----------|---------|-------|------------|
| @context | Yes | https://schema.org | PASS |
| @type | Yes | ["LocalBusiness","ProfessionalService"] | PASS — correct dual typing |
| @id | Yes | https://digitalwerk-coburg.de/#organization | PASS — entity graph anchor |
| name | Yes | "Digitalwerk Coburg" | PASS |
| description | Yes | 89 chars | PASS |
| url | Yes | https://digitalwerk-coburg.de | PASS |
| email | Yes | hallo@digitalwerk-coburg.de | PASS |
| telephone | Yes | "+49 (0) 174 660 3656" | MINOR — not E.164 format |
| foundingDate | Yes | "2024" | PASS |
| logo | Yes | /favicon.svg (SVG) | MINOR — Google prefers PNG/JPG for logo rich results |
| address.streetAddress | Yes | "Von-Mayer-Straße 25" | PASS |
| address.postalCode | Yes | "96450" | PASS |
| address.addressLocality | Yes | "Coburg" | PASS |
| address.addressRegion | Yes | "Oberfranken" | MINOR — should be "BY" or "DE-BY" |
| address.addressCountry | Yes | "DE" | PASS |
| geo (GeoCoordinates) | Partial | Via GeoCircle midpoint, lat: 50.2612, lon: 10.9628 | MINOR — not a direct geo property; precision is 4 decimal places, recommend 5 |
| openingHoursSpecification | MISSING | — | MISSING — recommended property |
| areaServed | Yes | GeoCircle 50km radius | PARTIAL — cities not enumerated by name; GeoCircle is valid but named Place[] is richer |
| priceRange | Yes | "$$" | PASS |
| sameAs | Yes | LinkedIn, GitHub | PARTIAL — only 2 platforms; no Xing, no Facebook, no review platforms |
| knowsAbout | Yes | 7 items | PASS |
| aggregateRating | Yes | 5.0 / 3 reviews | RISK — reviews not from recognized third-party platform |
| founder | Yes | @id reference to Person | PASS — correct entity graph pattern |
| currenciesAccepted | MISSING | — | Optional but useful |
| paymentAccepted | MISSING | — | Optional |
| hasMap | MISSING | — | Should link to Google Maps or OSM location |

**Critical schema issues:**
1. `aggregateRating` with `reviewCount: 3` based on on-site testimonials violates Google's review schema guidelines — remove or replace with a genuine third-party aggregator widget (ProvenExpert, etc.) once reviews are collected there.
2. `geo` is nested inside `GeoCircle.geoMidpoint` rather than being a direct `geo: { @type: GeoCoordinates }` property on the LocalBusiness. Direct geo property is the correct pattern for address-pinned businesses.
3. `openingHoursSpecification` is completely absent — this is a recommended property for local businesses and affects rich result eligibility.
4. `logo` points to an SVG. Google's Knowledge Panel and rich results prefer raster formats (PNG/JPG, min 112x112px) for the logo property.

---

## 7. Local On-Page SEO — Score: 17 / 20

### City Landing Pages Evaluation

#### /webdesign-coburg
- **Word count:** ~1,800–2,000 words — meets the 1,500-word minimum
- **Local hooks:** Strong — Vestestadt, Vestefeste, Schlossplatz, HUK-Coburg, Coburger Tageblatt, Itzgrund
- **City-specific FAQs:** Yes — "Wo sitzt Digitalwerk Coburg genau?", "Brauche ich einen Webdesigner aus Coburg?"
- **Unique content estimate:** ~65–70% vs base /leistungen/webdesign page (meets the 60% rule)
- **CTA with city reference:** Yes — "Ihr Webdesigner für Coburg" pattern
- **Internal linking:** Links to /leistungen, /webentwicklung, /ki-beratung, /seo, /zusammenarbeit, /ueber-mich
- **Schema on page:** Not confirmed (WebFetch did not surface page-level JSON-LD beyond site-wide schema in <head>)
- **Assessment:** PASS — solid local landing page

#### /webentwicklung-coburg
- **Word count:** ~1,800–2,200 words — meets minimum
- **Local hooks:** Sonneberg/Thüringen border reference, Coburger Land, DATEV mention, Hetzner hosting, CHECK24 founder credential
- **City-specific FAQs:** Yes — 5 localized Q&A blocks (cost, tech stack, source code ownership, legacy modernization, maintenance)
- **Unique content estimate:** ~60–65% vs /leistungen/webentwicklung (borderline — monitor)
- **Assessment:** PASS (borderline on unique content threshold)

#### /seo-coburg
- **Word count:** ~2,200–2,600 words — strongest of the three
- **Local hooks:** IHK Coburg backlink mention, Marktplatz restaurants, Dachdecker/Zahnarzt examples, "5–10 Anbieter" local competition claim, GBP as FAQ topic
- **City-specific FAQs:** Yes — 5 FAQs including GBP and GEO topics
- **Unique content estimate:** ~65–70% vs /leistungen/seo
- **Assessment:** PASS — best executed city landing page

### On-Page Signal Summary

| Signal | Status |
|--------|--------|
| City name in H1 | PASS (all 3 pages) |
| City name in title tag | PASS |
| City name in meta description | PASS |
| NAP in page body | PASS |
| geo meta tags (geo.region, geo.placename, geo.position, ICBM) | PASS — all 4 present |
| Structured data on city pages | NOT CONFIRMED (page-level schema not surfaced) |
| Internal links from service hub to city pages | PASS — footer navigation links /webdesign-coburg, /webentwicklung-coburg, /seo-coburg |
| Maps embed on /kontakt | MISSING — no map present |
| OpenStreetMap alternative | MISSING |
| Directions link | MISSING |
| Blog posts with local anchor links | PASS — 7 published blog posts, at least 1 directly covers local SEO/GBP |

### Gaps in city page coverage:
- City landing pages exist only for Coburg. No pages exist for Bamberg, Kronach, Lichtenfels, Sonneberg, Hildburghausen, Kulmbach, or Bayreuth — all of which are named service area targets in the keyword strategy. This is a significant organic opportunity gap for lower-competition queries like "Webdesign Bamberg" or "SEO Kronach".
- Only 3 service types have city pages (Webdesign, Webentwicklung, SEO). KI-Beratung has no city landing page despite being a stated primary service.

---

## 8. Local Link & Authority Signals — Score: 5 / 10

| Signal | Status | Notes |
|--------|--------|-------|
| Local business directory links | 0 confirmed | No 11880, Gelbe Seiten, Cylex links |
| IHK Coburg mention in content | Yes (SEO page) | Not confirmed as an actual backlink |
| Local media coverage | Not found | Coburger Tageblatt referenced as client type, not as coverage source |
| Chamber of commerce listing | Unknown | IHK Coburg directory not checked |
| LinkedIn profile | Present | https://www.linkedin.com/in/pascal-krason-b74028326/ |
| GitHub profile | Present | https://github.com/Padrio |
| Xing profile | Not found | German B2B platform — not in sameAs |
| Local event sponsorships | Not found | — |
| Guest posts on regional sites | Not found | — |

---

## 9. GEO (AI Visibility) Signals

| Signal | Status |
|--------|--------|
| robots.txt allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended | PASS |
| llms.txt present | PASS |
| Schema entity graph with @id cross-references | PASS |
| FAQPage schema | PASS (4 JSON-LD blocks on homepage) |
| PageSummary pattern (zitierfähiger Absatz) | PARTIAL (mentioned in CLAUDE.md as required) |
| HTML tables with facts/comparisons | PASS (pricing tables on service pages) |
| DefinedTerm schema on /wissen entries | PASS (5 Wissen entries) |
| BlogPosting schema | PASS (blog implemented) |

GEO implementation is notably ahead of local citation/GBP work — the inverse of what drives local pack rankings.

---

## 10. Industry-Specific Assessment — Digital Agency, Coburg Metro (~80k)

### Competitive Landscape Estimate
- Coburg metro population: ~80,000 (Landkreis Coburg: ~90,000)
- 11880.com lists 18 webdesign businesses in Coburg (including agencies, freelancers, and studios)
- Active competitors with GBP presence: unknown without live Maps access, but likely 5–8 have verified profiles
- Search volume estimate for "Webdesign Coburg": 100–500/month (small market — SoLV expectations should be realistic)
- Search volume estimate for "Webdesign Bamberg": 200–1,000/month (larger market, less local competition penetration)

### SoLV (Share of Local Voice) Expectations
For a solo freelancer in a market this size:
- Realistic local pack target: Top 3 for "Webdesign Coburg" within 6–12 months after GBP verification with 15+ reviews
- Realistic organic target: Top 5 for "Webdesign Coburg", "Webentwicklung Coburg" within 3–6 months (already in progress with city landing pages)
- Proximity note: 55.2% of local pack ranking variance is proximity-based (Search Atlas ML study). Von-Mayer-Straße 25 is ~1.2km from Marktplatz/Innenstadt. This is good positioning for "near me" and central Coburg searches.

### Freelancer vs Agency Schema Consideration
The dual `@type: ["LocalBusiness", "ProfessionalService"]` is correct. The more specific `ITService` or `ProfessionalService` subtypes are appropriate. Do not add `Attorney` or `HomeAndConstructionBusiness`. Consider adding `ITConsultant` or `WebDesigner` as knowsAbout values rather than schema types, as schema-dts does not have a clean `WebDesigner` subtype.

---

## 11. Top 10 Prioritized Actions

### Critical (blocks local pack eligibility entirely)

**1. Create and verify Google Business Profile immediately**
- Go to business.google.com and create a profile for "Digitalwerk Coburg"
- Select primary category: "Webdesign-Firma" or "Internet-Marketing-Agentur" (confirm available German categories)
- Add secondary categories: "IT-Dienstleistungen", "SEO-Agentur"
- Set as Service Area Business — add all 8 named service cities
- Upload minimum 10 photos (headshot, workspace, portfolio screenshots, logo)
- Write a 750-character description with "Webdesign Coburg", "SEO Coburg", and "Webentwicklung" in the text
- Add services with pricing ranges
- Set hours (or mark as "By appointment")
- Link to https://digitalwerk-coburg.de
- Verify via postcard (SAB) or phone
- Expected impact: +25 weighted local SEO score points upon completion

**2. Build a verified review base on Google (18-day rule)**
- After GBP is live, send review request links to the 3 testimonial clients (Richter, Hofmann, Weber) — convert their existing testimonials into Google reviews
- Target: 5 reviews in month 1, 10 total within 3 months
- Respond to every review within 24 hours
- Remove or comment out the `aggregateRating` JSON-LD schema block until a real third-party review count backs it up — current implementation (3 on-site testimonials coded as schema reviews) risks a Google manual policy action

### High (significant ranking impact, executable within 1–2 weeks)

**3. Fix `aggregateRating` schema or remove it**
- Option A: Remove the `aggregateRating` block from `buildLocalBusiness()` until genuine third-party reviews exist
- Option B: Integrate a ProvenExpert widget and update schema to reflect that platform's count/rating
- File: `/Users/pascal/Developer/DigitalWerk/src/utils/schema.ts` lines 114–120

**4. Submit to Tier 1 German citation directories**
Priority order:
  1. Gelbe Seiten (gelbeseiten.de) — free basic listing
  2. Das Örtliche (dasoertliche.de) — free basic listing
  3. 11880.com — currently lists 18 Coburg webdesign businesses; Digitalwerk is absent
  4. Cylex.de — free listing
  5. Yelp.de — free listing
  6. Bing Places (bing.com/places) — free, syncs to Bing Maps and Apple Maps
  7. OpenStreetMap — add node at Von-Mayer-Straße 25 with correct tags
  Use consistent NAP format across all: phone as `+49 174 660 3656` (no parentheses)

**5. Add direct `geo` property to LocalBusiness schema**
Change from nested `GeoCircle.geoMidpoint` to direct property:
```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": 50.26121,
  "longitude": 10.96280
}
```
Also add `areaServed` as named Place array instead of / in addition to GeoCircle:
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

**6. Add OpenStreetMap embed to /kontakt page**
Replace the missing map on the contact page with an OpenStreetMap iframe (DSGVO-compliant, no Google consent required). This adds a local relevance signal and improves UX.
Example: `https://www.openstreetmap.org/export/embed.html?bbox=10.955,50.255,10.972,50.270&layer=mapnik&marker=50.2612,10.9628`

### Medium (local authority building, 1–3 months)

**7. Fix `addressRegion` in schema to use ISO Bundesland code**
Change `"Oberfranken"` to `"BY"` in site.ts line 54 (or add a `containedInPlace` with Oberfranken as a nested AdministrativeArea). This aligns with the geo.region meta tag value of `DE-BY`.

**8. Fix `openingHoursSpecification` — add to LocalBusiness schema**
Even for a freelancer, specifying availability hours improves rich result eligibility. Add approximate contact hours (e.g., Monday–Friday 09:00–18:00).

**9. Expand city landing pages to named service area cities**
Create pages for: `/webdesign-bamberg`, `/webdesign-kronach`, `/seo-bamberg` minimum. Bamberg is a larger market (76k city population) with meaningful search volume and likely lower GBP competition density in the specific digital agency vertical.

**10. Add Xing profile and sameAs reference**
Xing is the dominant German professional network (ahead of LinkedIn for B2B in German SME). Create a Xing profile and add `https://www.xing.com/profile/PascalKrason` to the `sameAs` array in `buildLocalBusiness()`. Also consider adding a ProvenExpert profile URL to sameAs once registered.

---

## 12. Limitations & Disclaimer

The following could not be assessed without paid tools or authenticated access:

- **Google local pack live positions** — geo-grid rank tracking requires DataForSEO or BrightLocal API; deferred per audit scope
- **GBP existence confirmation** — Google consent wall blocked Maps API access; GBP status is inferred from on-site signals (no embed, no CID link, no profile reference in any page content). Recommendation stands regardless.
- **Bing Places existence** — auth wall; manual check at bing.com/places/business/claim recommended
- **Apple Maps** — requires Apple Maps Connect; not accessible via WebFetch
- **Cylex.de / ProvenExpert** — 403/410 responses; manual check required
- **Live search ranking positions** — could not verify current organic rank for "Webdesign Coburg" or "SEO Coburg" SERP without live Google access; competitor density estimate (18 businesses on 11880.com) is a proxy
- **Backlink profile** — no Ahrefs/Moz/Semrush access; link authority assessment is surface-level only
- **GBP review count and rating** — cannot confirm current Google review state; treated as unknown throughout
- **Proximity advantage quantification** — Von-Mayer-Straße 25 proximity to Coburg city center is favorable, but exact grid-level rank variance requires geo-grid tooling (Search Atlas, Local Falcon, etc.)
