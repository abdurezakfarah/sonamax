import { PageQueryResult } from "@/types/sanity.types";
import { About } from "./about";
import { Blog } from "./blog";
import { ChooseUs } from "./choose-us";
import { Contact } from "./contact";
import { ContactBannerOne, ContactBannerTwo } from "./contact-banner";
import { FAQ } from "./faq";
import { Hero } from "./hero";
import { OverviewCards } from "./overview-cards";
import { PortableText } from "./portable-text";
import { Pricing } from "./pricing";
import { Projects } from "./projects";
import { Services } from "./services";
import { Testimonials } from "./testimonials";

type Content = NonNullable<PageQueryResult>["content"];

type ContentProps = {
  content: Content;
};

export function Content({ content }: ContentProps) {
  return <>{renderContent(content)}</>;
}

export function renderContent(content: Content) {
  if (!content) return null;

  return content.map((block) => {
    switch (block._type) {
      case "editor":
        return (
          <div className="container mx-auto max-w-5xl flex-1 py-7 md:px-7">
            <PortableText value={block.body} />
          </div>
        );
      case "hero":
        return <Hero key={block._key} {...block} />;
      case "services":
        return <Services key={block._key} {...block} />;
      case "about":
        return <About key={block._key} {...block} />;
      case "overviewCards":
        return <OverviewCards key={block._key} {...block} />;
      case "projects":
        return <Projects key={block._key} {...block} />;
      case "testimonials":
        return <Testimonials key={block._key} {...block} />;
      case "chooseUs":
        return <ChooseUs key={block._key} {...block} />;
      case "pricing":
        return <Pricing key={block._key} {...block} />;
      case "contactBannerOne":
        return <ContactBannerOne key={block._key} {...block} />;
      case "contact":
        return <Contact key={block._key} {...block} />;
      case "blog":
        return <Blog key={block._key} {...block} />;
      case "faq":
        return <FAQ key={block._key} {...block} />;
      case "contactBannerTwo":
        return <ContactBannerTwo key={block._key} {...block} />;
    }
  });
}
