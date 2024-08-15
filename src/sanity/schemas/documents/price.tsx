import { Icons } from "@/components/icons";
import type { Rule, SchemaTypeDefinition } from "sanity";
export const price: SchemaTypeDefinition = {
  name: "price",
  title: "Pricing",
  type: "document",
  icon: Icons.payments,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => rule.required().error("Title is required"),
    },
    {
      name: "currency",
      title: "currency",
      type: "string",
      options: {
        list: [
          { value: "C$", title: "CAD" },
          { value: "$", title: "USD" },
          { value: "€", title: "EURO" },
          { value: "£", title: "GBP" },
          { value: "KES", title: "KES" },
        ],
      },
      validation: (rule: Rule) => rule.required().error("Specify the currency"),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule: Rule) => [
        rule.required().error("Title is required"),
        rule.positive().error("Price should be positive"),
        rule.precision(2).error("Maximam two decimals is allowed"),
      ],
    },
    {
      name: "billingCycle",
      title: "Billing Cycle",
      placeholder: "Eg: per month, per year...",
      type: "string",
      validation: (rule: Rule) =>
        rule.required().error("Billing Cycle is required"),
    },
    {
      name: "billingRate",
      title: "Billing Rate",
      placeholder: "Eg: per user, per team...",
      type: "string",
      validation: (rule: Rule) =>
        rule.required().error("Billing Rate is required"),
    },
    {
      name: "text",
      title: "Text",
      type: "string",
      validation: (rule: Rule) =>
        rule.required().error("Text is Rate is required"),
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          name: "feature",
          title: "Feature",
          fields: [
            {
              name: "isIncluded",
              title: "Is it included?",
              type: "boolean",
              initialValue: true,
              options: {
                layout: "checkbox",
              },
              validation: (rule: Rule) =>
                rule.required().error("Is it included?"),
            },
            {
              name: "text",
              title: "Text",
              type: "string",
              validation: (rule: Rule) =>
                rule.required().error("Text is Rate is required"),
            },
          ],
          preview: {
            select: {
              text: "text",
              isIncluded: "isIncluded",
            },
            prepare({ text, isIncluded }) {
              return {
                title: text,
                media: isIncluded ? () => <Icons.check /> : <Icons.cross />,
              };
            },
          },
        },
      ],
      validation: (rule: Rule) =>
        rule.required().error("Features are Rate is required"),
    },
    {
      type: "url",
      name: "url",
      title: "URL",
      validation: (rule: Rule) =>
        rule.error("Url is required").uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
      options: {
        allowRelative: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      currency: "currency",
    },
    prepare({ title, price, currency }) {
      return {
        title,
        subtitle: price,
        media: () => <span>{currency}</span>,
      };
    },
  },
};
