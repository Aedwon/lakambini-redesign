import type { Metadata } from "next";
import DivisionPage from "@/components/sections/DivisionPage";

export const metadata: Metadata = {
  title: "MERKATO: Experiential Marketing",
  description:
    "Product sampling, pop-ups, street teams and guerrilla campaigns that drive real engagement and move product.",
  openGraph: {
    title: "MERKATO | Lakambini Events",
    description:
      "Product sampling, pop-ups, street teams and guerrilla campaigns that drive real engagement and move product.",
    url: "/services/merkato",
  },
};

export default function MerkatoPage() {
  return <DivisionPage slug="merkato" />;
}
