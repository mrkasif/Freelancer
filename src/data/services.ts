import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Modern responsive websites and web applications built with cutting-edge technologies.",
    longDescription:
      "I build fast, responsive, and accessible websites using modern frameworks like Next.js and React. Every project is crafted with clean code, semantic HTML, and optimized performance to ensure a seamless user experience across all devices.",
    icon: "Globe",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "fullstack",
    title: "Full-Stack Applications",
    description:
      "Complete frontend + API + database architecture for scalable applications.",
    longDescription:
      "From database design to API architecture to pixel-perfect frontends, I build complete full-stack applications. Using Node.js, Python, and modern databases, I create systems that are maintainable, secure, and ready to scale.",
    icon: "Layers",
    technologies: ["Node.js", "Python", "FastAPI", "MongoDB", "PostgreSQL"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Modern online stores with product, cart, checkout and management interfaces.",
    longDescription:
      "I develop custom e-commerce solutions with intuitive product browsing, seamless cart and checkout experiences, and admin dashboards for inventory management. Built for performance and conversion.",
    icon: "ShoppingCart",
    technologies: ["Next.js", "React", "Stripe", "Node.js"],
  },
  {
    id: "ai-apps",
    title: "AI-Powered Applications",
    description:
      "AI integrations, intelligent features and automation for modern software.",
    longDescription:
      "I integrate AI capabilities into applications using LLM APIs, building features like intelligent search, content generation, chatbots, and data analysis tools. Practical AI solutions that solve real problems.",
    icon: "Brain",
    technologies: ["Python", "LLM APIs", "FastAPI", "React"],
  },
  {
    id: "business",
    title: "Business Websites",
    description:
      "Professional websites for businesses, startups and personal brands.",
    longDescription:
      "Professional, conversion-focused websites that establish credibility and drive results. Clean design, fast performance, and SEO-friendly architecture to help businesses stand out online.",
    icon: "Building2",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    id: "custom",
    title: "Custom Software",
    description:
      "Software built around a client's specific workflow and requirements.",
    longDescription:
      "Every business has unique needs. I build custom software tools, dashboards, and internal systems tailored to specific workflows. From data management to automation, solutions that actually fit.",
    icon: "Code2",
    technologies: ["React", "Node.js", "Python", "MongoDB"],
  },
];
