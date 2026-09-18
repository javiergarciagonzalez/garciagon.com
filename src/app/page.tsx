"use client";

import * as React from "react";
import { Container } from "@/shared/components/Container";
import { Typography } from "@/shared/components/Typography";
import { Button } from "@/shared/components/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/Card";
import { Badge } from "@/shared/components/Badge";
import { Hero } from "@/shared/components/Hero";
import { PROFILE } from "@/domain/profile";
import {
  Briefcase,
  Wrench,
  FolderSimple,
  EnvelopeSimple,
  ArrowSquareOut,
  MapPin,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="space-y-16 sm:space-y-24">
      {/* 1. Hero & Professional Intro Section */}
      <Hero />

      {/* 2. Work Experience Section Placeholder */}
      <section id="experience" className="scroll-mt-24 border-t border-border/60 pt-16">
        <Container size="xl" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={18} className="text-muted-foreground" />
                <Typography.Subtle className="font-mono uppercase tracking-widest">Career History</Typography.Subtle>
              </div>
              <Typography.H2>Work Experience</Typography.H2>
            </div>
            <Typography.Subtle className="font-mono">Task 5 Target</Typography.Subtle>
          </div>

          <Card interactive glow className="border-dashed border-border/80 bg-surface/40">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Interactive Experience Timeline</CardTitle>
                <Badge variant="outline">Coming in Task 5</Badge>
              </div>
              <CardDescription>
                A visually striking, navigable timeline highlighting Autodesk, Typeform, Schiphol Airport, and earlier career milestones with a &ldquo;wow effect&rdquo;.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-surface border border-border">
                  <span className="font-semibold text-foreground text-sm block">Autodesk</span>
                  <span className="text-xs text-muted-foreground font-mono">2023 &ndash; Present</span>
                </div>
                <div className="p-4 rounded-lg bg-surface border border-border">
                  <span className="font-semibold text-foreground text-sm block">Typeform</span>
                  <span className="text-xs text-muted-foreground font-mono">2022 &ndash; 2023</span>
                </div>
                <div className="p-4 rounded-lg bg-surface border border-border">
                  <span className="font-semibold text-foreground text-sm block">Schiphol Airport</span>
                  <span className="text-xs text-muted-foreground font-mono">2017 &ndash; 2021</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* 3. Skills & Competencies Section Placeholder */}
      <section id="skills" className="scroll-mt-24 border-t border-border/60 pt-16">
        <Container size="xl" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wrench size={18} className="text-muted-foreground" />
                <Typography.Subtle className="font-mono uppercase tracking-widest">Technical Arsenal</Typography.Subtle>
              </div>
              <Typography.H2>Skills &amp; Architecture</Typography.H2>
            </div>
            <Typography.Subtle className="font-mono">Task 6 Target</Typography.Subtle>
          </div>

          <Card className="border-dashed border-border/80 bg-surface/40">
            <CardHeader>
              <CardTitle className="text-lg">Core Competencies &amp; Education</CardTitle>
              <CardDescription>
                Distributed Systems, TypeScript &amp; Node.js, Cloud Architecture (MSc Cloud Apps), CI/CD Ergonomics, and Frontend Performance.
              </CardDescription>
            </CardHeader>
          </Card>
        </Container>
      </section>

      {/* 4. Projects Section Placeholder */}
      <section id="projects" className="scroll-mt-24 border-t border-border/60 pt-16">
        <Container size="xl" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FolderSimple size={18} className="text-muted-foreground" />
                <Typography.Subtle className="font-mono uppercase tracking-widest">Engineering Work</Typography.Subtle>
              </div>
              <Typography.H2>Side Projects &amp; Highlights</Typography.H2>
            </div>
            <Typography.Subtle className="font-mono">Task 7 Target</Typography.Subtle>
          </div>

          <Card className="border-dashed border-border/80 bg-surface/40">
            <CardHeader>
              <CardTitle className="text-lg">Featured Projects Grid</CardTitle>
              <CardDescription>
                Detailed showcase space including RamenTask, open source work, and system architecture artifacts.
              </CardDescription>
            </CardHeader>
          </Card>
        </Container>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="scroll-mt-24 border-t border-border/60 pt-16 pb-12">
        <Container size="xl" className="space-y-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <EnvelopeSimple size={18} className="text-muted-foreground" />
              <Typography.Subtle className="font-mono uppercase tracking-widest">Direct Communication</Typography.Subtle>
            </div>
            <Typography.H2>Let&rsquo;s Connect</Typography.H2>
            <Typography.Body tone="muted">
              Whether you want to discuss distributed backend architecture, CI/CD optimization, technical leadership, or high-scale engineering challenges, my inbox is always open.
            </Typography.Body>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              href={`mailto:${PROFILE.email}`}
              leftIcon={<EnvelopeSimple size={18} />}
            >
              {PROFILE.email}
            </Button>
            <Button
              variant="secondary"
              href={PROFILE.socials.linkedin}
              external
              rightIcon={<ArrowSquareOut size={16} />}
            >
              LinkedIn Profile
            </Button>
            <Button
              variant="secondary"
              href={PROFILE.socials.github}
              external
              rightIcon={<ArrowSquareOut size={16} />}
            >
              GitHub Profile
            </Button>
            <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono ml-auto">
              <MapPin size={14} />
              <span>{PROFILE.location} &middot; {PROFILE.workMode}</span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
