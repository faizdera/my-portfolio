import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";

const featured = projects.filter((p) => p.featured);

const tools = [
  "OpenFOAM",
  "Python",
  "MATLAB",
  "C++",
  "TensorFlow",
  "XFOIL",
  "SolidWorks",
  "NumPy",
  "LaTeX",
  "Git",
];

const focus = [
  {
    icon: "≋",
    title: "Lattice Boltzmann Methods",
    desc: "Developing optimized LBM solvers for low-Re aerodynamics and porous media flows.",
  },
  {
    icon: "⟆",
    title: "Hypersonic Aerothermodynamics",
    desc: "Studying shock-boundary layer interactions and thermal loads for scramjet inlet design.",
  },
  {
    icon: "◇",
    title: "ML for Engineering",
    desc: "Physics-informed surrogate models to accelerate aerodynamic design optimization.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <Hero />

      {/* ─────────── ABOUT ─────────── */}
      <section id="about" className="py-28 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-16 items-start">
          <div>
            <SectionHeading
              label="About"
              title="Building things that matter."
              subtitle="An aerospace engineering student who cares deeply about understanding first principles — not just using tools, but knowing why they work."
            />
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                My work spans computational fluid dynamics, experimental
                aerodynamics, UAV design, and applying machine learning to hard
                engineering problems. I prefer doing things from scratch when
                that's the best way to actually understand them.
              </p>
              <p>
                I'm drawn to problems at the edge of what's tractable — flows
                that break standard models, designs that push material limits,
                methods that haven't been applied to a domain before.
              </p>
              <div className="pt-2 font-mono text-xs text-white/40 tracking-wide">
                <span className="text-cyan-400/70">▸</span> Undergraduate
                Aerospace Engineering · [Your University]
              </div>
            </div>
          </div>

          {/* Skills panel */}
          <div className="bg-[#0d0d1a] border border-white/8 rounded-xl p-6 tech-corners">
            <p className="font-mono text-[0.7rem] text-cyan-400/80 tracking-[0.25em] uppercase mb-5">
              Tools & Stack
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {tools.map((t) => (
                <span key={t} className="tech-tag-accent">
                  {t}
                </span>
              ))}
            </div>
            <div className="hr-accent mb-5" />
            <p className="font-mono text-[0.7rem] text-slate-500 leading-relaxed">
              <span className="text-cyan-400/60">$</span> Also comfortable with:
              Arduino / STM32 for experimental instrumentation, LaTeX for
              technical writing, basic composite fabrication.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-accent max-w-6xl mx-auto" />

      {/* ─────────── FEATURED PROJECTS ─────────── */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          subtitle="A selection of engineering projects — each one taught me something I couldn't learn any other way."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-sm border border-white/12 hover:border-cyan-400/50 hover:bg-cyan-400/5 text-slate-300 hover:text-white px-5 py-2.5 rounded transition-all duration-200"
          >
            View all projects <span>→</span>
          </a>
        </div>
      </section>

      <hr className="hr-accent max-w-6xl mx-auto" />

      {/* ─────────── CURRENT FOCUS ─────────── */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Now"
          title="Current Focus"
          subtitle="What I'm actively working on and thinking about."
        />
        <div className="grid sm:grid-cols-3 gap-5">
          {focus.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#0d0d1a] border border-white/8 rounded-xl p-6 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02] transition-all duration-300 group"
            >
              <span className="block text-3xl text-cyan-400/60 group-hover:text-cyan-400 transition-colors mb-4 leading-none">
                {icon}
              </span>
              <h3 className="text-white font-semibold text-base mb-2">
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr-accent max-w-6xl mx-auto" />

      {/* ─────────── CONTACT ─────────── */}
      <section id="contact" className="py-28 max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <SectionHeading
            label="Contact"
            title="Let's connect."
            subtitle="Whether it's a research collaboration, an interesting problem, or just an engineering conversation — reach out."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-[#07070e] font-semibold text-sm rounded transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-cyan-400/50 hover:bg-cyan-400/5 text-slate-300 hover:text-white text-sm rounded transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/faizdera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-cyan-400/50 hover:bg-cyan-400/5 text-slate-300 hover:text-white text-sm rounded transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}