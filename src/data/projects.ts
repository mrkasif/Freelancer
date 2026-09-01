import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "wanderly",
    name: "Wanderly",
    description: "Travel planning web app built with Python.",
    longDescription:
      "A travel planning web application that helps organize trips, routes, and travel details in one place. Built with Python to make planning itineraries straightforward.",
    problem:
      "Planning a trip involves juggling destinations, routes, budgets, and schedules across scattered notes and apps.",
    solution:
      "Wanderly centralizes travel planning into a clear, usable web app, letting you organize trip details from one interface.",
    technologies: ["Python", "JavaScript", "HTML", "CSS"],
    category: "web",
    image: "/projects/wanderly.svg",
    github: "https://github.com/mrkasif/Wanderly",
    featured: true,
    highlights: [
      "Trip and itinerary planning",
      "Organized travel details",
      "Clean, usable interface",
    ],
  },
  {
    id: "novacart",
    name: "Novacart E-Commerce",
    description: "E-commerce store demo built with JavaScript.",
    longDescription:
      "A demonstration e-commerce storefront exploring product browsing, cart interactions, and online store layouts built with JavaScript.",
    problem:
      "Learning and demonstrating how online stores work — product listings, navigation, and cart flow.",
    solution:
      "Novacart presents a functional e-commerce demo in JavaScript, showing the core storefront experience in a clean layout.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "ecommerce",
    image: "/projects/novacart.svg",
    github: "https://github.com/mrkasif/Novacart-Ecommerce-demo",
    featured: true,
    highlights: [
      "Product storefront layout",
      "Cart interactions",
      "Responsive store UI",
    ],
  },
  {
    id: "pdf-creator",
    name: "PDF-Creator-K",
    description: "PDF generation tool built with Python.",
    longDescription:
      "A tool that generates PDF documents programmatically using Python. Useful for creating reports, documents, and structured output from code.",
    problem:
      "Generating formatted PDF files from code is often fiddly and repetitive.",
    solution:
      "PDF-Creator-K wraps PDF creation in a simple Python tool, making it easy to produce output documents on demand.",
    technologies: ["Python", "JavaScript"],
    category: "tools",
    image: "/projects/pdf-creator.svg",
    github: "https://github.com/mrkasif/PDF-Creator-K",
    featured: true,
    highlights: [
      "Programmatic PDF generation",
      "Reusable document output",
      "Python-based tooling",
    ],
  },
  {
    id: "zotes",
    name: "zotes",
    description: "Notes web app built with JavaScript.",
    longDescription:
      "A lightweight web-based notes application that lets you capture and organize notes quickly, built with JavaScript.",
    problem:
      "Quick note-taking should be friction-free — no heavy setup, just capture and find notes.",
    solution:
      "zotes provides a simple, fast notes web app focused on getting ideas down and organized without clutter.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "web",
    image: "/projects/zotes.svg",
    github: "https://github.com/mrkasif/zotes",
    featured: true,
    highlights: [
      "Quick note capture",
      "Simple organization",
      "Lightweight web app",
    ],
  },
  {
    id: "college-notes",
    name: "College Notes Web",
    description: "Share and browse college notes — React.js web app.",
    longDescription:
      "A web app for sharing and browsing college notes, making study material easier to find and organize. Built with React.js.",
    problem:
      "College study notes are scattered and hard to discover across classmates and devices.",
    solution:
      "College Notes Web provides a shared space to browse and distribute notes, built with a React.js frontend.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    category: "web",
    image: "/projects/college-notes.svg",
    github: "https://github.com/mrkasif/College-Notes-Web",
    featured: true,
    highlights: [
      "Browse and share notes",
      "React.js interface",
      "Organized study material",
    ],
  },
  {
    id: "k-code-editor",
    name: "K Code Editor",
    description: "In-browser code editor built with JavaScript.",
    longDescription:
      "A code editor that runs in the browser, letting you write and edit code without leaving the page. Built with JavaScript.",
    problem:
      "Quick code editing and experimentation often requires switching to a heavyweight editor or IDE.",
    solution:
      "K Code Editor delivers a browser-based editing experience for fast, lightweight coding directly in the browser.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "tools",
    image: "/projects/k-code-editor.svg",
    github: "https://github.com/mrkasif/K-code-editor",
    featured: true,
    highlights: [
      "In-browser code editing",
      "No setup required",
      "JavaScript-based editor",
    ],
  },
  {
    id: "php-tutor",
    name: "php-tutor",
    description: "PHP learning resource built with PHP.",
    longDescription:
      "A learning resource for PHP that presents core concepts and examples for people picking up the language.",
    problem:
      "Learning PHP benefits from organized, example-driven material tied to real language fundamentals.",
    solution:
      "php-tutor compiles PHP concepts and examples into a structured learning resource.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS"],
    category: "web",
    image: "/projects/php-tutor.svg",
    github: "https://github.com/mrkasif/php-tutor",
    featured: false,
    highlights: [
      "Structured PHP learning",
      "Code examples",
      "Beginner friendly",
    ],
  },
  {
    id: "resume-builder",
    name: "Resume Builder",
    description: "Resume builder web app built with JavaScript.",
    longDescription:
      "A web-based resume builder that helps you create and format a resume interactively, built with JavaScript.",
    problem:
      "Writing a well-formatted resume is tedious, especially getting the layout and structure right.",
    solution:
      "A resume builder that turns input into a clean, formatted resume with a simple interactive flow.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "tools",
    image: "/projects/resume-builder.svg",
    github: "https://github.com/mrkasif/Resume-Builder-net",
    featured: false,
    highlights: [
      "Interactive resume creation",
      "Clean formatting",
      "Browser-based tool",
    ],
  },
  {
    id: "my-portfolio",
    name: "My Portfolio",
    description: "Personal portfolio site built with HTML & CSS.",
    longDescription:
      "A personal portfolio website presenting projects, skills, and experience, built with HTML and CSS.",
    problem:
      "A developer needs a clean place to present their work and skills to potential collaborators and recruiters.",
    solution:
      "A focused portfolio site using HTML and CSS to present the projects and background cleanly.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "web",
    image: "/projects/my-portfolio.svg",
    github: "https://github.com/mrkasif/My-Portfolio",
    featured: false,
    highlights: [
      "Project showcase",
      "Clean, static layout",
      "Personal branding",
    ],
  },
  {
    id: "chess-game",
    name: "Chess Game",
    description: "Chess game built with JavaScript.",
    longDescription:
      "A playable chess game implemented in JavaScript, demonstrating game logic, board rendering, and turn-based interaction.",
    problem:
      "Building a full chess game requires careful game rules, board state, and move validation.",
    solution:
      "A chess implementation in JavaScript covering board setup, legal moves, and turn handling in a browser interface.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "games",
    image: "/projects/chess-game.svg",
    github: "https://github.com/mrkasif/chess-game",
    featured: false,
    highlights: [
      "Full chess rules",
      "Turn-based gameplay",
      "Browser interface",
    ],
  },
  {
    id: "neon-block-travel",
    name: "Neon Block Travel",
    description: "Block game built with Python.",
    longDescription:
      "A block-based game written in Python, exploring game mechanics and simple rendering in a playable arcade-style format.",
    problem:
      "Experimenting with game mechanics needs a fast, approachable language for prototyping.",
    solution:
      "Neon Block Travel is a Python game focused on core mechanics, movement, and scoring.",
    technologies: ["Python"],
    category: "games",
    image: "/projects/neon-block.svg",
    github: "https://github.com/mrkasif/Neon-Block-Travel",
    featured: false,
    highlights: [
      "Python game logic",
      "Arcade-style mechanics",
      "Scoring and movement",
    ],
  },
  {
    id: "supersos",
    name: "SuperSOS",
    description: "Android SOS app built with Kotlin.",
    longDescription:
      "An Android SOS application built with Kotlin and Android Studio, designed to send quick emergency alerts.",
    problem:
      "In an emergency, reaching help quickly and reliably matters — many users lack a fast trigger for alerts.",
    solution:
      "SuperSOS is an Android app focused on sending a quick SOS message, built with native Kotlin tooling.",
    technologies: ["Kotlin", "Android Studio"],
    category: "mobile",
    image: "/projects/supersos.svg",
    github: "https://github.com/mrkasif/supersos",
    featured: false,
    highlights: [
      "Quick SOS trigger",
      "Native Android (Kotlin)",
      "Immediate alert flow",
    ],
  },
];
