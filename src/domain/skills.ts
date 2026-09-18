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
  highlight: string;
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
      { name: "CI/CD Pipeline Design", level: "Core", highlight: true },
      { name: "GitHub Actions", level: "Core", highlight: true },
      { name: "C++ Build Tooling (Autodesk)", level: "Advanced", highlight: true },
      { name: "CircleCI & Travis CI", level: "Proficient" },
      { name: "Datadog / New Relic / Sentry", level: "Advanced" },
      { name: "Kibana & Log Aggregation", level: "Proficient" },
      { name: "Build Optimization & Caching", level: "Core", highlight: true },
      { name: "DevEx Metric Tracking", level: "Advanced" },
    ],
  },
  {
    id: "frontend-web",
    name: "Frontend & Web Architecture",
    headline: "Micro-frontends, responsive component systems, and browser rendering efficiency",
    skills: [
      { name: "React & Next.js (App Router)", level: "Core", highlight: true },
      { name: "State Architecture (Redux, Zustand)", level: "Core" },
      { name: "VueJS / NuxtJS", level: "Proficient" },
      { name: "Web Components & Polymer", level: "Proficient" },
      { name: "Tailwind CSS & Design Systems", level: "Core", highlight: true },
      { name: "Web Performance Profiling", level: "Advanced", highlight: true },
      { name: "Accessibility & Semantics", level: "Advanced" },
      { name: "Micro-frontends at Scale", level: "Core", highlight: true },
    ],
  },
  {
    id: "architecture-testing",
    name: "Architecture & Verification",
    headline: "Clean Architecture, SOLID design principles, and automated quality gates",
    skills: [
      { name: "Clean Architecture (Hexagonal)", level: "Core", highlight: true },
      { name: "SOLID Principles", level: "Core", highlight: true },
      { name: "Unit Testing (Jest, Vitest)", level: "Core", highlight: true },
      { name: "React Testing Library", level: "Core" },
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
    highlight: "Backend & DevOps Specialization",
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
    highlight: "Rigorous 5-Year Engineering Degree",
    description:
      "Comprehensive computer science foundation covering algorithms, data structures, operating systems, compiler design, software design patterns, and formal systems engineering.",
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
    highlight: "International Exchange Scholar",
    description:
      "European academic exchange scholarship immersed in real-time control systems, hardware-software interfacing, and embedded systems architecture.",
    keyTopics: [
      "Real-Time Systems",
      "Distributed Control",
      "Cross-Cultural Engineering Collaboration",
    ],
  },
];
