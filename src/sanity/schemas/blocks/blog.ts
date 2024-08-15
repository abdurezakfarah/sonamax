import { Icons } from "@/components/icons";
import { type Rule, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "object",
  icon: Icons.rssFeed,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Blogs title is required"),
      ],
    },
    {
      name: "blog",
      title: "Blogs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (rule: Rule) => [
        rule.required().error("blogs are required"),
        rule.unique().error("blogs must be unique"),
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
        subtitle: "Blog",
      };
    },
  },
});
