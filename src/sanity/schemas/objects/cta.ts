import type { ObjectDefinition, Rule } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const cta: ObjectDefinition = {
  name: "cta",
  type: "object",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "string",
      name: "text",
      title: "Text",
      validation: (rule: Rule) => [
        rule.required().error("Call to action (CTA) text is required"),
      ],
    },
    {
      name: "icon",
      title: "Icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
      },
    },
    {
      type: "url",
      name: "url",
      title: "URL",
      validation: (rule: Rule) =>
        rule
          .required()
          .error("Url is required")
          .uri({
            allowRelative: true,
            scheme: ["https", "http", "mailto", "tel"],
          }),
    },
  ],
  preview: {
    select: {
      icon: "icon",
      title: "title",
      text: "text",
    },
    prepare({ icon, title, text }) {
      return {
        title,
        subtitle: text,
        media: preview(icon),
      };
    },
  },
};
