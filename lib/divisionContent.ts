/**
 * Editorial content for each division page, rendered by
 * components/sections/DivisionPage.tsx. Core facts (name, subtitle, CTA)
 * live in lib/divisions.ts; related projects come from lib/portfolioData.ts.
 */

export interface DivisionCapability {
  title: string;
  description: string;
}

export interface DivisionImage {
  src: string;
  alt: string;
  caption: string;
}

export interface DivisionContent {
  intro: string;
  capabilities: DivisionCapability[];
  /** Company statement only, never attributed to a person. */
  pullQuote?: string;
  /** Real project photography only. Shown after the hero. */
  images: DivisionImage[];
}

const E = "/images/events";

export const divisionContent: Record<string, DivisionContent> = {
  tanghal: {
    intro:
      "From solo acoustic sets to outdoor festivals: staging, sound, lighting, artist coordination and run-of-show, handled by one team.",
    capabilities: [
      { title: "Live concerts & festivals", description: "Staging, sound, lighting, artist coordination and on-the-day production management." },
      { title: "Solo artist performances", description: "Intimate stage setups built around a single performer, from sound design to lighting cues." },
      { title: "Band & ensemble shows", description: "Multi-channel sound, coordinated lighting and clean transitions between acts." },
      { title: "Music festivals", description: "Multi-stage production covering vendors, crowd flow, artist scheduling and safety logistics." },
      { title: "Virtual concerts", description: "Multi-camera livestreams with real-time mixing and audience interaction tools." },
      { title: "Talent management", description: "Booking, scheduling, contracts, riders, tour logistics and an on-site artist liaison." },
    ],
    pullQuote: "Plan upfront, execute cleanly on the day, and give the audience a show they will remember.",
    images: [
      { src: `${E}/mcc-s2-finalists-stage.jpg`, alt: "Finalist teams on the MCC Season 2 championship stage", caption: "Finalists on stage, MLBB Collegiate Cup Season 2" },
      { src: `${E}/mcc-s2-hosts.jpg`, alt: "Hosts on stage at the MCC Season 2 finals", caption: "Hosts, MCC Season 2 finals" },
      { src: `${E}/pamigay-caravan-hosts.jpg`, alt: "Event hosts at the MLBB Pamigay Caravan", caption: "Hosts, MLBB Pamigay Caravan" },
    ],
  },

  likha: {
    intro:
      "Multi-camera coverage, music videos, motion graphics and sound, shot and finished by one in-house crew used to live, high-pressure environments.",
    capabilities: [
      { title: "Event video coverage", description: "Multi-camera crews that capture every key moment without getting in the way." },
      { title: "Music video production", description: "Art direction, location scouting, cinematography and post, from pre-production to delivery." },
      { title: "Video editing", description: "Pacing and storytelling, from a 30-second social cut to a 10-minute brand film." },
      { title: "Motion graphics", description: "Animated titles, social content and brand animation across digital channels." },
      { title: "Sound design", description: "Audio mixing, sound effects, voiceover recording and spatial audio." },
      { title: "Color grading", description: "A consistent look across multi-camera shoots that sets the tone for your brand." },
      { title: "Visual effects", description: "Compositing, cleanup and enhancements that blend with live footage." },
      { title: "Mastering & delivery", description: "Final output prepared for cinema, broadcast, web and social." },
    ],
    pullQuote: "Subtle and effective: the audience should not notice the work.",
    images: [
      { src: `${E}/mcc-s2-finals-lineup.jpg`, alt: "Finalist teams lined up on stage at the MCC Season 2 finals", caption: "Finals line-up, MLBB Collegiate Cup Season 2" },
      { src: `${E}/mcc-s2-crowd-ledwall.jpg`, alt: "Crowd facing the LED wall at the MCC Season 2 finals", caption: "LED wall and crowd, MCC Season 2" },
    ],
  },

  merkato: {
    intro:
      "Product sampling, pop-ups, street teams and guerrilla campaigns: direct-to-consumer marketing planned carefully and run by trained brand ambassadors.",
    capabilities: [
      { title: "Pop-up shops", description: "Concept, design, build-out and staffing, from modular container setups to full storefront takeovers." },
      { title: "Product sampling", description: "Targeted programs with logistics, staffing and reporting handled for you." },
      { title: "In-store demonstrations", description: "Hands-on, face-to-face demos in retail by trained brand ambassadors." },
      { title: "Street teams", description: "Ambassadors chosen for energy and brand fit, deployed in high-traffic areas." },
      { title: "Guerrilla marketing", description: "Public-space activations planned with the right approvals for visibility and shareability." },
      { title: "Affiliate marketing", description: "Partnerships with networks and creators, identified, vetted and managed against your positioning." },
      { title: "Branded swag & merchandising", description: "Design and production of giveaways and limited runs that people want to keep." },
    ],
    pullQuote: "Pop-ups work because they are finite, so we give your audience a reason to show up now, not later.",
    images: [
      { src: `${E}/mlbb-milo-handprint-wall.jpg`, alt: "MLBB x Milo booth with a handprint wall", caption: "MLBB x Milo booth, handprint wall" },
      { src: `${E}/mlbb-naruto-booth-interior.jpg`, alt: "Inside a fabricated MLBB x Naruto activation booth", caption: "Inside the MLBB x Naruto activation booth" },
    ],
  },

  tipon: {
    intro:
      "Trade shows, conventions, mall activations, fairs and outdoor festivals, with logistics covered from load-in to strike.",
    capabilities: [
      { title: "Trade shows & exhibits", description: "Booth design, build-out, staffing and lead capture that stand out on the floor." },
      { title: "Conventions", description: "Crowd flow, programming schedules, speaker coordination and vendor operations." },
      { title: "Mall activations", description: "Immersive setups in high-traffic malls that turn passersby into participants." },
      { title: "Fairs", description: "Indoor and outdoor fairs, from markets to community festivals, run on schedule." },
      { title: "Outdoor festivals", description: "Weather contingencies, power, crowd management, sanitation and multi-zone layouts." },
      { title: "Fun runs", description: "Race-day experiences from kit design and route planning to branded archways and finish lines." },
      { title: "Corporate & social events", description: "Team socials, year-end parties and client appreciation events at public-facing standards." },
      { title: "Outreach programs", description: "Well-organized, dignified community engagement that links brand values to impact." },
    ],
    pullQuote: "The best event logistics are the ones nobody notices.",
    images: [
      { src: `${E}/pamigay-caravan-stage.jpg`, alt: "Main stage at the MLBB Pamigay Caravan", caption: "Main stage, MLBB Pamigay Caravan" },
      { src: `${E}/pamigay-caravan-crowd.jpg`, alt: "Crowd at the MLBB Pamigay Caravan", caption: "Crowd, MLBB Pamigay Caravan" },
      { src: `${E}/mlbb-naruto-booth-build.jpg`, alt: "Fabricated MLBB x Naruto booths at a convention", caption: "MLBB x Naruto booths on the convention floor" },
    ],
  },

  sibol: {
    intro:
      "Corporate workshops, trainings, team building and conferences, designed around your organization's actual challenges rather than generic frameworks.",
    capabilities: [
      { title: "Strategic leadership", description: "An intensive for senior leaders on decision-making, organizational design and long-term planning." },
      { title: "Communication & presence", description: "Workshops on writing, presenting and leading conversations that drive alignment." },
      { title: "Culture building", description: "Frameworks for team cultures people want to stay in, with autonomy and alignment." },
      { title: "Interactive workshops", description: "Mental agility, emotional intelligence, innovation sprints and feedback frameworks." },
      { title: "Team building", description: "Outdoor experiences, collaborative workshops and wellness programs that strengthen teams." },
      { title: "Executive conferences", description: "Speaker and panel management, venue sourcing, guest logistics and post-event reporting." },
      { title: "Corporate trainings", description: "Modules on diversity, equity and inclusion, operational efficiency, crisis management and organizational design." },
    ],
    pullQuote: "Team building that works: programs that strengthen team dynamics, not trust falls and icebreakers.",
    images: [
      { src: `${E}/team-building-ball.jpg`, alt: "Team-building game run by the Lakambini crew", caption: "Team-building game, run by the Lakambini crew" },
      { src: `${E}/team-building-facilitator.jpg`, alt: "Facilitator leading a corporate team-building session", caption: "Facilitator at a corporate team-building session" },
    ],
  },

  guhit: {
    intro:
      "Brand systems, logos, print and out-of-home design, built to look the same everywhere.",
    capabilities: [
      { title: "Branding guidelines", description: "Colors, typography, spacing and usage rules that keep a brand consistent." },
      { title: "Logo creation", description: "Marks that work from app icons to building signage, built on a clear visual rationale." },
      { title: "Editorial layouts", description: "Annual reports, event programs, pitch decks and marketing collateral." },
      { title: "Custom illustration", description: "Character design, iconography and editorial artwork beyond stock photography." },
      { title: "Design systems", description: "Component libraries and template frameworks for consistent output across teams and campaigns." },
      { title: "OOH & billboard design", description: "Large format, high contrast and instant readability, planned for where it will live." },
      { title: "Color grading & correction", description: "Consistent color treatment across photo and video assets." },
    ],
    pullQuote: "A brand without rules is a brand without consistency.",
    images: [
      { src: `${E}/allstar-2025-banners.jpg`, alt: "Branded banners and backdrops at the MLBB All Star 2025 installation", caption: "Banners and backdrops, MLBB All Star 2025" },
      { src: `${E}/pamigay-caravan-arch.jpg`, alt: "Branded entrance arch at the MLBB Pamigay Caravan", caption: "Branded entrance arch, MLBB Pamigay Caravan" },
      { src: `${E}/allstar-2025-standee.jpg`, alt: "Branded standee from the MLBB All Star 2025 installation", caption: "Standee, MLBB All Star 2025" },
    ],
  },

  ugnay: {
    intro:
      "Daily community management, grassroots programs and influencer partnerships that build real relationships rather than algorithmic shortcuts.",
    capabilities: [
      { title: "Organic foundations", description: "Local relevance, cultural authenticity and relationships that compound over time." },
      { title: "Loyalty programs", description: "Retention frameworks that recognize your earliest and most engaged members." },
      { title: "Channel moderation", description: "Ongoing moderation across Discord, Facebook Groups, Slack and custom platforms." },
      { title: "Community management", description: "Daily engagement that feels human: responding, facilitating, flagging issues." },
      { title: "KOL seeding", description: "Creators whose audience, values and style match your brand, briefed and measured." },
      { title: "Localized rollouts", description: "Cultural context mapping, regional influencer alignment and localized content strategy." },
    ],
    pullQuote: "No spray-and-pray. Every partnership is planned, briefed and measured.",
    images: [
      { src: `${E}/m6-kol-community.jpg`, alt: "Content creators and community at an M6 watch party cafe", caption: "Creators and community, M6 watch party" },
      { src: `${E}/m6-watchfest-screen.jpg`, alt: "Fans at the M6 World Championship mall watch party", caption: "Fans at the M6 World Championship mall watch party" },
      { src: `${E}/pamigay-caravan-students.jpg`, alt: "Students at the MLBB Pamigay Caravan", caption: "Students, MLBB Pamigay Caravan" },
    ],
  },

  daloy: {
    intro:
      "Web and mobile development, custom software and workflow automation, including Discord tournament bots and an event survey kiosk built in-house for real events.",
    capabilities: [
      { title: "Web & mobile apps", description: "Full-stack builds, from business platforms to event-day applications." },
      { title: "Custom software", description: "Purpose-built tools made around how your team or event actually runs." },
      { title: "Workflow automation", description: "Verification, ticketing, announcements and reminders handled automatically." },
      { title: "Analytics dashboards", description: "Entry counts, exports and admin views for the data an event collects." },
      { title: "Interactive kiosks", description: "Full-screen touch experiences in locked kiosk mode for activations." },
    ],
    images: [],
  },

  tayo: {
    intro:
      "We design and build stages, booths and installations from scratch, engineered for safety, visual impact and practical load-in.",
    capabilities: [
      { title: "Stage design & fabrication", description: "From compact activation stages to championship sets, built for safety and a fast load-in." },
      { title: "Themed environments", description: "Immersive builds that turn a mall corner or venue into a world fans want to walk into." },
      { title: "Custom booths & kiosks", description: "Modular systems for rapid assembly, built as standalone architecture, not generic shell schemes." },
      { title: "Spatial planning", description: "Floor plans and layouts based on human movement, with no barriers and no bottlenecks." },
      { title: "Large-scale installations", description: "Focal points for social interaction and photography, engineered for durability." },
    ],
    pullQuote: "If it looks like it was rented, we haven't done our job.",
    images: [
      { src: `${E}/mcc-s2-stage.jpg`, alt: "LED-arch stage built for the MCC Season 2 finals", caption: "LED-arch stage, MCC Season 2 finals" },
      { src: `${E}/allstar-2025-dinosaur-build.jpg`, alt: "Dinosaur installation built for MLBB All Star 2025", caption: "Dinosaur installation, MLBB All Star 2025" },
      { src: `${E}/mlbb-naruto-diamond-dunes.jpg`, alt: "Fabricated sandbox game environment from the MLBB x Naruto activation", caption: "Fabricated sandbox environment, MLBB x Naruto" },
    ],
  },
};
