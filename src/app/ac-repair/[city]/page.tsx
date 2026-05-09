import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceCityPage } from "@/components/v2/ServiceCityPage";
import { getCity, listCitySlugs } from "@/data/cityRegistry";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateItemListSchema,
} from "@/lib/schema";

type Params = Promise<{ city: string }>;

export function generateStaticParams() {
  return listCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const title = `AC repair in ${city.meta.city}, ${city.meta.stateAbbr}: top 5 same-day specialists`;
  const description = `Same-day AC repair in ${city.meta.city}. Top 5 NATE-certified contractors ranked by speed, transparency, and repair specialization. ${city.meta.totalContractorsResearched} researched.`;
  return {
    title,
    description,
    alternates: { canonical: `/ac-repair/${slug}` },
    openGraph: { title, description, url: `/ac-repair/${slug}`, type: "article" },
  };
}

export default async function ACRepairCityPage({ params }: { params: Params }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const top5 = city.contractors.slice(0, 5);
  const itemList = generateItemListSchema(top5, city.meta.city, {
    state: city.meta.stateAbbr,
    pageUrl: `https://rizehvac.com/ac-repair/${slug}`,
  });
  const faq = generateFAQPageSchema(city.costFaqs.slice(0, 5));
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "https://rizehvac.com" },
    { name: "AC Repair", url: "https://rizehvac.com/ac-repair" },
    { name: city.meta.city, url: `https://rizehvac.com/ac-repair/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServiceCityPage city={city} />
    </>
  );
}
