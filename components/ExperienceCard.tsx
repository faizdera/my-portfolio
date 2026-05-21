"use client";
import { motion } from "framer-motion";
import { Experience } from "@/data/experience";

const TYPE_STYLES: Record<string, {
  color: string; bg: string; border: string;
  iconBg: string; iconBorder: string; topBg: string;
}> = {
  Research: {
    color: "#4D8DFF", bg: "rgba(77,141,255,0.1)", border: "rgba(77,141,255,0.25)",
    iconBg: "rgba(77,141,255,0.12)", iconBorder: "rgba(77,141,255,0.2)",
    topBg: "linear-gradient(135deg, #0d1a3a 0%, #111e40 100%)",
  },
  Team: {
    color: "#4D8DFF", bg: "rgba(77,141,255,0.1)", border: "rgba(77,141,255,0.25)",
    iconBg: "rgba(77,141,255,0.12)", iconBorder: "rgba(77,141,255,0.2)",
    topBg: "linear-gradient(135deg, #0d1a3a 0%, #111e40 100%)",
  },
  Internship: {
    color: "#FF8A4C", bg: "rgba(255,138,76,0.1)", border: "rgba(255,138,76,0.25)",
    iconBg: "rgba(255,138,76,0.12)", iconBorder: "rgba(255,138,76,0.2)",
    topBg: "linear-gradient(135deg, #1a0d08 0%, #2a1510 100%)",
  },
  Teaching: {
    color: "#4D8DFF", bg: "rgba(77,141,255,0.1)", border: "rgba(77,141,255,0.25)",
    iconBg: "rgba(77,141,255,0.12)", iconBorder: "rgba(77,141,255,0.2)",
    topBg: "linear-gradient(135deg, #0d1a3a 0%, #111e40 100%)",
  },
};

function IconResearch({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6" stroke={color} strokeWidth="1.5" />
      <line x1="15.5" y1="15.5" x2="20" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconTeam({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.5" stroke={color} strokeWidth="1.5" />
      <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconInternship({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function IconTeaching({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L2 8l10 5 10-5-10-5z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 10.5V16c0 1.657 2.686 3 6 3s6-1.343 6-3v-5.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const ICONS: Record<string, React.FC<{ color: string }>> = {
  Research: IconResearch,
  Team: IconTeam,
  Internship: IconInternship,
  Teaching: IconTeaching,
};

interface Props {
  experience: Experience;
  index?: number;
}

export default function ExperienceCard({ experience, index = 0 }: Props) {
  const style = TYPE_STYLES[experience.type] ?? TYPE_STYLES["Research"];
  const isEmber = experience.type === "Internship";
  const Icon = ICONS[experience.type] ?? IconTeam;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ flexShrink: 0, width: 300 }}
    >
      <div className={`glass-card${isEmber ? " ember-accent" : ""} flex flex-col`} style={{ height: 380 }}>
        {/* TODO: Replace bg gradient with <Image> org logo when photo provided */}
        {/* Top image area */}
        <div
          style={{
            height: 210,
            background: style.topBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderRadius: "16px 16px 0 0",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {/* Internship corner bloom — top-right */}
          {isEmber && (
            <div
              style={{
                position: "absolute",
                top: -10,
                right: -10,
                width: 100,
                height: 100,
                background: "radial-gradient(circle, rgba(255,138,76,0.2) 0%, transparent 70%)",
                filter: "blur(15px)",
                pointerEvents: "none",
              }}
            />
          )}

          {/* Icon placeholder box */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 10,
              background: style.iconBg,
              border: `1px solid ${style.iconBorder}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Icon color={style.color} />
          </div>

          {/* Org name — bottom-right label */}
          <span
            style={{
              position: "absolute",
              bottom: 10,
              right: 14,
              fontFamily: "monospace",
              fontSize: 9,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(154,167,194,0.5)",
            }}
          >
            {experience.org}
          </span>
        </div>

        {/* Bottom content area */}
        <div className="flex flex-col flex-1" style={{ padding: "16px 20px" }}>
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 99,
                background: style.bg,
                border: `1px solid ${style.border}`,
                color: style.color,
              }}
            >
              {experience.type.toUpperCase()}
            </span>
            <h3 style={{ fontWeight: 500, fontSize: "1rem", color: "#F5F7FF", marginTop: 8, lineHeight: 1.3 }}>
              {experience.role}
            </h3>
            <p style={{ color: "#9AA7C2", fontSize: "0.82rem", marginTop: 3 }}>{experience.org}</p>
            <p
              className="line-clamp-2"
              style={{ color: "#9AA7C2", fontSize: "0.78rem", marginTop: 10, lineHeight: 1.55 }}
            >
              {experience.description}
            </p>
          </div>

          <div
            style={{
              marginTop: "auto",
              paddingTop: 12,
              borderTop: "1px dashed rgba(30,43,74,1)",
            }}
          >
            <p style={{ color: "#9AA7C2", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {experience.period}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
