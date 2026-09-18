export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  tags: string[];
  status: "Live" | "Self-Hosted";
  externalLink?: string;
  showcaseUrl: string;
  featured?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "ramentask",
    slug: "ramentask",
    title: "RamenTask",
    subtitle: "Privacy-first, in-browser developer utilities & productivity suite",
    badge: "Production SaaS & pSEO",
    status: "Live",
    externalLink: "https://ramentask.com",
    showcaseUrl: "/projects/ramentask",
    featured: true,
    description:
      "A fast, 100% client-side web utility platform where files never leave the user's browser. Built with Hexagonal Architecture, WebAssembly engines for PDF and image processing, and internationalized pSEO across 8 languages.",
    highlights: [
      "Client-side processing via WebAssembly (QPDF WASM, background removal WASM) ensuring complete user data privacy.",
      "Strict Hexagonal Architecture decoupling domain manipulation logic from React UI components.",
      "Engineered for sub-second Core Web Vitals, headless pSEO generation, and multi-locale routing.",
    ],
    tags: ["Next.js", "TypeScript", "WebAssembly (WASM)", "Hexagonal Architecture", "Tailwind CSS", "pSEO"],
  },
  {
    id: "home-lab",
    slug: "home-lab",
    title: "Self-Hosted NAS & Private Cloud",
    subtitle: "Automated bare-metal infrastructure managed 100% via Ansible IaC",
    badge: "Infrastructure as Code",
    status: "Self-Hosted",
    showcaseUrl: "/projects/home-lab",
    featured: true,
    description:
      "A 24/7 personal infrastructure lab and private cloud managed entirely through Ansible playbooks and roles. Hosts containerized services, ZFS encrypted storage, private CI runners, Wireguard/Tailscale mesh VPN, and observability stack.",
    highlights: [
      "Infrastructure-as-Code (IaC) with 40+ modular Ansible roles managing storage, networking, and microservices.",
      "Zero-trust network architecture using Cloudflare Tunnels, Tailscale mesh VPN, and Authelia SSO.",
      "Full observability and resilience: Prometheus, Grafana, automated Kopia snapshots, and local Ollama LLM runtime.",
    ],
    tags: ["Ansible IaC", "Docker", "Linux (Ubuntu Server)", "ZFS", "Tailscale / Wireguard", "Prometheus & Grafana"],
  },
];
