import { PageHeader } from "@/components/page-header";
import Moment from "@/components/ui/moment";
import { client } from "@/sanity/lib/client";
import { blogPageQuery } from "@/sanity/lib/queries";
import { BlogPageQueryResult } from "@/sanity/sanity.types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";

export const metadata: Metadata = {
  title: "blog",
};

interface Post {
  _id: string;
  slug: string;
  title: string;
  image: string | null;
  excerpt: string;
  plainText: string;
  publishedAt: string;
}

export default async function Page() {
  const posts = await client.fetch<BlogPageQueryResult>(blogPageQuery);
  return (
    <main>
      <PageHeader title="Blog" />
      <section className="container space-y-8 py-7">
        <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
          Latest posts
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Post({ title, slug, excerpt, image, plainText, publishedAt }: Post) {
  return (
    <article className="relative bg-neutral-200">
      {image && <Image src={image} alt="post image" width={403} height={802} />}
      <div className="space-y-4 p-5">
        <h3 className="line-clamp-2 font-title">{title}</h3>
        <p className="line-clamp-4 text-copy-light">{excerpt}</p>
        <div className="flex gap-2 text-xs">
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
