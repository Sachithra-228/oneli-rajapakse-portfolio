import { projects } from "@/data/profile";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <Reveal id="work" as="section" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects built while learning, experimenting and solving problems."
          copy="Project visuals are styled as polished product mockups to show each idea clearly and professionally."
        />
        <div className="grid gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
