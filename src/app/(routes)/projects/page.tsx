import { PageHeader } from "@/components/page-header";
import Moment from "@/components/ui/moment";
import { client } from "@/sanity/lib/client";
import { projectsPageQuery } from "@/sanity/lib/queries";
import { ProjectsPageQueryResult } from "@/sanity/sanity.types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

interface Project {
  _id: string;
  slug: string;
  title: string;
  image: string | null;
  date: string;
  category: {
    name: string;
  };
}

export default async function Page() {
  const projects =
    await client.fetch<ProjectsPageQueryResult>(projectsPageQuery);
  return (
    <main>
      <PageHeader title="Projects" />
      <div className="container py-14">
        {projects && (
          <ul className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project) => (
              <Project key={project._id} {...project} />
            ))}
          </ul>
        )}
        {!projects && <p>No projects yet.</p>}
      </div>
    </main>
  );
}

function Project({ slug, image, category, date, title }: Project) {
  return (
    <article key={slug} className="relative space-y-2.5">
      {image && (
        <Image
          src={image}
          alt="project cover image"
          width={804}
          height={452}
          className="rounded-md md:aspect-[4/3]"
        />
      )}
      <div className="space-y-2">
        <div className="text-muted-foreground flex gap-1.5 text-xs">
          <span>{category.name}</span>
          <span aria-hidden>&#x2022;</span>
          <Moment format="MMMM D, YYYY" date={date} />
        </div>

        <h3 className="line-clamp-3 font-title font-medium">{title}</h3>
      </div>
      <Link href={`/projects/${slug}`} className="absolute inset-0">
        <span className="sr-only">Click to read {title}</span>
      </Link>
    </article>
  );
}
