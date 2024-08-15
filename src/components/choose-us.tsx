import chooseOneBgImage from "@/assets/images/backgrounds/choose-1.jpg";
import chooseBgImage from "@/assets/images/backgrounds/choose-us.jpg";
import Image from "next/image";
import { Icon, Icons } from "./icons";
import { PageQueryResult } from "@/sanity/sanity.types";
import { ItemType } from "@/types";
import { kebabify } from "@/lib/utilities/kebabify";


type Content = NonNullable<PageQueryResult>["content"];

type ChooseUs = Extract<
  ItemType<NonNullable<Content>>,
  { _type: "chooseUs" }
>;


export function ChooseUs({_type, title, text, features, box }: ChooseUs) {
  return (
    <section id={kebabify(_type)} className="relative py-10 lg:py-16">
      <Image
        src={chooseBgImage}
        alt="dark bg image"
        fill
        sizes="100vw"
        className="pointer-events-none absolute -z-10 object-cover"
      />
      <div className="container z-10">
        <div className="flex gap-7 max-md:flex-col-reverse">
          <div className="flex-1">
            <hgroup className="mb-10 space-y-4">
              <div className="relative flex items-stretch py-3">
                <div
                  className="h-[calc(100% + 0.75rem)] origin=[top_center] -my-3 w-2 bg-primary"
                  aria-hidden={true}
                />
                <h2 className="text-balance px-5 font-title text-xl font-bold uppercase text-white sm:text-2xl md:text-3xl lg:text-4xl">
                  {title}
                </h2>
              </div>
              <p className="text-sm text-white/90">{text}</p>
            </hgroup>

            <ul className="relative grid gap-x-4 gap-y-3 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex gap-4 text-white/90">
                  <div className="h-fit rounded-full bg-primary">
                    <Icons.check className="size-4 stroke-2" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-5 xl:gap-x-8">
              <CTA
                Icon={Icons.handshake}
                title="Best consulting and strategy"
              />
              <CTA
                Icon={Icons.handshake}
                title="Searchine engine optimazation"
              />
            </div>
          </div>
          <div className="fle-col relative flex flex-1 max-lg:justify-center">
            <div className="relative ml-auto aspect-square w-full md:w-11/12">
              <Image
                src={chooseOneBgImage}
                alt="choose us image"
                fill
                sizes="100vw"
                className="pointer-events-none object-cover"
              />
              <div className="bounce-y relative top-1/2 w-40 -translate-y-1/2 space-y-2 rounded-[1rem] bg-foreground px-7 py-5 max-md:left-5 md:-left-16">
                <p className="font-title text-3xl font-bold text-primary">
                  {box.title}
                </p>
                <p className="text-lg font-bold uppercase leading-tight">
                  {box.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CTAProps {
  Icon: Icon;
  title: string;
}

function CTA({ Icon, title }: CTAProps) {
  return (
    <div className="flex w-fit items-center max-xl:gap-3.5">
      <div className="bg-primary p-2 text-white">
        <Icon />
      </div>
      <hr className="mx-4 my-auto h-4/5 w-px bg-white max-xl:hidden" />
      <p className="font-title font-medium text-white">{title}</p>
    </div>
  );
}
