import { definePlugin } from "sanity";
import { linkType } from "./link-type";
import { LinkPluginOPtions } from "./types";

export const link = definePlugin<LinkPluginOPtions | void>((opts) => {
  const { references } = opts || {};
  return {
    name: "link",
    schema: {
      types: [linkType({references})],
    },
  };
});
