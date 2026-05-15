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
  title: "Your Name — Aerospace Engineer",
  description:
    "Aerospace engineering student and researcher working on CFD, LBM simulations, UAV design, aerodynamics, hypersonics, and machine learning for engineering.",
  keywords: [
    "aerospace engineering",
    "CFD",
    "LBM",
    "UAV",
    "aerodynamics",
    "hypersonics",
    "machine learning",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Aerospace Engineer",
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
      <body className="bg-[#07070e] text-slate-300 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}