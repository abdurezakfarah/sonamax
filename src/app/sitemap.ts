import { mainNav } from "@/config/site";
import type { MetadataRoute } from "next";

const mainNavigations: MetadataRoute.Sitemap = mainNav.map((nav) => ({
  url: nav.href,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 1,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...mainNavigations];
}
