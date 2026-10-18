import type { Metadata } from "next";
import DivisionPage from "@/components/sections/DivisionPage";

export const metadata: Metadata = {
  title: "TIPON: Event Production & Management",
  description:
    "Trade shows, sponsorship activations, fun runs and mall events.",
  openGraph: {
    title: "TIPON | Lakambini Events",
    description:
      "Trade shows, sponsorship activations, fun runs and mall events.",
    url: "/services/tipon",
  },
};

export default function TiponPage() {
  return <DivisionPage slug="tipon" />;
}
