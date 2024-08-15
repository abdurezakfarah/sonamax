import { Icons } from "@/components/icons";
import { defineType, type Rule } from "sanity";

export const customBlock = defineType({
  name: "customBlocks",
  title: "Custom block",
  type: "array",
  of: [
    {
      name: "editor",
      title: "Editor",
      type: "object",
      icon: Icons.textField,
      fields: [
        {
          name: "body",
          title: "Body",
          type: "editor",
          validation: (rule: Rule) => rule.required().error("Editor body is required")
        },
      ],
      preview: {
        select: {
          title: "body.0.children.0.text",
        },
        prepare({ title }) {
          return {
            title,
            subtitle: "Editor",
          };
        },
      },
    },
    {
      type: "about",
    },
    {
      type: "blog",
    },
    {
      type: "chooseUs",
    },
    {
      type: "contactBannerOne",
    },
    {
      type: "contactBannerTwo",
    },
    {
      type: "contact",
    },
    {
      type: "faq",
    },
    {
      type: "hero",
    },
    {
      type: "overviewCards",
    },
    {
      type: "pricing",
    },
    {
      type: "projects",
    },
    {
      type: "services",
    },
    {
      type: "testimonials",
    },
  ],
  options: {
    insertMenu: {
      showIcons: true,
      groups: [
        {
          name: "intro",
          title: "Intro",
          of: ["hero"],
        },
        {
          name: "content",
          title: "Content",
          of: ["editor", "services", "projects", "blog", "faq"],
        },
        {
          name: "info",
          title: "Info",
          of: ["about", "overviewCards", "faq"],
        },
        {
          name: "contact",
          title: "Contact",
          of: ["contact"],
        },
        {
          name: "banners",
          title: "Banners",
          of: ["contactBannerOne", "contactBannerTwo"],
        },
        {
          name: "upsell",
          title: "Upsell",
          of: ["pricing", "services", "chooseUs", "testimonials"],
        },
      ],
      views: [
        {
          name: "grid",
          previewImageUrl: (schemaTypeName) =>
            `/assets/images/sanity/preview/${schemaTypeName}.png`,
        },
        { name: "list" },
      ],
    },
  },
});
