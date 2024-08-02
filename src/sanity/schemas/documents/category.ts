import { Icons } from "@/components/icons";
import type { Rule, SchemaTypeDefinition } from "sanity";

export const category: SchemaTypeDefinition = {
  name: "category",
  title: "Category",
  icon: Icons.category,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Category name is required."),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule: Rule) => [
        rule.required().error("Category slug is required."),
      ],
    },
  ],
};
