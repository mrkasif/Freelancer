"use client";

import { motion } from "framer-motion";
import { Globe, Layers, ShoppingCart, Brain, Building2, Code2, ArrowRight } from "lucide-react";
import type { ComponentType } from "react";
import type { Service } from "@/types";
import TechBadge from "@/components/ui/TechBadge";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Globe,
  Layers,
  ShoppingCart,
  Brain,
  Building2,
  Code2,
};

interface ServiceCardProps {
  service: Service;
  index: number;
  onLearnMore: (service: Service) => void;
}

export default function ServiceCard({ service, index, onLearnMore }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/60 text-lime-400 transition-colors group-hover:border-lime-400/40 group-hover:bg-lime-400/10">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {service.technologies.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      <button
        onClick={() => onLearnMore(service)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-lime-400 transition-colors hover:text-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-sm"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </motion.div>
  );
}
