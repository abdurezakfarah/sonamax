"use client";

import { fadeIn } from "@/lib/utilities/framer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import dotsBgImage from "@/assets/images/backgrounds/dots.jpg";


export function Blog() {
  return (
    <section className="relative py-14">
      <Image
        src={dotsBgImage}
        alt="Dots banner image"
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <div className="container">
        <motion.h2
          variants={fadeIn("up", 0.1, 0.85)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Latest from the blog
        </motion.h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-10/12"
        >
          <CarouselContent containerClassName="overflow-y-visible">
            {Array(8)
              .fill(1)
              .map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Post />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
}

function Post() {
  return (
    <article className="bg-neutral-200">
      <Image
        src="/assets/images/resources/news2-1.png"
        alt="image"
        width={403}
        height={802}
      />
      <div className="p-5">
        <h3 className="line-clamp-2 font-title">
          Digital Marketing Made Simple: A Step-by-Step Guide
        </h3>
        <hr className="my-4 h-px w-full bg-primary" aria-hidden={true} />
        <p className="text-xs">01 January 2024 &#x2022; 4 min read</p>
      </div>
    </article>
  );
}

/*
 <Card className="group relative aspect-square px-4 before:absolute before:inset-0 before:z-10 before:size-full before:scale-x-0 before:bg-red-600/15 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100">
      <Image
        src="/assets/images/resources/news2-1.png"
        fill
        alt={`${"news"} image`}
        className="object-cover"
      />
      <CardHeader className="absolute -bottom-10 z-10 w-[calc(100%-2rem)] border-t-[2px] border-primary bg-foreground transition-transform duration-500 group-hover:-translate-y-5">
        <CardDescription className="text-xs">
          01 January 2024 &#x2022; 4 min read
        </CardDescription>
        <CardTitle className="font-title text-[0.9rem]">
          Digital Marketing Made Simple: A Step-by-Step Guide
        </CardTitle>
      </CardHeader>
      <Link href="#" className="absolute inset-0 z-10">
        <span className="sr-only">Read more about ${"blog"}</span>
      </Link>
    </Card>
*/
