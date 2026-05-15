import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";
import { projects } from "@/data/project";
import { experiences } from "@/data/experience";

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

const skills = [
  "Python",
  "MATLAB",
  "OpenFOAM",
  "SolidWorks",
  "ANSYS",
  "C++",
  "Lattice Boltzmann",
  "CFD",
  "FEM",
];

const aboutInfo = [
  { label: "University", value: "Bandung Institute of Technology" },
  { label: "Major", value: "Aerospace Engineering" },
  { label: "Location", value: "Bandung, Indonesia" },
  { label: "Email", value: "faizderirahman@gmail.com" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Fields of Interest ── */}
      <section style={{ background: "#050816", borderBottom: "1px solid #1e2b4a" }}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span
                className="font-mono text-[0.6rem] uppercase tracking-widest flex-shrink-0"
                style={{ color: "#4a5878" }}
              >
                Fields
              </span>
              {fields.map((f) => (
                <span key={f} className="field-pill flex-shrink-0">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" style={{ background: "#0b1226" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <FadeInSection className="mb-12">
            <p
              className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-2"
              style={{ color: "#4d8dff" }}
            >
              About
            </p>
            <h2 className="text-3xl font-bold" style={{ color: "#f5f7ff" }}>
              Who I Am
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
            {/* Left: bio + skills */}
            <FadeInSection delay={0.08}>
              <div
                className="space-y-4 text-[0.95rem] leading-relaxed"
                style={{ color: "#9aa7c2" }}
              >
                <p>
                  I&apos;m Faiz Deri Rahman, an aerospace engineering student at the
                  Bandung Institute of Technology. My work spans computational fluid
                  dynamics, UAV design, and machine learning applied to aerodynamic
                  problems — areas where theory, code, and physical intuition must
                  come together.
                </p>
                <p>
                  I tend to build things from scratch when that&apos;s the best way
                  to understand them. Most of the projects here started with a
                  question I couldn&apos;t answer with a textbook.
                </p>
                <p>
                  Outside of research, I enjoy contributing to student engineering
                  teams, teaching, and finding elegant solutions to messy real-world
                  problems.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="tech-tag text-xs px-3 py-1 rounded-full font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </FadeInSection>

            {/* Right: info card */}
            <FadeInSection delay={0.16}>
              <div
                className="rounded-2xl p-6 space-y-0"
                style={{ background: "#101a35", border: "1px solid #1e2b4a" }}
              >
                {aboutInfo.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className="py-4"
                    style={
                      i < aboutInfo.length - 1
                        ? { borderBottom: "1px solid #1e2b4a" }
                        : {}
                    }
                  >
                    <p
                      className="font-mono text-[0.6rem] uppercase tracking-widest mb-1"
                      style={{ color: "#4a5878" }}
                    >
                      {label}
                    </p>
                    <p className="text-sm" style={{ color: "#f5f7ff" }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ background: "#050816" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <FadeInSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p
                  className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-2"
                  style={{ color: "#4d8dff" }}
                >
                  Work
                </p>
                <h2 className="text-3xl font-bold" style={{ color: "#f5f7ff" }}>
                  Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-sm font-mono transition-colors duration-200 text-[#4a5878] hover:text-[#f5f7ff]"
              >
                See all →
              </Link>
            </div>
          </FadeInSection>

          <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-5 pb-4" style={{ width: "max-content" }}>
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" style={{ background: "#0b1226", borderTop: "1px solid #1e2b4a" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <FadeInSection>
            <p
              className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-2"
              style={{ color: "#4d8dff" }}
            >
              Background
            </p>
            <h2 className="text-3xl font-bold mb-10" style={{ color: "#f5f7ff" }}>
              Experience
            </h2>
          </FadeInSection>

          <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-5 pb-4" style={{ width: "max-content" }}>
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
        style={{ background: "#050816" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(77,141,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
          <FadeInSection>
            <p
              className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-4"
              style={{ color: "#4d8dff" }}
            >
              Contact
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f7ff" }}>
              Let&apos;s Connect
            </h2>
            <p
              className="text-base leading-relaxed mb-10 max-w-md mx-auto"
              style={{ color: "#9aa7c2" }}
            >
              Working on something interesting, or just want to talk aerospace?
              Reach out.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:faizderirahman@gmail.com"
                className="px-8 py-3 text-sm font-semibold text-white rounded-lg hover:brightness-110 transition-all duration-200"
                style={{ background: "#2563eb" }}
              >
                faizderirahman@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/faizderirahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-[#9aa7c2] hover:text-[#f5f7ff]"
                style={{ border: "1px solid #1e2b4a" }}
              >
                LinkedIn
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
