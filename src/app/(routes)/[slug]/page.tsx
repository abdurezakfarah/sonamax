import { Content } from "@/components/content";
import { siteConfig } from "@/config/site";
import { client } from "@/sanity/lib/client";
import { pageQuery } from "@/sanity/lib/queries";
import type { PageQueryResult } from "@/sanity/sanity.types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;
  const page = await client.fetch<PageQueryResult>(
    pageQuery,
    { slug },
    {
      cache: "no-store",
    },
  );

  if (!page) {
    notFound();
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${siteConfig.url}/${slug}`,
      title: page.title ?? undefined,
      description: page.description ?? undefined,
      images: page.ogImage ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title ?? undefined,
      description: page.description ?? undefined,
      images: page.ogImage ?? undefined,
    },
    keywords: page.keywords,
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const page = await client.fetch<PageQueryResult>(
    pageQuery,
    { slug },
    {
      cache: "no-store",
    },
  );

  if (!page) return;

  return (
    <main className="relative">
      {page.content && <Content content={page.content} />}
      {/* <PageHeader title={page.title} /> */}
      {/* <article
        id="page-body"
        className="container mx-auto h-full max-w-5xl flex-1 overflow-auto py-7 md:px-7"
      >
        {page?.body && <PortableText value={page.body} />}
      </article> */}
    </main>
  );
}
