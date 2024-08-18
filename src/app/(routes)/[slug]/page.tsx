import { Content } from "@/components/content";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";
import { client } from "@/sanity/lib/client";
import { pageQuery } from "@/sanity/lib/queries";
import type { PageQueryResult } from "@/types/sanity.types";
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
      {page.showTitle && <PageHeader title={page.title} />}
      {page.content && <Content content={page.content} />}
    </main>
  );
}
