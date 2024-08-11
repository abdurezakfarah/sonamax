"use client";
import { sendContactMail } from "@/app/actions/mail/contact";
import { cn } from "@/lib/utilities/cn";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "@/lib/validations/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CallToAction } from "./cta";
import { Icons } from "./icons";
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
  const [error, setError] = React.useState(false);

  const pathname = usePathname();
  const router = useRouter()

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormSchema) {
    try {
      await sendContactMail(values, { pathname });

      router.push(`/thank-you?name=${values.name}`)
      // toast.success(`Thank you ${values.name}, we'll reach you back! `);
    } catch (error: unknown) {
      setError(true);
      toast.error(
        `Sorry ${values.name}, an error has occured. We are fixing it.`,
      );
      console.log(error)
    }
  }

  React.useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (form.formState.isSubmitted && form.formState.isSubmitSuccessful) {
      timeout = setTimeout(() => {
        form.reset();
      }, 3000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [form]);

  return (
    <section className="mx-auto w-fit rounded-md bg-foreground px-2 py-4">
      {title && (
        <h3 className="mx-auto mb-5 w-fit font-title text-xl font-semibold uppercase">
          {title}
        </h3>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "mx-auto w-full grid-cols-2 gap-x-2 rounded-md bg-foreground p-7 md:grid md:w-3/4",
            formClassName,
          )}
          {...props}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-7">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
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

          <CallToAction
            type="submit"
            disabled={form.formState.isSubmitting}
            className={cn({
              "bg-error text-error-content":
                (form.formState.isSubmitted &&
                  !form.formState.isSubmitSuccessful) ||
                error,
              "bg-success text-success-content":
                !error &&
                form.formState.isSubmitted &&
                form.formState.isSubmitSuccessful,
            })}
          >
            {form.formState.isSubmitting ? (
              "Sending..."
            ) : form.formState.isSubmitSuccessful ? (
              <>
                Sent
                <Icons.check className="size-5" />
              </>
            ) : (
              "Send message"
            )}
          </CallToAction>
        </form>
      </Form>
    </section>
  );
}
