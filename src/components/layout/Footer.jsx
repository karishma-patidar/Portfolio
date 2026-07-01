

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
            AARTI
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Aarti Patidar. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/aarti-patidar-864397227"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
