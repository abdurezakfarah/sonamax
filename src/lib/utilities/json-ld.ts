import type { Thing, WithContext } from "schema-dts";

export function jsonLd<T extends Thing>(json: WithContext<T>): string {
  return JSON.stringify(json);
}
