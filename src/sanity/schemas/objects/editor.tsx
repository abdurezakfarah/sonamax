import { defineType } from "sanity";

export const editor = defineType({
  name: "editor",
  title: "Editor",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          // {
          //   type: "stats",
          // },
          {
            type: "highlightColor",
          },
          {
            type: "textColor",
          },
        ],
      },
    },
    {
      type: "customImage",
      title: "Image",
    },
    {
      type: "callout",
      title: "Callout",
    },
  ],
});
