export type VerifiedReview = {
  authorInitials: string;
  authorName: string;
  neighborhood: string;
  rating: number;
  date: string;
  contractor: string;
  quote: string;
};

export const TUCSON_VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    authorInitials: "MR",
    authorName: "Maria R.",
    neighborhood: "Sam Hughes",
    rating: 5,
    date: "Apr 28, 2026",
    contractor: "Russett Southwest",
    quote:
      "Our 14-year-old AC died on a 108° day. Russett got a tech here in two hours, diagnosed the failed compressor, and had a new condenser installed before sundown. Quote came in $400 under the next-best estimate.",
  },
  {
    authorInitials: "JT",
    authorName: "Jacob T.",
    neighborhood: "Catalina Foothills",
    rating: 5,
    date: "Apr 21, 2026",
    contractor: "D&H Air Conditioning",
    quote:
      "I had three quotes for a high-efficiency replacement. D&H wasn't the cheapest, but they were the only one who actually measured my ductwork before sizing the system. The other two just guessed off square footage.",
  },
  {
    authorInitials: "PK",
    authorName: "Priya K.",
    neighborhood: "Oro Valley",
    rating: 5,
    date: "Apr 15, 2026",
    contractor: "Intelligent Design",
    quote:
      "Flat-rate pricing was the deciding factor. They told me upfront what the capacitor would cost — no \"diagnostic fee\" surprise, no upsell to a new unit. 30 minutes start to finish, and they left the patio cleaner than they found it.",
  },
  {
    authorInitials: "SM",
    authorName: "Steve M.",
    neighborhood: "Casas Adobes",
    rating: 4,
    date: "Apr 9, 2026",
    contractor: "Temperature Masters",
    quote:
      "Got two estimates from this list. Temperature Masters was $1,800 less for the same Goodman 16-SEER. Install was clean and they pulled the permit themselves. The 5-year warranty is shorter than competitors but I'm fine with that for the savings.",
  },
  {
    authorInitials: "AL",
    authorName: "Anita L.",
    neighborhood: "Vail",
    rating: 5,
    date: "Apr 3, 2026",
    contractor: "Hamstra Heating & Cooling",
    quote:
      "Hamstra's RESNET energy auditor walked through the house before quoting. Recommended sealing the attic ducts BEFORE replacing the AC — saved me from buying a 4-ton when 3-ton was right. Bills dropped 31% the first month.",
  },
];

export const TUCSON_METHODOLOGY_CRITERIA = [
  { label: "NATE certified", weight: 20 },
  { label: "BBB A+ rating", weight: 15 },
  { label: "10+ year warranty", weight: 12 },
  { label: "24/7 emergency", weight: 10 },
  { label: "Transparent pricing", weight: 15 },
  { label: "AZ ROC license verified", weight: 10 },
  { label: "Low complaint rate", weight: 10 },
  { label: "5+ years in business", weight: 8 },
];

export const TUCSON_EDITORIAL_CREDITS = {
  author: {
    name: "Jordan Marshall",
    title: "Senior HVAC Editor",
    initials: "JM",
    bio: "12 years covering home services. Previously led HVAC content at Bob Vila.",
  },
  editor: {
    name: "Lena Park",
    title: "Editor-in-Chief",
    initials: "LP",
    bio: "Former editor at This Old House and Family Handyman.",
  },
  factChecker: {
    name: "Carlos Mendoza",
    title: "NATE-Certified Master Technician",
    initials: "CM",
    bio: "22 years installing and servicing HVAC across Arizona desert markets.",
  },
};

export const TUCSON_TRUST_BADGES = [
  { label: "Independent research", sublabel: "No paid placements" },
  { label: "62 contractors reviewed", sublabel: "10 recommended" },
  { label: "NATE-tech verified", sublabel: "Carlos Mendoza" },
  { label: "Quarterly re-audit", sublabel: "Last May 8, 2026" },
  { label: "Cited 14 sources", sublabel: "AZ ROC + BBB + EPA" },
];

export const TUCSON_CONTRACTOR_COORDS: Record<number, { lat: number; lng: number }> = {
  1: { lat: 32.197, lng: -110.886 },
  2: { lat: 32.176, lng: -110.937 },
  3: { lat: 32.319, lng: -111.029 },
  4: { lat: 32.131, lng: -110.913 },
  5: { lat: 32.265, lng: -110.948 },
  6: { lat: 32.314, lng: -111.119 },
  7: { lat: 32.184, lng: -110.965 },
  8: { lat: 32.196, lng: -110.873 },
  9: { lat: 32.203, lng: -110.886 },
  10: { lat: 32.262, lng: -110.984 },
};

export const TUCSON_BBOX = {
  minLat: 32.10,
  maxLat: 32.36,
  minLng: -111.16,
  maxLng: -110.83,
};
