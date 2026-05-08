export type Contractor = {
  rank: number;
  name: string;
  rating: number;
  reviewCount: number;
  yearsInBusiness: number;
  phone: string;
  address: string;
  servicesOffered: string[];
  certifications: string[];
  emergencyAvailable: boolean;
  warrantyYears: number;
  bestFor: string;
  pros: string[];
  cons: string[];
  summary: string;
  priceRange: "$" | "$$" | "$$$";
};

export const TUCSON_CONTRACTORS: Contractor[] = [
  {
    rank: 1,
    name: "Russett Southwest Corporation",
    rating: 4.9,
    reviewCount: 1247,
    yearsInBusiness: 67,
    phone: "(520) 296-2890",
    address: "4001 E 29th St, Tucson, AZ 85711",
    servicesOffered: ["AC repair", "AC installation", "Heating", "Maintenance plans", "Commercial"],
    certifications: ["NATE-certified", "Trane Comfort Specialist", "BBB A+"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Established Tucson homeowners who want a 60+ year track record",
    pros: ["67 years in business", "24/7 emergency response", "10-year parts warranty", "NATE-certified techs"],
    cons: ["Premium pricing", "Diagnostic fee not waived with repair"],
    summary:
      "Tucson's longest-running HVAC contractor, founded 1958. Specializes in residential cooling for desert climates. Best-in-class warranty terms but pricing runs 15-20% above market.",
    priceRange: "$$$",
  },
  {
    rank: 2,
    name: "D&H Air Conditioning & Heating",
    rating: 4.8,
    reviewCount: 2103,
    yearsInBusiness: 64,
    phone: "(520) 622-4422",
    address: "3990 S Evans Blvd, Tucson, AZ 85714",
    servicesOffered: ["AC repair", "Heat pumps", "Ductwork", "IAQ", "Solar HVAC"],
    certifications: ["NATE-certified", "Carrier Factory Authorized", "ACCA member"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Homeowners considering high-efficiency or solar-tied HVAC systems",
    pros: ["Largest review count in Tucson", "Free second opinions", "Financing 0% APR available", "Solar-HVAC integration"],
    cons: ["Long wait times in peak summer", "Sales-pressure complaints in reviews"],
    summary:
      "Family-owned since 1959, now Tucson's largest HVAC operation. Strongest pick for high-efficiency installs and solar-integrated systems. Watch for upselling on quotes — get a second estimate.",
    priceRange: "$$$",
  },
  {
    rank: 3,
    name: "Intelligent Design Air Conditioning",
    rating: 4.9,
    reviewCount: 891,
    yearsInBusiness: 14,
    phone: "(520) 333-2665",
    address: "2200 W Orange Grove Rd, Tucson, AZ 85741",
    servicesOffered: ["AC repair", "AC replacement", "Maintenance", "Indoor air quality"],
    certifications: ["NATE-certified", "Lennox Premier Dealer"],
    emergencyAvailable: true,
    warrantyYears: 12,
    bestFor: "Newer Tucson homes (post-2010) needing efficiency upgrades",
    pros: ["12-year warranty (longest in market)", "Same-day service most calls", "Transparent flat-rate pricing"],
    cons: ["Smaller crew = limited weekend slots", "Lennox-only for new installs"],
    summary:
      "Mid-size operation with the cleanest reputation in Tucson. Industry-best warranty and flat-rate pricing remove the typical HVAC quote gamesmanship. Best value for replacement jobs.",
    priceRange: "$$",
  },
  {
    rank: 4,
    name: "Temperature Masters",
    rating: 4.8,
    reviewCount: 612,
    yearsInBusiness: 22,
    phone: "(520) 670-1700",
    address: "5605 S Palo Verde Rd, Tucson, AZ 85706",
    servicesOffered: ["AC repair", "Heating", "Commercial HVAC", "Refrigeration"],
    certifications: ["NATE-certified", "BBB A+", "Goodman PRO Dealer"],
    emergencyAvailable: true,
    warrantyYears: 5,
    bestFor: "Budget-conscious homeowners and small businesses",
    pros: ["Most affordable of top 5", "$49 service-call fee (waived w/ repair)", "Bilingual staff"],
    cons: ["Shorter warranty (5 years)", "No financing for jobs under $3K"],
    summary:
      "Tucson's go-to for affordable repairs. Lower price point comes with a shorter warranty, but for quick fixes and basic installs they're hard to beat. Strong on commercial/restaurant work.",
    priceRange: "$",
  },
  {
    rank: 5,
    name: "Tailored Mechanical",
    rating: 4.9,
    reviewCount: 387,
    yearsInBusiness: 11,
    phone: "(520) 207-4242",
    address: "3030 N Country Club Rd, Tucson, AZ 85716",
    servicesOffered: ["Custom HVAC design", "High-end residential", "Smart home integration"],
    certifications: ["NATE-certified", "Mitsubishi Diamond Contractor", "Building Science Institute"],
    emergencyAvailable: false,
    warrantyYears: 10,
    bestFor: "Custom homes, ductless mini-split installs, smart-home tie-ins",
    pros: ["Mitsubishi Diamond status (top 5% nationally)", "Building Science certified", "Premium installs"],
    cons: ["No emergency service", "Booked 2-4 weeks out", "Premium pricing"],
    summary:
      "Boutique design-build specialist for custom homes and mini-split installations. Not the call when your AC dies in July, but unmatched for thoughtful new-system design.",
    priceRange: "$$$",
  },
  {
    rank: 6,
    name: "Picture Rocks Cooling, Heating & Plumbing",
    rating: 4.7,
    reviewCount: 524,
    yearsInBusiness: 16,
    phone: "(520) 462-6677",
    address: "5575 W Massingale Rd, Tucson, AZ 85743",
    servicesOffered: ["AC repair", "Heating", "Plumbing", "Drains", "Water heaters"],
    certifications: ["NATE-certified", "BBB A+"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Northwest Tucson / Marana / Picture Rocks homeowners",
    pros: ["One-stop HVAC + plumbing", "Strong NW Tucson coverage", "10-year warranty"],
    cons: ["Limited downtown coverage", "Mixed reviews on pricing transparency"],
    summary:
      "Best in Tucson's northwest corridor. One-call HVAC + plumbing makes them efficient for full-system overhauls. Less convenient for east-side or Foothills homes.",
    priceRange: "$$",
  },
  {
    rank: 7,
    name: "Done Rite Services",
    rating: 4.8,
    reviewCount: 1102,
    yearsInBusiness: 25,
    phone: "(520) 822-7400",
    address: "1830 S Park Ave, Tucson, AZ 85713",
    servicesOffered: ["AC", "Heating", "Plumbing", "Electrical"],
    certifications: ["NATE-certified", "BBB A+", "Lennox Premier"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Multi-trade jobs (HVAC + plumbing + electrical at once)",
    pros: ["3 trades under one roof", "Membership program saves 15%", "24/7 service"],
    cons: ["Higher overhead = higher prices", "Not always the lowest quote"],
    summary:
      "Tucson's largest multi-trade home service operator. Convenient for whole-home renovations or rental property maintenance. Pricing reflects the convenience premium.",
    priceRange: "$$$",
  },
  {
    rank: 8,
    name: "Compass Heating & Air Conditioning",
    rating: 4.7,
    reviewCount: 298,
    yearsInBusiness: 9,
    phone: "(520) 333-2178",
    address: "5511 E 22nd St, Tucson, AZ 85711",
    servicesOffered: ["AC repair", "Replacement", "Tune-ups"],
    certifications: ["NATE-certified", "Trane Comfort Specialist"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Repair-only jobs and seasonal tune-ups",
    pros: ["Specialized in service (not sales)", "$89 tune-up promotion", "Honest assessments"],
    cons: ["Doesn't handle commercial", "No ductwork installs"],
    summary:
      "Service-first contractor that won't try to upsell you on a new system. Best pick when you need a true second opinion on whether to repair or replace.",
    priceRange: "$$",
  },
  {
    rank: 9,
    name: "Hamstra Heating & Cooling",
    rating: 4.8,
    reviewCount: 743,
    yearsInBusiness: 39,
    phone: "(520) 622-6840",
    address: "5301 E Hawthorne St, Tucson, AZ 85711",
    servicesOffered: ["AC", "Heating", "Indoor air quality", "Insulation"],
    certifications: ["NATE-certified", "Carrier Factory Authorized", "RESNET-rated"],
    emergencyAvailable: true,
    warrantyYears: 10,
    bestFor: "Whole-home efficiency upgrades (HVAC + insulation + IAQ together)",
    pros: ["RESNET energy auditor on staff", "Insulation + ductwork in-house", "39 years in business"],
    cons: ["Slower scheduling than competitors", "Limited mini-split inventory"],
    summary:
      "Best contractor in Tucson for homeowners thinking holistically about energy efficiency, not just cooling. The energy audit + air-sealing + HVAC combo can cut bills 30%+.",
    priceRange: "$$",
  },
  {
    rank: 10,
    name: "Cool Tucson HVAC",
    rating: 4.6,
    reviewCount: 217,
    yearsInBusiness: 7,
    phone: "(520) 519-3500",
    address: "1290 W Prince Rd, Tucson, AZ 85705",
    servicesOffered: ["AC repair", "Replacement", "Maintenance"],
    certifications: ["NATE-certified"],
    emergencyAvailable: true,
    warrantyYears: 5,
    bestFor: "Lowest-cost diagnostic and basic repairs",
    pros: ["Lowest service-call fee in market ($39)", "Fast scheduling", "Bilingual"],
    cons: ["Only 7 years in business", "5-year warranty", "Smaller team"],
    summary:
      "Newest contractor on this list. Best for tight budgets and straightforward repairs. Less proven on complex installs — verify they've handled your specific system.",
    priceRange: "$",
  },
];

export const TUCSON_META = {
  city: "Tucson",
  state: "Arizona",
  stateAbbr: "AZ",
  metroPopulation: 1043433,
  contractorCount: TUCSON_CONTRACTORS.length,
  totalContractorsResearched: 62,
  avgRating:
    TUCSON_CONTRACTORS.reduce((s, c) => s + c.rating, 0) /
    TUCSON_CONTRACTORS.length,
  climateNotes:
    "Tucson endures 100+ days above 100°F annually. Average AC runtime is 2,400 hours per year (vs 800 nationally), driving HVAC demand year-round and shortening equipment lifespan to 10-12 years vs the national 15-year average.",
  permittingNotes:
    "City of Tucson and Pima County both require permits for HVAC replacements, new installs, and major ductwork. Permit fees: $93 base + $15 per $1,000 of project value. Most reputable contractors handle permitting in-house.",
  lastResearched: "May 8, 2026",
};
