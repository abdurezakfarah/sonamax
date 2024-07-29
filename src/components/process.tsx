"use client";

import { fadeIn } from "@/lib/utilities/framer";
import { motion } from "framer-motion";
import { type Icon, Icons } from "./icons";
const process = [
  {
    title: "Idea Generation",
    icon: Icons.handshake,
    description: "Explore new ideas with creativity.",
  },
  {
    title: "Analysis",
    icon: Icons.handshake,
    description: "Conduct analysis for strategic insights.",
  },
  {
    title: "Prototyping",
    icon: Icons.handshake,
    description: "Visualize ideas through prototypes.",
  },
  {
    title: "Testing & Launch",
    icon: Icons.handshake,
    description: "Rigorously test before launching into market.",
  },
];

export function Process() {
  return (
    <section className="container mt-8 py-8">
      <motion.h2
        variants={fadeIn("up", 0.1, 0.85)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl"
      >
        our working process
      </motion.h2>
      <ul className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {process.map((process, index) => (
          <ProcessCard key={process.title} process={process} index={index} />
        ))}
      </ul>
    </section>
  );
}

interface ProcessCardProps {
  process: {
    icon: Icon;
    title: string;
    description: string;
  };
  index: number;
}

function ProcessCard({ process }: ProcessCardProps) {
  return (
    <article className="group relative flex flex-col items-center gap-y-4 rounded border border-primary-light bg-foreground px-6 py-7 text-center shadow-sm">
      <div
        className="flex w-fit items-center justify-center bg-primary p-3 text-primary-content"
        aria-hidden
      >
        <process.icon className="size-9 transition-transform duration-300 group-hover:-rotate-[360deg]" />
      </div>
      <hgroup className="space-y-2">
        <h3 className="font-title text-2xl uppercase tracking-tight">
          {process.title}
        </h3>
        <p className="text-sm leading-tight text-copy-light">
          {process.description}
        </p>
      </hgroup>
    </article>
  );
}
