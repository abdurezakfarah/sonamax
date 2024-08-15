import heroBannerImage from "@/assets/images/backgrounds/hero-banner.jpg";
import { cn } from "@/lib/utilities/cn";
import { PageQueryResult } from "@/sanity/sanity.types";
import { ItemType } from "@/types";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { callToActionVariants } from "./cta";
import { Icons } from "./icons";

type Content = NonNullable<PageQueryResult>["content"];

// Extract the type of hero block from the custom blocks
type HeroBlock = Extract<ItemType<NonNullable<Content>>, { _type: "hero" }>;

export function Hero({
  title,
  text,
  primaryCta,
  secondaryCta,
  socialLinks,
}: HeroBlock) {
  return (
    <section className="relative z-10 flex h-[calc(100vh-5rem)] items-center justify-between lg:pl-8">
      <Image
        src={heroBannerImage}
        alt="Hero banner image"
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover"
        priority
      />
      <div className="container">
        <section className="space-y-10">
          <hgroup className="space-y-5">
            <h1 className="text-balance font-title text-4xl font-bold uppercase leading-[1.2em] text-white md:text-5xl lg:max-w-3xl">
              {title}
            </h1>
            <p className="max-w-md font-semibold text-white/90 md:text-lg">
              {text}
            </p>
          </hgroup>
          <div className="flex gap-4 md:gap-7">
            <Link
              href={primaryCta.url}
              className={cn(callToActionVariants(), "h-14")}
            >
              <span>{primaryCta.text}</span>
              <Icons.arrowUpRight size={18} aria-hidden />
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.url}
                className="relative inline-flex items-center gap-3"
              >
                <div className="flex size-14 items-center justify-center border border-primary">
                  <Icons.play
                    className="size-7 fill-primary text-primary"
                    aria-hidden
                  />
                </div>
                <span className="font-title text-sm font-semibold uppercase text-white">
                  {secondaryCta.text}
                </span>
              </Link>
            )}
          </div>
        </section>
        {socialLinks && <SocialLinks socialLinks={socialLinks} />}
      </div>
    </section>
  );
}

type SocialLinksProps = {
  socialLinks: HeroBlock["socialLinks"];
};

function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <aside className="absolute right-20 top-8 hidden origin-[right_top] -translate-y-1/2 -rotate-90 items-center md:flex">
      <h2 className="relative mb-0 mr-14 w-fit pr-5 font-semibold uppercase text-white before:absolute before:left-full before:top-1/2 before:h-px before:w-7 before:-translate-y-1/2 before:bg-white before:content-['']">
        Follow us
      </h2>
      <ul className="inline-block">
        {socialLinks?.map((link) => (
          <li
            key={link._key}
            className="mr-2.5 inline-block [&:n0t:last-child]:mr-0"
          >
            <Link
              href={link.url}
              title={link.name}
              className="inline-flex size-8 items-center justify-center rounded-full border text-center text-white [&>svg]:size-3.5"
            >
              <Icon icon={link.icon.name!} />
              <span className="sr-only">Follow us on:{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
