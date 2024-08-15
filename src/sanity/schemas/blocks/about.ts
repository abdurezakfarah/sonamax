import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "object",
  icon: Icons.info,
  fields: [
    {
      name: "videoUrl",
      title: "Video url",
      type: "url",
      placeholder: "Eg: www.youtube.com/video-id",
      validation: (rule: Rule) =>
        rule
          .required()
          .error("Url is required")
          .uri({
            allowRelative: true,
            scheme: ["https", "http", "mailto", "tel"],
          }),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) =>
        rule.required().error("About title is required"),
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 4,
      validation: (rule: Rule) =>
        rule.required().error("About text is required"),
    },
    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{ type: "stats" }],
      validation: (rule: Rule) => rule.required().error("Stats is required"),
    },
    {
      name: "primaryCta",
      title: "Primary CTA",
      type: "cta",
      validation: (rule: Rule) =>
        rule.required().error("Primary CTA (call to action) is required."),
    },
    {
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "cta",
      validation: (rule: Rule) =>
        rule.required().error("Secondary CTA (call to action) is required."),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "About",
      };
    },
  },
});
