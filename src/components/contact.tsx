import chooseBgImage from "@/assets/images/backgrounds/choose-us.jpg";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";

interface Cta {
  _key: string;
  title: string | null;
  text: string;
  icon: {
    name: string | null;
  } | null;
  url: string;
}

interface Contact {
  title: string;
  text: string;
  cta: Array<Cta>;
}

export function Contact({ title, text, cta: ctas }: Contact) {
  return (
    <section id="contact" className="relative py-14">
      <Image
        src={chooseBgImage}
        alt="dark bg image"
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover"
      />
      <div className="container z-10 flex gap-y-10 max-md:flex-col">
        <div className="flex-1">
          <hgroup className="mb-10 space-y-4">
            <h2 className="text-balance font-title text-xl font-bold uppercase text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="text-white/90">{text}</p>
          </hgroup>
          <div className="grid gap-5 sm:grid-cols-2">
            {ctas.map((cta) => (
              <ActionCard key={cta._key} {...cta} />
            ))}
          </div>
        </div>
        <div className="relative flex flex-1">
          <ContactForm title="Get in touch" />
        </div>
      </div>
    </section>
  );
}

function ActionCard({ icon, title, text, url }: Cta) {
  return (
    <article className="relative flex gap-3">
      {icon && (
        <div
          className="flex size-11 items-center justify-center bg-foreground text-primary"
          aria-hidden={true}
        >
          <Icon icon={icon.name as string} className="size-7" />
        </div>
      )}

      <hgroup>
        <h3 className="font-title text-sm text-copy-lighter">{title}</h3>
        <p className="w-fit font-title text-sm font-medium text-white">
          {text}
        </p>
      </hgroup>
      {url && (
        <Link href={url} className="absolute inset-0">
          <span className="sr-only">{text}</span>
        </Link>
      )}
    </article>
  );
}
