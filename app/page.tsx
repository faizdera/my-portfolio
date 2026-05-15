import Hero from "@/components/Hero";
import ProjectRow from "@/components/ProjectRow";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";
import { projects } from "@/data/project";

const featured = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Selected Work ── */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <FadeInSection className="mb-10">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold text-white">Selected Work</h2>
            <Link
              href="/projects"
              className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
            >
              All projects →
            </Link>
          </div>
        </FadeInSection>

        {/* Column headers */}
        <div className="flex items-baseline gap-4 pl-5 pb-3 border-b border-white/[0.08]">
          <span className="flex-1 text-[0.7rem] font-mono text-slate-600 uppercase tracking-widest">
            Project
          </span>
          <span className="hidden sm:block text-[0.7rem] font-mono text-slate-600 uppercase tracking-widest">
            Category
          </span>
          <span className="text-[0.7rem] font-mono text-slate-600 uppercase tracking-widest w-12 text-right">
            Year
          </span>
        </div>

        {featured.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </section>

      {/* ── About ── */}
      <section id="about" className="max-w-4xl mx-auto px-6 pb-24">
        <FadeInSection>
          <div className="border-t border-white/[0.06] pt-16">
            <h2 className="text-2xl font-semibold text-white mb-6">About</h2>
            <div className="max-w-lg space-y-4 text-slate-400 text-[0.95rem] leading-relaxed">
              <p>
                I&apos;m Faiz Deri Rahman, an aerospace engineering student at the
                Bandung Institute of Technology. My work spans computational fluid
                dynamics, UAV design, and machine learning applied to aerodynamic
                problems — areas where theory, code, and physical intuition all have
                to come together.
              </p>
              <p>
                I tend to build things from scratch when that&apos;s the best way to
                understand them. Most of the projects here started with a question I
                couldn&apos;t answer with a textbook.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── Achievements ── */}
      <section id="achievements" className="max-w-4xl mx-auto px-6 pb-24">
        <FadeInSection>
          <div className="border-t border-white/[0.06] pt-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Achievements</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Coming soon — academic milestones, competition results, and research
              highlights.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="max-w-4xl mx-auto px-6 pb-32">
        <FadeInSection>
          <div className="border-t border-white/[0.06] pt-16">
            <h2 className="text-2xl font-semibold text-white mb-4">Get in touch</h2>
            <p className="text-slate-400 text-[0.95rem] leading-relaxed mb-8 max-w-md">
              Working on something interesting, or just want to talk aerospace?
              Reach out.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:faizderirahman@gmail.com"
                className="px-6 py-3 bg-white text-[#080c14] font-medium text-sm rounded hover:bg-blue-50 transition-colors duration-200"
              >
                faizderirahman@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/faizderirahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/12 text-slate-300 text-sm rounded hover:border-white/25 hover:text-white transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
