import { Icon } from "@iconify/react";
import type { ObjectDefinition, Rule } from "sanity";

export const overviewCard: ObjectDefinition = {
  name: "overviewCard",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "icon",
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
    },
    prepare({ title, iconName }) {
      return {
        title,
        media: <Icon icon={iconName} />,
      };
    },
  },
};
