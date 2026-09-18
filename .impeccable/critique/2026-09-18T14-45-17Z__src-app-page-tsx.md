---
target: src/app/page.tsx
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-09-18T14-45-17Z
slug: src-app-page-tsx
---
#### Report header provenance
Method: dual-agent (A: 7af8b562-2dfc-4788-8d6c-8d58ad0f3859 · B: deterministic-cli)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|:-----:|-----------|
| 1 | Visibility of System Status | 3 | Real-time status indicators present; tab switches in cards lack subtle feedback and Git commit selection doesn't highlight its linked impact. |
| 2 | Match System / Real World | 4 | Exceptional. Speaks authentic engineering language (`git log --graph`, `role.config.json`, C++ CI, ZFS). |
| 3 | User Control and Freedom | 3 | Smooth view toggles (Story vs. Git Graph); Category filter in Experience omits "Early Career" roles from filter pills. |
| 4 | Consistency and Standards | 3 | Unified font pairings; gradient laser beam and glowing ambient wash violate `DESIGN.md` rules; "With over 13+ Years Exp of..." copy glitch in Hero. |
| 5 | Error Prevention | 3 | Safe external links; raw `mailto:` buttons trigger unwanted desktop mail clients without a copy fallback. |
| 6 | Recognition Rather Than Recall | 3 | Clear section headers; hiding core tech stacks behind tab 2 ("Stack & Infra") requires manual clicks to evaluate technical fit. |
| 7 | Flexibility and Efficiency | n/a | Informational portfolio/persuade surface with no expert transactional workflows. |
| 8 | Aesthetic and Minimalist Design | 2 | 5 simultaneous control planes in Experience (View Switcher, Categories, Era Bar, Laser, 3 Card Tabs) create visual noise and high cognitive load. |
| 9 | Error Recovery | 3 | Static architecture with clean anchor navigation; no trapping forms. |
| 10 | Help and Documentation | n/a | Self-explanatory personal portfolio landing page. |
| **Total** | | **21/32** | **Acceptable (65.6%)** *(Renormalized to 8 applicable heuristics)* |

#### Design Specificity Verdict

**LLM assessment**: Strong domain authenticity in engineering telemetry (Git Graph DAG, `role.config.json`, 40+ Ansible roles, WASM Hexagonal Architecture) is diluted by standard developer portfolio tropes. The hero layout (7/5 split, grayscale photo, pill badges, 4-card 01-04 grid) is category-interchangeable with hundreds of portfolios. Crucially, the multi-color gradient laser beam (`from-emerald-500 via-sky-500 to-indigo-500`) and 120px blur glow in `ExperienceTimeline.tsx` violate `DESIGN.md`'s core mandate: *"The Architect's Ledger... intentionally rejects decorative noise, neon gradients"* and the *"Rarity of Green Rule"*.

**Deterministic scan**: Automated scan identified 1 advisory finding on `src/app/page.tsx` (`text-[11px]` outside documented `DESIGN.md` typography ramp). Component scan across `src/shared/components/` revealed 15 occurrences of arbitrary `text-[10px]` and `text-[11px]` micro-typography classes bypassing the design system type scale.

**Visual overlays**: Browser visualization is unavailable as no browser automation tool is exposed in this CLI environment. Fallback: CLI deterministic findings and code AST inspection utilized.

#### Overall Impression
The portfolio possesses exceptional underlying substance—verifiable C++ CI experience at Autodesk, deep distributed systems competence, and real self-hosted infrastructure. However, the presentation currently vacillates between an understated architectural ledger and a trendy UI-kit showcase. Eliminating control clutter, removing neon gradients, and surfacing tech stacks immediately will elevate it to the Staff/Principal tier.

#### What's Working
1. **The Git Graph View (`viewMode === "git"`)**: A standout differentiator for a Senior Systems Engineer, rendering career history as a true `git log --graph` commit DAG tree.
2. **Substantive Project Selection**: Highlighting production WASM tooling (RamenTask) alongside bare-metal Ansible IaC (Home Lab) proves both frontend architectural discipline and low-level systems competence.
3. **Typographic Rhythm**: Geist Sans and Geist Mono provide an authoritative editorial voice when respected.

#### Priority Issues
- **[P1] Inaccessible Git Graph Commits & Missing Tab ARIA Semantics**
  - **Why it matters**: Commit rows in `ExperienceTimeline.tsx` are unsemantic `<div onClick=...>` elements without `role="button"`, `tabIndex`, or keyboard event handlers. Screen readers cannot interpret card inspector tabs.
  - **Fix**: Refactor to semantic `<button type="button">`, add `role="tablist"`/`role="tab"`, `aria-selected`, and `focus-visible:ring-2`.
  - **Suggested command**: `/impeccable harden`

- **[P1] Core Technology Stacks Hidden Behind Secondary Card Tabs**
  - **Why it matters**: Recruiters and engineering leaders scan portfolios in under 30 seconds. Forcing tab clicks on 6 separate cards to verify tech competencies (Kubernetes, TypeScript, Docker) causes severe drop-off.
  - **Fix**: Elevate primary tech badges directly to each card's header or footer for immediate glanceability.
  - **Suggested command**: `/impeccable layout`

- **[P2] Control Plane Overload in Work Experience Section**
  - **Why it matters**: 5 competing control paradigms (View Switcher, Category Filters, Sticky Era Bar, Laser Beam, 3-Tab Inspector) overwhelm the user's working memory.
  - **Fix**: Remove the redundant sticky Era bar; consolidate Category filters next to the View Switcher and include "Early Career".
  - **Suggested command**: `/impeccable distill`

- **[P2] Visual Identity Drift: Fluorescent Gradient Laser & Blur Glows**
  - **Why it matters**: The multi-color gradient and 120px blur wash violate `DESIGN.md`'s strict *"Rarity of Green Rule"* and editorial minimalism.
  - **Fix**: Replace the gradient beam with a crisp, restrained hairline rule and a subtle monochromatic or solid emerald node. Remove background blur washes.
  - **Suggested command**: `/impeccable quieter`

- **[P3] Lack of "Copy Email" Affordance on Direct Contact Actions**
  - **Why it matters**: Direct `mailto:` links irritate desktop users who use webmail rather than native mail clients.
  - **Fix**: Provide a dual-action or interactive copy button with "Copied to clipboard!" feedback.
  - **Suggested command**: `/impeccable polish`

#### Persona Red Flags
- **Elena (Staff Technical Recruiter — 15-Second Scan)**: Core tech stacks are hidden behind tabs in experience cards, forcing repetitive clicks. The hero copy contains an awkward phrasing: *"With over 13+ Years Exp of..."*.
- **Marcus (VP of Engineering / Hiring Director — Evaluating Rigor)**: Impact bullets lack quantifiable performance metrics (e.g. build time reduction percentages, latency drops). Fluorescent gradients reduce perceived executive gravitas.
- **Sam (Keyboard & Screen Reader User)**: Git Graph commit items cannot be focused or activated via keyboard (`Tab`/`Enter`), blocking inspection of career milestones.

#### Minor Observations
1. Heading capitalization inconsistency: `"Side projects"` vs. Title Case in all other sections.
2. Category filter in `ExperienceTimeline.tsx` omits "Early Career" from filter pills, leaving 3 roles unreachable after filtering without resetting to "All".
3. Off-ramp font sizes (`text-[10px]`, `text-[11px]`) in badges and labels should be normalized to `text-xs` (12px) with `font-mono`.

#### Questions to Consider
- What if the Git Graph was not a secondary toggle, but the unified, authoritative visual spine of the entire career narrative?
- What if each experience card displayed an immediate 3-column ledger summary (Architecture, Core Stack, Quantified Metric) without requiring any tab clicks?
- Does a 6-item career history need a category filter, or is a pure chronological narrative stronger?
