"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  RefreshCw,
  ArrowRight,
  Gauge,
  Layers,
  ListChecks,
  CalendarDays,
  CircuitBoard,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface EstimatorState {
  project: string;
  size: string;
  backend: string;
  ai: string;
}

interface Estimate {
  complexity: { label: string; score: number };
  stack: string[];
  stages: string[];
  timeline: string;
  features: string[];
}

const questions: { id: keyof EstimatorState; label: string; options: string[] }[] = [
  {
    id: "project",
    label: "What are you building?",
    options: ["Website", "Web App", "E-Commerce", "AI Application", "Custom Tool"],
  },
  {
    id: "size",
    label: "How large is the scope?",
    options: ["Few pages", "Several sections", "Full application", "Large system"],
  },
  {
    id: "backend",
    label: "Do you need a backend / database?",
    options: ["No, static site", "Simple forms", "Full backend", "Complex data"],
  },
  {
    id: "ai",
    label: "Any AI features needed?",
    options: ["None", "A little automation", "AI integrations", "Advanced AI logic"],
  },
];

function estimateFrom(state: EstimatorState): Estimate {
  let score = 1;

  if (state.size === "Several sections") score += 1;
  if (state.size === "Full application") score += 2;
  if (state.size === "Large system") score += 3;

  if (state.backend === "Simple forms") score += 1;
  if (state.backend === "Full backend") score += 2;
  if (state.backend === "Complex data") score += 3;

  if (state.ai === "A little automation") score += 1;
  if (state.ai === "AI integrations") score += 2;
  if (state.ai === "Advanced AI logic") score += 3;

  const complexity =
    score <= 2
      ? { label: "Lightweight", score }
      : score <= 4
        ? { label: "Standard", score }
        : score <= 6
          ? { label: "Advanced", score }
          : { label: "Complex", score };

  const baseStack = ["JavaScript", "HTML", "CSS"];
  if (state.project !== "Custom Tool")
    baseStack.push(state.size === "Few pages" ? "Vercel" : "Next.js");
  if (state.project === "Web App" || state.project === "E-Commerce")
    baseStack.push("Node.js");
  if (state.backend !== "No, static site") baseStack.push("MongoDB");
  if (state.ai !== "None") baseStack.push("Python", "LLM API");
  if (state.project === "Web App" || state.project === "E-Commerce")
    baseStack.push("REST API");
  if (state.project === "E-Commerce") baseStack.push("Checkout Integration");

  const stages = [
    "1. Discovery & requirements",
    "2. Design & wireframes",
    "3. Development",
    "4. Testing & refinement",
    "5. Launch & handover",
  ];

  const timeline = score <= 3 ? "2–4 weeks" : score <= 6 ? "4–8 weeks" : "8+ weeks";

  const features = [
    "Responsive, mobile-first layout",
    "Clean, maintainable code",
    "SEO-friendly structure",
    "Performance focused",
    state.backend !== "No, static site" ? "Data storage & handling" : state.project === "Website" ? "Content sections" : "Core interactions",
    state.ai !== "None" ? "AI-powered features" : "Contact / lead capture",
  ].filter(Boolean);

  return { complexity, stack: [...new Set(baseStack)], stages, timeline, features };
}

export default function Estimator() {
  const [answers, setAnswers] = useState<EstimatorState>({
    project: "",
    size: "",
    backend: "",
    ai: "",
  });
  const [result, setResult] = useState<Estimate | null>(null);

  function answered() {
    return questions.every((q) => answers[q.id as keyof EstimatorState]);
  }

  function generate() {
    if (!answered()) return;
    setResult(estimateFrom(answers));
  }

  function reset() {
    setAnswers({ project: "", size: "", backend: "", ai: "" });
    setResult(null);
  }

  return (
    <section id="estimator" className="relative py-24 lg:py-32">
      <div
        className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-lime-400/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Project Estimator"
          title="Not sure what your project needs?"
          description="Answer a few questions to get a rough idea of complexity, stack, and timeline. This is an interactive estimate — not a quote."
        />

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key="questions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8"
              >
                {questions.map((q, qi) => (
                  <div key={q.id}>
                    <p className="mb-3 flex items-center gap-2 text-sm font-medium text-zinc-300">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/10 text-xs text-lime-400">
                        {qi + 1}
                      </span>
                      {q.label}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {q.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt }))}
                          className={cn(
                            "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400",
                            answers[q.id as keyof EstimatorState] === opt
                              ? "border-lime-400 bg-lime-400/10 text-zinc-100"
                              : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-6">
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Reset
                  </button>
                  <button
                    onClick={generate}
                    disabled={!answered()}
                    className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-medium text-zinc-950 transition-all hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    <Sparkles className="h-4 w-4" />
                    Generate Estimate
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-lime-400" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">Complexity</p>
                      <p className="text-lg font-semibold text-white">{result.complexity.label}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-lime-400" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">Suggested timeline</p>
                      <p className="text-lg font-semibold text-white">{result.timeline}</p>
                    </div>
                  </div>
                </div>

                <EstimateBlock icon={Layers} title="Recommended tech stack">
                  <div className="flex flex-wrap gap-2">
                    {result.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-700 bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </EstimateBlock>

                <EstimateBlock icon={CircuitBoard} title="Development stages">
                  <ul className="space-y-2">
                    {result.stages.map((stage) => (
                      <li key={stage} className="flex items-start gap-2 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                        {stage}
                      </li>
                    ))}
                  </ul>
                </EstimateBlock>

                <EstimateBlock icon={ListChecks} title="Feature checklist">
                  <ul className="space-y-2">
                    {result.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </EstimateBlock>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-6">
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Re-run
                  </button>
                  <a
                    href="#start-project"
                    className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-medium text-zinc-950 transition-all hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-5 text-center text-xs text-zinc-600">
                  This estimate is generated locally by simple rules — it is not a quote. Real pricing and timing depend on a scoped discussion.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function EstimateBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Layers;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-6">
      <h4 className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-lime-400">
        <Icon className="h-4 w-4" />
        {title}
      </h4>
      {children}
    </div>
  );
}