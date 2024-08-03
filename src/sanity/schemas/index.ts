import type { SchemaTypeDefinition } from "sanity";
import { author } from "./documents/author";
import { category } from "./documents/category";
import { configuration } from "./documents/configuration";
import { home } from "./documents/home";
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

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    configuration,
    home,
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
};

export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
]);
export const singletonTypes = new Set(["configuration", "home"]);

// SCHEMA TYPES TO EXCLUDE FROM LEFT SIDEBAR
export const excludedListTypes = new Set(["configuration", "home"]);

//TODO: below are some docs are no longer in use & need to be deleted:
// 1) services
// 2) projects
// 3) Settings
// 4) about-us
// 5) social links
