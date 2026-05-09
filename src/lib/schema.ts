/**
 * JSON-LD schema generators for rizehvac.
 *
 * All helpers return plain objects that can be JSON.stringify'd into a
 * <script type="application/ld+json"> tag. They never embed wrapper
 * <script> markup — that's the page's responsibility.
 *
 * Wiring helpers into pages is intentionally NOT done here.
 */

import type { Contractor } from "@/data/tucson-contractors";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rizehvac.com";

const ORG_NAME = "rizehvac";

// -- shared helpers -------------------------------------------------

function citySlug(city: string): string {
  return city
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function priceRangeFor(c: Pick<Contractor, "priceRange">): "$" | "$$" | "$$$" | undefined {
  return c.priceRange;
}

// -- LocalBusiness --------------------------------------------------

export type LocalBusinessLike = {
  name: string;
  rating?: number;
  reviewCount?: number;
  phone?: string;
  address?: string;
  priceRange?: "$" | "$$" | "$$$";
  url?: string;
  servicesOffered?: string[];
};

export function generateLocalBusinessSchema(
  contractor: LocalBusinessLike,
  opts?: { city?: string; state?: string }
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: contractor.name,
  };

  if (contractor.url) schema.url = contractor.url;
  if (contractor.phone) schema.telephone = contractor.phone;
  if (contractor.priceRange) schema.priceRange = contractor.priceRange;

  if (contractor.address) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: contractor.address,
      ...(opts?.city ? { addressLocality: opts.city } : {}),
      ...(opts?.state ? { addressRegion: opts.state } : {}),
      addressCountry: "US",
    };
  }

  if (
    typeof contractor.rating === "number" &&
    typeof contractor.reviewCount === "number" &&
    contractor.reviewCount > 0
  ) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: contractor.rating,
      reviewCount: contractor.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  if (contractor.servicesOffered && contractor.servicesOffered.length > 0) {
    schema.makesOffer = contractor.servicesOffered.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    }));
  }

  return schema;
}

// -- ItemList of contractors ---------------------------------------

export function generateItemListSchema(
  contractors: ReadonlyArray<
    Pick<
      Contractor,
      | "rank"
      | "name"
      | "rating"
      | "reviewCount"
      | "phone"
      | "address"
      | "priceRange"
      | "servicesOffered"
    >
  >,
  city: string,
  opts?: { state?: string; pageUrl?: string }
): Record<string, unknown> {
  const slug = citySlug(city);
  const pageUrl = opts?.pageUrl ?? `${SITE_URL}/hvac/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Top HVAC contractors in ${city}`,
    url: pageUrl,
    numberOfItems: contractors.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: [...contractors]
      .sort((a, b) => a.rank - b.rank)
      .map((c) => ({
        "@type": "ListItem",
        position: c.rank,
        item: generateLocalBusinessSchema(
          {
            name: c.name,
            rating: c.rating,
            reviewCount: c.reviewCount,
            phone: c.phone,
            address: c.address,
            priceRange: priceRangeFor(c),
            servicesOffered: c.servicesOffered,
          },
          { city, state: opts?.state }
        ),
      })),
  };
}

// -- FAQPage --------------------------------------------------------

export type FAQ = { q: string; a: string };

export function generateFAQPageSchema(
  faqs: ReadonlyArray<FAQ>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

// -- BreadcrumbList -------------------------------------------------

export type BreadcrumbItem = { name: string; url: string };

export function generateBreadcrumbSchema(
  items: ReadonlyArray<BreadcrumbItem>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

// -- Article (for editorial pages like /methodology, /about) -------

export type ArticleInput = {
  headline: string;
  description: string;
  pageUrl: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
};

export function generateArticleSchema(a: ArticleInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    url: a.pageUrl.startsWith("http") ? a.pageUrl : `${SITE_URL}${a.pageUrl}`,
    image: a.imageUrl ?? `${SITE_URL}/og.jpg`,
    datePublished: a.datePublished ?? "2026-05-08",
    dateModified: a.dateModified ?? new Date().toISOString().slice(0, 10),
    author: {
      "@type": "Organization",
      name: a.authorName ?? ORG_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };
}

// -- Organization ---------------------------------------------------

export function generateOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      // TODO: populate as social profiles go live.
    ],
  };
}
