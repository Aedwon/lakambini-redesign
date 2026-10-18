import type { Metadata } from "next";
import DivisionPage from "@/components/sections/DivisionPage";

export const metadata: Metadata = {
  title: "TAYO: Experiential Architecture",
  description:
    "Custom fabrication, spatial design and large-scale builds, from stages and booths to permanent retail spaces.",
  openGraph: {
    title: "TAYO | Lakambini Events",
    description:
      "Custom fabrication, spatial design and large-scale builds, from stages and booths to permanent retail spaces.",
    url: "/services/tayo",
  },
};

export default function TayoPage() {
  return <DivisionPage slug="tayo" />;
}
