import shapeBgImage from "@/assets/images/backgrounds/shape.jpg";
import { cn } from "@/lib/utilities/cn";
import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "./cta";
import { Icons } from "./icons";

interface Price {
  _id: string;
  title: string;
  text: string;
  currency: "$" | "\xA3" | "\u20AC" | "KES";
  price: number;
  billingRate: string;
  billingCycle: string;
  features: Array<{
    _key: string;
    text: string;
    isIncluded: boolean;
  }>;
  url: string | null;
}

interface PricingProps {
  title: string;
  plans: Price[];
}

export function Pricing({ title, plans }: PricingProps) {
  return (
    <section className="container mt-8 py-8">
      <h2 className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="flex flex-wrap justify-between gap-x-8 gap-y-7">
        {plans.map((plan) => (
          <Price key={plan._id} {...plan} />
        ))}
      </div>
    </section>
  );
}

function Price({
  title,
  text,
  currency,
  price,
  billingCycle,
  billingRate,
  features,
  url,
}: Price) {
  return (
    <article className="flex-1 rounded-sm bg-foreground p-7 shadow-sm transition duration-300 hover:-translate-y-2">
      <h3 className="font-title text-xl font-medium">{title}</h3>
      <div className="mt-3 flex gap-5">
        <p className="font-title text-4xl font-extrabold text-primary">
          <span>{currency}</span>
          <span>{price}</span>
        </p>
        <div className="text-xs">
          <p>{billingRate}</p>
          <p>{billingCycle}</p>
        </div>
      </div>
      <div className="w-[calc(100% + 1.75rem)] relative z-0 -mx-7 mt-7 p-1 px-7">
        <Image
          src={shapeBgImage}
          alt="shape bg image"
          fill
          sizes="100vw"
          className="pointer-events-none -z-10 object-cover"
        />
        <p className="relative z-10 font-title text-lg text-white">{text}</p>
      </div>

      <ul className="mt-7 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature._key} className="flex gap-2">
            <div
              className={cn("h-fit rounded-full", {
                "bg-primary": feature.isIncluded,
                "bg-neutral-300": !feature.isIncluded,
              })}
            >
              {feature.isIncluded && (
                <Icons.check className="size-3.5 p-0.5 text-white" />
              )}
              {!feature.isIncluded && (
                <Icons.cross className="size-3.5 p-0.5 text-black" />
              )}
            </div>
            {feature.text}
          </li>
        ))}
      </ul>

      <CallToAction className="mt-7">
        <Link href={url || "/"}>
          <span>choose package</span>
        </Link>
        <Icons.arrowUpRight size={18} aria-hidden />
      </CallToAction>
    </article>
  );
}
