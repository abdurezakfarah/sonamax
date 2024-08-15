import contactBannerBg from "@/assets/images/backgrounds/contact-banner.jpg";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "./cta";
import { Icons } from "./icons";
import { PageQueryResult } from "@/sanity/sanity.types";
import { ItemType } from "@/types";

type Content = NonNullable<PageQueryResult>["content"];

type ContactBannerOne = Extract<ItemType<NonNullable<Content>>, { _type: "contactBannerOne" }>;
type ContactBannerTwo = Extract<ItemType<NonNullable<Content>>, { _type: "contactBannerTwo" }>;


export function ContactBannerOne({ text, cta }: ContactBannerOne) {
  return (
    <section className="container py-10 lg:py-16">
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
            <Icon icon={cta.icon.name as string} className="size-6" />
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
    <section className="container relative flex flex-col justify-between gap-7 bg-primary px-7 py-10 before:absolute before:inset-0 md:flex-row md:items-center lg:py-16">
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
            {secondaryCta.icon && (
              <Icon
                icon={secondaryCta.icon.name as string}
                className="size-6"
              />
            )}
          </CallToAction>
        )}
      </div>
    </section>
  );
}
