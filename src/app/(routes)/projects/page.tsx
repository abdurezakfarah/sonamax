import { PageHeader } from "@/components/page-header";
import Moment from "@/components/ui/moment";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    category: "Social Media",
    title: "Comprehensive Social Media Campaign",
    image: "/assets/images/resources/projec1-1.jpg",
    date: "2019-01-15T10:30:00Z",
    slug: "comprehensive-social-media-campaign",
  },
  {
    category: "SEO",
    title: "Search Engine Optimization Strategy",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-03-22T14:00:00Z",
    slug: "search-engine-optimization-strategy",
  },
  {
    category: "Content Marketing",
    title: "Content Creation and Marketing Plan",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-05-10T09:15:00Z",
    slug: "content-creation-and-marketing-plan",
  },
  {
    category: "PPC",
    title: "Pay-Per-Click Advertising Campaign",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-07-08T17:45:00Z",
    slug: "pay-per-click-advertising-campaign",
  },
  {
    category: "Email Marketing",
    title: "Email Marketing Automation",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-09-21T12:00:00Z",
    slug: "email-marketing-automation",
  },
  {
    category: "Branding",
    title: "Brand Identity Development",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-11-03T11:30:00Z",
    slug: "brand-identity-development",
  },
  {
    category: "Web Design",
    title: "Responsive Website Design",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-12-25T15:20:00Z",
    slug: "responsive-website-design",
  },
  {
    category: "Analytics",
    title: "Data Analytics and Reporting",
    image: "/assets/images/resources/projec1-3.jpg",
    date: "2019-02-14T08:50:00Z",
    slug: "data-analytics-and-reporting",
  },
];


export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <main>
      <PageHeader title="Projects" />
      <div className="container py-14">
        <ul className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </ul>
      </div>
    </main>
  );
}

interface ProjectProps {
  project: {
    category: string;
    title: string;
    image: string;
    slug?: string;
    date?: string;
    text?: string;
    plainText?: string;
  };
  index?: number;
}
function Project({ project }: ProjectProps) {
  return (
    <article key={project.slug} className="relative space-y-2.5">
      {project.image && (
        <Image
          src={project.image}
          alt="project cover image"
          width={804}
          height={452}
          className="md:aspect-[4/3] rounded-md"
        />
      )}
      <div className="space-y-2">
        <div className="text-muted-foreground flex gap-1.5 text-xs">
          <span>{project.category}</span>
          <span aria-hidden>&#x2022;</span>
          <Moment format="MMMM D, YYYY" date={project.date} />
          {/* {project.plainText && <p>{readingTime(project.plainText).text}</p>} */}
        </div>

        <h3 className="line-clamp-3 font-title font-medium">{project.title}</h3>
        <p className="text-copy-lightert line-clamp-3 text-xs">
          {project.text}
        </p>
      </div>
      <Link href={`/projects/${project.slug}`} className="absolute inset-0">
        <span className="sr-only">Click to read {project.title}</span>
      </Link>
    </article>
  );
}
