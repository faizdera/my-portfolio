"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/project";

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectRow({ project, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block relative">
        {/* Hover accent bar */}
        <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-400 rounded-full origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />

        <div className="flex items-baseline gap-4 pl-5 pr-1 py-5 border-b border-white/[0.06] group-hover:border-white/[0.10] transition-colors">
          {/* Title */}
          <span className="flex-1 min-w-0 text-[0.95rem] font-medium text-slate-300 group-hover:text-white transition-colors truncate">
            {project.title}
          </span>
          {/* Category */}
          <span className="hidden sm:block text-sm text-slate-600 flex-shrink-0 group-hover:text-slate-500 transition-colors">
            {project.category}
          </span>
          {/* Year */}
          <span className="text-sm text-slate-600 flex-shrink-0 tabular-nums w-12 text-right group-hover:text-slate-500 transition-colors">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
