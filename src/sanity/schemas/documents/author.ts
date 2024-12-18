import { Icons } from "@/components/icons";
import type { Rule, SchemaTypeDefinition } from "sanity";

export const author: SchemaTypeDefinition = {
  name: "author",
  title: "Authors",
  type: "document",
  icon: Icons.user,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Author name is required."),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule: Rule) => [
        rule.required().error("Author slug is required"),
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule: Rule) => [
        rule.required().error("Author image is required"),
      ],
    },
    {
      name: "twitter",
      title: "Twitter username",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "twitter",
    },
  },
};
