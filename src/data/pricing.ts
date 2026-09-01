import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For simple websites and landing pages.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO setup",
      "Deployment assistance",
    ],
    cta: "Let's discuss your project",
  },
  {
    id: "professional",
    name: "Professional",
    description: "For business websites and advanced web applications.",
    features: [
      "Full web application",
      "Custom UI / UX design",
      "API integration",
      "Database setup",
      "Admin dashboard",
      "Priority support",
    ],
    cta: "Let's discuss your project",
    popular: true,
  },
  {
    id: "custom",
    name: "Custom",
    description: "For larger applications and specialized requirements.",
    features: [
      "Complex application architecture",
      "AI integrations",
      "Multi-user systems",
      "Advanced data handling",
      "Dedicated development",
      "Long-term maintenance",
    ],
    cta: "Let's discuss your project",
  },
];
