---
name: "Javier García González Portfolio"
description: "The Architect's Ledger: Understated editorial minimalism, balanced margins, and razor-sharp type hierarchy."
colors:
  primary: "#09090b"
  primary-foreground: "#f4f4f5"
  surface: "#121215"
  surface-hover: "#18181b"
  neutral-bg: "#09090b"
  neutral-fg: "#f4f4f5"
  muted: "#18181b"
  muted-foreground: "#a1a1aa"
  border: "rgba(255, 255, 255, 0.08)"
  border-highlight: "rgba(255, 255, 255, 0.16)"
  accent-emerald: "#10b981"
  accent-sky: "#0284c7"
typography:
  display:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary-foreground}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  card-base:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "24px"
  badge-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
---

# Design System: Javier García González Portfolio

## Overview

**Creative North Star: "The Architect's Ledger"**

"The Architect's Ledger" embodies understated editorial minimalism, spatial balance, and razor-sharp typographic discipline. Conceived for a Senior Full Stack & Distributed Systems Engineer with over 13 years of experience, this system intentionally rejects decorative noise, neon gradients, and superficial visual gimmicks. It treats the browser viewport as an authoritative ledger: clean obsidian and deep zinc planes, hairline borders, and calm, deliberate margins that let engineering accomplishments command focus.

The visual language draws inspiration from platforms like `mensch.club` and terminal ergonomics. The interface does not clamor for attention; it establishes quiet competence through structural clarity, generous breathing room, and precise micro-interactions.

**Key Characteristics:**
- Deep monochromatic contrast (obsidian `#09090b` and zinc `#121215`) with high legibility.
- Typographic hierarchy powered by Geist Sans tracking tight and Geist Mono for code telemetry.
- Razor-sharp 1px borders (`rgba(255,255,255,0.08)`) establishing depth without heavy drop shadows.
- Deliberate emerald pulses (`#10b981`) reserved exclusively for live operational statuses and system telemetry.

## Colors

The palette is monochromatic and high-contrast, designed to make technical copy and architectural diagrams immediately legible.

### Primary
- **Obsidian Dark** (#09090b): The default deep background canvas across all surfaces.
- **Pure Zinc Light** (#fafafa): Inverted background canvas in light mode; crisp foreground in dark mode.

### Neutral
- **Deep Surface Zinc** (#121215): Container cards, navigation docks, and inspection panels.
- **Surface Hover Zinc** (#18181b): Interactive state shift on cards and list items.
- **Muted Steel** (#a1a1aa): Secondary prose, technical descriptions, and metadata.
- **Hairline Border** (rgba(255, 255, 255, 0.08)): 1px crisp structural boundary between surfaces.
- **Border Highlight** (rgba(255, 255, 255, 0.16)): Subtle active and hover boundary enhancement.

### Accents (Telemetry & State)
- **Operational Emerald** (#10b981): Strictly reserved for live statuses (e.g., "Active Role @ Autodesk", "Live Production", terminal prompt indicators).
- **Cloud Sky** (#0284c7): Secondary telemetry tag for infrastructure and networking badges.

### Named Rules
**The Rarity of Green Rule.** Emerald (#10b981) is never used as a decorative brand wash. It is an operational status indicator meaning *online*, *healthy*, or *current*. Its rarity is what gives it authority.

## Typography

**Display Font:** Geist Sans (with -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto fallback)  
**Body Font:** Geist Sans  
**Label / Mono Font:** Geist Mono  

**Character:** Technical, neutral, and razor-sharp. Geist Sans provides geometric balance with tight letter-spacing for headlines, while Geist Mono brings tabular clarity to career periods, tech tags, and terminal specs.

### Hierarchy
- **Display** (Bold 700, clamp(2.5rem, 6vw, 3.75rem), line-height 1.1, letter-spacing -0.025em): Used for the Hero name and primary section introductions.
- **Headline** (SemiBold 600, clamp(1.75rem, 4vw, 2.25rem), line-height 1.2, letter-spacing -0.02em): Section titles (`Work Experience`, `Side projects`, `Technical Arsenal`).
- **Title** (SemiBold 600, 1.25rem, line-height 1.4, letter-spacing -0.01em): Company names, project titles, and card headers.
- **Body** (Regular 400, 0.9375rem / 15px, line-height 1.6, max line-length 65-75ch): Narrative prose, career impact descriptions, and architecture explanations.
- **Label / Code** (Medium 500, 0.75rem / 12px, font-mono, letter-spacing 0.05em): Technology tags, tenure dates, status badges, and terminal snippets.

### Named Rules
**The Line Length Constraint Rule.** Body copy must never stretch across the full width of an ultra-wide container. Main prose blocks are strictly capped at `max-w-3xl` or `max-w-2xl` (~65-75 characters per line) to maintain comfortable scanning ergonomics.

## Layout

The layout uses a centered, max-width spatial container model with responsive gutters:
- **Container Scales**: `sm` (max-w-3xl / 768px), `md` (max-w-4xl / 896px), `lg` (max-w-5xl / 1024px), `xl` (max-w-6xl / 1152px).
- **Gutters**: Fluid horizontal padding `px-4 sm:px-6 lg:px-8`.
- **Vertical Rhythm**: Major sections are spaced by `space-y-16 sm:space-y-24` (64px to 96px) with hairline divider lines (`border-t border-border/60`) and `scroll-mt-24` clearance for the sticky header.

## Elevation & Depth

This system avoids heavy, blurred drop shadows. Depth is communicated through **tonal layering and border contrast** ("Refined and Restrained").

- **Base canvas**: Level 0 (#09090b).
- **Surface containers**: Level 1 (#121215 with 1px border `rgba(255,255,255,0.08)` and subtle backdrop blur `backdrop-blur-md`).
- **Hover / Active elevation**: Subtle `-translate-y-0.5` lift, accompanied by border brightening to `rgba(255,255,255,0.16)` and a very subtle ambient glow.

### Named Rules
**The Flat-By-Default Rule.** Surfaces rest entirely flat. Shadows appear only as subtle state responses (hover lift, active scale, or focused modal drawers).

## Shapes

- **Corners**: Consistent hierarchy:
  - **Cards & Containers**: `rounded-2xl` (16px) or `rounded-xl` (12px).
  - **Buttons & Inputs**: `rounded-lg` (8px).
  - **Badges & Chips**: `rounded-full` (9999px pill).
- **Borders**: Uniform 1px solid hairline (`border border-border`). Never 2px or heavy outlines except for keyboard focus rings (`focus-visible:ring-2`).

## Components

### Buttons
- **Shape:** Rounded-lg (8px radius).
- **Primary:** High-contrast solid white background with black text (`bg-foreground text-background`), subtle hover opacity reduction (`hover:opacity-90`), active scale (`active:scale-[0.98]`).
- **Secondary:** Surface background (#121215) with 1px hairline border and white text.
- **Ghost:** Transparent background, muted text transitioning to bright white on hover.

### Badges & Status Chips
- **Shape:** Full pill radius (9999px).
- **Style:** Monospace 11px font (`font-mono`), subtle surface background, 1px border.
- **Status Dot Variant:** Houses an animated pinging radial dot (e.g. green for "Sr. Full Stack Engineer @ Autodesk" or "Live").

### Cards & Panels
- **Shape:** `rounded-xl` (12px) to `rounded-2xl` (16px).
- **Background:** `bg-surface/70` (#121215 at 70% opacity) with `backdrop-blur-md`.
- **Interactive State:** Border color transition to `rgba(255,255,255,0.16)` and slight upward translation.

### Interactive Timeline & Git Graph
- **Signature Component:** The dual-view career timeline.
- **Timeline View:** Continuous vertical rail with a scroll-linked laser progress beam (`framer-motion`), luminous node pulses, and a 3-tab card inspector (Architecture, Stack, Console Spec).
- **Git Graph View:** Monospace terminal view rendering career history as a `git log --graph` commit DAG tree.

## Do's and Don'ts

### Do:
- **Do** maintain strict separation between domain logic and presentation components (Hexagonal Architecture).
- **Do** compute years of experience dynamically (`new Date().getFullYear() - 2013`) instead of hardcoding numbers.
- **Do** keep copy direct, polite, precise, and humble; let the scale of past projects speak for itself.
- **Do** test all screens in both Dark and Light modes to guarantee contrast ratios pass WCAG AA.
- **Do** ensure all interactive components provide keyboard accessibility and visible focus rings.

### Don't:
- **Don't** add generic stock photos or placeholder illustrations. Use real technical assets or structured code blocks.
- **Don't** invent artificial executive roles ("Lead Architect", "Systems Administrator") for solo side projects.
- **Don't** use neon gradients, floating blobs, or gratuitous parallax that distracts from reading.
- **Don't** violate the single-responsibility principle by coupling external libraries into domain models.
- **Don't** use arbitrary Tailwind utility values when standard design tokens exist.
