import type { NavItem, SiteConfig } from "@/types";
//TODO: FIX URL
export const siteConfig: SiteConfig = {
  name: "Sonamax Marketing",
  shortName: "Sonamax",
  description:
    "Sonamax is a digital marketing agency offering SEO, social media marketing, content creation, and data-driven campaigns to boost your online presence and drive business growth.",
  url: "https://sonamax.vercel.ap",
  email: "info@sonamax.com",
  phone: "+254799992045",
  location: "Juja rd, Nairobi, Kenya",
  website: "www.sonamax.com"
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
