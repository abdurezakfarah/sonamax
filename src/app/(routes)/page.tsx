import { Content } from "@/components/content";
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
      <Content content={homePageData.content} />
    </main>
  );
}
