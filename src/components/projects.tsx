import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import dotsBgImage from "@/assets/images/backgrounds/dots.jpg";
import Moment from "./ui/moment";

interface Project {
  _id: string;
  image: string | null;
  title: string;
  category: null;
  slug: string;
  date: string;
}

interface ProjectsProps {
  title: string;
  text: string;
  projects: Project[];
}

export function Projects({ title, text, projects }: ProjectsProps) {
  return (
    <section className="relative py-14">
      <Image
        src={dotsBgImage}
        alt="Dots banner image"
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover"
      />
      <div className="container z-10">
        <hgroup className="mb-10 max-w-lg space-y-4">
          <div className="relative flex items-stretch py-3">
            <div
              className="h-[calc(100% + 0.75rem)] origin=[top_center] -my-3 w-2 bg-primary"
              aria-hidden
            />
            <h2 className="text-balance px-5 font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
          <p className="text-copy-light">{text}</p>
        </hgroup>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-10/12"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Project {...project} />
                </div>
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

function Project({ title, slug, category, date, image }: Project) {
  return (
    <Card className="overlay-animation group relative aspect-square overflow-hidden">
      {image && (
        <Image
          src={image}
          fill
          sizes="100vw"
          alt={`${title} image`}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      )}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full scale-0 rounded-full bg-foreground p-5 text-primary opacity-0 transition-all group-hover:block group-hover:scale-100 group-hover:opacity-100 md:hidden">
        <Icons.arrowUpRight className="size-6 stroke-2" />
      </div>
      <CardHeader className="absolute bottom-0 w-full bg-primary text-primary-content animate-in slide-in-from-bottom-7 group-hover:block md:hidden">
        <CardDescription className="text-white">
          {category} &#x2022; <Moment date={date} />
        </CardDescription>
        <CardTitle className="font-title">{title}</CardTitle>
      </CardHeader>
      <Link href={`/projects/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Read more about ${title}</span>
      </Link>
    </Card>
  );
}
