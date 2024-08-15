import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const contactBannerOne = defineType({
  name: "contactBannerOne",
  title: "Contact Banner One",
  type: "object",
  icon: Icons.confirmationNumber,
  fields: [
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 5,
      validation: (rule: Rule) => [rule.required().error("Text is required")],
    },
    {
      name: "cta",
      title: "CTA",
      type: "cta",
      validation: (rule: Rule) => [rule.required().error("CTA  is required")],
    },
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Contact Banner One",
      };
    },
  },
});

export const contactBannerTwo = defineType({
  name: "contactBannerTwo",
  title: "Contact Banner Two",
  type: "object",
  icon: Icons.confirmationNumber,
  fields: [
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 5,
      validation: (rule: Rule) => [rule.required().error("Text is required")],
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
      title: "secondary CTA",
      type: "cta",
    },
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Contact Banner Two",
      };
    },
  },
});
