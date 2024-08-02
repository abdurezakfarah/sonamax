import type { ObjectDefinition, Rule } from "sanity";
export const stats: ObjectDefinition = {
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
      type: "number",
      name: "value",
      title: "Value",
      validation: (rule: Rule) => [
        rule.required().error("Value number is required"),
        rule.positive().error("Value number must be positive"),
        rule.integer().error("Value number must be integer, no decimals"),
      ],
    },
  ],
};
