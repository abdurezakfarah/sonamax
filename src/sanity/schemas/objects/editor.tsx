import { Icons } from "@/components/icons";
import type { BlockDecoratorProps } from "sanity";

function HighlightDecorator({ children }: BlockDecoratorProps) {
  return <mark style={{ backgroundColor: "yellow" }}>{children}</mark>;
}

export const editor = {
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
          {
            title: "Highlight",
            value: "highlight",
            icon: <Icons.highlighter className="size-3" />,
            component: HighlightDecorator,
          },
        ],
      },
    },
    {
      type: "customImage",
      title: "Image",
    },
    // {
    //   type: "customCode",
    //   title: "Code",
    // },
    {
      type: "callout",
      title: "Callout",
    },
  ],
};
