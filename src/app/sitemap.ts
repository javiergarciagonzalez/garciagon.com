import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://garciagon.com";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects/ramentask`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/home-lab`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
