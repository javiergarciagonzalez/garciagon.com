export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  startYear: number;
  endYear: number | "Present";
  location: string;
  workMode: "Remote" | "On-site" | "Hybrid";
  teamOrScope?: string;
  summary: string;
  impacts: string[];
  skills: string[];
  featured?: boolean;
  category: "Enterprise" | "Product & Growth" | "Aviation & Systems" | "Early Career";
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "autodesk",
    role: "Sr. Full Stack Engineer",
    company: "Autodesk",
    period: "May 2023 — Present",
    startYear: 2023,
    endYear: "Present",
    location: "Spain (Remote)",
    workMode: "Remote",
    teamOrScope: "Fusion360, CI Team",
    featured: true,
    category: "Enterprise",
    summary:
      "Driving technical decision-making within the Fusion CI team, optimizing build systems, continuous integration pipelines, and developer experience for large-scale C++ and cloud environments.",
    impacts: [
      "Architect and maintain high-throughput CI/CD pipelines supporting complex C++ builds and multi-platform compilation environments.",
      "Spearhead developer experience (DevEx) initiatives that measurably decrease build cycle times and accelerate engineering feedback loops.",
      "Combine deep TypeScript & Node.js backend engineering with cloud infrastructure to ensure high reliability, type safety, and clean architecture.",
      "Provide technical leadership, code review mentorship, and architectural governance across distributed international teams.",
    ],
    skills: [
      "TypeScript",
      "Node.js",
      "C++ Build Systems",
      "CI/CD Pipelines",
      "Cloud Infrastructure",
      "Docker",
      "Distributed Systems",
      "System Architecture",
    ],
  },
  {
    id: "typeform",
    role: "Frontend Engineer",
    company: "Typeform",
    period: "Feb 2022 — Feb 2023",
    startYear: 2022,
    endYear: 2023,
    location: "Spain (Remote)",
    workMode: "Remote",
    teamOrScope: "Growth Team",
    featured: true,
    category: "Product & Growth",
    summary:
      "Core contributor to the Growth engineering team, executing rapid-fire A/B experimentation and re-architecting public-facing surfaces for extreme scalability and sign-up conversion.",
    impacts: [
      "Executed continuous multivariate A/B testing initiatives directly driving sign-up conversion and onboarding flow improvements.",
      "Re-architected and simplified frontend micro-services infrastructure, substantially reducing REST roundtrips and latency.",
      "Engineered comprehensive smoke test suites and production monitoring across server-side and client-side web applications.",
      "Instituted automated quality gates using Jest, Testing Library, Cypress, and modern GitHub Actions workflows.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "A/B Testing",
      "Optimizely",
      "Kubernetes",
      "AWS Lambda",
      "Cypress",
      "Jest",
    ],
  },
  {
    id: "schiphol",
    role: "Frontend Engineer",
    company: "Schiphol Airport",
    period: "Jun 2017 — Oct 2021",
    startYear: 2017,
    endYear: 2021,
    location: "Amsterdam, Netherlands",
    workMode: "Hybrid",
    teamOrScope: "Digital Passenger Department",
    featured: true,
    category: "Aviation & Systems",
    summary:
      "Four-year leadership role in Amsterdam Airport's digital innovation unit. Led migration from a monolithic legacy stack to a modern micro-services ecosystem, including hardware-integrated terminal kiosks.",
    impacts: [
      "Led the architectural migration of Schiphol's core digital presence from a legacy monolith into a resilient micro-services and micro-frontends ecosystem.",
      "Designed and deployed the Self Service Unit kiosk system, replacing physical personal assistance with real-time flight tracking, airport wayfinding, and live video support.",
      "Engineered the Short Connection Unit physical kiosks, automatically printing expedited security transit passes for tight connecting passengers (<60 min).",
      "Created an internal component monorepo published to NPM, bridging the multi-year transitional redesign seamlessly across 10+ agile teams.",
      "Expanded T-shaped responsibilities into DevOps, containerizing applications with Docker and deploying onto Kubernetes clusters via automated CI/CD.",
    ],
    skills: [
      "React",
      "Redux",
      "Vue / NuxtJS",
      "Micro-frontends",
      "Hardware Integration",
      "Docker",
      "Kubernetes",
      "Jest",
      "Cypress",
      "Aviation APIs",
    ],
  },
  {
    id: "thispage",
    role: "Frontend Developer",
    company: "This Page Amsterdam",
    period: "Oct 2016 — Jun 2017",
    startYear: 2016,
    endYear: 2017,
    location: "Amsterdam, Netherlands",
    workMode: "On-site",
    featured: false,
    category: "Early Career",
    summary:
      "Crafted high-fidelity creative digital platforms and campaigns for international enterprise brands, focusing on pixel-perfect fidelity, high-frame-rate animation, and strict cross-browser performance.",
    impacts: [
      "Delivered performance-critical interactive web applications with sub-second load times and 60fps animations.",
      "Collaborated tightly with design teams to translate complex creative concepts into production-grade, accessible code.",
    ],
    skills: [
      "JavaScript (ES6+)",
      "SASS / PostCSS",
      "Performance Profiling",
      "Cross-browser Optimization",
      "Interactive Canvas",
    ],
  },
  {
    id: "bq",
    role: "Frontend Developer",
    company: "BQ",
    period: "Apr 2015 — Sep 2016",
    startYear: 2015,
    endYear: 2016,
    location: "Madrid, Spain",
    workMode: "On-site",
    teamOrScope: "Digital Platforms",
    featured: false,
    category: "Early Career",
    summary:
      "Built client-side digital reading and e-commerce platforms for consumer hardware ecosystems while concluding software engineering bachelor degree.",
    impacts: [
      "Developed web-based book reader client using modern Polymer web components and subscription subscription APIs.",
      "Contributed to the frontend infrastructure powering digital services across BQ's smartphone and tablet product lines.",
    ],
    skills: [
      "JavaScript",
      "Polymer",
      "Web Components",
      "HTML5 APIs",
      "Responsive Architecture",
    ],
  },
  {
    id: "welvi",
    role: "Web Developer Intern",
    company: "Welvi & Creania",
    period: "Jul 2013 — Jan 2014",
    startYear: 2013,
    endYear: 2014,
    location: "Madrid, Spain",
    workMode: "On-site",
    featured: false,
    category: "Early Career",
    summary:
      "First software engineering role within an on-campus university startup incubator, building personal fitness training interfaces and learning core web development foundations.",
    impacts: [
      "Programmed interactive map and client tracking modules integrating Google Maps API and early single-page application patterns.",
      "Established foundational mastery of the DOM, semantic HTML, CSS, and version control with Git.",
    ],
    skills: ["JavaScript", "Google Maps API", "Git", "DOM Manipulation", "CSS3"],
  },
];
