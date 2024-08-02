import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { Icons } from "./icons";
import { PortableText } from "./portable-text";

const icons = {
  info: Icons.info,
  success: Icons.circleCheck,
  warning: Icons.triangleAlert,
  error: Icons.skull,
};

interface CalloutProps {
  title?: string;
  description: any;
  type: "info" | "success" | "warning" | "error" | null | undefined;
}

export function Callout({ type = "info", title, description }: CalloutProps) {
  const Icon = type ? icons[type] : null;
  return (
    <Alert variant={type} className="my-6">
      {Icon && <Icon className="h-4 w-4" />}
      {title && <AlertTitle className="mb-4 font-bold">{title}</AlertTitle>}
      <AlertDescription>
        <PortableText value={description} components={portableTextComponents} />
      </AlertDescription>
    </Alert>
  );
}

const portableTextComponents: PortableTextComponents = {
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
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-2 ml-6 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-2 ml-6 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-1 text-sm">{children}</li>,
    number: ({ children }) => <li className="mt-1 text-sm">{children}</li>,
  },
  block: {
    normal: ({ children }) => (
      <p className="text-sm [&:not(:first-child)]:mt-2">{children}</p>
    ),
  },
};
