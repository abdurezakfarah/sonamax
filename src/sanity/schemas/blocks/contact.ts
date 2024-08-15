import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact",
  type: "object",
  icon: Icons.contactPage,
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
      name: "cta",
      title: "CTA's",
      type: "array",
      of: [
        {
          name: "cta",
          title: "CTA",
          type: "cta",
          validation: (rule: Rule) => rule.required().error("CTA  is required"),
        },
      ],
      validation: (rule: Rule) => rule.required().error("CTA  is required"),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Contact",
      };
    },
  },
});
