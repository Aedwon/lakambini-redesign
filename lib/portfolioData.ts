import { getDivisionBySlug } from "@/lib/divisions";

export interface PortfolioCaseStudy {
  brief: string;
  whatWeDid: string[];
}

export interface PortfolioProject {
  title: string;
  slug: string;
  client?: string; // omitted in UI when unknown
  year: number;
  location?: string;
  divisions: string[]; // division slugs from lib/divisions.ts
  summary: string;
  cover: string;
  images: string[];
  caseStudy?: PortfolioCaseStudy;
  featured?: boolean;
}

const E = "/images/events";
const img = (name: string) => `${E}/${name}.jpg`;
const MOONTON = "Moonton (MLBB)";

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "MLBB Collegiate Cup — Season 2",
    slug: "mcc-season-2",
    client: MOONTON,
    year: 2025,
    location: "SM Mall of Asia",
    divisions: ["tipon", "tanghal", "likha", "ugnay"],
    summary:
      "Season 2 of the MLBB Collegiate Cup, an online and offline esports tournament with the finals staged at SM Mall of Asia in front of a live crowd. Lakambini handled event management, full production, merchandise and fabrication, and was an official event and media partner.",
    cover: img("mcc-s2-crowd-ledwall"),
    featured: true,
    caseStudy: {
      brief:
        "Moonton's MLBB Collegiate Cup returned for a second season, bringing the top collegiate teams to a public mall stage. The job was to make a tournament feel like a proper broadcast event for the players and for the crowd watching in person.",
      whatWeDid: [
        "Welcomed the top-8 collegiate teams on arrival",
        "Built the stage and LED production for the knockouts and finals",
        "Set up the hosts and casters desk",
        "Provided player booths for match days",
        "Ran the championship finale and awarding",
      ],
    },
    images: [
      img("mcc-s2-champions-confetti"),
      img("mcc-s2-finalists-stage"),
      img("mcc-s2-players"),
      img("mcc-s2-player-focus"),
      img("mcc-s2-team-celebration"),
      img("mcc-s2-hosts"),
      img("mcc-s2-casters-desk"),
      img("mcc-s2-finals-lineup"),
      img("mcc-s2-awarding"),
      img("mcc-s2-welcome-banner"),
    ],
  },
  {
    title: "MLBB × NARUTO Activations",
    slug: "mlbb-x-naruto-activations",
    client: MOONTON,
    year: 2025,
    divisions: ["tayo", "merkato", "guhit"],
    summary:
      "Fan-event booths for the MLBB × NARUTO collaboration, built around a fabricated ramen stall, a giant ramen-bowl ball pit and a sandbox game. Scope covered event management, full production, fabrication and merchandise, including the Pamigay giveaways.",
    cover: img("mlbb-naruto-ramen-stall"),
    featured: true,
    caseStudy: {
      brief:
        "For the MLBB × NARUTO collaboration, fans needed somewhere to step into the world of the crossover rather than just see it on a screen. We built booths that people could walk into, play in and take photos at.",
      whatWeDid: [
        "Fabricated an Ichiraku-style ramen stall",
        "Built a giant ramen-bowl ball pit",
        "Designed and built a sandbox game",
        "Ran cosplay interactions across fan events",
        "Handled booth build, set dressing and on-site crew",
      ],
    },
    images: [
      img("mlbb-naruto-booth-build"),
      img("mlbb-naruto-ramen-cosplay"),
      img("mlbb-naruto-ballpit"),
      img("mlbb-naruto-booth-interior"),
      img("mlbb-naruto-diamond-dunes"),
      img("mlbb-naruto-sandbox-detail"),
      img("mlbb-naruto-cosplayer"),
      img("mlbb-naruto-production-crew"),
    ],
  },
  {
    title: "MLBB Pamigay Caravan",
    slug: "mlbb-pamigay-caravan",
    client: MOONTON,
    year: 2025,
    divisions: ["tipon", "merkato"],
    summary:
      "The campus edition of the Pamigay Caravan: a stage program, hosts and school-supply giveaways at elementary schools.",
    cover: img("pamigay-caravan-crowd"),
    featured: true,
    caseStudy: {
      brief:
        "The Pamigay Caravan took the MLBB community to schools, pairing a live stage program with giveaways of school supplies. The goal was a day that students and teachers would actually enjoy, with the brand present but not in the way.",
      whatWeDid: [
        "Produced the stage program and hosts",
        "Set up the branded arch, backdrop and signing wall",
        "Organised school-supply distribution to students",
        "Managed crowd flow on site",
      ],
    },
    images: [
      img("pamigay-caravan-stage"),
      img("pamigay-caravan-signing"),
      img("pamigay-caravan-supplies"),
      img("pamigay-caravan-arch"),
      img("pamigay-caravan-students"),
      img("pamigay-caravan-hosts"),
    ],
  },
  {
    title: "MLBB All Star 2025 — Dino Academy @ Star City",
    slug: "mlbb-all-star-2025",
    client: MOONTON,
    year: 2025,
    location: "Star City",
    divisions: ["tayo", "guhit"],
    summary:
      "MLBB Dino Academy at Star City: a themed installation inside a dinosaur attraction, with entrance, banners and standee graphics.",
    cover: img("allstar-2025-dinosaur-build"),
    caseStudy: {
      brief:
        "MLBB All Star 2025, staged as MLBB Dino Academy, took over part of the dinosaur attraction at Star City. The challenge was to fit the MLBB look into an existing themed space so that the two felt like one environment.",
      whatWeDid: [
        "Built the themed installation inside the attraction",
        "Designed and produced the entrance, banners and standee graphics",
        "Fitted out the space on site",
      ],
    },
    images: [
      img("allstar-2025-entrance"),
      img("allstar-2025-standee"),
      img("allstar-2025-banners"),
    ],
  },
  {
    title: "MPL Teams Homecoming",
    slug: "mpl-teams-homecoming",
    client: MOONTON,
    year: 2025,
    divisions: ["tipon", "ugnay"],
    summary: "Airport management for the MPL and MCC send-off and homecoming, including the welcome for champion teams returning home.",
    cover: img("mpl-homecoming-flag"),
    images: [img("mpl-homecoming-flag")],
  },
  {
    title: "M6 Watch Parties",
    slug: "m6-watch-fest",
    client: MOONTON,
    year: 2024,
    divisions: ["tipon", "ugnay"],
    summary:
      "One of 11 nationwide venues for the M6 World Championship watch parties, with a big screen and fans in the stands.",
    cover: img("m6-watchfest-screen"),
    images: [img("m6-watchfest-screen"), img("m6-watchfest-fans")],
  },
  {
    title: "M6 KOL Watch Parties",
    slug: "m6-kol-watch-parties",
    client: MOONTON,
    year: 2024,
    divisions: ["ugnay"],
    summary:
      "Café watch parties for the M6 World Championship, hosted with content creators and their communities.",
    cover: img("m6-kol-community"),
    images: [img("m6-kol-community")],
  },
  {
    title: "MLBB Balik Eskwela",
    slug: "mlbb-balik-eskwela",
    client: "Moonton (MLBB) with DepEd schools in Cavite",
    year: 2024,
    location: "Cavite",
    divisions: ["tipon"],
    summary: "A back-to-school program run across 6 schools, with DepEd schools in Cavite.",
    cover: img("balik-eskwela-students"),
    images: [img("balik-eskwela-students")],
  },
  {
    title: "MLBB All Star 2024 School & Mall Tour",
    slug: "mlbb-all-star-2024-tour",
    client: MOONTON,
    year: 2024,
    divisions: ["merkato", "tipon"],
    summary: "A school and mall tour with an on-site stage program.",
    cover: img("allstar-2024-mall-stage"),
    images: [img("allstar-2024-mall-stage")],
  },
  {
    title: "MLBB Collegiate Cup — Season 1",
    slug: "mcc-season-1",
    client: MOONTON,
    year: 2024,
    divisions: ["tipon", "tanghal"],
    summary: "Season 1 of the MLBB Collegiate Cup, an online and offline esports tournament. Scope: event management, full production, merchandise and fabrication.",
    cover: img("mcc-s1-trophy-screen"),
    images: [img("mcc-s1-trophy-screen")],
  },
  {
    title: "Howlers Manila 3.0 · Cos Kingdom",
    slug: "howlers-manila-cos-kingdom",
    year: 2024,
    divisions: ["tanghal"],
    summary: "Lakambini was the official cosplay event partner at Howlers Cosplay & Music Festival, running the Cos Kingdom stage.",
    cover: img("howlers-cos-kingdom-stage"),
    images: [img("howlers-cos-kingdom-stage")],
  },
  {
    title: "MLBB × Milo",
    slug: "mlbb-x-milo",
    client: "Moonton (MLBB) & Milo",
    year: 2024,
    divisions: ["merkato"],
    summary: "The MLBB × Milo Manila Marathon activation (Moonton @ Milo), with a booth featuring a handprint wall.",
    cover: img("mlbb-milo-handprint-wall"),
    images: [img("mlbb-milo-handprint-wall")],
  },
  {
    title: "Corporate Team Building",
    // TODO(client): confirm client name (omitted in UI until confirmed)
    slug: "corporate-team-building",
    year: 2026,
    divisions: ["sibol"],
    summary: "A team-building session facilitated and run by the Lakambini crew.",
    cover: img("team-building-ball"),
    images: [img("team-building-ball"), img("team-building-facilitator")],
  },
];

export const featuredProjects = portfolioProjects.filter((p) => p.featured);

export const caseStudyProjects = portfolioProjects.filter((p) => p.caseStudy);

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getDivisionLabels(project: PortfolioProject) {
  return project.divisions.flatMap((s) => {
    const d = getDivisionBySlug(s);
    return d ? [{ slug: d.slug, name: d.name }] : [];
  });
}

export function getNextCaseStudy(slug: string): PortfolioProject | undefined {
  const list = caseStudyProjects;
  const i = list.findIndex((p) => p.slug === slug);
  return i === -1 ? undefined : list[(i + 1) % list.length];
}

export interface MoreProject {
  title: string;
  client?: string;
  year?: number;
  scope?: string;
}

export const moreProjects: MoreProject[] = [
  { title: "Infinix MLBB Regional (APAC) Grand Finals", client: "Infinix", scope: "Event management, merchandising, full production & fabrication, local & international broadcasting" },
  { title: "Infinix Booth @ MPL Season 15 and Season 16", client: "Infinix" },
  { title: "OPPO Hyper Legend Cup Finals", client: "OPPO", scope: "Esports management, livestreaming & broadcasting" },
  { title: "OPPO Online Tournament", client: "OPPO" },
  { title: "Gokongwei MLBB Cup", client: "Gokongwei Group", year: 2025, scope: "Offline esports tournament" },
  { title: "Alorica Warriors' Ball", client: "Alorica", scope: "Event management, photo & video" },
  { title: "VoiceCon PH", year: 2025, scope: "Event management" },
  { title: "SpeakersCon", year: 2026, scope: "Event, manpower & sponsor management" },
  { title: "JCI Induction", client: "JCI" },
  { title: "Verizon Kick Off", client: "Verizon", year: 2026, scope: "Event management, video production" },
  { title: "Ilocos Sur Festival Esports & Cosplay Competition", year: 2026 },
  { title: "Honor of Kings Barangay Activations", client: "Honor of Kings", year: 2025 },
  { title: "HOK Lantern Festival", client: "Honor of Kings", scope: "Livestreaming & broadcasting" },
  { title: "MLBB × Jollibee", client: "Moonton (MLBB) & Jollibee" },
  { title: "MLBB 12 Days of Christmas", client: "Moonton (MLBB)" },
  { title: "Fnatic ONIC Victory Party" },
  { title: "Kalaro Esports Brand Revamp", scope: "Design & branding" },
  { title: "MCC × MPL \u201cPro Yarn?\u201d Video Series", scope: "Video production, 4 episodes" },
  { title: "MSL Collegiate Cup Teaser Video", scope: "Video production" },
  { title: "Proclamation Rally", scope: "Event management, full production, fabrication & merchandise" },
  { title: "HOK & PUBG Mobile Flood and Earthquake Donation Drives", scope: "Community: General Trias, Malabon, Cebu" },
];
