# 🏛️ Lakambini Events - Site Architecture & Routing Map

This document defines the strict directory structure for the Lakambini Events website. All agents must adhere to these paths when creating, reading, or modifying files. Do not scan directories blindly; use this map to locate files.

## 1. Routing & Pages (`/app/` or `/pages/`)
* **Purpose:** Contains the top-level page structures and routing. 
* **Rule:** Pages should focus on layout and composition. Heavy UI logic must be offloaded to components.
* **Key Paths:**
  - `page.tsx` / `index.html` (Landing Page)
  - `/about/` (Agency history, founder details)
  - `/services/` (B2B digital solutions and event packages)
  - `/portfolio/` (Past events, e.g., OPPO Hyper Legend Cup)
  - `/contact/` (Inquiry form and business details)

## 2. UI Components (`/components/`)
* **Purpose:** Reusable, modular frontend elements.
* **Rule:** Components must be strictly presentational and responsive.
* **Sub-directories:**
  - `/components/layout/` (Navigation bars, Footers, Page Wrappers)
  - `/components/ui/` (Buttons, Cards, Modals, Typography headers)
  - `/components/sections/` (Hero banners, Service grids, Trust signal/Client logo banners)

## 3. Styling & Design Tokens (`/styles/`)
* **Purpose:** Global styling rules and Stitch MCP token variables.
* **Key Paths:**
  - `globals.css` (Base resets and global font imports)
  - `theme.ts` / `tailwind.config.js` (Extracted Google Stitch tokens: hex codes, typography scales, padding values)

## 4. Static Assets (`/public/`)
* **Purpose:** Images, fonts, and graphics.
* **Rule:** Do not attempt to read or parse files in this directory. Only reference their relative paths (e.g., `/images/hero-bg.jpg`) in the frontend code.
* **Key Paths:**
  - `/public/images/`
  - `/public/icons/`

## 5. Agent Instructions (`/.agent/`)
* **Purpose:** System architecture, skills, and AI team roles.
* **Rule:** Code-generating agents (`@Frontend_Engineer`) must never modify these files.
