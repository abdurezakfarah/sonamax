import { Icons } from "@/components/icons";
import type { ObjectDefinition, Rule } from "sanity";


const calloutVariants = [
  { title: "Error", value: "error" },
  { title: "Success", value: "success" },
  { title: "Info", value: "info" },
  { title: "Warning", value: "warning" },
];

export const callout: ObjectDefinition = {
  name: "callout",
  type: "object",
  icon: <Icons.badgeAlert className="size-4" />,
  fields: [
    {
      type: "string",
      name: "type",
      title: "Callout type",
      initialValue: "info",
      options: {
        list: calloutVariants,
      },
      validation: (rule: Rule) => [
        rule.required().error("Alert type is required."),
      ],
    },
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
        },
      ],
      validation: (rule: Rule) => [
        rule.required().error("Alert description is required."),
      ],
    },
  ],
  preview: {
    select: {
      title: "type",
      subtitle: "description",
    },
  },
};
