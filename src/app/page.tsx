"use client";

import * as React from "react";
import { Container } from "@/shared/components/Container";
import { Typography } from "@/shared/components/Typography";
import { Button } from "@/shared/components/Button";
import { Hero } from "@/shared/components/Hero";
import { ExperienceTimeline } from "@/shared/components/ExperienceTimeline";
import { ConsultingSection } from "@/shared/components/ConsultingSection";
import { SkillsAndEducation } from "@/shared/components/SkillsAndEducation";
import { ProjectsSection } from "@/shared/components/ProjectsSection";
import { CopyEmailButton } from "@/shared/components/CopyEmailButton";
import { PROFILE } from "@/domain/profile";
import {
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

      {/* 3. External Consulting & Technical Advisory (Ingreen Innovación) */}
      <ConsultingSection />

      {/* 4. Skills, Architecture & Education Section */}
      <SkillsAndEducation />

      {/* 4. Side Projects, RamenTask & Engineering Lab */}
      <ProjectsSection />

      {/* 5. Contact Section */}
      <section id="contact" className="scroll-mt-24 border-t border-border/60 pt-16 pb-12">
        <Container size="xl" className="space-y-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <EnvelopeSimple size={18} className="text-muted-foreground" />
              <Typography.Subtle className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
                Direct Communication
              </Typography.Subtle>
            </div>
            <Typography.H2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&rsquo;s Connect
            </Typography.H2>
            <Typography.Body tone="muted" className="text-base sm:text-lg">
              Whether you want to discuss distributed backend architecture, CI/CD build optimization, technical leadership, or high-scale engineering challenges, my inbox is always open.
            </Typography.Body>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <CopyEmailButton variant="primary" size="md" />
            <Button
              variant="outline"
              href={`mailto:${PROFILE.email}`}
              leftIcon={<EnvelopeSimple size={16} />}
            >
              Open in Mail
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
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono ml-auto">
              <MapPin size={14} className="text-foreground" />
              <span>{PROFILE.location} &middot; {PROFILE.workMode}</span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
