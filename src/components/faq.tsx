import faqBgImage from "@/assets/images/backgrounds/faq.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { kebabify } from "@/lib/utilities/kebabify";
import { PageQueryResult } from "@/sanity/sanity.types";
import { ItemType } from "@/types";
import Image from "next/image";

type Content = NonNullable<PageQueryResult>["content"];

type Faq = Extract<
  ItemType<NonNullable<Content>>,
  { _type: "faq" }
>;

export function FAQ({_type, title, faq }: Faq) {
  return (
    <section id={kebabify(_type)} className="container relative flex items-stretch gap-10 py-10 lg:py-16 max-md:flex-col">
      <Image
        src={faqBgImage}
        alt="faq bg image"
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover"
      />

      <div className="overlay-animation relative z-10 aspect-square flex-1">
        <Image
          src="/assets/images/resources/faq1-1.jpg"
          alt="faq image"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center gap-6">
        <div className="relative flex items-stretch py-3">
          <div
            className="h-[calc(100% + 0.75rem)] origin=[top_center] -my-3 w-1.5 bg-primary"
            aria-hidden
          />
          <h2 className="text-balance px-5 font-title text-2xl font-bold uppercase leading-snug text-white sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq._key}
              className="border-none bg-[#FFFFFF08]"
            >
              <AccordionTrigger className="font-title text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-sm text-white/90">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
