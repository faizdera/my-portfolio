import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/project";

interface Props {
  params: Promise<{ slug: string }>;
}

const STATUS_COLORS: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  Completed: {
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.25)",
  },
  "In Progress": {
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.25)",
  },
  Research: {
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.25)",
  },
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
  const status = STATUS_COLORS[project.status] ?? STATUS_COLORS["Research"];

  const sections = [
    { label: "Overview", content: details.overview },
    { label: "Motivation", content: details.motivation },
    { label: "My Role", content: details.myRole },
    { label: "Technical Details", content: details.technicalDetails },
    { label: "Challenges & Lessons", content: details.challenges },
    { label: "Results & Next Steps", content: details.results },
  ];

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: "#050816" }}>
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono transition-colors duration-200 text-[#4a5878] hover:text-[#f5f7ff]"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <p
          className="font-mono text-xs tracking-[0.2em] uppercase mb-4"
          style={{ color: "rgba(77,141,255,0.6)" }}
        >
          {project.category} · {project.year}
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight mb-5"
          style={{ color: "#f5f7ff" }}
        >
          {project.title}
        </h1>
        <p
          className="text-lg leading-relaxed max-w-2xl mb-6"
          style={{ color: "#9aa7c2" }}
        >
          {project.summary}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="text-xs font-mono px-3 py-1 rounded-full"
            style={{
              color: status.color,
              background: status.bg,
              border: `1px solid ${status.border}`,
            }}
          >
            {project.status}
          </span>
          <span className="text-xs font-mono" style={{ color: "#4a5878" }}>
            Role: {project.role}
          </span>
        </div>
      </div>

      {/* Cover */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div
          className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden flex items-center justify-center"
          style={{
            background: "linear-gradient(155deg, #101a35 0%, #0b1226 100%)",
            border: "1px solid #1e2b4a",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(77,141,255,0.08) 0%, transparent 65%)",
            }}
          />
          <span
            className="relative font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(77,141,255,0.3)" }}
          >
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
                <h2
                  className="font-semibold text-base mb-3"
                  style={{ color: "#f5f7ff" }}
                >
                  {label}
                </h2>
                <hr className="hr-accent mb-4" />
                <p
                  className="leading-relaxed text-[0.95rem]"
                  style={{ color: "#9aa7c2" }}
                >
                  {content}
                </p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            {/* Quick facts */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "#101a35", border: "1px solid #1e2b4a" }}
            >
              <p
                className="font-mono text-[0.6rem] uppercase tracking-widest mb-4"
                style={{ color: "#4a5878" }}
              >
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
                    <p
                      className="text-[0.6rem] font-mono uppercase tracking-wider"
                      style={{ color: "#4a5878" }}
                    >
                      {key}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "#f5f7ff" }}>
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "#101a35", border: "1px solid #1e2b4a" }}
            >
              <p
                className="font-mono text-[0.6rem] uppercase tracking-widest mb-4"
                style={{ color: "#4a5878" }}
              >
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
            <div
              className="rounded-2xl p-5"
              style={{ background: "#101a35", border: "1px solid #1e2b4a" }}
            >
              <p
                className="font-mono text-[0.6rem] uppercase tracking-widest mb-4"
                style={{ color: "#4a5878" }}
              >
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
                      className="block text-xs py-2 transition-colors duration-200 text-[#9aa7c2] hover:text-[#f5f7ff]"
                      style={{ borderBottom: "1px solid #1e2b4a" }}
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
