import type { Metadata } from "next";
import Link from "next/link";
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
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Production SaaS &middot; Live</span>
          </div>

          <div className="space-y-2">
            <Typography.H1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              RamenTask
            </Typography.H1>
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
              href="/#contact"
            >
              Discuss Architecture
            </Button>
          </div>
        </div>

        {/* Section 1: The Core Thesis: In-Browser WASM */}
        <section className="space-y-6 pb-12 border-b border-border/60">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Architectural Principle 01</span>
            </div>
            <Typography.H2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Zero-Cloud Privacy &amp; WebAssembly Computing
            </Typography.H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
            <div className="lg:col-span-6 space-y-4">
              <p>
                Standard online conversion utilities route user documents through cloud servers, introducing latency, cloud compute expenses, and serious data privacy risks.
              </p>
              <p>
                RamenTask eliminates this entire attack surface by compiling heavy-duty C++ and Rust engines into <strong className="text-foreground font-semibold">WebAssembly (WASM)</strong>. Operations such as PDF linearization, schema formatting, and byte conversions execute directly inside the user&rsquo;s browser thread.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <p>
                Because no data ever leaves browser memory, the platform guarantees complete user confidentiality by design—eliminating GDPR liability, backend storage servers, and data egress costs.
              </p>
              <div className="p-4 rounded-lg bg-muted/50 border border-border/60 font-mono text-xs text-foreground/80 space-y-1">
                <span className="text-muted-foreground block">{"// Data Flow Guarantee:"}</span>
                <p>Input (User Disk) &rarr; Browser RAM (WASM Engine) &rarr; Output (User Disk)</p>
                <p className="text-emerald-600 dark:text-emerald-400">Network egress payload: 0 bytes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Hexagonal Architecture */}
        <section className="space-y-6 pb-12 border-b border-border/60">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <Stack size={16} className="text-foreground" />
              <span>Architectural Principle 02</span>
            </div>
            <Typography.H2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Hexagonal Architecture (Ports &amp; Adapters)
            </Typography.H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-base font-bold text-foreground">
                Domain Layer Isolation
              </h3>
              <p>
                All transformation logic, calculation algorithms, and data structures are sealed inside <code className="text-xs font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">src/domain/</code>.
              </p>
              <p>
                The domain models contain zero dependencies on React, Next.js, or the DOM. They can be executed headlessly in Node.js, in Web Workers, or in automated unit test suites without mocking framework APIs.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-base font-bold text-foreground">
                Standardized UI Atomization
              </h3>
              <p>
                UI components adhere to an atomic design system located in <code className="text-xs font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">src/shared/components/ui/</code>.
              </p>
              <p>
                Every tool implementation reuses unified inputs, sliders, upload drop zones, and download triggers. This ensures cross-tool visual coherence, accessible keyboard navigation, and consistent state management across all 8 supported languages.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Specifications Matrix */}
        <section className="space-y-6">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <Code size={16} className="text-foreground" />
              <span>Technical Ledger</span>
            </div>
            <Typography.H2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Technology Stack &amp; Implementation Details
            </Typography.H2>
          </div>

          <div className="divide-y divide-border/60">
            {STACK_SPEC.map((item) => (
              <div
                key={item.category}
                className="py-4 first:pt-2 last:pb-2 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline text-xs font-mono"
              >
                <span className="sm:col-span-3 text-muted-foreground uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="sm:col-span-4 font-bold text-foreground">
                  {item.tech}
                </span>
                <span className="sm:col-span-5 text-muted-foreground font-sans text-xs">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
