# Archive Image Brief — Lakambini Events Website

A map of every placeholder image on the redesigned site, with a plain-language description of the ideal archive shot to replace it. Use this when sifting through past event photography so the site feels like our work, not stock.

**Conventions in this doc**
- **Location** = file and line number. `file.tsx:L10` means open that line in the editor and you'll find the image.
- **Ratio** = native frame the image is rendered in. Match or crop to this so nothing important lives near the edges.
- **Mood** = the dark-mode editorial tone the site uses. Favor deep shadows, golden/amber highlights, and images that hold up when a dark gradient is laid over the bottom third.
- Darkish or low-light photos work best overall. Bright daytime shots tend to clash with the emerald/gold palette unless heavily color-graded.

---

## 1. Homepage (`/`)

### 1.1 Hero — full-bleed background
- **Location:** `components/sections/Hero.tsx:L9`
- **Ratio:** ultra-wide, renders 100vw min-screen-height. Ideal native: 16:9 or wider, minimum 2000px wide.
- **Subject:** our single best **wide-angle "moment" shot** of a live event in full swing. Think packed audience lit from the stage, or the back of a stage looking out at a crowd drenched in color. Needs to read as "big production" from across the room.
- **Mood:** dark surroundings, strong directional stage lighting, one dominant warm/gold accent if possible. Text sits bottom-left on top of a dark gradient — leave the bottom third relatively uncluttered.
- **Candidates to hunt for:** Wanderland Main Stage crowd, Hyper Legend Cup arena wide, Vivo × Manila Music Fest crowd shot, any concert wide-shot where the audience reaches the horizon line.

### 1.2 Editorial Gallery — triptych
Section headline: *"Moments That Define Us — A visual journey through a decade of production."*

- **1.2a Main editorial image (large left)** — `components/sections/EditorialGallery.tsx:L20`
  - Ratio: ~3:2 landscape, large (captioned with "Precision in every detail").
  - Subject: a **polished craftsmanship detail shot** — a perfectly set gala table, a close-up of a floral centerpiece under warm light, a backstage monitor wall, or a rigging truss being readied before doors open. Something that visually says "we sweat the details."
- **1.2b Top-right small tile** — `EditorialGallery.tsx:L38`
  - Ratio: square-ish portrait, renders at ~60% opacity.
  - Subject: **secondary event detail / atmosphere**. Works best as a moody texture shot — stage lights from above, a chandelier, an LED wall abstract, etc.
- **1.2c Bottom-right "12+ Years" tile background** — `EditorialGallery.tsx:L47`
  - Ratio: square, sits behind the "12+ Years of Heritage" callout at ~20% opacity.
  - Subject: **the team at work** — production crew mid-setup, a planner with a clipboard, a director of photography behind a camera rig. Low contrast, dark, any era of the company's history (older photos are great here — it's about heritage).

### 1.3 Services Grid — four division bento cards
Headline: *"Everything you need, under one roof."* These are the four flagship divisions on the homepage. Each image sits at ~50% opacity with a dark gradient on top, so shots need to be visually strong and read clearly even when darkened.

- **1.3a TANGHAL — Live Entertainment** — `components/sections/ServicesGrid.tsx:L10`
  - Ratio: tall 7/12 column (portrait-ish). Subject: **a performer on stage, mid-moment** — spotlight, arms raised, guitar silhouette, or a festival stage shot from the pit with one artist centered.
- **1.3b LIKHA — Multimedia Production** — `ServicesGrid.tsx:L17`
  - Ratio: ~16:10 landscape. Subject: **a production set** — cameras/jibs in action, an operator at a switcher, a color grading station, or a lit set during filming.
- **1.3c MERKATO — Experiential Marketing** — `ServicesGrid.tsx:L24`
  - Ratio: ~16:10 landscape. Subject: **a pop-up or street activation** — a branded kiosk with customers interacting, a sampling table, a mall booth with foot traffic.
- **1.3d TAYO — Experiential Architecture** — `ServicesGrid.tsx:L31`
  - Ratio: ultra-wide (full-width bottom card). Subject: **a large-scale build we made** — a custom stage from an angle that shows scale, a themed booth, or an installation at night with its lighting on.

### 1.4 About Preview — portrait
- **Location:** `components/sections/AboutPreview.tsx:L12`
- **Ratio:** 3:4 portrait.
- **Subject:** a **group shot of the core team** or a representative "people at work" photo. Rendered with a subtle grayscale treatment, so composition matters more than color. Editorial feel — not a stiff corporate headshot, more a candid-but-composed moment backstage, in an office, or on-site.

### 1.5 Portfolio Showcase — featured + two secondary
Three real projects. If you already have hero assets for these specific jobs, use them; if not, follow the fallback guidance.

- **1.5a Hyper Legend Cup Season 4** — `components/sections/PortfolioShowcase.tsx:L10`
  - Ratio: ultra-wide (21:9) for the featured full-width card.
  - Subject: **the Moonton esports tournament** — wide shot of the arena mid-match with the casters' desk, LED wall, and crowd visible, or a dramatic hero crowd shot.
- **1.5b Alorica Leadership Summit 2025** — `PortfolioShowcase.tsx:L17`
  - Ratio: 16:10.
  - Subject: **the Alorica corporate summit** — keynote stage from the audience, a branded step-and-repeat, or executives in conversation. Polished, professional, warm-lit.
- **1.5c Vivo × Manila Music Festival** — `PortfolioShowcase.tsx:L24`
  - Ratio: 16:10.
  - Subject: **the Vivo branded festival moment** — Vivo signage at the festival, a brand activation booth, or a crowd shot with Vivo branding visible.

### 1.6 Tech Highlight (Daloy) — side image
- **Location:** `components/sections/TechHighlight.tsx:L44`
- **Ratio:** tall, fills right half of a 2-column feature.
- **Subject:** **custom event tech in action** — a check-in tablet/kiosk at an event entrance, an attendee scanning a QR code, a backstage producer with a laptop, or an on-site analytics dashboard on a screen. Has to feel like tech *at an event*, not office/stock tech.

### 1.7 CTA Banner — ambient background
- **Location:** `components/sections/CTABanner.tsx:L17` (default background, used across multiple pages as closer)
- **Ratio:** wide, full-bleed. Rendered at ~10% opacity behind the CTA text.
- **Subject:** an **atmospheric wide shot** — empty-but-ready ballroom, a stage before doors, the quiet moment before the event starts. Should feel like anticipation. Needs to hold up when almost entirely dark.

---

## 2. About Page (`/about`)

### 2.1 About Hero — decade-of-experience portrait image
- **Location:** `components/sections/AboutHero.tsx:L28`
- **Ratio:** tall (3:5 ~ 2:3), sits in right column next to "The Lakambini Legacy" headline.
- **Subject:** a **signature luxury event moment** we're proud of — a wide-angle of a gala we produced, a candid of a full ballroom, or a hero shot from an iconic past project. This is the "what we are" image of the whole About page.

### 2.2 Founder Story — Anchie Rosas portrait
- **Location:** `components/sections/FounderStory.tsx:L13`
- **Ratio:** 4:5 portrait.
- **Subject:** **a real portrait of Anchie Rosas** (Founder, CEO, Creative Director). Editorial tone — direct gaze or three-quarter profile, warm/moody lighting, can be on-site at an event, in the studio, or a clean environmental portrait. This is the most important headshot on the whole site.

### 2.3 Approach — three value cards
Three horizontal cards behind translucent overlays. Shots are rendered at 10–30% opacity, so they serve as *atmosphere*, not centerpieces.

- **2.3a "End-to-End Execution"** — `components/sections/Approach.tsx:L9`
  - Subject: **planning/coordination in action** — a production schedule on a monitor, a project manager mid-briefing, a run-sheet on a clipboard, headsets and radios on a table.
- **2.3b "One Point of Contact" (elevated, "Core" card)** — `Approach.tsx:L16`
  - Subject: **a team huddle or client meeting** — our people talking to a client on-site, a producer on the phone during a live event, a director giving instructions. The photo needs to imply *direct human accountability*.
- **2.3c "Proven Track Record"** — `Approach.tsx:L22`
  - Subject: **a finished, packed event** — crowd from the stage, full house from the back of the room, a confetti drop, a successful "we pulled it off" moment.

---

## 3. Portfolio Page (`/portfolio`)

### 3.1 Portfolio hero — page banner
- **Location:** `app/portfolio/page.tsx:L26`
- **Ratio:** wide, full-bleed.
- **Subject:** same kind of energy as the homepage hero — a **crowd + lights wide shot** that feels like an archive cover image. Text overlay is "Work We've Delivered."

### 3.2 Portfolio Grid — 9 project cards
These populate the filterable grid. If we have the real photo of the actual job, use that; otherwise the fallback is the generic division-appropriate shot.

- **3.2a Hyper Legend Cup Season 4 (TANGHAL)** — `lib/portfolioData.ts:L16`
  - Real: **the Moonton esports tournament we produced** — hero angle of the arena, LED wall + crowd, or stage with casters.
- **3.2b Alorica Leadership Summit 2025 (SIBOL)** — `portfolioData.ts:L24`
  - Real: **the Alorica summit** — a keynote moment, branded stage, executive panel shot, or delegates in session.
- **3.2c Vivo × Manila Music Festival (MERKATO)** — `portfolioData.ts:L31`
  - Real: **Vivo activation at Manila Music Fest** — brand booth with users, product demo, or the Vivo zone at the festival.
- **3.2d Globe Telecom Product Launch (TIPON)** — `portfolioData.ts:L39`
  - Real: **the Globe launch event** — product reveal moment, stage with presenter, press/media coverage angle, or the venue wide shot.
- **3.2e Lakambini Brand Identity 2024 (GUHIT)** — `portfolioData.ts:L46`
  - Real: **our 2024 brand work** — mockups, printed collateral laid out flat, logo on signage, or the brand guidelines document opened on a desk. This one is graphic-design-centric, not event-centric.
- **3.2f Moonton × DepEd Esports Program (LIKHA)** — `portfolioData.ts:L53`
  - Real: **the video production for the DepEd initiative** — a BTS shot on set, a camera op filming students, a video still from the deliverable, or classroom-meets-esports imagery.
- **3.2g ABS-CBN Community Caravan (UGNAY)** — `portfolioData.ts:L61`
  - Real: **the caravan at a regional stop** — the crowd engaging with the activation, the branded truck/vehicle, staff interacting with community members.
- **3.2h GCash Event Check-In Platform (DALOY)** — `portfolioData.ts:L68`
  - Real: **the check-in platform in use** — attendees at a registration desk with the tablets/kiosks we built, a screen showing the check-in UI, a QR badge scan moment.
- **3.2i Wanderland Music Fest Main Stage (TAYO)** — `portfolioData.ts:L75`
  - Real: **the main stage we designed & built** — the stage lit at night with crowd, a daytime build/structure shot, or an architectural angle of the stage alone.

---

## 4. Services Overview Page (`/services` — Divisions Editorial)

This is the big nine-division scroll. Each division gets one primary editorial image plus some get secondary tiles. If available, these should be **the division's best portfolio moment** — same visual family as the division hero, but different angles from the same project are fine.

- **4.1 01 TANGHAL (Live Entertainment)** — `components/sections/DivisionsEditorial.tsx:L13`
  - Ratio: 16:9. Subject: **concert or live stage in peak moment** — performer center, crowd silhouetted, warm stage lighting.
- **4.2 02 LIKHA (Multimedia Production)** — `DivisionsEditorial.tsx:L67`
  - Ratio: 16:9. Subject: **a production studio or set** — camera on a jib, lighting grid visible, or a color-grading suite with monitors glowing in the dark.
- **4.3 03 MERKATO (Experiential Marketing)** — `DivisionsEditorial.tsx:L101`
  - Ratio: 16:9. Subject: **a pop-up or sampling activation** with actual people engaging — crowd at a branded booth, brand ambassador handing something out.
- **4.4 04 TIPON (Event Production & Management)** — `DivisionsEditorial.tsx:L131`
  - Ratio: 16:9. Subject: **a corporate gathering or trade show** — the floor full of attendees, a keynote shot from the back of the room, booth rows.
- **4.5 05 SIBOL (Learning & Development)** — `DivisionsEditorial.tsx:L148`
  - Ratio: 3:2, rendered grayscale by default (so composition > color). Subject: **a workshop in progress** — a speaker with a whiteboard, breakout group conversation, participants at round tables.
- **4.6 06 GUHIT (Design & Visual Identity)** — `DivisionsEditorial.tsx:L203`
  - Ratio: 3:2, grayscale. Subject: **physical design deliverables on dark paper** — brand guidelines printout, business cards, a moodboard, pantone chips, or a designer's desk overhead shot.
- **4.7 07 UGNAY (Community Management & Growth)** — `DivisionsEditorial.tsx:L240`
  - Ratio: 1:1 square, grayscale. Subject: **people engaging / a community moment** — hands holding phones at an event, a crowd cheering together, a Discord screenshot mocked up on a phone in-hand.
- **4.8 08 DALOY (Technology & Development)** — `DivisionsEditorial.tsx:L272`
  - Ratio: 1:1 square, grayscale. Subject: **event tech / code on screen** — a MacBook with our app on it at an event registration desk, a kiosk's UI, or a dashboard on a big screen.
- **4.9 09 TAYO (Experiential Architecture)** — `DivisionsEditorial.tsx:L304`
  - Ratio: 1:1 square, grayscale, with marble texture overlay. Subject: **a custom fabrication we made** — a sculptural stage detail, a booth under construction, or a finished installation at night.

---

## 5. Division Hero Banners (`lib/divisions.ts`)

Each of the 9 individual division pages uses a `heroImage` shown in the right column next to the division name in **4:5 portrait** (aspect-[4/5]), max ~400px wide. Pick the single *strongest vertical* shot we have per division.

- **5.1 TANGHAL** — `lib/divisions.ts:L22` → Live concert vertical: performer lit on stage with crowd silhouette, or a singer mid-performance shot from the pit.
- **5.2 LIKHA** — `L33` → A vertical multimedia still: a DP on camera, a video monitor in a dark bay, or a dramatic "on set" shot.
- **5.3 MERKATO** — `L44` → A vertical pop-up / activation moment — person engaging with a branded display.
- **5.4 TIPON** — `L55` → A vertical corporate event shot — a branded stage or a speaker at a lectern under warm spot lights.
- **5.5 SIBOL** — `L66` → A vertical workshop/training moment — facilitator presenting, or a participant mid-exercise.
- **5.6 GUHIT** — `L77` → A vertical design artifact — hands holding a printed piece, a design studio workspace vertical, or a mockup on a dark surface.
- **5.7 UGNAY** — `L88` → A vertical "community" shot — people connecting at an event, or hands on phones.
- **5.8 DALOY** — `L99` → A vertical tech-at-event shot — tablet check-in, a dark screen glow, a developer's workstation.
- **5.9 TAYO** — `L110` → A vertical architectural/fabrication shot — stage structure from below, a tall booth wall detail, an installation piece.

---

## 6. Individual Division Pages — deep-dive imagery

Each division page has 2–6 additional images inside its deep-dive sections. These are supporting editorial photos; if we don't have specifically labeled assets, pick from the same project family as the division hero.

### 6.1 TANGHAL (`/services/tanghal`)
- **6.1a Live Concerts & Festivals** — `app/services/tanghal/page.tsx:L34` — Ratio 4:3. **Festival crowd with lights**, or wide stage shot with audience.
- **6.1b Solo Artist Performances** — `tanghal/page.tsx:L60` — Ratio wide bento. **A single performer under a spotlight** — intimate, dark, one warm light source.
- **6.1c Virtual Concerts** — `tanghal/page.tsx:L93` — Ratio wide bento. **A livestream production setup** — multi-camera rig, an artist performing to cameras, or a control room shot.
- **6.1d Talent Management** — `tanghal/page.tsx:L142` — Ratio 3:4 portrait. **Backstage with an artist** — green room candid, artist + manager, or artist walking to stage.

### 6.2 LIKHA (`/services/likha`)
- **6.2a Event Video Coverage** — `app/services/likha/page.tsx:L43` — Ratio 4:3. **A video crew on-site at an event** — camera operator shooting a speaker, gimbal op in action.
- **6.2b Music Video Production** — `likha/page.tsx:L60` — Ratio wide bento. **Behind-the-scenes on a music video set** — lighting rig, director's monitor, performer with camera crew.
- **6.2c Motion Graphic Design** — `likha/page.tsx:L99` — Ratio wide bento. **A motion designer's workstation or screen** — After Effects timeline, graphics on a monitor, animated elements mid-edit.

### 6.3 MERKATO (`/services/merkato`)
- **6.3a Pop-Up Shops** — `app/services/merkato/page.tsx:L34` — Ratio 4:5 portrait. **A pop-up storefront or container shop** — customers entering, branded facade at dusk, or interior detail.

### 6.4 TIPON (`/services/tipon`)
- **6.4a Trade Shows & Exhibits** — `app/services/tipon/page.tsx:L37` — Wide bento. **A trade show booth in use** — visitors at the booth, product display, our booth design at a real expo.
- **6.4b Fairs** — `tipon/page.tsx:L70` — Small bento. **A fair / market activation** — lit stalls at night, crowd walking through, food/artisanal fair tone.
- **6.4c Outdoor Festivals (Large Scale)** — `tipon/page.tsx:L119` — 4:3 landscape. **A wide shot of an outdoor festival we produced** — stage + crowd at golden hour or night.
- **6.4d Fun Runs** — `tipon/page.tsx:L135` — 16:9 video aspect. **The starting line or finish gate of a fun run we produced** — runners, branded arch, early-morning light.
- **6.4e Corporate Events** — `tipon/page.tsx:L151` — 16:9. **A polished corporate party** — a year-end gathering, a client appreciation night, wine glasses and warm lighting.

### 6.5 SIBOL (`/services/sibol`)
- **6.5a Team Building** — `app/services/sibol/page.tsx:L100` — Ratio 4:5 portrait. **An offsite team-building moment** — people solving a hands-on challenge together, outdoors or indoor, candid.
- **6.5b Executive Conferences** — `sibol/page.tsx:L138` — 16:9, grayscale by default. **A conference keynote** — speaker on stage, audience in foreground, press lights.

### 6.6 GUHIT (`/services/guhit`)
- **6.6a Brand Guidelines (ultra-wide feature)** — `app/services/guhit/page.tsx:L49` — 21:9. **Dramatic branding/typography shot** — a beautiful lettering detail, a brand book spread, a logomark mounted on a wall.
- **6.6b Editorial Layouts** — `guhit/page.tsx:L74` — Wide bento. **Print design in the wild** — an annual report opened, a magazine-style layout on a desk.
- **6.6c Custom Illustration** — `guhit/page.tsx:L91` — Small bento, grayscale. **An illustrator's desk or an illustration piece** — hand-drawn artwork, a stylus on a tablet, or a finished illustration close-up.
- **6.6d Systematic Precision (pure image tile)** — `guhit/page.tsx:L115` — Wide, no caption on top. **A design system or pattern grid** — a Figma screen of components, a color palette laid out, or a typography scale poster.
- **6.6e OOH & Billboard Design** — `guhit/page.tsx:L135` — 4:3. **An actual billboard / OOH piece** we designed, photographed in its environment.
- **6.6f Color Grading & Correction** — `guhit/page.tsx:L159` — 4:3. **A color grading workstation** — DaVinci Resolve on screen, a pro-grade color panel, warm studio light.

### 6.7 UGNAY (`/services/ugnay`)
- **6.7a Grassroots Engagement** — `app/services/ugnay/page.tsx:L52` — 4:3. **A community-level activation** — people at a local event, an influencer meet-up, a grassroots moment with real humans.
- **6.7b Channel Moderation** — `ugnay/page.tsx:L73` — Tall, grayscale. **A dark-mode screen with a Discord/community UI**, or a moderator's workstation in a dim room.
- **6.7c Community Management (wide)** — `ugnay/page.tsx:L95` — Wide bento. **A community manager at work** or a live Q&A/meet-up shot with the audience.
- **6.7d Influencer Seeding** — `ugnay/page.tsx:L123` — 16:9, grayscale. **A creator recording content** — phone on tripod, ring light, influencer setup.
- **6.7e Localized Rollouts** — `ugnay/page.tsx:L143` — 16:9, grayscale. **A regional/cultural-specific activation** — local cultural elements visible, signage in Filipino, a provincial venue.

### 6.8 DALOY (`/services/daloy`)
- **6.8a Custom Web & Mobile App Development** — `app/services/daloy/page.tsx:L37` — Wide bento. **Our apps in use at an event** — laptop or tablet running a Lakambini-built UI, staff working with the platform.
- **6.8b Real-Time Analytics Dashboards** — `daloy/page.tsx:L70` — Small bento, grayscale. **A dashboard on a screen** — charts, metrics, an operations center vibe.
- **6.8c Automated Workflows** — `daloy/page.tsx:L102` — 4:3. **An operations / control-room moment** — screens with data, a producer at a laptop, infrastructure cabling, a server rack with blue/amber lights.

### 6.9 TAYO (`/services/tayo`)
- **6.9a Stage Design & Fabrication** — `app/services/tayo/page.tsx:L46` — 16:10, grayscale. **A stage build or a finished stage shot from an angle that shows engineering** — scaffolding during build, or an architectural view of the finished structure.
- **6.9b The Sensory Room** — `tayo/page.tsx:L67` — Wide bento. **An immersive dark room we built** — LED walls, atmospheric fog, controlled lighting. Must feel *environmental*, not just decorated.
- **6.9c Custom Event Booths & Kiosks** — `tayo/page.tsx:L112` — 4:3. **A finished booth from our portfolio** — a modular build photographed at an event, with the brand signage visible.
- **6.9d Spatial Planning** — `tayo/page.tsx:L147` — 3:2, grayscale. **A floor plan / blueprint / schematic** on a desk or monitor, or an overhead shot of a venue layout drawn on paper.
- **6.9e Large-Scale Installation Art** — `tayo/page.tsx:L163` — 3:2, grayscale. **A photogenic art installation we built** — guests taking photos of it, a sculptural piece at night.

---

## 7. Not-image placeholders (FYI only — no photo needed)

These came up in the audit but aren't image slots:

- **`components/sections/TrustBar.tsx`** — text-only client list (MOONTON, ALORICA, OPPO, REALME, INFINIX). If we want these to become real logo files later, we'll need transparent-background PNG/SVG logos with light/gold treatment — but right now it's type, not images.
- **`components/layout/Navbar.tsx` + `Footer.tsx`** — both use `/images/Lakambini Logo Gold Horizontal.png` which is already the real logo.
- **Form placeholder text** in `InputField.tsx`, `ContactForm.tsx`, `Footer.tsx` email signup — these are HTML form placeholders, not images.

---

## 8. How to use this doc

1. Take each section above and pull candidates from our archive drive.
2. Drop the replacements into `public/images/` (e.g. `public/images/hero-homepage.jpg`, `public/images/tanghal-hero.jpg`).
3. Swap the remote URL in the referenced line with the new local path: `/images/your-filename.jpg`.
4. If a shot is a one-of-a-kind hero, save a 2000px-wide version minimum. For smaller tiles, 1200–1600px is fine.
5. When in doubt, favor **dark, editorial, warm-lit, one strong focal point**. If it looks like stock, it will look like stock on the site too.
