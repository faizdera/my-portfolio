"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Animated grid background ── */}
      <div className="absolute inset-0 hero-grid" />

      {/* ── Radial gradient glow at top ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 0%, rgba(34,211,238,0.10) 0%, transparent 70%)",
        }}
      />

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#07070e] via-[#07070e]/80 to-transparent" />

      {/* ── Technical coordinates overlay (top-left) ── */}
      <div className="absolute top-24 left-6 hidden md:block font-mono text-xs text-cyan-400/40 leading-relaxed pointer-events-none">
        <div>LAT: 40.7128°N</div>
        <div>LON: -74.0060°W</div>
        <div className="mt-1 text-white/20">— STATION OK</div>
      </div>

      {/* ── Technical coordinates overlay (top-right) ── */}
      <div className="absolute top-24 right-6 hidden md:block font-mono text-xs text-cyan-400/40 leading-relaxed text-right pointer-events-none">
        <div>SYS / AERO.LAB</div>
        <div>VER 2.4.1</div>
        <div className="mt-1 text-white/20">— ONLINE</div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Top label */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-cyan-400/60" />
            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400/80 uppercase">
              Aerospace Engineering · 2024
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6 text-glow"
          >
            <span className="text-white">Engineering</span>
            <br />
            <span className="gradient-text-accent">curiosity</span>
            <span className="text-white"> into</span>
            <br />
            <span className="text-white">real systems</span>
            <span className="text-cyan-400 cursor-blink">.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          >
            I'm <span className="text-white font-medium">Your Name</span> — an
            aerospace engineering student working on{" "}
            <span className="text-cyan-400/90">CFD</span>,{" "}
            <span className="text-cyan-400/90">LBM simulations</span>,{" "}
            <span className="text-cyan-400/90">UAV design</span>, and{" "}
            <span className="text-cyan-400/90">hypersonics</span>. I care about
            understanding things deeply and building things that actually work.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-[#07070e] font-semibold text-sm rounded-md transition-all duration-200"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-cyan-400/50 hover:bg-cyan-400/5 text-white text-sm rounded-md transition-all duration-200"
            >
              About Me
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-6 max-w-2xl pt-8 border-t border-white/8"
          >
            {[
              { value: "6+", label: "Engineering Projects" },
              { value: "3", label: "Research Areas" },
              { value: "2024", label: "Current Year" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {value}
                </div>
                <div className="text-[0.65rem] sm:text-xs text-slate-500 font-mono tracking-widest uppercase">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[0.65rem] text-slate-600 font-mono tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-cyan-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}