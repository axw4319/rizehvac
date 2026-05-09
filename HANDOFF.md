# rizehvac handoff — 2026-05-09

This doc captures everything pending Aaron's input. When you return, work through the **Tier 1** list to lift the noindex flags and ship Dallas live.

## Site state

- **Live URL:** https://rizehvac.onrender.com (DNS to rizehvac.com pending)
- **Render service:** `srv-d7va5n1j2pic73e9t02g`
- **Repo:** github.com/axw4319/rizehvac (auto-deploys main)
- **Indexable status:** Most pages live + indexable. Dallas city pages + the $5,000 rule blog post are noindex'd pending verification.

## What's live + indexable

| Page | URL | Notes |
|---|---|---|
| Home | / | DFW-first city grid, 7-step buyer's guide w/ FAQPage schema |
| About | /about | Article + Breadcrumb schema |
| Methodology | /methodology | Article + Breadcrumb schema |
| **What is RizeScore™** | /what-is-rizescore | New citation-bait pillar; 6-pillar methodology + FAQPage + Speakable schema |
| Blog index | /blog | Renders, but no published posts yet (1 post noindex'd pending bio) |
| Privacy | /privacy | Real plain-English policy |
| Terms | /terms | Real plain-English ToS |
| Contact | /contact | Email + phone + mailing address |
| Aaron's bio page | /authors/aaron-whittaker | Person schema + sameAs (placeholder URLs) |
| Lena's bio page | /authors/lena-park | Person schema |
| Sitemap | /sitemap.xml | 11 indexable URLs |
| Robots.txt | /robots.txt | 16 explicit AI crawler Allow rules |
| LLMs.txt | /llms.txt | Anthropic-published manifest format |
| OG image | /og.jpg | 1200×630 (Imagen 4) |
| Logo | /logo.svg + /logo.png | RIZE wordmark + mountain mark |

## What's noindex'd (pending Aaron's input)

| Page | URL | Why noindex |
|---|---|---|
| Dallas city directory | /hvac/dallas | Pending: Aaron's real bio, contractor verification, real reviews, NATE-tech fact-checker |
| Dallas AC repair | /ac-repair/dallas | Same |
| Dallas cost guide | /hvac-cost/dallas | Same |
| **$5,000 rule blog post** | /blog/5000-rule-hvac-repair-vs-replace | Pending: Aaron's real headshot + LinkedIn for the byline |

When you flip the noindex flag (instructions below), Bing will re-crawl + Google will pick it up via sitemap. **Don't IndexNow-ping until DNS lands** (canonical URL coordination — see `feedback_indexnow_dns_coordination` memory).

## Tier 1 — what you need to do (estimated 30-45 min)

### 1. DNS flip
- Point `rizehvac.com` → `rizehvac.onrender.com` at Brandpa/Namecheap
- Tell me when the A/CNAME is set; I configure Render redirects + flip `NEXT_PUBLIC_SITE_URL` env var to `https://rizehvac.com` + IndexNow-ping the canonical URLs

### 2. Your real author bio
Edit `src/data/authors.ts` → `"aaron-whittaker"` entry. Replace these fields with real values:
- `shortBio` — 1 sentence (currently "Dallas-Fort Worth resident. Bio + LinkedIn details pending.")
- `longBio` — 2-3 paragraphs (currently placeholder text)
- `credentials` — your real credentials list
- `sameAs` — your real LinkedIn URL (currently placeholder `linkedin.com/in/aaronwhittaker`)
- `email` — confirm `aaron@rizehvac.com` or change

Drop a real headshot at `public/photos/aaron-whittaker.jpg` (or .webp; I'll wire it into the avatar slot when you do).

### 3. Verify the 10 Dallas contractors
Edit `src/data/dallas-contractors.ts`. Each entry has a real BBB-listed DFW HVAC company name. **Swap any you have local concerns about.** The order is your editorial rank; reorder freely.

The `rating`, `reviewCount`, `phone`, `address` are populated with plausible public-record values. Cross-check against actual Google Business Profile + BBB data, or replace with verified real numbers.

### 4. Replace 5 placeholder reviews with real verified reviews
Edit `src/data/dallas-reviews.ts` → `DALLAS_VERIFIED_REVIEWS`. Currently 5 entries with `quote: "Sample review pending..."`. Pull real verified reviews from each contractor's HomeAdvisor / GBP / BBB profile (1-3 sentences each is fine).

### 5. NATE-tech fact-checker
You said you'd source one from your DFW network. Add them to `src/data/authors.ts` as a new entry, then update `DALLAS_EDITORIAL_CREDITS.factChecker` in `dallas-reviews.ts` to point at them. They become the bylined fact-checker on every Dallas page + the methodology page.

### 6. Lift Dallas noindex
In `src/data/cityIndexability.ts`, change:
```ts
export const NOINDEX_CITIES = new Set<string>([
  "dallas", // remove this line
]);
```
Then commit + push. Render auto-deploys. Sitemap auto-includes Dallas. I'll IndexNow-ping when you're ready (after DNS).

### 7. Lift $5,000 rule blog post noindex
In `src/data/posts/5000-rule-hvac.ts`, change `noindex: true` → `noindex: false` (or remove the line). Then commit + push.

### 8. GSC + Bing Webmaster verification
- Google Search Console: drop me the HTML token or DNS TXT, I install + verify
- Bing Webmaster Tools: same flow with BingSiteAuth.xml

### 9. Peec.ai project
Create `rizehvac` in app.peec.ai (Peec MCP doesn't expose project creation). When done, give me the project ID; I'll add the brand + 30 prompts via API automatically.

## Tier 2 — Wave 2 content cluster (when ready to scale)

The AEO research report at `.research/ai-visibility-cluster-2026-05-09.md` has H2-by-H2 buildouts for these 9 additional cluster posts. Each takes ~2-3 hours to write at the depth of the $5K rule post. Suggested order:

| # | Post | Why this order |
|---|---|---|
| 1 | $5K rule (DONE — pending bio) | Canonical-source land grab for an unowned query |
| 2 | Texas heat pump rebates by ZIP | Programmatic SEO; #2 leverage gap from research |
| 3 | Best HVAC brands of 2026 (Trane vs Carrier vs Lennox vs Goodman) | High-volume comparison query |
| 4 | How to choose an HVAC contractor (12-question script) | Pillar; complements home-page 7-step |
| 5 | Manual J load calculation explained | Technical authority signal |
| 6 | Should I repair or replace my AC | Decision matrix; cross-links $5K rule |
| 7 | What does NATE certified mean | Credential explainer |
| 8 | R-454B refrigerant explained | Timely (refrigerant transition is happening now) |
| 9 | How much does HVAC cost in Dallas | Cost guide (already partially exists at /hvac-cost/dallas) |

## Tier 3 — DFW expansion (Wave 2-4)

Once Dallas ranks (week 4-8 after publish + verifying real EEAT signals):

- Wave 2: Fort Worth (KD 13) + Arlington (KD 19) — easier KD, share DFW authority
- Wave 3: Plano (KD 26) + Frisco (KD 18) — north DFW
- Wave 4: Houston, Austin, San Antonio — Texas-only positioning
- Wave 5: National (Phoenix, Atlanta)

## RizeScore™ — what's wired and what's pending

**Wired (V1 — May 2026):**
- 6-pillar composite scoring engine at `src/lib/rizescore.ts`
- Score badges on every contractor card + comparison table
- Methodology page at `/what-is-rizescore` with full schema
- Pillars compute from existing contractor data fields

**Pending (V2):**
- Real BBB scrape integration (currently uses self-reported certifications)
- Real Yelp Fusion API pull
- Real Google Places rating sync (currently uses static `rating`/`reviewCount`)
- Real Peec.ai prompt-coverage score (currently scores by proxy)
- Real Ahrefs DR pull (currently scores by proxy: years × reviews)
- PageSpeed Insights API on each contractor's domain

Once any of these wire in, the V1 score automatically becomes more accurate; no methodology rewrite needed.

## Memory references

- [`project_rizehvac.md`](file:///Users/aaronwhittaker/.claude/projects/-Users-aaronwhittaker-Claude/memory/project_rizehvac.md) — current state
- [`feedback_indexnow_dns_coordination.md`](file:///Users/aaronwhittaker/.claude/projects/-Users-aaronwhittaker-Claude/memory/feedback_indexnow_dns_coordination.md) — IndexNow + canonical URL discipline
- [`feedback_helpful_content_waves_rollout.md`](file:///Users/aaronwhittaker/.claude/projects/-Users-aaronwhittaker-Claude/memory/feedback_helpful_content_waves_rollout.md) — waves rollout rule
- AEO research report: `.research/ai-visibility-cluster-2026-05-09.md`
- SERP snapshot: `.research/serp-snapshot-2026-05-09.txt`
