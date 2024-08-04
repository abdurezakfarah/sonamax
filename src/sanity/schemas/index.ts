import type { SchemaTypeDefinition } from "sanity";
import { author } from "./documents/author";
import { category } from "./documents/category";
import { configuration } from "./documents/configuration";
import { home } from "./documents/home";
import { page } from "./documents/page";
import { post } from "./documents/post";
import { price } from "./documents/price";
import { project } from "./documents/project";
import { service } from "./documents/service";
import { tag } from "./documents/tag";
import { callout } from "./objects/callout";
import { cta } from "./objects/cta";
import { customImage } from "./objects/custom-image";
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
    home,
    page,
    post,
    author,
    category,
    tag,
    service,
    project,
    price,
    /* OBJECTS */
    customImage,
    callout,
    editor,
    richText,
    cta,
    stats,
    overviewCard,
  ],
  templates: (prev) =>
    prev.filter((template: any) => !singletonTypes.has(template.id)),
};

export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
]);

export const singletonTypes = new Set(["configuration", "home"]);

// SCHEMA TYPES TO EXCLUDE FROM LEFT SIDEBAR
// because they will manually added in the strucure builder
export const excludedListTypes = new Set(["configuration", "home", "page"]);

//TODO: below are some docs are no longer in use & need to be deleted:
// 1) services
// 2) projects
// 3) Settings
// 4) about-us
// 5) social links
