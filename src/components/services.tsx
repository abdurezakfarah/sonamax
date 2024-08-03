import { Service } from "./service";

interface Service {
  _id: string;
  title: string;
  slug: string;
  description: string;
  icon: {
    name: string | null;
  };
}

interface ServicesProps {
  title: string;
  services: Service[];
}

export function Services({ services, title }: ServicesProps) {
  return (
    <section className="container mt-8 py-8">
      <h2 className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service) => (
          <Service key={service._id} {...service} />
        ))}
      </section>
    </section>
  );
}
