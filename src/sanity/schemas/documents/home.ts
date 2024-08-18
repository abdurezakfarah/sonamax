import { Icons } from "@/components/icons";
import type {
  FieldDefinition,
  FieldGroupDefinition,
  Rule,
  SchemaTypeDefinition,
} from "sanity";

type FieldObject = FieldDefinition<"object">;

const homeSections: FieldGroupDefinition[] = [
  {
    name: "hero",
    title: "Hero",
    default: true,
  },
  {
    name: "services",
    title: "Services",
  },
  {
    name: "about",
    title: "About ",
  },
  {
    name: "workingProcess",
    title: "Wotking process",
  },
  {
    name: "projects",
    title: "Projects",
  },
  {
    name: "testimonials",
    title: "Testimonials",
  },
  {
    name: "chooseUs",
    title: "Choose us",
  },
  {
    name: "pricing",
    title: "Pricing",
  },
  {
    name: "contactBannerOne",
    title: "Contact Banner One",
  },
  {
    name: "contact",
    title: "Contact",
  },
  {
    name: "blog",
    title: "Blog",
  },
  {
    name: "faq",
    title: "FAQ's",
  },
  {
    name: "contactBannerTwo",
    title: "Contact Banner Two",
  },
];

const heroSection: FieldObject = {
  name: "hero",
  title: "Hero section",
  group: "hero",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Hero title is required"),
      ],
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 5,
      validation: (rule: Rule) => [
        rule.required().error("Hero text is required"),
      ],
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
      title: "Secondary CTA",
      type: "cta",
    },
  ],
  validation: (rule: Rule) => [
    rule.required().error("Hero section is required"),
  ],
};

const servicesSection: FieldObject = {
  name: "services",
  title: "Services section",
  group: "services",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Services title is required"),
      ],
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
      validation: (rule: Rule) => [
        rule.required().error("Services are required"),
        rule.unique().error("Services must be unique"),
      ],
    },
  ],
  validation: (rule: Rule) => [
    rule.required().error("Service section is required"),
  ],
};

const aboutSection: FieldObject = {
  name: "about",
  title: "About Section",
  type: "object",
  group: "about",
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
  validation: (rule: Rule) =>
    rule.required().error("About section is required"),
};

const workingProcessSection: FieldObject = {
  name: "workingProcess",
  title: "Working Process Section",
  group: "workingProcess",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule: Rule) => rule.required().error("Title is required"),
    },
    {
      name: "processes",
      title: "Processes",
      type: "array",
      of: [
        {
          type: "overviewCard",
        },
      ],
      validation: (rule: Rule) => [
        rule.required().error("Processes are required"),
        rule.unique().error("Processes should be unique."),
      ],
    },
  ],
  validation: (rule: Rule) =>
    rule.required().error("Process section is required"),
};

const projectsSection: FieldObject = {
  name: "projects",
  title: "Projects section",
  group: "projects",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Projects title is required"),
      ],
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (rule: Rule) => [
        rule.required().error("Projects title is required"),
      ],
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
      validation: (rule: Rule) => [
        rule.required().error("Projects are required"),
        rule.unique().error("Projects must be unique"),
      ],
    },
  ],
  validation: (rule: Rule) => [
    rule.required().error("Projects section is required"),
  ],
};

const testimonialsSection: FieldObject = {
  name: "testimonials",
  title: "Testimonials Section",
  group: "testimonials",
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
  validation: (rule: Rule) =>
    rule.required().error("Testimonial section is required"),
};

const chooseUsSection: FieldObject = {
  name: "chooseUs",
  title: "Choose us section",
  group: "chooseUs",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Title is required")],
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 5,
      validation: (rule: Rule) => [rule.required().error("Text is required")],
    },
    {
      name: "features",
      title: "features",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule: Rule) => [
        rule.min(6).error("Minimum of six features is required"),
        rule.unique().error("No duplicates."),
        rule.required().error("Features are required"),
      ],
    },
    {
      name: "box",
      title: "Box content",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          validation: (rule: Rule) =>
            rule.required().error("Title is required"),
        },
        {
          name: "text",
          type: "text",
          rows: 3,
          title: "Text",
          validation: (rule: Rule) => rule.required().error("Text is required"),
        },
      ],
      validation: (rule: Rule) => [
        rule.required().error("Box content is required"),
      ],
    },
  ],
  validation: (rule: Rule) => [
    rule.required().error("Choose us section is required"),
  ],
};

const pricingSection: FieldObject = {
  name: "pricing",
  title: "Pricing section",
  group: "pricing",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Pricing title is required"),
      ],
    },
    {
      name: "plans",
      title: "Pricing plans",
      type: "array",
      of: [{ type: "reference", to: [{ type: "price" }] }],
      validation: (rule: Rule) => [
        rule.required().error("Pricing are required"),
        rule.unique().error("Pricing must be unique"),
      ],
    },
  ],
  validation: (rule: Rule) => [
    rule.required().error("Pricing section is required"),
  ],
};

const contactBannerOne: FieldObject = {
  name: "contactBannerOne",
  title: "Contact Banner One",
  group: "contactBannerOne",
  type: "object",
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
  validation: (rule: Rule) => [
    rule.required().error("Contact banner section is required"),
  ],
};

const contactSection: FieldObject = {
  name: "contact",
  title: "Contact Section",
  group: "contact",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Title is required")],
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      rows: 5,
      validation: (rule: Rule) => [rule.required().error("Text is required")],
    },
    {
      name: "cta",
      title: "CTA's",
      type: "array",
      of: [
        {
          name: "cta",
          title: "CTA",
          type: "cta",
          validation: (rule: Rule) => rule.required().error("CTA  is required"),
        },
      ],
      validation: (rule: Rule) => rule.required().error("CTA  is required"),
    },
  ],
  validation: (rule: Rule) => [
    rule.required().error("Contact section is required"),
  ],
};

const blogSection: FieldObject = {
  name: "blog",
  title: "Blog section",
  group: "blog",
  type: "object",
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
  validation: (rule: Rule) => [
    rule.required().error("Service section is required"),
  ],
};

const faqSection: FieldObject = {
  name: "faq",
  title: "FAQ section",
  group: "faq",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule: Rule) => rule.required().error("Title is required"),
    },
    {
      name: "faq",
      title: "FAQ's",
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
  validation: (rule: Rule) => rule.required().error("FAQ is required"),
};

const contactBannerTwo: FieldObject = {
  name: "contactBannerTwo",
  title: "Contact Banner Two",
  group: "contactBannerTwo",
  type: "object",
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
  validation: (rule: Rule) => [
    rule.required().error("contat Banner section is required"),
  ],
};

export const home: SchemaTypeDefinition = {
  name: "home",
  type: "document",
  icon: Icons.house,
  groups: homeSections,
  fields: [
    heroSection,
    servicesSection,
    aboutSection,
    workingProcessSection,
    projectsSection,
    testimonialsSection,
    chooseUsSection,
    pricingSection,
    contactBannerOne,
    contactSection,
    blogSection,
    faqSection,
    contactBannerTwo,
  ],
  preview: {
    prepare() {
      return {
        title: "Home page",
      };
    },
  },
};
