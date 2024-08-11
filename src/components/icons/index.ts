import { MdPrecisionManufacturing } from "react-icons/md";
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
  BadgeAlert,
  Banknote,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CircleHelp,
  Clock,
  Code,
  Cog,
  FileDown,
  FolderCheck,
  Globe,
  Handshake,
  Highlighter,
  House,
  Info,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Quote,
  Section,
  Skull,
  StickyNote,
  Tags,
  TriangleAlert,
  User,
  X,
} from "lucide-react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { Logo } from "./logo";

import { MdCategory, MdRssFeed, MdSupportAgent } from "react-icons/md";
import { BlackLogo } from "./black-logo";

export type Icon = (typeof Icons)[keyof typeof Icons];

export const Icons = {
  logo: Logo,
  blackLogo: BlackLogo,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram,
  twitter: IoLogoTwitter,
  whatsapp: IoLogoWhatsapp,
  mail: Mail,
  arrowUpRight: ArrowUpRight,
  play: Play,
  cross: X,
  chech: Check,
  menu: Menu,
  phone: Phone,
  clock: Clock,
  handshake: Handshake,
  quote: Quote,
  check: Check,
  mapPin: MapPin,
  globe: Globe,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  fileDown: FileDown,
  category: MdCategory,
  arrowRight: ArrowRight,
  code: Code,
  badgeAlert: BadgeAlert,
  highlighter: Highlighter,
  stickyNote: StickyNote,
  house: House,
  supportAgent: MdSupportAgent,
  folderCheck: FolderCheck,
  banknote: Banknote,
  rssFeed: MdRssFeed,
  tags: Tags,
  user: User,
  circleHelp: CircleHelp,
  cog: Cog,
  section: Section,
  info: Info, 
  circleCheck: CircleCheck,
  triangleAlert: TriangleAlert,
  skull: Skull
};
