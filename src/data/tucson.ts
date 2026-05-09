import type { CityData } from "./types";
import { TUCSON_CONTRACTORS, TUCSON_META } from "./tucson-contractors";
import { TUCSON_COST_DATA, TUCSON_COST_FAQS, TUCSON_REBATE_DATA } from "./tucson-cost";
import {
  TUCSON_VERIFIED_REVIEWS,
  TUCSON_METHODOLOGY_CRITERIA,
  TUCSON_TRUST_BADGES,
  TUCSON_EDITORIAL_CREDITS,
  TUCSON_CONTRACTOR_COORDS,
  TUCSON_BBOX,
} from "./tucson-reviews";

export const TUCSON_CITY: CityData = {
  slug: "tucson",
  meta: TUCSON_META,
  contractors: TUCSON_CONTRACTORS,
  contractorCoords: TUCSON_CONTRACTOR_COORDS,
  bbox: TUCSON_BBOX,
  costData: TUCSON_COST_DATA,
  costFaqs: TUCSON_COST_FAQS,
  rebates: TUCSON_REBATE_DATA,
  verifiedReviews: TUCSON_VERIFIED_REVIEWS,
  methodology: TUCSON_METHODOLOGY_CRITERIA,
  trustBadges: TUCSON_TRUST_BADGES,
  credits: TUCSON_EDITORIAL_CREDITS,
  heroPhotoSlug: "tucson-hero",
  phone: "(520) 207-2500",
};
