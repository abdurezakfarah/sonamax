import contactBannerBg from "@/assets/images/backgrounds/contact-banner.jpg";
import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "./cta";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

export function ContactBannerOne() {
  return (
    <section className="container mb-7">
      <div className="relative flex flex-col justify-between gap-4 p-7 md:flex-row md:items-center">
        <Image
          src={contactBannerBg}
          alt="contact bg image"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <strong className="relative max-w-sm font-title text-lg font-semibold uppercase text-white sm:text-2xl md:text-3xl">
          We&apos;re shaping the perfect <br /> Marketing solutions
        </strong>
        <CallToAction>
          <Link href="/contact-us">Free consultation</Link>
          <Icons.arrowUpRight size={18} aria-hidden />
        </CallToAction>
      </div>
    </section>
  );
}
export function ContactBannerTwo() {
  return (
    <section className="container relative flex flex-col justify-between gap-7 bg-primary px-7 py-16 before:absolute before:inset-0 before:bg-pattern before:bg-cover before:bg-no-repeat md:flex-row md:items-center">
      <h2 className="font-title text-3xl font-semibold uppercase text-white md:max-w-sm">
        Have a project? <br /> Let's discuss
      </h2>
      <div className="flex gap-7 max-md:flex-col">
        <CallToAction variant="secondary" className="py-5">
          <Link href="/contact-us">Free consultation</Link>
          <Icons.arrowUpRight size={18} aria-hidden />
        </CallToAction>
        <CallToAction
          variant="outline"
          className="flex-row-reverse items-center gap-x-2 py-5 text-white hover:text-white"
        >
          <Link href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</Link>
          <Icons.phone className="size-4" aria-hidden />
        </CallToAction>
      </div>
    </section>
  );
}
