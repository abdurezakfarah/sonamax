import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

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
