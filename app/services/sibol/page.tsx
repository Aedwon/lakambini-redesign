import type { Metadata } from "next";
import DivisionPage from "@/components/sections/DivisionPage";

export const metadata: Metadata = {
  title: "SIBOL: Learning & Development",
  description:
    "Workshops, team-building programs, trainings and conferences your teams will use.",
  openGraph: {
    title: "SIBOL | Lakambini Events",
    description:
      "Workshops, team-building programs, trainings and conferences your teams will use.",
    url: "/services/sibol",
  },
};

export default function SibolPage() {
  return <DivisionPage slug="sibol" />;
}
