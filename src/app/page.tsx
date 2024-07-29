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

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Process />
      <Projects />
      <Testimonials />
      <ChooseUs />
      <Pricing />
      <ContactBannerOne />
      <Contact />
      <Blog />
      <FAQ />
      <ContactBannerTwo />
    </main>
  );
}
