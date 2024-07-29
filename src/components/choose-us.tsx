"use client";

import chooseOneBgImage from "@/assets/images/backgrounds/choose-1.jpg";
import chooseBgImage from "@/assets/images/backgrounds/choose-us.jpg";
import { fadeIn } from "@/lib/utilities/framer";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Icon, Icons } from "./icons";
export function ChooseUs() {
  return (
    <section className="relative py-14">
      <Image
        src={chooseBgImage}
        alt="dark bg image"
        fill
        sizes="100vw"
        className="object-cover z-0 absolute pointer-events-none"
      />
      <div className="container">
        <div className="flex gap-7 max-md:flex-col-reverse">
          {/* COLUMN ONE  */}
          <div className="flex-1">
            <hgroup className="mb-10 space-y-4">
              <div className="relative flex items-stretch py-3">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="h-[calc(100% + 0.75rem)] origin=[top_center] -my-3 w-2 bg-primary"
                  aria-hidden={true}
                />
                <motion.h2
                  variants={fadeIn("right", 0.1, 1)}
                  initial="hidden"
                  viewport={{ once: true }}
                  whileInView="visible"
                  className="text-balance px-5 font-title text-xl font-bold uppercase text-white sm:text-2xl md:text-3xl lg:text-4xl"
                >
                  Why Our Services Are the Best Choice for You?
                </motion.h2>
              </div>
              <motion.p
                variants={fadeIn("up", 0.2, 1)}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
                className="text-sm text-white/90"
              >
                At Sonamax Digital Marketing Agency, we deliver tailored
                solutions designed to elevate your brand. Our experienced team
                uses innovative strategies and cutting-edge technology to
                achieve measurable results. Trust Sonamax to provide a
                client-focused approach that sets your business apart.
              </motion.p>
            </hgroup>

            <motion.ul
              variants={LIST_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative grid gap-x-4 gap-y-3 text-sm sm:grid-cols-2"
            >
              <motion.li
                variants={LIST_ITEM_VARIANTS}
                className="flex gap-4 text-white/90"
              >
                <div className="h-fit rounded-full bg-primary">
                  <Icons.check className="size-4 stroke-2" />
                </div>
                Proven digital expertise
              </motion.li>
              <motion.li
                variants={LIST_ITEM_VARIANTS}
                className="flex gap-4 text-white/90"
              >
                <div className="h-fit rounded-full bg-primary">
                  <Icons.check className="size-4 stroke-2" />
                </div>
                Customized strategies
              </motion.li>
              <motion.li
                variants={LIST_ITEM_VARIANTS}
                className="flex gap-4 text-white/90"
              >
                <div className="h-fit rounded-full bg-primary">
                  <Icons.check className="size-4 stroke-2" />
                </div>
                Innovative solutions
              </motion.li>
              <motion.li
                variants={LIST_ITEM_VARIANTS}
                className="flex gap-4 text-white/90"
              >
                <div className="h-fit rounded-full bg-primary">
                  <Icons.check className="size-4 stroke-2" />
                </div>
                Consistent results
              </motion.li>
              <motion.li
                variants={LIST_ITEM_VARIANTS}
                className="flex gap-4 text-white/90"
              >
                <div className="h-fit rounded-full bg-primary">
                  <Icons.check className="size-4 stroke-2" />
                </div>
                Exceptional service
              </motion.li>
              <motion.li
                variants={LIST_ITEM_VARIANTS}
                className="flex gap-4 text-white/90"
              >
                <div className="h-fit rounded-full bg-primary">
                  <Icons.check className="size-4 stroke-2" />
                </div>
                Comprehensive offerings
              </motion.li>
            </motion.ul>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-5 xl:gap-x-8">
              <CTA
                Icon={Icons.handshake}
                title="Best consulting and strategy"
              />
              <CTA
                Icon={Icons.handshake}
                title="Searchine engine optimazation"
              />
            </div>
          </div>
          <div className="fle-col relative flex flex-1 max-lg:justify-center">
            <div className="relative ml-auto aspect-square w-full md:w-11/12">
              <Image
                src={chooseOneBgImage}
                alt="choose us image"
                fill
                sizes="100vw"
                className="pointer-events-none object-cover"
              />
              <div className="bounce-y relative top-1/2 w-40 -translate-y-1/2 space-y-2 rounded-[1rem] bg-foreground px-7 py-5 max-md:left-5 md:-left-16">
                <p className="font-title text-3xl font-bold text-primary">
                  25+
                </p>
                <p className="text-lg font-bold uppercase leading-tight">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CTAProps {
  Icon: Icon;
  title: string;
}

function CTA({ Icon, title }: CTAProps) {
  return (
    <motion.div
      variants={fadeIn("right", 0.4, 1)}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      className="flex w-fit items-center max-xl:gap-3.5"
    >
      <div className="bg-primary p-2 text-white">
        <Icon />
      </div>
      <hr className="mx-4 my-auto h-4/5 w-px bg-white max-xl:hidden" />
      <p className="font-title font-medium text-white">{title}</p>
    </motion.div>
  );
}

const LIST_VARIANTS: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0,
    },
  },
};
const LIST_ITEM_VARIANTS: Variants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
