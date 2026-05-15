import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/project";

interface Props {
  params: { slug: string };
}

const STATUS_COLORS: Record<string, string> = {
  Completed: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8",
  "In Progress": "text-amber-400 border-amber-400/30 bg-amber-400/8",
  Research: "text-violet-400 border-violet-400/30 bg-violet-400/8",
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Your Name`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const { details } = project;

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
      {/* ──── Back navigation ──── */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* ──── Hero header ──── */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        {/* Category + Year */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400/70 tracking-widest uppercase">
            {project.category}
          </span>
          <span className="text-white/20 text-xs">·</span>
          <span className="font-mono text-xs text-white/30">{project.year}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          {project.title}
        </h1>

        {/* Summary */}
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-6">
          {project.summary}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4">
          <span
            className={`text-xs font-mono px-2.5 py-1 rounded border ${
              STATUS_COLORS[project.status]
            }`}
          >
            {project.status}
          </span>
          <span className="text-xs text-slate-500 font-mono">
            Role: {project.role}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ──── Cover image / placeholder ──── */}
      <div className="max-w-4xl mx-auto px-6 mb-14">
        <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-[#0d0d1a] border border-white/6 relative">
          {project.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 hero-grid opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-700/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="font-mono text-xs text-cyan-400/30 tracking-widest uppercase">
                  {project.category}
                </span>
                <span className="text-white/10 text-7xl font-bold leading-none">
                  {project.title.charAt(0)}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ──── Content sections ──── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_260px] gap-12">
          {/* Main content */}
          <div className="space-y-12">
            {sections.map(({ label, content }) => (
              <div key={label}>
                <h2 className="text-white font-semibold text-lg mb-1 flex items-center gap-3">
                  <span className="text-cyan-400 font-mono text-sm">◈</span>
                  {label}
                </h2>
                <div className="h-px bg-white/5 mb-4" />
                <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                  {content}
                </p>
              </div>
            ))}

            {/* Visuals placeholder */}
            <div>
              <h2 className="text-white font-semibold text-lg mb-1 flex items-center gap-3">
                <span className="text-cyan-400 font-mono text-sm">◈</span>
                Visuals
              </h2>
              <div className="h-px bg-white/5 mb-4" />
              <div className="grid grid-cols-2 gap-3">
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    className="aspect-video bg-[#0d0d1a] rounded-lg border border-white/6 flex items-center justify-center"
                  >
                    <span className="font-mono text-xs text-white/15">
                      image / plot {n}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick facts */}
            <div className="bg-[#0d0d1a] border border-white/6 rounded-xl p-5">
              <p className="font-mono text-xs text-cyan-400/70 tracking-widest uppercase mb-4">
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
                    <p className="text-xs text-slate-600 font-mono">{key}</p>
                    <p className="text-sm text-white/80 mt-0.5">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-[#0d0d1a] border border-white/6 rounded-xl p-5">
              <p className="font-mono text-xs text-cyan-400/70 tracking-widest uppercase mb-4">
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

            {/* Nav to other projects */}
            <div className="bg-[#0d0d1a] border border-white/6 rounded-xl p-5">
              <p className="font-mono text-xs text-cyan-400/70 tracking-widest uppercase mb-4">
                More Projects
              </p>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="block text-xs text-slate-400 hover:text-cyan-400 transition-colors py-1 border-b border-white/4 last:border-0"
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