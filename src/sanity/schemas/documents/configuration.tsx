import { Icons } from "@/components/icons";
import { Icon } from "@iconify/react";
import type { Rule, SchemaTypeDefinition } from "sanity";

export const configuration: SchemaTypeDefinition = {
  type: "document",
  title: "Configuration",
  name: "configuration",
  icon: Icons.cog,
  fields: [
    {
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        {
          name: "socialLink",
          title: "Social link",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              placeholder: "Eg: Twitter, Facebook",
              validation: (rule: Rule) =>
                rule.required().error("Name is required"),
            },
            {
              name: "icon",
              title: "icon",
              type: "icon",
              validation: (rule: Rule) =>
                rule.required().error("Icon is required"),
            },
            {
              type: "url",
              name: "url",
              title: "URL",
              validation: (rule: Rule) =>
                rule
                  .required()
                  .error("Url is required")
                  .uri({
                    allowRelative: true,
                    scheme: ["https"],
                  }),
            },
          ],
          preview: {
            select: {
              name: "name",
              icon: "icon",
            },
            prepare({ name, icon }) {
              return {
                title: name,
                media: <Icon icon={icon.name} />,
              };
            },
          },
        },
      ],
      validation: (rule: Rule) =>
        rule.required().error("Section title is required"),
    },
    {
      name: "footer",
      title: "Footer",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          title: "Footer Section",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule: Rule) => [
                rule.required().error("Section title is required"),
              ],
            },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  name: "link",
                  title: "Link",
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                      validation: (rule: Rule) => [
                        rule.required().error("Link title is required"),
                      ],
                    },
                    {
                      type: "url",
                      name: "url",
                      title: "Link",
                      validation: (rule: Rule) =>
                        rule
                          .required()
                          .error("Link is required")
                          .uri({
                            allowRelative: true,
                            scheme: ["https", "http", "mailto", "tel"],
                          }),
                      options: {
                        allowRelative: true,
                      },
                    },
                  ],
                },
              ],
              validation: (rule: Rule) => [
                rule.required().error("Links are required"),
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
                media: Icons.section,
              };
            },
          },
        },
      ],
      validation: (rule: Rule) => rule.required().error("Footer is required"),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Configuration",
      };
    },
  },
};
