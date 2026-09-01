"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Layers,
  ShoppingCart,
  Brain,
  Wrench,
  MoreHorizontal,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
} from "lucide-react";
import type { ComponentType } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface ProjectTypeOption {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  requirements: { id: string; label: string }[];
  stages: string[];
}

const projectTypes: ProjectTypeOption[] = [
  {
    id: "website",
    label: "Website",
    icon: Globe,
    requirements: [
      { id: "design", label: "Custom design" },
      { id: "portfolio", label: "Portfolio / personal site" },
      { id: "business", label: "Business site" },
      { id: "seo", label: "SEO setup" },
    ],
    stages: ["Design", "Development", "Content", "Launch"],
  },
  {
    id: "webapp",
    label: "Web App",
    icon: Layers,
    requirements: [
      { id: "dashboard", label: "Dashboard / admin panel" },
      { id: "api", label: "API / backend" },
      { id: "auth", label: "User accounts" },
      { id: "database", label: "Database" },
    ],
    stages: ["Planning", "Design", "Development", "Testing", "Launch"],
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    icon: ShoppingCart,
    requirements: [
      { id: "catalog", label: "Product catalog" },
      { id: "cart", label: "Cart & checkout" },
      { id: "payments", label: "Payments" },
      { id: "orders", label: "Order management" },
    ],
    stages: ["Planning", "Design", "Store Build", "Payments", "Launch"],
  },
  {
    id: "ai",
    label: "AI Application",
    icon: Brain,
    requirements: [
      { id: "chat", label: "AI chat / assistant" },
      { id: "content", label: "Content generation" },
      { id: "analysis", label: "Data / analysis" },
      { id: "automation", label: "Automation" },
    ],
    stages: ["Planning", "Model Setup", "Development", "Testing", "Launch"],
  },
  {
    id: "custom",
    label: "Custom Software",
    icon: Wrench,
    requirements: [
      { id: "workflow", label: "Custom workflow" },
      { id: "tooling", label: "Internal tool" },
      { id: "integration", label: "Third-party integrations" },
      { id: "automation", label: "Automation" },
    ],
    stages: ["Discovery", "Planning", "Development", "Testing", "Deploy"],
  },
  {
    id: "other",
    label: "Other",
    icon: MoreHorizontal,
    requirements: [
      { id: "game", label: "Game / interactive" },
      { id: "mobile", label: "Mobile app" },
      { id: "tool", label: "Small tool / script" },
      { id: "notsure", label: "Not sure yet" },
    ],
    stages: ["Discovery", "Planning", "Development", "Testing", "Launch"],
  },
];

const budgetOptions = ["Under ₹10,000", "₹10,000–₹25,000", "₹25,000–₹50,000", "₹50,000+", "Not sure yet"];

const timelineOptions = ["ASAP", "Within a month", "1–3 months", "Flexible", "Not sure yet"];

const steps = [
  { id: 0, label: "Project Type" },
  { id: 1, label: "Requirements" },
  { id: 2, label: "Budget" },
  { id: 3, label: "Timeline" },
  { id: 4, label: "Contact" },
  { id: 5, label: "Review" },
];

interface WizardState {
  type: string;
  requirements: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
}

export default function StartProjectWizard() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<WizardState>({
    type: "",
    requirements: [],
    budget: "",
    timeline: "",
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentType = projectTypes.find((t) => t.id === state.type);

  function canContinue(): { ok: boolean; message: string } {
    if (step === 0 && !state.type) return { ok: false, message: "Select a project type to continue." };
    if (step === 1 && state.requirements.length === 0 && currentType && currentType.requirements.length > 0)
      return { ok: false, message: "Select at least one requirement." };
    if (step === 2 && !state.budget) return { ok: false, message: "Select a budget range." };
    if (step === 3 && !state.timeline) return { ok: false, message: "Select a timeline." };
    if (step === 4) {
      if (!state.name.trim()) return { ok: false, message: "Enter your name." };
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
        return { ok: false, message: "Enter a valid email address." };
    }
    return { ok: true, message: "" };
  }

  function next() {
    const check = canContinue();
    if (!check.ok) {
      setError(check.message);
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function back() {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  }

  function toggleRequirement(id: string) {
    setState((prev) => ({
      ...prev,
      requirements: prev.requirements.includes(id)
        ? prev.requirements.filter((r) => r !== id)
        : [...prev.requirements, id],
    }));
  }

  function submit() {
    const check = canContinue();
    if (!check.ok) {
      setError(check.message);
      return;
    }
    // No server call — this will connect to an API endpoint later.
    setSubmitted(true);
  }

  const selectedTypeLabel = currentType?.label ?? "";

  return (
    <section id="start-project" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Start a Project"
          title="Let's scope your project together"
          description="A short guided flow — a few questions, and we'll have a clear picture of what you need."
        />

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-lime-400/30 bg-zinc-900/60 p-10 text-center"
                role="status"
              >
                <CheckCircle2 className="mx-auto h-14 w-14 text-lime-400" />
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Project request prepared!
                </h3>
                <p className="mt-3 text-zinc-400">
                  Thanks {state.name.split(" ")[0]}. This is a frontend prototype — nothing
                  was sent yet. When the backend connects, your scoped request will reach
                  me automatically.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(0);
                    setState({ type: "", requirements: [], budget: "", timeline: "", name: "", email: "" });
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                >
                  Start Another Request
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="wizard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8"
              >
                {/* Progress */}
                <div className="mb-8 flex items-center justify-between gap-2">
                  {steps.map((s) => (
                    <div key={s.id} className="flex flex-1 flex-col items-center gap-1.5">
                      <span
                        className={cn(
                          "flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-all",
                          step > s.id
                            ? "bg-lime-400 text-zinc-950"
                            : step === s.id
                              ? "border border-lime-400 bg-lime-400/10 text-lime-400"
                              : "border border-zinc-700 text-zinc-500"
                        )}
                        aria-hidden="true"
                      >
                        {step > s.id ? <Check className="h-3.5 w-3.5" /> : s.id + 1}
                      </span>
                      <span
                        className={cn(
                          "hidden text-[10px] sm:text-xs sm:block",
                          step >= s.id ? "text-zinc-300" : "text-zinc-600"
                        )}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="min-h-[240px]">
                  <AnimatePresence mode="wait">
                    {/* STEP 0 — type */}
                    {step === 0 && (
                      <motion.div
                        key="s0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-lg font-semibold text-white">
                          What are you looking to build?
                        </h3>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {projectTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                              <button
                                key={type.id}
                                onClick={() => setState((p) => ({ ...p, type: type.id, requirements: [] }))}
                                className={cn(
                                  "flex items-center gap-3 rounded-xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400",
                                  state.type === type.id
                                    ? "border-lime-400 bg-lime-400/10"
                                    : "border-zinc-700 hover:border-zinc-500"
                                )}
                              >
                                <Icon className="h-5 w-5 shrink-0 text-lime-400" />
                                <span className="text-sm font-medium text-zinc-200">{type.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 1 — requirements */}
                    {step === 1 && currentType && (
                      <motion.div
                        key="s1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-lg font-semibold text-white">
                          What do you need for your {currentType.label.toLowerCase()}?
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">Select all that apply.</p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {currentType.requirements.map((req) => (
                            <button
                              key={req.id}
                              onClick={() => toggleRequirement(req.id)}
                              className={cn(
                                "flex items-center gap-3 rounded-xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400",
                                state.requirements.includes(req.id)
                                  ? "border-lime-400 bg-lime-400/10"
                                  : "border-zinc-700 hover:border-zinc-500"
                              )}
                            >
                              <Check
                                className={cn(
                                  "h-4 w-4 shrink-0 transition-colors",
                                  state.requirements.includes(req.id) ? "text-lime-400" : "text-zinc-600"
                                )}
                              />
                              <span className="text-sm font-medium text-zinc-200">{req.label}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2 — budget */}
                    {step === 2 && (
                      <motion.div
                        key="s2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-lg font-semibold text-white">What&apos;s your budget range?</h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          Just a guide — final pricing depends on scope and requirements.
                        </p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {budgetOptions.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setState((p) => ({ ...p, budget: opt }))}
                              className={cn(
                                "rounded-xl border p-4 text-left text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400",
                                state.budget === opt
                                  ? "border-lime-400 bg-lime-400/10 text-zinc-100"
                                  : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
                              )}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3 — timeline */}
                    {step === 3 && (
                      <motion.div
                        key="s3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-lg font-semibold text-white">When do you need it?</h3>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {timelineOptions.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setState((p) => ({ ...p, timeline: opt }))}
                              className={cn(
                                "rounded-xl border p-4 text-left text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400",
                                state.timeline === opt
                                  ? "border-lime-400 bg-lime-400/10 text-zinc-100"
                                  : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
                              )}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4 — contact */}
                    {step === 4 && (
                      <motion.div
                        key="s4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-lg font-semibold text-white">Where can I reach you?</h3>
                        <div className="mt-5 space-y-4">
                          <div>
                            <label htmlFor="wz-name" className="mb-2 block text-sm font-medium text-zinc-300">
                              Name
                            </label>
                            <input
                              id="wz-name"
                              type="text"
                              value={state.name}
                              onChange={(e) => setState((p) => ({ ...p, name: e.target.value }))}
                              placeholder="Your name"
                              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lime-400"
                            />
                          </div>
                          <div>
                            <label htmlFor="wz-email" className="mb-2 block text-sm font-medium text-zinc-300">
                              Email
                            </label>
                            <input
                              id="wz-email"
                              type="email"
                              value={state.email}
                              onChange={(e) => setState((p) => ({ ...p, email: e.target.value }))}
                              placeholder="you@example.com"
                              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lime-400"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 5 — review */}
                    {step === 5 && (
                      <motion.div
                        key="s5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-lg font-semibold text-white">Review your request</h3>
                        <dl className="mt-5 space-y-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 text-sm">
                          <ReviewRow label="Project" value={selectedTypeLabel} />
                          <ReviewRow
                            label="Requirements"
                            value={
                              currentType
                                ? currentType.requirements
                                    .filter((r) => state.requirements.includes(r.id))
                                    .map((r) => r.label)
                                    .join(", ") || "—"
                                : "—"
                            }
                          />
                          <ReviewRow label="Budget" value={state.budget} />
                          <ReviewRow label="Timeline" value={state.timeline} />
                          <ReviewRow label="Name" value={state.name} />
                          <ReviewRow label="Email" value={state.email} />
                        </dl>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {error && (
                    <p className="mt-4 text-sm text-red-400" role="alert">
                      {error}
                    </p>
                  )}
                </div>

                {/* Controls */}
                <div className="mt-8 flex items-center justify-between gap-3">
                  <button
                    onClick={back}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  {step < steps.length - 1 ? (
                    <button
                      onClick={next}
                      className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-medium text-zinc-950 transition-all hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={submit}
                      className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-medium text-zinc-950 transition-all hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    >
                      Submit Request
                      <Check className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <p className="mt-6 text-center text-xs text-zinc-600">
                  Frontend prototype — no data is sent to a server.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
      <dt className="shrink-0 text-zinc-500">{label}</dt>
      <dd className="text-zinc-200 sm:text-right">{value}</dd>
    </div>
  );
}