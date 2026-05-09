import type { MetadataRoute } from "next";
import { CITIES } from "@/data/_cities";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rizehvac.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/methodology`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const cityRoutes: MetadataRoute.Sitemap = CITIES.flatMap((city) => [
    {
      url: `${SITE_URL}/hvac/${city}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ac-repair/${city}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/hvac-cost/${city}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  return [...staticPages, ...cityRoutes];
}
