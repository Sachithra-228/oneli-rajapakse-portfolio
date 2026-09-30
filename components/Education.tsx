import { journey } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <Reveal id="journey" as="section" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="The Journey"
          title="Education, learning and early leadership."
          copy="A focused timeline of the academic and learning milestones listed in Oneli's CV."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-line md:block" />
          <div className="grid gap-5">
            {journey.map((item) => (
              <article
                key={`${item.title}-${item.meta}`}
                className="relative grid gap-4 border-t border-line py-7 md:grid-cols-[140px_1fr_220px] md:border-t-0 md:pl-12"
              >
                <span className="absolute left-[11px] top-8 hidden size-2.5 rounded-full bg-violet ring-8 ring-paper md:block" />
                <p className="text-xs font-bold uppercase text-muted">{item.label}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{item.meta}</p>
                </div>
                <p className="text-sm font-semibold text-ink md:text-right">{item.date}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
