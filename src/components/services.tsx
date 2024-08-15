import { kebabify } from "@/lib/utilities/kebabify";
import type { PageQueryResult } from "@/sanity/sanity.types";
import { ItemType } from "@/types";
import { Service } from "./service";

type Content = NonNullable<PageQueryResult>["content"];

type Services = Extract<ItemType<NonNullable<Content>>, { _type: "services" }>;

export function Services({ services, title, _type }: Services) {
  return (
    <section id={kebabify(_type)} className="container py-10 lg:py-16">
      <h2 className="text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {/* <h2 className="my-12 md:my-16 text-balance text-center font-title text-3xl font-bold uppercase md:text-4xl lg:text-5xl leading-relaxed">
        We&apos;ll provide you the{" "}
        <RoughNotation type="highlight" color="#fa4c29" show={true}>
          <span className="text-white">best services</span>
        </RoughNotation>
      </h2> */}
      <div className="mt-10 grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-4">
        {services.map((service) => (
          <Service key={service._id} {...service} />
        ))}
      </div>
    </section>
  );
}
