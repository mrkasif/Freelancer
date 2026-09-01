"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Send } from "lucide-react";
import type { ContactFormData } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Website",
  "Web Application",
  "E-Commerce",
  "AI Application",
  "Custom Software",
  "Other",
];

const budgetRanges = [
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000+",
  "Not sure yet",
];

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budgetRange?: string;
  description?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    projectType: "",
    budgetRange: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.projectType) newErrors.projectType = "Please select a project type.";
    if (!formData.budgetRange) newErrors.budgetRange = "Please select a budget range.";
    if (!formData.description.trim()) newErrors.description = "Please describe your project.";
    else if (formData.description.trim().length < 20)
      newErrors.description = "Please provide at least 20 characters of detail.";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    // Simulate a brief async prepare step. No server call happens here.
    // When a backend is added, POST this to an API endpoint:
    // const payload: ContactFormData = formData;
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  function handleChange(
    field: keyof ContactFormData
  ) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };
  }

  const inputClasses = (hasError: boolean) =>
    cn(
      "w-full rounded-xl border bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent",
      hasError ? "border-red-500/60" : "border-zinc-700 hover:border-zinc-600"
    );

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.1]" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-1/2 -z-10 h-72 w-[26rem] max-w-full -translate-x-1/2 rounded-full bg-lime-400/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Have an idea? Let's build it."
          description="Tell me about your project and I'll get back to you about how we can bring it to life."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-2xl border border-lime-400/30 bg-zinc-900/60 p-10 text-center"
                role="status"
              >
                <CheckCircle2 className="mx-auto h-14 w-14 text-lime-400" />
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Request received!
                </h3>
                <p className="mt-3 text-zinc-400">
                  Thanks {formData.name.split(" ")[0]}. This is a{" "}
                  <span className="text-zinc-200">frontend prototype</span> — no message
                  was actually sent yet. Once the backend is connected, your request will
                  reach me automatically.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      projectType: "",
                      budgetRange: "",
                      description: "",
                    });
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange("name")}
                      className={inputClasses(!!errors.name)}
                      placeholder="Your name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                      className={inputClasses(!!errors.email)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={handleChange("projectType")}
                    className={cn(
                      inputClasses(!!errors.projectType),
                      !formData.projectType && "text-zinc-500"
                    )}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? "projectType-error" : undefined}
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" className="mt-1.5 text-xs text-red-400">
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="budgetRange"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange("budgetRange")}
                    className={cn(
                      inputClasses(!!errors.budgetRange),
                      !formData.budgetRange && "text-zinc-500"
                    )}
                    aria-invalid={!!errors.budgetRange}
                    aria-describedby={errors.budgetRange ? "budgetRange-error" : undefined}
                  >
                    <option value="" disabled>
                      Select budget range
                    </option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budgetRange && (
                    <p id="budgetRange-error" className="mt-1.5 text-xs text-red-400">
                      {errors.budgetRange}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange("description")}
                    className={inputClasses(!!errors.description)}
                    placeholder="Describe your project, goals, and any specific requirements..."
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? "description-error" : undefined}
                  />
                  {errors.description && (
                    <p id="description-error" className="mt-1.5 text-xs text-red-400">
                      {errors.description}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-base font-medium text-zinc-950 transition-all hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="h-4 w-4 animate-pulse" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      Submit Project Request
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-zinc-600">
                  This is a frontend prototype. Submission is not sent to a server yet.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
