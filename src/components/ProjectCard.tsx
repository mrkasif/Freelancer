"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/types";
import GithubIcon from "@/components/ui/GithubIcon";
import TechBadge from "@/components/ui/TechBadge";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-800 bg-zinc-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} project visual`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

        <span className="absolute top-3 left-3 rounded-md border border-zinc-700 bg-zinc-950/80 backdrop-blur px-2.5 py-1 text-xs font-medium capitalize text-zinc-300">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-zinc-500 self-center">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-zinc-800 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-label="View source code on GitHub"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-label="Open live demo"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          <button
            onClick={() => onViewDetails(project)}
            className="ml-auto inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-lime-400 transition-colors hover:bg-lime-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
            aria-label={`View details of ${project.name}`}
          >
            <FileText className="h-3.5 w-3.5" />
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
