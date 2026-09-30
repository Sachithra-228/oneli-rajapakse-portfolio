import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative z-10 pb-8">
      <div className="section-shell flex flex-col gap-7 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-extrabold uppercase text-ink">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-muted">
            Information Technology Undergraduate · QA / BA Enthusiast
          </p>
          <p className="mt-4 text-xs text-muted">© 2026 Oneli Rajapakse</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-ink">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <a href={`mailto:${profile.email}`} className="hover:text-violet">
            Email
          </a>
          <a href="#top" className="rounded-full border border-line px-4 py-2 hover:border-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
