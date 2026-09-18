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
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            <span>Self-Hosted Production &middot; 24/7 Bare Metal</span>
          </div>

          <div className="space-y-2">
            <Typography.H1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Self-Hosted NAS &amp; Private Cloud
            </Typography.H1>
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
              href="/#contact"
            >
              Discuss Infrastructure &amp; Systems
            </Button>
            <Button
              variant="secondary"
              href="/#experience"
            >
              View Work Experience
            </Button>
          </div>
        </div>

        {/* Section 1: Infrastructure as Code */}
        <section className="space-y-6 pb-12 border-b border-border/60">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <Terminal size={16} className="text-sky-500" />
              <span>Architectural Principle 01</span>
            </div>
            <Typography.H2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Codified Automation &amp; Zero Configuration Drift
            </Typography.H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
            <div className="lg:col-span-6 space-y-4">
              <p>
                Every service, container network, and system configuration is defined in the private <code className="text-xs font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">nas-services</code> repository containing over 40 modular Ansible roles.
              </p>
              <p>
                No manual SSH tinkering or unrecorded system edits exist on the machine. Running the main playbook ensures complete idempotency—rebuilding the host from a clean OS install to full operational capability in minutes.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <p>
                Sensitive keys, credentials, and Tailscale pre-auth tokens are encrypted at rest using <strong className="text-foreground font-semibold">Ansible Vault</strong>, ensuring that infrastructure code can be safely versioned and audited.
              </p>
              <div className="p-4 rounded-lg bg-muted/50 border border-border/60 font-mono text-xs text-foreground/80 space-y-1">
                <span className="text-muted-foreground block">{"// Deployment Command:"}</span>
                <p>$ ansible-playbook -i inventory.ini site.yml --vault-password-file=.vault_pass</p>
                <p className="text-sky-600 dark:text-sky-400">Status: 42 roles executed &middot; 0 failed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Zero-Trust & ZFS Storage */}
        <section className="space-y-6 pb-12 border-b border-border/60">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Architectural Principle 02</span>
            </div>
            <Typography.H2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Zero-Trust Network Mesh &amp; ZFS Data Integrity
            </Typography.H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-base font-bold text-foreground">
                Network Isolation Without Inbound Ports
              </h3>
              <p>
                The server operates with zero public open router ports. All remote access is routed through an encrypted <strong className="text-foreground font-semibold">Tailscale WireGuard mesh network</strong>.
              </p>
              <p>
                Exposed webhooks and web interfaces pass through Cloudflare Tunnels protected by <strong className="text-foreground font-semibold">Authelia MFA</strong> (multi-factor authentication) and Caddy TLS reverse proxying.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-base font-bold text-foreground">
                ZFS RAIDZ &amp; Content-Addressed Backups
              </h3>
              <p>
                Storage pools utilize ZFS RAIDZ with automated copy-on-write integrity, periodic scrub operations, and automated snapshot policies to prevent silent data corruption (bitrot).
              </p>
              <p>
                Disaster recovery is handled by <strong className="text-foreground font-semibold">Kopia</strong>: snapshots are encrypted client-side and deduplicated before transmission to off-site cloud storage.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Ansible Roles Registry */}
        <section className="space-y-6">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <HardDrives size={16} className="text-foreground" />
              <span>Infrastructure Ledger</span>
            </div>
            <Typography.H2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Codified Ansible Roles Registry
            </Typography.H2>
          </div>

          <div className="divide-y divide-border/60">
            {ANSIBLE_ROLES.map((role) => (
              <div
                key={role.name}
                className="py-4 first:pt-2 last:pb-2 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline text-xs font-mono"
              >
                <span className="sm:col-span-4 font-bold text-foreground">
                  {role.name}
                </span>
                <span className="sm:col-span-2 text-muted-foreground uppercase tracking-wider">
                  {role.scope}
                </span>
                <span className="sm:col-span-6 text-muted-foreground font-sans text-xs">
                  {role.desc}
                </span>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
