"use client";

import { siteConfig } from "@/config/site";
import {
  newsletterFormSchema,
  NewsletterFormSchema,
} from "@/lib/validations/newsletter-form";
import { FooterQueryResult } from "@/types/sanity.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Icons, Icon as IconType } from "./icons";
import { SanityLink } from "./sanity-link";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

export function Footer({ data: footerData }: { data: FooterQueryResult }) {
  if (!footerData) {
    throw Error("Footer: no data.");
  }

  const {footer: {sections: footerSections, footerNote}} = footerData

  return (
    <footer className="container space-y-16 bg-[#202020] pt-14 text-white">
      <div className="flex gap-14 max-sm:flex-col-reverse sm:grid sm:grid-cols-2 lg:grid-cols-4">
        <section>
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="size-6" />
            <h2 className="font-title text-xl font-bold">
              {siteConfig.shortName}
            </h2>
          </Link>
          <div className="mt-7 space-y-4">
            <Card
              Icon={Icons.mail}
              title="Mail us"
              text="info@sonamax.com"
              href="mailto:info@sonamax.com"
            />
            <Card
              Icon={Icons.clock}
              title="Open time"
              text="09 Am - 06 pm, Sun - thu"
            />
          </div>
          <hr className="my-6 h-px bg-[#797979]" aria-hidden={true} />
          <div className="flex gap-3">
            {footerData.socialLinks.map((socialLink) => (
              <Link
                href={socialLink.url}
                key={socialLink._key}
                className="group border border-[#797979] p-2.5 transition-colors duration-300 hover:bg-primary [&>svg]:size-5 [&>svg]:text-[#79797979] [&>svg]:transition-colors [&>svg]:duration-300 hover:[&>svg]:text-white"
              >
                <Icon icon={socialLink.icon.name as string} />
                <span className="sr-only">Follow us on:{socialLink.name}</span>
              </Link>
            ))}
          </div>
        </section>
        {footerSections.map((section) => (
          <section key={section._key}>
            <div className="relative flex items-stretch">
              <div className="w-1 bg-primary" aria-hidden />
              <h2 className="text-balance px-3 font-title font-semibold uppercase leading-snug text-white sm:text-lg md:text-xl lg:text-2xl">
                {section.title}
              </h2>
            </div>
            <ul className="mt-7 space-y-4">
              {section.links.map((link) => (
                <li
                  key={link._key}
                  className="after:content=[''] relative w-fit pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-left after:scale-x-0 after:bg-primary after:transition-all after:duration-300 hover:after:scale-x-100"
                >
                  <SanityLink link={link} />
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* <section className="lg:-col-start-2 lg:row-span-full">
          <div className="relative flex items-stretch">
            <div className="w-1 bg-primary" aria-hidden />
            <h2 className="text-balance px-3 font-title font-semibold uppercase leading-snug text-white sm:text-lg md:text-xl lg:text-2xl">
              Newsletter
            </h2>
          </div>
          <div className="mt-7 space-y-4">
            <p>Catch the latest updates in our new newsletter!</p>
            <NewsLetterForm />
          </div>
        </section> */}
      </div>
      <div className="-mx-8 w-[calc(100%+4rem)] bg-[#282828] py-5">
        <p className="text-center text-sm text-white/60">{footerNote}</p>
      </div>
    </footer>
  );
}

interface CardProps {
  Icon: IconType;
  title: string;
  text: string;
  href?: string;
}

function Card({ Icon, title, text, href }: CardProps) {
  return (
    <article className="group relative flex gap-3">
      <div
        className="flex size-11 items-center justify-center bg-[#4c4c4c] transition-colors duration-300 group-hover:bg-primary"
        aria-hidden={true}
      >
        <Icon
          className="text-primary transition-transform duration-300 group-hover:rotate-[360deg] group-hover:text-primary-content"
          size={20}
        />
      </div>
      <hgroup>
        <h3 className="font-title text-sm text-white/80">{title}</h3>
        <p className="w-fit font-title text-sm font-medium text-white">
          {text}
        </p>
      </hgroup>
      {href && (
        <Link href={href} className="absolute inset-0">
          <span className="sr-only">{text}</span>
        </Link>
      )}
    </article>
  );
}

// function NewsLetterForm() {
//   const form = useForm<NewsletterFormSchema>({
//     resolver: zodResolver(newsletterFormSchema),
//     defaultValues: {
//       email: "",
//     },
//   });
//   function onSubmit(values: NewsletterFormSchema) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="mx-auto w-full space-y-3.5"
//       >
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               {/* <FormLabel>Email</FormLabel> */}
//               <FormControl>
//                 <Input
//                   className="bg-transparent"
//                   placeholder="example@email.com"
//                   {...field}
//                 />
//               </FormControl>
//               {/* <FormDescription>
//                 This is your public display name.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit" className="theme-btn">
//           Subscribe now
//         </Button>
//       </form>
//     </Form>
//   );
// }
