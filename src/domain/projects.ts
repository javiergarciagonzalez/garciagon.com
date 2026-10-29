export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  tags: string[];
  status: "Live" | "Self-Hosted" | "Open Source";
  logo?: string;
  iconName?: "HardDrives" | "Cpu" | "Terminal" | "Robot";
  externalLink?: string;
  externalLinkText?: string;
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
    id: "agy-on-telegram",
    slug: "agy-on-telegram",
    title: "AGY on Telegram",
    subtitle: "Fault-tolerant Telegram gateway for Google Antigravity CLI with voice & vision",
    badge: "Open Source & Local AI",
    status: "Open Source",
    iconName: "Robot",
    externalLink: "https://github.com/javiergarciagonzalez/agy-on-telegram",
    externalLinkText: "GitHub Repo",
    showcaseUrl: "/projects/agy-on-telegram",
    featured: true,
    description:
      "A robust, cross-platform Telegram bot gateway bridging Google Antigravity CLI (AGY) with mobile devices. Features Whisper audio transcription with intent routing, multimodal vision inspection, and fault-tolerant auto-retries.",
    highlights: [
      "Multi-turn session persistence with clean session scoping (/new) and explicit context continuation (/c).",
      "Local Whisper HTTP integration transcribing voice memos with zero-click intent routing or inline interactive buttons.",
      "Fault-tolerant execution engine featuring 3 automatic retries with progressive backoff and real-time status updates.",
      "Cross-platform architecture supporting Linux (systemd daemon) and macOS (LaunchAgent) with user-scoped whitelisting.",
    ],
    tags: ["Python", "Telegram Bot API", "Google Antigravity (AGY)", "Whisper AI", "Linux / macOS", "Systemd / Launchd"],
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
