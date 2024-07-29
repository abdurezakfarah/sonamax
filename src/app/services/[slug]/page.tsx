import { Icons } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";

import serviceDetailsOne from "@/assets/images/resources/service-details-1.jpg";
import serviceDetailsTwo from "@/assets/images/resources/service-details-2.jpg";
import serviceDetailImage from "@/assets/images/resources/service-details.jpg";
import { cn } from "@/lib/utilities/cn";

const services = [
  {
    icon: Icons.handshake,
    title: "Digital Marketing",
    description: "Organically grow the the holistic world view way into.",
    slug: "digital-marketing",
  },
  {
    icon: Icons.handshake,
    title: "Branding Design",
    description: "Organically grow the the holistic world view way into.",
    slug: "branding-design",
  },
  {
    icon: Icons.handshake,
    title: "Web Development",
    description: "Organically grow the the holistic world view way into.",
    slug: "web-development",
  },
  {
    icon: Icons.handshake,
    title: "Apps Development",
    description: "Organically grow the the holistic world view way into.",
    slug: "apps-development",
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  const { slug } = params;
  return (
    <main>
      <PageHeader title="Service Details" />
      <div className="container relative flex gap-7 py-8 max-md:flex-col-reverse md:gap-14 lg:px-16">
        <div className="max-w-[280px] basis-1/3 items-stretch space-y-5">
          <nav className="flex flex-col gap-y-4">
            {services.map((service, index) => (
              <Link
                key={service.title + index + service.slug}
                href={`/services/${service.slug}`}
                className={cn(
                  "relative flex items-center justify-between gap-4 rounded-[0.5rem] bg-neutral-300 px-3 py-2 font-title text-sm transition-transform duration-300 hover:scale-105",
                  {
                    "text-primary": service.slug === slug,
                  },
                )}
              >
                <span>
                  {service.title} - {service.slug}
                </span>
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
          <div className="richtext">
            <Image src={serviceDetailImage} alt="people" />
            <h2>Service overview</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              esse fugit assumenda libero adipisci in quod earum sit? Ducimus
              similique consequatur voluptas, quos eius tempora quam dolorem
              modi quo ipsam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio accusamus recusandae obcaecati suscipit? Accusamus
              quasi nemo consequatur quod nisi odio adipisci quis molestias
              omnis!
            </p>
            <h2>Service center</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates ex, nemo delectus nihil quisquam libero vel praesentium
              consectetur harum ea, distinctio sed debitis odio dignissimos
              adipisci, unde omnis at. Placeat!
            </p>
            <p>
              At, nulla nam id similique optio ad est reiciendis esse, molestias
              debitis odio aspernatur aperiam, inventore facilis saepe qui autem
              tenetur. Et sit blanditiis vel ut sed tempora non odit?
            </p>
            <div className="mt-7 flex gap-5 max-md:flex-col">
              <div className="flex-1">
                <Image src={serviceDetailsOne} alt="sercive details" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus blanditiis sed esse quis vero?
                </p>
              </div>
              <div className="flex-1">
                <Image src={serviceDetailsTwo} alt="sercive details" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus blanditiis sed esse quis vero?
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
