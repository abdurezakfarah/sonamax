"use client";
import faqBgImage from "@/assets/images/backgrounds/faq.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeIn } from "@/lib/utilities/framer";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What services does SONAMAX offer?",
    answer:
      "SONAMAX offers a wide range of digital marketing services including SEO, content marketing, social media management, PPC advertising, and email marketing.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing can help your business by increasing online visibility, driving more traffic to your website, improving customer engagement, and ultimately boosting sales and revenue.",
  },
  {
    question:
      "What makes SONAMAX different from other digital marketing agencies?",
    answer:
      "SONAMAX stands out due to our personalized approach, data-driven strategies, and commitment to delivering measurable results. We tailor our services to meet the unique needs of each client.",
  },
  {
    question: "How do I get started with SONAMAX?",
    answer:
      "Getting started with SONAMAX is easy! Simply contact us through our website or call us directly to schedule a consultation. We'll discuss your goals and create a customized digital marketing plan for your business.",
  },
];

export function FAQ() {
  return (
    <div className="container relative flex items-stretch gap-10 py-16 max-md:flex-col">
      <Image
        src={faqBgImage}
        alt="faq bg image"
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* MEDIA COLUMN  */}
      <div className="overlay-animation relative aspect-square flex-1">
        <Image
          src="/assets/images/resources/faq1-1.jpg"
          alt="faq image"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* CONTENT COLUMN  */}
      <div className="relative flex flex-1 flex-col justify-center gap-6">
        <div className="relative flex items-stretch py-3">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-[calc(100% + 0.75rem)] origin=[top_center] -my-3 w-1.5 bg-primary"
            aria-hidden
          />
          <motion.h2
            variants={fadeIn("right", 0.1, 1)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            className="text-balance px-5 font-title text-2xl font-bold uppercase leading-snug text-white sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border-none bg-[#FFFFFF08]"
            >
              <AccordionTrigger className="font-title text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-sm text-white/90">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
