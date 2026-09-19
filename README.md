# garciagon.com

Personal engineering portfolio and technical ledger of **Javier García González**, Senior Full Stack Engineer.

Live site: [**garciagon.com**](https://garciagon.com)

---

## Overview

This repository houses the source code for [garciagon.com](https://garciagon.com), engineered as a high-performance, minimalist, static-first portfolio. Built with Next.js App Router (Static Site Generation), Tailwind CSS v4, and TypeScript, it reflects a balance between frontend craftsmanship and decoupled architecture.

### Key Highlights

- **Static Site Generation (SSG)**: Pre-rendered static pages with zero runtime server dependency for maximum speed and security.
- **Tailwind CSS v4 & Custom Tokens**: High-contrast, minimal design system with dark/light themes (`next-themes`) and accessible color contrast.
- **Interactive Micro-Interactions**:
  - **Dynamic Cursor Spotlight Cards**: GPU-accelerated mouse-tracking radial border and surface glow inspired by Linear/Vercel interfaces.
  - **Hydration-Safe Scroll Transitions**: Apple/Linear-calibrated bezier transitions (`cubic-bezier(0.16, 1, 0.3, 1)`) triggered post-hydration to guarantee 0 SSR mismatch warnings while respecting `prefers-reduced-motion`.
  - **Engineering Console Switcher**: In-place toggle in the hero section switching between portrait and an interactive `system.config.ts` code view.
- **Domain-Driven Directory Structure**:
  - `src/domain/`: Pure TypeScript data structures, domain models, and timeline definitions (`profile.ts`, `experience.ts`, `skills.ts`, `projects.ts`, `consulting.ts`).
  - `src/shared/`: Reusable, atomic UI components (`Button`, `Card`, `Badge`, `SpotlightCard`, `FadeIn`, `Typography`, `ThemeToggle`).
  - `src/app/`: Next.js App Router static pages, layouts, SEO metadata, and XML sitemaps.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router, Turbopack, SSG `output: 'export'`) |
| **Library** | [React](https://react.dev/) 19 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) 5 (Strict Mode) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & Hardware-Accelerated CSS |
| **Icons** | [@phosphor-icons/react](https://phosphoricons.com/) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |

---

## Architecture & Codebase Structure

```
garciagon.com/
├── public/                  # Static assets (favicons, images, SVG logos, manifest)
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── projects/        # Project deep-dive pages (ramentask, home-lab)
│   │   ├── globals.css      # Design tokens, theme variables & base styles
│   │   ├── layout.tsx       # Root layout, ThemeProvider, fonts & global JSON-LD
│   │   ├── page.tsx         # Portfolio single-page layout with section anchors
│   │   ├── robots.ts        # Dynamic robots.txt generator
│   │   └── sitemap.ts       # Dynamic sitemap.xml generator
│   ├── domain/              # Domain entities & business data
│   │   ├── consulting.ts    # Consulting deliverables & client records
│   │   ├── experience.ts    # Career milestones, impacts & tech stacks
│   │   ├── navigation.ts    # Navigation links & anchor targets
│   │   ├── profile.ts       # Core profile constants & experience calculators
│   │   ├── projects.ts      # Side project specs & repository links
│   │   ├── skills.ts        # Technical arsenal categories & academic credentials
│   │   └── tech-icons.ts    # Tech brand glyph mappings & SVG paths
│   └── shared/              # Reusable UI primitives & layout components
│       └── components/      # Button, Card, Hero, SpotlightCard, FadeIn, Header, Footer...
├── next.config.ts           # Next.js static export configuration
└── tsconfig.json            # Strict TypeScript configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/) or your preferred package manager

### Installation

```bash
git clone https://github.com/javiergarciagonzalez/garciagon.com.git
cd garciagon.com
npm install
```

### Development

Run the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Verification

```bash
# Run ESLint validation
npm run lint

# Compile production static export
npm run build
```

---

## License

Source code is available under the [MIT License](LICENSE).
