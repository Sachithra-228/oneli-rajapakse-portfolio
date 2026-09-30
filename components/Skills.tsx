import { skills } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const rowAccents = [
  {
    number: "text-violet",
    wash: "bg-violet/10",
    line: "group-hover:border-violet/45",
  },
  {
    number: "text-moss",
    wash: "bg-moss/10",
    line: "group-hover:border-moss/45",
  },
  {
    number: "text-clay",
    wash: "bg-clay/10",
    line: "group-hover:border-clay/45",
  },
];

export function Skills() {
  return (
    <Reveal id="skills" as="section" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Tools for building, testing and learning."
          copy="Grouped by how Oneli applies them across programming, web projects and day-to-day development work."
        />
        <div className="overflow-hidden border-y border-line">
          {skills.map((group, index) => {
            const accent = rowAccents[index % rowAccents.length];

            return (
              <article
                key={group.title}
                className={`group grid gap-6 border-line py-8 transition-colors first:border-t-0 md:grid-cols-[120px_1fr] lg:grid-cols-[120px_0.8fr_1.2fr] ${
                  index === 0 ? "" : "border-t"
                } ${accent.line}`}
              >
                <span
                  className={`font-display text-5xl font-semibold ${accent.number} opacity-55 transition-opacity group-hover:opacity-100 md:text-6xl`}
                >
                  {group.number}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-semibold uppercase text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-muted">{group.detail}</p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {group.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className={`inline-flex min-h-11 items-center rounded-full border border-line bg-paper/70 px-4 text-sm font-semibold text-ink shadow-sm transition-all hover:-translate-y-1 hover:border-ink ${accent.wash}`}
                      style={{ marginTop: itemIndex % 2 === 0 ? 0 : 8 }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
