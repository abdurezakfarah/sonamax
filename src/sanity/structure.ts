import { Icons } from "@/components/icons";
import type { StructureResolver } from "sanity/structure";
import { excludedListTypes } from "./schemas";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      /* PAGES */
      S.listItem()
        .title("Pages")
        .icon(Icons.stickyNote)
        .child(
           S.documentList()
           .title("Pages")
           .filter("_type == 'home' || _type == 'page'")
        ),

      /* DOCUMENT TYPES EXCEPT THE EXCLUDED ONES */
      ...S.documentTypeListItems().filter(
        (listItem) => !excludedListTypes.has(listItem.getId()!),
      ),

      S.divider(),

      /* CONFIGURATION */
      S.listItem()
        .title("Configuration")
        .icon(Icons.cog)
        .child(
          S.document().schemaType("configuration").documentId("configuration"),
        ),
    ]);
