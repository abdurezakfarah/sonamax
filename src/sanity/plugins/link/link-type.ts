import { Icons } from "@/components/icons";
import { defineField, defineType } from "sanity";
import { LinkInput } from "./components/link-input";
import { LinkTypeInput } from "./components/link-type-input";
import { RemoveStringFieldTitle } from "./components/remove-string-field-title";
import { LinkType, LinkTypeOptions } from "./types";

export const LINK_TYPES: LinkType[] = [
  {
    title: "URL",
    value: "url",
    icon: Icons.externalLink,
  },
  {
    title: "Email",
    value: "email",
    icon: Icons.atSign,
  },
  {
    title: "Phone",
    value: "phone",
    icon: Icons.phone,
  },
  {
    title: "Reference",
    value: "reference",
    icon: Icons.link,
  },
  {
    title: "PDF",
    value: "pdf",
    icon: Icons.file,
  },
];

export const linkType = (opts?: LinkTypeOptions) => {
  const { references = ["page"] } = opts || {};

  return defineType({
    name: "link",
    title: "Link",
    type: "object",
    icon: Icons.link,
    components: {
      //@ts-ignore
      input: LinkInput,
    },

    fields: [
      defineField({
        type: "string",
        name: "type",
        options: {
          list: LINK_TYPES.map(({ icon, ...rest }) => rest),
        },
        initialValue: "url",
        validation: (Rule) => Rule.required().error("Specify link type"),
        components: {
          input: (props) => LinkTypeInput({ ...props, linkTypes: LINK_TYPES }),
          field: RemoveStringFieldTitle,
        },
      }),

      defineField({
        type: "string",
        name: "label",
        placeholder: "Label",
        components: {
          field: RemoveStringFieldTitle,
        },
      }),

      // Internal
      defineField({
        name: "reference",
        type: "reference",
        to: references.map((type) => ({
          type,
        })),
        options: {
          disableNew: true,
        },
        description: "Link to another page or document on the website.",
        hidden: ({ parent }) => parent?.type && parent?.type !== "reference",
      }),

      // External
      defineField({
        name: "url",
        type: "url",
        description: "Link to an absolute URL to a page on another website.",
        validation: (rule) =>
          rule.uri({
            allowRelative: true,
            scheme: ["https", "http"],
          }),
        hidden: ({ parent }) => parent?.type !== "url",
      }),

      // E-mail
      defineField({
        name: "email",
        type: "email",
        description: "Link to send an e-mail to the given address.",
        hidden: ({ parent }) => parent?.type !== "email",
      }),

      // Phone
      defineField({
        name: "phone",
        type: "string",
        description: "Link to call the given phone number.",
        validation: (rule) =>
          rule.custom((value, context) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!value || (context.parent as any)?.type !== "phone") {
              return true;
            }

            return (
              (new RegExp(/^\+?[0-9\s-]*$/).test(value) &&
                !value.startsWith("-") &&
                !value.endsWith("-")) ||
              "Must be a valid phone number"
            );
          }),
        hidden: ({ parent }) => parent?.type !== "phone",
      }),

      //PDF
      defineField({
        name: "pdf",
        type: "file",
        hidden: ({ parent }) => parent?.type !== "pdf",
        options: {
          accept: "application/pdf",
        },
      }),
    ],
    preview: {
      select: {
        type: "type",
        label: "label",
        internalTitle: "reference.title",
      },
      prepare({ type, label, internalTitle }) {
        return {
          title: label ?? internalTitle,
          subtitle: type,
        };
      },
    },
  });
};
