import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Loading() {
  return (
    <div className="grid h-[calc(100vh-5rem)] place-content-center gap-10">
      <div className="flex items-center gap-2">
        <Icons.blackLogo className="size-12" />
        <strong className="font-title text-3xl font-bold">
          {siteConfig.shortName}
        </strong>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <span className="sr-only">Loading...</span>
        <div className="size-5 animate-bounce rounded-full bg-primary delay-300" />
        <div className="size-5 animate-bounce rounded-full bg-primary delay-150" />
        <div className="size-5 animate-bounce rounded-full bg-primary" />
      </div>
    </div>
  );
}
