import servicesBgImage from "@/assets/images/backgrounds/services.jpg";
import { CallToAction } from "@/components/cta";
import { Icon, Icons } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Services",
};

export default function Page() {
  return (
    <main>
      <PageHeader title="Services" />
      <section className="relative py-14">
        <Image
          src={servicesBgImage}
          alt="services bg image"
          fill
          sizes="100vw"
          className="pointer-events-none absolute z-0 object-cover"
        />
        <ul className="container grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <Service service={service} index={index} />
          ))}
        </ul>
      </section>
    </main>
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
    <article className="group relative z-0 flex flex-col gap-y-4 rounded border border-primary-light bg-foreground px-6 py-7 shadow-sm duration-700 before:absolute before:left-0 before:top-0 before:-z-10 before:size-full before:origin-[top_center] before:scale-y-0 before:bg-primary before:transition-all before:duration-300 before:content-[''] hover:bg-transparent hover:before:scale-y-100">
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

      <CallToAction variant="outline" asChild>
        <Link href={`/services/${service.slug}`}>Learn more</Link>
      </CallToAction>
    </article>
  );
}
