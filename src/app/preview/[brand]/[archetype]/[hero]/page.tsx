import { notFound } from "next/navigation";
import {
  type BrandId,
  BRANDS,
} from "@/lib/brands";
import {
  type ArchetypeId,
  type HeroId,
  ARCHETYPES,
  HEROES,
  VARIANT_COMBOS,
} from "@/lib/variants";
import { PreviewRenderer } from "@/components/PreviewRenderer";

export function generateStaticParams() {
  return VARIANT_COMBOS.map((c) => ({
    brand: c.brand,
    archetype: c.archetype,
    hero: c.hero,
  }));
}

type PageParams = Promise<{
  brand: string;
  archetype: string;
  hero: string;
}>;

function isBrandId(v: string): v is BrandId {
  return v in BRANDS;
}
function isArchetype(v: string): v is ArchetypeId {
  return (ARCHETYPES as readonly string[]).includes(v);
}
function isHero(v: string): v is HeroId {
  return (HEROES as readonly string[]).includes(v);
}

export default async function VariantPage({ params }: { params: PageParams }) {
  const { brand, archetype, hero } = await params;
  if (!isBrandId(brand) || !isArchetype(archetype) || !isHero(hero)) {
    notFound();
  }
  return <PreviewRenderer brand={brand} archetype={archetype} hero={hero} />;
}
