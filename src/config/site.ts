import type { NavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Sonamax Marketing",
  shortName: "Sonamax",
  description:
    "Sonamax Marketing Group is the best digital marketing agency, offering top-notch SEO, PPC, social media strategies, content marketing, and premier web and app development services.",
  url: "https://www.sonamaxmarketing.com",
  email: "info@sonamax.com",
  phone: "+254799992045",
  location: "Juja rd, Nairobi, Kenya",
  website: "www.sonamaxmarketing.com",
};

export const mainNav: NavItem[] = [
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About us",
    href: "/about-us",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Testimonials",
    href: "/#testimonials",
  },
  {
    title: "contact",
    href: "/#contact",
  },
  {
    title: "News",
    href: "/blog",
  },
];
