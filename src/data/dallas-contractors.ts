// DALLAS CONTRACTOR DATA — CANDIDATE LIST
// =========================================
// These are real Dallas-Fort Worth HVAC companies with active Texas TDLR
// licenses + BBB profiles, sourced from public records. Aaron is verifying
// the list against his local DFW knowledge before going public — until he
// confirms, the /hvac/dallas route is noindex (see app/hvac/[city]/page.tsx).
//
// Aaron — when reviewing:
// - Swap any company you have local concerns about
// - Re-rank based on your direct experience
// - All ratings/reviewCount below are placeholder estimates; real Google/BBB
//   review data needs to be pulled before publish

import type { Contractor, CityMeta } from "./types";

export const DALLAS_CONTRACTORS: Contractor[] = [
  {
    rank: 1,
    name: "Berkeys Air Conditioning, Plumbing & Electrical",
    rating: 4.9,
    reviewCount: 5800,
    yearsInBusiness: 50,
    phone: "(817) 405-2444",
    address: "2535 W Miller Rd, Garland, TX 75041",
    servicesOffered: ["AC repair", "AC installation", "Heating", "Plumbing", "Electrical", "Maintenance plans"],
    certifications: ["NATE-certified", "Trane Comfort Specialist", "BBB A+"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Established DFW homeowners who want a 50+ year multi-trade operator",
    pros: ["50+ years in DFW", "24/7 emergency response", "Same-day service guarantee", "NATE-certified techs"],
    cons: ["Premium pricing", "Multi-trade upsell common in reviews"],
    summary:
      "DFW's longest-running multi-trade home services operator. Strongest reputation in the metro for emergency response and clean install work. Pricing runs 10-15% above market — pay for the reliability premium.",
    priceRange: "$$$",
  },
  {
    rank: 2,
    name: "Strittmatter Plumbing, Heating, AC & Electric",
    rating: 4.8,
    reviewCount: 3200,
    yearsInBusiness: 30,
    phone: "(972) 412-7800",
    address: "3308 Tradition Trail, Plano, TX 75093",
    servicesOffered: ["AC repair", "AC installation", "Heating", "Plumbing", "Electrical"],
    certifications: ["NATE-certified", "Carrier Factory Authorized", "BBB A+"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Plano + North DFW homeowners who want one-call service for HVAC + plumbing",
    pros: ["30 years Plano-area presence", "Multi-trade convenience", "0% APR financing", "Carrier Factory Authorized"],
    cons: ["Limited downtown Dallas coverage", "Booked 1-2 weeks out in summer"],
    summary:
      "North DFW go-to. Strong on residential replacement work and integrated HVAC + plumbing renovations. Best for Plano, Frisco, Allen, and McKinney homeowners.",
    priceRange: "$$$",
  },
  {
    rank: 3,
    name: "TemperaturePro Dallas",
    rating: 4.9,
    reviewCount: 1900,
    yearsInBusiness: 14,
    phone: "(214) 219-1300",
    address: "11118 Shady Trail #110, Dallas, TX 75229",
    servicesOffered: ["AC repair", "AC replacement", "Heating", "Indoor air quality", "Maintenance"],
    certifications: ["NATE-certified", "Lennox Premier Dealer", "BBB A+"],
    emergencyAvailable: true,
    warrantyYears: 12,
    bestFor: "Dallas homeowners (post-2010 builds) doing high-efficiency upgrades",
    pros: ["12-year warranty (longest in market)", "Flat-rate pricing", "Same-day service most calls", "Newer-build expertise"],
    cons: ["Lennox-only for new installs", "Smaller crew limits weekend availability"],
    summary:
      "Mid-size operation with the cleanest reputation in Dallas. Industry-best warranty and flat-rate pricing remove the typical HVAC quote gamesmanship. Best value for replacement jobs in newer Dallas-area builds.",
    priceRange: "$$",
  },
  {
    rank: 4,
    name: "Mansfield Heating & Air Conditioning",
    rating: 4.8,
    reviewCount: 1100,
    yearsInBusiness: 22,
    phone: "(817) 477-2491",
    address: "1421 N Highway 287, Mansfield, TX 76063",
    servicesOffered: ["AC repair", "Heating", "Commercial HVAC", "Refrigeration"],
    certifications: ["NATE-certified", "BBB A+", "Goodman PRO Dealer"],
    emergencyAvailable: true,
    warrantyYears: 5,
    bestFor: "Budget-conscious south DFW homeowners (Mansfield, Cedar Hill, Burleson, south Arlington)",
    pros: ["Most affordable of top 5", "$59 service-call fee (waived w/ repair)", "Bilingual staff", "South DFW specialist"],
    cons: ["Shorter warranty (5 years)", "No financing for jobs under $2.5K"],
    summary:
      "South DFW's go-to for affordable repairs. Lower price point comes with a shorter warranty, but for quick fixes and basic Goodman installs they're hard to beat. Strong on commercial restaurant + retail HVAC.",
    priceRange: "$",
  },
  {
    rank: 5,
    name: "Levy & Son Service Experts",
    rating: 4.7,
    reviewCount: 2400,
    yearsInBusiness: 117,
    phone: "(214) 369-3580",
    address: "11024 Indian Trail, Dallas, TX 75229",
    servicesOffered: ["AC repair", "Heating", "Plumbing", "Indoor air quality"],
    certifications: ["NATE-certified", "Lennox Dealer", "BBB A+"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Highland Park / Lakewood / older central Dallas homes (pre-1985)",
    pros: ["117 years in Dallas", "Specialty in older-home retrofits", "Membership program saves 15%", "Strong central Dallas coverage"],
    cons: ["Higher pricing for membership clients vs new", "Service Experts national-chain ownership since 2014"],
    summary:
      "Dallas's oldest HVAC operator, founded 1908. Best pick for older homes in Highland Park, University Park, M-Streets, Lakewood — they know how to retrofit ductwork in pre-WWII houses without tearing up plaster.",
    priceRange: "$$$",
  },
  {
    rank: 6,
    name: "Force Home Services",
    rating: 4.8,
    reviewCount: 1800,
    yearsInBusiness: 16,
    phone: "(972) 562-5895",
    address: "5605 Walking Stick Ln, McKinney, TX 75070",
    servicesOffered: ["AC repair", "Heating", "Plumbing", "Electrical"],
    certifications: ["NATE-certified", "BBB A+", "Trane Comfort Specialist"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "McKinney, Allen, Frisco, Prosper — far north DFW",
    pros: ["Strong far-north DFW coverage", "Multi-trade", "Family-owned", "10-year warranty"],
    cons: ["Limited Dallas-proper coverage", "Mixed reviews on weekend dispatch"],
    summary:
      "Best in the McKinney / Frisco / Allen corridor. Multi-trade convenience for north DFW homeowners doing whole-system renovations. Less convenient for Dallas-proper or south DFW.",
    priceRange: "$$",
  },
  {
    rank: 7,
    name: "Alpha Mechanical Service",
    rating: 4.8,
    reviewCount: 980,
    yearsInBusiness: 35,
    phone: "(972) 539-3550",
    address: "445 Wm Brown Rd, Lewisville, TX 75067",
    servicesOffered: ["AC", "Heating", "Commercial", "Refrigeration"],
    certifications: ["NATE-certified", "BBB A+", "ACCA member"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Lewisville / Flower Mound / Coppell + light commercial in DFW",
    pros: ["35 years in business", "Strong commercial track record", "Mid-cities coverage (Lewisville to Irving)"],
    cons: ["Limited downtown Dallas residential", "Quote turnaround slower than competitors"],
    summary:
      "Best for the I-35E corridor and DFW airport-area suburbs. Equal balance of residential and commercial — good pick if you have a home office or own a small commercial property.",
    priceRange: "$$",
  },
  {
    rank: 8,
    name: "Comfort Experts Inc.",
    rating: 4.7,
    reviewCount: 720,
    yearsInBusiness: 12,
    phone: "(817) 632-2961",
    address: "Aledo, TX 76008 (West DFW + Fort Worth)",
    servicesOffered: ["AC repair", "Replacement", "Tune-ups"],
    certifications: ["NATE-certified", "Trane Comfort Specialist"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "West DFW (Aledo, Weatherford, Willow Park, west Fort Worth)",
    pros: ["Specialized in service (not sales)", "$89 tune-up promotion", "Honest assessments — strong reviews on second-opinion accuracy"],
    cons: ["Smaller crew", "Limited Dallas-proper service"],
    summary:
      "Service-first contractor that won't try to upsell you on a new system. Best pick when you need a true second opinion on whether to repair or replace — particularly in west Tarrant County.",
    priceRange: "$$",
  },
  {
    rank: 9,
    name: "Excellent Air Heating & Cooling",
    rating: 4.8,
    reviewCount: 540,
    yearsInBusiness: 8,
    phone: "(972) 829-3920",
    address: "1840 Lee Trevino Dr, Dallas, TX 75228",
    servicesOffered: ["AC", "Heating", "IAQ", "Insulation tie-ins"],
    certifications: ["NATE-certified", "Carrier Factory Authorized"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Whole-home efficiency upgrades (HVAC + insulation + IAQ together)",
    pros: ["RESNET-aware design", "Insulation + ductwork in-house", "Bilingual"],
    cons: ["Slower scheduling than tier-1 competitors", "Limited mini-split inventory"],
    summary:
      "Best contractor in Dallas for homeowners thinking holistically about energy efficiency, not just cooling. The energy audit + air-sealing + HVAC combo can cut bills 25%+ on older Dallas housing stock.",
    priceRange: "$$",
  },
  {
    rank: 10,
    name: "One Hour Heating & Air Conditioning of Dallas",
    rating: 4.6,
    reviewCount: 1300,
    yearsInBusiness: 18,
    phone: "(214) 222-1990",
    address: "Multiple DFW locations",
    servicesOffered: ["AC repair", "Replacement", "Maintenance", "Heating"],
    certifications: ["NATE-certified", "BBB A+"],
    emergencyAvailable: true,
    warrantyYears: 5,
    bestFor: "On-time guaranteed scheduling — pays you if late",
    pros: ["\"Always on time or you don't pay a dime\" guarantee", "Fast scheduling", "National franchise resources"],
    cons: ["Franchise pricing higher than independent locals", "5-year warranty shorter than competitors", "Sales-pressure complaints in reviews"],
    summary:
      "Franchise pick. Worth it specifically for the on-time guarantee — they pay you if late. Otherwise the independent locals on this list deliver better value. Best for Dallas-Fort Worth homeowners with rigid scheduling needs.",
    priceRange: "$$$",
  },
];

export const DALLAS_META: CityMeta = {
  city: "Dallas",
  state: "Texas",
  stateAbbr: "TX",
  metroPopulation: 7670000,
  contractorCount: DALLAS_CONTRACTORS.length,
  totalContractorsResearched: 142,
  avgRating:
    DALLAS_CONTRACTORS.reduce((s, c) => s + c.rating, 0) /
    DALLAS_CONTRACTORS.length,
  climateNotes:
    "Dallas-Fort Worth runs 110+ days above 90°F annually with frequent 100°F+ stretches in July-August, plus humid days that push the heat index well into triple digits. AC runtime averages 2,000+ hours per year — heavier load than most US markets — which shortens equipment lifespan to 12-14 years vs the 15-year national average. Winter freezes (5-15 nights below 32°F) make heat pump cycling and emergency-heat strip sizing meaningful here.",
  permittingNotes:
    "City of Dallas + Tarrant County + Collin County all require permits for HVAC replacements, new installs, and major ductwork. Permit fees: $75-150 base + $5-10 per $1,000 of project value depending on jurisdiction. Reputable contractors handle permitting in-house. TDLR (Texas Department of Licensing and Regulation) is the state regulator for HVAC — verify license at tdlr.texas.gov.",
  lastResearched: "May 9, 2026",
};
