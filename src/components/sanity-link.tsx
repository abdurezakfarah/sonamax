import { type SanityLink } from "@/types";
import Link from "next/link";

type SanityLinkProps = {
  link: SanityLink;
};

const typeSegments = {
  page: "",
  post: "blog",
  service: "services",
  project: "projects",
};

export function SanityLink(props: SanityLinkProps) {
  const { link } = props;
  let linkUrl: string;

  if (link.type === "reference") {
    const baseSegment =
      typeSegments[link.reference?._type as keyof typeof typeSegments];
    linkUrl = `${baseSegment}/${link.reference?.slug}`;
  } else {
    linkUrl = link.url!;
  }

  return <Link href={linkUrl}>{link.label}</Link>;
}
