import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faiz Deri Rahman — Aerospace Engineer",
  description:
    "Aerospace engineering student at Bandung Institute of Technology working on CFD, LBM simulations, UAV design, and machine learning for aerodynamics.",
  keywords: [
    "aerospace engineering",
    "CFD",
    "LBM",
    "UAV",
    "aerodynamics",
    "hypersonics",
    "machine learning",
    "Bandung Institute of Technology",
  ],
  authors: [{ name: "Faiz Deri Rahman" }],
  openGraph: {
    title: "Faiz Deri Rahman — Aerospace Engineer",
    description: "Engineering curiosity into real systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050816] text-[#f5f7ff] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}