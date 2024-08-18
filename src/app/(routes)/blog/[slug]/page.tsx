import { PortableText } from "@/components/portable-text";
import Moment from "@/components/ui/moment";
import { siteConfig } from "@/config/site";
import { jsonLd } from "@/lib/utilities/json-ld";
import { client } from "@/sanity/lib/client";
import { postPageQuery } from "@/sanity/lib/queries";
import type { PostPageQueryResult } from "@/types/sanity.types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import readingTime from "reading-time";
import type { BlogPosting } from "schema-dts";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await client.fetch<PostPageQueryResult>(
    postPageQuery,
    { slug },
    { cache: "no-store" },
  );

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${siteConfig.url}/post/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: post.coverImage || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage || undefined,
      creator: post.author.twitter || undefined,
    },
    keywords: post.keywords,
  };
}

export default async function Page({ params: { slug } }: PostPageProps) {
  const post = await client.fetch<PostPageQueryResult>(
    postPageQuery,
    { slug },
    { cache: "no-store" },
  );

  if (!post) return;

  const postJsonLd = jsonLd<BlogPosting>({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}/`,
    },
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    url: `${siteConfig.url}/blog/${post.slug}/`,
    author: {
      "@type": "Person",
      "@id": `http://www.twitter.com/${post.author.twitter}`,
      url: `http://www.twitter.com/${post.author.twitter}`,
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    ...(post.coverImage && {
      image: {
        "@type": "ImageObject",
        "@id": post.coverImage,
        url: post.coverImage,
        height: "2170",
        width: "2400",
      },
    }),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#post-body"],
    },
    keywords: post.keywords || undefined,
    articleBody: post.plainText,
  });

  const postTagsSearchParams = post.tags
    ?.map((tag) => `tag=${tag.slug}`)
    .join("&");

  return (
    <main className="container relative py-7 max-md:space-y-7 md:flex md:pb-0 lg:gap-x-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: postJsonLd }}
      />
      <div className="relative hidden h-full flex-col overflow-y-auto lg:flex lg:w-[210px]">
        {/* <h2 className="sticky top-0 bg-background font-semibold">
            On this page:
          </h2>
          <section className="my-5 ml-auto flex w-[180px] flex-col gap-y-5">
            <TOC headings={post.headings} />
          </section> */}
      </div>
      <article
        id="post-body"
        className="h-full max-w-5xl flex-1 overflow-auto md:px-7"
      >
        {post.category && (
          <p className="text-muted-foreground mb-2 space-x-2 text-sm">
            <Link href="/blog">Blog</Link>
            <span>&#x2022;</span>
            <Link
              href={`/blog?category=${post.category.slug}`}
              className="font-medium underline-offset-4 hover:underline"
            >
              {post.category.name}
            </Link>
          </p>
        )}
        <h1 className="inline-block font-title text-4xl font-bold leading-tight lg:text-5xl">
          {post?.title}
        </h1>
        {post.author && (
          <address className="mt-4 flex space-x-4 not-italic">
            <Link
              key={post.author.slug}
              href={`https://twitter.com/${post.author.twitter}`}
              className="flex items-center space-x-2"
              target="_blank"
            >
              {post.author.image && (
                <div className="relative size-10 rounded-full">
                  <Image
                    src={post.author.image}
                    alt={`${post.author.name} image`}
                    fill
                    className="object-fit rounded-full"
                  />
                </div>
              )}
              <section className="flex-1 text-left text-sm leading-tight">
                <h2 className="font-medium">{post.author.name}</h2>
                <p className="text-muted-foreground text-[12px]">
                  <Moment format="MMMM DD, YYYY" date={post.publishedAt} />
                  <span className="mx-1.5" aria-hidden>
                    &#x2022;
                  </span>
                  <span>{readingTime(post.plainText).text}</span>
                </p>
              </section>
            </Link>
          </address>
        )}
        {post.coverImage && (
          <Image
            src={post?.coverImage}
            alt={`${post?.title} cover image`}
            width={720}
            height={405}
            className="bg-muted my-8 rounded-md border transition-colors"
            priority
          />
        )}

        {post?.body && <PortableText value={post.body} />}
      </article>
      <div className="my-10 h-px w-full md:hidden" />
      <aside className="sticky top-20 h-full space-y-11 overflow-y-auto px-3 pb-5 md:w-[280px]">
        {post.relatedPosts.length > 0 && (
          <PostsList
            title="also read"
            link={{
              text: "See more",
              href: `/blog${
                postTagsSearchParams ? `?${postTagsSearchParams}` : ""
              }`,
            }}
            posts={post.relatedPosts}
          />
        )}
        {post.recentPosts.length > 0 && (
          <PostsList
            title="most recent"
            link={{
              text: "See more",
              href: "/blog",
            }}
            posts={post.recentPosts}
          />
        )}
      </aside>
    </main>
  );
}

// Source: ./src/app/sanity/sanity-types.ts
// type: PostPageQueryResult - recentPosts / reletedPosts
type PostList = {
  title: string;
  slug: string;
  coverImage: string | null;
  publishedAt: string;
  plainText: string;
};

interface PostsListProps {
  title: string;
  link?: {
    text: string;
    href: string;
  };
  posts: PostList[];
}

function PostsList({ title, link, posts }: PostsListProps) {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-balance text-lg font-bold capitalize">{title}</h2>
        {link && posts.length > 5 && (
          <Link href={link.href} className="text-sm">
            {link.text} &rarr;
          </Link>
        )}
      </div>

      <div className="space-y-5">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

interface PostListItemProps {
  post: PostList;
}

function PostListItem({ post }: PostListItemProps) {
  return (
    <article key={post.slug} className="relative flex w-full gap-4">
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt="Post cover image"
          height={25}
          width={25}
          className="size-14 rounded-lg"
        />
      )}
      <section className="space-y-2">
        <h3 className="line-clamp-2 font-title text-sm">{post.title}</h3>
        <p className="text-muted-foreground text-xs">
          <Moment format="MMMM D YYYY" date={post.publishedAt} />
          <span className="mx-2" aria-hidden>
            &#x2022;
          </span>
          <span>{readingTime(post.plainText).text}</span>
        </p>
      </section>
      <Link href={`/blog/${post.slug}`} className="absolute inset-0">
        <span className="sr-only">Read {post.title}</span>
      </Link>
    </article>
  );
}
