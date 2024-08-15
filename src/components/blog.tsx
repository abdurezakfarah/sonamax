import { kebabify } from "@/lib/utilities/kebabify";
import { PageQueryResult } from "@/sanity/sanity.types";
import { ItemType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Moment from "./ui/moment";

type Content = NonNullable<PageQueryResult>["content"];

type Blog = Extract<ItemType<NonNullable<Content>>, { _type: "blog" }>;

export function Blog({ _type, title, blog }: Blog) {
  return (
    <section id={kebabify(_type)} className="relative py-10 lg:py-16">
      <h2 className="text-balance px-5 text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto mt-10 w-full md:w-10/12 lg:mt-16"
      >
        <CarouselContent>
          {blog.map((post) => (
            <CarouselItem key={post._id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Post {...post} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-md:hidden" />
        <CarouselNext className="max-md:hidden" />
        <CarouselDots />
      </Carousel>
    </section>
  );
}


type Post = ItemType<Blog["blog"]>


function Post({ title, slug, image, plainText, publishedAt }: Post) {
  return (
    <article className="relative overflow-hidden bg-neutral-200">
      {image && <Image src={image} alt="post image" width={403} height={802} />}
      <div className="p-5">
        <h3 className="line-clamp-2 font-title text-lg">{title}</h3>
        <div className="flex gap-2 text-sm leading-tight text-copy-light">
          <Moment date={publishedAt} />
          <span>&#x2022;</span>
          <span>{readingTime(plainText).text}</span>
        </div>
      </div>
      <Link href={`/blog/${slug}`} className="absolute inset-0">
        <span className="sr-only">Read more about {title}</span>
      </Link>
    </article>
  );
}
