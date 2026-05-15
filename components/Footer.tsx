export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-slate-600">
          © {new Date().getFullYear()} Faiz Deri Rahman
        </span>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:faizderirahman@gmail.com"
            className="text-slate-500 hover:text-white transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/faizderirahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
