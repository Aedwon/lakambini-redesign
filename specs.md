# 📐 Lakambini Events — Design Specifications

> **Source:** [Google Stitch Project #7832304664184726637](https://stitch.withgoogle.com/projects/7832304664184726637)
> **Design System:** Sovereign Emerald · Asset ID `ecfae069385b4318bb4b49a261cd82ea`
> **Generated:** 2026-04-17 · **Role:** @Product_Manager
> **Architecture Reference:** `.agent/architecture.md`

---

## 1. Design System — Sovereign Emerald

| Property | Value |
|---|---|
| **Display Name** | Sovereign Emerald |
| **Color Mode** | Dark |
| **Headline Font** | Noto Serif |
| **Body Font** | Manrope |
| **Label Font** | Manrope |
| **Corner Roundness** | `ROUND_FOUR` (0px — architectural sharp) |
| **Spacing Scale** | 3 (MD3) |
| **Color Variant** | Fidelity |

### Creative North Star: "The Sovereign Editorial"

We treat the digital interface as a high-end physical publication — *Vogue* or *Architectural Digest* — designed for a regal audience. This system favors intentional asymmetry, generous negative space, and a "layered depth" philosophy. We do not use lines to separate ideas; we use space, tonal shifts, and light to guide the eye. Every element should feel curated, not placed.

The palette is built on a foundation of **"Deep Emerald Shadows"** and **"Liquid Gold."** A dark-mode-first approach evokes mystery, exclusivity, and prestige.

---

## 2. Color Palette — Extracted Tokens

### 2.1 Brand Override Colors (Designer Intent)

| Role | Hex | Usage |
|---|---|---|
| **Primary** | `#BF9B31` | Gold — primary brand anchor |
| **Secondary** | `#092E20` | Deep forest green — brand depth |
| **Tertiary** | `#EEEEEE` | Light neutral — contrast text |
| **Neutral** | `#04150F` | Near-black green — deepest backgrounds |

### 2.2 Core Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#E9C255` | Gold primary — headlines, CTAs, interactive accents |
| `--color-primary-container` | `#BF9B31` | Muted gold fill for containers, badges |
| `--color-on-primary` | `#3D2E00` | Text on gold backgrounds |
| `--color-on-primary-container` | `#453400` | Text on muted gold containers |
| `--color-primary-fixed` | `#FFDF90` | Fixed gold for persistent elements |
| `--color-primary-fixed-dim` | `#E9C255` | Dimmed fixed gold |
| `--color-on-primary-fixed` | `#241A00` | Text on fixed gold |
| `--color-on-primary-fixed-variant` | `#584400` | Variant text on fixed gold |

### 2.3 Secondary Palette (Emerald)

| Token | Hex | Usage |
|---|---|---|
| `--color-secondary` | `#A9CFBA` | Sage green — secondary text, subtle accents |
| `--color-secondary-container` | `#2B4E3E` | Deep green container |
| `--color-on-secondary` | `#133728` | Text on sage green |
| `--color-on-secondary-container` | `#98BEA9` | Text on deep green containers |
| `--color-secondary-fixed` | `#C4EBD6` | Fixed sage for persistent elements |
| `--color-secondary-fixed-dim` | `#A9CFBA` | Dimmed fixed sage |
| `--color-on-secondary-fixed` | `#002114` | Text on fixed sage |
| `--color-on-secondary-fixed-variant` | `#2B4E3E` | Variant text on fixed sage |

### 2.4 Tertiary Palette (Neutral Grey)

| Token | Hex | Usage |
|---|---|---|
| `--color-tertiary` | `#C6C6C7` | Neutral grey — supporting details |
| `--color-tertiary-container` | `#9E9F9F` | Grey container fill |
| `--color-on-tertiary` | `#2F3131` | Text on neutral grey |
| `--color-on-tertiary-container` | `#343637` | Text on grey containers |
| `--color-tertiary-fixed` | `#E2E2E2` | Fixed grey |
| `--color-tertiary-fixed-dim` | `#C6C6C7` | Dimmed fixed grey |

### 2.5 Surface System (Deep Emerald Layers)

> **The "Paper-on-Paper" Layering:** Treat surfaces as stacked sheets of dark marble or frosted emerald glass. Depth is achieved exclusively through surface tier shifts.

| Token | Hex | Usage |
|---|---|---|
| `--surface` | `#051710` | Base page background |
| `--surface-bright` | `#2B3D36` | Elevated bright surfaces |
| `--surface-dim` | `#051710` | Recessed / dimmed areas (same as base) |
| `--surface-container-lowest` | `#02110B` | Deepest recessed slots |
| `--surface-container-low` | `#0D1F18` | Recessed panels, secondary backgrounds |
| `--surface-container` | `#11231C` | Default container fill |
| `--surface-container-high` | `#1C2E27` | Elevated containers, prominent cards |
| `--surface-container-highest` | `#273831` | Most urgent / floating containers |
| `--surface-variant` | `#273831` | Variant fill (overlays, modals) |
| `--surface-tint` | `#E9C255` | Tint overlay for gold shimmer effects |

### 2.6 On-Surface (Text & Icon Colors)

| Token | Hex | Usage |
|---|---|---|
| `--on-surface` | `#D2E7DD` | Primary body text |
| `--on-surface-variant` | `#D0C5B0` | Secondary text, captions, metadata |
| `--on-background` | `#D2E7DD` | Text on base background |
| `--background` | `#051710` | Page background (alias of surface) |

### 2.7 Outline & Borders

| Token | Hex | Usage |
|---|---|---|
| `--outline` | `#99907D` | Standard outlines (use sparingly) |
| `--outline-variant` | `#4D4636` | Ghost borders — always at 20% opacity |

### 2.8 Inverse Tokens (Light-on-dark flips)

| Token | Hex | Usage |
|---|---|---|
| `--inverse-surface` | `#D2E7DD` | Inverted surface for tooltips, snackbars |
| `--inverse-on-surface` | `#22342D` | Text on inverted surface |
| `--inverse-primary` | `#755B00` | Inverted primary for light contexts |

### 2.9 Feedback Colors

| Token | Hex | Usage |
|---|---|---|
| `--error` | `#FFB4AB` | Error state text/icons |
| `--error-container` | `#93000A` | Error backgrounds |
| `--on-error` | `#690005` | Text on error |
| `--on-error-container` | `#FFDAD6` | Text on error containers |

---

## 3. Typography Scale

### 3.1 Font Families

| Role | Font | Google Fonts Import | Weights |
|---|---|---|---|
| **Headlines / Display** | `Noto Serif` | `family=Noto+Serif:wght@400;500;600;700` | 400, 500, 600, 700 |
| **Body / Labels / UI** | `Manrope` | `family=Manrope:wght@300;400;500;600` | 300, 400, 500, 600 |

### 3.2 Type Scale (Material Design 3)

| Token | Size | Line Height | Weight | Font | Usage |
|---|---|---|---|---|---|
| `display-lg` | `3.5625rem` (57px) | `4rem` | 400 | Noto Serif | Hero statements, mastheads |
| `display-md` | `2.8125rem` (45px) | `3.25rem` | 400 | Noto Serif | Large section titles |
| `display-sm` | `2.25rem` (36px) | `2.75rem` | 400 | Noto Serif | Image overlay headlines |
| `headline-lg` | `2rem` (32px) | `2.5rem` | 400 | Noto Serif | Main section headers |
| `headline-md` | `1.75rem` (28px) | `2.25rem` | 400 | Noto Serif | Sub-section headers |
| `headline-sm` | `1.5rem` (24px) | `2rem` | 400 | Noto Serif | Tertiary headers |
| `title-lg` | `1.375rem` (22px) | `1.75rem` | 500 | Manrope | Card titles, accordion headers |
| `title-md` | `1rem` (16px) | `1.5rem` | 500 | Manrope | Medium titles |
| `title-sm` | `0.875rem` (14px) | `1.25rem` | 500 | Manrope | Technical descriptors |
| `body-lg` | `1rem` (16px) | `1.5rem` | 300–400 | Manrope | Storytelling, long-form (Light or Regular only) |
| `body-md` | `0.875rem` (14px) | `1.25rem` | 400 | Manrope | Standard body text |
| `body-sm` | `0.75rem` (12px) | `1rem` | 400 | Manrope | Captions, fine print |
| `label-lg` | `0.875rem` (14px) | `1.25rem` | 500 | Manrope | Button labels |
| `label-md` | `0.75rem` (12px) | `1rem` | 500 | Manrope | Metadata, tags |
| `label-sm` | `0.6875rem` (11px) | `1rem` | 500 | Manrope | ALL-CAPS micro-labels, overlines |

### 3.3 Typography Rules

- **Letter-spacing:** `display-lg` uses `-2%` tracking for a printed-masthead feel. `label-md` and `label-sm` use `+0.05rem` for luxury readability.
- **Weight discipline:** Body text must never exceed Regular (400). Light (300) is preferred for `body-lg`. Bold is reserved for headlines only.
- **Hierarchy contrast:** Pair `display-lg` Noto Serif headlines with `label-sm` ALL-CAPS Manrope subtitles for the editorial high-fashion contrast.
- **No Bold body:** Using Bold weight on body text destroys the editorial elegance. Keep it Light or Regular.
- **Serif for numbers:** Use Noto Serif for all numerical displays (stats, prices, metrics) to lend them a sense of "preciousness."

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (MD3 · Scale Factor: 3)

| Token | Value | Usage |
|---|---|---|
| `spacing-0` | `0rem` | — |
| `spacing-0.5` | `0.125rem` | Micro-gaps, icon nudge |
| `spacing-1` | `0.25rem` | Inline spacing |
| `spacing-1.5` | `0.375rem` | Small icon-to-text |
| `spacing-2` | `0.5rem` | Label-to-input gap |
| `spacing-3` | `0.75rem` | Component internal padding |
| `spacing-4` | `1rem` | List-item gap |
| `spacing-5` | `1.25rem` | Card internal padding |
| `spacing-6` | `2rem` | Card body padding |
| `spacing-8` | `2.75rem` | Nav menu item spacing |
| `spacing-10` | `3.5rem` | Asymmetric offsets |
| `spacing-12` | `4.25rem` | Weighted editorial padding |
| `spacing-16` | `5.75rem` | Section internal padding |
| `spacing-20` | `7rem` | Major section separation |
| `spacing-24` | `8.5rem` | Hero-level breathing room |

### 4.2 Layout Rules

- **Container max-width:** `1280px` (Stitch screens are `2560px` at 2x).
- **Grid:** CSS Grid. Bento-style with varied aspect ratios (1:1, 2:1, 1:2).
- **Mobile-first:** Stacked single-column → multi-column at `768px` → full grid at `1024px`.
- **Asymmetric margins:** Headlines may be offset by `spacing-10` to the right while body text remains centered. Asymmetric padding inside cards (e.g., `padding-top: spacing-10`, `padding-bottom: spacing-12`) creates a "weighted" editorial feel.

---

## 5. Elevation & Depth Patterns

### 5.1 The "No-Line" Rule
> **CRITICAL:** Do not use `1px solid` borders to define sections or cards. Boundaries are defined exclusively through background color shifts between surface container tiers.
>
> **Section separation:** Use `spacing-20` (7rem) or `spacing-24` (8.5rem) negative space so the eye naturally perceives transitions without needing a line.

### 5.2 Tonal Layering (Not Shadows)

Depth is achieved by **stacking surface-container tiers**:
- A `--surface-container-highest` card on a `--surface-dim` background creates natural elevation.
- A `--surface-container-high` section on the base `--surface` feels integrated yet prominent.

### 5.3 Ambient Shadow (Floating Elements Only)
```css
/* Tinted emerald shadow — modals, dropdowns, primary CTA */
box-shadow: 0 20px 50px rgba(4, 21, 15, 0.4);
```
> The shadow color is a tinted version of the deepest green (`#04150F`), **not** black. This keeps the shadow grounded in the palette.

### 5.4 Ghost Border (Accessibility Fallback)
```css
/* Use only when accessibility requires a container edge */
border: 1px solid rgba(77, 70, 54, 0.20); /* --outline-variant @ 20% */
```

### 5.5 Glassmorphism — "Frosted Marble"
```css
/* Navigation, floating overlays, modals */
background: rgba(39, 56, 49, 0.60); /* --surface-variant @ 60% */
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

### 5.6 The Gold Gradient (CTAs)
```css
/* Primary CTA buttons — the "Liquid Gold" effect */
background: linear-gradient(135deg, #E9C255, #BF9B31);
```
> Use a 135-degree angle. Flat hex codes feel cheap; the gradient gives the CTA a metallic soul.

### 5.7 The "Marble Reveal" Texture
For large-scale containers, apply `--surface-container-highest` with a subtle 5% opacity noise texture or marble-vein SVG pattern. This breaks the monotony of flat dark colors.

---

## 6. Component Specifications

### 6.1 Buttons

| Variant | Background | Text Color | Border | Corners | Hover Effect |
|---|---|---|---|---|---|
| **Primary** | Gold gradient (`#E9C255` → `#BF9B31` at 135°) | `--on-primary` (#3D2E00) | None | `0px` | Scale `1.02` + intensified glow shadow |
| **Secondary** | Transparent | `--color-primary` (#E9C255) | Ghost border (`--outline-variant` @ 20%) | `0px` | Fill shifts to `--surface-container-high` |
| **Tertiary (Text Link)** | Transparent | `--on-surface` (#D2E7DD) | 1px `--color-primary` underline | N/A | Underline expands from center |

### 6.2 Cards & Content Blocks
- **Background:** `--surface-container-high` (#1C2E27) for standard, `--surface-container-highest` (#273831) for prominent.
- **Border:** NONE (No-Line Rule).
- **Corner radius:** `0px` (architectural sharp).
- **Internal padding:** `spacing-6` (2rem).
- **Image hover:** `transform: scale(1.05)` with `transition: 600ms ease-out`.
- **Image overlay:** 10% black overlay for text legibility.
- **No dividers:** Never use `<hr>` to separate content. Use `spacing-8` gap or background shift.

### 6.3 Accordions
- **Header:** `title-lg` Manrope weight.
- **Expanded state:** Background shifts to `--surface-container-low` (#0D1F18).
- **Icon:** Thin 1px `+/−` sign in `--color-primary` gold (#E9C255).
- **Border:** NONE.

### 6.4 Input Fields
- **Style:** Single bottom border using `--outline-variant` at 40% opacity.
- **Focus state:** Border transitions to `--color-primary` (#E9C255) with a subtle `--primary-fixed-dim` glow.
- **Label:** `label-sm` ALL-CAPS Manrope, positioned above with `spacing-2` gap.
- **No four-sided boxes.**

### 6.5 Navigation Bar
- **Style:** `label-sm` ALL-CAPS Manrope with `+0.05rem` letter-spacing.
- **Item spacing:** `spacing-8` (2.75rem).
- **Background:** Glassmorphism (surface-variant @ 60%, 20px blur).
- **Position:** Fixed top, `z-index: 1000`.
- **Mobile:** Hamburger menu with slide-in overlay using `--surface-container` (#11231C).

### 6.6 Selection Chips
- **Unselected:** `--surface-container-high` (#1C2E27), `--on-surface` text.
- **Selected:** `--color-primary` (#E9C255), `--on-primary` (#3D2E00) text.
- **Corners:** `0px` (square-edged).

---

## 7. Page Section Breakdown

Cross-referenced with `.agent/architecture.md` routing map.

### 7.1 Home Page (`/` → `app/page.tsx`)

| # | Section | Component Path | Surface Tier | Key Elements |
|---|---|---|---|---|
| 1 | **Hero Banner** | `components/sections/Hero.tsx` | `surface` | Full-viewport atmospheric image, `display-lg` gold headline, `label-sm` overline, Primary gold gradient CTA |
| 2 | **Trust Signal Bar** | `components/sections/TrustBar.tsx` | `surface-container-low` | Client logos (grayscale → gold on hover), `label-md` text |
| 3 | **About Snippet** | `components/sections/AboutPreview.tsx` | `surface` | `headline-lg` title, `body-lg` excerpt, asymmetric image layout |
| 4 | **Services Overview** | `components/sections/ServicesGrid.tsx` | `surface-container-low` | Bento grid of 4–6 service cards, `title-lg` labels |
| 5 | **Portfolio Highlight** | `components/sections/PortfolioShowcase.tsx` | `surface` | 2–3 featured case studies, full-bleed images, `display-sm` overlay text |
| 6 | **Divisions Preview** | `components/sections/DivisionsPreview.tsx` | `surface-container` | Grid of 8–9 division tiles (TANGHAL, MERKATO, UGNAY, etc.) |
| 7 | **CTA Banner** | `components/sections/CTABanner.tsx` | `surface-container-highest` | `headline-md`, Gold gradient CTA, atmospheric image BG |
| 8 | **Footer** | `components/layout/Footer.tsx` | `surface-container-lowest` | Contact info, social links, copyright |

### 7.2 About Us Page (`/about/` → `app/about/page.tsx`)

| # | Section | Component Path | Key Elements |
|---|---|---|---|
| 1 | **Page Hero** | `components/sections/PageHero.tsx` | `display-md` title, `body-lg` introduction, founder portrait |
| 2 | **Our Legacy** | `components/sections/LegacyTimeline.tsx` | Timeline of milestones, `headline-sm` dates, `body-md` descriptions |
| 3 | **Team / Leadership** | `components/sections/TeamGrid.tsx` | Portrait cards on `surface-container-high`, `title-lg` names, `label-md` roles |
| 4 | **Values / Mission** | `components/sections/MissionStatement.tsx` | `headline-lg` statement, asymmetric image/text layout |

### 7.3 Services Page (`/services/` → `app/services/page.tsx`)

| # | Section | Component Path | Key Elements |
|---|---|---|---|
| 1 | **Page Hero** | `components/sections/PageHero.tsx` | `display-md` + core divisions overview |
| 2 | **Core Divisions Grid** | `components/sections/DivisionsGrid.tsx` | 9 Filipino-named divisions (TANGHAL, MERKATO, UGNAY, TIPON, DALOY, GUHIT, SIBOL, TAYO, LIKHA) |
| 3 | **Service Detail Accordions** | `components/sections/ServiceAccordions.tsx` | Expandable details per division |
| 4 | **Case Studies Preview** | `components/sections/CaseStudyCards.tsx` | 2–3 featured projects with results metrics |
| 5 | **Consultation CTA** | `components/sections/CTABanner.tsx` | Gold gradient CTA for booking |

### 7.4 Portfolio Page (`/portfolio/` → `app/portfolio/page.tsx`)

| # | Section | Component Path | Key Elements |
|---|---|---|---|
| 1 | **Page Hero** | `components/sections/PageHero.tsx` | `display-md` + portfolio intro |
| 2 | **Portfolio Ecosystem** | `components/sections/PortfolioGrid.tsx` | Masonry/bento grid of past events |
| 3 | **Case Study Detail** | `components/sections/CaseStudyDetail.tsx` | Full-width features (Moonton x DepEd, OPPO Hyper Legend), metrics, `display-sm` quotes |
| 4 | **Results & Metrics** | `components/sections/MetricsBanner.tsx` | Large stat numbers in `display-lg` Noto Serif, `label-sm` descriptors |

### 7.5 Contact Page (`/contact/` → `app/contact/page.tsx`)

| # | Section | Component Path | Key Elements |
|---|---|---|---|
| 1 | **Page Hero** | `components/sections/PageHero.tsx` | `headline-lg` + contact intro |
| 2 | **Contact Form** | `components/sections/ContactForm.tsx` | Bottom-border-only inputs, gold focus states, Gold gradient submit CTA |
| 3 | **Business Details** | `components/sections/BusinessInfo.tsx` | Address, phone, email, map embed |
| 4 | **Social Links** | `components/sections/SocialBar.tsx` | Icon-based social media links |

---

## 8. Screen Inventory (Stitch Reference)

### Home Page Variants
| Screen Title | Screen ID | Dimensions |
|---|---|---|
| Lakambini Events Agency - Home | `f2842a6182ff4d75967501560b0b6557` | 2560×11588 |
| LAKAMBINI: Sovereign Editorial Home | `026b8b5e5c1244bc897e4d8beaa19689` | 2560×11898 |
| LAKAMBINI: Home Redefined | `c39ef007755445b9951a63b555e3ce50` | 2560×10784 |
| Home: Redefined Excellence | `04a2cdde77434783b6d1c4899330eeb4` | 2560×8574 |
| Home: Sovereign Emerald | `297e9e91e6414a74a3c72f275ee3fae3` | 2560×9430 |
| Home: Updated Core Services | `a83e75a50d624120963a4dae918047b5` | 2560×10354 |
| Home: Refined Spacing & Layout | `93b6076daa354d32801ffddbb1f456d9` | 2560×8960 |

### Services / Divisions Screens
| Screen Title | Screen ID | Dimensions |
|---|---|---|
| Our Core Divisions | `94618c93697f4a23b3ed9b0f0a157d43` | 2560×10750 |
| LAKAMBINI: Our Core Divisions | `adbd3e1b19ce4169ae7e171afbeb2042` | 2560×11518 |
| Our Core Divisions: Sovereign Emerald | `713ea9f550ca41fcbbafa8b7cfcaff34` | 2560×8592 |
| Our Core Divisions: Updated Portfolio | `ebb30cb890e149b69c39c723a3541814` / `2c444b790e3446a088e31ed5df0f00b4` | 2560×9618 |

### Division Detail Pages
| Screen Title | Screen ID |
|---|---|
| TANGHAL Division Detail | `829ddf80f6b44f45a24ebab3a7f4cafe` |
| MERKATO Division Detail | `5a1b99abc3314f1d91ccf5a6d0b893fd` |
| UGNAY Division Detail | `f3ba16fb786440c1b98b9d37f3d9c5f2` |
| TIPON Division Detail | `d88b74d2121346e5a5ef5c6cbc752dc8` |
| DALOY Division Detail | `233a89ae9f234efead286f69a6b75cf6` |
| GUHIT Division Detail | `e85bd8b696f54355ba1b41e333e41bc7` |
| SIBOL Division Detail | `dbb619a4d78e443ab9eb4e5a86ed9f01` |
| TAYO Division Detail | `4af08bf674604247b521e29d5f682c82` |
| LIKHA Division Detail | `5c99afc3b80c486f8eb662d56a91cd50` |

### About / Legacy Screens
| Screen Title | Screen ID |
|---|---|
| The Lakambini Legacy | `1d1b9c061d2b4d26bfc7d72ba06c02e2` |
| LAKAMBINI: The Legacy | `a4304b75881e4870a49bfe31668b2d53` |
| The Lakambini Legacy: Sovereign Emerald | `35c9be80575b4ee394669d3848bc5cdd` |
| The Lakambini Legacy: Updated Services Context | `d94172967dc94b55ba6159a83a39afa2` / `027c890c06e74faba8ffe18922a56d20` |

### Case Study / Portfolio Screens
| Screen Title | Screen ID |
|---|---|
| Case Study: Moonton x DepEd | `4d6e0310a0724c42a8a589cdd4b3f392` |
| Case Study: Sovereign Emerald | `9112919585a54f188b60c0943e5f6ee8` |
| Case Study: Updated Services Navigation | `c052d1fe24164a7db6815de29cf96354` / `b20336162372418b917bcec78f2127f2` |
| LAKAMBINI: Our Portfolio Ecosystem | `d5db05e0390e4c4db00b486e531ff3e7` |

---

## 9. Animation & Motion Patterns

| Pattern | Property | Duration | Easing |
|---|---|---|---|
| Card image hover | `transform: scale(1.05)` | `600ms` | `ease-out` |
| Button hover | `transform: scale(1.02)` + gold glow | `300ms` | `ease-out` |
| Underline expand | `width: 0 → 100%` (from center) | `400ms` | `cubic-bezier(0.25, 0, 0, 1)` |
| Section reveal | `opacity: 0 → 1`, `translateY: 20px → 0` | `800ms` | `ease-out` (Ease-Out-Expo) |
| Page transitions | Fade + slide | `500ms` | `ease-in-out` |
| Accordion expand | `max-height` + bg-color shift | `400ms` | `ease-out` |

> **Motion Philosophy:** Transitions should be "Ease-Out-Expo" — slow and smooth — to mimic the turning of a heavy gallery page.

---

## 10. Do's and Don'ts

### ✅ Do
- **Do** use `Noto Serif` for short, punchy headlines and `Manrope` for everything else.
- **Do** lean into asymmetry. If an image is on the left, use an unusually large `padding-left: spacing-16` on the right.
- **Do** use `primary` gold (#E9C255) sparingly. It is a highlighter, not a primary fill color.
- **Do** use whitespace as a functional element. If a section feels crowded, increase to the next spacing tier.
- **Do** use Noto Serif for all numbers in data visualizations or stat displays.
- **Do** ensure transitions are slow and smooth — the gallery aesthetic.

### ❌ Don't
- **Don't** use pure black (#000000). Use `--surface-container-lowest` (#02110B) for the deepest shadows.
- **Don't** use standard 1px borders or `<hr>` dividers. It breaks the "Sovereign" immersion.
- **Don't** use Bold weight on body text. It destroys the editorial elegance.
- **Don't** use standard Material icons without thinning their stroke weight to match Manrope light.
- **Don't** use standard blue for links. All interactive triggers use `--color-primary` gold or `--on-surface`.
- **Don't** use rounded corners (`border-radius > 0`). Every element is `0px` for the architectural feel.
- **Don't** use heavy drop shadows. Use tinted emerald ambient shadows at ultra-low opacity only.
