import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { V2EditorialPage } from "@/components/v2/V2EditorialPage";
import { getCity, listCitySlugs } from "@/data/cityRegistry";
import { isCityNoindex } from "@/data/cityIndexability";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateItemListSchema,
  generateSpeakableSchema,
} from "@/lib/schema";

type Params = Promise<{ city: string }>;

export function generateStaticParams() {
  return listCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const title = `Best HVAC contractors in ${city.meta.city}, ${city.meta.stateAbbr}`;
  const description = `${city.meta.totalContractorsResearched} ${city.meta.city} HVAC contractors reviewed, ${city.contractors.length} recommended. Real reviews, transparent pricing, NATE-certified. Updated ${city.meta.lastResearched}.`;
  const noindex = isCityNoindex(slug);
  return {
    title,
    description,
    alternates: { canonical: `/hvac/${slug}` },
    openGraph: { title, description, url: `/hvac/${slug}`, type: "article" },
    twitter: { card: "summary_large_image", title, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function CityPage({ params }: { params: Params }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const itemList = generateItemListSchema(city.contractors, city.meta.city, {
    state: city.meta.stateAbbr,
    pageUrl: `https://rizehvac.com/hvac/${slug}`,
  });
  const faq = generateFAQPageSchema(city.costFaqs.slice(0, 6));
  const speakable = generateSpeakableSchema(`https://rizehvac.com/hvac/${slug}`);
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rizehvac.com" },
    { name: city.meta.state, url: `https://rizehvac.com/hvac/${slug}` },
    { name: city.meta.city, url: `https://rizehvac.com/hvac/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }}
      />
      <V2EditorialPage city={city} />
    </>
  );
}
