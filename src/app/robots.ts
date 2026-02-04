import type { MetadataRoute } from "next";

function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "";
  try {
    return new URL(raw);
  } catch {
    return new URL("http://drjoaomoittinho.com");
  }
}

export default function robots(): MetadataRoute.Robots {
  const url = siteUrl().toString().replace(/\/$/, "");

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}
