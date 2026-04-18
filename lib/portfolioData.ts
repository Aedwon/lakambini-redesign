export interface PortfolioProject {
  title: string;
  division: string;          // Must match a division slug from divisions.ts (e.g. "tanghal")
  divisionName: string;      // Display name (e.g. "TANGHAL")
  description: string;       // 1–2 sentence brief
  img: string;               // Unsplash or Google image URL
  caseStudySlug?: string;    // Optional — only projects with case studies
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Hyper Legend Cup Season 4",
    division: "tanghal",
    divisionName: "TANGHAL",
    description: "A monumental esports tournament featuring high-stakes competition and immersive live experiences.",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop",
    caseStudySlug: "hyper-legend-cup",
  },
  {
    title: "Alorica Leadership Summit 2025",
    division: "sibol",
    divisionName: "SIBOL",
    description: "An intensive leadership training workshop designed to empower corporate executives.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Vivo × Manila Music Festival",
    division: "merkato",
    divisionName: "MERKATO",
    description: "A large-scale brand activation combining live music with experiential marketing.",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2000&auto=format&fit=crop",
    caseStudySlug: "vivo-manila-fest",
  },
  {
    title: "Globe Telecom Product Launch",
    division: "tipon",
    divisionName: "TIPON",
    description: "A seamless product reveal event with intricate logistics and massive public attendance.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Lakambini Brand Identity 2024",
    division: "guhit",
    divisionName: "GUHIT",
    description: "A comprehensive visual identity redesign reflecting a modern editorial aesthetic.",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Moonton x DepEd Esports Program",
    division: "likha",
    divisionName: "LIKHA",
    description: "Educational multimedia content production for a nationwide esports initiative.",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop",
    caseStudySlug: "moonton-deped",
  },
  {
    title: "ABS-CBN Community Caravan",
    division: "ugnay",
    divisionName: "UGNAY",
    description: "A grassroots engagement program across multiple regional hubs.",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "GCash Event Check-In Platform",
    division: "daloy",
    divisionName: "DALOY",
    description: "Custom software solution for automated high-volume event registration.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Wanderland Music Fest Main Stage",
    division: "tayo",
    divisionName: "TAYO",
    description: "Architectural stage design and physical fabrication for a premier music festival.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
  },
];
