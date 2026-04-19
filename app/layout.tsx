import type { Metadata, Viewport } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lakambinievents.com"),
  title: {
    default: "Lakambini Events | Full-Service Event Production",
    template: "%s | Lakambini Events",
  },
  description:
    "Full-service event production agency. From live entertainment and multimedia production to experiential marketing and technology — one team, one standard.",
  openGraph: {
    siteName: "Lakambini Events",
    locale: "en_PH",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#051710",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body className="font-sans bg-surface text-on-surface antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-full focus:label-md focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
