// Cities not yet verified by editorial team get noindex'd until ready.
// When Aaron approves the contractor list + author bio + reviews for a city,
// remove the slug from this set.
export const NOINDEX_CITIES = new Set<string>([
  "dallas", // pending: Aaron's bio + photo, contractor verification, real verified reviews, NATE-tech fact-checker
]);

export function isCityNoindex(slug: string): boolean {
  return NOINDEX_CITIES.has(slug);
}
