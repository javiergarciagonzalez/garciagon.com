import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/shared/components/Container";
import { Typography } from "@/shared/components/Typography";
import { Button } from "@/shared/components/Button";
import {
  ArrowLeft,
  ArrowSquareOut,
  ShieldCheck,
  Code,
  Stack,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "RamenTask Architecture — Javier García González",
  description:
    "Technical deep dive into RamenTask: In-browser WebAssembly engines, Hexagonal Architecture, and client-side privacy-first engineering.",
};

const STACK_SPEC = [
  { category: "Framework", tech: "Next.js (App Router)", detail: "Server-side generation & Edge routing" },
  { category: "Language", tech: "TypeScript (Strict)", detail: "100% strict type safety across domain & UI" },
  { category: "Core Engines", tech: "QPDF WASM & WebAssembly", detail: "In-browser native C++ compiled binary processing" },
  { category: "Architecture", tech: "Hexagonal (Ports & Adapters)", detail: "Decoupled domain models isolated from React/DOM" },
  { category: "Design System", tech: "Tailwind CSS v4", detail: "Standardized atomic components in shared/ui/" },
  { category: "Verification", tech: "Jest & Playwright", detail: "Unit test coverage on domain logic + E2E test gates" },
  { category: "Distribution", tech: "pSEO across 8 Locales", detail: "Headless programmatic landing pages with sub-second FCP" },
  { category: "Infrastructure", tech: "Vercel Edge / SSG", detail: "Zero-server compute costs; static asset edge delivery" },
];

export default function RamenTaskShowcasePage() {
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
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
            <span>Production SaaS &middot; Live</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white p-1.5 shrink-0 shadow-xs">
                <Image
                  src="/images/projects/ramentask.svg"
                  alt="RamenTask logo"
                  width={32}
                  height={32}
                  className="h-7 w-7 object-contain"
                  priority
                />
              </div>
              <Typography.H1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                RamenTask
              </Typography.H1>
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-foreground/90 tracking-tight">
              In-browser, privacy-first developer utilities &amp; productivity suite.
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Built on a fundamental premise: developers and professionals should never have to upload confidential files, JSON schemas, or proprietary documents to external servers just to format, compress, or convert them.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              href="https://ramentask.com"
              external
              rightIcon={<ArrowSquareOut size={16} />}
            >
              Visit Platform (ramentask.com)
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/javiergarciagonzalez"
              external
              rightIcon={<ArrowSquareOut size={16} />}
            >
              Related Repositories
            </Button>
          </div>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Architectural Pillars (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Pillar 1: WASM & Pure Client-Side Execution */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-emerald-500" />
                <Typography.H3 className="text-xl font-bold">
                  Zero-Cloud Execution &amp; Memory-Safe Processing
                </Typography.H3>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  Most free online utility tools (PDF mergers, file converters, JSON linters) quietly upload sensitive documents to remote servers for processing. This creates massive corporate data-leak exposure and regulatory compliance risks.
                </p>
                <p>
                  RamenTask operates completely on client devices. Heavy operations (e.g., merging encrypted 100MB PDF bundles or running syntax transformations) execute in-browser using compiled WebAssembly binaries (such as native QPDF). Files never leave the user&rsquo;s physical RAM.
                </p>
              </div>
            </section>

            {/* Pillar 2: Hexagonal Architecture */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Code size={20} className="text-blue-500" />
                <Typography.H3 className="text-xl font-bold">
                  Hexagonal Architecture (Ports &amp; Adapters)
                </Typography.H3>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  Every utility tool follows a strict Ports and Adapters pattern. The business logic (e.g., token parsing, unit arithmetic, syntax transformation) resides in pure TypeScript domain modules with 0 React or DOM dependencies.
                </p>
                <p>
                  React components serve solely as presentation adapters. This separation allows domain logic to be executed equivalently in web workers, automated test runners (Jest), or headless CLI tools without UI coupling.
                </p>
              </div>
            </section>

            {/* Pillar 3: High-Yield pSEO Engine */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Stack size={20} className="text-amber-500" />
                <Typography.H3 className="text-xl font-bold">
                  Headless Programmatic SEO &amp; i18n
                </Typography.H3>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  To achieve organic reach without massive ad budgets, RamenTask leverages a high-yield programmatic SEO architecture. Each tool generates static, localized landing pages across 8 languages (English, Spanish, French, German, Italian, Japanese, Chinese, and Korean).
                </p>
                <p>
                  Pages achieve sub-second First Contentful Paint (FCP) by serving static HTML shells with localized metadata, JSON-LD structured schema markup, and lazy-loaded WebAssembly engines on user interaction.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Architectural Spec Ledger (4 cols) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-surface p-6 space-y-6 sticky top-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Specification
                </span>
                <h4 className="text-lg font-bold text-foreground">
                  Technical Ledger
                </h4>
              </div>

              <div className="divide-y divide-border/60">
                {STACK_SPEC.map((item, idx) => (
                  <div key={idx} className="py-3 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-muted-foreground">{item.category}</span>
                      <span className="text-foreground font-semibold">{item.tech}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-sans">
                      {item.detail}
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
