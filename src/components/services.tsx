"use client";

import Link from "next/link";
import { preview } from "sanity-plugin-icon-picker";

interface Service {
  _id: string;
  title: string;
  slug: string;
  description: string;
  icon: {
    provider: string;
    name: string;
  };
}

interface ServicesProps {
  title: string;
  services: Service[];
}

export function Services({ services, title }: ServicesProps) {
  return (
    <section className="container mt-8 py-8">
      <h2 className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <ul className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service) => (
          <Service key={service._id} {...service} />
        ))}
      </ul>
    </section>
  );
}

function Service({ title, slug, description, icon }: Service) {
  return (
    <article className="group relative flex flex-col gap-y-5 rounded border border-primary-light bg-foreground px-6 py-7 shadow-sm duration-700 before:absolute before:left-0 before:top-0 before:-z-10 before:size-full before:origin-[top_center] before:scale-y-0 before:bg-primary before:transition-all before:duration-300 before:content-[''] hover:bg-transparent hover:before:scale-y-100">
      <div
        className="group-hover:scale-80 flex w-fit items-center justify-center bg-primary p-3 text-primary-content duration-300 group-hover:bg-foreground group-hover:text-copy [&>svg]:size-7 [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:size-6"
        aria-hidden
      >
        {preview(icon)}
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
