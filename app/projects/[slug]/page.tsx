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

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Faiz Deri Rahman`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
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
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white transition-colors duration-200"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <p className="font-mono text-xs text-blue-400/60 tracking-[0.2em] uppercase mb-4">
          {project.category} · {project.year}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-5">
          {project.title}
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-6">
          {project.summary}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`text-xs font-mono px-3 py-1 rounded border ${
              STATUS_COLORS[project.status]
            }`}
          >
            {project.status}
          </span>
          <span className="text-xs text-slate-500 font-mono">
            Role: {project.role}
          </span>
        </div>
      </div>

      {/* Cover */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div
          className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-white/[0.06] flex items-center justify-center"
          style={{
            background:
              "linear-gradient(155deg, #0d1525 0%, #080c14 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(96,165,250,0.07) 0%, transparent 65%)",
            }}
          />
          <span className="relative font-mono text-xs text-blue-400/30 tracking-[0.25em] uppercase">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_240px] gap-12">
          {/* Main content */}
          <div className="space-y-10 min-w-0">
            {sections.map(({ label, content }) => (
              <div key={label}>
                <h2 className="text-white font-semibold text-base mb-3">
                  {label}
                </h2>
                <hr className="hr-accent mb-4" />
                <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                  {content}
                </p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            {/* Quick facts */}
            <div className="bg-[#0d1220] border border-white/[0.06] rounded-xl p-5">
              <p className="font-mono text-[0.65rem] text-slate-600 uppercase tracking-widest mb-4">
                Quick Facts
              </p>
              <div className="space-y-3">
                {(
                  [
                    ["Year", project.year],
                    ["Status", project.status],
                    ["Role", project.role],
                    ["Category", project.category],
                  ] as [string, string][]
                ).map(([key, val]) => (
                  <div key={key}>
                    <p className="text-[0.65rem] text-slate-600 font-mono uppercase tracking-wider">
                      {key}
                    </p>
                    <p className="text-sm text-slate-200 mt-0.5">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="bg-[#0d1220] border border-white/[0.06] rounded-xl p-5">
              <p className="font-mono text-[0.65rem] text-slate-600 uppercase tracking-widest mb-4">
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
            <div className="bg-[#0d1220] border border-white/[0.06] rounded-xl p-5">
              <p className="font-mono text-[0.65rem] text-slate-600 uppercase tracking-widest mb-4">
                More Projects
              </p>
              <div className="space-y-1">
                {projects
                  .filter((p) => p.slug !== slug)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="block text-xs text-slate-400 hover:text-white transition-colors duration-200 py-2 border-b border-white/[0.05] last:border-0"
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
