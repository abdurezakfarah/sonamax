import type { SchemaTypeDefinition } from "sanity";
import { about } from "./blocks/about";
import { blog } from "./blocks/blog";
import { chooseUs } from "./blocks/choose-us";
import { contact } from "./blocks/contact";
import { contactBannerOne, contactBannerTwo } from "./blocks/contact-banners";
import { faq } from "./blocks/faq";
import { hero } from "./blocks/hero";
import { overViewCards } from "./blocks/overview-cards";
import { pricing } from "./blocks/pricing";
import { projects } from "./blocks/projects";
import { services } from "./blocks/services";
import { testimonials } from "./blocks/testimonials";
import { author } from "./documents/author";
import { category } from "./documents/category";
import { configuration } from "./documents/configuration";
import { page } from "./documents/page";
import { post } from "./documents/post";
import { price } from "./documents/price";
import { project } from "./documents/project";
import { service } from "./documents/service";
import { tag } from "./documents/tag";
import { callout } from "./objects/callout";
import { cta } from "./objects/cta";
import { customBlock } from "./objects/custom-blocks";
import { editor } from "./objects/editor";
import { overviewCard } from "./objects/overview-card";
import { richText } from "./objects/richtext";
import { stats } from "./objects/stats";

type Schema = {
  types: SchemaTypeDefinition[];
  templates: (prev: any) => any;
};

export const schema: Schema = {
  types: [
    configuration,
    page,
    post,
    author,
    category,
    tag,
    service,
    project,
    price,
    /* OBJECT TYPES */

    callout,
    editor,
    richText,
    cta,
    stats,
    overviewCard,
    customBlock,
    /* BLOCKS */
    about,
    blog,
    chooseUs,
    contactBannerOne,
    contactBannerTwo,
    contact,
    faq,
    hero,
    overViewCards,
    pricing,
    projects,
    services,
    testimonials,
  ],
  templates: (prev) =>
    prev.filter((template: any) => !singletonTypes.has(template.id)),
};

type Action =
  | "publish"
  | "discardChanges"
  | "restore"
  | "delete"
  | "duplicate"
  | "unpublish";

export const unmutableActions = new Set<Action>([
  "publish",
  "discardChanges",
  "restore",
]);

export const singletonTypes = new Set(["configuration", "home"]);

// SCHEMA TYPES (basically documents) TO EXCLUDE FROM LEFT SIDEBAR
// because they will manually added in the strucure builder
export const excludedListTypes = new Set([
  "configuration",
  "home",
  "page",
  "media.tag", // this schema is from the media tool
]);

//TODO: below are some docs that are no longer in use & waiting to be deleted:
// 1) services
// 2) projects
// 3) Settings
// 4) about-us
// 5) social links
// 4) home
