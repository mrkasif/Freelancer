"use client";

import { Check, ArrowUpRight, GitFork, Target, Boxes, Lightbulb, ShieldCheck } from "lucide-react";
import type { Project } from "@/types";
import GithubIcon from "@/components/ui/GithubIcon";

interface ProjectDetailsContentProps {
  project: Project;
}

export default function ProjectDetailsContent({ project }: ProjectDetailsContentProps) {
  return (
    <div className="space-y-8">
      <div
        className="relative aspect-[16/8] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} project visual`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-md border border-zinc-700 bg-zinc-950/80 px-2.5 py-1 text-xs font-medium capitalize text-zinc-300 backdrop-blur">
          {project.category}
        </span>
      </div>

      <CaseStudySection icon={Target} title="Overview">
        <p className="text-sm leading-relaxed text-zinc-300">{project.longDescription}</p>
      </CaseStudySection>

      <div className="grid gap-8 sm:grid-cols-2">
        <CaseStudySection icon={Lightbulb} title="Problem">
          <p className="text-sm leading-relaxed text-zinc-400">{project.problem}</p>
        </CaseStudySection>

        <CaseStudySection icon={ShieldCheck} title="Solution">
          <p className="text-sm leading-relaxed text-zinc-400">{project.solution}</p>
        </CaseStudySection>
      </div>

      <CaseStudySection icon={Boxes} title="Key Features">
        <ul className="space-y-2">
          {project.highlights.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
              {feature}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection icon={GitFork} title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-700 bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection title="Engineering Approach">
        <ul className="space-y-2">
          {[
            "Clean, focused scope matched to the goal",
            "Simple, maintainable structure",
            "Browser-friendly interface",
            "Thoughtful, usable interactions",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <div className="flex flex-wrap gap-3 border-t border-zinc-800 pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          >
            <GithubIcon className="h-4 w-4" />
            View on GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <ArrowUpRight className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>

      <div className="rounded-xl border border-lime-400/30 bg-lime-400/5 p-5">
        <p className="text-sm font-medium text-white">
          Want something similar built for your project?
        </p>
        <p className="mt-1 text-sm text-zinc-400">
          Share your idea and we&apos;ll scope it out together.
        </p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Build Something Similar
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function CaseStudySection({
  icon: Icon,
  title,
  children,
}: {
  icon?: typeof Target;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-lime-400">
        {Icon && <Icon className="h-4 w-4" />}
        {title}
      </h4>
      {children}
    </div>
  );
}