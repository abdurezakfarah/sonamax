"use client";

import { fadeIn } from "@/lib/utilities/framer";
import { motion } from "framer-motion";
import Link from "next/link";
import { type Icon, Icons } from "./icons";

const services = [
  {
    icon: Icons.handshake,
    title: "Digital Marketing",
    description: "Organically grow the the holistic world view way into.",
    slug: "digital-marketing",
  },
  {
    icon: Icons.handshake,
    title: "Branding Design",
    description: "Organically grow the the holistic world view way into.",
    slug: "branding-design",
  },
  {
    icon: Icons.handshake,
    title: "Web Development",
    description: "Organically grow the the holistic world view way into.",
    slug: "web-development",
  },
  {
    icon: Icons.handshake,
    title: "Apps Development",
    description: "Organically grow the the holistic world view way into.",
    slug: "apps-development",
  },
];

export function Services() {
  return (
    <section className="container mt-8 py-8">
      <motion.h2
        variants={fadeIn("up", 0.1, 0.85)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl"
      >
        WE WILL PROVIDE YOU THE BEST SERVICE
      </motion.h2>
      <ul className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <Service key={service.slug + index} service={service} index={index} />
        ))}
      </ul>
    </section>
  );
}

interface ServiceProps {
  service: {
    icon: Icon;
    title: string;
    description: string;
    slug: string;
  };
  index: number;
}

function Service({ service }: ServiceProps) {
  return (
    <article className="group relative flex flex-col gap-y-5 rounded border border-primary-light bg-foreground px-6 py-7 shadow-sm duration-700 before:absolute before:left-0 before:top-0 before:-z-10 before:size-full before:origin-[top_center] before:scale-y-0 before:bg-primary before:transition-all before:duration-300 before:content-[''] hover:bg-transparent hover:before:scale-y-100">
      <div
        className="group-hover:scale-80 flex w-fit items-center justify-center bg-primary p-3 text-primary-content duration-300 group-hover:bg-foreground group-hover:text-copy"
        aria-hidden
      >
        <service.icon className="size-7 group-hover:size-6" />
      </div>
      <hgroup className="space-y-2">
        <h3 className="font-title text-2xl uppercase tracking-tight group-hover:text-primary-content">
          {service.title}
        </h3>
        <p className="text-sm leading-tight text-copy-light group-hover:text-primary-content">
          {service.description}
        </p>
      </hgroup>

      <Link href={`/services/${service.slug}`} className="absolute inset-0">
        <span className="sr-only">Learn more</span>
      </Link>
    </article>
  );
}
