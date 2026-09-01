"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project, ProjectCategory } from "@/types";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";
import SectionHeading from "@/components/ui/SectionHeading";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Tools", value: "tools" },
  { label: "Games", value: "games" },
  { label: "Mobile", value: "mobile" },
];

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function techMatches(tech: string, projectTechs: string[]) {
  const t = normalize(tech);
  if (!t) return false;
  return projectTechs.some((pt) => normalize(pt).startsWith(t) || t.startsWith(normalize(pt)));
}

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  const handleTechFilter = useCallback((e: Event) => {
    const detail = (e as CustomEvent<string | null>).detail;
    if (!detail) {
      setActiveTech(null);
      return;
    }
    setActiveTech(detail);
    setActiveFilter("all");
  }, []);

  useEffect(() => {
    window.addEventListener("tech-filter", handleTechFilter);
    return () => window.removeEventListener("tech-filter", handleTechFilter);
  }, [handleTechFilter]);

  const filteredProjects = useMemo(() => {
    let result =
      activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);
    if (activeTech) {
      result = result.filter((p) => techMatches(activeTech, p.technologies));
    }
    return result;
  }, [activeFilter, activeTech]);

  const clearFilters = useCallback(() => {
    setActiveFilter("all");
    setActiveTech(null);
  }, []);

  return (
    <section id="work" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="Open-source projects and experiments — web apps, developer tools, games, and more."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setActiveFilter(filter.value);
                setActiveTech(null);
              }}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400",
                activeFilter === filter.value && !activeTech
                  ? "border-transparent bg-lime-400 text-zinc-950"
                  : "border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
              )}
              aria-pressed={activeFilter === filter.value && !activeTech}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {activeTech && (
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 text-sm text-lime-300">
              Projects using {activeTech}
              <button
                onClick={() => setActiveTech(null)}
                className="rounded-full p-0.5 transition-colors hover:bg-lime-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                aria-label="Clear technology filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          </div>
        )}

        {filteredProjects.length > 0 ? (
          <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={setSelected}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 rounded-2xl border border-dashed border-zinc-700 p-12 text-center"
          >
            <p className="text-zinc-300">
              No public projects built with{" "}
              <span className="font-medium text-lime-400">{activeTech}</span> yet.
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              But I&apos;m happy to build your next project with it.
            </p>
            <div className="mt-6 inline-flex gap-3">
              <Button href="#contact" size="sm">
                Discuss a Project
              </Button>
              <Button variant="outline" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name}>
        {selected && <ProjectDetailsContent project={selected} />}
      </Modal>
    </section>
  );
}