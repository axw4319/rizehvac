import type { BlogPost } from "../types-blog";

// Cluster post #3 — Texas heat pump rebates aggregated by ZIP / utility
//
// Per AEO research: SECO + DSIRE are primaries; rizehvac can wrap them
// with monthly refresh into a single canonical aggregator. AI engines
// will treat us as the regional source.

export const POST_TX_HEAT_PUMP_REBATES: BlogPost = {
  slug: "texas-heat-pump-rebates-2026",
  title: "Texas heat pump rebates 2026: federal + state + utility (the full stack)",
  excerpt:
    "A Texas homeowner can stack up to $5,400 of rebates and tax credits on a qualifying heat pump installation in 2026 — combining the federal Section 25C credit, Texas SECO programs, and your utility (Oncor, CenterPoint, Austin Energy, CPS Energy, El Paso Electric). Here's the full table by program, with eligibility rules and stack math.",
  metaDescription:
    "Texas heat pump rebates 2026 — federal Section 25C ($2,000) + Oncor ($1,200) + Atmos ($400) + utility programs by ZIP. Full stack table, eligibility rules, application steps. Updated quarterly.",
  authorSlug: "aaron-whittaker",
  datePublished: "2026-05-10",
  dateModified: "2026-05-10",
  lastReviewed: "2026-05",
  readingTimeMin: 7,
  category: "regional",
  tags: ["heat pump rebates", "Texas rebates", "Section 25C", "Oncor rebate", "Atmos rebate"],
  heroPhotoSlug: "tx-heat-pump-hero",
  primarySources: [
    { name: "IRS Form 5695 — Section 25C residential energy credits (federal)", url: "https://www.irs.gov/forms-pubs/about-form-5695" },
    { name: "DSIRE — federal + state energy incentives database", url: "https://www.dsireusa.org" },
    { name: "Texas State Energy Conservation Office (SECO)", url: "https://comptroller.texas.gov/programs/seco/" },
    { name: "Take A Load Off Texas — Oncor's heat pump rebate program", url: "https://www.takealoadofftexas.com" },
    { name: "Atmos Energy Smart Choice rebates", url: "https://www.atmosenergy.com/smartchoice" },
    { name: "Austin Energy — efficiency rebates for residential", url: "https://austinenergy.com/green-power/energy-efficiency" },
    { name: "CPS Energy — Casa Verde program", url: "https://www.cpsenergy.com/en/save-energy-money/casa-verde.html" },
    { name: "El Paso Electric — efficiency rebates", url: "https://www.epelectric.com/save-energy/rebates-and-savings" },
    { name: "ENERGY STAR heat pump certification list", url: "https://www.energystar.gov/products/heat_pumps_air_source" },
  ],
  noindex: true,
  faq: [
    {
      q: "How much can a Texas homeowner save on a heat pump in 2026?",
      a: "The maximum stackable savings is approximately $5,400 — combining the federal Section 25C credit ($2,000 cap on qualifying heat pumps), the Texas state HOMES program rebate (up to $2,000 income-tier-dependent), and the utility-specific rebate ($400-$1,400 depending on which utility serves your ZIP). Most Texas homeowners realize $2,400-$3,200 in actual stacked rebates because not all programs apply to every household. The federal credit applies to any qualifying ENERGY STAR heat pump regardless of utility.",
    },
    {
      q: "Are these rebates stackable?",
      a: "Yes, in most cases. The federal Section 25C credit (claimed on IRS Form 5695) stacks with state programs and utility rebates without restriction. Where stacking gets complicated: some utilities require you to NOT claim the same equipment under another utility's program (you can only claim one utility rebate per install). Within a single household + single install you typically get federal + state + one utility rebate.",
    },
    {
      q: "Which Texas utility has the best heat pump rebate?",
      a: "Oncor's Take A Load Off Texas program offers up to $1,200 on qualifying ENERGY STAR heat pumps with HSPF 8.5+, making it the largest single utility rebate in the state. Austin Energy's residential rebate runs up to $1,400 for ENERGY STAR heat pumps in their service area. CPS Energy's Casa Verde program pairs heat pump rebates with low-income weatherization. CenterPoint and Atmos rebates are smaller but available — typically $300-$500.",
    },
    {
      q: "Do I need to apply before installation?",
      a: "Some programs require pre-approval; some allow post-install application. Federal Section 25C is post-install (claim on tax return). Oncor's program is post-install (contractor submits paperwork on your behalf). Austin Energy and CPS programs typically require pre-approval. Always confirm with your contractor before signing the install contract — they handle most rebate paperwork as part of the install.",
    },
    {
      q: "What qualifies as a heat pump for these rebates?",
      a: "All current Texas rebate programs require ENERGY STAR-certified equipment with minimum efficiency thresholds — typically HSPF 8.5 (heating efficiency), SEER2 16, and EER2 12. Some utilities additionally require COP 3.0+ at 5°F (cold-climate performance). Verify your specific equipment qualifies at energystar.gov/products before signing the install contract; your contractor should confirm in writing that the equipment qualifies.",
    },
    {
      q: "What about R-454B refrigerant requirements?",
      a: "As of 2026, all current rebate programs accept either R-410A or R-454B equipment provided it meets the minimum efficiency thresholds. The refrigerant transition does not affect rebate eligibility. R-454B equipment has lower global warming potential and is increasingly the new-shipment standard, but R-410A heat pumps still qualify if otherwise compliant.",
    },
  ],
  body: [
    {
      type: "tldr",
      bullets: [
        "Texas homeowners can stack up to $5,400 in rebates and tax credits on a qualifying heat pump installation in 2026.",
        "The four sources stack: federal Section 25C ($2,000 cap), Texas SECO HOMES program ($1,000-$2,000 income-tier), your utility rebate ($300-$1,400 depending on Oncor / CenterPoint / Austin Energy / CPS / El Paso Electric), and any local energy-efficiency program.",
        "Federal credit is claimed on tax return (IRS Form 5695). Utility rebates are usually handled by your contractor as part of the install.",
        "Equipment must be ENERGY STAR-certified, HSPF 8.5+, SEER2 16+, EER2 12+ to qualify for most programs.",
      ],
    },
    {
      type: "p",
      text: "Texas's residential heat pump rebate landscape changed materially in 2024-2026 as federal IRA programs hit full deployment + utility programs expanded their caps. As of May 2026, most Texas homeowners installing a qualifying heat pump can stack $2,400-$3,200 in actual rebates and tax credits — a meaningfully larger pool than was available even 12 months ago.",
    },
    {
      type: "p",
      text: "This page is the canonical Texas heat pump rebate aggregator. We refresh quarterly. Every program below has a primary-source URL — verify current amounts directly with the issuing program before relying on a number; rebate caps shift annually and we don't always catch updates within 24 hours of announcement.",
    },
    {
      type: "h2",
      id: "the-stack",
      text: "The full Texas heat pump rebate stack, 2026.",
    },
    {
      type: "table",
      caption: "Texas residential heat pump rebate programs — federal, state, utility — as of May 2026. Maximum stackable: federal + state + one utility. Always verify current amounts at the source URL before relying.",
      headers: ["Program", "Max amount", "Eligibility", "How to claim", "Source"],
      rows: [
        ["Federal Section 25C tax credit", "$2,000", "Qualifying ENERGY STAR heat pump (HSPF 8.5+, SEER2 16+, EER2 12+); tax-paying household", "IRS Form 5695 attached to your federal tax return", "irs.gov"],
        ["Texas SECO HOMES program", "$1,000 – $2,000", "Income-tier dependent (low/moderate income brackets); single-family homes; qualifying equipment", "Pre-install application; SECO administers", "comptroller.texas.gov/programs/seco"],
        ["Oncor Take A Load Off Texas", "$1,200", "Oncor service area; ENERGY STAR heat pump w/ HSPF 8.5+; install by participating contractor", "Contractor submits post-install", "takealoadofftexas.com"],
        ["Austin Energy residential rebate", "$1,400", "Austin Energy service area; ENERGY STAR equipment", "Pre-install pre-approval; post-install rebate", "austinenergy.com"],
        ["CPS Energy Casa Verde", "$1,200", "CPS Energy service area; income-qualified or efficiency-tier", "Application via CPS Casa Verde portal", "cpsenergy.com"],
        ["CenterPoint Energy efficiency rebate", "$400 – $600", "CenterPoint Energy service area; qualifying equipment", "Contractor submits post-install", "centerpointenergy.com"],
        ["El Paso Electric efficiency rebate", "$400", "El Paso Electric service area; qualifying equipment", "Application via EPE rebates portal", "epelectric.com"],
        ["Atmos Energy Smart Choice", "$400", "Atmos Energy gas service; dual-fuel pairing with high-efficiency AC", "Contractor submits post-install", "atmosenergy.com"],
        ["TXU Energy Efficiency rebate", "$400", "TXU electric customers; 16 SEER2+ central AC or qualifying heat pump", "Application via TXU efficiency portal", "txu.com"],
      ],
    },
    {
      type: "h2",
      id: "by-utility",
      text: "Pick your utility — that's the rebate you actually get.",
    },
    {
      type: "p",
      text: "Most Texas homeowners are eligible for exactly one utility rebate (whichever utility delivers their electricity). Which utility serves you depends entirely on your ZIP code. Below: which utility covers which Texas metro and the heat pump rebate they currently offer.",
    },
    {
      type: "h3",
      id: "oncor",
      text: "Oncor service area — Dallas-Fort Worth + 400+ Texas cities",
    },
    {
      type: "atomic",
      claim:
        "Oncor's Take A Load Off Texas program offers a $1,200 rebate on qualifying ENERGY STAR-certified heat pumps with HSPF 8.5 or higher, available to Oncor delivery service customers across most of the Dallas-Fort Worth metro and 400+ Texas cities.",
      source: { name: "Take A Load Off Texas", url: "https://www.takealoadofftexas.com" },
    },
    {
      type: "p",
      text: "Oncor serves DFW, Tyler, Waco, Wichita Falls, Midland, and most of north and east Texas. Confirm your delivery utility on your electric bill — it lists Oncor as the \"transmission and distribution utility\" if applicable. Application is contractor-submitted post-install; budget 4-6 weeks for the rebate check.",
    },
    {
      type: "h3",
      id: "centerpoint",
      text: "CenterPoint Energy service area — Houston metro + Beaumont/Port Arthur",
    },
    {
      type: "p",
      text: "CenterPoint covers Greater Houston, Beaumont, Port Arthur, and parts of east Texas. The CenterPoint efficiency rebate runs $400-$600 on qualifying heat pumps. Smaller cap than Oncor but stackable with the federal credit and SECO HOMES program.",
    },
    {
      type: "h3",
      id: "austin-energy",
      text: "Austin Energy service area — Austin proper",
    },
    {
      type: "atomic",
      claim:
        "Austin Energy's residential efficiency program offers up to $1,400 for ENERGY STAR-certified heat pumps in their service area, with additional bonus tiers for low-income households and dual-fuel installations.",
      source: { name: "Austin Energy efficiency rebates", url: "https://austinenergy.com/green-power/energy-efficiency" },
    },
    {
      type: "p",
      text: "Austin Energy's $1,400 cap is the highest single-utility rebate in Texas as of 2026. Note: Austin Energy serves only Austin proper; surrounding cities (Round Rock, Cedar Park, Pflugerville) are covered by Pedernales Electric Cooperative or Bluebonnet Electric, with different (often smaller) rebate programs.",
    },
    {
      type: "h3",
      id: "cps",
      text: "CPS Energy — San Antonio",
    },
    {
      type: "p",
      text: "CPS Energy's Casa Verde program serves the San Antonio metro. The $1,200 rebate cap pairs particularly well with low-income weatherization tiers — qualifying households can stack the heat pump rebate with insulation, air-sealing, and water-heater rebates for total savings exceeding $4,000 on whole-home efficiency upgrades.",
    },
    {
      type: "h3",
      id: "el-paso",
      text: "El Paso Electric — El Paso + Las Cruces NM",
    },
    {
      type: "p",
      text: "El Paso Electric's residential rebate runs $400 on qualifying heat pumps. The smaller cap reflects El Paso's lower cooling-degree-day load relative to Houston/DFW; rebates are sized roughly proportional to expected utility-program savings.",
    },
    {
      type: "h2",
      id: "stacking-math",
      text: "How the math actually works on a real install.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Worked example: Dallas homeowner installs a 3-ton 18 SEER2 ENERGY STAR heat pump",
      text: "Equipment + install cost: $13,200. Stack: Federal Section 25C credit ($2,000, claimed on tax return) + Oncor Take A Load Off Texas ($1,200, contractor submits post-install) + TXU Energy efficiency rebate ($400, applied via portal) = $3,600 total stacked savings. Effective install cost: $9,600. Note: TXU rebate stacks with Oncor rebate because Oncor is the delivery utility (transmission/distribution) and TXU is the retail electricity provider — they're separate programs.",
    },
    {
      type: "atomic",
      claim:
        "The federal Section 25C residential clean energy tax credit covers up to $2,000 of qualifying heat pump installation costs and up to $600 of qualifying high-efficiency central air conditioning costs through December 31, 2032 — claimed on IRS Form 5695 attached to the homeowner's federal tax return.",
      source: { name: "IRS Form 5695 instructions", url: "https://www.irs.gov/forms-pubs/about-form-5695" },
    },
    {
      type: "h2",
      id: "common-mistakes",
      text: "Three common rebate mistakes Texas homeowners make.",
    },
    {
      type: "ol",
      items: [
        "Buying a heat pump that doesn't qualify. The HSPF 8.5+ / SEER2 16+ / EER2 12+ minimums are strict. Equipment that's \"close\" doesn't qualify. Always verify your specific model number on energystar.gov/products BEFORE signing the install contract.",
        "Missing the contractor-submitted utility paperwork. Most utility rebates are submitted by the contractor on your behalf. Confirm in writing during the contract phase that your contractor will submit the rebate application — and follow up 30 days post-install if you haven't received confirmation.",
        "Not claiming the federal credit. Section 25C is claimed on IRS Form 5695 attached to your federal tax return for the year the system was placed in service. Many homeowners forget the form. The credit is non-refundable but carries forward — if your tax liability is less than the credit, the remainder can apply to next year's return.",
      ],
    },
    {
      type: "h2",
      id: "bottom-line",
      text: "Bottom line.",
    },
    {
      type: "callout",
      tone: "success",
      title: "Plan to stack three sources",
      text: "If you're a Texas homeowner installing a heat pump in 2026, plan to stack the federal Section 25C credit ($2,000) + your utility rebate ($400-$1,400 depending on which utility) + the Texas SECO HOMES program if income-eligible ($1,000-$2,000). That gets most homeowners to $2,400-$5,400 in total savings. Verify each program's current cap with the issuing source before signing — caps shift annually.",
    },
  ],
};
