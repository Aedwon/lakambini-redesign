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

## 🎨 Design System: Emerald Editorial

* **Source of Truth**: `specs.md` and `references/*.html`
* **Theme**: Dark-mode first. Use custom `@theme` tokens in `styles/globals.css`.
    * `primary`: Emerald Gold (`#e9c255`)
    * `surface`: Deep Emerald Green (`#051710`)
* **The "No-Line" Rule**: Avoid explicit borders. Use tonal shifts (`surface-container-low`, `surface-container-high`) and ambient shadows.
* **Typography**: Noto Serif (headlines) + Manrope (body). Use predefined utility classes like `display-lg`, `headline-md`, `body-lg` — do not inline `font-family` or ad-hoc type scales.

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
* **`public/`** — do not read, parse, or modify. Only reference paths (e.g., `/images/hero-bg.jpg`) in code.
* **`tailwind.config.{js,ts}`** — do not create this file. Tailwind v4 uses `@theme` in `globals.css`.

---

## 📝 Code Standards

* **TypeScript**: Strict mode enabled. Always define prop interfaces.
* **Components**: Use functional components with arrow functions or `default function`.
* **Images**: Always use `next/image` with appropriate `sizes` and `priority` for hero images.
* **Links**: Always use `next/link`.
* **Fonts**: Use the CSS variables (`--font-noto-serif`, `--font-manrope`) already configured in `app/layout.tsx` via `next/font/google`. Do not import fonts elsewhere.
* **Framer Motion**: Use `AnimatePresence` and `motion` components for scroll reveals. Page-level reveals are already handled by `PageWrapper.tsx` — prefer adding motion inside sections, not at the page level.

---

## 🧭 Working on This Project

When a user gives you a task, follow this loop:

1. **Locate the task** in `plan.md`. If it's not there, ask whether to add it before proceeding.
2. **Read only what you need** — the matching reference HTML, the relevant section component, `specs.md` for tokens. Do not crawl the whole tree.
3. **Build or edit** following the constraints above.
4. **Do not run a browser or take screenshots** for visual QA. The user will review on `localhost:3000` and give feedback (per `.agent/generate_ui.md`).
5. **Update `plan.md`** — mark the task ✅ complete or 🔲 partial with a note on what remains.
6. **Stop and summarize** — don't roll into the next task automatically. Let the user set the next one.

---

## 📍 Current Status (as of last update)

Phases 0–5 (Foundation → Page Assembly) are ✅ complete.
Active work is in:
* **Phase 6** (Polish): responsive breakpoint testing, per-page SEO metadata, performance optimization
* **Phase 7** (QA): visual fidelity, mobile testing, interaction audit, copy audit, accessibility

See `plan.md` for the authoritative task checklist.
