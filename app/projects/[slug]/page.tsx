import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/project";

interface Props {
  params: Promise<{ slug: string }>;
}

const STATUS_COLORS: Record<string, string> = {
  Completed: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "In Progress": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Research: "text-violet-400 border-violet-400/30 bg-violet-400/10",
};

const CATEGORY_ICONS: Record<string, string> = {
  "CFD & Aerodynamics": "≋",
  "UAV Systems": "◭",
  "Hypersonics": "⟆",
  "Machine Learning": "◇",
  "Experimental": "⊙",
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Your Name`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { details } = project;
  const icon = CATEGORY_ICONS[project.category] || "◈";

  const sections = [
    { label: "Overview", content: details.overview },
    { label: "Motivation", content: details.motivation },
    { label: "My Role", content: details.myRole },
    { label: "Technical Details", content: details.technicalDetails },
    { label: "Challenges & Lessons", content: details.challenges },
    { label: "Results & Next Steps", content: details.results },
  ];

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <span>←</span> Back to Projects
        </Link>
      </div>

      {/* Hero header */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400/80 tracking-[0.2em] uppercase">
            {project.category}
          </span>
          <span className="text-white/20">·</span>
          <span className="font-mono text-xs text-white/40">{project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-5">
          {project.title}
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-6">
          {project.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`text-xs font-mono px-3 py-1 rounded border ${STATUS_COLORS[project.status]}`}
          >
            {project.status}
          </span>
          <span className="text-xs text-slate-500 font-mono">
            <span className="text-cyan-400/60">▸</span> Role: {project.role}
          </span>
        </div>
      </div>

      {/* Cover area */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-[#0d0d1a] border border-white/8">
          {project.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 hero-grid opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-blue-700/10" />
              <div className="absolute inset-0 dot-grid opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-7xl text-cyan-400/40 font-light leading-none">
                  {icon}
                </span>
                <span className="font-mono text-xs text-cyan-400/50 tracking-[0.25em] uppercase">
                  {project.category}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_260px] gap-12">
          {/* Main content */}
          <div className="space-y-12 min-w-0">
            {sections.map(({ label, content }) => (
              <div key={label}>
                <h2 className="text-white font-semibold text-lg mb-3 flex items-center gap-3">
                  <span className="text-cyan-400 font-mono text-sm">◈</span>
                  {label}
                </h2>
                <div className="hr-accent mb-4" />
                <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                  {content}
                </p>
              </div>
            ))}

            {/* Visuals */}
            <div>
              <h2 className="text-white font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="text-cyan-400 font-mono text-sm">◈</span>
                Visuals
              </h2>
              <div className="hr-accent mb-4" />
              <div className="grid grid-cols-2 gap-3">
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    className="relative aspect-video bg-[#0d0d1a] rounded-lg border border-white/8 overflow-hidden flex items-center justify-center"
                  >
                    <div className="absolute inset-0 hero-grid opacity-40" />
                    <span className="relative font-mono text-xs text-white/20">
                      image / plot {n}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Quick facts */}
            <div className="bg-[#0d0d1a] border border-white/8 rounded-xl p-5 tech-corners">
              <p className="font-mono text-[0.7rem] text-cyan-400/80 tracking-[0.25em] uppercase mb-4">
                Quick Facts
              </p>
              <div className="space-y-3">
                {[
                  ["Year", project.year],
                  ["Status", project.status],
                  ["Role", project.role],
                  ["Category", project.category],
                ].map(([key, val]) => (
                  <div key={key}>
                    <p className="text-[0.65rem] text-slate-500 font-mono uppercase tracking-wider">
                      {key}
                    </p>
                    <p className="text-sm text-white/85 mt-0.5">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="bg-[#0d0d1a] border border-white/8 rounded-xl p-5">
              <p className="font-mono text-[0.7rem] text-cyan-400/80 tracking-[0.25em] uppercase mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* More projects */}
            <div className="bg-[#0d0d1a] border border-white/8 rounded-xl p-5">
              <p className="font-mono text-[0.7rem] text-cyan-400/80 tracking-[0.25em] uppercase mb-4">
                More Projects
              </p>
              <div className="space-y-1">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="block text-xs text-slate-400 hover:text-cyan-400 transition-colors py-2 border-b border-white/5 last:border-0"
                    >
                      {p.title}
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}