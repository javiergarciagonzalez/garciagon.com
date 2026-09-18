export interface SkillCategory {
  id: string;
  name: string;
  headline: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  year: number;
  description: string;
  keyTopics: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend-cloud",
    name: "Backend & Distributed Systems",
    headline: "High-throughput services, event-driven backends, and cloud orchestration",
    skills: [
      { name: "TypeScript (Advanced)", level: "Core", highlight: true },
      { name: "Node.js Ecosystem", level: "Core", highlight: true },
      { name: "Distributed Systems", level: "Core", highlight: true },
      { name: "REST & GraphQL APIs", level: "Core" },
      { name: "Docker & Containers", level: "Advanced", highlight: true },
      { name: "Kubernetes Orchestration", level: "Advanced" },
      { name: "AWS (Lambda, S3, ECS)", level: "Advanced" },
      { name: "Micro-services Architecture", level: "Core", highlight: true },
    ],
  },
  {
    id: "cicd-devops",
    name: "CI/CD & Developer Experience",
    headline: "Automating developer feedback loops, multi-platform builds, and delivery pipelines",
    skills: [
      { name: "CI/CD Pipelines", level: "Core", highlight: true },
      { name: "C++ Build Systems CI", level: "Core", highlight: true },
      { name: "GitHub Actions & Workflows", level: "Core", highlight: true },
      { name: "Ansible Infrastructure-as-Code", level: "Advanced", highlight: true },
      { name: "Linux Server Administration", level: "Advanced" },
      { name: "Observability (Prometheus & Grafana)", level: "Advanced" },
      { name: "DevEx Optimization", level: "Core", highlight: true },
    ],
  },
  {
    id: "frontend-wasm",
    name: "Frontend Craftsmanship & WebAssembly",
    headline: "Browser rendering performance, client-side WASM computing, and strict UI architecture",
    skills: [
      { name: "React & Next.js", level: "Core", highlight: true },
      { name: "WebAssembly (WASM)", level: "Advanced", highlight: true },
      { name: "Tailwind CSS & Design Tokens", level: "Core" },
      { name: "Browser Performance & Web Vitals", level: "Core", highlight: true },
      { name: "Hexagonal UI Architecture", level: "Core", highlight: true },
      { name: "HTML5 APIs & Client-Side Storage", level: "Advanced" },
    ],
  },
  {
    id: "architecture-leadership",
    name: "Architecture, Testing & Leadership",
    headline: "Domain-Driven Design, test resilience, code reviews, and engineering standards",
    skills: [
      { name: "Clean Architecture & SOLID", level: "Core", highlight: true },
      { name: "Domain-Driven Design (DDD)", level: "Core" },
      { name: "Unit & Integration Testing (Vitest/Jest)", level: "Core", highlight: true },
      { name: "E2E Testing (Cypress)", level: "Advanced", highlight: true },
      { name: "A/B Testing (Optimizely)", level: "Advanced" },
      { name: "Visual Regression (Applitools)", level: "Proficient" },
      { name: "Technical Mentorship & Governance", level: "Core", highlight: true },
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: "msc-cloud",
    degree: "Master of Science (MSc)",
    field: "Cloud Applications & Distributed Software",
    institution: "Universidad Rey Juan Carlos",
    location: "Madrid, Spain",
    period: "2020 — 2021",
    year: 2021,
    description:
      "Advanced postgraduate curriculum centered on distributed cloud computing, asynchronous micro-services in Java and Node.js, containerization, and automated DevOps infrastructure.",
    keyTopics: [
      "Distributed Cloud Systems",
      "Docker & Kubernetes",
      "DevOps Automation",
      "Node.js & Java Services",
      "High Availability & Resilience",
    ],
  },
  {
    id: "bsc-software",
    degree: "Bachelor of Science (BSc)",
    field: "Software Engineering (Ingeniería del Software)",
    institution: "Universidad Politécnica de Madrid (UPM)",
    location: "Madrid, Spain",
    period: "2010 — 2015",
    year: 2015,
    description:
      "Formal five-year computer science foundation covering algorithms, data structures, operating systems, compiler design, software architecture, and systems engineering.",
    keyTopics: [
      "Software Design Patterns",
      "Algorithms & Complexity",
      "Operating Systems & Networking",
      "Object-Oriented Architecture",
      "Relational Databases",
    ],
  },
  {
    id: "erasmus",
    degree: "International Academic Exchange",
    field: "Computer Systems & Control (Erasmus+)",
    institution: "Technical University Sofia",
    location: "Sofia, Bulgaria",
    period: "2014 — 2015",
    year: 2015,
    description:
      "European academic exchange scholarship centered on real-time control systems, hardware-software interfacing, and embedded systems architecture.",
    keyTopics: [
      "Real-Time Systems",
      "Distributed Control",
      "Cross-Cultural Engineering Collaboration",
    ],
  },
];
