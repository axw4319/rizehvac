import type { CityData } from "./types";
import { DALLAS_CONTRACTORS, DALLAS_META } from "./dallas-contractors";
import { DALLAS_COST_DATA, DALLAS_COST_FAQS, DALLAS_REBATE_DATA } from "./dallas-cost";
import {
  DALLAS_VERIFIED_REVIEWS,
  DALLAS_METHODOLOGY_CRITERIA,
  DALLAS_TRUST_BADGES,
  DALLAS_EDITORIAL_CREDITS,
  DALLAS_CONTRACTOR_COORDS,
  DALLAS_BBOX,
} from "./dallas-reviews";

export const DALLAS_CITY: CityData = {
  slug: "dallas",
  meta: DALLAS_META,
  contractors: DALLAS_CONTRACTORS,
  contractorCoords: DALLAS_CONTRACTOR_COORDS,
  bbox: DALLAS_BBOX,
  costData: DALLAS_COST_DATA,
  costFaqs: DALLAS_COST_FAQS,
  rebates: DALLAS_REBATE_DATA,
  verifiedReviews: DALLAS_VERIFIED_REVIEWS,
  methodology: DALLAS_METHODOLOGY_CRITERIA,
  trustBadges: DALLAS_TRUST_BADGES,
  credits: DALLAS_EDITORIAL_CREDITS,
  heroPhotoSlug: "dallas-hero",
  phone: "(214) 414-2500",
};
