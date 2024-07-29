import type { Icon } from "@/components/icons";

interface Link {
  name: string;
  href: string;
  icon?: Icon;
  external?: boolean;
  disabled?: boolean;
}
interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  logo: Icon;
  links: Link[];
}
interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export type MainNavItem = NavItem;

interface PortfolioConfig {
  mainNav: MainNavItem[];
}
interface Service {
  title: string;
  description: string;
}

interface Experience {
  title: string;
  company_name: string;
  icon_bg?: string;
  icon?: string | StaticImageData;
  date: string;
  points: string[];
}

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface Skill {
  title: string;
  technologies: {
    name: string;
    icon: string | StaticImageData;
  }[];
}

interface Project {
  title: string;
  description: string;
  technologies: {
    name: string;
    color: string;
  }[];
  image: StaticImageData;
  source_code: string;
  demo: string;
}
