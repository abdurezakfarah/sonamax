import { type Rule, defineType } from "sanity";
export const stats = defineType({
  type: "object",
  name: "stats",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Title is required.")],
    },
    {
      name: "value",
      type: "number",
      title: "Value",
      validation: (rule: Rule) => [
        rule.required().error("Value number is required"),
        rule.positive().error("Value number must be positive"),
        rule.integer().error("Value number must be integer, no decimals"),
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      value: "value",
    },
    prepare({ title, value }) {
      return {
        title,
        media: <span>{value}</span>,
      };
    },
  },
});
