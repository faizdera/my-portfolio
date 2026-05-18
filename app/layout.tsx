import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

function GrainOverlay() {
  return (
    <svg
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        opacity: 0.06,
        mixBlendMode: "overlay",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves={3}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-[#050816] text-[#F5F7FF] antialiased">
        {/* Fixed background lighting system */}
        {/* Ember source — upper right */}
        <div
          style={{
            position: "fixed",
            top: "-10%",
            right: "-5%",
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(255,138,76,0.22) 0%, transparent 70%)",
            filter: "blur(8px)",
            pointerEvents: "none",
            zIndex: 0,
            animation: "emberPulse 6s ease-in-out infinite",
          }}
        />
        {/* Blue source — lower left */}
        <div
          style={{
            position: "fixed",
            bottom: "-10%",
            left: "-5%",
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(77,141,255,0.20) 0%, transparent 70%)",
            filter: "blur(8px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        {/* Vignette */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(5,8,22,0.55) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        {/* Film grain */}
        <GrainOverlay />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
