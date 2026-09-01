"use client";

import { motion } from "framer-motion";
import { Check, Circle, FolderKanban, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const timeline = [
  { label: "Planning", done: true },
  { label: "Design", done: true },
  { label: "Development", done: false, current: true },
  { label: "Testing", done: false },
  { label: "Launch", done: false },
];

const milestones = [
  { label: "Requirements locked", done: true },
  { label: "Wireframes approved", done: true },
  { label: "Core UI built", done: true },
  { label: "Payment integration", done: false, current: true },
  { label: "UAT & go-live", done: false },
];

export default function ProjectDashboard() {
  return (
    <section id="dashboard" className="relative py-24 lg:py-32">
      <div
        className="absolute left-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-lime-400/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How Projects Progress"
          title="Your project, from idea to launch"
          description="A structured development workflow — every project moves through clear milestones so you always know where things stand."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-2xl shadow-black/30"
          >
            {/* Window header */}
            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/80 px-5 py-3 text-sm">
              <FolderKanban className="h-4 w-4 text-lime-400" />
              <span className="font-medium text-zinc-300">Project Dashboard</span>
              <span className="ml-auto rounded-md border border-zinc-700 bg-zinc-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                Example
              </span>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Project
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    E-Commerce Platform
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Status
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
                    <span className="text-sm font-semibold text-lime-400">In Progress</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Overall progress</span>
                  <span className="font-medium text-zinc-200">82%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "82%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                    className="h-full rounded-full bg-lime-400"
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {/* Timeline */}
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Timeline
                  </p>
                  <ul className="space-y-3">
                    {timeline.map((step) => (
                      <li key={step.label} className="flex items-center gap-3">
                        {step.done ? (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-zinc-950">
                            <Check className="h-3 w-3" />
                          </span>
                        ) : step.current ? (
                          <span className="flex h-5 w-5 items-center justify-center">
                            <span className="h-2.5 w-2.5 rounded-full border-2 border-lime-400" />
                          </span>
                        ) : (
                          <Circle className="h-4 w-4 text-zinc-600" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            step.done
                              ? "text-zinc-400 line-through"
                              : step.current
                                ? "font-medium text-white"
                                : "text-zinc-500"
                          )}
                        >
                          {step.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Next milestone */}
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Next Milestone
                  </p>
                  <ul className="space-y-3">
                    {milestones.map((m) => (
                      <li key={m.label} className="flex items-center gap-3">
                        {m.done ? (
                          <Check className="h-4 w-4 text-lime-400" />
                        ) : m.current ? (
                          <span className="h-2.5 w-2.5 rounded-full border-2 border-lime-400" />
                        ) : (
                          <Circle className="h-4 w-4 text-zinc-600" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            m.done
                              ? "text-zinc-500 line-through"
                              : m.current
                                ? "font-medium text-lime-400"
                                : "text-zinc-500"
                          )}
                        >
                          {m.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-5">
                <p className="text-xs text-zinc-600">
                  Example preview of how project status is shared with clients.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-lime-400 transition-colors hover:text-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-sm"
                >
                  See your project here
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}