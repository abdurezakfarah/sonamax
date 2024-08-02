import type { ObjectDefinition, Rule } from "sanity";
import { preview } from "sanity-plugin-icon-picker";
export const overviewCard: ObjectDefinition = {
  name: "overviewCard",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
      },
      validation: (rule: Rule) => rule.required().error("Icon is required."),
    },
    {
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule: Rule) => rule.required().error("Title is required."),
    },
    {
      type: "text",
      name: "text",
      rows: 4,
      title: "Text",
      validation: (rule: Rule) => rule.required().error("Text is required."),
    },
  ],
  preview: {
    select: {
      title: "title",
      iconName: "icon.name",
      iconProvider: "icon.provider",
    },
    prepare({ title, iconName, iconProvider }) {
      return {
        title,
        media: preview({ name: iconName, provider: iconProvider }),
      };
    },
  },
};
