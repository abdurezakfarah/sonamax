import { Icons } from "@/components/icons";
import moment from "moment";
import { Rule, SchemaTypeDefinition } from "sanity";

export const project: SchemaTypeDefinition = {
  name: "project",
  title: "Projects",
  type: "document",
  icon: Icons.folderCheck,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("title is required."),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",

      description: "This is the URL of the project.",
      options: {
        source: "title",
      },
      validation: (Rule: Rule) => Rule.required().error("Slug is required."),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule: Rule) => Rule.required().error("date is required."),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: Rule) =>
        Rule.required().error("Category is required."),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description:
        "Choose a compelling image that represents your content well and grabs attention.",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },

    {
      name: "overview",
      title: "Overview",
      type: "editor",
      validation: (Rule: Rule) =>
        Rule.required().error("Overview is required."),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      date: "date",
    },
    prepare({ title, media, date }) {
      const formattedDate = moment(date).format("LLL");
      return {
        title,
        media,
        subtitle: formattedDate,
      };
    },
  },
};
