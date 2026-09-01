"use client";

import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Hammer, Rocket } from "lucide-react";
import type { ComponentType } from "react";
import { processSteps } from "@/data/process";
import SectionHeading from "@/components/ui/SectionHeading";

const stepIcons: ComponentType<{ className?: string }>[] = [
  MessageSquare,
  ClipboardList,
  Hammer,
  Rocket,
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How I Work"
          description="A clear, structured approach to every project — from first conversation to final delivery."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-lime-400" />
                  <span className="text-4xl font-semibold text-zinc-800 transition-colors group-hover:text-zinc-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
