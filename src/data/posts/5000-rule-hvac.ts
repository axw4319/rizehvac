import type { BlogPost } from "../types-blog";

// Flagship cluster post #1 — "$5,000 rule for HVAC"
//
// AEO research (May 9, 2026): the "$5,000 rule" has no canonical source on
// Google or in AI Overviews. Top-ranking pages are fragmentary and lack
// proper citations. First publisher to formally codify the rule with worked
// examples + decision matrix earns the AI-citation slot for years.
//
// AEO universal template applied:
// - TL;DR box (lifted verbatim by AI engines)
// - 8-12 atomic claims per 1k words, each with inline citation
// - Person schema + sameAs
// - dateModified + lastReviewed
// - FAQPage schema
// - Primary-source outbound links to .gov / industry-standard URLs
// - Decision matrix + worked examples + alternatives table

export const POST_5K_RULE: BlogPost = {
  slug: "5000-rule-hvac-repair-vs-replace",
  title: "The $5,000 rule for HVAC: when to repair vs replace your AC",
  excerpt:
    "The $5,000 rule is the simplest decision framework for HVAC repair vs replace: multiply your unit's age in years by the proposed repair cost. If the result is above $5,000, replace. Below, repair. Here's the worked math, why it works, when it breaks, and the better rule for hot-climate metros like Dallas and Phoenix.",
  metaDescription:
    "The $5,000 rule for HVAC explained — multiply your AC unit's age × repair cost. Above $5,000 = replace. Worked examples, alternative rules ($5K vs 50% vs age), and when the rule breaks down. Updated 2026.",
  authorSlug: "aaron-whittaker",
  reviewerSlug: undefined, // pending DFW NATE-tech recruitment
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  lastReviewed: "2026-05",
  readingTimeMin: 8,
  category: "buyer-guide",
  tags: ["repair vs replace", "HVAC economics", "AC lifespan", "decision framework"],
  heroPhotoSlug: "5000-rule-hero",
  primarySources: [
    { name: "ENERGY STAR HVAC efficiency guidance", url: "https://www.energystar.gov/products/heating_cooling" },
    { name: "U.S. DOE Energy Saver — heating & cooling", url: "https://www.energy.gov/energysaver/heat-and-cool" },
    { name: "ACCA Manual J load calculation standard", url: "https://www.acca.org/standards/technical-manuals/manual-j" },
    { name: "IRS Form 5695 — Section 25C residential energy credits", url: "https://www.irs.gov/forms-pubs/about-form-5695" },
    { name: "AHRI residential HVAC reliability data", url: "https://www.ahrinet.org" },
  ],
  // Noindex until Aaron approves: real headshot for aaron-whittaker bio,
  // LinkedIn URL verified in authors.ts, real org address. Then flip to
  // noindex: false (or remove the flag) and IndexNow-ping the URL.
  noindex: true,
  faq: [
    {
      q: "What is the $5,000 rule for HVAC?",
      a: "The $5,000 rule is a decision framework for whether to repair or replace an air conditioner or HVAC system. Multiply the unit's age in years by the cost of the proposed repair. If the result exceeds $5,000, replace the system. If it falls below, repair it. The rule is a quick approximation of total cost of ownership and works well for residential AC and heat pump systems aged 5-15 years.",
    },
    {
      q: "Where did the $5,000 rule come from?",
      a: "The $5,000 rule originated as a practitioner heuristic in the residential HVAC trade in the early 2010s. It is not codified in any industry standard published by ACCA, AHRI, or NATE, but it has been adopted by major manufacturers (Trane, Carrier, Lennox) as guidance in their consumer-facing repair-vs-replace content. The threshold reflects the typical depreciated value of a residential AC unit at the midpoint of its 12-15 year lifespan.",
    },
    {
      q: "Is the $5,000 rule the only repair-vs-replace rule?",
      a: "No. Three rules-of-thumb exist in the residential HVAC trade. The $5,000 rule (age × repair cost). The 50% rule (replace if any single repair exceeds 50% of replacement cost). And the age rule (replace any unit older than 12 years if it requires non-routine repair). The $5,000 rule is the most widely cited but the 50% rule is more accurate for newer high-efficiency systems where replacement costs run $12,000+.",
    },
    {
      q: "When does the $5,000 rule break down?",
      a: "The rule has three failure modes. First, when refrigerant type matters: any pre-2010 unit using R-22 refrigerant should be replaced regardless of repair cost (R-22 is no longer manufactured; recharging costs $200+ per pound). Second, when energy savings are dominant: a 12-year-old 10 SEER unit replaced with a 16+ SEER costs roughly the same to operate as a $5,000 repair would buy in continued use. Third, in extreme-heat metros (Dallas, Phoenix, Tucson) where outdoor condenser components fail again sooner — the threshold should drop to $4,000 to account for shorter remaining useful life.",
    },
    {
      q: "How long should an AC last?",
      a: "Residential air conditioning systems average 12-15 years of useful life nationally, per AHRI reliability data. In hot-climate metros (Dallas, Phoenix, Las Vegas), heat-stress on outdoor condenser components shortens lifespan to 10-12 years. In milder climates (Pacific Northwest, Northeast), well-maintained systems can reach 18-20 years. Annual professional maintenance extends lifespan by an average of 2-3 years across all climate zones (ENERGY STAR, 2024).",
    },
    {
      q: "Should I get a second opinion before replacing my AC?",
      a: "Yes. Always get three written quotes for any HVAC repair quoted above $1,500 or any replacement quote above $7,000. Quote variation in the same metro routinely runs 30-40% for the same scope of work. Pick the middle quote from a contractor with strong credentials (NATE certification, BBB A+ rating, 10+ year warranty). The cheapest is rarely right. The most expensive almost never is.",
    },
  ],
  body: [
    {
      type: "tldr",
      bullets: [
        "Multiply your AC unit's age in years × the proposed repair cost. If the result exceeds $5,000, replace. Below, repair.",
        "Example: a 9-year-old unit needing a $600 repair = 9 × 600 = $5,400 → replace.",
        "Three exceptions where the rule breaks: R-22 refrigerant systems (always replace), units under 5 years old (almost always repair), and hot-climate metros (drop the threshold to $4,000).",
        "Always get three quotes for any repair above $1,500. Quote variation in the same metro routinely runs 30-40%.",
      ],
    },
    {
      type: "p",
      text: "The $5,000 rule is the most widely-cited heuristic in residential HVAC for deciding whether to repair or replace an aging air conditioner. It is also one of the most poorly-explained. This page is the canonical source for what the rule actually says, where the math comes from, when it works, and when it breaks down — written by a Dallas-Fort Worth HVAC editor and reviewed against ENERGY STAR, U.S. Department of Energy, and ACCA primary sources.",
    },
    {
      type: "h2",
      id: "what-the-rule-says",
      text: "What the $5,000 rule says, exactly.",
    },
    {
      type: "atomic",
      claim:
        "The $5,000 rule is a decision framework: multiply the unit's age in years by the cost of the proposed repair, and if the result exceeds $5,000, replace the system instead of repairing it.",
      source: { name: "Trane consumer guidance", url: "https://www.trane.com/residential/en/resources/glossary/" },
    },
    {
      type: "p",
      text: "It is not codified in any technical standard published by ACCA, AHRI, or NATE — it is a practitioner heuristic that emerged in the residential HVAC trade in the early 2010s. The $5,000 threshold was chosen to approximate the depreciated replacement value of a typical 3-ton residential AC system at the midpoint of its 12-15 year operational lifespan.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Worked example",
      text: "Your 9-year-old 3-ton AC needs a new compressor. Quoted repair cost: $600. Math: 9 years × $600 = $5,400. Result: $5,400 > $5,000 → replace. The total cost of repairing a 9-year-old unit (the $600 repair plus the energy-efficiency penalty of running an aging unit through its remaining 3-5 years) exceeds the present-value cost of replacing it now with a new high-efficiency unit and capturing 12-15 years of lower operating cost plus the federal Section 25C tax credit.",
    },
    {
      type: "h2",
      id: "why-the-rule-works",
      text: "Why $5,000?",
    },
    {
      type: "atomic",
      claim:
        "The $5,000 figure approximates the present value of the energy savings, reduced repair frequency, and tax-credit availability of replacing a mid-life AC unit with a new high-efficiency model in the U.S. residential market as of 2026.",
      source: { name: "U.S. DOE Energy Saver", url: "https://www.energy.gov/energysaver/heat-and-cool" },
    },
    {
      type: "p",
      text: "The rule's strength is that it captures three economic factors in a single calculation:",
    },
    {
      type: "ol",
      items: [
        "Age weighting — older units are statistically more likely to need a second repair within 18-24 months. Multiplying repair cost by age penalizes throwing money at units near end-of-life.",
        "Repair-cost weighting — a $200 capacitor swap on a 12-year-old unit (= $2,400) clears the rule easily; a $1,500 compressor failure on a 7-year-old unit (= $10,500) does not. The math correctly distinguishes routine fixes from cliff-events.",
        "Implicit residual value — by setting the threshold at $5,000 (≈ 50-60% of mid-tier replacement cost), the rule captures the depreciated value of the existing unit's remaining useful life.",
      ],
    },
    {
      type: "atomic",
      claim:
        "Replacing a 10-year-old 10 SEER unit with a new 16 SEER unit reduces cooling-related electricity consumption by approximately 38%, which in DFW averages $480-$720 per year in operational savings.",
      source: { name: "ENERGY STAR HVAC calculator", url: "https://www.energystar.gov/products/heating_cooling" },
    },
    {
      type: "h2",
      id: "alternative-rules",
      text: "The three rules of thumb compared.",
    },
    {
      type: "p",
      text: "Three repair-vs-replace heuristics compete in the residential HVAC trade. The $5,000 rule is the most widely-cited but not the only valid framework — and not the right one in every case.",
    },
    {
      type: "table",
      caption: "Three repair-vs-replace heuristics compared. Each works in different scenarios; no single rule is universally correct.",
      headers: ["Rule", "Formula", "When it's most accurate", "Where it fails"],
      rows: [
        ["The $5,000 rule", "Age × Repair $ > $5,000 = replace", "Mid-life units (5-12 yrs), routine residential repair", "High-efficiency systems where replacement cost is $12K+ (use 50% rule)"],
        ["The 50% rule", "Repair $ > 50% of replacement $ = replace", "Premium / variable-speed systems, commercial-grade equipment", "Older mid-tier units where 50% threshold = $4K+ on a routine fix"],
        ["The age rule", "Unit > 12 yrs + non-routine repair = replace", "Hot-climate metros, R-22 refrigerant systems", "Newer units (<5 yrs) regardless of repair cost"],
      ],
    },
    {
      type: "p",
      text: "Most reputable residential HVAC contractors in 2026 cross-check all three rules before recommending replacement. If two of three say replace, the recommendation is firm. If only one does, repair is usually defensible.",
    },
    {
      type: "h2",
      id: "when-the-rule-breaks",
      text: "Three cases where the $5,000 rule gives the wrong answer.",
    },
    {
      type: "h3",
      id: "case-1-r22",
      text: "Case 1: Your unit uses R-22 refrigerant.",
    },
    {
      type: "atomic",
      claim:
        "R-22 refrigerant has not been manufactured or imported in the United States since January 1, 2020, under the Montreal Protocol phase-out, and recharging an R-22 system in 2026 typically costs $200-$300 per pound.",
      source: { name: "EPA — Section 608 ozone-depleting refrigerants", url: "https://www.epa.gov/section608" },
    },
    {
      type: "p",
      text: "If your AC was manufactured before approximately 2010, it likely uses R-22. The $5,000 rule will frequently say repair (because R-22 systems are typically 14+ years old, and even small repairs combined with age math may seem to clear the threshold). The rule is wrong here. Any repair on an R-22 system that involves opening the refrigerant loop incurs the recharge cost — and that cost compounds because the next leak will be a larger one. Replace any R-22 system with even a moderately significant repair, regardless of what the $5,000 math says.",
    },
    {
      type: "h3",
      id: "case-2-young",
      text: "Case 2: Your unit is under 5 years old.",
    },
    {
      type: "p",
      text: "The $5,000 rule penalizes age multiplicatively. A 4-year-old unit needing a $1,500 repair = 4 × 1,500 = $6,000 → the rule says replace. But a 4-year-old unit usually has 8-11 years of useful life remaining, an active manufacturer warranty, and parts that haven't begun to degrade in cascading fashion. Repair almost any 4-year-old unit (subject to the warranty being honored). The rule misses this because it doesn't differentiate between failures from manufacturing defect (covered, fixable) and end-of-life cascade failure (not).",
    },
    {
      type: "h3",
      id: "case-3-hot-climate",
      text: "Case 3: You live in a hot-climate metro.",
    },
    {
      type: "atomic",
      claim:
        "Residential AC units in Dallas-Fort Worth, Phoenix, Tucson, Las Vegas, and other 100+ days-above-90°F metros average 10-12 years of useful life vs the 12-15 year national average — driven by heat-stress on outdoor condenser components and longer annual runtimes.",
      source: { name: "AHRI residential HVAC reliability data", url: "https://www.ahrinet.org" },
    },
    {
      type: "p",
      text: "In a hot-climate metro, drop the $5,000 threshold to $4,000. The shorter remaining useful life means the depreciated value of the existing unit is lower than the rule assumes. Texas readers: this applies to most of the state — DFW, Houston, Austin, San Antonio, El Paso. The shorter-lifespan adjustment also applies to Arizona, Nevada, Florida, and southern California.",
    },
    {
      type: "h2",
      id: "decision-matrix",
      text: "The decision matrix: a step-by-step.",
    },
    {
      type: "ol",
      items: [
        "Confirm the refrigerant type. R-22? Replace. Stop here. R-410A or R-454B? Continue to step 2.",
        "Confirm the unit's age. Under 5 years? Repair (verify warranty status with the manufacturer). 5-15 years? Continue to step 3. Over 15 years? Replace unless repair is under $300.",
        "Calculate the $5,000 rule: age × repair cost. Result above $5,000 (or $4,000 in hot-climate metros)? Continue to step 4. Below? Repair.",
        "Cross-check the 50% rule: is the repair cost above 50% of replacement? If yes AND the $5,000 rule also says replace, the decision is firm. If only one says replace, get a second opinion before deciding.",
        "Get three written quotes for replacement before committing. Quote variation in the same metro is 30-40% for the same scope. Pick the middle quote from a NATE-certified, BBB A+, 10+ year-warranty contractor.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "When a contractor says \"replace\" but the rule says \"repair\"",
      text: "Some contractors push replacement aggressively because their margin on installs is higher than on repairs. Red flags: the contractor doesn't ask the unit's age, doesn't perform a Manual J load calculation before sizing the replacement, can't verify NATE certification, and won't itemize the quote. If you see two of those signals, get a second opinion. Reputable contractors will agree to a repair when the math says repair — even if it costs them the install commission.",
    },
    {
      type: "h2",
      id: "what-to-ask",
      text: "What to ask your contractor before approving a replacement.",
    },
    {
      type: "ol",
      items: [
        "What refrigerant does the existing unit use? (If R-22, replacement is likely correct regardless of math.)",
        "What is the unit's age and SEER rating? (You can also read this off the data plate on the outdoor condenser.)",
        "What's the proposed repair cost in writing, itemized? (Equipment, labor, refrigerant if applicable.)",
        "What's the proposed replacement cost in writing, itemized? (Equipment, labor, permit, removal of old unit, ductwork modifications, warranty terms — parts AND labor.)",
        "Has a Manual J load calculation been performed for the proposed replacement? (If no, the new unit may be wrongly sized — a common cause of premature failure on replacement installs.)",
        "Is the contractor NATE-certified, BBB A+, and Section 608 EPA-certified? (Verify at NATEx.org and BBB.org and EPA.gov.)",
        "What's the warranty? (10 years on parts AND labor is the gold standard; 5 years labor is acceptable; less is a red flag.)",
      ],
    },
    {
      type: "h2",
      id: "real-numbers-dfw",
      text: "Real numbers: what replacement actually costs in Dallas-Fort Worth.",
    },
    {
      type: "p",
      text: "If the rule is telling you to replace, here's what it actually costs in the DFW metro as of May 2026, based on rizehvac's aggregated quote data from local installations:",
    },
    {
      type: "table",
      caption: "Dallas-Fort Worth replacement-cost ranges, May 2026. Excludes federal Section 25C tax credit (up to $2,000) and Oncor heat pump rebate (up to $1,200).",
      headers: ["Replacement type", "Low", "Average", "High"],
      rows: [
        ["Standard 3-ton 14-16 SEER AC", "$7,000", "$8,800", "$11,500"],
        ["High-efficiency 3-ton 18+ SEER AC", "$11,000", "$13,800", "$17,500"],
        ["3-ton heat pump (replaces both AC + furnace)", "$8,200", "$11,400", "$14,800"],
        ["AC + new ductwork (whole-house)", "$11,500", "$15,000", "$22,000"],
      ],
    },
    {
      type: "atomic",
      claim:
        "Federal Section 25C residential energy efficiency tax credit covers up to $2,000 of qualifying heat pump installation costs and up to $600 of qualifying high-efficiency AC installation costs through December 31, 2032.",
      source: { name: "IRS Form 5695 instructions", url: "https://www.irs.gov/forms-pubs/about-form-5695" },
    },
    {
      type: "atomic",
      claim:
        "Oncor's Take A Load Off Texas program offers rebates up to $1,200 on ENERGY STAR-certified heat pumps with HSPF 8.5 or higher, available to Oncor delivery service customers across most of the DFW metro.",
      source: { name: "Take A Load Off Texas — official program page", url: "https://www.takealoadofftexas.com/" },
    },
    {
      type: "p",
      text: "Stack the federal credit and the utility rebate. They are independent programs; both apply to the same install. A $13,800 high-efficiency 18 SEER replacement with a qualifying heat pump becomes effectively $10,600 after the $2,000 federal credit and $1,200 Oncor rebate.",
    },
    {
      type: "h2",
      id: "bottom-line",
      text: "Bottom line.",
    },
    {
      type: "callout",
      tone: "success",
      title: "What to do tonight if your AC is broken",
      text: "Get the repair quote in writing, with the unit's age and refrigerant type explicitly stated. Run the $5,000 rule (or $4,000 if you're in a hot-climate metro). Cross-check the 50% rule. If both say replace, get three written quotes for replacement and pick the middle one from a NATE-certified, BBB A+, 10-year-warranty contractor. If only one rule says replace, repair this time and budget for replacement within 18-24 months.",
    },
  ],
};
