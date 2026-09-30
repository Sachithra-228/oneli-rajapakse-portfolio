import { ArrowUpRight } from "lucide-react";
import { contacts, profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <Reveal id="contact" as="section" className="relative z-10 py-24 md:py-32">
      <div className="section-shell">
        <div className="grid gap-12 border-y border-line py-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.96] text-ink md:text-7xl">
              Let&apos;s create something meaningful.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-9 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <div className="grid gap-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const body = (
                <>
                  <Icon className="size-5 text-violet" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase text-muted">{contact.label}</p>
                    <p className="mt-1 font-semibold text-ink">{contact.value}</p>
                  </div>
                </>
              );

              return contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-paper/72 p-4 transition-all hover:-translate-y-1 hover:border-ink"
                >
                  {body}
                </a>
              ) : (
                <div
                  key={contact.label}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-paper/72 p-4"
                >
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
