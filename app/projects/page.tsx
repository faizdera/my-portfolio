"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectRow from "@/components/ProjectRow";
import { projects, CATEGORIES, Category } from "@/data/project";

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Projects
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-lg text-[0.95rem]">
            Engineering work — each project an honest attempt to understand
            something difficult.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-xs rounded-full border transition-all duration-200 ${
                active === cat
                  ? "bg-blue-400/10 border-blue-400/30 text-blue-300"
                  : "border-white/10 text-slate-500 hover:text-slate-200 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Column headers */}
        <div className="flex items-baseline gap-4 pl-5 pb-3 border-b border-white/[0.08] mb-1">
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

        {/* Project list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {filtered.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-slate-600 font-mono text-sm">
            No projects in this category.
          </div>
        )}
      </div>
    </div>
  );
}
