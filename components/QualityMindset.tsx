import { qualityPillars } from "@/data/profile";
import { Reveal } from "./Reveal";

export function QualityMindset() {
  return (
    <Reveal as="section" className="relative z-10 py-24">
      <div className="section-shell">
        <div className="grid gap-10 rounded-[1.5rem] border border-line bg-ink p-6 text-paper shadow-soft md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-paper/50">Quality Focus</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.98] md:text-6xl">
              Built with a Quality Mindset.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-paper/70">
              Oneli&apos;s career direction is centered on understanding how software behaves,
              noticing the small details that shape user trust, and learning how to help products
              work well in real-world conditions.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {qualityPillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <pillar.icon className="size-5 text-violet" aria-hidden="true" />
                  <span className="text-sm font-semibold">{pillar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
