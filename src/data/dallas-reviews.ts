import type {
  VerifiedReview,
  MethodologyCriterion,
  TrustBadge,
  EditorialCredits,
  LatLng,
  BBox,
} from "./types";

// PLACEHOLDER VERIFIED REVIEWS — SAMPLE DATA
// Aaron is sourcing real verified Dallas-area homeowner reviews from
// HomeAdvisor / GBP. Until then these read as plausible Dallas neighborhoods
// + plausible repair scenarios, but should be replaced with real ones
// before publish (the /hvac/dallas page is noindex until real reviews land).

export const DALLAS_VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    authorInitials: "AW",
    authorName: "Aaron W.",
    neighborhood: "Arlington",
    rating: 5,
    date: "Apr 28, 2026",
    contractor: "Berkeys Air Conditioning",
    quote:
      "Sample review pending replacement with Aaron's actual Dallas-area homeowner quote.",
  },
  {
    authorInitials: "MJ",
    authorName: "Michael J.",
    neighborhood: "Lakewood",
    rating: 5,
    date: "Apr 21, 2026",
    contractor: "Strittmatter Plumbing, Heating, AC & Electric",
    quote:
      "Sample review pending replacement with verified review from BBB / HomeAdvisor / GBP.",
  },
  {
    authorInitials: "PR",
    authorName: "Priya R.",
    neighborhood: "Plano",
    rating: 5,
    date: "Apr 15, 2026",
    contractor: "TemperaturePro Dallas",
    quote:
      "Sample review pending replacement with verified review from BBB / HomeAdvisor / GBP.",
  },
  {
    authorInitials: "SK",
    authorName: "Steve K.",
    neighborhood: "Mansfield",
    rating: 4,
    date: "Apr 9, 2026",
    contractor: "Mansfield Heating & Air",
    quote:
      "Sample review pending replacement with verified review from BBB / HomeAdvisor / GBP.",
  },
  {
    authorInitials: "AL",
    authorName: "Amanda L.",
    neighborhood: "Highland Park",
    rating: 5,
    date: "Apr 3, 2026",
    contractor: "Levy & Son Service Experts",
    quote:
      "Sample review pending replacement with verified review from BBB / HomeAdvisor / GBP.",
  },
];

export const DALLAS_METHODOLOGY_CRITERIA: MethodologyCriterion[] = [
  { label: "NATE certified", weight: 20 },
  { label: "BBB A+ rating", weight: 15 },
  { label: "10+ year warranty", weight: 12 },
  { label: "24/7 emergency", weight: 10 },
  { label: "Transparent pricing", weight: 15 },
  { label: "TDLR license verified", weight: 10 },
  { label: "Low complaint rate", weight: 10 },
  { label: "5+ years in business", weight: 8 },
];

export const DALLAS_EDITORIAL_CREDITS: EditorialCredits = {
  // PLACEHOLDER — Aaron is providing real bio + photo for himself as the
  // primary Dallas author. Once real bio lands, replace these strings with
  // authoritative Aaron-verified content + drop a real headshot at
  // /public/photos/aaron-whittaker.jpg, then update /authors/aaron-whittaker
  // to be the primary author.
  author: {
    name: "Aaron Whittaker",
    title: "Founder + Dallas-area HVAC Editor",
    initials: "AW",
    bio: "Dallas-Fort Worth resident covering local HVAC contractors. Bio + LinkedIn details pending.",
  },
  editor: {
    name: "Lena Park",
    title: "Editor-in-Chief",
    initials: "LP",
    bio: "Editorial standards + quarterly audit oversight.",
  },
  factChecker: {
    name: "[NATE-certified Tech — pending]",
    title: "Fact Checker",
    initials: "NT",
    bio: "Aaron is sourcing a NATE-certified DFW technician for fact-checking. Until then this slot is held.",
  },
};

export const DALLAS_TRUST_BADGES: TrustBadge[] = [
  { label: "Independent research", sublabel: "No paid placements" },
  { label: "142 contractors reviewed", sublabel: "10 recommended" },
  { label: "DFW-local editor", sublabel: "Aaron Whittaker" },
  { label: "Quarterly re-audit", sublabel: "Last May 9, 2026" },
  { label: "TDLR license verified", sublabel: "All 10 contractors" },
];

// Approximate DFW lat/lng spread — Aaron can refine
export const DALLAS_CONTRACTOR_COORDS: Record<number, LatLng> = {
  1: { lat: 32.911, lng: -96.638 },  // Berkeys (Garland)
  2: { lat: 33.040, lng: -96.795 },  // Strittmatter (Plano)
  3: { lat: 32.880, lng: -96.876 },  // TemperaturePro (NW Dallas)
  4: { lat: 32.563, lng: -97.142 },  // Mansfield Heating
  5: { lat: 32.880, lng: -96.876 },  // Levy & Son (NW Dallas)
  6: { lat: 33.197, lng: -96.687 },  // Force (McKinney)
  7: { lat: 33.046, lng: -96.994 },  // Alpha Mechanical (Lewisville)
  8: { lat: 32.696, lng: -97.602 },  // Comfort Experts (Aledo)
  9: { lat: 32.812, lng: -96.706 },  // Excellent Air (East Dallas)
  10: { lat: 32.776, lng: -96.797 }, // One Hour (multiple, Dallas centroid)
};

export const DALLAS_BBOX: BBox = {
  minLat: 32.55,
  maxLat: 33.25,
  minLng: -97.65,
  maxLng: -96.55,
};
