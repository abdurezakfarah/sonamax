"use client";

import { CallToAction } from "@/components/cta";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <main className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center">
      <section className="flex max-w-md flex-col items-center justify-center text-center">
        <Icons.circleCheck
          className="size-20 text-primary"
          strokeWidth={1.68}
        />
        <hgroup className="mt-4">
          <h1 className="font-title text-3xl font-medium">Thank you</h1>
          <p className="mt-3.5 text-balance text-copy-light">
            We appreciate you getting in touch with us. Your message has been
            received, and we will get back to you as soon as possible.
          </p>
        </hgroup>
        <CallToAction className="mt-7" onClick={() => router.back()}>
          <Icons.chevronLeft />
          Go back
        </CallToAction>
      </section>
    </main>
  );
}
