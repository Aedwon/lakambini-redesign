export interface DivisionData {
  id: string; // e.g., "01"
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  ctaHeadline: string;
  heroImage: string; // Used in individual page heroes
  cardImage: string; // Used in the DivisionsEditorial component originally
}

export const divisions: DivisionData[] = [
  {
    id: "01",
    slug: "tanghal",
    name: "TANGHAL",
    subtitle: "Live Entertainment & Talent",
    description: "Live events, concerts, music festivals, and artist management. We handle the stage so the talent can perform.",
    capabilities: ["Concerts", "Music Festivals", "Virtual Events", "Event Performances", "Talent Management"],
    ctaHeadline: "Have a show in mind? Let's talk.",
    heroImage: "/images/events/howlers-cos-kingdom-stage.jpg",
    cardImage: "/images/events/mcc-s2-hosts.jpg"
  },
  {
    id: "02",
    slug: "likha",
    name: "LIKHA",
    subtitle: "Multimedia Production",
    description: "End-to-end video production, motion graphics, and sound design — from brand campaigns and music videos to event coverage and commercial content.",
    capabilities: ["Video Production", "Music Videos", "Video Editing", "Motion Graphics", "Sound Design"],
    ctaHeadline: "Have a production in mind? Let's talk.",
    heroImage: "/images/events/mlbb-naruto-production-crew.jpg",
    cardImage: "/images/events/mcc-s2-casters-desk.jpg"
  },
  {
    id: "03",
    slug: "merkato",
    name: "MERKATO",
    subtitle: "Experiential Marketing",
    description: "Product sampling, pop-up activations, street teams, and guerrilla campaigns — direct-to-consumer marketing strategies that drive real engagement and move product.",
    capabilities: ["Product Sampling", "Pop-Up Shops", "Experiential Marketing", "Street Teams", "Guerrilla Marketing", "In-Store Demos"],
    ctaHeadline: "Planning an activation? Let's talk.",
    heroImage: "/images/events/mlbb-naruto-ballpit.jpg",
    cardImage: "/images/events/allstar-2024-mall-stage.jpg"
  },
  {
    id: "04",
    slug: "tipon",
    name: "TIPON",
    subtitle: "Event Production & Management",
    description: "Trade shows, sponsorship activations, fun runs, and mall events. Reliable logistics from load-in to strike.",
    capabilities: ["Trade Shows", "Conventions", "Company Events", "Mall Activations", "Live Streaming", "Outdoor Events"],
    ctaHeadline: "Have an event coming up? Let's talk.",
    heroImage: "/images/events/mcc-s2-stage.jpg",
    cardImage: "/images/events/mcc-s2-crowd-ledwall.jpg"
  },
  {
    id: "05",
    slug: "sibol",
    name: "SIBOL",
    subtitle: "Learning & Development",
    description: "Corporate workshops, team-building programs, trainings, and conferences. Practical sessions your teams will actually use.",
    capabilities: ["Workshops", "Trainings", "Team Building", "Conferences", "Team Development"],
    ctaHeadline: "Planning a workshop or training? Let's talk.",
    heroImage: "/images/events/team-building-ball.jpg",
    cardImage: "/images/events/team-building-facilitator.jpg"
  },
  {
    id: "06",
    slug: "guhit",
    name: "GUHIT",
    subtitle: "Design & Visual Identity",
    description: "Graphic design, branding, out-of-home advertising, and illustration — building cohesive visual identities for brands, campaigns, and events alike.",
    capabilities: ["Graphic Design", "Logo Creation", "Branding", "Billboard Ads", "Illustration"],
    ctaHeadline: "Need a visual identity? Let's talk.",
    heroImage: "/images/events/allstar-2025-entrance.jpg",
    cardImage: "/images/events/pamigay-caravan-signing.jpg"
  },
  {
    id: "07",
    slug: "ugnay",
    name: "UGNAY",
    subtitle: "Community Management & Growth",
    description: "End-to-end community management, audience development, and influencer partnerships — building and retaining engaged digital communities across any platform.",
    capabilities: ["Community Management", "Audience Retention", "Grassroots Engagement", "Channel Moderation", "Influencer Seeding"],
    ctaHeadline: "Building a community? Let's talk.",
    heroImage: "/images/events/m6-watchfest-fans.jpg",
    cardImage: "/images/events/m6-kol-community.jpg"
  },
  {
    id: "08",
    slug: "daloy",
    name: "DALOY",
    subtitle: "Technology & Development",
    description: "Full-stack web and mobile development, custom software solutions, and workflow automation — from business platforms and SaaS products to event-day applications.",
    capabilities: ["Web & Mobile Apps", "Custom Software", "Workflow Automation", "Analytics Dashboards", "Interactive Kiosks"],
    ctaHeadline: "Need custom tech for your next project? Let's talk.",
    heroImage: "/images/daloy/hok-lantern-kiosk.jpg",
    cardImage: "/images/daloy/hok-lantern-kiosk.jpg"
  },
  {
    id: "09",
    slug: "tayo",
    name: "TAYO",
    subtitle: "Experiential Architecture",
    description: "Custom fabrication, spatial design, and large-scale builds — from event stages and exhibition booths to permanent retail spaces and immersive environments.",
    capabilities: ["Stage Fabrication", "Custom Booths", "Spatial Design", "Props & Theming", "Permanent Installations"],
    ctaHeadline: "Have a space to transform? Let's talk.",
    heroImage: "/images/events/mlbb-naruto-ramen-stall.jpg",
    cardImage: "/images/events/allstar-2025-dinosaur-build.jpg"
  }
];

export function getDivisionBySlug(slug: string): DivisionData | undefined {
  return divisions.find(d => d.slug === slug);
}
