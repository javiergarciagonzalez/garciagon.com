import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/shared/components/Container";
import { Typography } from "@/shared/components/Typography";
import { Button } from "@/shared/components/Button";
import {
  ArrowLeft,
  Terminal,
  ShieldCheck,
  HardDrives,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Self-Hosted NAS & Private Cloud — Javier García González",
  description:
    "Technical deep dive into a 24/7 automated NAS and private cloud managed 100% via Ansible Infrastructure-as-Code.",
};

const ANSIBLE_ROLES = [
  { name: "roles/zfs", scope: "Storage", desc: "ZFS RAIDZ pools, automated scheduled scrubbing, and pool health verification" },
  { name: "roles/tailscale", scope: "Networking", desc: "Mesh VPN routing with zero inbound public router ports required" },
  { name: "roles/wireguard", scope: "Networking", desc: "Encrypted point-to-point network tunnels for dedicated peer links" },
  { name: "roles/caddy_authelia", scope: "Security & SSO", desc: "Reverse proxy, automated Let's Encrypt TLS, and 2FA multi-factor authentication" },
  { name: "roles/ollama_ai", scope: "Local AI", desc: "Self-hosted local LLM runtime with Open-WebUI for private inference" },
  { name: "roles/kopia_backup", scope: "Backup", desc: "Client-side encrypted, content-addressed deduplicated off-site snapshot backups" },
  { name: "roles/telemetry", scope: "Observability", desc: "Prometheus, Node Exporter, and cAdvisor feeding real-time Grafana dashboards" },
  { name: "roles/nextcloud", scope: "Productivity", desc: "Private files, contact books, and calendar synchronization infrastructure" },
  { name: "roles/n8n", scope: "Automation", desc: "Self-hosted event routing, webhook web listeners, and cron task orchestrations" },
];

export default function HomeLabShowcasePage() {
  return (
    <main className="py-12 sm:py-20">
      <Container size="xl" className="space-y-16">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to portfolio</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-6 max-w-3xl pb-10 border-b border-border/60">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.7)]" />
            <span>Self-Hosted Production &middot; 24/7 Bare Metal</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-sky-500 shrink-0 shadow-xs">
                <HardDrives size={22} />
              </div>
              <Typography.H1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Self-Hosted NAS &amp; Private Cloud
              </Typography.H1>
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-foreground/90 tracking-tight">
              Bare-metal infrastructure automated 100% via Ansible playbooks.
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
            A dedicated, 24/7 low-power private cloud serving as personal production storage, CI runner host, and systems playground. Built on the principle that senior software engineering competence extends through container virtualization, network routing, and bare-metal hardware.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              href="https://github.com/javiergarciagonzalez"
              external
              rightIcon={<Terminal size={16} />}
            >
              Infrastructure Playbooks
            </Button>
          </div>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Architectural Pillars (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Pillar 1: Declarative IaC */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal size={20} className="text-sky-500" />
                <Typography.H3 className="text-xl font-bold">
                  100% Declarative Automation via Ansible
                </Typography.H3>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  Zero manual SSH snowflake configuration. The entire machine configuration—from disk partition layouts, ZFS pool creation, and Docker compose configurations to firewall rules—is authored in version-controlled Ansible playbooks.
                </p>
                <p>
                  A clean server re-provision from bare metal takes under 15 minutes by executing a single idempotency-tested playbook against the target node.
                </p>
              </div>
            </section>

            {/* Pillar 2: Resilient Storage */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <HardDrives size={20} className="text-emerald-500" />
                <Typography.H3 className="text-xl font-bold">
                  ZFS RAIDZ Data Integrity &amp; Tiered Storage
                </Typography.H3>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  Storage is configured with ZFS to prevent silent data corruption (bit rot). Checksums verify all read/write cycles, with scheduled monthly scrubs and automated snapshot schedules.
                </p>
                <p>
                  Critical directories take advantage of NVMe caching and 3-2-1 backup policies using Kopia: end-to-end encrypted, content-addressed snapshots deduplicated and synced daily to remote cold object storage.
                </p>
              </div>
            </section>

            {/* Pillar 3: Zero-Trust Remote Access */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-amber-500" />
                <Typography.H3 className="text-xl font-bold">
                  Zero Inbound Port Exposure (Tailscale &amp; Cloudflare)
                </Typography.H3>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  The host has 0 open inbound ports on the WAN router. Remote administrative access uses an encrypted Tailscale WireGuard mesh with ACL restrictions and SSH key enforcement.
                </p>
                <p>
                  Public-facing testing webhooks pass strictly through outbound Cloudflare Tunnels backed by Authelia 2FA authentication, preventing direct IP exposure and automated port scanners.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Roles Ledger (4 cols) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-surface p-6 space-y-6 sticky top-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Ansible Roles
                </span>
                <h4 className="text-lg font-bold text-foreground">
                  Automated Modules
                </h4>
              </div>

              <div className="divide-y divide-border/60">
                {ANSIBLE_ROLES.map((role, idx) => (
                  <div key={idx} className="py-2.5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-foreground font-semibold">{role.name}</span>
                      <span className="text-muted-foreground text-xs px-1.5 py-0.5 rounded-sm bg-muted/60">
                        {role.scope}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-sans">
                      {role.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
