export interface ConsultingDeliverable {
  title: string;
  description: string;
}

export interface ConsultingEngagement {
  id: string;
  client: string;
  clientUrl: string;
  logo: string;
  role: string;
  engagementType: string;
  period: string;
  startYear: number;
  endYear: number;
  location: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  scope: string;
  summary: string;
  deliverables: ConsultingDeliverable[];
  skills: string[];
}

export const CONSULTING_ENGAGEMENTS: ConsultingEngagement[] = [
  {
    id: "ingreen",
    client: "Ingreen Innovación",
    clientUrl: "https://www.ingreen.es/",
    logo: "/images/companies/ingreen.webp",
    role: "External Technical Consultant",
    engagementType: "Freelance Engagement",
    period: "Aug 2024 — May 2025",
    startYear: 2024,
    endYear: 2025,
    location: "Seville (Spain)",
    workMode: "Remote",
    scope: "BIM Common Data Environment (CDE) & 3D Digital Twin Platform",
    summary:
      "Hired as an independent technical consultant to establish modern cloud CI/CD pipelines, guide the frontend team, and develop 3D BIM & Digital Twin platforms for public infrastructure projects.",
    deliverables: [
      {
        title: "Docker & Azure CI/CD",
        description:
          "Built multi-tenant GitHub Actions workflows and GHCR registries, automating zero-downtime container deployments to Azure Web Apps (DIGITAEC, AOPJA, GENCAT).",
      },
      {
        title: "3D BIM Common Data Environment (CDE)",
        description:
          "Built web features to inspect, validate, and render IFC building models using That Open Platform (IFC.js) and Three.js.",
      },
      {
        title: "Blockchain Model Notarization",
        description:
          "Integrated CodeContract API to generate tamper-proof Merkle Root proofs and verifiable PDF audit records for certified models.",
      },
      {
        title: "PostgreSQL & Serverless IoT",
        description:
          "Modeled Prisma schemas on Azure PostgreSQL and built Azure Functions to process real-time railway sensor telemetry.",
      },
    ],
    skills: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Azure Functions",
      "Azure Blob Storage",
      "Docker",
      "GitHub Actions",
      "Three.js",
      "CesiumJS",
      "Tailwind CSS",
    ],
  },
];
