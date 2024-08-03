import dotsBgImage from "@/assets/images/backgrounds/dots.jpg";
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

interface Post {
  _id: string;
  title: string;
  slug: string;
  image: string | null;
  plainText: string;
  publishedAt: string;
}

interface BlogProps {
  title: string;
  blog: Post[];
}

export function Blog({ title, blog }: BlogProps) {
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
        <h2 className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-10/12"
        >
          <CarouselContent>
            {blog.map((post) => (
              <CarouselItem
                key={post._id}
                className="w-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Post {...post} />
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

function Post({ title, slug, image, plainText, publishedAt }: Post) {
  return (
    <article className="relative bg-neutral-200">
      {image && <Image src={image} alt="post image" width={403} height={802} />}
      <div className="p-5">
        <h3 className="line-clamp-2 font-title text-lg">{title}</h3>
        <hr className="my-4 h-px w-full bg-primary" aria-hidden={true} />
        <div className="flex gap-2 text-sm text-copy-light leading-tight">
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
