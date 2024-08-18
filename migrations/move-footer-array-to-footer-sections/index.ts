import { at, defineMigration, set } from "sanity/migrate";



export default defineMigration({
  title: "move footer array to footer sections",
  documentTypes: ["configuration"],

  migrate: {
    document(doc, context) {
      const { footer } = doc;

      const newFooter = {
        sections: footer,
      };

      return at("footer", set(newFooter));
    },
  },
});
