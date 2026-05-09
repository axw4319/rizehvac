import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CostGuidePage } from "@/components/v2/CostGuidePage";
import { getCity, listCitySlugs } from "@/data/cityRegistry";
import { isCityNoindex } from "@/data/cityIndexability";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/schema";

type Params = Promise<{ city: string }>;

export function generateStaticParams() {
  return listCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const title = `HVAC cost in ${city.meta.city}, ${city.meta.stateAbbr}: 2026 prices and rebates`;
  const description = `Real ${city.meta.city} HVAC pricing benchmarks, ${city.rebates.length} stackable rebate programs, and what's worth paying for. Updated quarterly.`;
  const noindex = isCityNoindex(slug);
  return {
    title,
    description,
    alternates: { canonical: `/hvac-cost/${slug}` },
    openGraph: { title, description, url: `/hvac-cost/${slug}`, type: "article" },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function CostGuideCityPage({ params }: { params: Params }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const faq = generateFAQPageSchema(city.costFaqs);
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rizehvac.com" },
    { name: "HVAC Cost Guides", url: "https://rizehvac.com/hvac-cost" },
    { name: city.meta.city, url: `https://rizehvac.com/hvac-cost/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <CostGuidePage city={city} />
    </>
  );
}
