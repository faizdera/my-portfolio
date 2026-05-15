"use client";
import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
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
      {/* Small label with accent line */}
      <div
        className={`flex items-center gap-3 mb-3 ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="w-6 h-px bg-cyan-400/60" />
        <span className="font-mono text-[0.7rem] tracking-[0.25em] text-cyan-400/80 uppercase">
          {label}
        </span>
        {center && <span className="w-6 h-px bg-cyan-400/60" />}
      </div>

      {/* Main title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-5 text-slate-400 text-base leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}