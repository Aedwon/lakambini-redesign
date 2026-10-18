import type { Metadata } from "next";
import DivisionPage from "@/components/sections/DivisionPage";

export const metadata: Metadata = {
  title: "DALOY: Technology & Development",
  description:
    "Web and mobile development, custom software and workflow automation, from business platforms to event-day apps.",
  openGraph: {
    title: "DALOY | Lakambini Events",
    description:
      "Web and mobile development, custom software and workflow automation, from business platforms to event-day apps.",
    url: "/services/daloy",
  },
};

export default function DaloyPage() {
  return <DivisionPage slug="daloy" />;
}
