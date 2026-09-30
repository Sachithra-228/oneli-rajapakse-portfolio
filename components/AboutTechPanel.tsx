const labels = ["Python", "Java", "JavaScript", "MERN", "GitHub", "Figma", "Android"];

export function AboutTechPanel() {
  return (
    <div className="relative mt-14 overflow-hidden rounded-[1.5rem] border border-line bg-ink p-5 text-paper shadow-soft md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(139,92,246,0.34),transparent_28%),radial-gradient(circle_at_15%_85%,rgba(93,124,96,0.28),transparent_27%)]" />
      <div className="absolute right-8 top-10 size-24 rounded-full border border-white/15 bg-white/10" />
      <div className="absolute bottom-8 right-20 size-14 rounded-full bg-violet/20 blur-xl" />
      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <div className="flex items-center justify-between text-xs uppercase text-paper/55">
            <span>IT Undergraduate · SLIIT</span>
            <span>QA / SE</span>
          </div>
          <div className="mt-10 space-y-1 font-display text-[clamp(4rem,13vw,8rem)] font-extrabold leading-[0.82]">
            <div>QA</div>
            <div className="text-paper/20">CODE</div>
            <div className="text-transparent [-webkit-text-stroke:1px_rgba(255,250,242,0.72)]">
              DESIGN
            </div>
          </div>
        </div>
        <div className="grid gap-5">
          <p className="max-w-md text-pretty text-lg leading-8 text-paper/70">
            A visual snapshot of the space Oneli is growing into: testing carefully, building
            practically and designing with users in mind.
          </p>
          <div className="flex flex-wrap gap-2">
            {labels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-paper/80"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
