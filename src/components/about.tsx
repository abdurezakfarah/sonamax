import aboutBgImage from "@/assets/images/backgrounds/about.jpg";
import aboutOneBgImage from "@/assets/images/resources/about1-1.jpg";
import aboutTwoBgImage from "@/assets/images/resources/about1-2.jpg";
import { cn } from "@/lib/utilities/cn";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CallToAction } from "./cta";
import { Icons } from "./icons";
import { NumberTicker, type NumberTickerProps } from "./ui/number-ticker";

interface Stats {
  _key: string;
  value: number;
  title: string;
}

interface AboutProps {
  videoUrl: string;
  title: string;
  text: string;
  stats: Stats[];
  primaryCta: {
    text: string;
    url: string;
    icon: {
      name: string | null;
    } | null;
  };
  secondaryCta: {
    title: string | null;
    text: string;
    url: string;
    icon: {
      name: string | null;
    } | null;
  };
}

export function About({
  videoUrl,
  title,
  text,
  stats,
  primaryCta,
  secondaryCta,
}: AboutProps) {
  return (
    <div className="container relative flex items-stretch gap-10 py-16 max-md:flex-col">
      <Image
        src={aboutBgImage}
        alt="about banner image"
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover"
      />
      <div className="relative z-10 aspect-square flex-1 max-md:w-full">
        <div className="overlay-animation relative aspect-[3/4] bg-primary-dark lg:aspect-square lg:w-4/5">
          <Image
            src={aboutOneBgImage}
            alt="About One background image"
            fill
            sizes="100vw"
            className="pointer-events-none object-cover"
          />
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
          <div className="overlay-animation relative left-1/2 top-1/2 hidden aspect-square w-4/6 items-center justify-center lg:flex">
            <Image
              src={aboutTwoBgImage}
              alt="About two background image"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <Link
              href={videoUrl}
              className="relative rounded-full bg-foreground p-4"
            >
              <Icons.play className="size-4 fill-primary text-primary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-1 flex-col justify-center gap-6">
        <div className="relative flex items-stretch py-3">
          <div
            className="h-[calc(100% + 0.75rem)] -my-3 w-3 origin-[top_center] bg-primary"
            aria-hidden
          />
          <h2 className="text-balance px-5 font-title text-2xl font-bold uppercase leading-snug text-white sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h2>
        </div>
        <p className="capilize text-white/90">{text}</p>
        <div className="relative mt-2 flex items-stretch gap-5 lg:gap-0">
          {stats.map((stat, index) => (
            <React.Fragment key={stat._key}>
              <Stats {...stat} />
              {index < stats.length - 1 && (
                <hr className="mx-7 my-auto h-2/5 w-px bg-primary max-lg:hidden" />
              )}
            </React.Fragment>
          ))}
        </div>
        <hr className="relative my-1 h-px bg-primary max-lg:hidden" />
        <div className="flex flex-wrap gap-x-3 gap-y-6 max-lg:mt-3 md:gap-6">
          <CallToAction asChild>
            <Link href={primaryCta.url}>
              <span>{primaryCta.text}</span>
              {primaryCta.icon && (
                <Icon icon={primaryCta.icon.name as string} />
              )}
            </Link>
          </CallToAction>

          <div className="relative inline-flex items-center gap-3">
            <Link href={secondaryCta.url} className="i flex gap-0 md:gap-2">
              {secondaryCta.icon && (
                <div className="flex size-11 items-center justify-center border border-primary">
                  <Icon
                    icon={secondaryCta.icon.name as string}
                    className="text-primary"
                  />
                </div>
              )}

              <hgroup>
                <h3 className="font-title text-sm text-primary">
                  {secondaryCta.title}
                </h3>
                <p className="w-fit font-title text-sm font-medium text-white">
                  {secondaryCta.text}
                </p>
              </hgroup>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  title: string;
  tickerProps?: Omit<NumberTickerProps, "value">;
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>;
}

function Stats({
  value,
  title,
  tickerProps,
  titleProps,
  ...props
}: StatsProps) {
  return (
    <hgroup {...props}>
      <NumberTicker
        delay={0.4}
        value={value}
        className="font-title text-lg font-medium text-primary sm:text-xl md:text-2xl lg:text-3xl"
        {...tickerProps}
      />
      <h3
        {...titleProps}
        className={cn(
          "font-title text-sm font-normal text-white lg:text-base",
          tickerProps?.className,
        )}
      >
        {title}
      </h3>
    </hgroup>
  );
}
