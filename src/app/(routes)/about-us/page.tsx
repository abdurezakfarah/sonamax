import { About } from "@/components/about";
import { PageHeader } from "@/components/page-header";
import { Pricing } from "@/components/pricing";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { siteConfig } from "@/config/site";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: siteConfig.description,
};
export default function Page() {
  return (
    <main>
      <PageHeader title="About Us" />
      {/* <About />
      <Services />
      <Projects />
      <Pricing /> */}
    </main>
  );
}
