import { ContactForm } from "@/components/contact-form";
import { Icon, Icons } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact us",
};


export default function Page() {
  return (
    <main>
      <PageHeader title="Contact us" />

      <section className="container gap-7 max-md:space-y-14 py-8 md:flex md:gap-10">
        <div className="flex flex-1">
          <ContactForm title="Feel free to write" formClassName="flex-1" />
        </div>
        <div className="flex-1">
          <h2 className="mb-5 text-balance font-title text-2xl font-bold uppercase sm:text-2xl md:text-3xl lg:text-4xl">
            We'd Love to Hear from You!
          </h2>
          <p>
            If you have any questions, feedback, or just want to say hello, feel
            free to reach out. We're here to help and always happy to connect!
          </p>
          <div className="mt-7 space-y-5">
            <Card
              Icon={Icons.phone}
              title="Have a question?"
              text="+254 (0) 799 992 045"
              href="tel:+254799992045"
            />
            <Card
              Icon={Icons.mail}
              title="Write an email"
              text="info@sonamax.com"
              href="mailto:info@sonamax.com"
            />
            <Card
              Icon={Icons.mapPin}
              title="Visit any time"
              text="Juja rd, Nairobi, Kenya"
              href="http://maps.google.com/?q=Mweni rd, Nairobi, Kenya"
              external
            />
          </div>
        </div>
      </section>
    </main>
  );
}

interface CardProps {
  Icon: Icon;
  title: string;
  text: string;
  href?: string;
  external?: boolean
}

function Card({ Icon, title, text, href, external }: CardProps) {
  return (
    <article className="relative flex gap-3">
      <div
        className="flex size-14 items-center justify-center bg-primary"
        aria-hidden={true}
      >
        <Icon className="text-primary-content" size={20} />
      </div>
      <hgroup>
        <h3 className="font-title text-sm">{title}</h3>
        <p className="w-fit font-title text-sm font-medium text-copy-lighter">
          {text}
        </p>
      </hgroup>
      {href && (
        <Link href={href} target={external && "_blank" || undefined } className="absolute inset-0">
          <span className="sr-only">{text}</span>
        </Link>
      )}
    </article>
  );
}
