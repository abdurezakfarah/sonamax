import servicesBgImage from "@/assets/images/backgrounds/services.jpg";
import { CallToAction } from "@/components/cta";
import { Icon, Icons } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Service } from "@/components/service";
import { client } from "@/sanity/lib/client";
import { servicesPageQuery } from "@/sanity/lib/queries";
import { ServicesPageQueryResult } from "@/sanity/sanity.types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Services",
};

export default async function Page() {
  const services =
    await client.fetch<ServicesPageQueryResult>(servicesPageQuery);

    if (!services) return null

  return (
    <main>
      <PageHeader title="Services" />
      <section className="relative py-14">
        <Image
          src={servicesBgImage}
          alt="services bg image"
          fill
          sizes="100vw"
          className="pointer-events-none absolute z-0 object-cover"
        />
        <ul className="container grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <Service key={service._id} {...service} />
          ))}
        </ul>
      </section>
    </main>
  );
}

