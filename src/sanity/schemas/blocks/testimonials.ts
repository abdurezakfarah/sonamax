import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials",
  icon: Icons.recordVoiceOver,
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule: Rule) => rule.required().error("Title is required"),
    },
    {
      name: "testimonials",
      title: "testimonials",
      type: "array",
      of: [
        {
          type: "object",
          name: "testimony",
          title: "Testimony",
          fields: [
            {
              name: "text",
              type: "text",
              rows: 4,
              title: "Testimonial text",
              validation: (rule: Rule) =>
                rule.required().error("text is required"),
            },
            {
              name: "authorName",
              type: "string",
              title: "Author name",
              validation: (rule: Rule) =>
                rule.required().error("Author name is required"),
            },
            {
              name: "authorProfession",
              type: "string",
              title: "Author profession",
              validation: (rule: Rule) =>
                rule.required().error("Author Profession is required"),
            },
            {
              name: "authorImage",
              type: "image",
              title: "Author image",
              validation: (rule: Rule) =>
                rule.required().error("Author image is required"),
            },
          ],
          preview: {
            select: {
              title: "authorName",
              media: "authorImage",
              subtitle: "text",
            },
          },
        },
      ],
      validation: (rule: Rule) => [
        rule.required().error("Testimonials are required"),
        rule.unique().error("Testimals should be unique."),
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
        subtitle: "Testimonials",
      };
    },
  },
});
