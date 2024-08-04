"use client";
import { structure } from "@/sanity/structure";
import { Icons } from "@/components/icons";
import { visionTool } from "@sanity/vision";
import { iconify } from "sanity-plugin-iconify";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema, singletonActions, singletonTypes } from "./src/sanity/schemas";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  icon: Icons.logo,
  document: {
    actions: (prev, context) =>
      singletonTypes.has(context.schemaType)
        ? prev.filter(({ action }) => action && singletonActions.has(action))
        : prev,
  },
  plugins: [
    structureTool({
      structure: structure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    iconify()
  ],
});
