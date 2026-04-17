# 🗺️ Lakambini Events — Implementation Plan

> **Source:** `specs.md` · **Design System:** Emerald Editorial (Dark Mode)
> **Role:** @Product_Manager → @Frontend_Engineer
> **Architecture Reference:** `.agent/architecture.md`
> **Generated:** 2026-04-18
> **Pages:** Home · Services · About · Portfolio (4 core pages)

---

## Phase 0: Foundation & Design System Setup

> Goal: Establish the Emerald Editorial token infrastructure as the single source of truth.

### Task 0.1 — Configure Global Fonts
- **File:** `app/layout.tsx`
- Import Google Fonts: `Noto Serif` (400, 500, 600, 700, 800 + italic 400, 700) + `Manrope` (200, 300, 400, 500, 600) via `next/font/google`.
- Set CSS variables: `--font-headline: 'Noto Serif'` and `--font-body: 'Manrope'`.
- Set `<body>` default to `--font-body` with `--on-surface` (#D2E7DD) text on `--surface` (#051710) background.

### Task 0.2 — Build Design Token System
- **File:** `styles/globals.css`
- Define **all** Emerald Editorial CSS custom properties from `specs.md` §2 under `:root`.
- There is no light mode. The entire site is dark-mode-first using the Emerald Editorial palette.
- Implement the full MD3 typography scale from `specs.md` §3.2 as utility classes.
- Define the optimized spacing scale from `specs.md` §4.1.
- Add ambient shadow, ghost border, glassmorphism, gold-gradient, gold-gradient-text, hero-gradient, and marble-texture utility classes from `specs.md` §5.

### Task 0.3 — Configure Tailwind Theme Extensions
- **File:** `tailwind.config.js` (or `tailwind.config.ts`)
- Extend theme `colors` — map **only** Emerald Editorial tokens:
  ```
  primary: '#E9C255'
  primary-container: '#BF9B31'
  on-primary: '#3D2E00'
  secondary: '#A9CFBA'
  secondary-container: '#2B4E3E'
  on-secondary: '#133728'
  tertiary: '#C6C6C7'
  tertiary-container: '#9E9F9F'
  surface: '#051710'
  surface-bright: '#2B3D36'
  surface-dim: '#051710'
  surface-container-lowest: '#02110B'
  surface-container-low: '#0D1F18'
  surface-container: '#11231C'
  surface-container-high: '#1C2E27'
  surface-container-highest: '#273831'
  surface-variant: '#273831'
  on-surface: '#D2E7DD'
  on-surface-variant: '#D0C5B0'
  outline: '#99907D'
  outline-variant: '#4D4636'
  error: '#FFB4AB'
  primary-fixed: '#FFDF90'
  primary-fixed-dim: '#E9C255'
  on-primary-fixed: '#241A00'
  on-primary-fixed-variant: '#584400'
  on-primary-container: '#453400'
  on-secondary-container: '#98BEA9'
  on-background: '#D2E7DD'
  background: '#051710'
  surface-tint: '#E9C255'
  inverse-surface: '#D2E7DD'
  inverse-on-surface: '#22342D'
  inverse-primary: '#755B00'
  ```
- Extend `fontFamily`:
  ```
  headline: ['Noto Serif', 'serif']
  body: ['Manrope', 'sans-serif']
  label: ['Manrope', 'sans-serif']
  ```
- Extend `spacing` with optimized scale (see `specs.md` §4.1).
- Set default `borderRadius` to `0px` globally. Add `full: '9999px'` for pill buttons.

---

## Phase 1: Layout Shell & Dynamic Navbar

> Goal: Build the persistent layout components that wrap every page. The dynamic scroll-aware Navbar is the flagship component of this phase.

### Task 1.1 — Build Dynamic Navbar ⭐ PRIORITY
- **File:** `components/layout/Navbar.tsx`
- **This is the most critical interactive component.** See `specs.md` §11 for the full animation specification.

**Resting State (scrollY === 0):**
- `position: fixed`, `top: 0`, `width: 100%`.
- Background: `transparent` (no glass, no blur).
- Border radius: `0px`.
- Padding: `px-12 py-6`.
- The **"Inquire" CTA button is HIDDEN** (`opacity: 0`, `scale(0.9)`, `pointer-events: none`).

**Floating State (scrollY > ~50px):**
- `position: fixed`, `top: 0.75rem`.
- Background: `rgba(17, 35, 28, 0.60)` (frosted glass).
- `backdrop-filter: blur(20px)`.
- Border radius: `9999px` (pill-shape).
- Width narrows with horizontal margin (`max-w-screen-2xl mx-auto` inset from edges).
- Padding compresses: `px-8 py-3`.
- `box-shadow: 0 20px 50px rgba(4, 21, 15, 0.4)`.
- **The "Inquire" CTA button SLIDES/FADES INTO VIEW** (`opacity: 0→1`, `translateX: 20px→0`, 400ms ease-out with 100ms delay).

**Implementation approach:**
- Use a `useEffect` hook with a `scroll` event listener (debounced) or an `IntersectionObserver` on a sentinel `<div>` placed 50px below the top.
- Toggle a state variable `isScrolled` that controls CSS class application.
- All visual changes are CSS transition-driven (no JS animation).

**Menu items:** Home · Services · About · Portfolio
**Typography:** Noto Serif, tracking-tight, text-lg.
**Active state:** Gold text `text-primary` + 2px bottom border `border-primary-container`.
**Logo:** Left-aligned, `font-headline text-3xl font-bold tracking-tighter text-primary uppercase`.
**Mobile:** Hamburger icon → slide-in overlay panel with `--surface-container` (#11231C) background.

### Task 1.2 — Build Footer
- **File:** `components/layout/Footer.tsx`
- **Background:** `--surface-container-lowest` (#02110B).
- **Layout:** 3-column grid (`grid-cols-1 md:grid-cols-3 gap-16`).
- **Column 1:** Brand wordmark `LAKAMBINI` + tagline (`body-sm` font-light text-primary/60).
- **Column 2:** Two sub-columns — "Agency" links (Home, Services, About, Portfolio) + "Legal" links (Privacy, Terms, Press, Contact). Headers in `label-sm` ALL-CAPS gold.
- **Column 3:** Newsletter signup (bottom-border-only email input with gold focus), social icons.
- **Bottom bar:** Copyright + legal, `text-[10px]` uppercase tracking-widest, separated by a `border-t border-outline-variant/10`.
- **Copy tone:** "Full-service event production. Creative. Technical. Reliable." — no pretentious language.

### Task 1.3 — Build Page Wrapper
- **File:** `components/layout/PageWrapper.tsx`
- Consistent max-width `1440px` with horizontal padding `spacing-12` (3rem).
- Scroll-to-top on route change.
- Wraps children with section-reveal Intersection Observer animation.

---

## Phase 2: Shared UI Components

> Goal: Build atomic components per `specs.md` §6.

### Task 2.1 — Button Component
- **File:** `components/ui/Button.tsx`
- **Variants:**
  - `primary` — Gold gradient (`#E9C255` → `#BF9B31` at 135°), `--on-primary` text, `rounded-full`, hover scale 1.05 + ambient shadow.
  - `secondary` — Transparent bg, ghost border (`--outline-variant` @ 20–30%), `--color-primary` text, `rounded-full`, hover fill `--surface-container-high`.
  - `tertiary` — No bg, `--on-surface` text, 1px gold underline, hover underline expands from center.
- **Props:** `variant`, `size`, `href?`, `children`.

### Task 2.2 — SectionHeading Component
- **File:** `components/ui/SectionHeading.tsx`
- **Props:** `overline` (label-sm ALL-CAPS, `--on-surface-variant` or `--color-primary`), `title` (headline-lg, `--on-surface`), `description?` (body-lg).
- Support asymmetric offset via optional `offsetRight` prop.

### Task 2.3 — Card Component
- **File:** `components/ui/Card.tsx`
- **Background:** `--surface-container-high` (#1C2E27).
- **Border:** NONE.
- **Corner radius:** `0px` (architectural sharp).
- **Inner padding:** `spacing-8` (2rem) to `spacing-12` (3rem).
- **Image:** gradient overlay + hover `scale(1.05–1.10)` with `700ms ease-out`.
- **No dividers** inside card content — use spacing gaps.

### Task 2.4 — ServiceChip Component
- **File:** `components/ui/ServiceChip.tsx`
- Pill tag: `px-4 py-1 border border-outline-variant/20 rounded-full text-xs font-label text-primary/80`.
- Props: `label`.

### Task 2.5 — Input Field Component
- **File:** `components/ui/InputField.tsx`
- Single bottom border: `--outline-variant` @ 40% opacity.
- **Focus:** Border transitions to `--color-primary` (#E9C255), subtle gold glow.
- **Label:** `label-sm` ALL-CAPS Manrope above input with `spacing-2` gap.
- **Background:** Transparent (inherits surface).

### Task 2.6 — FilterChip Component
- **File:** `components/ui/FilterChip.tsx`
- **Unselected:** `border-transparent text-on-surface-variant`, hover → `text-primary`.
- **Selected:** `border border-outline-variant/40 text-primary bg-surface-container-low rounded-full`.
- Props: `label`, `isActive`, `onClick`.

---

## Phase 3: Section Components

> Goal: Build all page sections. Home page sections first — reuse across other pages.

### Task 3.1 — Hero Banner Section (Home)
- **File:** `components/sections/Hero.tsx`
- Full-viewport height on `--surface` with `hero-gradient` radial glow + `marble-texture` overlay.
- **Layout:** 12-col grid — text 7 cols, floating images 5 cols (desktop).
- **Content:**
  - `label-sm` overline pill: "BEYOND LOGISTICS. BEYOND EXPECTATIONS." → Updated: "FULL-SERVICE EVENT PRODUCTION"
  - `display-lg` Noto Serif extrabold headline: "We turn bold ideas into *exceptional* event experiences."
  - `body-lg` subline: "Full-service event production. From planning and execution to custom technology — one team, one standard."
  - Dual CTAs: Primary "Book a Discovery Call" + Secondary "Explore Our Services".
- **Images:** Two floating images with rotation (`rotate-3`, `-rotate-6`) that flatten on hover (700ms ease-out). `rounded-xl` override, ambient shadow.

### Task 3.2 — Trust Signal Bar
- **File:** `components/sections/TrustBar.tsx`
- **Background:** `--surface-container-lowest` (#02110B).
- **Copy:** "Trusted by leading brands nationwide." (replaces pretentious phrasing).
- Client logos: `opacity-40 grayscale brightness-150`, placeholder text logos for now.

### Task 3.3 — Problem / Solution Section (Home)
- **File:** `components/sections/ProblemSolution.tsx`
- Two-column layout on `--surface`.
- **Left:** `headline-lg` editorial headline: "Managing a dozen separate providers is a logistical burden. *We simplify it.*" Gold accent on problem phrase.
- **Right:** Two feature cards on `surface-container-low` with `border-l-4 border-primary` accent, material icon, `title-lg` title, `body-md` description.
- Rewritten copy — no "masterpiece", "sovereign", "synergy" language.

### Task 3.4 — Services Grid Section (Home)
- **File:** `components/sections/ServicesGrid.tsx`
- **Background:** `--surface-container-lowest` (#02110B).
- **Heading:** `headline-lg` "An end-to-end offering for events that deliver."
- Bento grid: 3-column (1 wide + 1 square on first row).
- Each card: atmospheric image (`opacity-40–50`, hover `scale(1.10)` 700ms), gradient overlay from bottom, `title-lg` + `body-sm` description.

### Task 3.5 — Technology Highlight Section (Home)
- **File:** `components/sections/TechHighlight.tsx`
- Two-column split panel on `surface-container-high`, `rounded-xl`.
- **Left:** Text content — "The future of events is hybrid. We build the *digital infrastructure.*"
- **Right:** Full-bleed image with `primary/10 mix-blend-overlay`.
- Feature list with `primary/10` rounded icon circles + `title-md` + `body-md`.

### Task 3.6 — CTA Banner Section (Reusable)
- **File:** `components/sections/CTABanner.tsx`
- **Props:** `headline`, `subtitle`, `ctaLabel`, `ctaHref`.
- Centered layout, `headline-lg` copy, gold gradient CTA.
- Reusable across all pages.
- Default copy: "Ready to start your next project?" / "Start Your Project"

### Task 3.7 — Page Hero (Reusable)
- **File:** `components/sections/PageHero.tsx`
- **Props:** `overline`, `title`, `subtitle`, `children?` (for custom right-column content like images).
- `display-lg` title, `body-lg` subtitle.
- Supports 12-col editorial grid layout when combined with image.

---

## Phase 4: Page-Specific Sections

> Goal: Build sections unique to About, Services, and Portfolio pages.

### Task 4.1 — Founder Story Section (About)
- **File:** `components/sections/FounderStory.tsx`
- 12-col editorial grid: portrait 5 cols, text 7 cols.
- Founder portrait with `aspect-[4/5]`, decorative inset border overlay.
- `headline-lg` "The Vision of *Anchie Rosas*"
- Rewritten bio — warm, direct, no "sovereign precision" or "invisible hand" language.
- Gold divider accent line (`h-px w-24 bg-primary/40`) above title "Founder & Creative Director".

### Task 4.2 — Approach Cards Section (About)
- **File:** `components/sections/Approach.tsx`
- 3-card grid on `surface-container-high`.
- Center card elevated: `scale-105`, `surface-container-highest`, gold "Core" badge.
- Each card: Material icon, `headline-sm` title, `body-md` description.
- Hover: `translateY(-1rem)` + ambient shadow.
- Rewritten titles: "Seamless Execution" / "Your Focus, Our Priority" / "Lasting Results" (replaces "Invisible Precision" / "Sovereign Focus" / "Enduring Impact").

### Task 4.3 — Editorial Gallery Section (About)
- **File:** `components/sections/EditorialGallery.tsx`
- Asymmetric bento grid: 8-col image + 4-col split (image + stat block).
- Glass-panel overlay on main image: `headline-sm` "A Decade of Results" + `body-sm` stat line.
- Stat block: `headline-lg` Noto Serif number "10+" + `label-sm` "Years of Experience".

### Task 4.4 — Divisions Editorial Grid (Services)
- **File:** `components/sections/DivisionsEditorial.tsx`
- Renders all 9 divisions per `specs.md` §9 layout pattern.
- **Divisions 1–2 (TANGHAL, LIKHA):** Full-width 12-col editorial grid (image 7 cols, text 5 cols), alternating LTR/RTL. Full image with gradient overlay, hover `scale(1.10)`.
- **Divisions 3–4 (MERKATO, TIPON):** Side-by-side bento pair on `surface-container-low`, staggered vertically (2nd card offset by `mt-24`).
- **Divisions 5–6 (SIBOL, GUHIT):** Full-width 12-col editorial grid. SIBOL: image with `grayscale hover:grayscale-0` reveal (1000ms). GUHIT: abstract design placeholder (icon + headline) on `surface-container-high`.
- **Divisions 7–9 (UGNAY, DALOY, TAYO):** 3-column triptych layout, staggered (`mt-12`, `mt-24`, `mt-48`). Each card: top border accent `border-t border-primary/20`, number, title, tagline, body, grayscale image with hover reveal. TAYO's card should lean into its architectural identity — use a structural/spatial image.
- Every division includes its **full service list** as pill-chip tags.

### Task 4.5 — Filter Bar (Portfolio)
- **File:** `components/sections/FilterBar.tsx`
- Horizontally centered row of FilterChip components.
- Categories: All · Concerts · Corporate · Experiential · Tech.
- Client-side filtering of portfolio grid items.

### Task 4.6 — Portfolio Gallery Grid (Portfolio)
- **File:** `components/sections/PortfolioGrid.tsx`
- Bento grid: `grid-cols-12`, `auto-rows-[400px]`, `gap-6 md:gap-8`.
- Cards: various col/row spans (8+4, 4+4+4 patterns).
- Each card: image with `mix-blend-luminosity opacity-80`, gradient overlay from bottom.
- Hover: image `scale(1.05)`, overlay opacity increases, label translates up.
- Each card: `label-sm` category tag (gold, uppercase) + `headline-sm` Noto Serif title.

---

## Phase 5: Page Assembly

> Goal: Compose section components into complete pages per `architecture.md` routing.

### Task 5.1 — Home Page
- **File:** `app/page.tsx`
- **Compose:** Hero → TrustBar → ProblemSolution → ServicesGrid → TechHighlight → CTABanner.
- **Spacing:** `spacing-20` (5rem) to `spacing-32` (8rem) between major sections via alternating surface tiers.
- Section-reveal scroll animations via Intersection Observer.

### Task 5.2 — Services Page
- **File:** `app/services/page.tsx`
- **Compose:** PageHero ("Our Capabilities" overline, "The Art of *Exceptional* Experiences" headline) → DivisionsEditorial (9 divisions) → CTABanner ("Start Your Project").
- `pt-32` to clear fixed navbar.
- `spacing-32` (8rem) between division blocks.

### Task 5.3 — About Page
- **File:** `app/about/page.tsx`
- **Compose:** PageHero ("Est. 2014" overline, "The Lakambini Story" headline, full-height image) → FounderStory → Approach → EditorialGallery → CTABanner.
- Asymmetric editorial layouts throughout.

### Task 5.4 — Portfolio Page
- **File:** `app/portfolio/page.tsx`
- **Compose:** PageHero ("Our Work" headline, centered) → FilterBar → PortfolioGrid → CTABanner.
- `pt-40` to clear fixed navbar + add breathing room.

### Task 5.5 — Individual Division Pages
- **Files:** `app/services/[division]/page.tsx` (or static child routes for each of the 9 divisions)
- **Goal:** Provide a dedicated landing page for each of the 9 divisions (TANGHAL, LIKHA, MERKATO, TIPON, SIBOL, GUHIT, UGNAY, DALOY, TAYO).
- **Layout Reference:** Follow the individual HTML references matching the division name (e.g., `references/tayo.html`, `references/daloy.html`, etc.).
- **Content:** Each page must feature its own `PageHero` (often integrating the division name in display-lg scale), deep-dive service expansions in bento grids, and the marble texture/overlay styling defined in the templates.

---

## Phase 6: Polish & Interactivity

> Goal: Refine to the Editorial standard.

### Task 6.1 — Intersection Observer Animations
- Each section fades in (`opacity 0→1`) + translates up (`translateY 20px→0`).
- Duration: 800ms, ease-out.
- Trigger once on first viewport intersection.

### Task 6.2 — Responsive Breakpoints
- **Mobile:** < 768px — single column, hamburger nav, stacked editorial grids.
- **Tablet:** 768px–1023px — 2-column grids, adjusted spacing.
- **Desktop:** ≥ 1024px — full bento grids, side-by-side asymmetric layouts, 12-col editorial grid.
- **Test viewports:** 320px, 375px, 768px, 1024px, 1440px.

### Task 6.3 — SEO & Metadata
- **File:** `app/layout.tsx` + per-page `metadata` exports.
- Set `<title>`, `<meta name="description">`, Open Graph tags per page.
- Single `<h1>` per page. Proper heading hierarchy.
- Ensure dark-mode `theme-color` meta tag is set to `#051710`.
- Page titles:
  - Home: "Lakambini Events | Full-Service Event Production Agency"
  - Services: "Our Services | Lakambini Events"
  - About: "About Us | Lakambini Events"
  - Portfolio: "Our Work | Lakambini Events"

### Task 6.4 — Performance Optimization
- Use `next/image` with priority loading on hero images.
- Lazy load below-fold sections.
- Font loading: `display: swap` on both Noto Serif and Manrope.
- Optimize gold gradient rendering — prefer CSS over image-based gradients.

---

## Phase 7: QA & Verification

> **Owner:** @QA_Auditor

### Task 7.1 — Visual Fidelity Audit
- Screenshot each page, compare with reference HTML files and Stitch screens.
- Verify: All surface tiers render correct emerald green shades, gold accents are limited to CTAs, headlines, and accent elements.
- Verify: Navbar correctly transitions between resting (transparent) and floating (glass pill) states.
- Verify: "Inquire" CTA is hidden at top and slides into view on scroll.

### Task 7.2 — Mobile Responsiveness Test
- Test all pages at 320px, 375px, 414px.
- Hamburger menu opens correctly on `--surface-container`.
- No horizontal overflow. No broken bento grids.
- Editorial grids stack to single column on mobile.

### Task 7.3 — Interaction Audit
- All hover states (scale, ambient shadow, underline expand) per `specs.md` §10.
- Navbar scroll transitions are smooth (no flicker, no layout shift).
- Portfolio filter chips toggle correctly.
- Image grayscale-to-color hover works on division cards.

### Task 7.4 — Copy Audit
- Verify no instances of banned words: "Sovereign," "Imperial," "Sacred," "Manifest."
- All copy follows "Simple, Elegant, Authoritative" tone per `specs.md` §7.
- No placeholder text ("Lorem ipsum") in any shipped section.

### Task 7.5 — Accessibility Check
- **Contrast ratios:** Verify `--on-surface` (#D2E7DD) on `--surface` (#051710) passes WCAG AA. Verify `--color-primary` (#E9C255) on dark surfaces passes AA for large text.
- Keyboard navigation for all interactive elements.
- Image alt texts, ARIA labels, focus rings using `--color-primary`.
- Navbar is keyboard-accessible in both states.

---

## Execution Order Summary

```
Phase 0 ─── Foundation (Emerald Editorial tokens, fonts, Tailwind config)
   │
Phase 1 ─── Layout Shell + Dynamic Navbar ⭐ (glass-pill scroll transition,
   │         "Inquire" CTA reveal, footer)
   │
Phase 2 ─── UI Components (gold gradient buttons, cards, chips, inputs)
   │
Phase 3 ─── Shared Section Components (Hero, TrustBar, CTA, PageHero)
   │
Phase 4 ─── Page-Specific Sections (Divisions Editorial, Portfolio Grid,
   │         Founder Story, Approach Cards)
   │
Phase 5 ─── Page Assembly (Home, Services overview, About, Portfolio, plus all 9 Division sub-pages)
   │
Phase 6 ─── Polish (scroll animations, responsive, SEO, performance)
   │
Phase 7 ─── QA (visual fidelity, mobile, interactions, copy audit, a11y)
```

---

## Key Reference Files

| File | Purpose |
|---|---|
| `specs.md` | Emerald Editorial design tokens, colors, typography, component specs, navbar animation, copy guidelines |
| `.agent/architecture.md` | Strict directory structure and routing map |
| `.agent/agents.md` | AI team roles and permissions |
| `styles/globals.css` | Emerald Editorial CSS custom properties and global styles |
| `tailwind.config.js` | Tailwind theme extended with Emerald Editorial tokens |
| `references/` | HTML reference files — source of truth for layout patterns and UI structure |
| [Stitch Project](https://stitch.withgoogle.com/projects/7832304664184726637) | Visual source of truth |
| Stitch Design System Asset | `assets/ecfae069385b4318bb4b49a261cd82ea` |
