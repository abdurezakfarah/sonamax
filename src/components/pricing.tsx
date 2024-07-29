"use client";

import shapeBgImage from "@/assets/images/backgrounds/shape.jpg";
import { fadeIn } from "@/lib/utilities/framer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "./cta";
import { Icons } from "./icons";

export function Pricing() {
  return (
    <section className="container mt-8 py-8">
      <motion.h2
        variants={fadeIn("up", 0.1, 0.85)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Pricing Packages
      </motion.h2>
      <div className="flex flex-wrap justify-between gap-x-8 gap-y-7">
        <Price />
        <Price />
        <Price />
      </div>
    </section>
  );
}

function Price() {
  return (
    <article className="flex-1 rounded-sm bg-foreground p-7 shadow-sm transition duration-300 hover:-translate-y-2">
      <h3 className="font-title text-xl font-medium">Basic Plan</h3>
      <div className="mt-3 flex gap-5">
        <p className="font-title text-4xl font-extrabold text-primary">
          $59.99
        </p>
        <div className="text-xs">
          <p>per user</p>
          <p>per month</p>
        </div>
      </div>
      <div className="w-[calc(100% + 1.75rem)] relative -mx-7 mt-7 p-1 px-7">
        <Image
          src={shapeBgImage}
          alt="shape bg image"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <p className="relative font-title text-lg text-white">
          What you will get
        </p>
      </div>

      <ul className="mt-7 space-y-3 text-sm">
        <li className="flex gap-2">
          <div className="h-fit rounded-full bg-primary">
            <Icons.check className="size-3.5 p-0.5 text-white" />
          </div>
          Comprehensive offerings
        </li>
        <li className="flex gap-2">
          <div className="h-fit rounded-full bg-primary">
            <Icons.check className="size-3.5 p-0.5 text-white" />
          </div>
          Comprehensive offerings
        </li>
        <li className="flex gap-2">
          <div className="h-fit rounded-full bg-primary">
            <Icons.check className="size-3.5 p-0.5 text-white" />
          </div>
          Comprehensive offerings
        </li>
        <li className="flex gap-2">
          <div className="h-fit rounded-full bg-primary">
            <Icons.check className="size-3.5 p-0.5 text-white" />
          </div>
          Comprehensive offerings
        </li>
        <li className="flex gap-2">
          <div className="h-fit rounded-full bg-primary">
            <Icons.check className="size-3.5 p-0.5 text-white" />
          </div>
          Comprehensive offerings
        </li>
        <li className="flex gap-2">
          <div className="h-fit rounded-full bg-primary">
            <Icons.check className="size-3.5 p-0.5 text-white" />
          </div>
          Comprehensive offerings
        </li>
      </ul>

      <CallToAction className="mt-7">
        <Link href="services">
          <span>choose package</span>
        </Link>
        <Icons.arrowUpRight size={18} aria-hidden />
      </CallToAction>
    </article>
  );
}
