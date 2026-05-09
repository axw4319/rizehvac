import type { MetadataRoute } from "next";
import { listCitySlugs } from "@/data/cityRegistry";
import { isCityNoindex } from "@/data/cityIndexability";
import { listAuthorSlugs } from "@/data/authors";
import { listPublishablePosts } from "@/data/postsRegistry";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rizehvac.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/what-is-rizescore`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/methodology`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = listPublishablePosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const authorRoutes: MetadataRoute.Sitemap = listAuthorSlugs().map((slug) => ({
    url: `${SITE_URL}/authors/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Only emit URLs for cities that are (a) registered (live data) AND (b) not
  // marked noindex pending verification. Coming-soon cities + unverified cities
  // are excluded from the sitemap to protect against Helpful Content System
  // scaled-content / thin-content flags.
  const indexableCitySlugs = listCitySlugs().filter((slug) => !isCityNoindex(slug));
  const cityRoutes: MetadataRoute.Sitemap = indexableCitySlugs.flatMap((city) => [
    { url: `${SITE_URL}/hvac/${city}`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/ac-repair/${city}`, lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/hvac-cost/${city}`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
  ]);

  return [...staticPages, ...blogRoutes, ...authorRoutes, ...cityRoutes];
}
