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
      <h2 className="mb-5 text-balance px-5 font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full  md:w-10/12"
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
