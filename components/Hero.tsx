"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const stars = [
  { top: "11%", left: "7%", size: 2, opacity: 0.45 },
  { top: "22%", left: "72%", size: 1.5, opacity: 0.5 },
  { top: "47%", left: "4%", size: 1, opacity: 0.3 },
  { top: "66%", left: "87%", size: 2, opacity: 0.4 },
  { top: "34%", left: "51%", size: 1.5, opacity: 0.3 },
  { top: "79%", left: "21%", size: 1.5, opacity: 0.3 },
  { top: "7%", left: "83%", size: 2, opacity: 0.5 },
  { top: "53%", left: "92%", size: 1, opacity: 0.3 },
  { top: "91%", left: "61%", size: 1, opacity: 0.25 },
  { top: "18%", left: "38%", size: 1, opacity: 0.2 },
  { top: "74%", left: "46%", size: 1, opacity: 0.25 },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#050816" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 62% 52%, rgba(77,141,255,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Static star dots */}
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: "#f5f7ff",
            opacity: s.opacity,
          }}
        />
      ))}

      {/* Main content row */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-28 flex items-center justify-between gap-12">
        {/* ── Left: Text ── */}
        <div className="flex-1 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs tracking-[0.2em] uppercase mb-7"
            style={{ color: "#4d8dff" }}
          >
            Aerospace Engineering · Bandung Institute of Technology
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            className="font-bold leading-[1.05] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.25rem)",
              color: "#f5f7ff",
            }}
          >
            Faiz Deri
            <br />
            <span className="gradient-text">Rahman</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.37 }}
            className="text-xl font-light mb-4"
            style={{ color: "#f5f7ff" }}
          >
            Building real systems from first principles.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="text-base leading-relaxed mb-10 max-w-md"
            style={{ color: "#9aa7c2" }}
          >
            From CFD simulations to UAV design — I work on problems that
            don&apos;t have easy answers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#projects"
              className="px-6 py-3 text-sm font-semibold text-white rounded-lg hover:brightness-110 transition-all duration-200"
              style={{ background: "#2563eb" }}
            >
              View Projects →
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:text-[#f5f7ff]"
              style={{ border: "1px solid #1e2b4a", color: "#9aa7c2" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#4d8dff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#1e2b4a")
              }
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        {/* ── Right: Silhouette + orbital ring ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center flex-shrink-0"
          style={{ width: 340, height: 380 }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{ width: 320, height: 360 }}
          >
            {/* Ambient glow behind silhouette */}
            <div
              className="absolute"
              style={{
                width: 260,
                height: 260,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(77,141,255,0.16) 0%, transparent 70%)",
              }}
            />

            {/* Static orbital ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: 286,
                height: 286,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: "1px solid rgba(77,141,255,0.28)",
              }}
            />

            {/* Rotating dot container — centers on the ring, then rotates */}
            <div
              className="absolute"
              style={{
                width: 286,
                height: 286,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "orbit 10s linear infinite",
                transformOrigin: "center center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -4,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "#6aa8ff",
                  boxShadow:
                    "0 0 8px #6aa8ff, 0 0 20px rgba(106,168,255,0.65)",
                }}
              />
            </div>

            {/* Second dot 180° out of phase */}
            <div
              className="absolute"
              style={{
                width: 286,
                height: 286,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(180deg)",
                animation: "orbit 10s linear infinite",
                transformOrigin: "center center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -3,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#4d8dff",
                  boxShadow: "0 0 6px rgba(77,141,255,0.8)",
                  opacity: 0.7,
                }}
              />
            </div>

            {/* Portrait circle */}
            <div
              className="relative overflow-hidden"
              style={{
                width: 215,
                height: 215,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "linear-gradient(155deg, #101a35 0%, #060c1a 100%)",
              }}
            >
              {/* Head */}
              <div
                style={{
                  position: "absolute",
                  width: 72,
                  height: 72,
                  top: 46,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 38% 35%, rgba(180,195,225,0.28) 0%, rgba(100,120,165,0.07) 70%)",
                }}
              />
              {/* Neck */}
              <div
                style={{
                  position: "absolute",
                  width: 26,
                  height: 20,
                  top: 112,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(150,165,200,0.12)",
                }}
              />
              {/* Shoulders */}
              <div
                style={{
                  position: "absolute",
                  width: 170,
                  height: 120,
                  bottom: -18,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "50% 50% 0 0",
                  background:
                    "linear-gradient(180deg, rgba(140,160,205,0.24) 0%, rgba(70,90,145,0.04) 100%)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #050816)",
        }}
      />
    </section>
  );
}
