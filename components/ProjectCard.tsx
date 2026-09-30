"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { projects } from "@/data/profile";

type Project = (typeof projects)[number];

const accentClass = {
  violet: "from-violet/25 to-violet/5",
  moss: "from-moss/25 to-moss/5",
  clay: "from-clay/25 to-clay/5",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="cursor-target group relative overflow-hidden rounded-[1.25rem] border border-line bg-paper/72 p-5 shadow-sm backdrop-blur transition-colors hover:border-ink md:p-7"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      data-cursor="EXPLORE"
    >
      <span className="pointer-events-none absolute -right-4 top-2 font-display text-[8rem] font-extrabold leading-none text-ink/[0.035] md:text-[11rem]">
        {project.number}
      </span>
      <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase text-muted">{project.category}</p>
          <h3 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted md:text-base">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-white/35 px-3 py-1.5 text-xs font-semibold text-ink"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center text-sm font-bold uppercase text-ink">
            View project
            <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
        <div
          className={`relative min-h-72 overflow-hidden rounded-2xl border border-line bg-gradient-to-br p-3 ${accentClass[project.accent as keyof typeof accentClass]}`}
        >
          <Image
            src={project.image}
            alt={`Project visual for ${project.title}`}
            fill
            sizes="(max-width: 1024px) 90vw, 36vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <p className="absolute bottom-4 left-4 rounded-full border border-ink/10 bg-paper/85 px-3 py-1 text-xs font-semibold text-muted backdrop-blur">
            Project visual
          </p>
        </div>
      </div>
    </motion.article>
  );
}
