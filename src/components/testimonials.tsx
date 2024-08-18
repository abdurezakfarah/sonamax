import { ItemType } from "@/types";
import { PageQueryResult } from "@/types/sanity.types";
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

type Content = NonNullable<PageQueryResult>["content"];

type Testimonials = Extract<
  ItemType<NonNullable<Content>>,
  { _type: "testimonials" }
>;

export function Testimonials({ title, testimonials }: Testimonials) {
  return (
    <section
      id="testimonials"
      className="container pb-12 pt-10 lg:pb-20 lg:pt-16"
    >
      <h2 className="text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto mt-10 w-10/12 lg:mt-16"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial._key}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Testimonial {...testimonial} />
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

type Testimonial = ItemType<Testimonials["testimonials"]>;

function Testimonial({
  text,
  authorImage,
  authorName,
  authorProfession,
}: Testimonial) {
  return (
    <figure className="border border-primary bg-foreground px-6 py-4 shadow-sm">
      <Icons.quote
        className="size-7 fill-primary-dark text-primary-dark"
        aria-hidden={true}
      />
      <blockquote className="mt-3 line-clamp-4 text-copy-light">
        {text}
      </blockquote>
      <hr className="my-4 h-px bg-primary" aria-hidden={true} />
      <div className="flex gap-x-4">
        {authorImage && (
          <Image
            src={authorImage}
            alt={`${authorName} image`}
            width={40}
            height={40}
          />
        )}

        <figcaption>
          <cite className="font-medium not-italic">{authorName}</cite>
          <p className="text-sm text-copy-light">{authorProfession}</p>
        </figcaption>
      </div>
    </figure>
  );
}
