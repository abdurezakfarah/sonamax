import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { client } from "@/sanity/lib/client";
import { footerQuery } from "@/sanity/lib/queries";
import { FooterQueryResult } from "@/sanity/sanity.types";
import React from "react";

export default async function RoutesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const footerData = await client.fetch<FooterQueryResult>(footerQuery);

  return (
    <div>
      <Header />
      {children}
      <Footer data={footerData} />
      <TailwindIndicator />
    </div>
  );
}
