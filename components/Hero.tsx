"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 72% 50%, rgba(96,165,250,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-28 flex items-center justify-between gap-16">
        {/* ── Left: text content ── */}
        <div className="flex-1 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-blue-400/60 font-mono text-xs tracking-[0.22em] uppercase mb-7"
          >
            Aerospace Engineering · 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[2.8rem] sm:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-5"
          >
            Faiz Deri
            <br />
            Rahman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
          >
            Bandung Institute of Technology
          </motion.p>

          {/* Pill links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="flex flex-wrap gap-2.5"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="px-5 py-2 text-sm text-slate-300 border border-white/10 rounded-full hover:border-blue-400/40 hover:text-white hover:bg-blue-400/[0.05] transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* ── Right: CSS portrait placeholder ── */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="hidden lg:flex items-center justify-center flex-shrink-0"
          style={{ width: 280, height: 320 }}
        >
          {/* Outer glow */}
          <div
            className="absolute"
            style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 65%)",
            }}
          />
          {/* Portrait circle */}
          <div
            className="relative overflow-hidden"
            style={{
              width: 210,
              height: 210,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              background: "linear-gradient(155deg, #0e1627 0%, #070b12 100%)",
            }}
          >
            {/* Head */}
            <div
              className="absolute"
              style={{
                width: 66,
                height: 66,
                top: 44,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 40% 35%, rgba(175,185,210,0.28) 0%, rgba(110,125,155,0.07) 70%)",
              }}
            />
            {/* Shoulders */}
            <div
              className="absolute"
              style={{
                width: 158,
                height: 110,
                bottom: -14,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "50% 50% 0 0",
                background:
                  "linear-gradient(180deg, rgba(140,155,185,0.22) 0%, rgba(80,100,135,0.03) 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
