import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const chooseUs = defineType({
  name: "chooseUs",
  title: "Choose us",
  type: "object",
  icon: Icons.factCheck,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Title is required")],
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 5,
      validation: (rule: Rule) => [rule.required().error("Text is required")],
    },
    {
      name: "features",
      title: "features",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule: Rule) => [
        rule.min(6).error("Minimum of six features is required"),
        rule.unique().error("No duplicates."),
        rule.required().error("Features are required"),
      ],
    },
    {
      name: "box",
      title: "Box content",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          validation: (rule: Rule) =>
            rule.required().error("Title is required"),
        },
        {
          name: "text",
          type: "text",
          rows: 3,
          title: "Text",
          validation: (rule: Rule) => rule.required().error("Text is required"),
        },
      ],
      validation: (rule: Rule) => [
        rule.required().error("Box content is required"),
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
        subtitle: "Choose us",
      };
    },
  },
});
