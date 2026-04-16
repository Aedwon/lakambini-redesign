import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Lakambini Events — Premium Digital Solutions & Event Management",
  description:
    "Lakambini Events delivers high-end B2B digital solutions and event management services. From esports tournaments to corporate activations, we bring your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
