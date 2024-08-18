import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { client } from "@/sanity/lib/client";
import { footerQuery } from "@/sanity/lib/queries";
import { FooterQueryResult } from "@/types/sanity.types";
import React from "react";
import { Toaster } from "sonner";

export default async function RoutesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const footerData = await client.fetch<FooterQueryResult>(
    footerQuery,
    {},
    { cache: "no-store" },
  );

  return (
    <>
      <Toaster
        position="top-center"
        richColors
        duration={5000}
        className="z-[999999]"
      />
      <Header />
      {children}
      <Footer data={footerData} />
      <TailwindIndicator />
    </>
  );
}
