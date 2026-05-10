# rizehvac.onrender.com — Competitor UX + Functional QA Audit

**Date:** 2026-05-10
**Audited by:** Functional QA pass (Playwright × chromium/webkit/firefox × mobile/tablet/desktop) + axe-core accessibility scan + per-page content depth + competitor feature capture
**Target site:** https://rizehvac.onrender.com (currently launching with Dallas as the only registered city)
**Screenshots:** `~/Claude/rizehvac/screenshots/qa-functional/` (135 files) and `~/Claude/rizehvac/screenshots/competitor-functionality/` (25 files)
**Findings JSON:** `~/Claude/rizehvac/screenshots/qa-functional/_findings.json`

---

## Executive summary

The site has solid editorial bones (good schema, citation-rich blog post, published methodology), but the **functional layer is broken in ways that block conversion and damage trust**:

- **The hero match form does not submit anywhere.** `<button type="button">` with no JS handler, no formAction, no API endpoint. Users can fill ZIP/issue/email and click — nothing happens. Across all browsers, all viewports.
- **Footer links to a city that doesn't exist.** `/hvac/tucson`, `/ac-repair/tucson`, `/hvac-cost/tucson`, "Cost guides" all 404. Tucson was the placeholder, Dallas is the launched city.
- **Phone number identity crisis.** Home/contact/about display `(520) 207-2500` (Tucson, AZ area code). Blog/Dallas pages display `(214) 414-2500` (Dallas). For a Dallas-only directory, the (520) number on the public-facing pages is wrong.
- **`/blog` index says "No posts published yet"** but the blog post exists at `/blog/5000-rule-hvac-repair-vs-replace`. The post is `noindex`'d via `noindex: true` in `/src/data/posts/5000-rule-hvac.ts`, so `getPublishedPosts()` filters it out — but the URL works and the header nav links to `/blog`. Visitors arrive to "no posts" then bounce.
- **Header nav routes are placeholders.** "Services", "Cities", "Blog" all link to `/`. "About" links to `#methodology`, an anchor that only exists on Dallas pages — anchors die on the home page.
- **No 404 page UX.** Server returns 404 with body length 33 characters and no nav, no "search instead", no link home. Users hitting `/hvac/fakecity` see effectively a blank page.
- **Critical accessibility violations** (axe-core): `select` with no accessible name (issue dropdown), 18 color-contrast violations on home, 30 on Dallas page, missing main landmark on blog post + methodology page.
- **Image network failures**: `/_next/image?url=…dallas-hero…` returns ERR_ABORTED across mobile/tablet/desktop chromium runs — the hero image fails to load via Next/Image at certain widths.

The directory is plausibly indexable but the user-facing flows fail at first click.

---

## 1. Competitor feature matrix

Based on screenshot capture (Angi + Thumbtack rendered fully; Yelp/BBB/Houzz/HomeAdvisor returned bot-block / 404 / error pages — features for those are inferred from public-doc industry knowledge, not headless capture). Bot-blocked rows are flagged "(literature)" so you know which to verify in a real browser.

Legend: ✅ has, ⚠️ partial/limited, ❌ missing, — not applicable.

| Feature                              | Yelp (lit.) | Angi  | BBB (lit.) | Houzz (lit.) | Thumbtack | HomeAdvisor (lit.) | **rizehvac** |
|--------------------------------------|:-----------:|:-----:|:----------:|:------------:|:---------:|:------------------:|:------------:|
| Lead-capture ZIP form                | ⚠️          | ✅    | ❌          | ❌            | ✅        | ✅                 | ⚠️ (broken)  |
| Phone CTA / tap-to-call              | ✅          | ⚠️    | ⚠️         | ⚠️           | ⚠️        | ⚠️                 | ✅           |
| Quote request per-pro                | ⚠️          | ✅    | ❌          | ⚠️            | ✅        | ✅                 | ⚠️ (per-row, but goes to broken hero form) |
| Message-the-pro (in-app)             | ✅          | ✅    | ❌          | ✅            | ✅        | ✅                 | ❌           |
| Review submission form               | ✅          | ✅    | ✅         | ✅            | ✅        | ✅                 | ❌           |
| Photo upload (homeowner)             | ✅          | ✅    | ❌          | ✅            | ⚠️        | ❌                 | ❌           |
| Q&A (homeowner asks pro)             | ✅          | ⚠️    | ❌          | ✅            | ⚠️        | ❌                 | ❌           |
| Profile-claim flow ("Is this you?")  | ✅          | ✅    | ✅         | ✅            | ✅        | ✅                 | ❌           |
| Trust badges (Verified/Top Pro/Acc.) | ✅          | ✅    | ✅         | ✅            | ✅        | ✅                 | ⚠️ (5-badge row but no per-pro badges) |
| Filter (services / price / rating)   | ✅          | ✅    | ✅         | ✅            | ✅        | ⚠️                 | ❌           |
| Sort (rating / distance / price)     | ✅          | ✅    | ✅         | ✅            | ✅        | ❌                 | ❌ (table claimed sortable, headers aren't actually sortable — 0 sort buttons) |
| Compare 2-3 pros side-by-side        | ❌          | ❌    | ❌         | ❌            | ❌        | ❌                 | ⚠️ (single static comparison table, not user-driven) |
| Save / favorites / shortlist        | ✅          | ✅    | ❌         | ✅            | ✅        | ❌                 | ❌           |
| Photo gallery per pro                | ✅          | ✅    | ❌         | ✅            | ✅        | ⚠️                 | ❌           |
| Service-area map / ZIPs covered      | ⚠️          | ⚠️    | ❌         | ⚠️            | ⚠️        | ✅                 | ❌ (claimed "map" component but no actual map renders — 0 imgs/iframes detected on Dallas page) |
| Hours of operation                   | ✅          | ✅    | ✅         | ⚠️            | ⚠️        | ❌                 | ⚠️ (mentioned in JSON-LD only, not visible UI) |
| Languages spoken                     | ✅          | ❌    | ❌         | ❌            | ❌        | ❌                 | ❌           |
| Payment methods                      | ✅          | ❌    | ⚠️         | ✅            | ⚠️        | ❌                 | ❌           |
| Certifications list per pro          | ⚠️          | ⚠️    | ❌         | ✅            | ⚠️        | ❌                 | ⚠️ (top trust pills only) |
| Years in business / founded          | ✅          | ✅    | ✅         | ✅            | ✅        | ✅                 | ⚠️ (in card but inconsistent) |
| BBB rating shown                     | ❌          | ⚠️    | ✅         | ❌            | ❌        | ❌                 | ⚠️ (listed in trust criteria but not rendered per-card) |
| Verified review badge                | ✅          | ✅    | ❌         | ✅            | ✅        | ⚠️                 | ✅ (carousel) |
| Q&A / FAQ on city page               | ❌          | ⚠️    | ❌         | ❌            | ✅        | ❌                 | ✅           |
| Cost guide / price calculator        | ❌          | ⚠️    | ❌         | ⚠️            | ✅        | ✅                 | ✅           |
| Rebate / financing info              | ❌          | ✅    | ❌         | ⚠️            | ⚠️        | ✅                 | ❌           |

**Directory features rizehvac is most clearly missing (rank-ordered):**
1. **Working lead form** — every competitor has one, rizehvac has the UI but no backend
2. **Filter / sort on the city page** — no filters, no sort, despite a "comparison table" affordance
3. **Profile-claim flow** — "Is this your business?" is the standard contractor on-ramp; rizehvac has zero contractor self-service
4. **Save / shortlist multiple pros** — homeowners typically pick 2-3 to call, no way to bookmark
5. **Per-pro photo gallery** — every other directory has work-portfolio photos
6. **Service-area map** — Angi/Thumbtack/HomeAdvisor all show coverage; rizehvac promises a map but doesn't render one
7. **Review submission form** — homeowners can't add a review; this is core UGC for trust
8. **Languages + payment methods** — table-stakes business meta on every other directory
9. **Per-pro response time / response rate** — Thumbtack-style trust signal
10. **Compare two pros side-by-side** — none of the competitors do it, but this is rizehvac's white-space play (matches the editorial brand)

---

## 2. rizehvac functional QA results

All flows tested across chromium, webkit, firefox at mobile (390×844) / tablet (768×1024) / desktop (1440×900). Page status table in `_findings.json` (135 page loads, all 200 except the 9 expected 404s = 100% routing pass).

### Pass / fail by flow

| # | Flow | Result | Notes |
|---|------|--------|-------|
| 1 | Match form (hero ZIP card) submits | **FAIL** | `<button type="button">` with no `onclick`/no `formAction`/no JS handler. Form has `action="none" method="none"`. After fill+click URL stays `/`. No success state. No backend route. |
| 1a | ZIP input validation | **FAIL** | Plain `<input type="text" inputMode="numeric" maxLength=5>` — no required, no pattern, no JS validation |
| 1b | Email validation | **FAIL** | Plain `<input type="email">` — browser-native validation only triggers on form submit, but the form never submits, so nothing fires |
| 1c | Issue select | **CRITICAL** | `<select>` has no `<label>`, no `aria-label`, no `aria-labelledby` — fails axe `select-name` (critical impact) |
| 2 | Tel: links trigger dialer | **PASS** | 3 tel links on home, 15 on Dallas; `tel:5202072500`, `tel:2144142500`, `tel:8174052444`, etc. — all valid tel URIs |
| 2a | Phone number consistency | **FAIL** | Home/contact/about show `(520) 207-2500` (Tucson AZ area code). Blog/Dallas show `(214) 414-2500`. About shows (520). For a Dallas-only directory, this is incoherent. |
| 3 | Mailto: links open mail client | **PASS** | 5 mailtos on contact (editorial@, privacy@, legal@, plus phone). All valid mailto URIs |
| 4 | Contractor cards interactive | **PARTIAL** | Phone link works; "Get free quote" buttons exist (20 found in comparison table) but the Get-quote target/handler is unclear from DOM — most likely scrolls to broken hero form |
| 5 | Comparison table | **PARTIAL FAIL** | 11 rows render. **0 sortable headers** despite the design implying sortability. 1 empty `<th>` (axe violation). 20 "Get free quote" buttons but they go to the broken match form. |
| 6 | Map on Dallas page | **FAIL** | Code references `StaticMap` component but **0 `<img>` and 0 `<iframe>` map elements** detected by Playwright probe. The map either failed to render or was never wired up. |
| 7 | Methodology page anchor links | **PARTIAL FAIL** | Page has only 2 anchors (`#methodology`, `#hero`), but `#hero` only exists on Dallas pages — header "About" link navigates to a broken anchor on most pages. **0 details/accordion elements** — the FAQ accordion claimed in the spec doesn't exist. |
| 8 | Blog post navigation | **PASS** | 12 external citations, all `target="_blank" rel="noopener noreferrer"` (correct security). FAQ uses `<details>` accordion, opens correctly. TL;DR + headings render cleanly. **However:** post is `<meta name="robots" content="noindex, follow">` — it's published on /blog/5000-rule-hvac-repair-vs-replace but excluded from /blog index. Source code has `noindex: true` flagged for "remove before launch." |
| 9 | Author bio outbound links | **PASS** | Aaron's LinkedIn link is `target="_blank" rel="noopener noreferrer me"` — correct. But page admits "Bio + LinkedIn details pending" — published with placeholder text. |
| 10 | Footer links | **FAIL** | `/hvac/tucson`, `/ac-repair/tucson`, `/hvac-cost/tucson`, "Cost guides" all return **404**. Footer says "Tucson, AZ · 9 more cities — soon" but Tucson isn't a launched city — Dallas is. This is hardcoded in `src/components/shared/SiteFooter.tsx`. |
| 11 | Header navigation | **FAIL** | Services → `/` (home), Cities → `/`, Blog → `/`. About → `#methodology` (anchor doesn't exist on most pages). All 4 main nav items are placeholder hrefs. |
| 12 | 404 behavior | **FAIL** | Server correctly returns 404 status, but the response **body is 33 characters** with no nav, no logo, no "go home" link, no search prompt. User hitting a typo ends in a dead end. |
| 13 | Skip link / keyboard nav | **FAIL** | First Tab focuses the RIZE logo (links to `/`). No "Skip to main content" link. Tab order: RIZE → Services → About → … all placeholder hrefs |
| 14 | Color contrast (WCAG AA) | **FAIL** | 18 violations on home, 30 on Dallas, 2 on methodology. Mostly the very-small uppercase tracking-widest labels on dark/muted backgrounds and the `.opacity-60` "Coming soon" city tiles. |
| 15 | Image alt text | **PASS** | Home: 2 imgs, both have meaningful alt ("A NATE-certified HVAC technician inspecting a Trane condenser at a home" / "Dallas, TX"). Dallas page: 1 img, alt present. |
| 16 | Image loading reliability | **FAIL** | Network failures: `dallas-hero-1200.webp` and `dallas-hero-2400.webp` returned `ERR_ABORTED` from `/_next/image` at multiple viewport widths in chromium. webkit/firefox didn't reproduce — likely Next/Image width-mismatch issue or cache race. |

### Reproduction steps for the showstopper bugs

**Bug 1 — Match form does nothing.**
1. Open `https://rizehvac.onrender.com/`
2. In the "Get matched in 60 seconds" card, type `75201` in ZIP
3. Pick "AC not cooling" from the issue dropdown
4. Type `you@example.com` in email
5. Click "Match me with 3 contractors"
6. **Expected:** Some form of submit — POST to a backend, route to /thanks page, or show inline success
7. **Actual:** Nothing happens. URL stays at `/`. No console message. No spinner. No toast.

**Bug 2 — Footer 404s on every page.**
1. Open any page on the site
2. Scroll to footer
3. Click "Tucson, AZ" → 404
4. Click "Tucson AC Repair" → 404
5. Click "Tucson HVAC Cost" → 404
6. Click "Cost guides" → 404 (also points to `/hvac-cost/tucson`)

**Bug 3 — Header nav nowhere.**
1. Open `/`
2. Click "Services" → reloads `/`
3. Click "Cities" → reloads `/`
4. Click "Blog" → reloads `/` (note: `/blog` exists but isn't linked from header)
5. Click "About" → tries to scroll to `#methodology` which doesn't exist on home → no movement

**Bug 4 — Blog index dead-ends users.**
1. Click any link to `/blog` (no header link does this; user has to type URL or come from sitemap)
2. Page loads with copy: "No posts published yet — check back soon."
3. Direct URL `/blog/5000-rule-hvac-repair-vs-replace` returns the post fine — visitors who arrived on /blog will never find the article.

**Bug 5 — 404 dead-end.**
1. Visit `https://rizehvac.onrender.com/hvac/anywhere-else`
2. Page returns HTTP 404 with **33-char body**, no UX
3. User has no way back to home except browser back button

---

## 3. rizehvac UX issues found

Beyond functional bugs:

- **Hero city grid** (homepage): only Dallas tile shows a photo. The other 9 ("Fort Worth", "Arlington", "Plano", "Frisco", "Houston", "Austin", "San Antonio", "Phoenix", "Atlanta") are flat blue with state code. Phoenix + Tucson hero photos exist in `/public/photos/` (1200/1920/2400 webp variants) but aren't wired in because they're not in the city registry. Either show those photos with "Coming soon" overlay, or remove cities with no photo + no coming-soon date.
- **City grid claim contradicts reality.** Home says "10 cities. 600+ contractors researched" but only Dallas has data. The "Coming soon" overlay reduces the claim, but the H2 reads as if 10 are live. This is a credibility risk if a journalist verifies.
- **Hero trust strip** says "10 cities live" but only 1 is. Same credibility risk.
- **Home claim "NATE-tech verified" — Carlos Mendoza** but the methodology page admits "Fact-checker NATE-Certified Tech — pending". Direct contradiction.
- **Home claim "Cited 14 sources — ROC + BBB + EPA"** — homepage has **0 external citations** in the rendered HTML. Methodology page has 13 external citation links. Move at least 5 of those to the home page or remove the "14 sources" claim from above the fold.
- **Hero says "We compare every NATE-certified HVAC contractor in your city against 8 weighted criteria"** but methodology page lists only 5 weighted criteria (NATE 30%, BBB 25%, warranty 12%, transparent pricing 15%, low complaint 10% = 92%, plus 24/7 emergency 10%, TDLR license 10%, 5+ years 8% = 130%). Numbers don't add to 100. Total criteria visible = 8 but weights don't sum.
- **Mobile hero**: chip strip ("NATE certified", "BBB A+ rating", etc.) wraps to 4 lines on iPhone 14 width, dominates the fold. Cap to 3-4 chips on mobile or hide and show ZIP card first.
- **Mobile city grid**: state code text overlay (e.g., "TX") overlaps the city name in some tiles at <400px width.
- **Contact page has no form.** Just mailto + tel links. For a directory, this is a functionality regression — homeowners expect at least a "tell us about your project" form. Contractors expect a "claim my business" form.
- **Author cards admit "Bio + LinkedIn details pending"** on a published page. Pull until populated, or remove the line.
- **Comparison table label inconsistency**: header reads "compensation disclosure" + "comparison table" but the comparison table has 11 rows of Dallas contractors; the comparison is between contractors (not between rizehvac vs other directories) — fine, but comparison/methodology branding overlap.
- **Mobile `<select>` for issue type has no visible label** — placeholder text "What's the issue?" disappears on focus, and there's no permanent label, so screen readers + low-vision users see an unlabeled control.
- **Sticky header on mobile** is heavy (logo + chip + (214) phone + "Let's Connect" button + hamburger) — eats ~70px of viewport, leaving little fold space.

---

## 4. Accessibility (axe-core) findings

Run on `/`, `/hvac/dallas`, `/blog/5000-rule-hvac-repair-vs-replace`, `/methodology`. Full violations in `_findings.json`.

| Page | Violation | Impact | Nodes | First target |
|------|-----------|--------|-------|--------------|
| `/` | color-contrast | serious | 18 | `.opacity-60.rounded-lg[href="#"]` (Coming soon city tiles) |
| `/` | heading-order | moderate | 1 | `.mb-1` (likely h2 inside h1 sibling order) |
| `/` | region | moderate | 33 | `.z-0` (hero image div outside any landmark) |
| `/` | **select-name** | **critical** | 1 | `select` (issue dropdown — no label, no aria-label) |
| `/hvac/dallas` | color-contrast | serious | 30 | `.tracking-widest.mb-1\.5.text-[11px]` |
| `/hvac/dallas` | empty-table-header | minor | 1 | `th:nth-child(9)` |
| `/hvac/dallas` | heading-order | moderate | 1 | `.mb-1` |
| `/hvac/dallas` | link-name | serious | 3 | `a[href="tel:8174052444"]` (tel link with no discernible text) |
| `/hvac/dallas` | region | moderate | 252 | `.z-0` |
| `/blog/5000-rule…` | landmark-one-main | moderate | 1 | `html` (no `<main>` element) |
| `/blog/5000-rule…` | region | moderate | 47 | `article > header` |
| `/methodology` | color-contrast | serious | 2 | section labels |
| `/methodology` | landmark-one-main | moderate | 1 | `html` |
| `/methodology` | region | moderate | 52 | `section:nth-child(4)` |

**Top accessibility fixes:**
1. Add `aria-label="Service issue"` (or a visually-hidden `<label>`) to the issue `<select>`
2. Wrap city pages and blog post in `<main>` instead of `<div>` — fixes `landmark-one-main` everywhere
3. Replace tel-only `<a>` with text content (`<a href="tel:..."><span class="sr-only">Call </span>(214) 414-2500</a>`)
4. Bump uppercase tracking-widest 11px label foreground colors — `var(--brand-fg-soft)` on muted bg fails 4.5:1
5. Add empty-state heading or `<th aria-label="Actions">` to the empty `<th>` on the comparison table
6. Add a "Skip to main content" link as the first focusable element

---

## 5. Thin pages identified

(Word counts after stripping `<script>`, `<style>`, and HTML tags. Boilerplate footer + header included in the count, so real article-area copy is ~80 words less.)

| Page | Words | Verdict | Recommendation |
|------|-------|---------|----------------|
| `/blog` | **103** | **Critical thin** — page literally says "No posts published yet" | Either publish ≥3 articles before launch, or 301 to home until blog has ≥3 posts |
| `/contact` | **214** | Thin | Add a real contact form (3 fields: type [editorial/contractor/press] + name + message). Most successful contact pages are 350-500 words |
| `/authors/aaron-whittaker` | **220** | Thin (and admits incomplete: "Bio + LinkedIn details pending") | Add 200+ word bio, prior bylines list, area of expertise, training/credentials, photo |
| `/authors/lena-park` | **258** | Thin | Same as above |
| `/about` | **414** | Borderline | Add a "How we make money" section, founder photo, location/team detail. Aim ~700 words |
| `/methodology` | **534** | Borderline (claims 14 sources but is short) | Expand each scoring criterion with 2-3 sentences of why it's weighted that way; add the 14 source URLs as a visible bibliography (currently linked but not consolidated) |
| `/privacy` | 439 | Borderline (legal pages can be short) | Acceptable |
| `/terms` | 436 | Borderline | Acceptable |

Adequate / strong:
- `/` 963 words
- `/blog/5000-rule-hvac-repair-vs-replace` 2,420 words (excellent depth)
- `/hvac/dallas` 2,628 words
- `/ac-repair/dallas` 1,978 words
- `/hvac-cost/dallas` 1,265 words
- `/what-is-rizescore` 1,431 words

---

## 6. EEAT gaps per page

| Page | Author byline | Published date | Last reviewed | Inline citations | Schema | EEAT verdict |
|------|---------------|----------------|---------------|------------------|--------|--------------|
| `/` | ❌ none | ❌ "Updated May 8, 2026" pill in hero only | ❌ | ❌ **0 external citations** | Org+FAQ+HowTo+ContactPoint | Hero claims "Cited 14 sources" but page renders zero — credibility hole |
| `/blog` | — (index) | ❌ | ❌ | — | Org/Breadcrumb | "No posts" message conflicts w/ schema implying a Blog |
| `/blog/5000-rule-hvac-repair-vs-replace` | ✅ "Reviewed by a Dallas-Fort Worth HVAC editor" but the byline is buried — no headshot, no inline link to author | ✅ | ✅ "Last reviewed" present | ✅ 12 external citations w/ proper rel=noopener | Article+Person+Breadcrumb+FAQ | Strong on schema + citations; **noindex'd** so it gets none of the SEO credit |
| `/hvac/dallas` | ⚠️ MultiCreditByline component (3 contributors) but unclear who reviewed what | ✅ "Apr 15-28, May 9, 2026" multiple dates | ❌ no single "last reviewed" | ❌ 0 external citations on the rendered page (schema mentions sources but body has none) | LocalBusiness+AggregateRating+ItemList+FAQ | Strong schema, weak rendered citation density |
| `/ac-repair/dallas` | Same as above | Same | Same | Same | LocalBusiness+ItemList+FAQ | Same |
| `/hvac-cost/dallas` | Same as above | Same | Same | Same | FAQ+Breadcrumb only — no LocalBusiness, no Article | Schema thinner than the 2 sister pages |
| `/methodology` | ✅ Author is rizehvac team but unclear who specifically | ❌ no date | ❌ no last reviewed | ✅ 13 external citation links | Article+Org | Solid; add a date |
| `/what-is-rizescore` | ✅ multi-author byline | ❌ no date | ❌ | ❌ **0 external citations** despite being the methodology explainer | Article+FAQ+Person | Critical EEAT gap — must cite where the score components come from |
| `/about` | ✅ Lena Park (in JSON-LD only, not visible) | ✅ in JSON-LD | ❌ no last reviewed | ❌ 0 external citations | Article+Breadcrumb | Move JSON-LD info into visible HTML |
| `/contact` | ❌ | ❌ | ❌ | ❌ | Org | Acceptable for contact |
| `/authors/aaron-whittaker` | — (is the author page) | ✅ "Joined May 2026" | — | ❌ admits "Bio pending" | Person | Page admits being incomplete |
| `/authors/lena-park` | — | ✅ | — | ❌ | Person | Same |
| `/privacy`, `/terms` | ❌ | ❌ no date | ❌ no "Last updated" | — | none | Add an "Effective date" line — both legal pages must show effective date |

**Priority EEAT fixes:**
1. Add **5+ inline external citations** to the home page's "62-142 contractors researched" claim (link to BBB, TDLR, NATE registries you cross-checked)
2. Add **5+ inline external citations** to `/what-is-rizescore` — currently zero
3. Add a visible "Last reviewed: May 9, 2026 by [Name + role]" line to every city page
4. Replace "Bio + LinkedIn details pending" on author pages with real bio (or unpublish)
5. Add "Effective: [date]" to `/privacy` and `/terms`
6. Resolve the **NATE-tech: pending** vs hero **"NATE-tech verified"** contradiction (either remove the claim or finish hiring Carlos)

---

## 7. Top 10 features rizehvac should add (impact × effort)

Ranked by `impact / effort`.

| Rank | Feature | Impact | Effort | Why now |
|------|---------|--------|--------|---------|
| 1 | **Wire up the match form to a real backend** (Render API route or formspree/Plusvibe webhook) | 10/10 | 2/10 | Currently the entire hero CTA is broken; adding even a simple POST → email-Aaron route is hours of work |
| 2 | **Fix footer to point at Dallas + remove Tucson** | 9/10 | 1/10 | 4 broken links on every page |
| 3 | **Fix header nav to real routes** (Services → /, Cities → an actual /cities page or /, Blog → /blog) | 9/10 | 1/10 | Placeholder hrefs everywhere are obvious to any visitor |
| 4 | **Choose ONE phone number** (likely (214) 414-2500 since Dallas) and use it sitewide | 8/10 | 1/10 | (520) Tucson area code on a Dallas directory is a credibility leak |
| 5 | **Add a real 404 page** with logo, search, top-3 cities, "back to home" | 7/10 | 2/10 | 33-byte 404 body is a dead end |
| 6 | **Build a real contact form** (3 fields: who-are-you, email, message) | 7/10 | 2/10 | Both homeowners and contractors expect one |
| 7 | **Profile-claim flow for contractors** ("Is this your business? Update your listing") | 8/10 | 5/10 | Every other directory has this — also a free contractor-acquisition channel |
| 8 | **Remove `noindex: true` from the 5000-rule blog post + add ≥2 more posts before launch** | 8/10 | 3/10 | /blog index is pointless until posts are live |
| 9 | **Filter + sort on city page** (rating, response time, BBB grade) | 7/10 | 4/10 | Comparison table has the affordance but no actual sort |
| 10 | **Service-area map per pro** (static map with pin) | 6/10 | 3/10 | Already imported StaticMap component; just wire data |

---

## 8. Concrete file:line edits to fix the QA failures

### Fix 1 — match form must submit somewhere
`src/components/v2/HomePage.tsx:138-195`

The `<form>` has no `action` and no `onSubmit`. The button is `type="button"` not `type="submit"`. Pick one:

**Quickest** (mailto fallback so users at least reach you):
```tsx
<form
  className="rounded-xl shadow-2xl p-5 md:p-6"
  action="mailto:editorial@rizehvac.com"
  method="POST"
  encType="text/plain"
  …
>
  …
  <input type="text" name="zip" required pattern="\d{5}" placeholder="ZIP code" … />
  <select name="issue" required aria-label="Service issue" …>
    …
  </select>
  <input type="email" name="email" required placeholder="Email for your quote" … />
  <button type="submit" …>Match me with 3 contractors</button>
</form>
```

**Better** — POST to a Next.js route handler at `src/app/api/match/route.ts` that emails Aaron + records the lead. Pattern matches the ProCloser drip integration.

### Fix 2 — footer 404s
`src/components/shared/SiteFooter.tsx:23-34`

Replace the hardcoded `tucson` URLs with a registry-driven list:
```tsx
import { listCities } from "@/data/cityRegistry";
…
<ul className="mt-3 space-y-2 text-sm">
  {listCities().map(c => (
    <li key={c.slug}><a href={`/hvac/${c.slug}`}>{c.label}</a></li>
  ))}
</ul>
```
And change `<a href="/hvac-cost/tucson">Cost guides</a>` to point to a real `/hvac-cost/dallas` (or to an index page once the second city ships).

### Fix 3 — header nav placeholder hrefs
`src/components/v2/V2Header.tsx:27-30`

Replace:
```tsx
<a href="/" className="hover:text-white">Services</a>
<a href="#methodology" className="hover:text-white">About</a>
<a href="/" className="hover:text-white">Cities</a>
<a href="/" className="hover:text-white">Blog</a>
```
with:
```tsx
<a href="/hvac/dallas">Dallas</a>
<a href="/about">About</a>
<a href="/methodology">Methodology</a>
<a href="/blog">Blog</a>
```
(or remove "Services" and "Cities" until you have multiple cities).

### Fix 4 — phone number consistency
`src/components/v2/HomePage.tsx:58` (and grep for `5202072500` / `(520) 207-2500` across the codebase)

Change to the Dallas number `(214) 414-2500` / `tel:2144142500` everywhere except where Dallas-specific contractor numbers are intentional. Search:
```bash
grep -rE '520.{0,3}207.{0,3}2500|5202072500' src/
```
Found in: `HomePage.tsx`, `about/page.tsx`, `contact/page.tsx`, possibly `V2Header` defaults.

### Fix 5 — `<select>` accessibility
`src/components/v2/HomePage.tsx:164-175`

Add `aria-label`:
```tsx
<select
  aria-label="What's your HVAC issue?"
  name="issue"
  required
  defaultValue=""
  …
>
```

### Fix 6 — 404 page UX
Create `src/app/not-found.tsx`:
```tsx
export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-4">
      <div className="text-center max-w-xl">
        <div className="display text-6xl">404</div>
        <h1 className="display text-3xl mt-4">We couldn&apos;t find that page.</h1>
        <p className="mt-3 text-base">Try one of these instead:</p>
        <ul className="mt-4 space-y-2">
          <li><a href="/" className="underline">Home</a></li>
          <li><a href="/hvac/dallas" className="underline">Best HVAC contractors in Dallas</a></li>
          <li><a href="/blog" className="underline">HVAC buying guides</a></li>
          <li><a href="/methodology" className="underline">How we rank</a></li>
        </ul>
      </div>
    </main>
  );
}
```

### Fix 7 — landmark-one-main on blog post + methodology
`src/components/v2/V2EditorialPage.tsx`, `src/components/v2/BlogPostBody.tsx` — wrap article body in `<main>` instead of `<div>` or `<section>`. Same for methodology page top-level wrapper.

### Fix 8 — blog index dead-end
Either:
- Set `noindex: false` on `src/data/posts/5000-rule-hvac.ts:NN` so it appears in `/blog`
- Or 301 `/blog` to `/` until the registry has ≥1 post
- Code: `src/app/blog/page.tsx` — fix the empty-state copy or add a redirect

### Fix 9 — link-name on Dallas tel-only `<a>`
`src/components/v2/V2ContractorCard.tsx` (or wherever the contractor card renders the tel link) — wrap the icon + add visible/sr-only text:
```tsx
<a href={`tel:${tel}`} aria-label={`Call ${name} at ${phone}`}>
  <Phone size={16} />
  <span className="sr-only">Call </span>{phone}
</a>
```

### Fix 10 — image alt + Next/Image ERR_ABORTED
The Dallas hero ERR_ABORTED is likely the `sizes="(max-width: 640px) 800px, …"` mismatch with available widths. The webp at `dallas-hero-1200.webp` is 1200px wide; Next/Image is requesting `w=640` and `w=384` and aborting. Verify by hitting `https://rizehvac.onrender.com/_next/image?url=%2Fphotos%2Fdallas-hero-1200.webp&w=640&q=75` directly. If ERR_ABORTED reproduces in Aaron's regular browser, regenerate webp at standard widths (640/828/1080/1200/1920/2400) or trim the `sizes` attribute.

### Fix 11 — empty `<th>`
`src/components/v2/ComparisonTable.tsx` — find the `<th>` that has no text and add `aria-label="Actions"` or `<th><span class="sr-only">Actions</span></th>`.

### Fix 12 — author bio "pending"
`src/data/authors.ts` — replace the placeholder strings, or hide the "Find Aaron elsewhere" + "Bio pending" copy until populated. Currently published with placeholder is worse than not having the section.

### Fix 13 — contact form
Add a real form to `src/app/contact/page.tsx` with the same backend route as the match form.

### Fix 14 — methodology weight totals
`src/components/v2/MethodologyDeepDive.tsx` (or wherever weights render) — verify all weights sum to 100%. Currently visible values (NATE 30 + BBB 25 + warranty 12 + transparent 15 + complaint 10 + 24/7 10 + TDLR 10 + 5+ years 8 = 120) overshoot.

---

## Test artifacts

- 135 page screenshots (3 browsers × 3 viewports × 15 pages): `~/Claude/rizehvac/screenshots/qa-functional/`
- Findings JSON: `~/Claude/rizehvac/screenshots/qa-functional/_findings.json`
- Flow-specific screenshots: `flow-match-form-after-submit.png`, `flow-404-behavior.png`
- Competitor screenshots (12 above-fold + 12 full-page across 6 sites): `~/Claude/rizehvac/screenshots/competitor-functionality/`
- Auto-detected feature counts: `~/Claude/rizehvac/screenshots/competitor-functionality/_features.json` (note: Yelp/BBB/Houzz/HomeAdvisor returned bot-block / 404 / error pages — feature inferences for those rows in the matrix are based on industry knowledge, not headless capture)
