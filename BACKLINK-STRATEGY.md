# rizehvac backlink + AEO citation strategy

**Last updated:** 2026-05-09 · v1
**Owner:** Aaron Whittaker
**Goal:** Earn 30+ referring domains and 100+ AI citations within 6 months of Dallas Wave 1 launch.

---

## Strategy framework

We use the same 4-tier funnel that's working for ProCloser, adapted for HVAC:

```
TIER 4 — AI CITATIONS
"ChatGPT/Perplexity/Claude cite rizehvac.com/blog/5000-rule-hvac... when answering 'should I repair or replace my AC'"
        ↑
TIER 3 — MEDIA + JOURNALIST PLACEMENTS
"Forbes Home, This Old House, Bob Vila, NerdWallet quote Aaron Whittaker on HVAC contractor selection"
        ↑
TIER 2 — RESOURCE PAGES + GUEST POSTS
"Local DFW publications + home-services blogs link rizehvac.com as a recommended resource"
        ↑
TIER 1 — DIRECTORY LISTINGS + FOUNDATION CITATIONS
"BBB profile, Yelp business listing, Bing Places, Houzz Pro directory all confirm rizehvac.com exists"
```

**Rule:** You cannot skip tiers. AI engines don't cite domains without foundational citations. Media won't quote experts without a verifiable web presence.

**Monthly effort allocation:**
- 50% on Tier 1-2 (foundation + resource pages)
- 30% on Tier 3 (journalist placements via HARO/Featured/Qwoted)
- 20% on Tier 4 monitoring + linkable-asset publishing

---

## Linkable assets (the bait)

These are pages designed to earn links because they're genuinely useful + cite-able. Each one is a one-shot effort that pays back for years.

| Asset | Status | Why it earns links |
|---|---|---|
| **`/what-is-rizescore`** — methodology pillar | LIVE | First-of-its-kind transparent contractor scoring methodology; cite-able by journalists explaining "how we rank" |
| **`/blog/5000-rule-hvac...`** — $5K rule canonical | NOINDEX'd pending Aaron | No canonical source exists for this query; first-mover wins citation slot |
| **DFW HVAC Cost Index 2026** (TODO Wave 2) | Not built | Original survey data; #1 link bait in this vertical |
| **Texas heat pump rebate by ZIP** (TODO Wave 2) | Not built | Programmatic SEO + practical-tool draw |
| **HVAC contractor licensing 50-state comparison** (TODO Wave 2) | Not built | Easy linkbait — every state has 1+ HVAC blog/business that wants to cite their state's rules |
| **Best HVAC brands of 2026** (TODO Wave 2) | Not built | Comparison content that brands love to be in |
| **Free Manual J load calculator** (TODO Wave 3) | Not built | Tool pages earn 5-10x more links than content pages |

---

## Tier 1 — Foundation citations (Weeks 1-4)

**Goal:** Get rizehvac listed on every directory + business listing site that confirms we exist. This is the "you can't skip levels" foundation. AI engines triangulate based on these.

### Required (Week 1)

| Listing | Approach | Time | Notes |
|---|---|---|---|
| Google Business Profile | Create as "Service area business" with DFW radius | 30 min | Anchor for local SEO. Verify via postcard. |
| Bing Places for Business | Create + verify | 15 min | ChatGPT Search uses Bing index — direct AEO signal |
| Apple Business Connect | Submit | 15 min | Apple Maps + Siri citations |
| Yelp for Business | Create profile | 20 min | Cross-reference signal even though we don't want Yelp ranking us |
| BBB.org accreditation application | Submit ($500/yr-ish) | Async | High-trust seal; AI engines cite BBB-accredited businesses preferentially |
| Better.com / HomeAdvisor / Houzz Pro / Angi (as a directory, not contractor) | Apply for directory listing | Each ~30 min | Directory cross-listing |
| Crunchbase profile | Submit | 15 min | Person + Org schema cross-validation |
| LinkedIn Company Page | Create | 15 min | Aaron's `sameAs` target |
| X (Twitter) handle | Reserve `@rizehvac` | 5 min | Same |
| Facebook Page | Create | 15 min | Same |
| Instagram | Reserve handle | 5 min | Same |
| Reddit r/Dallas + r/Tarrant + r/PlanoTX participation | Genuine community engagement, not spam | Ongoing | Reddit is heavily cited by Claude + Perplexity for local queries |

### Foundation depth (Weeks 2-4)

- HVAC-specific directories: ACCA member directory, BBB HVAC contractor section, NATE-certified business listings
- Local Dallas business directories: Dallas Chamber of Commerce, D Magazine "Best of" submissions, Dallas Morning News business listings
- Aggregator listings: Better Homes & Gardens local, HomeAdvisor, Thumbtack (as directory cross-listing)

---

## Tier 2 — Resource pages + guest posts (Weeks 4-12)

**Goal:** Earn 5-10 do-follow links from DR 50+ home-services or local DFW publications.

### Resource page outreach (template adapted from `reference_digital_pr_templates.md`)

**Targets** (research per outreach round):
- DFW-area home blogs + lifestyle publications that publish "Best DFW Resources" / "Home Maintenance Tips" pages
- HVAC-adjacent blogs (real estate, home insurance, energy efficiency, smart home) that have resource sections
- Texas .gov + .edu pages (Texas A&M Energy Systems Lab, UT-Arlington's energy programs) that maintain home-energy resource lists

**Template H from Thrive (LLM citation angle):**
> Subject: rizehvac keeps showing up in ChatGPT for "best HVAC Dallas" — figured I'd flag
>
> Hey [name],
>
> I noticed your resource page at [URL] mentions [existing resource]. I run rizehvac.com, an independent Dallas HVAC contractor directory. We've been getting cited by ChatGPT + Perplexity for queries your readers are likely asking ("best HVAC contractors in Dallas," "should I repair or replace my AC," "Texas heat pump rebates").
>
> Would you consider adding rizehvac to your resource page? Two reasons it'd help your readers:
> 1. We're independent (no paid placements — methodology at /what-is-rizescore)
> 2. We just published the only canonical source on the "$5,000 rule for HVAC" — currently fragmented across HVAC contractor websites
>
> If you're updating at any point, here's the link: rizehvac.com
>
> Either way — appreciate the resources you publish.
>
> Aaron Whittaker
> Founder, rizehvac

### Guest post pitches

**Targets** (DR 60+ home-services publications):
- Bob Vila (DR 88) — pitch a deep-dive on "How HVAC contractor rankings actually work"
- Family Handyman (DR 84) — pitch "What the $5,000 rule misses (and what to use instead)"
- This Old House (DR 82) — pitch "DFW HVAC Cost Index" (when we publish it Wave 2)
- HouseLogic (NAR, DR 75) — pitch a homeowner-focused buyer's guide
- HomeAdvisor TrueCost / Angi resource section — pitch original DFW data

---

## Tier 3 — Journalist placements via HARO / Featured / Qwoted (Weeks 6-24)

**Reuse Aaron's existing infrastructure:**
- Tania's pitch cron (`reference_pitch_cron.md`) handles ProCloser pitches but uses the same Claude API + Gmail draft pattern
- RevFactor pitch cron (`project_revfactor_pitch_cron.md`) is the same pattern for Fede

**Adaptation:** Set up a third cron for Aaron-as-rizehvac-editor that:
- Pulls daily HARO + Featured + Qwoted + SOS digests
- Filters for HVAC / home services / Texas / Dallas / heat pumps / energy efficiency / homeowner queries
- Drafts Aaron's voice (use his real bio + experience as DFW homeowner-editor)
- Outputs to `editorial@rizehvac.com` for Aaron to review + send

**Top journalist beats to monitor:**
- Texas energy + utility coverage (Dallas Morning News, Houston Chronicle, Texas Tribune)
- National home services (Wirecutter, NerdWallet, Forbes Home, This Old House)
- AI search trend coverage (Search Engine Journal, Search Engine Land — pitch Aaron as case study of "small directory ranking in AI engines")

**Pitch types that win** (per `reference_winning_pitch_formula.md`):
- Specific data ("In 142 DFW HVAC contractor profiles we audited, 23% had lapsed TDLR licenses")
- Named framework ("the RizeScore™ methodology")
- Local angle (DFW-specific data even when pitching national publications)
- Counter-narrative ("Yelp doesn't actually rank by quality — here's the data")

---

## Tier 4 — AI citation monitoring + earning (Weeks 8+)

**Tooling stack** (Aaron creates Peec project; I add brand + prompts):
- Peec.ai — daily monitoring of 30 prompts: "best HVAC Dallas," "AC repair Dallas," "should I repair or replace my AC," "Trane vs Carrier," "Texas heat pump rebate," "what is NATE certified," etc.
- Profound or Otterly.ai (alternatives if Peec's HVAC project gets bottlenecked)
- Manual ChatGPT + Claude + Perplexity + Gemini verification weekly

**What we track:**
- Citation rate (% of prompts where rizehvac.com appears in the answer)
- Position in citation list (first cited vs cited 4th)
- Co-citation (which sources are cited alongside us — those are Tier 2/3 link targets)
- Sentiment (is rizehvac.com cited as authoritative or as one of many)

**Tactics that earn AI citations specifically** (per AEO research at `.research/ai-visibility-cluster-2026-05-09.md`):
1. Atomic claims with primary-source citations (we have this — every blog post does it)
2. TL;DR boxes (lifted verbatim by AI engines — we have this)
3. Author Person schema with sameAs to LinkedIn + NATE registry + EPA 608 (need Aaron's real LinkedIn)
4. dateModified + lastReviewed in schema + visible (we have this)
5. Allow ALL AI crawlers including the rare ones (we have 16 explicit rules)
6. Cross-citation from Reddit + Wikipedia + Stack Overflow — these are AI-engine triangulation sources. Genuine Reddit participation in r/Dallas, r/HVACadvice when relevant queries come up.

---

## 90-day execution plan

| Week | Tier | Action | Owner |
|---|---|---|---|
| 1 | Tier 1 | All foundation listings (BBB, Bing Places, Yelp, GBP, etc.) | Aaron |
| 1 | Tier 1 | Reserve all social handles (X, LinkedIn, FB, IG, Reddit) | Aaron |
| 2 | Tier 2 | Lift Dallas + $5K post noindex flags (after bio + verification) | Aaron + me |
| 2-3 | Tier 1 | DFW Chamber + local biz directory submissions | Aaron |
| 3-4 | Tier 4 | Peec.ai project setup + 30 prompts | Aaron creates project, I configure |
| 4 | Tier 2 | First 10 resource-page outreach emails (Template H) | Me drafts, Aaron sends |
| 4-6 | Tier 4 | Build out Wave 2 cluster posts (DFW Cost Index, heat pump rebates by ZIP, brand comparison) | Me |
| 5-6 | Tier 3 | Set up Aaron's pitch cron (HARO + Featured + Qwoted) | Me |
| 6-8 | Tier 2 | Round 2 of outreach: Texas .gov + .edu resource pages | Me drafts, Aaron sends |
| 8 | Tier 4 | First Peec.ai citation report + iterate | Me |
| 8-12 | Tier 3 | First HARO placement (target 1 within 8 weeks) | Aaron, daily |
| 12 | All | First quarterly review: where are we on citation count + referring domains? | Aaron + me |

---

## Specific link targets (research backed)

These are real Dallas-area + national HVAC-adjacent resource pages I've identified as outreach candidates. Aaron's local network may add more.

**Local DFW (Tier 2):**
- D Magazine — Best of Dallas annual lists
- Dallas Morning News home + real estate sections
- KERA + WFAA local news (energy efficiency segments during summer)
- D-FW Chamber of Commerce
- Tarrant County Public Health (energy assistance + HVAC info)
- North Central Texas Council of Governments (sustainability programs)

**Texas + national (Tier 2-3):**
- Texas A&M Energy Systems Lab
- UT-Austin Energy Institute
- Oncor Take A Load Off Texas program partner directory
- ENERGY STAR partner directory
- ACCA member directory

**National home-services (Tier 3 — guest post / quote sourcing):**
- Bob Vila, This Old House, Family Handyman
- Forbes Home, NerdWallet, Money.com (the same ones currently ranking — pitch original-data angle)
- Wirecutter (NYT) — pitch via NYT Newsroom contact

---

## Disavow + low-quality link policy

Per `feedback_low_quality_backlinks.md`: don't disavow auto-filtered spam. Google's SpamBrain neutralizes bookmark farms and Wix parasites automatically. Surface any audits but skip disavow unless we get a manual action.

Aaron's existing pitch infrastructure (Tania's HARO drafting cron) is the highest-leverage reuse. Plug rizehvac in as a third profile alongside ProCloser + RevFactor.
