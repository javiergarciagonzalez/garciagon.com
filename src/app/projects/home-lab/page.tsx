import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/shared/components/Container";
import { Typography } from "@/shared/components/Typography";
import { Badge } from "@/shared/components/Badge";
import { Button } from "@/shared/components/Button";
import { Card, CardTitle } from "@/shared/components/Card";
import {
  ArrowLeft,
  HardDrives,
  ShieldCheck,
  Terminal,
  ArrowsClockwise,
  ChartLineUp,
  Robot,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Self-Hosted NAS & Private Cloud Showcase — Javier García González",
  description:
    "Technical deep dive into a 24/7 automated NAS and private cloud managed 100% via Ansible Infrastructure-as-Code.",
};

const ANSIBLE_ROLES_HIGHLIGHT = [
  { name: "zfs", desc: "ZFS redundant storage pools, automated scrubbing & snapshot policies" },
  { name: "tailscale / wireguard", desc: "Encrypted mesh network VPN with zero public inbound ports" },
  { name: "authelia & caddy", desc: "Reverse proxy, automated Let's Encrypt SSL, and 2FA SSO authentication" },
  { name: "ollama & open-webui", desc: "Self-hosted local LLM runtime for private AI inference" },
  { name: "prometheus & grafana", desc: "Node exporter, cAdvisor, and real-time hardware telemetry" },
  { name: "kopia_backup", desc: "Deduplicated, client-side encrypted automated off-site backups" },
  { name: "nextcloud", desc: "Private files, contact & calendar synchronization" },
  { name: "n8n", desc: "Self-hosted workflow automations and webhook event routing" },
];

export default function HomeLabShowcasePage() {
  return (
    <main className="py-12 sm:py-20 space-y-16">
      <Container size="xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-6 max-w-3xl border-b border-border/80 pb-12">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="dot" dotColor="blue">
              Self-Hosted Lab (24/7)
            </Badge>
            <Badge variant="default">Solo Project</Badge>
            <Badge variant="outline">Ansible Infrastructure as Code</Badge>
          </div>

          <div className="space-y-2">
            <Typography.H1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Self-Hosted NAS &amp; Private Cloud
            </Typography.H1>
            <p className="text-xl sm:text-2xl font-medium text-foreground/90 tracking-tight">
              Bare-metal infrastructure automated end-to-end via Ansible playbooks.
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A dedicated, 24/7 low-power private cloud and NAS serving as both production storage and an experimental systems sandbox. Built on the core principle that true software engineering extends down through container virtualization, network routing, and bare-metal hardware.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              variant="primary"
              href="/#contact"
            >
              Discuss Infrastructure &amp; DevOps
            </Button>
            <Button
              variant="secondary"
              href="/#experience"
            >
              View Work Experience
            </Button>
          </div>
        </div>

        {/* Key Architectural Pillars */}
        <div className="pt-12 space-y-16">
          <div className="space-y-4">
            <Typography.Subtle className="font-mono uppercase tracking-widest text-[11px] text-muted-foreground">
              Architecture &amp; Security
            </Typography.Subtle>
            <Typography.H2 className="text-2xl sm:text-3xl font-bold">
              Engineering Principles &amp; System Capabilities
            </Typography.H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-surface/60 border-border p-6 space-y-4">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 w-fit">
                <Terminal size={24} />
              </div>
              <CardTitle className="text-lg font-bold">100% Infrastructure as Code</CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Managed by a dedicated Ansible repository (`nas-services`) containing 40+ modular roles. Server provisioning, Docker configurations, and security policies are version-controlled in Git.
              </p>
            </Card>

            <Card className="bg-surface/60 border-border p-6 space-y-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                <ShieldCheck size={24} />
              </div>
              <CardTitle className="text-lg font-bold">Zero-Trust Network Mesh</CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Zero public open router ports. Ingress is guarded by Tailscale mesh VPN, encrypted WireGuard tunnels, and Cloudflare Tunnels protected with Authelia multi-factor authentication.
              </p>
            </Card>

            <Card className="bg-surface/60 border-border p-6 space-y-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit">
                <HardDrives size={24} />
              </div>
              <CardTitle className="text-lg font-bold">ZFS Storage &amp; Snapshots</CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                ZFS RAIDZ storage pools providing automated bitrot prevention, scheduled data scrub operations, and Kopia off-site deduplicated, encrypted snapshot backups.
              </p>
            </Card>
          </div>

          {/* Ansible Roles Showcase */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-10 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ArrowsClockwise size={18} className="text-foreground" />
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Codified Automation
                </span>
              </div>
              <Typography.H2 className="text-2xl sm:text-3xl font-bold">
                Modular Ansible Roles (`nas-services`)
              </Typography.H2>
              <Typography.Body tone="muted">
                Each subsystem is codified into an idempotent, testable Ansible role with encrypted secrets managed via Ansible Vault.
              </Typography.Body>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ANSIBLE_ROLES_HIGHLIGHT.map((role) => (
                <div
                  key={role.name}
                  className="rounded-xl border border-border/80 bg-surface/60 p-4 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-foreground">
                      roles/{role.name}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">
                      Ansible Role
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI & Observability Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-foreground font-semibold text-base">
                <Robot size={20} className="text-emerald-500" />
                <span>Local AI Inference (Ollama)</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Integrated local LLMs running via Ollama paired with Open-WebUI. Allows private code refactoring, context processing, and experimentation without third-party data leakage.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-foreground font-semibold text-base">
                <ChartLineUp size={20} className="text-sky-500" />
                <span>Real-Time Observability</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Telemetry collected via Prometheus, Node Exporter, and cAdvisor. Visualized on Grafana dashboards monitoring CPU thermals, memory pressure, and ZFS pool health.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
