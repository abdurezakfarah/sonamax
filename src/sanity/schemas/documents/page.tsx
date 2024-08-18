import { Icons } from "@/components/icons";
import moment from "moment";
import { defineField, defineType, type FieldGroupDefinition } from "sanity";

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

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: Icons.stickyNote,
  groups: pageGroups,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "title of the page",
      group: "seo",
      hidden: ({ parent }) => parent._id == "home",
      validation: (Rule) => [
        Rule.required().error("Title is required."),
        Rule.max(60).warning("Shorter titles are always better for SEO."),
      ],
    }),
    defineField({
      name: "showTitle",
      type: "boolean",
      title: "Show the title section",
      description: "Should we show the title section?",
      initialValue: true,
      hidden: ({ parent }) => parent._id == "home",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "seo",
      description: "URL of the page.",
      options: {
        source: "title",
      },
      hidden: ({ parent }) => parent._id == "home",
      validation: (Rule) =>
        Rule.custom((slug, context) => {
          //bypass this validation for the home page
          if (context.document?._id && context.document?._id === "home")
            return true;

          //validate other pages
          if (!slug) {
            return "Slug is required to be the page url.";
          }

          return true;
        }),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "seo",
      rows: 4,
      description: "Description is used for seo",
      hidden: ({ parent }) => parent._id == "home",
      validation: (Rule) => [
        Rule.max(160).warning("Shorter Excerpts are always better for SEO."),
      ],
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "text",
      rows: 5,
      group: "seo",
      hidden: ({ parent }) => parent._id == "home",
      description:
        "Words that relate to your content, separated by (,) commas.",
    }),
    defineField({
      name: "ogImage",
      title: "Opengraph Image",
      type: "image",
      group: "media",
      hidden: ({ parent }) => parent._id == "home",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "customBlocks",
    }),
  ],
  preview: {
    select: {
      id: "_id",
      title: "title",
      media: "ogImage",
      createdAt: "_createdAt",
    },
    prepare({ title, media, createdAt, id }) {
      const formattedCreatedAt = moment(createdAt).format("LLL");
      return {
        title,
        media: id == "home" ? <Icons.house /> : media,
        subtitle: formattedCreatedAt,
      };
    },
  },
});
