import type { MetadataRoute } from "next";

function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "";
  try {
    return new URL(raw);
  } catch {
    return new URL("http://drjoaomoittinho.com");
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const url = siteUrl().toString().replace(/\/$/, "");
  const now = new Date();

  return [
    {
      url: `${url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
