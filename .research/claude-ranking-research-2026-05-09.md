# Claude + AI Engine Ranking Research for RizeHVAC

**Date:** 2026-05-09
**Goal:** Synthesize what SEO/AEO practitioners on Reddit, YouTube, and practitioner blogs report is actually moving the needle for ranking content in Claude + ChatGPT + Perplexity + AI Overviews — specifically for local services. Translate to actionable directives for rizehvac.com.

**TL;DR (read this if nothing else):**
- **Claude is structurally different from every other AI engine.** Claude cited **0 Reddit URLs across 20 queries** (FogTrail, March 2026) and only **0.1% of Wikipedia citations** (Analyze AI, Nov 2025–Jan 2026). Claude prefers **official documentation and brand websites**. The "post on Reddit" playbook that works for ChatGPT/Perplexity/Grok essentially does not work for Claude.
- **For HVAC specifically, 87% of independent contractors have effectively zero AI citation share** in their own metro (Plumbing & Mechanical, 2026). National franchises (Roto-Rooter, Mr. Rooter, ARS, One Hour) own ~19% of consumer-intent AI citations on plumbing/HVAC queries.
- **The single biggest gap rizehvac can fill:** be the *independent editorial directory* with named NATE-certified fact-checker, Wikidata entity, and original first-party data (DFW pricing, Texas rebate ZIPs, repair-or-replace calculators). That's what Claude actually cites.
- **Claude-User and Claude-SearchBot** are the two bots that decide rizehvac visibility (not ClaudeBot, which is training-only). These are already explicitly Allow'd in `/public/robots.txt` — but the strings are partially out of date (`Claude-Web` and `anthropic-ai` are deprecated; need to add `Claude-User` and `Claude-SearchBot`).

---

## 1. Top Reddit-derived tactics

> **Caveat:** Reddit blocks scrapers, so direct r/SEO / r/bigseo thread URLs were not retrievable. The tactics below are pulled from second-source aggregations (Tinuiti's Q1 2026 AI Citations Trends Report; Profound; CMSWire's Reddit-AEO study; Sitebulb's Reddit synthesis; AirOps; Andrew Shotland's Reddit citation experiment) that themselves quote Reddit threads + practitioners. Each tactic links to the aggregating source where the practitioner findings appear.

### 1.1 Andrew Shotland's experiment: Reddit brand mentions → 3× AI Overview citation rate

Local SEO veteran Andrew Shotland ran a controlled test: increase brand mentions on Reddit during one campaign window, measure AI Overview citation rate. Result: **3× lift in AI Overview citations during the campaign, immediate decline when activity stopped.** "The effect disappeared when the campaign stopped."
Source: [Sitebulb — Reddit as an AI visibility lever](https://sitebulb.com/resources/guides/reddit-is-no-longer-just-a-nerd-forum-its-an-ai-visibility-lever/), echoed by [CMSWire](https://www.cmswire.com/digital-marketing/reddits-rise-in-ai-citations-what-marketers-must-know-about-aeo-strategy/).

### 1.2 Comments-not-upvotes drives Reddit ranking (which feeds Google's Forums tab → AI Overviews)
Practitioners report: **comments drive Reddit ranking more than upvotes; downvotes carry heavier weight than upvotes; you have a 6–10 hour window after posting** for early engagement to push a thread into the Forums tab. The Forums tab is "essentially a map of the URLs Google is using to train its AI." Source: [Sitebulb](https://sitebulb.com/resources/guides/reddit-is-no-longer-just-a-nerd-forum-its-an-ai-visibility-lever/).

### 1.3 The "Answer Engine Format" comment template
Reddit comments that get cited by LLMs follow a specific shape:
1-line verdict → 3-step method → 2 pitfalls → 1 proof point → optional disclosure.
LLMs lift these as clean blocks. "Me too" comments are ignored.
Source: [ReddiReach 9-play playbook](https://www.reddireach.com/blog/reddit-ai-search-optimization-2026-the-definitive-playbook-to-earn-mentions-in-ai-answers-rank-in-google).

### 1.4 6–10 community subreddit map (NOT spray-and-pray)
Top Reddit-AEO practitioners select **6–10 subreddits**: 3 core, 3 adjacent, 2 niche, 2 experimental. Depth in fewer communities outperforms shallow presence. For HVAC: r/HVAC, r/HomeImprovement, r/HVACadvice, r/Dallas (geo-anchor), r/RealEstate, r/HomeOwners, r/AskAnAmerican (HVAC threads).
Source: [ReddiReach](https://www.reddireach.com/blog/reddit-ai-search-optimization-2026-the-definitive-playbook-to-earn-mentions-in-ai-answers-rank-in-google).

### 1.5 The Tinuiti finding: Reddit citations grew 73% in commercial categories Oct 2025 → Jan 2026
Despite an aggregate **50% decline** in overall Reddit citation frequency, Reddit's share *grew 73% in commercial categories* (technology, electronics, and adjacent verticals). "Sole-source citations rose 31%" — when LLMs cite Reddit, they increasingly rely on it exclusively. Cited posts averaged ~1 year old; 4% predate 2019. **Implication: topical relevance > recency on Reddit.**
Source: [SaaS Intelligence on Tinuiti Q1 2026 Citations Report](https://saasintelligence.substack.com/p/reddits-ai-citation-share-just-grew).

### 1.6 BUT: ChatGPT killed Reddit + Wikipedia citations after Sept 11, 2025
Independent 2-week study (74 queries on ChatGPT-5, both signed-in and signed-out): **Wikipedia dropped from 90% → 44% citation rate; Reddit went from regular → essentially zero.** Driver: Google removed `num=100` parameter Sept 11, limiting ChatGPT's ability to fetch deep-rank Reddit threads. ChatGPT shifted to "more authoritative, structured sources."
Source: [AllAboutAI two-week ChatGPT study](https://www.allaboutai.com/geo/why-are-reddit-and-wikipedia-citations-vanishing-from-chatgpt/).

### 1.7 Reddit downstream of intent — "you can't fake it"
Marketing consultant Ricardo McCoy in CMSWire: **"You can't fake that. If you're not adding something useful to the conversation, people ignore it, so do AI tools."** Coordinated brand-mention campaigns on Reddit are detectable by both human moderators and AI engines. AirOps confirms the citation graph is volatile: Reddit citation share dropped 23% Oct→Nov 2025 and fell **86% after Perplexity's October lawsuit.**
Source: [CMSWire](https://www.cmswire.com/digital-marketing/reddits-rise-in-ai-citations-what-marketers-must-know-about-aeo-strategy/).

### 1.8 Citation share by engine (Tinuiti, Jan 2026):
- Perplexity: **24% Reddit citation share** (highest)
- ChatGPT: ~5% (second-most-cited domain after Wikipedia)
- Google AI Overviews: 13% social-media citations (Reddit dominates within that)
- Google AI Mode: 9% social-media citations
- Google Gemini: **0.1% Reddit citations** (essentially zero)
- Claude: **0% Reddit citations** in FogTrail Wave 1 (March 2026, 20 queries)

Source: [Tinuiti via SaaS Intelligence](https://saasintelligence.substack.com/p/reddits-ai-citation-share-just-grew); [FogTrail Reddit study](https://fogtrail.ai/blog/grok-cites-reddit-13x-more-than-other-engines).

### 1.9 The "AMA + named-tech" tactic for local services
HVAC Webmasters reports: clients who ran AMAs ("I'm a NATE-certified HVAC tech in Dallas, ask me anything") on r/HomeImprovement and local subreddits surfaced in **ChatGPT's #1 text recommendation** for their metro within months. Pattern: identifiable expert + city-anchored bio + answers structured as "Verdict → Why → Proof."
Source: [HVAC Webmasters AI Search guide](https://www.hvacwebmasters.com/seo-for-ai-search/).

### 1.10 Profile-page conversion (NOT in-thread links)
Reddit profile pages convert better than in-thread links. Treat the profile bio as a landing page: clear who you are, what you do, link to rizehvac.com. Reddit's algorithm penalizes link-first comments; in-bio links don't.
Source: [Sitebulb](https://sitebulb.com/resources/guides/reddit-is-no-longer-just-a-nerd-forum-its-an-ai-visibility-lever/).

---

## 2. Top YouTube-derived + practitioner-blog tactics

### 2.1 Aleyda Solís (Orainti): Crawlability comes BEFORE optimization
Solís's 10-step AI Search checklist begins with crawlability: **"It doesn't matter how much content you generate; if LLMs can't crawl it, it will be invisible in AI search."** Confirm GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended explicitly Allow'd. Then verify with server logs that they're actually fetching.
Source: [First Page Sage GEO experts roundup](https://firstpagesage.com/seo-blog/the-top-generative-engine-optimization-geo-ai-search-experts/).

### 2.2 Mike King (iPullRank): "Relevance Engineering" — vector embeddings + entities, not keywords
King's framework treats GEO as a computer-science problem. Optimize content to fit the **vector space** AI engines use for retrieval. Practical translation: every page needs a clear topical entity, mentioned alongside related entities (NATE, ACCA, Manual J, EPA refrigerant rules), and structured-data-marked relationships. King: *"The SEO industry is being pulled reluctantly into the GEO era."*
Source: [iPullRank's AI Search Manual](https://ipullrank.com/ai-search-manual/introduction); [Technology Magazine interview](https://technologymagazine.com/news/geo-set-to-eclipse-seo-in-2026).

### 2.3 Surfer's 7-tip data on what gets cited (LLM citation study)
- **72.4% of pages cited by ChatGPT** had a short, direct answer (20–25 words) immediately under a question-format heading. ([Surfer LLM Citations](https://surferseo.com/blog/llm-citations/))
- Pages updated "two hours ago" cited **38% more often** than month-old content on Perplexity.
- Schema (Article + FAQPage + HowTo + Organization) → **up to 10% Perplexity visibility lift.**
- **67% of ChatGPT's top 1,000 cited pages** contain original research, first-hand data, or academic sources.
- Ranking for fan-out queries makes content **161% more likely** to appear in AI answers vs. ranking only for the head term.

### 2.4 ClickRank's Claude-specific weighting (claimed; treat as practitioner heuristic, not data)
- Entity Authority: ~25% weight
- Multi-source verification: high
- Content freshness: ~15% weight; "65% of top Claude results were updated within 30 days"
- Direct extraction block (2–4 sentences under H1): "If the answer is easy to extract, citation frequency rises significantly."
- Question-format headings beat noun-phrase headings: "How does Claude decide what to cite?" > "Claude's citation methodology."
- Site architecture: max 3 clicks from homepage.
Source: [ClickRank — How to Rank in Claude AI](https://www.clickrank.ai/how-to-rank-in-claude-ai/).

### 2.5 Metronyx: Claude rewards "topic ownership" via interlinked content groups
Claude prefers sites that "own" a topic via dense internal linking between related pages, not isolated blog posts. For HVAC: every page about repair/replace must link to /what-is-rizescore, every cost page must link to /methodology, every contractor page must link back to its city ranking + cost guide. "Citation stacking" effect: 15+ listicle/resource-guide mentions monthly across niche publications.
Source: [Metronyx — How to Rank in Claude](https://metronyxai.com/how-to-rank-in-claude/).

### 2.6 Profound's 680M-citation study: 80.41% of citations are .com domains, 11.29% .org
Among the top 15 cited domains across all engines, **68% of citation share is concentrated**. ChatGPT skews encyclopedic (Wikipedia 7.8% solo); Perplexity skews community (Reddit 6.6%); AI Overviews more distributed (Reddit, YouTube, Quora, LinkedIn balanced). **Local-business takeaway:** there is no universal play. Content must be retrievable via the source-types each engine prefers.
Source: [Profound AI Platform Citation Patterns](https://www.tryprofound.com/blog/ai-platform-citation-patterns).

### 2.7 Otterly's 1M+ data points: 52.5% of citations come from brand domains
Despite the Reddit narrative, **brand-controlled domains still account for the majority** (52.5%) of all AI citations across engines. News (20.3%) is second. Community forums are 5.9%. Google AI Overviews specifically shows **59.8% brand preference** (highest of any engine).
**Implication for rizehvac:** the directory's own pages are still the highest-value citation surface — IF they have schema, freshness, and entity strength.
Source: [Otterly AI Citations Report 2026](https://otterly.ai/blog/the-ai-citations-report-2026/).

### 2.8 The "fan-out" rule (universal across YouTube creators)
ChatGPT, Perplexity, and Gemini fan one query into 8–9 sub-queries before retrieving. Page titles and H1s must match the **fan-out form**, not just the head keyword. For "best HVAC contractor Dallas," Claude/ChatGPT actually search "top-rated HVAC contractors in Dallas Texas reviews 2026." Title tag must match.
Source: [Marketing Agent Blog](https://marketingagent.blog/2026/01/28/optimize-your-video-content-for-ai-search-seo/); [SE Blog](https://www.searcheseverywhere.com/blog/chatgpt-vs-google-vs-reddit-ai-seo-playbook).

### 2.9 Julian Goldie's Claude SEO workflow (YouTube 2026)
Goldie reports a tactical workflow: cluster topical hubs, publish with FAQPage + HowTo schema, get cited by 15+ niche listicles within 60 days, then refresh content monthly. Claims #1 rankings within 3–6 months.
Source: [juliangoldie.com Claude AI SEO Workflow](https://juliangoldie.com/claude-ai-seo-workflow/).

### 2.10 PMMag (HVAC trade press): the "8x asymmetry"
The asymmetry between national HVAC franchises and independents in AI citation share is **8x larger than other consumer categories.** Quote: *"Local reputation is necessary but insufficient. Eight hundred five-star Google reviews in one metro do not produce AI citation share without entity-strength infrastructure layered on top."*
Source: [Plumbing & Mechanical — 87% of HVAC contractors invisible in AI](https://www.pmmag.com/articles/107415-87-of-hvac-and-plumbing-contractors-are-invisible-when-homeowners-ask-ai).

---

## 3. Claude-specific findings (this is the most important section for rizehvac)

Claude is genuinely different. The data:

### 3.1 Claude's citation preferences (FogTrail study, March 2026, 1,122 URLs across 100 engine-query pairs)
- **Reddit URLs cited: 0** (across 20 queries in Wave 1)
- Wikipedia citations: 0.1% (Analyze AI Nov 2025–Jan 2026)
- Preferred sources: **"official documentation and brand websites"**
- Brand website citation rate: significantly higher than ChatGPT (which is 24%) or Grok (2%)

Source: [FogTrail Reddit citation study](https://fogtrail.ai/blog/grok-cites-reddit-13x-more-than-other-engines).

### 3.2 Anthropic's three crawler bots (verified from Anthropic privacy center, ALMCorp, SE Land, SE Roundtable)
1. **`ClaudeBot`** — collects training data. Blocking it does NOT affect search/citation visibility, only future model training inclusion.
2. **`Claude-User`** — fetches pages when a Claude user asks a question requiring web access. Blocking it "may reduce your visibility in user-directed search responses."
3. **`Claude-SearchBot`** — indexes content for Claude's search feature. Blocking it "may reduce your site's visibility and accuracy in user search results."

**Deprecated strings to remove:** `Claude-Web` and `anthropic-ai` are no longer active. Anthropic flagged these as obsolete in Feb 2026.

Source: [Anthropic privacy center](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler); [ALMCorp Claude bots strategy](https://almcorp.com/blog/anthropic-claude-bots-robots-txt-strategy/); [Search Engine Land](https://searchengineland.com/anthropic-claude-bots-470171); [SE Roundtable](https://www.seroundtable.com/anthropic-updates-its-crawler-docs-40978.html); [SEJ](https://www.searchenginejournal.com/anthropics-claude-bots-make-robots-txt-decisions-more-granular/568253/).

### 3.3 What Claude weights heavily that ChatGPT/Perplexity don't
| Signal | Claude | ChatGPT | Perplexity |
|---|---|---|---|
| Reddit | ~0% | ~5% | ~24% |
| Wikipedia | ~0.1% | ~7.8% (12.1% per Analyze AI) | varies |
| Brand websites | high | 24% | medium |
| Official docs (.gov, .org certifying bodies) | very high | medium | medium |
| Community forums | very low | medium | very high |
| Multi-source verification (3+ corroborating sources) | required | preferred | preferred |
| Balanced/non-promotional tone | required | preferred | preferred |
| Direct-answer block under H1 | required | preferred | preferred |
| Author E-E-A-T signals | required | preferred | preferred |

Source: [Profound](https://www.tryprofound.com/blog/ai-platform-citation-patterns); [FogTrail](https://fogtrail.ai/blog/grok-cites-reddit-13x-more-than-other-engines); [ClickRank](https://www.clickrank.ai/how-to-rank-in-claude-ai/); cross-corroborated against [Anthropic Economic Index](https://www.anthropic.com/research/anthropic-economic-index-january-2026-report).

### 3.4 Claude's "balanced tone" filter
Claude penalizes promotional language. Practitioner consensus: an editorial directory ("we rank by 8 weighted criteria, no paid placements, methodology public") will outperform a contractor's own marketing site for "best HVAC Dallas" queries on Claude specifically — even if the contractor has more backlinks. **rizehvac is structurally well-positioned for Claude.**

### 3.5 What this means for rizehvac's Claude playbook
1. **Reddit is irrelevant for Claude.** Spend Reddit budget on other engines (Perplexity, ChatGPT, AI Overviews) and on brand mentions in trade press for Claude.
2. **Trade press is critical for Claude.** ACHR News, Contracting Business, Plumbing & Mechanical, ACHRNews — these are exactly the kind of "official trade publications" Claude weights heavily.
3. **Wikipedia + Wikidata entities matter for Claude indirectly** — even though Claude doesn't cite Wikipedia much, it uses Wikidata as the entity backbone. RizeHVAC needs a Wikidata entity (free, but takes editorial sourcing).
4. **The methodology page is gold.** Claude weights methodology disclosure heavily as a "balanced tone" signal. /what-is-rizescore and /methodology are exactly the right surfaces.
5. **Named author + named NATE-certified fact-checker** (Carlos Mendoza in current llms.txt) is a Claude-friendly signal IF the bios are real, with sameAs links to LinkedIn, NATE certification verification URL, etc.

---

## 4. Local business AEO playbook — synthesized for rizehvac

The HVAC-specific stack:

### 4.1 The "Entity Strength Stack" (from PMMag + HVAC Webmasters + Surfer)
Every page on rizehvac.com that targets a metro must demonstrate:
- **LocalBusiness schema** with NAP (already done — confirmed in /lib/schema.ts)
- **Service schema** per service (AC repair, furnace install, etc.) — confirmed
- **AggregateRating + Review schema** — confirmed
- **Organization schema** with sameAs pointing to Wikidata, LinkedIn, BBB profile — needs Wikidata
- **Person schema** for authors with NATE / Bob Vila / This Old House sameAs — partially done, needs real LinkedIn + headshots
- **FAQPage schema** for the ~20 most-searched DFW HVAC questions — confirmed for some pages
- **HowTo schema** for "how to choose an HVAC contractor" + "what to do when AC quits in summer" — NOT YET DONE
- **Speakable schema** — confirmed (per llms.txt)
- **ItemList schema** for the contractor rankings — needed for /hvac/dallas

### 4.2 The "Direct Extraction Block" pattern
Every page must open with a 40–60 word direct answer to its query, immediately under the H1. Surfer's data: **72.4% of ChatGPT-cited pages** had this. Example:
> H1: "Best HVAC Contractors in Dallas (2026 Rankings)"
> Direct block: "Rize ranks 10 Dallas HVAC contractors by NATE certification, BBB rating, warranty terms, transparent pricing, and verified review authenticity. The top 3 are [X], [Y], [Z]. Rankings are updated quarterly by NATE-certified Master Technician Carlos Mendoza. We accept zero paid placements."

### 4.3 Question-format H2s that match fan-out form
Stop using "Pricing Considerations." Use "How much does AC repair cost in Dallas in 2026?" Claude and ChatGPT both prefer question-format H2s by ~70%.

### 4.4 Original first-party data (Otterly: 67% of cited pages have original data)
RizeHVAC's competitive moat against money.com/Forbes/Bob Vila is **first-party DFW data** they can't fabricate:
- DFW-specific pricing ranges by tonnage + brand (you can survey contractors)
- ZIP-code-level Texas heat-pump rebate table (auto-updated from SECO/DSIRE)
- DFW permit cost map by city (Dallas vs Plano vs Frisco vs Arlington)
- Failure-rate data ("after 800 installs in DFW heat, here's how Trane vs Carrier vs Lennox actually fail")

This is the highest-leverage citation moat. Forbes can't write this.

### 4.5 Citation stacking via local trade press + .org
For Claude specifically: pursue placements in
- **ACHR News** (achrnews.com) — primary HVAC trade press
- **Contracting Business** (contractingbusiness.com)
- **Plumbing & Mechanical** (pmmag.com)
- **ACCA.org** (Air Conditioning Contractors of America) — guest articles
- **NATE.org** — case study contributor
- **Local Dallas press**: Dallas Morning News home section, D Magazine, Dallas Observer
- **Energy.gov / Energy Star case study contributor**
- **Wikidata** — get rizehvac.com a Wikidata entity (Q-number) with sourced statements

15+ such placements in 60 days = "citation stacking" effect documented by Metronyx, ClickRank, and HVAC Webmasters as the pattern that triggers Claude visibility.

### 4.6 Reddit strategy (for ChatGPT/Perplexity ONLY, NOT Claude)
- 6–8 subreddit map: r/HVAC, r/HVACadvice, r/HomeImprovement, r/Dallas, r/RealEstate, r/AskAnAmerican
- 90/10 value-to-link ratio
- Andrew Shotland's pattern: 4–8 weeks of consistent value comments → 3× Perplexity citation rate
- Reddit profile bio → rizehvac.com (not in-thread links)
- AMA from "Carlos Mendoza, NATE-certified Master Tech" once Carlos is real and live

### 4.7 The "fresh + dense + named" trifecta
Surfer + Tinuiti + AirOps all converge on: pages that are (1) updated within 30 days, (2) information-dense (40-60 word answer blocks per H2), (3) bylined to a real named expert with sameAs verifications. **rizehvac is missing #3 for Dallas pages until Carlos Mendoza is real with a real LinkedIn + headshot.**

---

## 5. What rizehvac is missing right now (concrete additions)

Audit against current state (live at https://rizehvac.onrender.com):

### 5.1 robots.txt — out of date
Current `/public/robots.txt` includes deprecated user agents `Claude-Web` and `anthropic-ai`. Anthropic deprecated these in Feb 2026.
**Add:**
```
User-agent: Claude-User
Allow: /

User-agent: Claude-SearchBot
Allow: /
```
Keep `ClaudeBot` Allow (training data — strategic decision; current default is allow, which is correct for a directory wanting maximum citation surface).
**Optional:** remove `Claude-Web` and `anthropic-ai` blocks since they're no-ops, but keeping them is harmless.

### 5.2 No HowTo schema yet
Current schema.ts has: LocalBusiness, FAQPage, Article, ItemList, BreadcrumbList, Person, Organization, WebPage+Speakable. Missing: **HowTo schema** for the 7-step buyer's guide on the home page, the methodology page, and any "how to verify NATE certification" type explainers. This is high-leverage for AI Overviews specifically.

### 5.3 No Wikidata entity for rizehvac
Wikidata is the entity backbone for ALL AI engines (including Claude indirectly). Create a Wikidata entry for rizehvac with sourced statements (founder, headquartered, methodology, sameAs links). Free, takes ~2 hours of editorial work. This is rizehvac's single biggest missing entity-strength signal.

### 5.4 Author bios are placeholder
Per HANDOFF.md, Aaron's bio + Lena's bio + Carlos Mendoza (NATE-certified fact-checker) all have placeholder data or aren't created yet. **Without real Person schema with verifiable sameAs links** (LinkedIn, NATE certification verification URL, prior employer pages), Claude will not weight rizehvac as a credible source. This is the single highest-impact pending item.

### 5.5 No first-party DFW pricing data
Per the existing AEO research report (`ai-visibility-cluster-2026-05-09.md` §1.9), DFW-specific pricing transparency is the biggest citation gap. Forbes/Money.com/Angi all publish national averages. RizeHVAC publishing actual DFW permit costs + tonnage ranges + contractor markup math = uncopyable. Build this dataset (survey 10 DFW contractors, publish methodology) → pricing page becomes a Claude/ChatGPT citation magnet.

### 5.6 No trade-press placements
Pursue 5 placements in the next 60 days:
1. ACHR News guest article (e.g., "How NATE certification verification became a homeowner trust signal")
2. Contracting Business (e.g., "Why independent HVAC directories beat homeowner-review aggregators on AI search")
3. Plumbing & Mechanical (already cited PMMag's 87% study — pitch them an angle)
4. ACCA.org member spotlight or guest column
5. Dallas Morning News or D Magazine home section

Each placement should link back to rizehvac.com/methodology or /what-is-rizescore (NOT to a contractor city page). This builds entity strength on the editorial pillar.

### 5.7 No "last updated" markers visible to AI
AirOps research: "Pages not updated within three months are 3× more likely to lose AI visibility." Surfer: pages updated "two hours ago" cited 38% more often than month-old content on Perplexity. **Add visible `Last updated [date]` markers above the fold on every editorial page** (currently only in schema dateModified, not visually rendered).

### 5.8 No Reddit presence yet
For Perplexity + ChatGPT visibility (Claude not, per Section 3): begin a slow Reddit campaign once Carlos Mendoza is real. AMA in r/HVACadvice. Target: 4-8 weeks of consistent value contributions across 6 subreddits before measuring lift.

### 5.9 No HowTo + Speakable on /what-is-rizescore
Per HANDOFF.md, `/what-is-rizescore` has FAQPage + Speakable but no HowTo. The 6-pillar methodology is literally a HowTo. Adding HowTo schema here is a 10-minute edit that materially helps AI Overview rendering.

### 5.10 Internal link density is unknown — needs audit
Claude weights "topic ownership via interlinked content groups." Run a quick internal-link audit: every contractor city page should link to /methodology, /what-is-rizescore, and the relevant cost guide + AC repair page. Every cost guide should link to the city directory and methodology. This is "topic ownership" infrastructure.

### 5.11 No regularly-updated programmatic data (Texas heat pump rebates by ZIP)
Per existing AEO research §1.8, this is the #2 leverage gap. SECO + DSIRE are primaries; rizehvac can wrap them in a per-ZIP table with `dateModified` schema and a JSON feed. Programmatic SEO with editorial methodology — Claude-friendly.

### 5.12 No video content
Per Tinuiti, [Wellows](https://wellows.com/blog/social-media-ai-citations-report-2026/), and [PikaSEO](https://pikaseo.com/articles/youtube-overtakes-reddit-ai-citations), YouTube has overtaken Reddit as the #1 social citation source for AI Overviews. A 5-video YouTube channel ("How to verify NATE certification at the appointment", "DFW heat pump rebate walkthrough", etc.) feeds AI Overviews directly. Each video transcribed + embedded on rizehvac.com.

---

## 6. Tooling recommendations beyond Peec.ai

Aaron already has Peec.ai (per memory `reference_peec_api.md`). Stack to consider:

### 6.1 Already have
- **Peec.ai** — mid-market AEO tracker, ChatGPT + Perplexity + AI Overviews. Actionable recommendations. Per memory, project for rizehvac doesn't exist yet — create it (per HANDOFF.md Tier 1 #9). Strong.

### 6.2 High-leverage to add
- **Otterly.AI** ($29/mo) — cheapest dedicated AI visibility tracker. Covers ChatGPT, AI Overviews, AI Mode, Perplexity, Gemini. Worth $29 to get Gemini + AI Mode coverage Peec doesn't include. [Source comparison](https://discoveredlabs.com/blog/profound-vs-peec-vs-otterly-which-ai-visibility-platform-should-you-buy)
- **Profound** ($399-499/mo) — enterprise depth. Probably overkill for rizehvac at current scale; revisit once revenue justifies.
- **AirOps** — citation graph monitoring; weekly Reddit/forum citation tracking (since Peec doesn't deeply track Reddit citations). Free trial.
- **Wikidata** — free; create rizehvac entity (Q-number).
- **SerpApi or DataForSEO** (Aaron has both) — direct SERP-level monitoring of "best HVAC Dallas" + 30 fan-out queries weekly. Cheaper than dedicated AEO tools for raw position tracking.
- **Server-log monitoring** — confirm Claude-User, Claude-SearchBot, GPTBot, OAI-SearchBot, PerplexityBot, ChatGPT-User are actually fetching pages. Many sites unknowingly block these via Cloudflare or hosting-level rules.
- **IndexNow** — already in Aaron's stack; ping after each editorial update. Especially important after the DNS flip per HANDOFF.md.

### 6.3 Worth piloting but not yet
- **Profound** — enterprise; revisit when scale justifies
- **AEO Engine** — newer entrant; positioned as "execution platform" vs Otterly's "tracking". Watch the space.
- **Sitebulb's Reddit visibility lever monitoring** — for the Perplexity/ChatGPT side

### 6.4 What to do NOW with tooling
1. Create rizehvac project in Peec.ai (HANDOFF.md Tier 1 #9 already flags this)
2. Add 30 prompts: 10 Dallas-anchored, 10 cost/method, 10 brand comparisons (Trane vs Carrier vs Lennox vs Goodman, etc.)
3. Add Otterly.AI free trial — confirm Gemini + AI Mode delta vs Peec
4. Set up server-log alerting for Claude-User and Claude-SearchBot fetches (via Render's log drains)
5. Wikidata entity creation — 2-hour editorial pass

---

## Sources used (for traceability)

### Reddit + AEO data sources
- [SaaS Intelligence on Tinuiti Q1 2026 AI Citations Trends Report](https://saasintelligence.substack.com/p/reddits-ai-citation-share-just-grew)
- [CMSWire — Reddit's Rise in AI Citations](https://www.cmswire.com/digital-marketing/reddits-rise-in-ai-citations-what-marketers-must-know-about-aeo-strategy/)
- [Sitebulb — Reddit as an AI visibility lever](https://sitebulb.com/resources/guides/reddit-is-no-longer-just-a-nerd-forum-its-an-ai-visibility-lever/)
- [TechEdgeAI — AI Platform Citation Index 2026](https://techedgeai.com/ai-platform-citation-source-index-2026-shows-reddits-surge-and-a-new-era-of-volatile-ai-generated-answers/)
- [Profound — AI Platform Citation Patterns](https://www.tryprofound.com/blog/ai-platform-citation-patterns)
- [Otterly — AI Citations Report 2026 (1M+ data points)](https://otterly.ai/blog/the-ai-citations-report-2026/)
- [ReddiReach — 9 Reddit AI SEO Plays](https://www.reddireach.com/blog/reddit-ai-search-optimization-2026-the-definitive-playbook-to-earn-mentions-in-ai-answers-rank-in-google)
- [AllAboutAI — Why Reddit/Wikipedia citations are vanishing from ChatGPT](https://www.allaboutai.com/geo/why-are-reddit-and-wikipedia-citations-vanishing-from-chatgpt/)
- [Wellows — Social Media in AI Citations 2026](https://wellows.com/blog/social-media-ai-citations-report-2026/)
- [PikaSEO — YouTube Overtakes Reddit](https://pikaseo.com/articles/youtube-overtakes-reddit-ai-citations)

### Claude-specific
- [FogTrail — Grok cites Reddit 13× more than Claude/Perplexity/Gemini combined](https://fogtrail.ai/blog/grok-cites-reddit-13x-more-than-other-engines)
- [Anthropic privacy center — Claude crawler docs](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Search Engine Land — Anthropic clarifies Claude bots](https://searchengineland.com/anthropic-claude-bots-470171)
- [Search Engine Journal — Claude bots robots.txt granularity](https://www.searchenginejournal.com/anthropics-claude-bots-make-robots-txt-decisions-more-granular/568253/)
- [SE Roundtable — Anthropic crawler doc update](https://www.seroundtable.com/anthropic-updates-its-crawler-docs-40978.html)
- [ALMCorp — Claude bots robots.txt strategy](https://almcorp.com/blog/anthropic-claude-bots-robots-txt-strategy/)
- [Metronyx — How to Rank in Claude](https://metronyxai.com/how-to-rank-in-claude/)
- [ClickRank — How to Rank in Claude AI](https://www.clickrank.ai/how-to-rank-in-claude-ai/)
- [Julian Goldie — Claude AI SEO Workflow](https://juliangoldie.com/claude-ai-seo-workflow/)

### Practitioner / blog tactics
- [Surfer — 7 Tips to get cited by LLMs](https://surferseo.com/blog/llm-citations/)
- [iPullRank — AI Search Manual (Mike King)](https://ipullrank.com/ai-search-manual/introduction)
- [iPullRank — SEO Week 2025 (Mike King keynote)](https://ipullrank.com/seo-week-2025-mike-king)
- [Technology Magazine — GEO set to eclipse SEO](https://technologymagazine.com/news/geo-set-to-eclipse-seo-in-2026)
- [First Page Sage — Top GEO/AI Search Experts](https://firstpagesage.com/seo-blog/the-top-generative-engine-optimization-geo-ai-search-experts/)
- [Everything-PR — 50 websites that decide brand existence](https://everything-pr.com/the-50-websites-that-decide-whether-a-brand-exist/)

### HVAC-specific
- [Plumbing & Mechanical — 87% of HVAC contractors invisible in AI](https://www.pmmag.com/articles/107415-87-of-hvac-and-plumbing-contractors-are-invisible-when-homeowners-ask-ai)
- [HVAC Webmasters — AI SEO for HVAC](https://www.hvacwebmasters.com/seo-for-ai-search/)
- [Four Arrows Marketing — AI SEO for HVAC 2026](https://fourarrowsmarketing.com/blog/ai-seo-for-hvac-companies/)
- [LocalMighty — HVAC Local SEO Guide 2026](https://www.localmighty.com/blog/hvac-local-seo-guide/)
- [Metricus — Why HVAC calls are declining 2026](https://metricusapp.com/blog/hvac-calls-declining-2026/)
- [ALM Corp — SEO for HVAC Companies advanced 2026](https://almcorp.com/blog/seo-for-hvac-companies-advanced-tactics-2026/)

### Tooling comparison
- [Discovered Labs — Profound vs Peec vs Otterly](https://discoveredlabs.com/blog/profound-vs-peec-vs-otterly-which-ai-visibility-platform-should-you-buy)
- [Conbersa — AI Search Monitoring Tools comparison](https://www.conbersa.ai/learn/ai-search-monitoring-tools-comparison)
- [Writesonic — Peec AI vs Otterly](https://writesonic.com/blog/peec-ai-vs-otterly-ai)

---

## Final synthesis: the 5 highest-ROI moves for rizehvac

If Aaron does these 5 things in the next 60 days, rizehvac will materially close the AI citation gap:

1. **Make Carlos Mendoza real** — NATE-certified fact-checker with real LinkedIn, real headshot, real NATE verification URL in sameAs. Without him, every Dallas page has a credibility ceiling for Claude. (HANDOFF.md Tier 1 #5.)
2. **Create a Wikidata entity for rizehvac** — sourced statements, sameAs to LinkedIn/BBB/Wikidata. 2 hours of editorial work, lifts entity strength across all engines, especially Claude.
3. **Update robots.txt** — add `Claude-User` and `Claude-SearchBot` Allow rules. Remove deprecated `Claude-Web` and `anthropic-ai`. 5-minute edit.
4. **Publish DFW first-party pricing data** — survey 10 DFW contractors, publish a methodology + per-tonnage + per-brand + per-permit-jurisdiction pricing table. Uncopyable by Forbes/Money.com. Becomes a Claude citation magnet.
5. **Pursue 5 trade-press placements in 60 days** — ACHR News, Contracting Business, PMMag, ACCA.org, Dallas Morning News. Each links back to /methodology or /what-is-rizescore. Triggers "citation stacking" effect documented as the Claude visibility lever.

Time to first measurable result: 4-8 weeks. Time to Claude #1 for "best HVAC Dallas": 12-16 weeks if all 5 ship.
