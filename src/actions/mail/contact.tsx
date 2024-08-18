"use server";

import { render } from "@react-email/components";
import nodemailer from "nodemailer";

import { Email } from "@/components/mail/contact";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "@/lib/validations/contact-form";
import env from "@/lib/validations/env";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: env.GMAIL,
    pass: env.GMAIL_APP_PASSWORD,
  }, 
});


interface SendContactMailOptions {
  pathname: string;
}

export async function sendContactMail(
  contactFormvalues: ContactFormSchema,
  { pathname }: SendContactMailOptions,
) {
  const formValues = contactFormSchema.parse(contactFormvalues);

  const emailHtml = render(<Email {...formValues} pathname={pathname} />);

  const options = {
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    subject: formValues.subject,
    html: emailHtml,
  };

  await transporter.sendMail(options);
}
