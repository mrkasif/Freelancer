"use client";

import { useState } from "react";
import type { Service } from "@/types";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Modal from "@/components/ui/Modal";

function ServiceDetails({ service }: { service: Service }) {
  return (
    <div>
      <h4 className="text-sm font-medium uppercase tracking-wide text-lime-400 mb-2">
        {service.title}
      </h4>
      <p className="text-sm leading-relaxed text-zinc-400">{service.longDescription}</p>

      <div className="mt-6">
        <h5 className="text-sm font-semibold text-white mb-3">Technologies</h5>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-700 bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-800 pt-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Discuss This Service
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build"
          description="From fast websites to intelligent applications — I build software that solves real problems and works reliably."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              onLearnMore={setSelected}
            />
          ))}
        </div>
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title="Service Details"
      >
        {selected && <ServiceDetails service={selected} />}
      </Modal>
    </section>
  );
}
