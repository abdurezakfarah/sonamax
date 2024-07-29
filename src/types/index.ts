export interface Link {
  name: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}
export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
}
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}
