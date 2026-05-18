"use client";
import { motion } from "framer-motion";
import { Experience } from "@/data/experience";

const TYPE_STYLES: Record<string, { color: string; bg: string; border: string; iconBg: string; iconBorder: string }> = {
  Research:   {
    color: "#4D8DFF", bg: "rgba(77,141,255,0.1)",  border: "rgba(77,141,255,0.25)",
    iconBg: "rgba(77,141,255,0.1)", iconBorder: "rgba(77,141,255,0.15)",
  },
  Team:       {
    color: "#4D8DFF", bg: "rgba(77,141,255,0.1)",  border: "rgba(77,141,255,0.25)",
    iconBg: "rgba(77,141,255,0.1)", iconBorder: "rgba(77,141,255,0.15)",
  },
  Internship: {
    color: "#FF8A4C", bg: "rgba(255,138,76,0.1)",  border: "rgba(255,138,76,0.25)",
    iconBg: "rgba(255,138,76,0.1)", iconBorder: "rgba(255,138,76,0.2)",
  },
  Teaching:   {
    color: "#4D8DFF", bg: "rgba(77,141,255,0.1)",  border: "rgba(77,141,255,0.25)",
    iconBg: "rgba(77,141,255,0.1)", iconBorder: "rgba(77,141,255,0.15)",
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
      style={{ flexShrink: 0, width: 280 }}
    >
      <div className={`glass-card${isEmber ? " ember-accent" : ""} flex flex-col`} style={{ height: 340 }}>
        {/* TODO: Replace with <Image> when org photo is provided */}
        {/* Top icon area */}
        <div
          style={{
            height: 136,
            background: "#101A35",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderRadius: "16px 16px 0 0",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {isEmber && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 70,
                height: 70,
                background: "radial-gradient(circle at 100% 100%, rgba(255,138,76,0.2) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
          )}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: style.iconBg,
              border: `1px solid ${style.iconBorder}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon color={style.color} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1" style={{ padding: 20 }}>
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
                marginBottom: 8,
              }}
            >
              {experience.type.toUpperCase()}
            </span>
            <h3 style={{ fontWeight: 500, fontSize: "1.05rem", color: "#F5F7FF", marginTop: 2, lineHeight: 1.3 }}>
              {experience.role}
            </h3>
            <p style={{ color: "#9AA7C2", fontSize: "0.85rem", marginTop: 2 }}>{experience.org}</p>
            <p style={{ color: "#9AA7C2", fontSize: "0.8rem", marginTop: 12, lineHeight: 1.5 }}>
              {experience.description}
            </p>
          </div>

          <div
            style={{
              marginTop: "auto",
              paddingTop: 16,
              borderTop: "1px dashed #1E2B4A",
            }}
          >
            <p style={{ color: "#9AA7C2", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
              {experience.period}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
