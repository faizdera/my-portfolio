"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/project";

const STATUS_COLORS: Record<string, { color: string; dot: string }> = {
  Completed:    { color: "#34d399", dot: "#34d399" },
  "In Progress":{ color: "#fbbf24", dot: "#fbbf24" },
  Research:     { color: "#a78bfa", dot: "#a78bfa" },
};

const CATEGORY_PILL: Record<string, { color: string; bg: string; border: string }> = {
  "CFD & Aerodynamics": { color: "#4D8DFF", bg: "rgba(77,141,255,0.12)", border: "rgba(77,141,255,0.3)" },
  "UAV Systems":        { color: "#4D8DFF", bg: "rgba(77,141,255,0.12)", border: "rgba(77,141,255,0.3)" },
  Hypersonics:          { color: "#FF8A4C", bg: "rgba(255,138,76,0.12)",  border: "rgba(255,138,76,0.3)" },
  "Machine Learning":   { color: "#6D5EF5", bg: "rgba(109,94,245,0.12)", border: "rgba(109,94,245,0.3)" },
  Experimental:         { color: "#4D8DFF", bg: "rgba(77,141,255,0.12)", border: "rgba(77,141,255,0.3)" },
};

/* ── SVG Illustrations ── */
function IllustrationCFD() {
  return (
    <svg viewBox="0 0 300 180" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      {/* Streamlines */}
      {[20, 45, 65, 85, 100, 115, 130, 150].map((y, i) => (
        <path
          key={i}
          d={`M 0 ${y} Q 100 ${y + (y < 95 ? -8 : 8)} 148 ${y < 95 ? y - 18 + i * 4 : y + 18 - (7 - i) * 4} Q 200 ${y + (y < 95 ? -4 : 4)} 300 ${y}`}
          fill="none"
          stroke="#4D8DFF"
          strokeWidth={0.8}
          opacity={0.5 + i * 0.06}
        />
      ))}
      {/* Airfoil */}
      <path
        d="M 110 90 Q 148 72 190 89 Q 210 91 190 92 Q 148 108 110 90 Z"
        fill="rgba(77,141,255,0.1)"
        stroke="#6AA8FF"
        strokeWidth={1.5}
      />
      {/* Glow behind airfoil */}
      <ellipse cx="150" cy="90" rx="50" ry="20" fill="rgba(77,141,255,0.06)" />
      {/* Label */}
      <text x="220" y="168" fontSize="9" fill="#9AA7C2" fontFamily="monospace">NACA-0012 · RE 1E6</text>
    </svg>
  );
}

function IllustrationUAV() {
  return (
    <svg viewBox="0 0 300 180" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      {/* Fuselage */}
      <rect x="90" y="83" width="120" height="14" rx="4" fill="none" stroke="#6AA8FF" strokeWidth={1} />
      {/* Wing (long thin ellipse) */}
      <ellipse cx="150" cy="90" rx="100" ry="8" fill="none" stroke="#6AA8FF" strokeWidth={1} />
      {/* Tail vertical fin */}
      <line x1="90" y1="90" x2="82" y2="68" stroke="#6AA8FF" strokeWidth={1} />
      <line x1="90" y1="90" x2="82" y2="112" stroke="#6AA8FF" strokeWidth={1} />
      {/* Tail horizontal fins */}
      <line x1="86" y1="90" x2="66" y2="84" stroke="#6AA8FF" strokeWidth={1} />
      <line x1="86" y1="90" x2="66" y2="96" stroke="#6AA8FF" strokeWidth={1} />
      {/* Nose */}
      <path d="M 210 84 L 222 90 L 210 97 Z" fill="none" stroke="#6AA8FF" strokeWidth={1} />
      {/* Centerline dashed */}
      <line x1="60" y1="90" x2="240" y2="90" stroke="#4D8DFF" strokeWidth={0.5} strokeDasharray="4 4" opacity={0.4} />
      {/* Wingspan arrows */}
      <line x1="50" y1="82" x2="50" y2="98" stroke="#9AA7C2" strokeWidth={0.8} />
      <line x1="250" y1="82" x2="250" y2="98" stroke="#9AA7C2" strokeWidth={0.8} />
      <line x1="50" y1="90" x2="250" y2="90" stroke="#9AA7C2" strokeWidth={0.5} opacity={0.4} />
      {/* Label */}
      <text x="110" y="140" fontSize="9" fill="#9AA7C2" fontFamily="monospace">B · 1.4 M</text>
    </svg>
  );
}

function IllustrationHypersonics() {
  return (
    <svg viewBox="0 0 300 180" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      {/* Shock cone fill */}
      <polygon points="60,90 240,30 240,150" fill="rgba(255,138,76,0.12)" />
      {/* Shock wave lines */}
      <line x1="60" y1="90" x2="240" y2="28" stroke="#FF8A4C" strokeWidth={2} opacity={0.9} />
      <line x1="60" y1="90" x2="240" y2="152" stroke="#FF8A4C" strokeWidth={2} opacity={0.9} />
      {/* Body/wedge */}
      <polygon points="60,86 160,86 160,94 60,94" fill="#101A35" stroke="#FF8A4C" strokeWidth={1} />
      {/* Arrow pointing left (flow direction) */}
      <line x1="240" y1="90" x2="180" y2="90" stroke="#FF8A4C" strokeWidth={1.5} markerEnd="url(#arr)" opacity={0.6} />
      <polygon points="175,87 183,90 175,93" fill="#FF8A4C" opacity={0.6} />
      {/* Glow */}
      <ellipse cx="80" cy="90" rx="30" ry="20" fill="rgba(255,138,76,0.1)" />
      {/* Corner bloom */}
      <radialGradient id="emberBloom" cx="100%" cy="100%" r="60%">
        <stop offset="0%" stopColor="rgba(255,138,76,0.2)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <rect x="220" y="140" width="80" height="80" fill="url(#emberBloom)" />
      {/* Label */}
      <text x="220" y="80" fontSize="10" fill="#FF8A4C" fontFamily="monospace">M ≥ 5</text>
    </svg>
  );
}

function IllustrationML() {
  const layers = [[40], [100, 130, 160], [220, 250, 280], [340, 370]];
  const xPositions = [60, 120, 200, 270];
  const nodes: { x: number; y: number; layer: number }[] = [];
  layers.forEach((ys, li) => ys.forEach(y => nodes.push({ x: xPositions[li], y, layer: li })));

  return (
    <svg viewBox="0 0 330 320" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      {/* Connections */}
      {nodes.filter(n => n.layer < 3).map((n, i) =>
        nodes.filter(m => m.layer === n.layer + 1).map((m, j) => (
          <line key={`${i}-${j}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="rgba(77,141,255,0.35)" strokeWidth={0.8} />
        ))
      )}
      {/* Nodes */}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={8}
          fill="#101A35"
          stroke="#4D8DFF"
          strokeWidth={1.2}
          opacity={n.layer === 3 ? 1 : 0.8}
        />
      ))}
      {/* Output glow */}
      {nodes.filter(n => n.layer === 3).map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={14} fill="rgba(77,141,255,0.08)" />
      ))}
      {/* Label */}
      <text x="100" y="300" fontSize="9" fill="#9AA7C2" fontFamily="monospace">4-32-8</text>
    </svg>
  );
}

function IllustrationWindTunnel() {
  return (
    <svg viewBox="0 0 300 180" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      {/* Test section */}
      <rect x="60" y="50" width="180" height="80" fill="none" stroke="#4D8DFF" strokeWidth={1} rx={2} />
      {/* Flow arrows */}
      {[65, 80, 90, 100, 115].map((y, i) => (
        <g key={i}>
          <line x1={80} y1={y} x2={200} y2={y} stroke="#4D8DFF" strokeWidth={0.7} opacity={0.5} />
          <polygon points={`198,${y - 3} 204,${y} 198,${y + 3}`} fill="#4D8DFF" opacity={0.5} />
        </g>
      ))}
      {/* Model mount */}
      <line x1="150" y1="50" x2="150" y2="130" stroke="#6AA8FF" strokeWidth={1.5} />
      <ellipse cx="150" cy="90" rx="12" ry="6" fill="#101A35" stroke="#6AA8FF" strokeWidth={1} />
      {/* Probes */}
      <line x1="60" y1="90" x2="80" y2="90" stroke="#9AA7C2" strokeWidth={1} strokeDasharray="3 2" />
      <line x1="220" y1="90" x2="240" y2="90" stroke="#9AA7C2" strokeWidth={1} strokeDasharray="3 2" />
      {/* Label */}
      <text x="90" y="155" fontSize="9" fill="#9AA7C2" fontFamily="monospace">Re · 50K-180K</text>
    </svg>
  );
}

function IllustrationOpenFOAM() {
  return (
    <svg viewBox="0 0 300 180" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      {/* Pipe walls */}
      <line x1="20" y1="40" x2="280" y2="40" stroke="#4D8DFF" strokeWidth={1.5} />
      <line x1="20" y1="140" x2="280" y2="140" stroke="#4D8DFF" strokeWidth={1.5} />
      {/* Velocity profile arrows — parabolic */}
      {[-40, -30, -20, -10, 0, 10, 20, 30, 40].map((offset, i) => {
        const y = 90 + offset;
        const len = 80 - (offset * offset) / 28;
        return (
          <g key={i}>
            <line x1={80} y1={y} x2={80 + len} y2={y} stroke="#6AA8FF" strokeWidth={0.9} opacity={0.7} />
            <polygon points={`${78 + len},${y - 3} ${84 + len},${y} ${78 + len},${y + 3}`} fill="#6AA8FF" opacity={0.7} />
          </g>
        );
      })}
      {/* Turbulent eddies near walls */}
      <path d="M 200 48 Q 210 54 220 48 Q 230 42 240 48" fill="none" stroke="#4D8DFF" strokeWidth={0.8} opacity={0.5} />
      <path d="M 200 132 Q 210 126 220 132 Q 230 138 240 132" fill="none" stroke="#4D8DFF" strokeWidth={0.8} opacity={0.5} />
      {/* Label */}
      <text x="90" y="163" fontSize="9" fill="#9AA7C2" fontFamily="monospace">Re · 44K</text>
    </svg>
  );
}

const ILLUSTRATIONS: Record<string, React.FC> = {
  "lbm-airfoil-simulation": IllustrationCFD,
  "fixed-wing-uav-design": IllustrationUAV,
  "hypersonic-inlet-analysis": IllustrationHypersonics,
  "ml-drag-prediction": IllustrationML,
  "wind-tunnel-wing-testing": IllustrationWindTunnel,
  "openfoam-turbulence-study": IllustrationOpenFOAM,
};

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
  const status = STATUS_COLORS[project.status] ?? STATUS_COLORS["Research"];
  const pill = CATEGORY_PILL[project.category] ?? CATEGORY_PILL["CFD & Aerodynamics"];
  const isEmber = project.category === "Hypersonics";
  const Illustration = ILLUSTRATIONS[project.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ flexShrink: 0, width: 300 }}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className={`glass-card${isEmber ? " ember-accent" : ""} flex flex-col`} style={{ height: 380 }}>
          {/* TODO: Replace with <Image> when org photo is provided */}
          {/* Illustration area */}
          <div
            style={{
              height: 210,
              background: "#101A35",
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px 16px 0 0",
              flexShrink: 0,
            }}
          >
            {isEmber && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background: "radial-gradient(circle at 100% 100%, rgba(255,138,76,0.2) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
            )}
            {Illustration ? <Illustration /> : (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgba(77,141,255,0.2)", fontSize: "3rem" }}>◈</span>
              </div>
            )}
          </div>

          {/* Content area */}
          <div className="flex flex-col flex-1 justify-between" style={{ padding: 16 }}>
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: 99,
                  background: pill.bg,
                  border: `1px solid ${pill.border}`,
                  color: pill.color,
                  marginBottom: 8,
                }}
              >
                {project.category}
              </span>
              <h3 style={{ fontWeight: 500, fontSize: "1rem", color: "#F5F7FF", lineHeight: 1.3 }}>
                {project.title}
              </h3>
            </div>

            {/* Footer row */}
            <div className="flex items-center justify-between" style={{ marginTop: 12 }}>
              <span style={{ color: "#9AA7C2", fontSize: "0.8rem" }}>{project.year}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.72rem", color: status.color }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: status.dot, display: "inline-block" }} />
                {project.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
