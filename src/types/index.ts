export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: ProjectCategory;
  image: string;
  github?: string;
  live?: string;
  featured: boolean;
  highlights: string[];
}

export type ProjectCategory =
  | "all"
  | "web"
  | "ecommerce"
  | "tools"
  | "games"
  | "mobile";

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  technologies: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Technology {
  name: string;
  category: "languages" | "frontend" | "backend" | "mobile" | "gamedev" | "tools";
}

export interface TechGroup {
  id: "languages" | "frontend" | "backend" | "mobile" | "gamedev" | "tools";
  label: string;
  icon: string;
  items: { name: string; repos: string[] }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
