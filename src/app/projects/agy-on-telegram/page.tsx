import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/shared/components/Container";
import { Typography } from "@/shared/components/Typography";
import { Button } from "@/shared/components/Button";
import {
  ArrowLeft,
  ArrowSquareOut,
  Robot,
  Microphone,
  ArrowsClockwise,
  ShieldCheck,
  Terminal,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "AGY on Telegram Architecture — Javier García González",
  description:
    "Technical deep dive into AGY on Telegram: Cross-platform Telegram gateway for Google Antigravity CLI with Whisper voice routing, vision analysis, and auto-retry resilience.",
};

const ARCHITECTURE_SPEC = [
  { category: "Language", tech: "Python 3.8+", detail: "Pure standard library core with minimal external dependencies" },
  { category: "Agent Engine", tech: "Google Antigravity CLI", detail: "Headless non-interactive print mode with workspace context injection" },
  { category: "Messaging Protocol", tech: "Telegram Bot API", detail: "Long polling getUpdates loop with typing heartbeat concurrency" },
  { category: "Audio Transcription", tech: "Whisper HTTP Service", detail: "Local private speech-to-text with zero external network leakage" },
  { category: "Intent Engine", tech: "Spoken Regex Classifier", detail: "Zero-latency prefix matching for hands-free session routing" },
  { category: "Fault Tolerance", tech: "Exponential Backoff Loop", detail: "Up to 3 automated retries (2s, 4s, 6s) on subprocess exit errors" },
  { category: "Access Control", tech: "Whitelist Verification", detail: "Strict Telegram User ID validation at ingress before subprocess dispatch" },
  { category: "Supervisors", tech: "Systemd & Launchd", detail: "Native user-space daemons across Linux distributions and macOS" },
];

export default function AgyOnTelegramShowcasePage() {
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
            <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.7)]" />
            <span>Open Source &middot; Production Ready</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-purple-400 shrink-0 shadow-xs">
                <Robot size={22} />
              </div>
              <Typography.H1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                AGY on Telegram
              </Typography.H1>
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-foreground/90 tracking-tight">
              Fault-tolerant Telegram gateway for Google Antigravity CLI with voice &amp; vision.
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
            A lightweight, production-ready daemon bridging Google&apos;s Antigravity CLI (AGY) agent with mobile devices. It transforms Telegram into a responsive, secure control surface for headless AI coding and systems management across personal workstations, servers, and NAS hardware.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              href="https://github.com/javiergarciagonzalez/agy-on-telegram"
              external
              rightIcon={<GithubLogo size={16} />}
            >
              GitHub Repository
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/javiergarciagonzalez/agy-on-telegram/blob/main/README.md"
              external
              rightIcon={<ArrowSquareOut size={16} />}
            >
              Documentation &amp; Setup
            </Button>
          </div>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Architectural Pillars (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Pillar 1: Conversational Memory & Multimodal Vision */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal size={20} className="text-purple-400" />
                <Typography.H3 className="text-xl font-bold">
                  Context Continuity &amp; Multimodal Inspection
                </Typography.H3>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  Natural conversation persistence is maintained across plain text messages via AGY&apos;s session continuation flags. When a clean slate is required, commands like <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted text-foreground">/new &lt;prompt&gt;</code> bypass previous context, while <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted text-foreground">/c &lt;prompt&gt;</code> reinforces conversational chaining.
                </p>
                <p>
                  Multimodal vision is achieved without external cloud image APIs. Screenshots and photos received via Telegram are staged in a dedicated workspace directory and referenced in the agent&apos;s execution prompt, enabling AGY to inspect UI bugs, error logs, and system dashboards directly via standard file-reading tools.
                </p>
              </div>
            </section>

            {/* Pillar 2: Speech-to-Text & Spoken Intent Routing */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Microphone size={20} className="text-sky-500" />
                <Typography.H3 className="text-xl font-bold">
                  Local Whisper Pipeline &amp; Zero-Latency Intent Parsing
                </Typography.H3>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  Voice memos are transcribed on-premise through a local Whisper HTTP endpoint, ensuring sensitive audio never touches third-party speech servers.
                </p>
                <p>
                  The pipeline features dual-mode execution routing: spoken natural language triggers (such as <em>&quot;Nuevo chat: ...&quot;</em> or <em>&quot;Continúa con lo anterior: ...&quot;</em>) are automatically extracted using regex classifiers to trigger immediate execution. If intent is unstated, the bot dynamically serves interactive Telegram inline keyboards allowing the user to select the execution mode with a single tap.
                </p>
              </div>
            </section>

            {/* Pillar 3: Subprocess Resilience & Daemon Supervision */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <ArrowsClockwise size={20} className="text-emerald-500" />
                <Typography.H3 className="text-xl font-bold">
                  Fault-Tolerant Auto-Retries &amp; Cross-Platform Supervision
                </Typography.H3>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  Long-running LLM processes frequently suffer from transient API rate limits, backend restarts, or network hiccups. The execution supervisor implements an automatic retry mechanism with progressive backoff (<code className="text-xs font-mono px-1 py-0.5 rounded bg-muted text-foreground">2s, 4s, 6s</code>), updating the Telegram status message in-place to give real-time feedback without message spam.
                </p>
                <p>
                  Engineered with cross-platform native support for both Linux (<code className="text-xs font-mono px-1 py-0.5 rounded bg-muted text-foreground">systemd --user</code>) and macOS (<code className="text-xs font-mono px-1 py-0.5 rounded bg-muted text-foreground">launchd</code> LaunchAgent), including dynamic PATH resolution for Apple Silicon Homebrew and unified host metrics monitoring via <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted text-foreground">/status</code>.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Technical Specification Ledger (4 cols) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-surface p-6 space-y-6 sticky top-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Architecture Ledger
                </span>
                <h4 className="text-lg font-bold text-foreground">
                  Technical Specifications
                </h4>
              </div>

              <div className="divide-y divide-border/60">
                {ARCHITECTURE_SPEC.map((spec, idx) => (
                  <div key={idx} className="py-2.5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-foreground font-semibold">{spec.tech}</span>
                      <span className="text-muted-foreground text-xs px-1.5 py-0.5 rounded-sm bg-muted/60">
                        {spec.category}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-sans">
                      {spec.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-border/60">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                  <span>Whitelisted User ID Security Enforced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
