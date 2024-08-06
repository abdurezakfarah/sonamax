import { GoogleTagManager as GTM } from "@next/third-parties/google";
import { GTMParams } from "node_modules/@next/third-parties/dist/types/google";

export function GoogleTagManager(props: GTMParams) {
  if (process.env.NODE_ENV !== "production") return null;
  return <GTM {...props} />;
}
