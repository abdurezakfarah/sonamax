import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const pricing = defineType({
  name: "pricing",
  title: "Pricing",
  type: "object",
  icon: Icons.payments,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Pricing title is required"),
      ],
    },
    {
      name: "plans",
      title: "Pricing plans",
      type: "array",
      of: [{ type: "reference", to: [{ type: "price" }] }],
      validation: (rule: Rule) => [
        rule.required().error("Pricing are required"),
        rule.unique().error("Pricing must be unique"),
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
        subtitle: "Pricing",
      };
    },
  },
});
