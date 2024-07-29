import pageHeading from "@/assets/images/backgrounds/page-heading.png";
import { DynamicBreadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
}
export function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="relative flex min-w-60 flex-col items-center justify-center gap-4 py-14">
      <Image
        src={pageHeading}
        alt="heading background"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <h1 className="relative font-title text-3xl text-white md:text-4xl lg:text-5xl">
        {title}
      </h1>
      <DynamicBreadcrumb />
    </section>
  );
}
