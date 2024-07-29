"use client";
import aboutBgImage from "@/assets/images/backgrounds/about.jpg";
import aboutOneBgImage from "@/assets/images/resources/about1-1.jpg";
import aboutTwoBgImage from "@/assets/images/resources/about1-2.jpg";
import { cn } from "@/lib/utilities/cn";
import { fadeIn } from "@/lib/utilities/framer";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "./cta";
import { Icons } from "./icons";
import { NumberTicker, type NumberTickerProps } from "./ui/number-ticker";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <div className="container relative flex items-stretch gap-10 py-16 max-md:flex-col">
      <Image
        src={aboutBgImage}
        alt="about banner image"
        fill
        sizes="100vw"
        className="object-cover pointer-events-none"
      />
      {/* MEDIA COLUMN  */}
      <div className="relative aspect-square flex-1">
        <div className="overlay-animation relative aspect-[3/4] bg-primary-dark lg:aspect-square lg:w-4/5">
          <Image
            src={aboutOneBgImage}
            alt="About One background image"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* EXP BOX  */}
          <div className="absolute left-0 top-0 flex">
            <div className="relative flex h-24 w-32 bg-[#1E1E1E]" aria-hidden>
              <div className="relative m-auto size-4/5">
                <Image
                  src="/assets/images/background/tv.png"
                  alt="tv"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
            <h4 className="w-44 bg-primary p-3.5 font-title text-2xl uppercase text-primary-content">
              MARKETING SOLUTION
            </h4>
          </div>
          {/* PLAY IMAGE  */}
          <div className="overlay-animation relative left-1/2 top-1/2 hidden aspect-square w-4/6 items-center justify-center lg:flex">
            <Image
              src={aboutTwoBgImage}
              alt="About two background image"
              fill
              sizes="100%"
              className="object-cover"
            />
            <Link href="#" className="relative rounded-full bg-foreground p-4">
              <Icons.play className="size-4 fill-primary text-primary" />
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENT COLUMN  */}
      <div className="flex flex-1 flex-col justify-center gap-6">
        <div className="relative flex items-stretch py-3">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-[calc(100% + 0.75rem)] -my-3 w-3 origin-[top_center] bg-primary"
            aria-hidden
          />
          <motion.h2
            variants={fadeIn("right", 0.1, 1)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            className="text-balance px-5 font-title text-2xl font-bold uppercase leading-snug text-white sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Get the better experience & grow your business with us
          </motion.h2>
        </div>
        <motion.p
          variants={fadeIn("up", 0.2, 1)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          className="capilize text-white/90"
        >
          Elevate your brand, expand your reach, and thrive in today's digital
          landscape with our tailored solutions. Experience the difference and
          watch your business soar. Partner with us for success!
        </motion.p>
        <div className="relative mt-2 flex items-stretch gap-5 lg:gap-0">
          <DisplayStats value={30} title="Years of Experience" />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-7 my-auto h-2/5 w-px bg-primary max-lg:hidden"
          />
          <DisplayStats value={1200} title="Successfull projects" />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-7 my-auto h-2/5 w-px bg-primary max-lg:hidden"
          />
          <DisplayStats value={1336} title="Happy customers" />
        </div>
        <motion.hr
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="my-1 h-px relative bg-primary max-lg:hidden"
        />
        <div className="flex flex-wrap gap-x-3 gap-y-6 max-lg:mt-3 md:gap-6">
          <motion.div
            variants={fadeIn("up", 0.4, 1)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <CallToAction>
              <Link href="/contact-us">
                <span>Get Started</span>
              </Link>
              <Icons.arrowUpRight size={18} aria-hidden />
            </CallToAction>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4, 1)}
            initial="hidden"
            animate="visible"
            className="relative inline-flex items-center gap-3"
          >
            <Link href={`tel:${siteConfig.phone}`} className="i flex gap-0 md:gap-2">
              <div className="flex size-11 items-center justify-center border border-primary">
                <Icons.phone className="fill-primary" size={20} aria-hidden />
              </div>
              <hgroup>
                <h3 className="font-title text-sm text-primary">Call us</h3>
                <p className="w-fit font-title text-sm font-medium text-white">
                  {siteConfig.phone}
                </p>
              </hgroup>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface DisplayStatsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  title: string;
  tickerProps?: Omit<NumberTickerProps, "value">;
  titleProps?: HTMLMotionProps<"h3">;
}

function DisplayStats({
  value,
  title,
  tickerProps,
  titleProps,
  ...props
}: DisplayStatsProps) {
  return (
    <hgroup {...props}>
      <NumberTicker
        delay={0.4}
        value={value}
        className="font-title text-lg font-medium text-primary sm:text-xl md:text-2xl lg:text-3xl"
        {...tickerProps}
      />
      <motion.h3
        variants={fadeIn("right", 0.3, 1)}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        {...titleProps}
        className={cn(
          "font-title text-sm font-normal text-white lg:text-base",
          tickerProps?.className,
        )}
      >
        {title}
      </motion.h3>
    </hgroup>
  );
}
