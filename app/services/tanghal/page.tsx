import type { Metadata } from "next";
import DivisionPage from "@/components/sections/DivisionPage";

export const metadata: Metadata = {
  title: "TANGHAL: Live Entertainment & Talent",
  description:
    "Concerts, music festivals and artist management. We handle the stage so the talent can perform.",
  openGraph: {
    title: "TANGHAL | Lakambini Events",
    description:
      "Concerts, music festivals and artist management. We handle the stage so the talent can perform.",
    url: "/services/tanghal",
  },
};

export default function TanghalPage() {
  return <DivisionPage slug="tanghal" />;
}
