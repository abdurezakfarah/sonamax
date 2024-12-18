import { GoogleTagManager } from "@/components/googleTagManager";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utilities/cn";
import type { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";
import { oswald, raleway } from "./ui/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [
    { name: "Sonamax marketing", url: "https://www.sonamaxmarketing.com" },
  ],
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
  creator: "Sonamax marketing",
  publisher: "Sonamax marketing",
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
  manifest: `${siteConfig.url}/site.webmanifest`,
  icons: [
    {
      rel: "shortcut icon",
      url: "/favicon.ico",
      type: "image/x-icon",
    },
    {
      rel: "icon",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-48x48.png",
      sizes: "48x48",
      type: "image/png",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#915eff",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon-57x57.png",
      sizes: "57x57",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon-72x72.png",
      sizes: "72x72",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon-76x76.png",
      sizes: "76x76",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon-114x114.png",
      sizes: "114x114",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon-120x120.png",
      sizes: "120x120",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon-144x144.png",
      sizes: "144x144",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon-180x180.png",
      sizes: "180x180",
    },
  ],
  other: {
    "msapplication-TileColor": "#000000",
    'impact-site-verification': '63814138-710c-4dea-b365-2f66850f0f4c'
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
      <GoogleTagManager gtmId="GTM-N7FWDSXJ" />
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
        {children}
      </body>
    </html>
  );
}
