import type { Metadata } from "next";
import DivisionPage from "@/components/sections/DivisionPage";

export const metadata: Metadata = {
  title: "GUHIT: Design & Visual Identity",
  description:
    "Graphic design, branding, out-of-home advertising and illustration for brands, campaigns and events.",
  openGraph: {
    title: "GUHIT | Lakambini Events",
    description:
      "Graphic design, branding, out-of-home advertising and illustration for brands, campaigns and events.",
    url: "/services/guhit",
  },
};

export default function GuhitPage() {
  return <DivisionPage slug="guhit" />;
}
