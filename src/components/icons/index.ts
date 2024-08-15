import {
  ArrowRight,
  ArrowUpRight,
  BadgeAlert,
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

import {
  MdOutlineCategory,
  MdOutlineConfirmationNumber,
  MdOutlineContactPage,
  MdOutlineFactCheck,
  MdOutlineInfo,
  MdOutlinePayments,
  MdOutlineQuiz,
  MdOutlineRecordVoiceOver,
  MdOutlineScreenshotMonitor,
  MdOutlineTextFields,
  MdOutlineViewCozy,
  MdRssFeed,
  MdSupportAgent,
} from "react-icons/md";

import { BlackLogo } from "./black-logo";

import FlexNoWrap from "./flex-no-wrap";

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
  category: MdOutlineCategory,
  arrowRight: ArrowRight,
  code: Code,
  badgeAlert: BadgeAlert,
  highlighter: Highlighter,
  stickyNote: StickyNote,
  house: House,
  supportAgent: MdSupportAgent,
  folderCheck: FolderCheck,
  payments: MdOutlinePayments,
  rssFeed: MdRssFeed,
  tags: Tags,
  user: User,
  circleHelp: CircleHelp,
  cog: Cog,
  section: Section,
  info: MdOutlineInfo,
  circleCheck: CircleCheck,
  triangleAlert: TriangleAlert,
  skull: Skull,
  factCheck: MdOutlineFactCheck,
  confirmationNumber: MdOutlineConfirmationNumber,
  contactPage: MdOutlineContactPage,
  quiz: MdOutlineQuiz,
  screenshotMonitor: MdOutlineScreenshotMonitor,
  flexNoWrap: FlexNoWrap,
  viewCozy: MdOutlineViewCozy,
  recordVoiceOver: MdOutlineRecordVoiceOver,
  textField: MdOutlineTextFields
};
