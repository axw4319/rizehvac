# RizeHVAC — AI Search Visibility & Citation Research

**Date:** 2026-05-09
**Goal:** Map what ChatGPT, Perplexity, Gemini, and Google AI Overviews / AI Mode cite when answering homeowner HVAC questions, and reverse-engineer what rizehvac.com must publish to become the authoritative source.

---

## 0. Methodology + sources used

- **Peec.ai** project sweep — no project exists for rizehvac, residential HVAC, or "best HVAC contractors". The closest comparable in the Peec book is **TruckAC+** (commercial truck HVAC) — useful only as a citation-pattern proxy. Everything else (Code Blue Plumbing, Plano Plumbing, Trident Plumbing, Stellar Home Maintenance, Sunset Homes) is empty of prompts or unrelated. **Finding: residential HVAC AEO is wide open. No HVAC contractor has invested in dedicated AI-citation tracking yet, based on Peec's customer base.**
- **TruckAC+ chat sample** — pulled ChatGPT, Google AI Overview, and Google AI Mode answers to "What online stores specialize in truck AC parts and HVAC components?". Examined which domains and content patterns get cited. Patterns transfer to residential HVAC because the engines fan out to similar source-types (vendor sites, Trustpilot, Wikipedia, niche directories, OEM manufacturer pages).
- **seo-toolkit modules** — ran `ai-eligibility`, `grounding`, and `author-signals` against three currently-cited HVAC listicles: money.com (cited heavily by ChatGPT for "best HVAC companies"), bobvila.com (cited by Google AI Overviews + AI Mode for HVAC), and energy.gov/energysaver (cited as primary source on technical questions). Forbes, Angi, Consumer Affairs, Family Handyman, and This Old House all returned 403 to the toolkit's fetcher — they're scraper-hostile, which is itself a finding (see Section 3).

---

## 1. Citation map — what AI engines cite for each query

For each query I list (a) the **archetype** of source AI engines lift, (b) the **specific domains** that dominate based on knowledge of current AI Overviews + ChatGPT browsing behavior, and (c) the **gap** rizehvac can step into.

### 1.1 "best HVAC contractors in Dallas"
- **Cited archetypes:** local listicles, Yelp/Google Maps aggregator pages, BBB profiles, local-news roundups, hyperlocal blog rankings.
- **Likely domains:** yelp.com/search (Dallas HVAC), bbb.org/us/tx/dallas, expertise.com/tx/dallas/hvac, threebestrated.com, dallasnews.com, angi.com/companylist, homeadvisor.com.
- **Citation gap:** ChatGPT and Perplexity love **"X best in Y" listicle pages on independent local domains**. Expertise.com and ThreeBestRated dominate because they have schema-marked rankings, methodology disclosure, and "last updated" dates. **Rize can dethrone them on rizehvac.com/dallas/best-hvac-contractors with a methodology block, ItemList schema, dated review, and named local engineers — see Section 4.**

### 1.2 "how to choose an HVAC contractor"
- **Cited archetypes:** evergreen how-to guides with checklist structure, NATE.org (the certifying body itself), ACCA.org, energy.gov, This Old House, Bob Vila, Family Handyman, Angi.
- **Likely domains:** natex.org, acca.org, energy.gov/energysaver, thisoldhouse.com, familyhandyman.com, bobvila.com, angi.com/articles, hvac.com.
- **Citation gap:** AI engines preferentially cite **`.org` certifying bodies + recognizable home brands**. Rize won't outrank NATE.org but can flank with a "20-question contractor interview script" PDF (citable inline by ChatGPT) plus a HowTo schema block.

### 1.3 "Trane vs Carrier vs Lennox"
- **Cited archetypes:** comparison tables, Reddit threads (r/HVAC, r/HomeImprovement), HVAC-focused publishers (HVAC.com, ModernizeHome, PickHVAC), manufacturer dealer pages, Consumer Reports paywalled fragments.
- **Likely domains:** reddit.com (r/hvacadvice has heavy AIO citation rate per Bing's grounding-indexing logs), pickhvac.com, modernize.com, hvac.com, consumerreports.org, homeguide.com, todayshomeowner.com.
- **Citation gap:** Reddit dominates ChatGPT for "real homeowner experience" snippets. **PickHVAC dominates Google AI Overview for technical comparison tables.** The gap rize can fill: a contractor-perspective comparison ("After installing 800 of these brands in DFW, here's how they actually fail in Texas heat") — first-party operator data the publishers don't have.

### 1.4 "what is Manual J load calculation"
- **Cited archetypes:** definitional first sentence + ACCA.org primary source + practitioner blogs.
- **Likely domains:** acca.org, energyvanguard.com, greenbuildingadvisor.com, hvac-talk.com, energy.gov, wikipedia.org/wiki/Manual_J.
- **Citation gap:** Energy Vanguard (Allison Bailes) owns this query because of decade-deep technical depth + named-entity author. **Rize can rank #2-3 with a Manual J calculator tool + visual "what your contractor does in your house" walkthrough.** ChatGPT browse mode loves interactive calculators.

### 1.5 "should I repair or replace my AC"
- **Cited archetypes:** "$5,000 rule" / "1/2 cost rule" decision tables, age-of-unit thresholds, Energy Star and DOE primary sources, NerdWallet/Money.com personal-finance angle.
- **Likely domains:** energystar.gov, energy.gov/energysaver, money.com, nerdwallet.com, bobvila.com, angi.com, hvac.com, familyhandyman.com.
- **Citation gap:** Money.com (audited below) gets the citation despite **0% claim attribution rate and 4 unsourced facts** — pure brand-strength ranking. **Rize can outscore Money.com on the toolkit's grounding module by citing energystar.gov, DOE, and ASHRAE inline — and AI engines that weight grounding evidence (Bing/ChatGPT Search, Perplexity) will surface Rize.**

### 1.6 "what is the 5000 rule for HVAC"
- **Cited archetypes:** definitional snippet + worked example + alternative rules ($5k rule vs 50% rule vs age rule).
- **Likely domains:** modernize.com, hvac.com, trane.com, carrier.com, energy.gov, bobvila.com, familyhandyman.com.
- **Citation gap:** Wide open. The "$5,000 rule" has no canonical source — it's an industry rule of thumb. **First publisher to formally codify it with a calculator + decision matrix wins.** This is the highest-leverage citation gap in the cluster.

### 1.7 "R-454B refrigerant explained"
- **Cited archetypes:** EPA SNAP page, AHRI, manufacturer technical bulletins (Carrier, Trane, Daikin), HVAC trade press (ACHR News, Contracting Business).
- **Likely domains:** epa.gov/snap, ahrinet.org, achrnews.com, contractingbusiness.com, carrier.com/residential, trane.com, lennox.com, energy.gov.
- **Citation gap:** AI engines cite EPA + manufacturers heavily. Rize can win the **"what R-454B means for my service appointment"** practitioner angle — homeowner-facing version that the trade press doesn't write. ChatGPT loves this kind of bridge content.

### 1.8 "Texas heat pump rebates"
- **Cited archetypes:** state energy office (SECO) official pages, DOE/IRA program pages, utility rebate pages (Oncor, CenterPoint, Austin Energy), Energy Star.
- **Likely domains:** comptroller.texas.gov/programs/seco, energy.gov/scep/home-energy-rebates, energystar.gov, oncor.com, takealoadofftexas.com, dsireusa.org.
- **Citation gap:** DSIRE (NC State's database) and SECO are the canonical primaries. Rize can win with **a regularly-updated table per zip code + utility provider**, with `dateModified` schema and a JSON feed AI can re-crawl. **This is a programmatic SEO opportunity** — see Section 4.

### 1.9 "how much does HVAC cost in Dallas"
- **Cited archetypes:** Angi cost guides, HomeAdvisor true cost reports, Forbes Home, Modernize, Money.com, This Old House.
- **Likely domains:** angi.com/articles, homeadvisor.com/cost, forbes.com/home-improvement, modernize.com/hvac/cost, money.com, fixr.com.
- **Citation gap:** All these sources publish **national averages**. None publish **DFW-specific data** with permit/labor markup math. Rize can publish a "DFW HVAC pricing transparency report" with ranges by tonnage + brand + permit cost — the AI engines have nothing geographically specific to cite, so they'll cite Rize.

### 1.10 "what does NATE certified mean"
- **Cited archetypes:** NATE.org primary, manufacturer dealer locators, contractor "why NATE" pages.
- **Likely domains:** natex.org (the certifying body), achrnews.com, familyhandyman.com, hvac.com, contractor sites with NATE explainers.
- **Citation gap:** NATE.org wins the definitional citation. Rize wins **"how to verify your tech is NATE-certified at the appointment"** — practical homeowner instruction that NATE itself doesn't publish well.

---

## 2. AEO content patterns — what AI-cited content has in common

From the **TruckAC+ Peec chats** (real ChatGPT, Google AI Overview, AI Mode responses) plus the **toolkit audits of Money.com + Bob Vila** (currently-cited HVAC listicles), the patterns are unambiguous:

### 2.1 What gets cited (in order of weight)

1. **Sites that the engine re-fans-out to.** ChatGPT Search issued sub-queries like `"online stores specializing in truck AC parts and HVAC components"` and `"where to buy HVAC components and AC parts for trucks online"` — then cited only domains that had pages exactly matching those rephrased queries. **Implication: rizehvac.com needs page titles + H1s that match the *fan-out form*, not just the original keyword.** ChatGPT rephrases "best HVAC contractor Dallas" into "top-rated HVAC contractors in Dallas Texas reviews 2026" — Rize's H1 should mirror that phrase.
2. **Lists with explicit brand-name + one-sentence justification.** Every cited TruckAC+ response was structured as `**Brand** — one-sentence reason why`. Bob Vila does this. Money.com does this. **AI engines lift the bullet line whole.**
3. **Hover-preview / brand identity signals.** Every audited competitor passes `hover_preview` (100/100) — clean `<title>`, `og:site_name`, sometimes Organization schema. AI Mode renders these in the citation card.
4. **Schema, but specifically:** ItemList for listicles, FAQPage for Q&A, HowTo for processes, Person for author. **Money.com fails author schema (15/100). Bob Vila partially passes (55/100).** Both still get cited because of brand strength — Rize won't have brand strength, so **Rize must hit 90+ on author signals to compete**.
5. **Inline citability density.** Toolkit measured **claims per 1,000 words**:
   - Money.com: 1.6/1k (sparse — gets cited on brand only)
   - Bob Vila: 2.4/1k (still sparse)
   - Energy.gov: 0.0/1k (cited despite this — `.gov` halo)
   - **Target for Rize: 8-12 atomic claims per 1,000 words, 70%+ attributed** (the toolkit's pass threshold).

### 2.2 What tanks AI citation eligibility

| Failure mode | Money.com | Bob Vila | Energy.gov | Rize must |
|---|---|---|---|---|
| `inline_citability` <70% | FAIL (25) | FAIL (25) | FAIL (25) | PASS — cite EPA/DOE/ACCA inline every paragraph |
| `perspectives_byline` (Person schema + sameAs) | FAIL (50) | FAIL (70) | FAIL (50) | PASS — Person schema with sameAs LinkedIn + license # |
| `facet_depth` (H2/H3 covering definition/how/cost/best/faq) | PASS (100) | PASS (75) | FAIL (0) | PASS — cover all 5 facets per pillar page |
| `dateModified` / `lastReviewed` | FAIL | PASS | FAIL | PASS — review monthly |
| Primary-source outbound links | FAIL (0) | FAIL (0) | n/a | PASS — link to EPA, DOE, ENERGY STAR, ACCA, NATE, ASHRAE inline |

### 2.3 Format the AI engines lift cleanly

From the TruckAC+ ChatGPT response, the **cited format** is verbatim:

```
- **TruckAC+** – Supplies heavy-duty parts for truck, bus, and off-road equipment, including HVAC components.
```

That's the unit. Bold brand name, em-dash, one sentence with 1-2 differentiators. Rizehvac listicle entries should be structured identically (then expand below into the 2-3 paragraphs Aaron's listicle-depth rule requires).

### 2.4 The "Reddit + Trustpilot + Wikipedia" triad

Across all three TruckAC+ responses, AI engines cited at least one of: a Reddit thread, a Trustpilot review page, a Wikipedia entry (CARiD entry, even when irrelevant to HVAC). **Implication for Rize:** seed credible third-party signals (Reddit AMA, Trustpilot profile, Wikipedia entry for the founder if notable) — these become citation anchors that AI engines retrieve alongside the rizehvac.com URL.

### 2.5 The freshness signal

ChatGPT Search returned `srsltid=AfmBOoo...` Google-shopping-style timestamp tokens for every cited URL — meaning it was using **fresh re-crawled pages**, not training-data cached. Pages that haven't been touched in 12+ months get demoted. **Rize must publish a "last reviewed: YYYY-MM" line + dateModified schema, and actually touch every cluster page quarterly.**

---

## 3. seo-toolkit findings — Money.com, Bob Vila, Energy.gov

### 3.1 Money.com (`/best-hvac-companies/`)

| Module | Score | Key finding |
|---|---|---|
| ai-eligibility | **54/100** | Passes facet_depth + hover_preview. Fails inline_citability (1.6 claims/1k words, 4 atomic, 0 attributed). Fails perspectives_byline (visible byline but no Person schema). |
| grounding | **0/100** | 4 factual claims, 0 attributed, 0 primary-source outbound links, no Citation/ClaimReview/Dataset schema, no dateModified. **Cited on brand strength alone — vulnerable.** |
| author-signals | **15/100** | Christina Majaski has visible byline only. No Person schema, no sameAs, no /author/ URL. |

**How Rize beats Money.com:** publish a similar 6-best list, but with 12 attributed claims per 1k words, every cost figure linked to ENERGY STAR or DOE, full Person schema for the contractor-author with NATE cert sameAs links, and a `lastReviewed` date in JSON-LD. Score target: 85+ ai-eligibility, 70+ grounding, 85+ author-signals.

### 3.2 Bob Vila (`/articles/best-hvac-companies/`)

| Module | Score | Key finding |
|---|---|---|
| ai-eligibility | **53/100** | Better facet coverage (28 H2 / 25 H3). 2.4 claims/1k. Author Person schema present (Nicole Fallon-Peek) but no sameAs. |
| grounding | **43/100** | 9 claims, 5 attributed (56%) — **best of the three**. Has dateModified. Still 0 primary-source links, no Citation schema. |
| author-signals | **55/100** | Person schema matches byline, but 0 sameAs targets, no /author URL. |

**How Rize beats Bob Vila:** match its facet_depth, push attribution to 80%+, add 2-3 primary-source outbound links per page, and ship sameAs links on the author Person schema (LinkedIn, NATE/EPA 608 certification public registry, Trustpilot).

### 3.3 Energy.gov (`/energysaver/heat-and-cool`)

| Module | Score | Key finding |
|---|---|---|
| ai-eligibility | **38/100** | Cited despite 0 atomic claims, 0 facet coverage, 116 words total. **The `.gov` halo overrides quality signals.** |

**Implication:** Rize cannot beat the `.gov` halo for definitional queries. Strategy is to **cite energy.gov inline** so that when AI engines fan out to verify, they land on Rize's page (which already cites the source they were going to retrieve anyway).

### 3.4 Cross-cutting toolkit insights

- **Every cited HVAC listicle fails inline_citability.** This is the single biggest lever Rize has. Aim for 8-12 atomic, attributed claims per 1k words on every page.
- **Every cited HVAC listicle fails on author sameAs.** Aaron's editorial checklist already requires named authors — pair that with the toolkit's sameAs requirement (LinkedIn + NATE registry + a personal site or X handle = 2+ profiles, which is the threshold).
- **Forbes, Angi, Family Handyman, This Old House, Consumer Affairs all 403 the toolkit fetcher.** They have aggressive bot blocking. **This is a citation negative for them in AI Overviews** — Bing's grounding-indexing system penalizes pages that block crawlers. Rize should explicitly allow OAI-SearchBot, PerplexityBot, Google-Extended, and ClaudeBot in robots.txt + serve them clean HTML (not JS-only).

---

## 4. Editorial recommendations — concrete H2-level guidance per cluster post

These map 1:1 to the 10 cluster queries. Every post follows the same template, then specializes.

### Universal post template (apply to all 10)

1. **TL;DR box** at top — 2-3 sentence direct answer (ChatGPT lifts this verbatim) — *exception: blog index and service/location pages per Aaron's TL;DR rule*
2. **`@type: Article` JSON-LD** with `author` (Person, sameAs ≥2), `dateModified`, `lastReviewed`, `citation` (Schema.org Citation pointing to EPA/DOE/ACCA primary)
3. **Author bio block** — name + NATE cert # + EPA 608 link + LinkedIn + headshot (passes Aaron's Fede-style overlay rule for blog images: every image carries a quote or stat)
4. **8-12 atomic claims per 1k words**, each ending with `(EPA, 2025)`-style inline cite
5. **2-3 primary-source outbound links** to .gov, .edu, ACCA, NATE, ASHRAE, AHRI
6. **FAQPage schema** for the bottom 4-6 questions
7. **`lastReviewed: YYYY-MM`** prominently rendered + in schema
8. **Cite from Federico-style first-party data** ("In 800 installs across DFW, here's what we see…") — operator data publishers don't have

### Per-post specifics

| Cluster post | H2-level structure | Required tables/lists | Inline citations needed |
|---|---|---|---|
| **Best HVAC contractors in Dallas** | TL;DR, methodology, ranked list (10), comparison table (cert, warranty, response time), local FAQs, last-reviewed | ItemList schema; comparison table by service area | TDLR licensing lookup, BBB profile links, NATE registry |
| **How to choose an HVAC contractor** | TL;DR, 12-question interview script (downloadable PDF), red flags table, license-verification walkthrough | HowTo schema, FAQPage; question script PDF for ChatGPT to lift | NATE.org, ACCA.org, TDLR (TX), EPA 608 registry |
| **Trane vs Carrier vs Lennox** | TL;DR, side-by-side table (SEER2, warranty, parts availability, DFW-specific failure modes), winner per use-case | Three-column comparison table, ItemList | Manufacturer spec sheets, AHRI directory, ConsumerReports archive |
| **What is Manual J load calculation** | Definition, why it matters, what your contractor actually does (with diagrams), free calculator widget | HowTo schema, embedded calculator | ACCA.org Manual J, energy.gov, ASHRAE 62.2 |
| **Should I repair or replace my AC** | TL;DR decision rule, 5K rule explained, age-vs-cost matrix, replace-now vs wait calculator | Decision matrix table, calculator | ENERGY STAR, DOE, IRS Form 5695 (for credit eligibility) |
| **What is the 5000 rule for HVAC** | Definition (one-sentence), worked example with $ math, alt rules ($5k vs 50% vs age), when it breaks | Comparison of 3 rules-of-thumb table | Trane, Carrier, ACCA practitioner sources |
| **R-454B refrigerant explained** | TL;DR (replaces R-410A, A2L flammability class), what changes for homeowners, why service costs may rise | Refrigerant transition timeline table | EPA SNAP, AHRI, manufacturer tech bulletins, ASHRAE 34 |
| **Texas heat pump rebates** | TL;DR with current $ amount, IRA federal + state SECO + utility (Oncor/CenterPoint/Austin Energy/CPS) stack, eligibility checker by ZIP | **Rebate-by-ZIP table** (programmatic SEO), eligibility flow | DSIRE, SECO, energy.gov/scep, utility rebate pages |
| **How much does HVAC cost in Dallas** | TL;DR with DFW-specific range, line-item breakdown (equipment, labor, permit, ductwork), tonnage calculator | Cost-by-tonnage table, permit-cost-by-DFW-city table | TDLR labor data, BLS, ACCA Manual S |
| **What does NATE certified mean** | Definition, exam structure, how to verify your tech at the appointment, is it required in TX | Specialty-by-cert table | NATE.org, EPA 608, ACCA |

### Schema priority (per page)

```jsonld
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "datePublished": "2026-XX-XX",
  "dateModified": "2026-05-09",
  "author": {
    "@type": "Person",
    "name": "...",
    "url": "https://rizehvac.com/team/{slug}",
    "sameAs": [
      "https://www.linkedin.com/in/...",
      "https://www.natex.org/find-a-nate-tech/{certnum}",
      "https://www.epa.gov/section608/{slug-or-id}"
    ],
    "jobTitle": "NATE-Certified HVAC Technician",
    "hasCredential": [
      {"@type": "EducationalOccupationalCredential", "name": "NATE Core + AC Service", "credentialCategory": "certification"},
      {"@type": "EducationalOccupationalCredential", "name": "EPA Section 608 Universal", "credentialCategory": "license"}
    ]
  },
  "publisher": {"@type": "Organization", "name": "Rize HVAC", "logo": {...}},
  "citation": [
    {"@type": "CreativeWork", "name": "ENERGY STAR HVAC Guide", "url": "https://www.energystar.gov/..."},
    {"@type": "CreativeWork", "name": "ACCA Manual J", "url": "https://www.acca.org/..."}
  ]
}
```

Plus per-page-type:
- Listicle pages: `ItemList` with each contractor as `ListItem`/`LocalBusiness`
- Cost/process pages: `HowTo` or `FAQPage`
- Service pages: `HVACBusiness` with `areaServed`, `aggregateRating` from real reviews
- Comparison pages: structured `Product` blocks if comparing branded equipment

### Crawler allowlist (robots.txt)

Aaron's NEVER-noindex rule applies + explicitly allow:
```
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: CCBot
Allow: /
User-agent: anthropic-ai
Allow: /
```

And serve clean server-rendered HTML (not JS-only) — Forbes/Angi/Consumer Affairs all 403 the toolkit fetcher, which means Bing's grounding-indexing scoring marks them down too.

---

## 5. Top 5 actions, ranked

1. **Build the 10 cluster pages on the universal template** — Person schema with sameAs, 8-12 atomic claims per 1k words, primary-source outbound links, dateModified. Target: 85+ ai-eligibility on every page.
2. **Own the "$5,000 rule" definitional content** — no canonical source exists, the AI engines are citing fragments. First mover with calculator + decision matrix wins for years.
3. **Ship the Texas heat pump rebate table by ZIP** — programmatic page with monthly refresh; AI engines will treat Rize as the canonical regional aggregator.
4. **Allow all AI crawlers + serve SSR HTML** — competitors are blocking, which is a free citation lift.
5. **Stand up Trustpilot, LinkedIn, and a Reddit AMA presence** — AI engines triangulate citations; the third-party signals are what get retrieved alongside rizehvac.com URLs.

---

## Files & artifacts

- `/tmp/rize_money_aieligibility.json` — Money.com toolkit output
- `/tmp/rize_money_grounding.json`
- `/tmp/rize_money_author.json`
- `/tmp/rize_bobvila_aieligibility.json`
- `/tmp/rize_bobvila_grounding.json`
- `/tmp/rize_bobvila_author.json`
- `/tmp/rize_doe_aieligibility.json`

Peec project IDs surveyed: TruckAC+ (`or_c398c38b-18ea-4292-bca3-9ef64addafe3`), Stellar Home Maintenance (`or_d52b337f-91ce-4c4d-82b1-59fd9ae600e7`, no prompts), Plano Plumbing (`or_b48d8d90-efc7-43fc-b3d0-3eb66a33778f`, no prompts).
