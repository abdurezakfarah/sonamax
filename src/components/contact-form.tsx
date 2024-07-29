"use client";
import { cn } from "@/lib/utilities/cn";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "@/lib/validations/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { CallToAction } from "./cta";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactFormProps extends React.HTMLAttributes<HTMLFormElement> {
  title?: string;
  formClassName?: string;
}

export function ContactForm({
  title,
  formClassName,
  ...props
}: ContactFormProps) {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values: ContactFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "mx-auto w-full grid-cols-2 gap-x-2 rounded-md bg-foreground p-7 md:grid md:w-3/4",
          formClassName,
        )}
        {...props}
      >
        {title && (
          <h3 className="col-span-full mb-5 font-title text-xl font-semibold uppercase">
            {title}
          </h3>
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-7">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Abdirizak" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-7">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="col-span-full mb-7">
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-full mb-7">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} rows={4} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <CallToAction type="submit">Send message</CallToAction>
      </form>
    </Form>
  );
}
