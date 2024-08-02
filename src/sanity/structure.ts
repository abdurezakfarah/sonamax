import { Icons } from "@/components/icons";
import type { StructureBuilder } from "sanity/structure";
import { excludedListTypes } from "./schemas";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Configuration")
        .icon(Icons.cog)
        .child(
          S.document().schemaType("configuration").documentId("configuration"),
        ),
      /* PAGES */
      S.listItem()
        .title("Pages")
        .icon(Icons.stickyNote)
        .child(
          S.list()
            .title("pages")
            .items([
              /* PAGE - HOME */
              S.listItem()
                .title("Home")
                .icon(Icons.house)
                .child(S.document().schemaType("home").documentId("home")),
            ]),
        ),

      /* DOCUMENT TYPES EXCEPT THE EXCLUDED ONES */
      ...S.documentTypeListItems().filter(
        (listItem) => !excludedListTypes.has(listItem.getId()!),
      ),
    ]);
