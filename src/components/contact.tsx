"use client";
import chooseBgImage from "@/assets/images/backgrounds/choose-us.jpg";
import { siteConfig } from "@/config/site";
import { fadeIn } from "@/lib/utilities/framer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { Icons, type Icon } from "./icons";
export function Contact() {
  return (
    <section id="contact" className="relative py-14">
      <Image
        src={chooseBgImage}
        alt="dark bg image"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="container flex gap-y-10 max-md:flex-col">
        <div className="flex-1">
          <hgroup className="mb-10 space-y-4">
            <motion.h2
              variants={fadeIn("right", 0.1, 1)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              className="text-balance font-title text-xl font-bold uppercase text-white sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Elevate Your Business with Our Partnership
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.2, 1)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              className="text-sm text-white/90"
            >
              Partner with us, and we&apos;ll use our skills to help your
              business succeed. We&apos;re eager to work with you and make your
              goals a reality. Together, we&apos;ll achieve great results and
              build a successful future.
            </motion.p>
          </hgroup>
          <div className="grid gap-5 sm:grid-cols-2">
            <ActionCard
              Icon={Icons.mapPin}
              title="Locoation"
              text={siteConfig.location}
            />
            <ActionCard
              Icon={Icons.mail}
              title="Email"
              text={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ActionCard
              Icon={Icons.phone}
              title="Phone"
              text={siteConfig.phone}
              href={`tel:${siteConfig.phone}`}
            />
            <ActionCard
              Icon={Icons.globe}
              title="Website"
              text={siteConfig.website!}
              href={siteConfig.website}
            />
          </div>
        </div>
        <div className="relative flex flex-1">
          <ContactForm title="Get in touch" />
        </div>
      </div>
    </section>
  );
}

interface ActionActionCardProps {
  Icon: Icon;
  title: string;
  text: string;
  href?: string;
}

function ActionCard({ Icon, title, text, href }: ActionActionCardProps) {
  return (
    <article className="relative flex gap-3">
      <div
        className="flex size-11 items-center justify-center bg-foreground"
        aria-hidden={true}
      >
        <Icon className="text-primary" size={20} />
      </div>
      <hgroup>
        <h3 className="font-title text-sm text-copy-lighter">{title}</h3>
        <p className="w-fit font-title text-sm font-medium text-white">
          {text}
        </p>
      </hgroup>
      {href && (
        <Link href={href} className="absolute inset-0">
          <span className="sr-only">{text}</span>
        </Link>
      )}
    </article>
  );
}
