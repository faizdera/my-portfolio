"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const centerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(5,8,22,0.92)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid #1e2b4a",
            }
          : { background: "transparent" }
      }
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
        {/* Left: logo */}
        <Link
          href="/"
          className="text-sm font-semibold transition-colors duration-200"
          style={{ color: "#f5f7ff" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#4d8dff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f7ff")}
        >
          Deri
        </Link>

        {/* Center: links */}
        <div className="hidden md:flex items-center justify-center gap-7">
          {centerLinks.map(({ href, label }) => {
            const active =
              href === "/projects" ? pathname.startsWith("/projects") : false;
            return (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors duration-200"
                style={{ color: active ? "#f5f7ff" : "#9aa7c2" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f7ff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = active ? "#f5f7ff" : "#9aa7c2")
                }
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:flex justify-end">
          <a
            href="mailto:faizderirahman@gmail.com"
            className="px-5 py-2 text-sm font-medium text-white rounded-full transition-all duration-200 hover:brightness-110"
            style={{ background: "#2563eb" }}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex justify-end col-span-2">
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px bg-[#9aa7c2] transition-transform duration-200"
              style={
                menuOpen ? { transform: "rotate(45deg) translateY(6px)" } : {}
              }
            />
            <span
              className="block w-5 h-px bg-[#9aa7c2] transition-opacity duration-200"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-5 h-px bg-[#9aa7c2] transition-transform duration-200"
              style={
                menuOpen
                  ? { transform: "rotate(-45deg) translateY(-6px)" }
                  : {}
              }
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "#0b1226",
              borderBottom: "1px solid #1e2b4a",
            }}
          >
            <div className="px-6 py-4 space-y-1">
              {centerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm border-b transition-colors duration-200"
                  style={{
                    color: "#9aa7c2",
                    borderColor: "#1e2b4a",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#f5f7ff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#9aa7c2")
                  }
                >
                  {label}
                </Link>
              ))}
              <a
                href="mailto:faizderirahman@gmail.com"
                className="block pt-4 text-sm font-medium"
                style={{ color: "#4d8dff" }}
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
