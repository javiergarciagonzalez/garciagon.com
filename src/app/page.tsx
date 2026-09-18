"use client";

import * as React from "react";
import { Container } from "@/shared/components/Container";
import { Typography } from "@/shared/components/Typography";
import { Button } from "@/shared/components/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/shared/components/Card";
import { Badge } from "@/shared/components/Badge";
import { ThemeToggle } from "@/shared/components/ThemeToggle";
import { getExperienceTag } from "@/domain/profile";
import {
  Terminal,
  ArrowRight,
  GitBranch,
  Cpu,
  Cloud,
  CheckCircle,
  Code,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="min-h-screen py-12 sm:py-20 bg-background text-foreground transition-colors duration-200">
      <Container size="lg" className="space-y-16">
        {/* Top bar with Theme Toggle */}
        <header className="flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest uppercase font-semibold text-muted-foreground">
              Design System Showcase
            </span>
            <Badge variant="dot" dotColor="green">
              Task 2 Active
            </Badge>
          </div>
          <ThemeToggle />
        </header>

        {/* Hero Preview Section */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default">Senior Full Stack Engineer</Badge>
            <Badge variant="outline">{getExperienceTag()}</Badge>
            <Badge variant="accent">TS & Node.js Specialist</Badge>
          </div>
          <Typography.H1>
            Javier García González
          </Typography.H1>
          <Typography.Lead>
            Architecting scalable web services, optimizing high-performance CI/CD pipelines, and crafting clean full-stack architectures.
          </Typography.Lead>
        </section>

        {/* Typography System Section */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <Typography.H2>Typography Hierarchy</Typography.H2>
            <Typography.Subtle>Display, section headers, card titles, and body prose</Typography.Subtle>
          </div>
          <div className="space-y-4 rounded-xl border border-border bg-surface p-6">
            <div>
              <Typography.Subtle className="block mb-1 font-mono uppercase">Typography.H1</Typography.Subtle>
              <Typography.H1 className="text-3xl sm:text-4xl">
                Engineering at Scale
              </Typography.H1>
            </div>
            <div>
              <Typography.Subtle className="block mb-1 font-mono uppercase">Typography.H2</Typography.Subtle>
              <Typography.H2>
                Work Experience & Technical Leadership
              </Typography.H2>
            </div>
            <div>
              <Typography.Subtle className="block mb-1 font-mono uppercase">Typography.H3</Typography.Subtle>
              <Typography.H3>
                Autodesk — Sr. Full Stack Engineer (Fusion360 CI Team)
              </Typography.H3>
            </div>
            <div>
              <Typography.Subtle className="block mb-1 font-mono uppercase">Typography.Body (Default)</Typography.Subtle>
              <Typography.Body>
                Driving technical decision-making within distributed teams, focusing on build system optimization, clean architecture, and developer ergonomics for complex C++ and cloud environments.
              </Typography.Body>
            </div>
            <div>
              <Typography.Subtle className="block mb-1 font-mono uppercase">Typography.Body (Muted)</Typography.Subtle>
              <Typography.Body tone="muted">
                Prioritizing reliability, type safety, and verifiable system architecture over transient tech trends.
              </Typography.Body>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Typography.Code>TypeScript</Typography.Code>
              <Typography.Code>Node.js</Typography.Code>
              <Typography.Code>Docker</Typography.Code>
              <Typography.Code>Kubernetes</Typography.Code>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <Typography.H2>Buttons & Micro-interactions</Typography.H2>
            <Typography.Subtle>Standardized interactive elements with tactile feedback</Typography.Subtle>
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-surface p-6">
            <Button variant="primary" rightIcon={<ArrowRight size={16} />}>
              Primary Action
            </Button>
            <Button variant="secondary" leftIcon={<GitBranch size={16} />}>
              Secondary Button
            </Button>
            <Button variant="outline" leftIcon={<Terminal size={16} />}>
              Outline Variant
            </Button>
            <Button variant="ghost">
              Ghost Button
            </Button>
            <Button variant="link" rightIcon={<ArrowRight size={14} />}>
              Text Link
            </Button>
            <Button variant="secondary" size="icon" aria-label="Icon only">
              <Code size={18} />
            </Button>
            <Button variant="primary" disabled>
              Disabled State
            </Button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <Typography.H2>Cards & Surfaces</Typography.H2>
            <Typography.Subtle>Tactile container cards inspired by uiverse.io and mensch.club</Typography.Subtle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card interactive glow>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-muted text-foreground">
                    <Cpu size={20} />
                  </div>
                  <Badge variant="dot" dotColor="green">Active</Badge>
                </div>
                <CardTitle>Autodesk</CardTitle>
                <CardDescription>Sr. Full Stack Engineer (2023 - Present)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography.Body tone="muted" className="text-sm">
                  Optimizing build systems and developer experience for C++ & CI environments in Fusion360.
                </Typography.Body>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="font-mono text-xs text-muted-foreground">Remote (Spain)</span>
                <span className="text-xs font-medium text-foreground">Fusion CI &rarr;</span>
              </CardFooter>
            </Card>

            <Card interactive>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-muted text-foreground">
                    <Cloud size={20} />
                  </div>
                  <Badge variant="outline">2022 - 2023</Badge>
                </div>
                <CardTitle>Typeform</CardTitle>
                <CardDescription>Frontend Engineer (Growth Team)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography.Body tone="muted" className="text-sm">
                  Led A/B experimentation, micro-services simplification, and frontend performance at scale.
                </Typography.Body>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="font-mono text-xs text-muted-foreground">Remote</span>
                <span className="text-xs font-medium text-foreground">Growth &rarr;</span>
              </CardFooter>
            </Card>

            <Card interactive>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-muted text-foreground">
                    <CheckCircle size={20} />
                  </div>
                  <Badge variant="outline">2017 - 2021</Badge>
                </div>
                <CardTitle>Schiphol Airport</CardTitle>
                <CardDescription>Frontend Engineer (4+ years)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography.Body tone="muted" className="text-sm">
                  Monolith to micro-services migration, self-service kiosk apps, and passenger flight systems.
                </Typography.Body>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="font-mono text-xs text-muted-foreground">Amsterdam</span>
                <span className="text-xs font-medium text-foreground">Aviation &rarr;</span>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Footer info */}
        <footer className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div>Task 2 Design System Preview Complete</div>
          <div>Next Step: Task 3 (Layout, Navigation & Footer)</div>
        </footer>
      </Container>
    </main>
  );
}
