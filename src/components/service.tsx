import { Icon } from "@iconify/react";
import Link from "next/link";

interface Service {
  _id: string;
  title: string;
  slug: string;
  description: string;
  icon: {
    name: string | null;
  };
}

export function Service({ title, slug, description, icon }: Service) {
  return (
    <article className="group relative flex flex-col gap-y-5 rounded border border-primary-light bg-foreground px-6 py-7 shadow-sm duration-700 before:absolute before:left-0 before:top-0 before:-z-10 before:size-full before:origin-[top_center] before:scale-y-0 before:bg-primary before:transition-all before:duration-300 before:content-[''] hover:bg-transparent hover:before:scale-y-100">
      <div
        className="group-hover:scale-80 flex w-fit items-center justify-center bg-primary p-3.5 text-primary-content duration-300 group-hover:bg-foreground group-hover:text-copy"
        aria-hidden
      >
        <Icon
          icon={icon.name as string}
          className="size-[30px] transition-transform duration-300 group-hover:size-6"
        />
      </div>
      <hgroup className="space-y-2">
        <h3 className="font-title text-2xl uppercase tracking-tight group-hover:text-primary-content">
          {title}
        </h3>
        <p className="leading-tight text-copy-light group-hover:text-primary-content">
          {description}
        </p>
      </hgroup>

      <Link href={`/services/${slug}`} className="absolute inset-0">
        <span className="sr-only">Learn more</span>
      </Link>
    </article>
  );
}
