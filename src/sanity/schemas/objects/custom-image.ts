import type { ImageDefinition } from "sanity";

export const customImage: ImageDefinition = {
  name: "customImage",
  type: "image",
  fields: [
    { type: "text", name: "caption", title: "Caption", rows: 3 },
    { type: "text", name: "alt", title: "Alternative text", rows: 2 },
  ],
  options: {
    hotspot: true,
  },
};
