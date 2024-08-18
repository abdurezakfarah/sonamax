import ProjectDetails from "@/assets/images/resources/project-details.jpg";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";

import { PortableText } from "@/components/portable-text";
import Moment from "@/components/ui/moment";
import { siteConfig } from "@/config/site";
import { client } from "@/sanity/lib/client";
import { projectPageQuery } from "@/sanity/lib/queries";
import { ProjectPageQueryResult } from "@/types/sanity.types";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = params;
  const project = await client.fetch<ProjectPageQueryResult>(projectPageQuery, {
    slug,
  });

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${siteConfig.url}/project/${slug}`,
      title: project.title,
      images: project.image || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
    },
  };
}

export default async function Page({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = await client.fetch<ProjectPageQueryResult>(projectPageQuery, {
    slug,
  });

  if (!project) {
    notFound();
  }

  return (
    <main className="relative">
      <PageHeader title="Project Details" />
      <div className="container flex gap-12 px-10 py-4 max-md:flex-col-reverse">
        <div className="sticky top-20 aspect-square w-[280px] pb-7">
          <section className="relative space-y-4">
            <h2 className="bg-background py-3 font-title text-lg font-medium">
              Recently completed projects
            </h2>
            {project.projects.map((project) => (
              <article key={project._id} className="flex gap-3">
                {project.image && (
                  <Image
                    src={project.image}
                    alt="project"
                    width={150}
                    height={150}
                    className="size-20 rounded-md"
                  />
                )}

                <div className="space-y-1">
                  <p className="text-sm">{project.category}</p>
                  <h3 className="font-title">{project.title}</h3>
                </div>
              </article>
            ))}
          </section>
        </div>
        <div className="max-w-xl flex-1 overscroll-contain">
          <Image src={ProjectDetails} alt="project details" />
          <div className="mt-7 flex items-center justify-around gap-3 bg-neutral-300 p-4">
            <div className="">
              <p className="font-title">Date</p>
              <p className="text-sm">
                <Moment date={project.date} />
              </p>
            </div>
            <div className="">
              <p className="font-title">client</p>
              <p className="text-sm">{project.client || "N/A"}</p>
            </div>
            <div className="">
              <p className="font-title">website</p>
              <p className="text-sm">N/A</p>
              {project.website && (
                <Link href={project.website}>
                  <span className="sr-only">See website</span>
                </Link>
              )}
            </div>
            <div className="">
              <p className="font-title">Location</p>
              <p className="text-sm">{project.location || "N/A"}</p>
            </div>
          </div>
          <PortableText value={project.overview} />
        </div>
      </div>
    </main>
  );
}
