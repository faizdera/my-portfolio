"use client";
export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1E2B4A" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between gap-4">
        <span className="text-sm" style={{ color: "#9AA7C2" }}>
          © 2025 Faiz Deri Rahman · Bandung Institute of Technology
        </span>
        <a
          href="https://www.linkedin.com/in/faizderirahman/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors duration-200"
          style={{ color: "#9AA7C2" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F7FF")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#9AA7C2")}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
