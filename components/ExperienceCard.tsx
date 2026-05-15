"use client";
import { motion } from "framer-motion";
import { Experience } from "@/data/experience";

const TYPE_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  Research:   { color: "#4d8dff", bg: "rgba(77,141,255,0.08)",  border: "rgba(77,141,255,0.22)"  },
  Team:       { color: "#34d399", bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.22)"  },
  Internship: { color: "#fbbf24", bg: "rgba(251,191,36,0.08)",  border: "rgba(251,191,36,0.22)"  },
  Teaching:   { color: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.22)" },
};

const INITIAL_COLORS: Record<string, string> = {
  Research:   "#4d8dff",
  Team:       "#34d399",
  Internship: "#fbbf24",
  Teaching:   "#a78bfa",
};

interface Props {
  experience: Experience;
  index?: number;
}

export default function ExperienceCard({ experience, index = 0 }: Props) {
  const typeStyle = TYPE_COLORS[experience.type];
  const initColor = INITIAL_COLORS[experience.type] ?? "#4d8dff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex-shrink-0"
      style={{ width: 300 }}
    >
      <div
        className="card-glow overflow-hidden rounded-2xl flex flex-col"
        style={{
          height: 340,
          background: "#0b1226",
          border: "1px solid #1e2b4a",
        }}
      >
        {/* Top area — 45% */}
        <div
          className="flex-shrink-0 flex items-center justify-center"
          style={{ height: 153, background: "#101a35" }}
        >
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl text-2xl font-bold select-none"
            style={{
              color: initColor,
              background: `rgba(${initColor === "#4d8dff" ? "77,141,255" : initColor === "#34d399" ? "52,211,153" : initColor === "#fbbf24" ? "251,191,36" : "167,139,250"},0.10)`,
              border: `1px solid ${typeStyle.border}`,
            }}
          >
            {experience.org[0].toUpperCase()}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-5">
          <div>
            <span
              className="inline-block text-[0.68rem] font-mono px-2.5 py-0.5 rounded-full mb-3"
              style={{
                color: typeStyle.color,
                background: typeStyle.bg,
                border: `1px solid ${typeStyle.border}`,
              }}
            >
              {experience.type}
            </span>
            <h3
              className="font-semibold text-[0.95rem] leading-snug mb-1"
              style={{ color: "#f5f7ff" }}
            >
              {experience.role}
            </h3>
            <p className="text-sm" style={{ color: "#9aa7c2" }}>
              {experience.org}
            </p>
          </div>

          <p
            className="font-mono text-xs mt-3"
            style={{ color: "#4a5878" }}
          >
            {experience.period}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
