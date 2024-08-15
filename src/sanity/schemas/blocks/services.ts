import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const services = defineType({
  name: "services",
  title: "Services",
  type: "object",
  icon: Icons.supportAgent,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Services title is required"),
      ],
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
      validation: (rule: Rule) => [
        rule.required().error("Services are required"),
        rule.unique().error("Services must be unique"),
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
        subtitle: "Services",
      };
    },
  },
});
