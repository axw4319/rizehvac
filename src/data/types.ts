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

export type CityMeta = {
  city: string;
  state: string;
  stateAbbr: string;
  metroPopulation: number;
  contractorCount: number;
  totalContractorsResearched: number;
  avgRating: number;
  climateNotes: string;
  permittingNotes: string;
  lastResearched: string;
};

export type CostRow = {
  service: string;
  lowEnd: number;
  highEnd: number;
  average: number;
  notes: string;
};

export type CostFAQ = { q: string; a: string };

export type RebateProgram = {
  program: string;
  amount: string;
  eligibility: string;
  expires: string;
  source: string;
};

export type VerifiedReview = {
  authorInitials: string;
  authorName: string;
  neighborhood: string;
  rating: number;
  date: string;
  contractor: string;
  quote: string;
};

export type MethodologyCriterion = { label: string; weight: number };
export type TrustBadge = { label: string; sublabel: string };
export type EditorialPerson = { name: string; title: string; initials: string; bio: string };
export type EditorialCredits = {
  author: EditorialPerson;
  editor: EditorialPerson;
  factChecker: EditorialPerson;
};
export type LatLng = { lat: number; lng: number };
export type BBox = {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
};

export type CityData = {
  slug: string;
  meta: CityMeta;
  contractors: Contractor[];
  contractorCoords: Record<number, LatLng>;
  bbox: BBox;
  costData: CostRow[];
  costFaqs: CostFAQ[];
  rebates: RebateProgram[];
  verifiedReviews: VerifiedReview[];
  methodology: MethodologyCriterion[];
  trustBadges: TrustBadge[];
  credits: EditorialCredits;
  heroPhotoSlug: string;
  phone: string;
};
