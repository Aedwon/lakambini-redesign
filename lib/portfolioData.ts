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
    title: "MCC Season 2",
    slug: "mcc-season-2",
    client: MOONTON,
    year: 2025,
    location: "SM Mall of Asia",
    divisions: ["tipon", "tanghal", "likha", "ugnay"],
    summary:
      "The second season of the MLBB collegiate championship, with the finals staged at SM Mall of Asia in front of a live crowd.",
    cover: img("mcc-s2-crowd-ledwall"),
    featured: true,
    // TODO(client): confirm full event name / scale / results
    caseStudy: {
      brief:
        "Moonton's MCC returned for a second season, bringing the top collegiate teams to a public mall stage. The job was to make a tournament feel like a proper broadcast event for the players and for the crowd watching in person.",
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
      "Fan-event booths for the MLBB × NARUTO collaboration, built around a fabricated ramen stall, a giant ramen-bowl ball pit and a sandbox game.",
    cover: img("mlbb-naruto-ramen-stall"),
    featured: true,
    // TODO(client): confirm full event name / scale / results (venues, dates)
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
      "A school caravan with a stage program, hosts and school-supply giveaways for students.",
    cover: img("pamigay-caravan-crowd"),
    featured: true,
    // TODO(client): confirm full event name / scale / results (schools visited, dates)
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
    title: "MLBB All Star 2025",
    slug: "mlbb-all-star-2025",
    client: MOONTON,
    year: 2025,
    divisions: ["tayo", "guhit"],
    summary:
      "A themed installation inside a dinosaur attraction, with entrance, banners and standee graphics.",
    cover: img("allstar-2025-dinosaur-build"),
    // TODO(client): confirm full event name / venue / scale / results
    caseStudy: {
      brief:
        "MLBB All Star 2025 took over part of a mall's dinosaur attraction. The challenge was to fit the MLBB look into an existing themed space so that the two felt like one environment.",
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
    summary: "An airport welcome for the champion MPL teams returning home.",
    cover: img("mpl-homecoming-flag"),
    images: [img("mpl-homecoming-flag")],
  },
  {
    title: "M6 Watch Fest",
    slug: "m6-watch-fest",
    client: MOONTON,
    year: 2024,
    divisions: ["tipon", "ugnay"],
    summary:
      "A mall watch party for the M6 World Championship, with a big screen and fans in the stands.",
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
    summary: "A back-to-school program run with DepEd schools in Cavite.",
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
    title: "MCC Season 1",
    slug: "mcc-season-1",
    client: MOONTON,
    year: 2024,
    divisions: ["tipon", "tanghal"],
    summary: "The first season of the MLBB collegiate championship.",
    cover: img("mcc-s1-trophy-screen"),
    images: [img("mcc-s1-trophy-screen")],
  },
  {
    title: "Howlers Manila 3.0 · Cos Kingdom",
    // TODO(client): confirm client / organiser name
    slug: "howlers-manila-cos-kingdom",
    year: 2024,
    divisions: ["tanghal"],
    summary: "A cosplay competition stage at Howlers Manila 3.0.",
    cover: img("howlers-cos-kingdom-stage"),
    images: [img("howlers-cos-kingdom-stage")],
  },
  {
    title: "MLBB × Milo",
    slug: "mlbb-x-milo",
    client: "Moonton (MLBB) & Milo",
    year: 2024,
    divisions: ["merkato"],
    summary: "A joint MLBB × Milo booth featuring a handprint wall.",
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
