import type { TechGroup, Technology } from "@/types";

export const languageGroups: TechGroup[] = [
  {
    id: "languages",
    label: "Languages",
    icon: "Code2",
    items: [
      { name: "JavaScript", repos: ["Novacart-Ecommerce-demo", "zotes", "K-code-editor", "chess-game"] },
      { name: "Python", repos: ["Wanderly", "PDF-Creator-K", "Neon-Block-Travel"] },
      { name: "C++", repos: [] },
      { name: "C", repos: [] },
      { name: "HTML", repos: ["My-Portfolio"] },
      { name: "CSS", repos: ["My-Portfolio"] },
      { name: "SQL", repos: [] },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "Layout",
    items: [
      { name: "Next.js", repos: [] },
      { name: "React.js", repos: ["College-Notes-Web"] },
      { name: "JavaScript", repos: ["Novacart-Ecommerce-demo", "zotes", "K-code-editor", "chess-game"] },
      { name: "HTML", repos: ["My-Portfolio"] },
      { name: "CSS", repos: ["My-Portfolio"] },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js", repos: [] },
      { name: "Python", repos: ["Wanderly", "PDF-Creator-K", "Neon-Block-Travel"] },
      { name: "PHP", repos: ["php-tutor"] },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: "Smartphone",
    items: [
      { name: "Kotlin", repos: ["supersos"] },
      { name: "Android Studio", repos: ["supersos"] },
    ],
  },
  {
    id: "gamedev",
    label: "Game Dev",
    icon: "Gamepad2",
    items: [
      { name: "Unity", repos: [] },
      { name: "Python", repos: ["Neon-Block-Travel"] },
      { name: "JavaScript", repos: ["chess-game"] },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: "Wrench",
    items: [
      { name: "Git", repos: [] },
      { name: "Linux", repos: [] },
      { name: "VS Code", repos: [] },
    ],
  },
];

export const technologies: Technology[] = languageGroups.flatMap((group) =>
  group.items.map((item) => ({ name: item.name, category: group.id }))
);
