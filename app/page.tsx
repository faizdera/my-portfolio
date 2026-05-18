"use client";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";
import { projects } from "@/data/project";
import { experiences } from "@/data/experience";
import { useRef } from "react";

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

const skills = ["OpenFOAM", "Python", "MATLAB", "TensorFlow", "SolidWorks", "C++"];

const aboutInfo = [
  { label: "University", value: "Bandung Institute of Technology" },
  { label: "Focus", value: "Computational & Experimental Aero" },
  { label: "Status", value: "Undergraduate, 2025" },
  { label: "Based", value: "Bandung, Indonesia" },
];

export default function HomePage() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero />

      {/* ── Fields of Interest Marquee ── */}
      <section
        style={{
          borderTop: "1px solid #1E2B4A",
          borderBottom: "1px solid #1E2B4A",
          padding: "32px 0",
          overflow: "hidden",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-8">
          {/* Static label */}
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

          {/* Marquee */}
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
      </section>

      {/* ── About ── */}
      <section
        id="about"
        style={{
          background: "#0B1226",
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection className="mb-12">
            <div className="section-label blue">ABOUT ME</div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                color: "#F5F7FF",
                lineHeight: 1.2,
              }}
            >
              Curious by nature.
              <br />
              Precise by training.
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-[55fr_45fr] gap-12 items-start">
            {/* Left: bio + skills */}
            <FadeInSection delay={0.08}>
              <div className="space-y-4 text-[0.95rem] leading-relaxed" style={{ color: "#9AA7C2" }}>
                <p>
                  I&apos;m Deri, an aerospace engineering student at Bandung Institute of
                  Technology. I&apos;m drawn to problems that sit at the edge of what&apos;s
                  computationally and physically tractable.
                </p>
                <p>
                  My work spans CFD simulations using Lattice Boltzmann Methods, UAV design
                  and testing, hypersonic aerothermodynamics, and applying machine learning to
                  accelerate engineering workflows.
                </p>
                <p>
                  I believe the best engineers understand their tools deeply enough to know
                  when to break the rules.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="tech-tag">
                    {s}
                  </span>
                ))}
              </div>
            </FadeInSection>

            {/* Right: info card */}
            <FadeInSection delay={0.16}>
              <div
                className="glass-card"
                style={{ borderLeft: "3px solid #4D8DFF", borderRadius: 16, padding: 24 }}
              >
                {aboutInfo.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 py-4"
                    style={i < aboutInfo.length - 1 ? { borderBottom: "1px solid #1E2B4A" } : {}}
                  >
                    <span style={{ color: "#4D8DFF", marginTop: 2 }}>★</span>
                    <div>
                      <p style={{ fontSize: "0.72rem", color: "#9AA7C2", marginBottom: 2 }}>{label}</p>
                      <p style={{ fontSize: "0.9rem", color: "#F5F7FF" }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ background: "#050816", paddingTop: 96, paddingBottom: 96 }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="section-label">SELECTED WORK</div>
            <div className="flex items-end justify-between mb-10">
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, color: "#F5F7FF" }}>
                Projects.
              </h2>
              <Link
                href="/projects"
                className="text-sm transition-colors duration-200"
                style={{ color: "#9AA7C2" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F7FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9AA7C2")}
              >
                See all projects →
              </Link>
            </div>
          </FadeInSection>

          <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-6 pb-6" style={{ width: "max-content" }}>
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section
        id="experience"
        style={{ background: "#0B1226", borderTop: "1px solid #1E2B4A", paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="section-label">BACKGROUND</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, color: "#F5F7FF", marginBottom: 40 }}>
              Experience.
            </h2>
          </FadeInSection>

          <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-6 pb-6" style={{ width: "max-content" }}>
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.id} experience={exp} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="relative overflow-hidden"
        style={{ background: "#050816", paddingTop: 128, paddingBottom: 128 }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(77,141,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <FadeInSection>
            <div className="section-label" style={{ justifyContent: "center" }}>GET IN TOUCH</div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                color: "#F5F7FF",
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              Let&apos;s work together.
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#9AA7C2",
                maxWidth: 480,
                margin: "0 auto 40px",
                lineHeight: 1.6,
              }}
            >
              Open to research collaborations, internships, and interesting engineering problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:faizderirahman@gmail.com" className="cta-primary">
                ✉ faizderirahman@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/faizderirahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary"
              >
                LinkedIn →
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
