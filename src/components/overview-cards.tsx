import { PageQueryResult } from "@/sanity/sanity.types";
import { ItemType } from "@/types";
import { Icon } from "@iconify/react";
import slugify from "slugify";

type Content = NonNullable<PageQueryResult>["content"];

type OverviewCards = Extract<
  ItemType<NonNullable<Content>>,
  { _type: "overviewCards" }
>;

export function OverviewCards({ title, overViewCards }: OverviewCards) {
  return (
    <article id={slugify(title)} className="container py-10 lg:py-16">
      <h2 className="text-balance text-center font-title text-2xl font-bold uppercase leading-[1.2] sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mt-10 grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-4">
        {overViewCards.map((overviewCard) => (
          <OverviewCard key={overviewCard._key} {...overviewCard} />
        ))}
      </div>
    </article>
  );
}

type OverviewCard = ItemType<OverviewCards["overViewCards"]>;

function OverviewCard({ title, icon, text }: OverviewCard) {
  return (
    <article className="group relative flex flex-col items-center gap-y-4 rounded border border-primary-light bg-foreground px-6 py-7 text-center shadow-sm">
      <div
        className="flex w-fit items-center justify-center bg-primary p-3.5 text-primary-content"
        aria-hidden
      >
        <Icon
          icon={icon.name as string}
          className="size-[30px] transition-transform duration-300 group-hover:rotate-[360deg]"
        />
      </div>
      <hgroup className="space-y-2">
        <h3 className="font-title text-2xl uppercase tracking-tight">
          {title}
        </h3>
        <p className="leading-tight text-copy-light">{text}</p>
      </hgroup>
    </article>
  );
}
