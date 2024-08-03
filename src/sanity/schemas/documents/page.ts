import { Icons } from "@/components/icons";
import moment from "moment";
import type { FieldGroupDefinition, Rule, SchemaTypeDefinition } from "sanity";

const pageGroups: FieldGroupDefinition[] = [
  {
    name: "seo",
    title: "SEO",
  },
  {
    name: "media",
    title: "Media",
  },
];

export const page: SchemaTypeDefinition = {
  name: "page",
  title: "Page",
  type: "document",
  icon: Icons.stickyNote,
  groups: pageGroups,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "title of the page",
      group: "seo",
      validation: (rule: Rule) => [
        rule.required().error("Title is required."),
        rule.max(60).warning("Shorter titles are always better for SEO."),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "seo",
      description: "URL of the page.",
      options: {
        source: "title",
      },
      validation: (rule: Rule) =>
        rule.required().error("Slug is required to be the page url."),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      group: "seo",
      rows: 4,
      description:
        "Description is used for seo",
      validation: (rule: Rule) => [
        rule
          .required()
          .error("Description of the page is required for the SEO."),
        rule.max(160).warning("Shorter Excerpts are always better for SEO."),
      ],
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "text",
      rows: 5,
      group: "seo",
      description:
        "Words that relate to your content, separated by (,) commas.",
    },
    {
      name: "ogImage",
      title: "Opengraph Image",
      type: "customImage",
      group: "media",
    },

    {
      name: "body",
      title: "Body",
      type: "editor",
      validation: (rule: Rule) => [
        rule.required().error("Post body is required."),
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "ogImage",
      createdAt: "_createdAt",
    },
    prepare({ title, media, publishedAt }) {
      const formattedCreatedAt = moment(publishedAt).format("LLL");
      return {
        title,
        media,
        subtitle: formattedCreatedAt,
      };
    },
  },
};
