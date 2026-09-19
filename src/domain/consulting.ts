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
    role: "External Technical Consultant & Full Stack Architect",
    engagementType: "Freelance / External Contractor",
    period: "Aug 2024 — May 2025",
    startYear: 2024,
    endYear: 2025,
    location: "Seville (Spain)",
    workMode: "Remote",
    scope: "BIM Common Data Environment (CDE) & 3D Digital Twin Platform",
    summary:
      "First freelance engagement as an independent software consultant, advising and working alongside Ingreen's engineering team to modernize cloud delivery pipelines, develop a high-performance Common Data Environment (CDE) for BIM infrastructure projects, and integrate 3D geospatial digital twins.",
    deliverables: [
      {
        title: "Multi-Tenant Container CI/CD & Azure Automation",
        description:
          "Architected automated Docker build-and-deploy workflows via GitHub Actions and GitHub Container Registry (ghcr.io), automating production deployments to Azure Web Apps for institutional clients (DIGITAEC, AOPJA, GENCAT).",
      },
      {
        title: "BIM Common Data Environment (CDE) & 3D Web Graphics",
        description:
          "Developed core features for ingesting, validating, and rendering 3D IFC models using That Open Platform (@thatopen/components / IFC.js) and Three.js, supporting IDS (Information Delivery Specification) checks and spatial coordinate systems.",
      },
      {
        title: "Blockchain-Backed Model Verification & Notary Proofs",
        description:
          "Designed and implemented cryptographic certification for BIM models via CodeContract API, generating tamper-proof Merkle Root hashes, verifiable PDF compliance certificates, and geolocated map pins.",
      },
      {
        title: "Serverless IoT Ingestion & Azure Database for PostgreSQL",
        description:
          "Engineered resilient schema architecture using Prisma ORM on Azure PostgreSQL, integrated with Azure Functions and Cosmos DB for ingesting real-time railway telemetry and IoT sensor data.",
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
