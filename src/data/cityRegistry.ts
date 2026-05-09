import type { CityData } from "./types";
import { DALLAS_CITY } from "./dallas";

// Registered (live, indexable) cities. As Aaron + agents land verified data
// for new cities, add them here one at a time per the waves rollout rule
// (feedback_helpful_content_waves_rollout.md).
//
// The /hvac/[city] dynamic route's generateStaticParams reads from this
// registry, and so does sitemap.ts — unregistered cities don't get crawl
// surface area.
const REGISTRY: Record<string, CityData> = {
  dallas: DALLAS_CITY,
};

export function listCitySlugs(): string[] {
  return Object.keys(REGISTRY);
}

export function getCity(slug: string): CityData | null {
  return REGISTRY[slug] ?? null;
}

export function listCities(): CityData[] {
  return Object.values(REGISTRY);
}
