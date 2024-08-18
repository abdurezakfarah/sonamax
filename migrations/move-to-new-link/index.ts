import { at, defineMigration, set } from "sanity/migrate";

//adapting the footer section links to the new link type

export default defineMigration({
  title: "move to new link",
  documentTypes: ["configuration"],

  migrate: {
    document(doc, context) {
      const { footer, ...restDoc } = doc;

      const newFooter = (footer as Array<any>).map((section) => {
        const { links, ...rest } = section;
        const newLinks = (links as Array<any>).map(({ title, ...rest }) => ({
          ...rest,
          label: title,
          type: "url",
        }));
        return { ...rest, links: newLinks };
      });

      return [at("footer", set(newFooter))];
    },
  },
});
