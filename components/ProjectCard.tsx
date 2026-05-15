"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/project";

const CATEGORY_ICONS: Record<string, string> = {
  "CFD & Aerodynamics": "≋",
  "UAV Systems": "◭",
  Hypersonics: "⟆",
  "Machine Learning": "◇",
  Experimental: "⊙",
};

const STATUS_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  Completed:    { color: "#34d399", bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.25)"  },
  "In Progress":{ color: "#fbbf24", bg: "rgba(251,191,36,0.08)",  border: "rgba(251,191,36,0.25)"  },
  Research:     { color: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.25)" },
};

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
  const icon = CATEGORY_ICONS[project.category] ?? "◈";
  const status = STATUS_COLORS[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex-shrink-0"
      style={{ width: 320 }}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div
          className="card-glow overflow-hidden rounded-2xl flex flex-col"
          style={{
            height: 380,
            background: "#0b1226",
            border: "1px solid #1e2b4a",
          }}
        >
          {/* Image area — 55% */}
          <div
            className="flex-shrink-0 relative flex items-center justify-center"
            style={{ height: 210, background: "#101a35" }}
          >
            {/* Subtle gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%, rgba(77,141,255,0.07) 0%, transparent 70%)",
              }}
            />
            <span
              className="relative text-[5rem] leading-none select-none"
              style={{ color: "rgba(77,141,255,0.25)" }}
            >
              {icon}
            </span>
          </div>

          {/* Content area */}
          <div className="flex-1 flex flex-col justify-between p-5">
            <div>
              {/* Category pill */}
              <span
                className="inline-block text-[0.68rem] font-mono px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  color: "#4d8dff",
                  background: "rgba(77,141,255,0.08)",
                  border: "1px solid rgba(77,141,255,0.2)",
                }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3
                className="font-semibold text-[0.95rem] leading-snug"
                style={{ color: "#f5f7ff" }}
              >
                {project.title}
              </h3>
            </div>

            {/* Footer row */}
            <div className="flex items-center justify-between mt-3">
              <span
                className="font-mono text-xs"
                style={{ color: "#4a5878" }}
              >
                {project.year}
              </span>
              <span
                className="text-[0.68rem] font-mono px-2 py-0.5 rounded-full"
                style={{
                  color: status.color,
                  background: status.bg,
                  border: `1px solid ${status.border}`,
                }}
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
