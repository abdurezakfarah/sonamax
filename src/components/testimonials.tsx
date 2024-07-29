"use client";

import { fadeIn } from "@/lib/utilities/framer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icons } from "./icons";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const testimonials = [
  {
    testimonial:
      "Sonamax Digital Marketing Agency has transformed our online presence. Their strategic approach and attention to detail have significantly increased our website traffic and conversions.",
    name: "John Doe",
    image: "https://loremflickr.com/40/40/man",
    profession: "Marketing Manager",
  },
  {
    testimonial:
      "Working with Sonamax Digital Marketing Agency has been a game-changer for our business. Their expertise in SEO and social media marketing has helped us reach new audiences and grow our brand.",
    name: "Jane Smith",
    image: "https://loremflickr.com/40/40/bird",
    profession: "CEO",
  },
  {
    testimonial:
      "I highly recommend Sonamax Digital Marketing Agency for anyone looking to improve their online presence. Their team is responsive, creative, and dedicated to delivering results.",
    name: "David Johnson",
    image: "https://loremflickr.com/40/40/yellow",
    profession: "Software Developer",
  },
  {
    testimonial:
      "Sonamax Digital Marketing Agency exceeded our expectations. Their innovative strategies and excellent communication skills have made them an invaluable partner in our digital marketing efforts.",
    name: "Emily Williams",
    image: "https://loremflickr.com/40/40/dog",
    profession: "Business Owner",
  },
  {
    testimonial:
      "Sonamax Digital Marketing Agency truly understands our business goals and consistently delivers exceptional results. We are grateful for their professionalism and dedication to our success.",
    name: "Michael Brown",
    image: "https://loremflickr.com/40/40/profile",
    profession: "Entrepreneur",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container mt-8 py-8">
      <motion.h2
        variants={fadeIn("up", 0.1, 0.85)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Nice words from happy customers
      </motion.h2>
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="mx-auto mt-10 w-10/12"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
              <Testimonial testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </section>
  );
}

interface TestimonialProps {
  testimonial: {
    profession: string;
    name: string;
    image: string;
    testimonial: string;
  };
}

function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <figure className="border border-primary bg-foreground px-6 py-4 shadow-sm">
      <Icons.quote
        className="size-7 fill-primary-dark text-primary-dark"
        aria-hidden={true}
      />
      <blockquote className="mt-3 line-clamp-4 text-xs font-medium tracking-tight text-copy-light">
        {testimonial.testimonial}
      </blockquote>
      <hr className="my-4 h-px bg-primary" aria-hidden={true} />
      <div className="flex gap-x-4">
        <Image
          src={testimonial.image}
          alt={`${testimonial.name} image`}
          width={40}
          height={40}
          className=""
        />
        <figcaption>
          <cite className="not-italic font-sm font-medium">{testimonial.name}</cite>
          <p className="text-xs text-copy-light">{testimonial.profession}</p>
        </figcaption>
      </div>
    </figure>
  );
}
