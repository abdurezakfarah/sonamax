import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/error", "/admin", "/thank-you"]
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
