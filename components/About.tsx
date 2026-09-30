import { profile, profileFacts } from "@/data/profile";
import { AboutTechPanel } from "./AboutTechPanel";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Reveal id="about" as="section" className="relative z-10 py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.96] text-ink md:text-7xl">
            A curious mind behind the code.
          </h2>
        </div>
        <div>
          <p className="text-pretty text-2xl leading-[1.35] text-ink md:text-3xl">
            Oneli is pursuing a {profile.degree} at {profile.universityShort}, with a career
            direction shaped by Quality Assurance, Business Analysis, practical software experience
            and steady curiosity for new technologies.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
            Her portfolio brings together academic projects, interface concepts and learning
            milestones from a path that values challenging environments, clear problem solving and
            thoughtful digital work.
          </p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {profileFacts.map((fact) => (
              <div
                key={fact.label}
                className="group border-t border-line py-5 transition-colors hover:border-ink"
              >
                <fact.icon className="mb-4 size-5 text-violet" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase text-muted">{fact.label}</p>
                <p className="mt-2 text-base font-semibold leading-6 text-ink">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell">
        <AboutTechPanel />
      </div>
    </Reveal>
  );
}
