import { activities } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Activities() {
  return (
    <Reveal as="section" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Beyond Academics"
          title="Leadership, community and contribution."
          copy="A concise view of school and university involvement without overstating professional experience."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {activities.map((group) => (
            <article
              key={group.source}
              className="rounded-[1.25rem] border border-line bg-paper/70 p-6 backdrop-blur md:p-8"
            >
              <h3 className="font-display text-3xl font-semibold text-ink">{group.source}</h3>
              <ul className="mt-8 grid gap-4">
                {group.roles.map((role) => (
                  <li key={role} className="flex gap-4 border-t border-line pt-4 text-muted">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
