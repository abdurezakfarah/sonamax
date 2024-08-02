import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { ChooseUs } from "@/components/choose-us";
import { Contact } from "@/components/contact";
import {
  ContactBannerOne,
  ContactBannerTwo,
} from "@/components/contact-banner";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";
import { HomePageQueryResult } from "@/sanity/sanity.types";

export default async function Home() {
  const homePageData = await client.fetch<HomePageQueryResult>(
    homePageQuery,
    {},
    {
      cache: "no-store",
    },
  );

  if (!homePageData) {
    throw Error("Home page data is null.");
  }

  return (
    <main>
      <Hero {...homePageData.hero} />
      <Services {...homePageData.services} />
      <About {...homePageData.about} />
      <Process {...homePageData.workingProcess} />
      <Projects {...homePageData.projects} />
      <Testimonials {...homePageData.testimonials} />
      <ChooseUs {...homePageData.chooseUs} />
      <Pricing {...homePageData.pricing} />
      <ContactBannerOne {...homePageData.contactBannerOne} />
      <Contact {...homePageData.contact} />
      <Blog {...homePageData.blog} />
      <FAQ {...homePageData.faq} />
      <ContactBannerTwo {...homePageData.contactBannerTwo} />
    </main>
  );
}
