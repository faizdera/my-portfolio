"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects, CATEGORIES, Category } from "@/data/project";

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Portfolio"
          title="All Projects"
          subtitle="Every project here represents a genuine attempt to understand something difficult. Some are polished, some are still evolving."
        />

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-xs font-mono rounded border transition-all duration-200 ${
                active === cat
                  ? "bg-cyan-400/15 border-cyan-400/40 text-cyan-400"
                  : "border-white/10 text-slate-400 hover:text-white hover:border-white/25"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-xs text-slate-600 font-mono mb-8 tracking-wide">
          <span className="text-cyan-400/60">▸</span> {filtered.length} project
          {filtered.length !== 1 ? "s" : ""}
          {active !== "All" ? ` in ${active}` : ""}
        </p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-mono text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}