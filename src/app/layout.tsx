import {Header} from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utilities/cn";
import type { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";
import { oswald, raleway } from "./ui/fonts";
import {Footer} from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Abdurezak Farah", url: "https://www.cabdirisaaq.com" }],
  generator: "Next.js",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "social media marketing",
    "content creation",
    "data-driven marketing",
    "online presence",
    "business growth",
    "marketing strategies",
    "Sonamax Marketing",
    "digital campaigns",
    "search engine optimization",
    "brand engagement",
    "internet marketing",
    "digital advertising",
    "online marketing solutions",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Abdurezak Farah",
  publisher: "Abdurezak Farah",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@abdirizakafarah",
  },

  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
      color: "#915eff",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#fa4c29",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth focus:scroll-auto"
    >
      <body
        className={cn(
          "relative min-h-screen font-serif",
          oswald.variable,
          raleway.variable,
        )}
      >
        <NextTopLoader
          color="#fa4c29"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Header />
        {children}
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
