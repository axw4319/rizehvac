import type { CityData } from "./types";
import { TUCSON_CITY } from "./tucson";

// Each city's CityData export. Add entries here as Agent 1 lands them.
// Until each city's data file exists, only Tucson is publishable.
const REGISTRY: Record<string, CityData> = {
  tucson: TUCSON_CITY,
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
