"use client";
import { motion } from "framer-motion";

interface Props {
  label: string;        // small uppercase label above
  title: string;        // main heading
  subtitle?: string;    // optional subtitle paragraph
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: Props) {
  const center = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {/* Small label */}
      <span className="font-mono text-xs tracking-widest text-cyan-400/70 uppercase">
        {label}
      </span>

      {/* Main title */}
      <h2
        className={`mt-2 text-3xl sm:text-4xl font-bold leading-tight text-white ${
          center ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>

      {/* Accent line */}
      <div
        className={`mt-4 h-px w-16 bg-gradient-to-r from-cyan-400/60 to-transparent ${
          center ? "mx-auto" : ""
        }`}
      />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-slate-400 text-base leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}