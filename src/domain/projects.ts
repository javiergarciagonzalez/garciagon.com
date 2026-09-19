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
  logo?: string;
  iconName?: "HardDrives" | "Cpu" | "Terminal";
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
    logo: "/images/projects/ramentask.svg",
    externalLink: "https://ramentask.com",
    showcaseUrl: "/projects/ramentask",
    featured: true,
    description:
      "A privacy-first developer utility suite where files are processed 100% in-browser using WebAssembly engines. Built with Hexagonal Architecture and internationalized across 8 languages.",
    highlights: [
      "Zero network file transfer: WASM engines process PDFs, images, and data strictly in browser memory.",
      "Hexagonal Architecture isolating pure domain logic from React and DOM dependencies.",
      "Fast Core Web Vitals with headless pSEO and multi-locale routing across 8 languages.",
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
    iconName: "HardDrives",
    showcaseUrl: "/projects/home-lab",
    featured: true,
    description:
      "A 24/7 private cloud and testing lab automated 100% via Ansible. Runs containerized workloads, ZFS storage, private CI runners, and a WireGuard/Tailscale mesh VPN.",
    highlights: [
      "Infrastructure as Code: 40+ modular Ansible roles managing storage, networks, and services.",
      "Zero-trust remote access using Cloudflare Tunnels, Tailscale mesh, and SSO.",
      "Full observability with Prometheus & Grafana, automated off-site backups, and local AI runtimes.",
    ],
    tags: ["Ansible IaC", "Docker", "Linux (Ubuntu Server)", "ZFS", "Tailscale / Wireguard", "Prometheus & Grafana"],
  },
];
