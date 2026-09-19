export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  logo?: string;
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
  category:
    | "Enterprise"
    | "Product & Growth"
    | "Aviation & Systems"
    | "Early Career";
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "autodesk",
    role: "Sr. Full Stack Engineer",
    company: "Autodesk",
    logo: "/images/companies/autodesk.svg",
    period: "May 2023 — Present",
    startYear: 2023,
    endYear: "Present",
    location: "Seville (Spain)",
    workMode: "Remote",
    teamOrScope: "Fusion, CI Team",
    featured: true,
    category: "Enterprise",
    summary:
      "Building high-throughput CI/CD pipelines and developer tooling for Autodesk Fusion, supporting large-scale C++ and cloud compilation environments.",
    impacts: [
      "Optimize multi-platform C++ build pipelines, measurably shortening developer feedback loops and CI cycle times.",
      "Build reliable TypeScript & Node.js automation services integrated with cloud build infrastructure.",
      "Mentor distributed engineering teams through technical reviews and CI/CD architecture standards.",
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
    logo: "/images/companies/typeform.png",
    period: "Feb 2022 — Feb 2023",
    startYear: 2022,
    endYear: 2023,
    location: "Seville (Spain)",
    workMode: "Remote",
    teamOrScope: "Growth Team",
    featured: true,
    category: "Product & Growth",
    summary:
      "Engineered public signup flows and rapid A/B experimentation within the Growth team, optimizing user onboarding and conversion.",
    impacts: [
      "Shipped multivariate A/B experiments that measurably increased signup completion and onboarding velocity.",
      "Refactored frontend micro-services to reduce REST roundtrips and improve page load times.",
      "Automated test pipelines using Jest, Testing Library, Cypress, and GitHub Actions.",
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
    logo: "/images/companies/schiphol.svg",
    period: "Jun 2017 — Oct 2021",
    startYear: 2017,
    endYear: 2021,
    location: "Amsterdam, Netherlands",
    workMode: "Hybrid",
    teamOrScope: "Digital Passenger Department",
    featured: true,
    category: "Aviation & Systems",
    summary:
      "Led frontend modernization for Amsterdam Airport Schiphol, transitioning monolithic web surfaces to micro-frontends and physical passenger kiosks.",
    impacts: [
      "Architected the airport's Self Service Units (SSU), replacing staffed counters with interactive wayfinding and live flight updates.",
      "Built the Short Connection Unit kiosks to automatically print expedited security transit passes for tight layovers.",
      "Created a shared component library published to NPM to unify UI across 10+ agile teams.",
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
    logo: "/images/companies/thispage.jpg",
    period: "Oct 2016 — Jun 2017",
    startYear: 2016,
    endYear: 2017,
    location: "Amsterdam, Netherlands",
    workMode: "On-site",
    teamOrScope: "Digital Campaigns",
    featured: false,
    category: "Early Career",
    summary:
      "Developed high-performance creative web applications and campaign platforms for international brands.",
    impacts: [
      "Delivered interactive canvas and 60fps web experiences with strict cross-browser compatibility.",
      "Partnered directly with design teams to translate complex animations into accessible, performant code.",
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
    logo: "/images/companies/bq.png",
    period: "Apr 2015 — Sep 2016",
    startYear: 2015,
    endYear: 2016,
    location: "Madrid, Spain",
    workMode: "On-site",
    teamOrScope: "Digital Platforms",
    featured: false,
    category: "Early Career",
    summary:
      "Developed client-side e-commerce and digital reading web applications for BQ hardware devices.",
    impacts: [
      "Built an in-browser book reader application using early Web Components (Polymer) and subscription APIs.",
      "Maintained frontend infrastructure supporting digital services across smartphone and tablet lines.",
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
    logo: "/images/companies/welvi.jpg",
    period: "Jul 2013 — Jan 2014",
    startYear: 2013,
    endYear: 2014,
    location: "Madrid, Spain",
    workMode: "On-site",
    featured: false,
    category: "Early Career",
    summary:
      "First software engineering internship, developing interactive client tracking and mapping tools for an early-stage fitness startup.",
    impacts: [
      "Integrated Google Maps API with dynamic single-page training schedules.",
      "Gained foundational experience in semantic DOM manipulation, CSS, and Git collaboration.",
    ],
    skills: [
      "JavaScript",
      "Google Maps API",
      "Git",
      "DOM Manipulation",
      "CSS3",
    ],
  },
];
