# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Engineering Directors, VPs of Engineering, and Principal/Staff Hiring Managers**: Evaluating Javier for high-impact senior engineering and technical leadership roles (Staff/Principal/Lead Engineer) in distributed systems, backend, and build infrastructure.
- **Senior Technical Peers and Collaborators**: Inspecting architecture, verifiable engineering rigor, and real-world system implementations.
- **Specialized Technical Recruiters**: Looking for proven 10+ year track records in TypeScript, Node.js, C++ CI environments, and cloud architecture.

## Product Purpose

Serve as the authoritative personal engineering portfolio and technical identity for Javier García González (`garciagon.com`). The site exists to communicate 13+ years of battle-tested engineering maturity, deep full-stack and systems competence, and high architectural standards. Success means a visitor immediately grasps Javier's technical depth and leadership capability within 30 seconds, distinguishing him completely from superficial or trendy "vibe coders".

## Positioning

A Senior Full Stack & Distributed Systems Engineer who bridges high-scale backend engineering (Node.js, TypeScript, cloud infrastructure) with low-level build system optimization (C++ CI environments at Autodesk) and frontend craftsmanship. Unlike generic full-stack portfolios, this site proves hands-on mastery through verifiable enterprise milestones (Autodesk Fusion CI, Typeform Growth, Schiphol Airport microservices/kiosks), production solo software (RamenTask with in-browser WASM and Hexagonal Architecture), and bare-metal Infrastructure as Code (24/7 NAS managed via 40+ Ansible roles).

## Operating Context

- **Evaluation Workflow**: Visitors typically arrive from LinkedIn, direct resumes/CVs, GitHub, or direct recommendations. They scan quickly on desktop and mobile, looking for concrete evidence of scale, technical leadership, clean code, and architectural decisions.
- **Sharing Context**: URLs are shared across internal engineering review channels, Slack, and recruitment notes via specific section anchors (`/#experience`, `/#projects`, `/#skills`) or dedicated deep-dive showcases (`/projects/ramentask`, `/projects/home-lab`).

## Capabilities and Constraints

- **Single-Page Anchoring with Deep Dives**: Smooth hash navigation (`/#about`, `/#experience`, `/#skills`, `/#projects`, `/#contact`) paired with dedicated static showcase routes (`/projects/ramentask`, `/projects/home-lab`).
- **Static Site Generation (SSG)**: 100% pre-rendered with Next.js `output: 'export'`; sub-second load time, zero runtime server overhead.
- **Interactive Technical Inspector**: Dual-view career experience (Interactive Timeline with laser scroll beam + authentic Git Graph `git log --graph` commit tree).
- **Theming**: High-contrast Dark theme by default with seamless Light | Dark | System toggle.
- **Dynamic Experience Calculation**: Career years dynamically computed from 2013 (`currentYear - 2013`).

## Brand Commitments

- **Tone & Voice**: Strictly technical, understated, polite, direct, and pragmatic. Zero marketing buzzwords, zero artificial titles ("architect/administrator" omitted for solo projects), and zero visual clutter.
- **Visual Identity**: Inspired by minimalist, typography-driven platforms like `mensch.club`, tactile interactive cards (`uiverse.io`), and terminal ergonomics.
- **Color Language**: Deep zinc and obsidian surfaces, crisp monochromatic typography, fine borders, and deliberate emerald status pulses.

## Evidence on Hand

- **Curriculum Vitae (2023)**: `/Users/gon/Nextcloud/GonData/Work/CV/2023/CV-JavierGarciaGonzalez-compressed_compressed.pdf`
- **LinkedIn Profile Record**: `/Users/gon/Downloads/Profile.pdf`
- **RamenTask Codebase & Architecture**: `/Users/gon/DEV/ramentask` (WASM engines, Hexagonal Architecture, pSEO, 8 locales).
- **NAS Services Codebase & Ansible IaC**: `/Users/gon/DEV/nas-services` (40+ Ansible roles, ZFS storage, Tailscale mesh VPN, Authelia MFA, Ollama local AI).
- **Portrait Asset**: Restored from git history to `public/images/profile.webp`.

## Product Principles

1. **Substance Over Hype**: Every claim must be backed by verifiable architectural details, real repositories, or quantifiable system impact.
2. **Respect the Visitor's Time**: Information must be scanable at high velocity, yet reward deep technical inspection with tabbed consoles and architecture breakdowns.
3. **Purity of Craft**: The portfolio itself must embody the engineering standards it advocates: Clean Architecture, strict TypeScript, responsive atomization, and zero lint/build errors.
4. **Understated Confidence**: Let the 13-year trajectory, enterprise scale, and self-hosted infrastructure speak with quiet authority.

## Accessibility & Inclusion

- Semantic HTML5 structure with ARIA landmarks.
- Keyboard-navigable with an accessible "Skip to main content" link.
- High-contrast text compliance across both Dark and Light modes.
- `prefers-reduced-motion` compliance on scroll and beam animations.
