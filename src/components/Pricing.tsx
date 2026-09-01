"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/pricing";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Options"
          description="Every project is different. These packages give you a clear idea of how we can work together."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1",
                plan.popular
                  ? "border-lime-400/50 bg-zinc-900/70 shadow-xl shadow-black/30"
                  : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-3 py-0.5 text-xs font-semibold text-zinc-950">
                  Most Chosen
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>

              <div className="my-6 h-px bg-zinc-800" />

              <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="#contact" variant={plan.popular ? "primary" : "outline"} className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Final pricing depends on project scope and requirements.
        </p>
      </div>
    </section>
  );
}
