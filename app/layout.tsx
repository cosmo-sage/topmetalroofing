import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoSchema from "@/components/SeoSchema";

const baseUrl = "https://topmetalroofing.com";

export const metadata: Metadata = {
  title: {
    default: "Top Metal Roofing | Louisiana Metal Roof Installation & Repair",
    template: "%s | Top Metal Roofing",
  },
  description:
    "Expert metal roofing installation and repair across Louisiana. Serving Baton Rouge, New Orleans, Lafayette, Lake Charles, and Shreveport with residential, commercial, and industrial metal roofing solutions.",
  keywords: [
    "metal roofing Louisiana",
    "metal roof installation Baton Rouge",
    "commercial roofing New Orleans",
    "residential roofing Lafayette",
    "roof repair Lake Charles",
    "metal roof Shreveport",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Top Metal Roofing",
    title: "Top Metal Roofing | Louisiana Metal Roof Installation & Repair",
    description:
      "Expert metal roofing installation and repair across Louisiana. Free estimates available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Metal Roofing | Louisiana",
    description: "Expert metal roofing installation and repair across Louisiana.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <SeoSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}