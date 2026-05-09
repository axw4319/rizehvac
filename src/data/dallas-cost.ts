import type { CostRow, CostFAQ, RebateProgram } from "./types";

export const DALLAS_COST_DATA: CostRow[] = [
  {
    service: "AC repair (diagnostic + minor fix)",
    lowEnd: 175,
    highEnd: 700,
    average: 415,
    notes:
      "Capacitor or contactor replacement is most common in DFW summer call volume. Diagnostic fees range $59-$149; many waived with repair.",
  },
  {
    service: "Refrigerant recharge (R-410A)",
    lowEnd: 275,
    highEnd: 850,
    average: 545,
    notes:
      "Pricing per pound — DFW averages $95-$150/lb for R-410A. R-22 systems should be replaced, not recharged (refrigerant phaseout complete 2020).",
  },
  {
    service: "AC unit replacement (3-ton, mid-tier)",
    lowEnd: 7000,
    highEnd: 11500,
    average: 8800,
    notes:
      "Includes outdoor condenser, indoor coil, basic permit. DFW permit fees add $150-$400 depending on jurisdiction.",
  },
  {
    service: "AC unit replacement (high-efficiency, 18+ SEER)",
    lowEnd: 11000,
    highEnd: 17500,
    average: 13800,
    notes:
      "Variable-speed compressor adds $2,000-$3,500. Federal Section 25C tax credit up to $2,000 still available through 2032 for ENERGY STAR units.",
  },
  {
    service: "Heat pump installation",
    lowEnd: 8200,
    highEnd: 14800,
    average: 11400,
    notes:
      "Strong fit for DFW's mild winters (5-15 nights/yr below freezing). Oncor and Atmos rebate programs cover qualifying ENERGY STAR heat pumps.",
  },
  {
    service: "Ductless mini-split (single zone)",
    lowEnd: 4800,
    highEnd: 9500,
    average: 6800,
    notes:
      "Per zone. Common for DFW garage conversions, casitas, additions, and rooms with poor airflow. Mitsubishi and LG most common in market.",
  },
  {
    service: "Ductwork replacement (whole home)",
    lowEnd: 4000,
    highEnd: 10500,
    average: 6800,
    notes:
      "Critical in older Dallas homes (pre-1985, especially in Lakewood, M-Streets, Highland Park) where leaky ducts can cost 25-40% of cooling output. R-8 insulation now standard.",
  },
  {
    service: "Annual maintenance / tune-up",
    lowEnd: 89,
    highEnd: 219,
    average: 145,
    notes:
      "Most DFW contractors offer membership plans ($16-28/month) covering 2 visits/year + priority service.",
  },
  {
    service: "Emergency same-day service surcharge",
    lowEnd: 75,
    highEnd: 225,
    average: 135,
    notes:
      "Added to base diagnostic. Some contractors waive the surcharge for repairs over $500.",
  },
  {
    service: "Indoor air quality upgrade (REME HALO, MERV 13)",
    lowEnd: 650,
    highEnd: 1900,
    average: 1175,
    notes:
      "Dallas's high pollen + cedar season + dust make IAQ upgrades higher-impact here than in milder climates.",
  },
];

export const DALLAS_COST_FAQS: CostFAQ[] = [
  {
    q: "What's the average cost of HVAC repair in Dallas?",
    a: "Most Dallas HVAC repairs land between $175 and $700, with the average around $415 in 2026. Common fixes — capacitor replacement, contactor replacement, refrigerant top-offs — fall in the lower half. Compressor failures and refrigerant leaks push toward the upper end. If a contractor quotes more than $1,500 for a repair, get a second opinion before committing.",
  },
  {
    q: "How much does it cost to replace an AC unit in Dallas?",
    a: "A standard 3-ton mid-efficiency AC replacement in Dallas runs $7,000 to $11,500 installed, with the average at $8,800. High-efficiency systems (18+ SEER) range $11,000 to $17,500. Oncor rebates and the federal Section 25C tax credit can offset $1,500 to $3,000 of that cost on qualifying ENERGY STAR equipment.",
  },
  {
    q: "Why is HVAC more expensive in Dallas than in other Texas cities?",
    a: "Dallas-Fort Worth pricing tracks slightly above Austin and San Antonio — driven by labor demand in the metro and stricter permitting in some jurisdictions (City of Dallas, Plano, Frisco). Equipment costs are flat across Texas, but DFW labor runs 8-12% above the state average for licensed HVAC techs.",
  },
  {
    q: "How long does an AC unit last in Dallas?",
    a: "12-14 years for residential systems running typical DFW cooling loads. With diligent annual maintenance, well-installed high-efficiency systems can reach 15-16 years. Without maintenance, expect 9-11 years. Texas summer heat-stress on outdoor condenser components is the limiting factor more often than the compressor itself.",
  },
  {
    q: "Are there rebates or tax credits for new HVAC in Dallas?",
    a: "Yes. Federal Section 25C residential energy efficiency tax credit covers up to $2,000 for qualifying heat pumps and $600 for high-efficiency AC, available through 2032. Oncor's Take A Load Off Texas program offers rebates up to $1,200 on ENERGY STAR-certified heat pumps. Atmos Energy customers can access additional rebates on dual-fuel systems. These are stackable — claim the federal credit AND the utility rebate on the same install.",
  },
  {
    q: "Should I repair or replace my Dallas AC unit?",
    a: "The 5,000 rule is the standard guidance: multiply the unit's age in years by the repair cost. If the result exceeds $5,000, replace. Example: a 10-year-old unit needing a $600 repair = 10 × 600 = $6,000 — replace. The Dallas-specific adjustment: if your unit is 12+ years old AND uses R-22 refrigerant, replace regardless of repair cost (R-22 is no longer manufactured; recharging costs $200+ per pound).",
  },
  {
    q: "How long does HVAC installation take in Dallas?",
    a: "Standard AC replacements complete in one day. Whole-system replacements (AC + furnace + ductwork) typically take 2-3 days. Permitting in DFW jurisdictions runs 3-7 business days, so factor that into your schedule. Reputable contractors handle permits in-house and won't start work without one.",
  },
];

export const DALLAS_REBATE_DATA: RebateProgram[] = [
  {
    program: "Federal Section 25C tax credit",
    amount: "Up to $2,000",
    eligibility: "ENERGY STAR-certified heat pumps; up to $600 for qualifying high-efficiency AC",
    expires: "December 31, 2032",
    source: "IRS Form 5695",
  },
  {
    program: "Oncor Take A Load Off Texas",
    amount: "Up to $1,200",
    eligibility: "ENERGY STAR heat pumps with HSPF 8.5+; Oncor delivery service area (most of DFW)",
    expires: "Annual program — confirm current year",
    source: "takealoadofftexas.com",
  },
  {
    program: "Atmos Energy Smart Choice rebates",
    amount: "Up to $400",
    eligibility: "Dual-fuel systems pairing high-efficiency AC with Atmos gas furnace",
    expires: "Annual program",
    source: "atmosenergy.com/smartchoice",
  },
  {
    program: "TXU Energy Efficiency rebates",
    amount: "Up to $400",
    eligibility: "TXU electric customers installing 16 SEER+ central AC",
    expires: "Annual program — confirm current year",
    source: "txu.com/efficiency",
  },
];
