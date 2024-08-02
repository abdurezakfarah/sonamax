"use client";
import contactBannerBg from "@/assets/images/backgrounds/contact-banner.jpg";
import Image from "next/image";
import Link from "next/link";
import { preview } from "sanity-plugin-icon-picker";
import { CallToAction } from "./cta";
import { Icons } from "./icons";

interface ContactBannerOne {
  text: string;
  cta: {
    text: string;
    icon: {
      name: string;
      provider: string;
    } | null;
    url: string;
  };
}

interface ContactBannerTwo {
  text: string;
  primaryCta: {
    text: string;
    icon: {
      name: string;
      provider: string;
    } | null;
    url: string;
  };
  secondaryCta: {
    text: string;
    icon: {
      name: string;
      provider: string;
    } | null;
    url: string;
  } | null;
}

export function ContactBannerOne({ text, cta }: ContactBannerOne) {
  return (
    <section className="container mb-7">
      <div className="relative flex flex-col justify-between gap-4 p-7 md:flex-row md:items-center">
        <Image
          src={contactBannerBg}
          alt="contact bg image"
          fill
          sizes="100vw"
          className="pointer-events-none -z-10 object-cover"
        />
        <strong className="relative z-10 max-w-sm font-title text-lg font-semibold uppercase text-white sm:text-2xl md:text-3xl">
          {text}
        </strong>

        <CallToAction>
          <Link href="/contact-us">{cta.text}</Link>
          {cta.icon && (
            <div className="[&>svg]:size-5">{preview(cta.icon)}</div>
          )}
        </CallToAction>
      </div>
    </section>
  );
}

export function ContactBannerTwo({
  text,
  primaryCta,
  secondaryCta,
}: ContactBannerTwo) {
  return (
    <section className="container relative flex flex-col justify-between gap-7 bg-primary px-7 py-16 before:absolute before:inset-0 before:bg-pattern before:bg-cover before:bg-no-repeat md:flex-row md:items-center">
      <h2 className="font-title text-3xl font-semibold uppercase text-white md:max-w-sm">
        {text}
      </h2>
      <div className="flex gap-7 max-md:flex-col">
        <CallToAction variant="secondary" className="py-5">
          <Link href={primaryCta.url}>{primaryCta.text}</Link>
          <Icons.arrowUpRight size={18} aria-hidden />
        </CallToAction>
        {secondaryCta && (
          <CallToAction
            variant="outline"
            className="flex-row-reverse items-center gap-x-2 py-5 text-white hover:text-white"
          >
            <Link href={secondaryCta.url}>{secondaryCta.text}</Link>
            {secondaryCta.icon && preview(secondaryCta.icon)}
          </CallToAction>
        )}
      </div>
    </section>
  );
}
