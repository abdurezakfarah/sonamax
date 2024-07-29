"use client";

import { fadeIn } from "@/lib/utilities/framer";
import { motion } from "framer-motion";
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

const projects = [
  {
    category: "Social Media",
    title: "Comprehensive Social Media Campaign",
    image: "/assets/images/resources/projec1-1.jpg",
    date: "2019-01-15T10:30:00Z",
    slug: "comprehensive-social-media-campaign",
  },
  {
    category: "SEO",
    title: "Search Engine Optimization Strategy",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-03-22T14:00:00Z",
    slug: "search-engine-optimization-strategy",
  },
  {
    category: "Content Marketing",
    title: "Content Creation and Marketing Plan",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-05-10T09:15:00Z",
    slug: "content-creation-and-marketing-plan",
  },
  {
    category: "PPC",
    title: "Pay-Per-Click Advertising Campaign",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-07-08T17:45:00Z",
    slug: "pay-per-click-advertising-campaign",
  },
  {
    category: "Email Marketing",
    title: "Email Marketing Automation",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-09-21T12:00:00Z",
    slug: "email-marketing-automation",
  },
  {
    category: "Branding",
    title: "Brand Identity Development",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-11-03T11:30:00Z",
    slug: "brand-identity-development",
  },
  {
    category: "Web Design",
    title: "Responsive Website Design",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-12-25T15:20:00Z",
    slug: "responsive-website-design",
  },
  {
    category: "Analytics",
    title: "Data Analytics and Reporting",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-02-14T08:50:00Z",
    slug: "data-analytics-and-reporting",
  },
];

export function Projects() {
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
        <hgroup className="mb-10 max-w-lg space-y-4">
          <div className="relative flex items-stretch py-3">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="h-[calc(100% + 0.75rem)] origin=[top_center] -my-3 w-2 bg-primary"
              aria-hidden
            />
            <motion.h2
              variants={fadeIn("right", 0.1, 1)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              className="text-balance px-5 font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Recently Completed Projects
            </motion.h2>
          </div>
          <motion.p
            variants={fadeIn("up", 0.2, 1)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            className="text-copy-light"
          >
            We Help You Build An Online Brand. Porta nibh venenatis cras sed
            felis eget aliquet sagittis. Urna nec tincidunt praesent.
          </motion.p>
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
                  <Project project={{ ...project }} />
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

interface ProjectProps {
  project: {
    category: string;
    title: string;
    image: string;
    slug: string;
  };
}
function Project({ project }: ProjectProps) {
  return (
    <Card className="overlay-animation group relative aspect-square overflow-hidden">
      <Image
        src={project.image}
        fill
        sizes="100vw"
        alt={`${project.title} image`}
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full scale-0 rounded-full bg-foreground p-5 text-primary opacity-0 transition-all group-hover:block group-hover:scale-100 group-hover:opacity-100 md:hidden">
        <Icons.arrowUpRight className="size-6 stroke-2" />
      </div>
      <CardHeader className="absolute bottom-0 w-full bg-primary text-primary-content animate-in slide-in-from-bottom-7 group-hover:block md:hidden">
        <CardDescription className="text-white">
          {project.category} &#x2022; 11 July 2022
        </CardDescription>
        <CardTitle className="font-title">{project.title}</CardTitle>
      </CardHeader>
      <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Read more about ${project.title}</span>
      </Link>
    </Card>
  );
}
