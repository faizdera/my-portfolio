"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects, CATEGORIES, Category } from "@/data/project";

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: "#050816" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p
            className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-3"
            style={{ color: "#4d8dff" }}
          >
            Portfolio
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: "#f5f7ff" }}
          >
            Projects
          </h1>
          <p
            className="leading-relaxed max-w-lg text-[0.95rem]"
            style={{ color: "#9aa7c2" }}
          >
            Engineering work — each project an honest attempt to understand
            something difficult.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-1.5 text-xs rounded-full border transition-all duration-200 font-mono"
              style={
                active === cat
                  ? {
                      color: "#4d8dff",
                      background: "rgba(77,141,255,0.08)",
                      border: "1px solid rgba(77,141,255,0.3)",
                    }
                  : {
                      color: "#4a5878",
                      background: "transparent",
                      border: "1px solid #1e2b4a",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <div key={project.id} className="flex justify-center sm:justify-start">
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div
            className="py-16 text-center font-mono text-sm"
            style={{ color: "#4a5878" }}
          >
            No projects in this category.
          </div>
        )}
      </div>
    </div>
  );
}
