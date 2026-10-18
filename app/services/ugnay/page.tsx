import type { Metadata } from "next";
import DivisionPage from "@/components/sections/DivisionPage";

export const metadata: Metadata = {
  title: "UGNAY: Community Management & Growth",
  description:
    "Community management, audience development and influencer partnerships across any platform.",
  openGraph: {
    title: "UGNAY | Lakambini Events",
    description:
      "Community management, audience development and influencer partnerships across any platform.",
    url: "/services/ugnay",
  },
};

export default function UgnayPage() {
  return <DivisionPage slug="ugnay" />;
}
