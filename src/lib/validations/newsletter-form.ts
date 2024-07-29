import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.string().email("Please make sure your email is correct"),
});

export type NewsletterFormSchema = z.infer<typeof newsletterFormSchema>;
