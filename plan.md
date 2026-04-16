# 🗺️ Lakambini Events — Implementation Plan

> **Source:** `specs.md` · **Design System:** Sovereign Emerald (Dark Mode)
> **Role:** @Product_Manager → @Frontend_Engineer
> **Architecture Reference:** `.agent/architecture.md`
> **Generated:** 2026-04-17

---

## Phase 0: Foundation & Design System Setup

> Goal: Establish the Sovereign Emerald token infrastructure as the single source of truth.

### Task 0.1 — Configure Global Fonts
- **File:** `app/layout.tsx`
- Import Google Fonts: `Noto Serif` (400, 500, 600, 700) + `Manrope` (300, 400, 500, 600) via `next/font/google`.
- Set CSS variables: `--font-headline: 'Noto Serif'` and `--font-body: 'Manrope'`.
- Set `<body>` default to `--font-body` with `--on-surface` (#D2E7DD) text on `--surface` (#051710) background.

### Task 0.2 — Build Design Token System
- **File:** `styles/globals.css`
- Define **all** Sovereign Emerald CSS custom properties from `specs.md` §2 under `:root`.
- There is no light mode. The entire site is dark-mode-first using the Sovereign Emerald palette.
- Implement the full MD3 typography scale from `specs.md` §3.2 as utility classes.
- Define the spacing scale from `specs.md` §4.1.
- Add ambient shadow, ghost border, and glassmorphism utility classes from `specs.md` §5.

### Task 0.3 — Configure Tailwind Theme Extensions
- **File:** `tailwind.config.js` (or `tailwind.config.ts`)
- Extend theme `colors` — map **only** Sovereign Emerald tokens:
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
  ```
- Extend `fontFamily`:
  ```
  serif: ['Noto Serif', 'serif']
  sans: ['Manrope', 'sans-serif']
  ```
- Extend `spacing` with full MD3 scale (see `specs.md` §4.1).
- Set default `borderRadius` to `0px` globally.
- Disable all default rounded utilities or reset them to `0`.

---

## Phase 1: Layout Shell

> Goal: Build the persistent layout components that wrap every page.

### Task 1.1 — Build Navigation Bar
- **File:** `components/layout/Navbar.tsx`
- **Background:** Glassmorphism — `--surface-variant` (#273831) @ 60% opacity + `backdrop-filter: blur(20px)`.
- **Position:** Fixed top, `z-index: 1000`.
- **Menu items:** Home, About, Services, Portfolio, Contact.
- **Typography:** Manrope `label-sm` ALL-CAPS with `+0.05rem` letter-spacing.
- **Item spacing:** `spacing-8` (2.75rem).
- **Logo:** Left-aligned. Gold accent (#E9C255) on brand wordmark.
- **Mobile:** Hamburger icon → slide-in overlay panel with `--surface-container` (#11231C) background.
- **Active state:** Gold underline or `--color-primary` text highlight.

### Task 1.2 — Build Footer
- **File:** `components/layout/Footer.tsx`
- **Background:** `--surface-container-lowest` (#02110B) — the deepest emerald layer.
- **Text:** `--on-surface` (#D2E7DD).
- **Sections:** Company info, Quick links, Contact details, Social media icons.
- **Section headers:** `label-md` ALL-CAPS in `--color-primary` gold.
- **Body text:** `body-sm` Manrope.
- **Bottom bar:** Copyright + legal links, separated by `spacing-4` from main footer.

### Task 1.3 — Build Page Wrapper
- **File:** `components/layout/PageWrapper.tsx`
- Consistent max-width `1280px` with horizontal padding `spacing-6`.
- Scroll-to-top on route change.
- Wraps children with section-reveal Intersection Observer animation.

---

## Phase 2: Shared UI Components

> Goal: Build atomic components per `specs.md` §6.

### Task 2.1 — Button Component
- **File:** `components/ui/Button.tsx`
- **Variants:**
  - `primary` — Gold gradient (`#E9C255` → `#BF9B31` at 135°), `--on-primary` text, hover scale 1.02 + glow.
  - `secondary` — Transparent bg, ghost border (`--outline-variant` @ 20%), `--color-primary` text, hover fill `--surface-container-high`.
  - `tertiary` — No bg, `--on-surface` text, 1px gold underline, hover underline expands from center.
- **Props:** `variant`, `size`, `href?`, `children`.
- **Corners:** `0px` on all variants.

### Task 2.2 — SectionHeading Component
- **File:** `components/ui/SectionHeading.tsx`
- **Props:** `overline` (label-sm ALL-CAPS, `--on-surface-variant`), `title` (headline-lg, `--on-surface`), `description?` (body-lg).
- Support asymmetric offset via optional `offsetRight` prop.

### Task 2.3 — Card Component
- **File:** `components/ui/Card.tsx`
- **Background:** `--surface-container-high` (#1C2E27).
- **Border:** NONE.
- **Corner radius:** `0px`.
- **Inner padding:** `spacing-6` (2rem).
- **Image:** 10% black overlay + hover `scale(1.05)` with `600ms ease-out`.
- **No dividers** inside card content — use `spacing-4` gaps.

### Task 2.4 — Input Field Component
- **File:** `components/ui/InputField.tsx`
- Single bottom border: `--outline-variant` @ 40% opacity.
- **Focus:** Border transitions to `--color-primary` (#E9C255), 2px weight, subtle gold glow.
- **Label:** `label-sm` ALL-CAPS Manrope above input with `spacing-2` gap.
- **Text color:** `--on-surface` (#D2E7DD).
- **Background:** Transparent (inherits surface).

### Task 2.5 — Accordion Component
- **File:** `components/ui/Accordion.tsx`
- **Header:** `title-lg` Manrope, `--on-surface` text.
- **Expanded:** Background shifts to `--surface-container-low` (#0D1F18).
- **Icon:** Thin 1px `+/−` in `--color-primary` gold.
- **Border:** NONE.
- **Animation:** `max-height` transition 400ms ease-out.

---

## Phase 3: Section Components

> Goal: Build all page sections. Home page sections first — reuse across other pages.

### Task 3.1 — Hero Banner Section
- **File:** `components/sections/Hero.tsx`
- Full-viewport height on `--surface` (#051710).
- Full-bleed atmospheric image with 10% dark overlay.
- **Content:** `display-lg` Noto Serif headline in `--color-primary` gold, `label-sm` ALL-CAPS overline in `--on-surface-variant`, Primary gold gradient CTA button.
- Scroll indicator arrow at bottom in `--on-surface-variant`.

### Task 3.2 — Trust Signal Bar
- **File:** `components/sections/TrustBar.tsx`
- **Background:** `--surface-container-low` (#0D1F18).
- Client logos in grayscale (`--on-surface-variant`), hover to `--color-primary` gold.
- `label-md` "Trusted by leading brands" in `--on-surface-variant`.

### Task 3.3 — About Preview Section
- **File:** `components/sections/AboutPreview.tsx`
- Asymmetric two-column layout on `--surface`.
- `headline-lg` title in `--on-surface`, `body-lg` excerpt in Manrope Light.
- Tertiary link with gold underline hover.

### Task 3.4 — Services Grid Section
- **File:** `components/sections/ServicesGrid.tsx`
- **Background:** `--surface-container-low` (#0D1F18).
- Bento grid with 4–6 service cards on `--surface-container-high`.
- Each card: atmospheric image + `title-lg` label + `body-sm` description.
- Varied aspect ratios (1:1, 2:1, 1:2).

### Task 3.5 — Portfolio Showcase Section
- **File:** `components/sections/PortfolioShowcase.tsx`
- 2–3 featured case studies on `--surface`.
- Full-bleed images with `display-sm` `--on-surface` overlay text.
- Hover: image scale 1.05, 600ms ease-out.

### Task 3.6 — Divisions Preview Section
- **File:** `components/sections/DivisionsPreview.tsx`
- Grid on `--surface-container` (#11231C).
- 8–9 division tiles on `--surface-container-high`.
- Division names in `title-lg`, taglines in `body-sm`, gold accent icons.

### Task 3.7 — CTA Banner Section
- **File:** `components/sections/CTABanner.tsx`
- **Background:** `--surface-container-highest` (#273831) with atmospheric image.
- `headline-md` copy in `--on-surface`, Gold gradient CTA button.
- Reusable across all pages via props.

### Task 3.8 — Page Hero (Reusable)
- **File:** `components/sections/PageHero.tsx`
- **Props:** `title`, `subtitle`, `backgroundImage?`.
- `display-md` title in `--on-surface` or `--color-primary`.
- `body-lg` subtitle in `--on-surface-variant`.
- Used on About, Services, Portfolio, Contact.

---

## Phase 4: Page Assembly

> Goal: Compose section components into complete pages per `architecture.md` routing.

### Task 4.1 — Home Page
- **File:** `app/page.tsx`
- **Compose:** Hero → TrustBar → AboutPreview → ServicesGrid → PortfolioShowcase → DivisionsPreview → CTABanner.
- **Spacing:** `spacing-20` to `spacing-24` between major sections.
- Section-reveal scroll animations via Intersection Observer.

### Task 4.2 — About Us Page
- **File:** `app/about/page.tsx`
- **Compose:** PageHero → LegacyTimeline → TeamGrid → MissionStatement → CTABanner.
- Founder story, milestones timeline, asymmetric layouts.

### Task 4.3 — Services Page
- **File:** `app/services/page.tsx`
- **Compose:** PageHero → DivisionsGrid → ServiceAccordions → CaseStudyCards → CTABanner.
- 9 Filipino-named divisions fully detailed.

### Task 4.4 — Portfolio Page
- **File:** `app/portfolio/page.tsx`
- **Compose:** PageHero → PortfolioGrid → CaseStudyDetail (×2) → MetricsBanner → CTABanner.
- Masonry/bento layout. Stat numbers in `display-lg` Noto Serif.

### Task 4.5 — Contact Page
- **File:** `app/contact/page.tsx`
- **Compose:** PageHero → ContactForm → BusinessInfo → SocialBar.
- Gold-accented form with underline-only inputs and gold submit CTA.

---

## Phase 5: Polish & Interactivity

> Goal: Refine to the Sovereign Editorial standard.

### Task 5.1 — Intersection Observer Animations
- Each section fades in (`opacity 0→1`) + translates up (`translateY 20px→0`).
- Duration: 800ms, Ease-Out-Expo.
- Trigger once on first viewport intersection.

### Task 5.2 — Responsive Breakpoints
- **Mobile:** < 768px — single column, hamburger nav.
- **Tablet:** 768px–1023px — 2-column grids, adjusted spacing.
- **Desktop:** ≥ 1024px — full bento grids, side-by-side asymmetric layouts.
- **Test viewports:** 320px, 375px, 768px, 1024px, 1440px.

### Task 5.3 — SEO & Metadata
- **File:** `app/layout.tsx` + per-page `metadata` exports.
- Set `<title>`, `<meta name="description">`, Open Graph tags per page.
- Single `<h1>` per page. Proper heading hierarchy.
- Ensure dark-mode `theme-color` meta tag is set to `#051710`.

### Task 5.4 — Performance Optimization
- Use `next/image` with priority loading on hero images.
- Lazy load below-fold sections.
- Font loading: `display: swap` on both Noto Serif and Manrope.
- Optimize gold gradient rendering — prefer CSS over image-based gradients.

---

## Phase 6: QA & Verification

> **Owner:** @QA_Auditor

### Task 6.1 — Visual Fidelity Audit
- Screenshot each page, compare with Stitch Sovereign Emerald screens (especially `297e9e91`, `713ea9f5`, `35c9be80`).
- Verify: All surface tiers render correct emerald green shades, gold accents are limited to CTAs and headlines.

### Task 6.2 — Mobile Responsiveness Test
- Test all pages at 320px, 375px, 414px.
- Hamburger menu opens correctly on `--surface-container`.
- No horizontal overflow. No broken bento grids.

### Task 6.3 — Interaction Audit
- All hover states (gold glow, card scale, underline expand) per `specs.md` §9.
- Accordion expand/collapse with background shift.
- Contact form gold focus states.

### Task 6.4 — Accessibility Check
- **Contrast ratios:** Verify `--on-surface` (#D2E7DD) on `--surface` (#051710) passes WCAG AA. Verify `--color-primary` (#E9C255) on dark surfaces passes AA for large text.
- Keyboard navigation for all interactive elements.
- Image alt texts, ARIA labels, focus rings using `--color-primary`.

---

## Execution Order Summary

```
Phase 0 ─── Foundation (Sovereign Emerald tokens, Noto Serif + Manrope, Tailwind config)
   │
Phase 1 ─── Layout Shell (Glassmorphism navbar, deep emerald footer, page wrapper)
   │
Phase 2 ─── UI Components (Gold gradient buttons, emerald cards, gold-focus inputs)
   │
Phase 3 ─── Section Components (Hero, grids, CTAs — all on emerald surface tiers)
   │
Phase 4 ─── Page Assembly (5 routes composed with spacing-20/24 separation)
   │
Phase 5 ─── Polish (Ease-Out-Expo animations, responsive, SEO, performance)
   │
Phase 6 ─── QA (Visual fidelity vs Stitch, mobile, a11y, interaction audit)
```

---

## Key Reference Files

| File | Purpose |
|---|---|
| `specs.md` | Sovereign Emerald design tokens, colors, typography, component specs |
| `.agent/architecture.md` | Strict directory structure and routing map |
| `.agent/agents.md` | AI team roles and permissions |
| `styles/globals.css` | Sovereign Emerald CSS custom properties and global styles |
| `tailwind.config.js` | Tailwind theme extended with Sovereign Emerald tokens only |
| [Stitch Project](https://stitch.withgoogle.com/projects/7832304664184726637) | Visual source of truth |
| Stitch Design System Asset | `assets/ecfae069385b4318bb4b49a261cd82ea` |
