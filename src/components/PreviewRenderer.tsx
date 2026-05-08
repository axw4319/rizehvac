import { type BrandId, BRANDS } from "@/lib/brands";
import { type ArchetypeId, type HeroId } from "@/lib/variants";
import { BrandShell } from "@/components/brands/BrandShell";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { HeroZipOnly } from "@/components/heroes/HeroZipOnly";
import { HeroMultistep } from "@/components/heroes/HeroMultistep";
import { HeroEditorialSticky } from "@/components/heroes/HeroEditorialSticky";
import { CityDirectoryBody } from "@/components/archetypes/CityDirectoryBody";
import { ServiceCityBody } from "@/components/archetypes/ServiceCityBody";
import { CostGuideBody } from "@/components/archetypes/CostGuideBody";

const HEADLINES: Record<ArchetypeId, { headline: string; subhead: string }> = {
  city: {
    headline: "The 10 best HVAC contractors in Tucson",
    subhead:
      "We compared 62 Tucson HVAC contractors against eight criteria — NATE certifications, warranty terms, BBB ratings, and pricing transparency. These 10 earned our recommendation.",
  },
  "service-city": {
    headline: "AC repair in Tucson: who to call when your unit fails",
    subhead:
      "Tucson AC units run 2,400 hours per year and fail in predictable ways. Here's the 5 contractors we'd call — ranked by speed, transparency, and repair-only specialization.",
  },
  cost: {
    headline: "How much does HVAC cost in Tucson? 2026 prices, rebates, and what to budget",
    subhead:
      "Based on 480 actual installations across 2026. We track rebate stack-ups, transparent pricing benchmarks, and where Tucson HVAC differs from the rest of the country.",
  },
};

export function PreviewRenderer({
  brand: brandId,
  archetype,
  hero,
}: {
  brand: BrandId;
  archetype: ArchetypeId;
  hero: HeroId;
}) {
  const brand = BRANDS[brandId];
  const { headline, subhead } = HEADLINES[archetype];

  const HeroComponent =
    hero === "zip-only"
      ? HeroZipOnly
      : hero === "multistep"
        ? HeroMultistep
        : HeroEditorialSticky;

  const BodyComponent =
    archetype === "city"
      ? CityDirectoryBody
      : archetype === "service-city"
        ? ServiceCityBody
        : CostGuideBody;

  return (
    <BrandShell brand={brand}>
      <SiteHeader brand={brand} />
      <HeroComponent brand={brand} headline={headline} subhead={subhead} />
      <BodyComponent brand={brand} />
      <SiteFooter brand={brand} />
    </BrandShell>
  );
}
