"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/project";

const STATUS_COLORS: Record<string, string> = {
  Completed: "text-emerald-400 bg-emerald-400/8 border-emerald-400/20",
  "In Progress": "text-amber-400 bg-amber-400/8 border-amber-400/20",
  Research: "text-violet-400 bg-violet-400/8 border-violet-400/20",
};

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.07 }}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full group">
        <div className="h-full bg-[#0d0d1a] border border-white/6 rounded-xl overflow-hidden card-hover">
          {/* Cover image or placeholder */}
          <div className="relative h-44 bg-[#111128] overflow-hidden">
            {project.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              /* Placeholder with category-based pattern */
              <div className="w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 hero-grid opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/10" />
                <span className="relative font-mono text-xs text-cyan-400/40 tracking-widest uppercase">
                  {project.category}
                </span>
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="text-xs font-mono text-white/50 bg-[#07070e]/80 backdrop-blur px-2 py-0.5 rounded border border-white/8">
                {project.year}
              </span>
            </div>

            {/* Status badge */}
            <div className="absolute top-3 right-3">
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded border ${
                  STATUS_COLORS[project.status]
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-white font-semibold text-base leading-snug group-hover:text-cyan-400 transition-colors mb-2">
              {project.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
              {project.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer row */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-xs text-slate-500 font-mono">{project.role}</span>
              <span className="text-xs text-cyan-400/70 group-hover:text-cyan-400 transition-colors">
                Read more →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}