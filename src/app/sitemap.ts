import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { activities } from "@/data/activities";
import { categoryPages } from "@/data/category-pages";
import { cityPages } from "@/data/city-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/team-building-activities`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...["about-us", "services", "contact-us", "blog"].map((slug) => ({
      url: `${site.url}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...activities.map((a) => ({
      url: `${site.url}/team-building-activities/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...categoryPages.map((p) => ({
      url: `${site.url}/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cityPages.map((p) => ({
      url: `${site.url}/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
