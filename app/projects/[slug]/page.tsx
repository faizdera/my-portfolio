import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/project";

interface Props {
  params: Promise<{ slug: string }>;
}

const STATUS_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  Completed:    { color: "#34d399", bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.25)"  },
  "In Progress":{ color: "#fbbf24", bg: "rgba(251,191,36,0.08)",  border: "rgba(251,191,36,0.25)"  },
  Research:     { color: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.25)" },
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
    { label: "Overview",            content: details.overview },
    { label: "Motivation",          content: details.motivation },
    { label: "My Role",             content: details.myRole },
    { label: "Technical Details",   content: details.technicalDetails },
    { label: "Challenges & Lessons",content: details.challenges },
    { label: "Results & Next Steps",content: details.results },
  ];

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: "transparent" }}>
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs transition-colors duration-200"
          style={{ color: "#9AA7C2" }}
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="section-label blue">
          {project.category} · {project.year}
        </div>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            color: "#F5F7FF",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
            marginTop: 8,
          }}
        >
          {project.title}
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#9AA7C2", lineHeight: 1.6, maxWidth: "48rem", marginBottom: 20 }}>
          {project.summary}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <span
            style={{
              fontSize: "0.72rem",
              padding: "4px 12px",
              borderRadius: 99,
              color: status.color,
              background: status.bg,
              border: `1px solid ${status.border}`,
            }}
          >
            {project.status}
          </span>
          <span style={{ fontSize: "0.72rem", color: "#9AA7C2" }}>Role: {project.role}</span>
        </div>
      </div>

      {/* Cover */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div
          className="glass-card"
          style={{
            width: "100%",
            height: 240,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(77,141,255,0.3)" }}>
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
                <h2 style={{ fontWeight: 500, fontSize: "1rem", color: "#F5F7FF", marginBottom: 12 }}>
                  {label}
                </h2>
                <hr className="hr-accent" style={{ marginBottom: 16 }} />
                <p style={{ lineHeight: 1.7, fontSize: "0.95rem", color: "#9AA7C2" }}>{content}</p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="glass-card" style={{ padding: 20 }}>
              <p style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#9AA7C2", marginBottom: 16 }}>
                Quick Facts
              </p>
              <div className="space-y-3">
                {(
                  [
                    ["Year",     project.year],
                    ["Status",   project.status],
                    ["Role",     project.role],
                    ["Category", project.category],
                  ] as [string, string][]
                ).map(([key, val]) => (
                  <div key={key}>
                    <p style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#9AA7C2" }}>{key}</p>
                    <p style={{ fontSize: "0.875rem", color: "#F5F7FF", marginTop: 2 }}>{val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: 20 }}>
              <p style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#9AA7C2", marginBottom: 16 }}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag-accent">{tag}</span>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: 20 }}>
              <p style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#9AA7C2", marginBottom: 16 }}>
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
                      className="block text-xs py-2 transition-colors duration-200"
                      style={{ color: "#9AA7C2", borderBottom: "1px solid #1E2B4A" }}
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
