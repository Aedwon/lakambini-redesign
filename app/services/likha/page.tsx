import type { Metadata } from "next";
import DivisionPage from "@/components/sections/DivisionPage";

export const metadata: Metadata = {
  title: "LIKHA: Multimedia Production",
  description:
    "Video production, motion graphics and sound design, from brand campaigns and music videos to event coverage.",
  openGraph: {
    title: "LIKHA | Lakambini Events",
    description:
      "Video production, motion graphics and sound design, from brand campaigns and music videos to event coverage.",
    url: "/services/likha",
  },
};

export default function LikhaPage() {
  return <DivisionPage slug="likha" />;
}
