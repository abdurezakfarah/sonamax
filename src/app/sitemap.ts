import { mainNav, siteConfig } from "@/config/site";
import { client } from "@/sanity/lib/client";
import { sitemapQuery } from "@/sanity/lib/queries";
import { SitemapQueryResult } from "@/sanity/sanity.types";
import type { MetadataRoute } from "next";

const mainNavigations: MetadataRoute.Sitemap = mainNav.map((nav) => ({
  url: nav.href,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 1,
}));

export default async function sitemap() {
  const siteMapData = await client.fetch<SitemapQueryResult>(sitemapQuery);

  const blog = siteMapData.blog.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "weekly",
    priority: 1,
  }));
  const services = siteMapData.services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: service._createdAt,
  }));
  const projects = siteMapData.projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: project._createdAt,
  }));

  return [...mainNavigations, ...blog, services, projects];
}
