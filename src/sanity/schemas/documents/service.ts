import { Icons } from "@/components/icons";
import type { Rule, SchemaTypeDefinition } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const service: SchemaTypeDefinition = {
  name: "service",
  title: "Services",
  type: "document",
  icon: Icons.supportAgent,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => rule.required().error("Title is required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "This is the URL of the service.",
      options: {
        source: "title",
      },
      validation: (Rule: Rule) => Rule.required().error("Slug is required."),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "just small brief description about the service.",
      validation: (Rule: Rule) =>
        Rule.required().error("Description is required."),
    },
    {
      name: "icon",
      title: "Icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
      },
      validation: (rule: Rule) =>
        rule.required().error("Icon is required."),
    },
    {
      name: "overview",
      title: "Overview",
      type: "editor",
      validation: (rule: Rule) =>
        rule.required().error("Overview is required."),
    },
  ],
  preview: {
    select: {
      title: "title",
      provider: "icon.provider",
      name: "icon.name",
    },
    prepare({ title, provider, name }) {
      return {
        title,
        media: preview({ name, provider }),
      };
    },
  },
};
