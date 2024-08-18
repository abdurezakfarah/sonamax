import { Icons } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import Link from "next/link";

import { PortableText } from "@/components/portable-text";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utilities/cn";
import { client } from "@/sanity/lib/client";
import { servicePageQuery } from "@/sanity/lib/queries";
import { ServicePageQueryResult } from "@/types/sanity.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = params;
  const service = await client.fetch<ServicePageQueryResult>(servicePageQuery, {
    slug,
  });

  if (!service) {
    notFound();
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${siteConfig.url}/service/${slug}`,
      title: service.title,
      description: service.description,
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
    },
  };
}

export default async function Page({ params }: ServicePageProps) {
  const { slug } = params;
  const service = await client.fetch<ServicePageQueryResult>(servicePageQuery, {
    slug,
  });

  if (!service) {
    return null;
  }

  return (
    <main>
      <PageHeader title="Service Details" />
      <div className="container relative flex gap-7 py-8 max-md:flex-col-reverse md:gap-14 lg:px-16">
        <div className="max-w-[280px] basis-1/3 items-stretch space-y-5">
          <nav className="flex flex-col gap-y-4">
            {service.services.map((service) => (
              <Link
                key={service._id}
                href={`/services/${service.slug}`}
                className={cn(
                  "relative flex items-center justify-between gap-4 rounded-[0.5rem] bg-neutral-300 px-3 py-2 font-title text-sm transition-transform duration-300 hover:scale-105",
                  {
                    "text-primary": service.slug === slug,
                  },
                )}
              >
                <span>{service.title}</span>
                <div
                  className={cn("rounded-md px-3 py-1", {
                    "bg-primary text-primary-content": service.slug === slug,
                  })}
                >
                  <Icons.chevronRight className="size-4" />
                </div>
              </Link>
            ))}
          </nav>
          <div className="relative flex flex-col items-center gap-4 rounded-[1rem] bg-primary bg-blob bg-cover bg-no-repeat px-4 py-8 text-center text-primary-content">
            <h3 className="font-title text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl">
              Contact with us for any advice
            </h3>
            <div className="w-fit rounded-full bg-foreground p-4">
              <Icons.phone className="size-6 text-primary" />
            </div>
            <p className="text-xs">Need help? Talk to an expert</p>
            <p className="lg:rext-3xl text-lg font-medium sm:text-xl md:text-2xl">
              +254 (0) 712 345 678
            </p>
            <Link href="#" className="absolute inset-0 size-full">
              <span className="sr-only">Call us</span>
            </Link>
          </div>
          <Link
            href="#"
            className="flex items-center justify-center bg-primary px-4 py-4 text-primary-content"
          >
            <div className="flex items-center justify-center gap-2">
              <Icons.fileDown className="size-6" />
              <span className="font-title text-lg font-medium">
                Download file pdf
              </span>
            </div>
          </Link>
        </div>
        <article className="flex-1">
          <PortableText value={service.overview} />
        </article>
      </div>
    </main>
  );
}
