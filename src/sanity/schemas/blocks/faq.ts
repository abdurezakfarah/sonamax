import { Icons } from "@/components/icons";
import {type Rule, defineType } from "sanity"

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "object",
  icon: Icons.quiz,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule: Rule) => rule.required().error("Title is required"),
    },
    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          name: "faq",
          title: "FAQ",
          fields: [
            {
              name: "question",
              type: "text",
              title: "Question",
              rows: 3,
              validation: (rule: Rule) =>
                rule.required().error("Question is required"),
            },
            {
              name: "answer",
              type: "text",
              title: "Answer",
              rows: 3,
              validation: (rule: Rule) =>
                rule.required().error("Answer is required"),
            },
          ],
          preview: {
            select: {
              title: "question",
            },
            prepare({ title }) {
              return {
                title,
                media: Icons.circleHelp,
              };
            },
          },
        },
      ],
      validation: (rule: Rule) => rule.required().error("FAQ is required"),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "FAQ",
      };
    },
  },
});