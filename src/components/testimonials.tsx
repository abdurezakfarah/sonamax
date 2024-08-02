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

interface Testimonial {
  authorName: string;
  authorProfession: string;
  authorImage: string | null;
  text: string;
  _key: string;
}
interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export function Testimonials({ title, testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="container mt-8 py-8">
      <h2 className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto mt-10 w-10/12"
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
