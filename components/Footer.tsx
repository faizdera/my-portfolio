"use client";
export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1e2b4a" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between gap-4">
        <span className="text-sm" style={{ color: "#4a5878" }}>
          © 2025 Faiz Deri Rahman · Bandung Institute of Technology
        </span>
        <a
          href="https://www.linkedin.com/in/faizderirahman/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors duration-200"
          style={{ color: "#4a5878" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f7ff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5878")}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
