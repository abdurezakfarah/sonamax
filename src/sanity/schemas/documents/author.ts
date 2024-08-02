import { Icons } from "@/components/icons";
import { Subtitles } from "lucide-react";
import type { Rule, SchemaTypeDefinition } from "sanity";

export const author: SchemaTypeDefinition = {
  name: "author",
  title: "Author",
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
      type: "customImage",
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
      subtitle: "twitter"
    },
  },
};
