"use client";

import heroBannerImage from "@/assets/images/backgrounds/hero-banner.jpg";
import { cn } from "@/lib/utilities/cn";
import { fadeIn } from "@/lib/utilities/framer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

export function Hero() {
  return (
    <div className="relative flex h-[calc(100vh-5rem)] items-center justify-between">
      <Image
        src={heroBannerImage}
        alt="Hero banner image"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="container">
        <section className="space-y-10">
          <hgroup className="space-y-5">
            <motion.h1
              variants={fadeIn("right", 0.1, 1)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              className="text-balance font-title text-4xl font-bold uppercase leading-[1.2em] text-white md:text-5xl lg:max-w-3xl"
            >
              Your Partner for Digital marketing activities
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.1, 1)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              className="max-w-md font-semibold text-white/90 md:text-lg"
            >
              With every single one of our clients, we bring forth a deep
              passion for creative problem solving — which is what we deliver.
            </motion.p>
          </hgroup>
          <div className="flex gap-4 md:gap-7">
            <motion.div
              variants={fadeIn("up", 0.2, 1)}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="services"
                className={cn("theme-btn", buttonVariants({ size: "lg" }))}
              >
                <span>Our services</span>
                <Icons.arrowUpRight size={18} aria-hidden />
              </Link>
            </motion.div>
            <Link href="#">
              <motion.div
                variants={fadeIn("right", 0.1, 1)}
                initial="hidden"
                animate="visible"
                className="relative inline-flex items-center gap-3"
              >
                <div className="flex size-11 items-center justify-center border border-primary">
                  <Icons.play
                    className="fill-primary text-primary"
                    size={20}
                    aria-hidden
                  />
                </div>
                <span className="font-title text-sm font-semibold uppercase text-white">
                  Play intro
                </span>
              </motion.div>
            </Link>
          </div>
        </section>
        <aside className="absolute right-20 top-8 hidden origin-[right_top] -translate-y-1/2 -rotate-90 items-center md:flex">
          <h4 className="relative mb-0 mr-14 w-fit pr-5 font-semibold uppercase text-white before:absolute before:left-full before:top-1/2 before:h-px before:w-7 before:-translate-y-1/2 before:bg-white before:content-['']">
            Follow us
          </h4>
          <ul className="inline-block">
            <li className="mr-2.5 inline-block [&:n0t:last-child]:mr-0">
              <Link
                href="#"
                title=""
                className="inline-flex size-8 items-center justify-center rounded-full border text-center text-white"
              >
                <Icons.facebook className="size-3.5" />
              </Link>
            </li>
            <li className="mr-2.5 inline-block [&:n0t:last-child]:mr-0">
              <Link
                href="#"
                title=""
                className="inline-flex size-8 items-center justify-center rounded-full border text-center text-white"
              >
                <Icons.instagram className="size-3.5" />
              </Link>
            </li>
            <li className="mr-2.5 inline-block [&:n0t:last-child]:mr-0">
              <Link
                href="#"
                title=""
                className="inline-flex size-8 items-center justify-center rounded-full border text-center text-white"
              >
                <Icons.mail className="size-3.5" />
              </Link>
            </li>
            <li className="mr-2.5 inline-block [&:n0t:last-child]:mr-0">
              <Link
                href="#"
                title=""
                className="inline-flex size-8 items-center justify-center rounded-full border text-center text-white"
              >
                <Icons.twitter className="size-3.5" />
              </Link>
            </li>
            <li className="mr-2.5 inline-block [&:n0t:last-child]:mr-0">
              <Link
                href="#"
                title=""
                className="inline-flex size-8 items-center justify-center rounded-full border text-center text-white"
              >
                <Icons.whatsapp className="size-3.5" />
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
