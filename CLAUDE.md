# CLAUDE.md — Lakambini Events Redesign

Development guidelines and standards for the Lakambini Events website.
This file is the first thing Claude Code reads in this project — keep it lean, keep it current.

---

## 📚 Reference Docs (read on demand, not upfront)

Do not preemptively read every file in the project. Consult these only when a task requires the context they hold:

| File | When to read |
|---|---|
| `.agent/architecture.md` | Before creating, moving, or renaming any file — confirms the directory map, routing rules, and tech stack |
| `.agent/agents.md` | Role definitions from the Antigravity workflow. FYI only — Claude Code does not roleplay these personas unless explicitly told to |
| `.agent/generate_ui.md` | When building or modifying UI components (acting as Frontend Engineer) |
| `.agent/write_specs.md` | When updating `plan.md` or `specs.md` (acting as Product Manager) |
| `plan.md` | Before starting any feature — shows phase-by-phase task status (✅ done, 🔲 pending) |
| `specs.md` | For design tokens, typography scale, color hex codes, copy rules, banned words |
| `references/*.html` | Source-of-truth layout prototypes. Read the matching reference file when building or editing a page |
| `lib/divisions.ts` | Division data model — read whenever working on services, division pages, or anything division-aware |

---

## 🛠 Build & Development

* **Dev Server**: `npm run dev`
* **Build**: `npm run build`
* **Linting**: `npm run lint`
* **Framework**: Next.js (App Router)
* **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/postcss`)

---

## 🎨 Design System v2: "Night Brass" (supersedes Emerald Editorial)

* **Source of Truth**: `styles/globals.css` (tokens + type utilities) and the primitives in `components/ui/` (`Button`, `SectionHeader`, `Reveal`, `GoldWave`, `Marquee`). `references/*.html` are historical only.
* **Direction**: cinematic, editorial, restrained — the frame is quiet so the (colourful, real) work is loud. Not luxury-gala, not dashboard UI.
* **Colour**: `ink` background, `ivory` text, `mist` secondary text, `brass` (#c9a45c) as the ONLY accent and used sparingly, `line` for hairlines. Legacy `surface*`/`primary` tokens are remapped aliases — use v2 names in new code.
* **Structure**: hairlines + whitespace + mono indices instead of boxed cards; full-bleed photography; `container-x` / `section-y` for layout rhythm.
* **Typography**: Instrument Serif (display/headlines, one `<em>` brass italic accent max per headline) + Geist (text) + Geist Mono (`numeral`). Use the utility classes (`display-*`, `headline-*`, `title-*`, `body-*`, `eyebrow`, `label-*`, `numeral`) — no ad-hoc font families or type scales.

---

## 📜 Constraints & Anti-Patterns (CRITICAL)

* **NO TAILWIND CONFIG**: Do NOT create `tailwind.config.js` or `tailwind.config.ts`. All variables live in `styles/globals.css` under `@theme { ... }`.
* **STATIC DIVISION ROUTES**: Do NOT use dynamic `[division]` routes for services. Division pages live at `app/services/{slug}/page.tsx` as static routes.
* **ARCHITECTURE SYNC**: Follow `.agent/architecture.md` directory map strictly. If a file doesn't fit the map, stop and ask before creating it.
* **PLAN FIRST**: Always check `plan.md` before starting a new feature to confirm alignment with the roadmap and phase status.

---

## 🚫 Do Not Modify

These files and directories are read-only from Claude Code's perspective:

* **`.agent/`** — all files. These define the workflow and are maintained manually.
* **`references/`** — all files. These are the design source of truth.
* **`public/`** — may be listed and viewed (e.g. to match photos to sections) and new assets added; do not delete or overwrite existing assets without asking.
* **`tailwind.config.{js,ts}`** — do not create this file. Tailwind v4 uses `@theme` in `globals.css`.

---

## 📝 Code Standards

* **TypeScript**: Strict mode enabled. Always define prop interfaces.
* **Components**: Use functional components with arrow functions or `default function`.
* **Images**: Always use `next/image` with appropriate `sizes` and `priority` for hero images.
* **Links**: Always use `next/link`.
* **Fonts**: Use the CSS variables (`--font-instrument-serif`, `--font-geist`, `--font-geist-mono`) configured in `app/layout.tsx` via `next/font/google`. Do not import fonts elsewhere.
* **Motion**: Use `components/ui/Reveal.tsx` for scroll reveals inside sections; everything must respect `prefers-reduced-motion`.
* **Media**: Real event photos live in `public/images/events/`, videos in `public/video/` (hero reel ≈3 MB; company film loads on click only). Never use stock or fabricated imagery for real projects.

---

## 🧭 Working on This Project

When a user gives you a task, follow this loop:

1. **Locate the task** in `plan.md`. If it's not there, ask whether to add it before proceeding.
2. **Read only what you need** — the matching reference HTML, the relevant section component, `specs.md` for tokens. Do not crawl the whole tree.
3. **Build or edit** following the constraints above.
4. **Visual QA with a headless browser is allowed** (Playwright screenshots at 1440px and 390px). The user still gives final feedback on the Vercel preview or `localhost:3000`.
5. **Update `plan.md`** — mark the task ✅ complete or 🔲 partial with a note on what remains.
6. **Stop and summarize** — don't roll into the next task automatically. Let the user set the next one.

---

## 📍 Current Status (as of last update)

Phases 0–5 (Foundation → Page Assembly) are ✅ complete.
Active work is in:
* **Phase 6** (Polish): responsive breakpoint testing, per-page SEO metadata, performance optimization
* **Phase 7** (QA): visual fidelity, mobile testing, interaction audit, copy audit, accessibility
* **Phase 9** (Trust & Refinement): no fabricated claims, case studies, real photography ✅
* **Phase 10** (Design System v2 "Night Brass"): cinematic rebuild — new tokens/type, video hero, shared division template

See `plan.md` for the authoritative task checklist.
