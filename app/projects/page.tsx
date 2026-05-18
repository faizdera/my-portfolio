"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects, CATEGORIES, Category } from "@/data/project";

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: "transparent" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label">SELECTED WORK</div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 500,
              color: "#F5F7FF",
              marginBottom: 16,
            }}
          >
            Projects.
          </h1>
          <p style={{ color: "#9AA7C2", maxWidth: 480, lineHeight: 1.6, fontSize: "0.95rem" }}>
            Engineering work — each project an honest attempt to understand something difficult.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-1.5 text-xs rounded-full border transition-all duration-200"
              style={
                active === cat
                  ? {
                      color: "#4D8DFF",
                      background: "rgba(77,141,255,0.08)",
                      border: "1px solid rgba(77,141,255,0.3)",
                    }
                  : {
                      color: "#9AA7C2",
                      background: "transparent",
                      border: "1px solid #1E2B4A",
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
          <div className="py-16 text-center text-sm" style={{ color: "#9AA7C2" }}>
            No projects in this category.
          </div>
        )}
      </div>
    </div>
  );
}
