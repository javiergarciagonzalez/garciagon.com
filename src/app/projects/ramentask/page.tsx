import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/shared/components/Container";
import { Typography } from "@/shared/components/Typography";
import { Badge } from "@/shared/components/Badge";
import { Button } from "@/shared/components/Button";
import { Card, CardTitle } from "@/shared/components/Card";
import {
  ArrowLeft,
  ArrowSquareOut,
  ShieldCheck,
  Cpu,
  Globe,
  Lightning,
  Code,
  Stack,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "RamenTask Showcase — Javier García González",
  description:
    "Technical deep dive into RamenTask: In-browser WebAssembly engines, Hexagonal Architecture, and client-side privacy-first engineering.",
};

export default function RamenTaskShowcasePage() {
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
            <Badge variant="dot" dotColor="green">
              Live Production
            </Badge>
            <Badge variant="default">Solo Project</Badge>
            <Badge variant="outline">WebAssembly &amp; Hexagonal Architecture</Badge>
          </div>

          <div className="space-y-2">
            <Typography.H1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              RamenTask
            </Typography.H1>
            <p className="text-xl sm:text-2xl font-medium text-foreground/90 tracking-tight">
              In-browser, privacy-first developer utilities &amp; productivity suite.
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            RamenTask was born from a straightforward conviction: developers and professionals should never have to upload confidential documents, JSON schemas, or proprietary assets to an unknown server just to format, compress, or convert them.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              variant="primary"
              href="https://ramentask.com"
              external
              rightIcon={<ArrowSquareOut size={16} />}
            >
              Visit Live Platform (ramentask.com)
            </Button>
            <Button
              variant="secondary"
              href="/#contact"
            >
              Discuss Architecture
            </Button>
          </div>
        </div>

        {/* Key Architectural Pillars */}
        <div className="pt-12 space-y-16">
          <div className="space-y-4">
            <Typography.Subtle className="font-mono uppercase tracking-widest text-[11px] text-muted-foreground">
              System Architecture
            </Typography.Subtle>
            <Typography.H2 className="text-2xl sm:text-3xl font-bold">
              Engineering Highlights &amp; Technical Decisions
            </Typography.H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-surface/60 border-border p-6 space-y-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                <ShieldCheck size={24} />
              </div>
              <CardTitle className="text-lg font-bold">Zero-Cloud Privacy</CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                100% of processing happens client-side directly in browser memory. Using WebAssembly binaries, data never touches external network sockets or third-party storage.
              </p>
            </Card>

            <Card className="bg-surface/60 border-border p-6 space-y-4">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 w-fit">
                <Cpu size={24} />
              </div>
              <CardTitle className="text-lg font-bold">WebAssembly Processing</CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Integrated compiled C++ and Rust engines (QPDF WASM and browser neural networks for background removal) executing complex file parsing with native performance.
              </p>
            </Card>

            <Card className="bg-surface/60 border-border p-6 space-y-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit">
                <Globe size={24} />
              </div>
              <CardTitle className="text-lg font-bold">pSEO &amp; Static Generation</CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Programmatic SEO engine delivering hundreds of statically generated, lightning-fast landing pages across 8 locales with sub-second First Contentful Paint (FCP).
              </p>
            </Card>
          </div>

          {/* Deep Dive: Hexagonal Architecture */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-10 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Stack size={18} className="text-foreground" />
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Software Craftsmanship
                </span>
              </div>
              <Typography.H2 className="text-2xl sm:text-3xl font-bold">
                Hexagonal Architecture (Ports &amp; Adapters)
              </Typography.H2>
              <Typography.Body tone="muted">
                How RamenTask prevents framework coupling and guarantees testability.
              </Typography.Body>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Code size={16} className="text-emerald-500" />
                  Domain Layer Purity
                </h4>
                <p>
                  Core transformation logic (calculators, JSON formatters, unit conversions, byte manipulations) is kept strictly isolated in <code className="text-xs font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">src/domain/</code>.
                </p>
                <p>
                  No React dependencies, no Next.js APIs, and no DOM manipulation leak into the domain models. This allows 100% test coverage with sub-millisecond Jest test execution.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Lightning size={16} className="text-sky-500" />
                  Standardized UI Atomization
                </h4>
                <p>
                  Every user interaction shares design system components in <code className="text-xs font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">src/shared/components/ui/</code>:
                </p>
                <ul className="space-y-1 text-xs list-disc list-inside text-foreground/80">
                  <li>StandardInput, StandardSelect, StandardSwitch</li>
                  <li>UploadZone, FileCard, MetricCard, CodePanel</li>
                  <li>StandardDownloadButton &amp; localized social sharing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full Tech Stack Grid */}
          <div className="space-y-6">
            <Typography.H2 className="text-2xl font-bold">
              Complete Technology Stack
            </Typography.H2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl border border-border bg-surface/40 space-y-1">
                <span className="text-muted-foreground block text-[10px] uppercase">Framework</span>
                <span className="font-bold text-foreground">Next.js (App Router)</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-surface/40 space-y-1">
                <span className="text-muted-foreground block text-[10px] uppercase">Language</span>
                <span className="font-bold text-foreground">TypeScript (Strict)</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-surface/40 space-y-1">
                <span className="text-muted-foreground block text-[10px] uppercase">Engines</span>
                <span className="font-bold text-foreground">QPDF WASM &amp; Imgly</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-surface/40 space-y-1">
                <span className="text-muted-foreground block text-[10px] uppercase">Styling</span>
                <span className="font-bold text-foreground">Tailwind CSS v4</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-surface/40 space-y-1">
                <span className="text-muted-foreground block text-[10px] uppercase">Testing</span>
                <span className="font-bold text-foreground">Jest &amp; Playwright E2E</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-surface/40 space-y-1">
                <span className="text-muted-foreground block text-[10px] uppercase">Internationalization</span>
                <span className="font-bold text-foreground">8 Supported Locales</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-surface/40 space-y-1">
                <span className="text-muted-foreground block text-[10px] uppercase">Container</span>
                <span className="font-bold text-foreground">Docker &amp; Compose</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-surface/40 space-y-1">
                <span className="text-muted-foreground block text-[10px] uppercase">Hosting</span>
                <span className="font-bold text-foreground">Vercel Edge / SSG</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
