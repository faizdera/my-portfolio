"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const fields = [
  "Computational Fluid Dynamics",
  "Fluid Mechanics",
  "Machine Learning",
  "UAV Systems",
  "Structural Analysis",
  "Renewable Energy",
  "Aerodynamics",
  "Hypersonics",
  "Experimental Methods",
];

const particles = [
  { top: "15%", left: "8%",   color: "#4D8DFF", duration: "4s",   delay: "0s" },
  { top: "25%", right: "12%", color: "#FF8A4C", duration: "6s",   delay: "1s" },
  { bottom: "30%", left: "5%",  color: "#4D8DFF", duration: "5s",   delay: "2s" },
  { top: "60%", right: "8%",  color: "#FF8A4C", duration: "7s",   delay: "0.5s" },
  { bottom: "20%", left: "20%", color: "#4D8DFF", duration: "3.5s", delay: "1.5s" },
];

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="hidden lg:flex items-center justify-center flex-shrink-0"
      style={{ width: 420, height: 420, position: "relative" }}
    >
      {/* Ember pulse glow behind portrait */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,138,76,0.15) 0%, transparent 60%)",
          animation: "emberPulse 6s ease-in-out infinite",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      {/* Blue rim glow — left side */}
      <div
        style={{
          position: "absolute",
          left: -20,
          top: "50%",
          transform: "translateY(-50%)",
          width: 40,
          height: 200,
          background: "linear-gradient(transparent, rgba(77,141,255,0.3), transparent)",
          filter: "blur(15px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => {
        const { color, duration, delay, ...pos } = p;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: color,
              animation: `floatDot ${duration} ease-in-out infinite`,
              animationDelay: delay,
              ...pos,
            }}
          />
        );
      })}

      {/* Outer static ring */}
      <div
        style={{
          position: "absolute",
          inset: -30,
          border: "1.5px solid rgba(77,141,255,0.25)",
          borderRadius: "50%",
        }}
      />

      {/* Inner dashed rotating ring */}
      <div
        style={{
          position: "absolute",
          inset: -15,
          border: "1px dashed rgba(77,141,255,0.15)",
          borderRadius: "50%",
          animation: "orbitTick 90s linear infinite",
        }}
      />

      {/* Portrait circle */}
      <div style={{ position: "relative", width: 340, height: 340 }}>
        {/* Circle backdrop */}
        <div
          style={{
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 30%, #d4c5a9 0%, #b8a88a 60%, #8a7a6a 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glass highlight arc */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "12%",
              width: "35%",
              height: "18%",
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
              borderRadius: "50%",
              filter: "blur(4px)",
              transform: "rotate(-20deg)",
            }}
          />

          {/* Head */}
          <div
            style={{
              position: "absolute",
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 30%, #e8c49a 0%, #c49a6a 70%, #a07840 100%)",
              top: 72,
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "4px 4px 12px rgba(255,138,76,0.15)",
            }}
          >
            {/* Hair */}
            <div
              style={{
                position: "absolute",
                top: -6,
                left: "10%",
                width: "80%",
                height: "45%",
                background: "#1a0f05",
                borderRadius: "50% 50% 0 0",
              }}
            />
          </div>

          {/* Neck */}
          <div
            style={{
              position: "absolute",
              width: 28,
              height: 22,
              background: "#c49a6a",
              top: 156,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          {/* Shoulders / body */}
          <div
            style={{
              position: "absolute",
              width: 200,
              height: 160,
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "50% 50% 0 0",
              background: "linear-gradient(160deg, #2a4a3a 0%, #1a3028 100%)",
              boxShadow: "inset -3px 0 12px rgba(77,141,255,0.3), inset 3px 0 8px rgba(255,138,76,0.1)",
            }}
          />
        </div>

        {/* Warm NE tick marker */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            right: "8%",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#FF8A4C",
            boxShadow: "0 0 8px rgba(255,138,76,0.8)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Main content row */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex items-center justify-between gap-12 pt-28 pb-4">
        {/* Left column */}
        <motion.div
          className="flex-1 max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.div variants={itemVariants}>
            <div
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#9AA7C2",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
              }}
            >
              <span style={{ display: "inline-block", width: 24, height: 1, background: "#9AA7C2" }} />
              AEROSPACE ENGINEERING · ITB
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 500,
              lineHeight: 1.0,
              color: "#F5F7FF",
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Faiz Deri
            <br />
            Rahman.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.125rem",
              color: "#9AA7C2",
              maxWidth: 480,
              lineHeight: 1.6,
              marginBottom: 28,
            }}
          >
            Building real systems from first principles — from CFD simulations to UAV design.
          </motion.p>

          {/* Status pill */}
          <motion.div variants={itemVariants} style={{ marginBottom: 36 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                border: "1px solid rgba(255,138,76,0.3)",
                borderRadius: 99,
                background: "rgba(255,138,76,0.06)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#FF8A4C",
                  animation: "statusBreath 2.4s ease-in-out infinite",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "0.8rem", color: "#FF8A4C" }}>
                Available for collaboration — Bandung, ID
              </span>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="#projects" className="cta-primary">
              View Projects →
            </Link>
            <Link href="#contact" className="cta-secondary">
              Get in touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column: Portrait */}
        <Portrait />
      </div>

      {/* Fields Marquee — bottom of hero, above bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(30,43,74,0.6)",
          padding: "16px 0",
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-8">
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#9AA7C2",
              flexShrink: 0,
            }}
          >
            FIELDS
          </span>
          <div
            style={{ overflow: "hidden", flex: 1 }}
            ref={marqueeRef}
            onMouseEnter={() => {
              const el = marqueeRef.current?.querySelector<HTMLDivElement>(".marquee-track");
              if (el) el.style.animationPlayState = "paused";
            }}
            onMouseLeave={() => {
              const el = marqueeRef.current?.querySelector<HTMLDivElement>(".marquee-track");
              if (el) el.style.animationPlayState = "running";
            }}
          >
            <div
              className="marquee-track"
              style={{
                display: "flex",
                gap: 12,
                animation: "marquee 30s linear infinite",
                width: "max-content",
              }}
            >
              {[...fields, ...fields].map((f, i) => (
                <span key={i} className="field-pill">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer — pushes bottom bar to foot of screen */}
      <div style={{ flex: 1 }} />

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #1E2B4A",
          padding: "12px 0",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9AA7C2", textTransform: "uppercase" }}>
            PORTFOLIO · 2026
          </span>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9AA7C2", textTransform: "uppercase" }}>
            CFD · UAV · MACHINE LEARNING
          </span>
          <span
            style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9AA7C2", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 4 }}
          >
            SCROLL
            <span style={{ animation: "scrollBounce 1.5s ease-in-out infinite", display: "inline-block" }}>↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}
