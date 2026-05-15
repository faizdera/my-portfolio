"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Animated grid background ── */}
      <div className="absolute inset-0 hero-grid opacity-100" />

      {/* ── Radial gradient fade ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(34,211,238,0.07)_0%,transparent_70%)]" />

      {/* ── Bottom fade into page ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07070e] to-transparent" />

      {/* ── Glow orbs ── */}
      <div
        className="glow-orb w-[500px] h-[500px] bg-cyan-500/10 top-[-100px] left-[-150px]"
        style={{ animation: "glow 6s ease-in-out infinite" }}
      />
      <div
        className="glow-orb w-[400px] h-[400px] bg-blue-600/8 bottom-[-60px] right-[-100px]"
        style={{ animation: "glow 8s ease-in-out infinite 2s" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Label */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400/70 tracking-widest uppercase mb-6">
              <span className="w-4 h-px bg-cyan-400/50" />
              Aerospace Engineering
              <span className="w-4 h-px bg-cyan-400/50" />
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            <span className="gradient-text">Engineering</span>
            <br />
            <span className="text-white">curiosity into</span>
            <br />
            <span className="text-white">real systems</span>
            <span className="text-cyan-400">.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-slate-400 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            I'm{" "}
            <span className="text-white font-medium">Your Name</span> — an
            aerospace engineering student working on{" "}
            <span className="text-cyan-400/80">CFD</span>,{" "}
            <span className="text-cyan-400/80">LBM simulations</span>,{" "}
            <span className="text-cyan-400/80">UAV design</span>, and{" "}
            <span className="text-cyan-400/80">hypersonics</span>. I care
            about understanding things deeply and building things that actually
            work.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-cyan-400 text-[#07070e] font-semibold text-sm rounded hover:bg-cyan-300 transition-colors duration-200"
            >
              View Projects
            </Link>
            <Link
              href="/#about"
              className="px-6 py-3 border border-white/15 text-white text-sm rounded hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            >
              About Me
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap gap-8 border-t border-white/5 pt-8"
          >
            {[
              { value: "6+", label: "Engineering Projects" },
              { value: "3", label: "Research Areas" },
              { value: "2024", label: "Current Year" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-slate-500 mt-0.5 font-mono tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-cyan-400/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}