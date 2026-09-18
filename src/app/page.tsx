"use client";

import * as React from "react";
import { Container } from "@/shared/components/Container";
import { Typography } from "@/shared/components/Typography";
import { Button } from "@/shared/components/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/shared/components/Card";
import { Hero } from "@/shared/components/Hero";
import { ExperienceTimeline } from "@/shared/components/ExperienceTimeline";
import { PROFILE } from "@/domain/profile";
import {
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

      {/* 2. Interactive Work Experience Timeline ("Wow" Effect) */}
      <ExperienceTimeline />

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
