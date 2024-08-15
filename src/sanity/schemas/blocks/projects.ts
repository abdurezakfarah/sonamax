import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  title: "Projects",
  icon: Icons.viewCozy,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Projects title is required"),
      ],
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (rule: Rule) => [
        rule.required().error("Projects title is required"),
      ],
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
      validation: (rule: Rule) => [
        rule.required().error("Projects are required"),
        rule.unique().error("Projects must be unique"),
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Projects",
      };
    },
  },
});
