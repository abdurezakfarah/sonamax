import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  icon: Icons.screenshotMonitor,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Hero title is required"),
      ],
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 5,
      validation: (rule: Rule) => [
        rule.required().error("Hero text is required"),
      ],
    },
    {
      name: "primaryCta",
      title: "Primary CTA",
      type: "cta",
      validation: (rule: Rule) => [
        rule.required().error("Primary CTA  is required"),
      ],
    },
    {
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "cta",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Hero",
      };
    },
  },
});
