// import {
//   BadgeAlert,
//   Briefcase,
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   CircleCheck,
//   Clipboard,
//   Code,
//   Command,
//   Filter,
//   Highlighter,
//   Info,
//   Menu,
//   Moon,
//   Rss,
//   Skull,
//   Star,
//   SunMedium,
//   Tags,
//   TriangleAlert,
//   User,
//   Users,
//   X
// } from "lucide-react";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock,
  FileDown,
  Globe,
  Handshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Quote,
  X,
} from "lucide-react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { Logo } from "./logo";

import { MdCategory } from "react-icons/md";

export type Icon = (typeof Icons)[keyof typeof Icons];

export const Icons = {
  logo: Logo,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram,
  twitter: IoLogoTwitter,
  whatsapp: IoLogoWhatsapp,
  mail: Mail,
  arrowUpRight: ArrowUpRight,
  play: Play,
  close: X,
  menu: Menu,
  phone: Phone,
  clock: Clock,
  handshake: Handshake,
  quote: Quote,
  check: Check,
  mapPin: MapPin,
  globe: Globe,
  chevronRight: ChevronRight,
  fileDown: FileDown,
  category: MdCategory,
  arrowRight: ArrowRight
};
