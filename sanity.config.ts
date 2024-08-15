"use client";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { structure } from "@/sanity/structure";
import { visionTool } from "@sanity/vision";
import { theme } from "https://themer.sanity.build/api/hues?primary=fa4c20";
import { defineConfig } from "sanity";
import { iconify } from "sanity-plugin-iconify";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema, singletonTypes, unmutableActions } from "./src/sanity/schemas";

export default defineConfig({
  basePath: "/admin",
  title: siteConfig.shortName,
  theme,
  projectId,
  dataset,
  schema,
  icon: Icons.logo,
  document: {
    actions: (prev, context) => {
      const isHomePage =
        context.schemaType === "page" && context.documentId == "home";
      return singletonTypes.has(context.schemaType) || isHomePage
        ? prev.filter(({ action }) => action && unmutableActions.has(action))
        : prev;
    },
  },
  plugins: [
    structureTool({
      structure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    iconify(),
    simplerColorInput(),
  ],
});
