import { type BrandId } from "./brands";

export const ARCHETYPES = ["city", "service-city", "cost"] as const;
export type ArchetypeId = (typeof ARCHETYPES)[number];

export const HEROES = ["zip-only", "multistep", "editorial-sticky"] as const;
export type HeroId = (typeof HEROES)[number];

export const ARCHETYPE_META: Record<
  ArchetypeId,
  { name: string; route: string; description: string }
> = {
  city: {
    name: "City directory",
    route: "/hvac/tucson/",
    description:
      "Top-10 ranked list. Targets 'best hvac tucson', 'hvac tucson' (high commercial intent + LLM citation surface).",
  },
  "service-city": {
    name: "Service + city",
    route: "/ac-repair/tucson/",
    description:
      "Service-scoped subset with repair-focused content. Targets 'ac repair tucson' (highest volume + transactional intent).",
  },
  cost: {
    name: "Cost guide",
    route: "/hvac-cost/tucson/",
    description:
      "Citation-bait cost reference. Targets 'hvac cost tucson', 'ac repair cost' (LLM/AI Overview surface — Forbes/Angi compete here).",
  },
};

export const HERO_META: Record<
  HeroId,
  { name: string; description: string; pros: string[]; cons: string[] }
> = {
  "zip-only": {
    name: "ZIP-only",
    description: "EnergySage-validated pattern. Single field, instant trust badges.",
    pros: ["Lowest friction", "Validated by EnergySage", "Best for repeat visitors"],
    cons: ["Fewer qualifying signals", "Lower lead quality"],
  },
  multistep: {
    name: "Multistep",
    description: "Big-button issue selector first, then ZIP. Industry data: +86% over single-step.",
    pros: ["Highest CRO data backing", "Qualifies leads", "Higher contractor payout"],
    cons: ["More work to complete", "May fatigue mobile users"],
  },
  "editorial-sticky": {
    name: "Editorial + sticky form",
    description: "Magazine-style hero with sidebar form that follows on scroll.",
    pros: ["Highest trust signal", "Wins on competitive head terms", "Strong for LLM citations"],
    cons: ["More content cost per page", "Slower to scan"],
  },
};

export const VARIANT_COMBOS: {
  brand: BrandId;
  archetype: ArchetypeId;
  hero: HeroId;
}[] = (["editorial", "utility"] as BrandId[]).flatMap((brand) =>
  ARCHETYPES.flatMap((archetype) =>
    HEROES.map((hero) => ({ brand, archetype, hero }))
  )
);
