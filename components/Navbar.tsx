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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/projects" ? pathname.startsWith("/projects") : false;

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(5,8,22,0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid #1E2B4A",
            }
          : { background: "transparent" }
      }
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
        {/* Left: logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#FF8A4C",
              boxShadow: "0 0 8px rgba(255,138,76,0.6)",
              animation: "statusBreath 2.4s ease-in-out infinite",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span style={{ fontWeight: 500, color: "#F5F7FF", fontSize: "0.9rem" }}>
            Deri
          </span>
        </Link>

        {/* Center: links */}
        <div className="hidden md:flex items-center justify-center gap-7">
          {centerLinks.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors duration-200 relative pb-1"
                style={{
                  color: active ? "#F5F7FF" : "#9AA7C2",
                  backgroundImage: active
                    ? "linear-gradient(#FF8A4C, #FF8A4C)"
                    : "none",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                  backgroundSize: active ? "100% 2px" : "0 2px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F5F7FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = active ? "#F5F7FF" : "#9AA7C2";
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:flex justify-end">
          <a href="mailto:faizderirahman@gmail.com" className="cta-secondary" style={{ padding: "8px 20px", fontSize: "0.875rem" }}>
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
              className="block w-5 h-px bg-[#9AA7C2] transition-transform duration-200"
              style={menuOpen ? { transform: "rotate(45deg) translateY(6px)" } : {}}
            />
            <span
              className="block w-5 h-px bg-[#9AA7C2] transition-opacity duration-200"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-5 h-px bg-[#9AA7C2] transition-transform duration-200"
              style={menuOpen ? { transform: "rotate(-45deg) translateY(-6px)" } : {}}
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
            style={{ background: "#0B1226", borderBottom: "1px solid #1E2B4A" }}
          >
            <div className="px-6 py-4 space-y-1">
              {centerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm border-b transition-colors duration-200"
                  style={{ color: "#9AA7C2", borderColor: "#1E2B4A" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F7FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9AA7C2")}
                >
                  {label}
                </Link>
              ))}
              <a
                href="mailto:faizderirahman@gmail.com"
                className="block pt-4 text-sm font-medium"
                style={{ color: "#FF8A4C" }}
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
