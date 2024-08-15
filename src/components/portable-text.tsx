import { urlForImage } from "@/sanity/lib/image";
import {
  type PortableTextComponents,
  type PortableTextProps as PortableTextPropsType,
  PortableText as PortableTextReact,
  toPlainText,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { Callout } from "./callout";

interface PortableTextProps extends PortableTextPropsType {
  components?: PortableTextComponents;
}

export function PortableText({
  components = portableTextComponents,
  ...props
}: PortableTextProps) {
  return <PortableTextReact components={components} {...props} />;
}

const portableTextComponents: PortableTextComponents = {
  types: {
    customImage: ({ value }) => (
      <Image
        src={urlForImage(value)}
        alt="Post"
        width={720}
        height={405}
        className="bg-muted my-8 rounded-md border transition-colors"
      />
    ),

    callout: ({ value }) => {
      return (
        <Callout
          title={value.title}
          type={value.type}
          description={value.description}
        />
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="font-medium underline underline-offset-4"
        >
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {children}
      </code>
    ),
    highlight: ({ children }) => (
      <mark style={{ backgroundColor: "yellow" }}>{children}</mark>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-2">{children}</li>,
    number: ({ children }) => <li className="mt-2">{children}</li>,
  },
  block: {
    normal: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),

    h1: ({ children, value }) => (
      <h1
        id={slugify(toPlainText(value))}
        className="mt-2 scroll-m-20 font-title text-4xl font-bold tracking-tight"
      >
        {children}
      </h1>
    ),

    h2: ({ children, value }) => (
      <h2
        id={slugify(toPlainText(value))}
        className="mt-10 scroll-m-20 border-b pb-1 font-title text-3xl font-semibold leading-[1.2] tracking-tight first:mt-0"
      >
        {children}
      </h2>
    ),

    h3: ({ children, value }) => (
      <h3
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 font-title text-2xl font-semibold tracking-tight"
      >
        {children}
      </h3>
    ),

    h4: ({ children, value }) => (
      <h4
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 font-title text-xl font-semibold tracking-tight"
      >
        {children}
      </h4>
    ),
    h5: ({ children, value }) => (
      <h5
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 font-title text-lg font-semibold tracking-tight"
      >
        {children}
      </h5>
    ),
    h6: ({ children, value }) => (
      <h6
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 font-title text-base font-semibold tracking-tight"
      >
        {children}
      </h6>
    ),
    blockquote: ({ children, value }) => (
      <blockquote
        id={slugify(toPlainText(value))}
        className="text-muted-foreground [&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic"
      >
        {children}
      </blockquote>
    ),
  },
};
