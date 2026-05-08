export type CostRow = {
  service: string;
  lowEnd: number;
  highEnd: number;
  average: number;
  notes: string;
};

export const TUCSON_COST_DATA: CostRow[] = [
  {
    service: "AC repair (diagnostic + minor fix)",
    lowEnd: 150,
    highEnd: 650,
    average: 380,
    notes: "Capacitor or contactor replacement is most common. Diagnostic fees range $49-$129; many waived with repair.",
  },
  {
    service: "Refrigerant recharge (R-410A)",
    lowEnd: 250,
    highEnd: 800,
    average: 510,
    notes: "Pricing per pound — Tucson averages $90-$140/lb for R-410A. R-22 systems should be replaced, not recharged.",
  },
  {
    service: "AC unit replacement (3-ton, mid-tier)",
    lowEnd: 6500,
    highEnd: 11000,
    average: 8400,
    notes: "Includes outdoor condenser, indoor coil, basic permit. Tucson permit fees add $200-$350.",
  },
  {
    service: "AC unit replacement (high-efficiency, 18+ SEER)",
    lowEnd: 10500,
    highEnd: 16500,
    average: 13200,
    notes: "Variable-speed compressor adds $2,000-$3,500. Federal tax credits (Section 25C) up to $2,000 still available through 2032.",
  },
  {
    service: "Heat pump installation",
    lowEnd: 7800,
    highEnd: 14200,
    average: 11000,
    notes: "Tucson's mild winters make heat pumps efficient. APS rebate up to $1,200 for qualifying ENERGY STAR units.",
  },
  {
    service: "Ductless mini-split (single zone)",
    lowEnd: 4500,
    highEnd: 9000,
    average: 6500,
    notes: "Per zone. Common for Tucson casitas, additions, and rooms with poor airflow. Mitsubishi and LG most common in market.",
  },
  {
    service: "Ductwork replacement (whole home)",
    lowEnd: 3500,
    highEnd: 9500,
    average: 6200,
    notes: "Critical in older Tucson homes (pre-1985) where leaky ducts can cost 25-40% of cooling output. R-8 insulation now standard.",
  },
  {
    service: "Annual maintenance / tune-up",
    lowEnd: 89,
    highEnd: 199,
    average: 135,
    notes: "Most contractors offer membership plans ($15-25/month) covering 2 visits/year + priority service.",
  },
  {
    service: "Emergency same-day service surcharge",
    lowEnd: 75,
    highEnd: 200,
    average: 125,
    notes: "Added to base diagnostic. Some contractors waive the surcharge for repairs over $500.",
  },
  {
    service: "Indoor air quality upgrade (REME HALO, MERV 13)",
    lowEnd: 600,
    highEnd: 1800,
    average: 1100,
    notes: "Tucson's high pollen + dust make IAQ upgrades more meaningful here than in milder climates.",
  },
];

export const TUCSON_COST_FAQS = [
  {
    q: "What's the average cost of HVAC repair in Tucson?",
    a: "Most Tucson HVAC repairs land between $150 and $650, with the average around $380 in 2026. Common fixes — capacitor replacement, contactor replacement, refrigerant top-offs — fall in the lower half. Compressor failures and refrigerant leaks push toward the upper end. If a contractor quotes more than $1,500 for a repair, get a second opinion before committing.",
  },
  {
    q: "How much does it cost to replace an AC unit in Tucson?",
    a: "A standard 3-ton mid-efficiency AC replacement in Tucson runs $6,500 to $11,000 installed, with the average at $8,400. High-efficiency systems (18+ SEER) range $10,500 to $16,500. APS rebates and the federal Section 25C tax credit can offset $1,500 to $3,000 of that cost on qualifying ENERGY STAR equipment.",
  },
  {
    q: "Why is HVAC more expensive in Tucson than in other cities?",
    a: "Two reasons. First, Tucson AC units run 2,400 hours per year vs the national average of 800, so equipment is sized larger and works harder. Second, the desert climate shortens equipment lifespan to 10-12 years vs the 15-year national average, meaning more frequent replacements. Local labor rates are actually below the national average — the equipment cost is what drives Tucson HVAC totals up.",
  },
  {
    q: "How long does an AC unit last in Tucson?",
    a: "10-12 years for residential systems running typical Tucson cooling loads. With diligent annual maintenance, well-installed high-efficiency systems can reach 14-15 years. Without maintenance, expect 8-10 years. The desert climate is the dominant factor — UV exposure on outdoor condenser components is the limiting factor more often than the compressor itself.",
  },
  {
    q: "Are there rebates or tax credits for new HVAC in Tucson?",
    a: "Yes. Federal Section 25C residential energy efficiency tax credit covers up to $2,000 for qualifying heat pumps and $600 for high-efficiency AC, available through 2032. APS offers rebates up to $1,200 on ENERGY STAR-certified heat pumps. TEP customers can access rebates up to $400 on qualifying high-efficiency AC. These are stackable — claim the federal credit AND the utility rebate on the same install.",
  },
  {
    q: "Should I repair or replace my Tucson AC unit?",
    a: "The 5,000 rule is the standard guidance: multiply the unit's age in years by the repair cost. If the result exceeds $5,000, replace. Example: a 9-year-old unit needing a $600 repair = 9 × 600 = $5,400 — replace. The Tucson-specific adjustment: drop the threshold to $4,000 because heat-stressed equipment fails again sooner. If you've had two service calls in 18 months, replace regardless of math.",
  },
  {
    q: "How long does HVAC installation take in Tucson?",
    a: "Standard AC replacements complete in one day. Whole-system replacements (AC + furnace + ductwork) typically take 2-3 days. Permitting in Tucson runs 5-10 business days, so factor that into your schedule. Reputable contractors handle permits in-house and won't start work without one.",
  },
];

export const TUCSON_REBATE_DATA = [
  {
    program: "Federal Section 25C tax credit",
    amount: "Up to $2,000",
    eligibility: "ENERGY STAR-certified heat pumps; up to $600 for qualifying high-efficiency AC",
    expires: "December 31, 2032",
    source: "IRS Form 5695",
  },
  {
    program: "APS Energy Wise Home Rebates",
    amount: "Up to $1,200",
    eligibility: "ENERGY STAR heat pumps with HSPF 8.5+; APS service area only",
    expires: "Annual program — confirm current year",
    source: "aps.com/rebates",
  },
  {
    program: "TEP Smart Energy Solutions",
    amount: "Up to $400",
    eligibility: "16 SEER+ central AC; TEP customers",
    expires: "Annual program — confirm current year",
    source: "tep.com/rebates",
  },
  {
    program: "Trico Electric Cooperative rebates",
    amount: "Up to $750",
    eligibility: "Trico-served homes (NW + Marana area); heat pump or high-efficiency AC",
    expires: "Annual program",
    source: "trico.coop",
  },
];
