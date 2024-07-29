import ProjectDetails from "@/assets/images/resources/project-details.jpg";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";

import { Metadata } from "next";

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
  title: "projects",
};

export default function Page() {
  return (
    <main className="relative">
      <PageHeader title="Project Details" />
      <div className="container relative flex gap-12 px-10 py-4 max-md:flex-col-reverse">
        <div className="sticky top-0 aspect-square w-[280px] pb-7">
          <section className="relative space-y-4">
            <h2 className="sticky top-0 bg-background py-3 font-title text-lg font-medium">
              Recently completed projects
            </h2>
            {projects.slice(0, 5).map((project) => (
              <article className="flex gap-3">
                <Image
                  src={project.image}
                  alt="project"
                  width={150}
                  height={150}
                  className="size-20 rounded-md"
                />
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
              <p className="text-sm">11 July 2022</p>
            </div>
            <div className="">
              <p className="font-title">clien</p>
              <p className="text-sm">Mr molo molo</p>
            </div>
            <div className="">
              <p className="font-title">website</p>
              <p className="text-sm">N/A</p>
            </div>
            <div className="">
              <p className="font-title">Location</p>
              <p className="text-sm">Imagination, in, my mind</p>
            </div>
          </div>
          <div className="mt-7">
            <h2 className="font-title text-lg">project overview</h2>
            <p className="mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, atque officia voluptas nihil pariatur repudiandae
              recusandae nulla culpa. Modi cumque provident mollitia nobis
              pariatur quas molestias voluptatum nesciunt aperiam debitis!
            </p>
            <p className="mt-6">
              Impedit minus voluptatibus rem aut neque, quos eius quas quo quae
              facilis iure quis maiores fuga dolores sed. Obcaecati, libero
              error necessitatibus ducimus ipsa impedit qui explicabo doloribus
              architecto possimus.
            </p>
            <p className="mt-6">
              Vel porro provident distinctio eius odio quia rerum omnis aut quis
              animi explicabo reiciendis vero ad ut ea fugit, accusantium quo
              aliquam, alias, accusamus cupiditate iusto quibusdam nam? Numquam,
              itaque.
            </p>
            <p className="mt-6">
              Placeat dolor quam autem ea! Sunt laborum explicabo nobis
              necessitatibus minus earum corrupti, ut aliquid atque quis alias
              vero, id dolores consequatur. Laborum molestias, aperiam dolores
              magni blanditiis dolorum dolorem?
            </p>
            <p className="mt-6">
              Impedit porro voluptas odit repellendus, nulla non, debitis
              temporibus quae facilis sequi eos saepe et quam quo unde
              dignissimos. Quisquam, impedit assumenda? Eaque quisquam vitae est
              doloribus quia quas totam.
            </p>
            <p className="mt-6">
              Quae incidunt eos facere sapiente itaque mollitia cum repellat
              expedita necessitatibus. Eveniet quod, aliquid harum architecto
              quas iure eligendi. Sunt quisquam harum, aliquid laudantium libero
              vel mollitia voluptatem sequi aperiam.
            </p>
            <p className="mt-6">
              Nobis perspiciatis, omnis dolore ut aliquid dignissimos ex non
              numquam aut culpa. Temporibus reprehenderit quibusdam explicabo
              hic exercitationem saepe ad quae corrupti, iste cumque numquam
              expedita ullam, reiciendis repellendus quo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
