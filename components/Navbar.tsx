"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070e]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm text-white/80 hover:text-cyan-400 transition-colors"
        >
          <span className="text-cyan-400">{">"}</span> yourname<span className="text-cyan-400 animate-pulse">_</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href.replace("/#", "/"));
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors duration-200 ${
                  active
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-cyan-400/40 text-cyan-400 px-4 py-1.5 rounded hover:bg-cyan-400/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0d0d1a] border-b border-white/5 px-6 pb-6 pt-2"
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-300 hover:text-cyan-400 transition-colors border-b border-white/5 last:border-0"
              >
                {label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center border border-cyan-400/40 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-400/10 transition-colors"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}