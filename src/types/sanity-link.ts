export type SanityLink = {
  _key: string;
  label: string | "link" | null;
  type: "email" | "pdf" | "phone" | "reference" | "url";
  reference:
    | {
        _type: "page";
        slug: string | null;
      }
    | {
        _type: "post";
        slug: string;
      }
    | {
        _type: "project";
        slug: string;
      }
    | {
        _type: "service";
        slug: string;
      }
    | null;
  url: string | null;
};
