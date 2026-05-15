"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold text-white hover:text-blue-300 transition-colors duration-200"
        >
          Deri
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active =
              href === "/projects" ? pathname.startsWith("/projects") : false;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors duration-200 ${
                  active ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="mailto:faizderirahman@gmail.com"
            className="text-sm px-4 py-1.5 border border-white/10 text-slate-300 rounded hover:border-blue-400/40 hover:text-white transition-all duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-slate-300 transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-slate-300 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-slate-300 transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0d1220] border-b border-white/[0.05] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-slate-300 hover:text-white border-b border-white/[0.05] last:border-0 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <a
                href="mailto:faizderirahman@gmail.com"
                className="block pt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                faizderirahman@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
