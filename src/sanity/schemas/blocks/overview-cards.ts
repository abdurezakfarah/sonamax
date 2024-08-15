import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const overViewCards = defineType({
  name: "overviewCards",
  title: "Overview cards",
  type: "object",
  icon: Icons.flexNoWrap,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule: Rule) => rule.required().error("Title is required"),
    },
    {
      name: "overViewCards",
      title: "Overview cards",
      type: "array",
      of: [
        {
          type: "overviewCard",
        },
      ],
      validation: (rule: Rule) => [
        rule.required().error("Ovwerview cards are required"),
        rule.unique().error("Ovwerview cards should be unique."),
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
        subtitle: "Overview cards",
      };
    },
  },
});
