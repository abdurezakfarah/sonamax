import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Please tell us your name" }),
  email: z.string().email("Please make sure your email is correct"),
  subject: z.string().min(1, { message: "Please tell us your subject" }),
  message: z.string().min(1, { message: "Please don't forget message" }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
