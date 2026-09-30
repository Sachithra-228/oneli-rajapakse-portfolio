"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("About");
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 90],
    ["rgba(255,250,242,0.55)", "rgba(255,250,242,0.86)"],
  );

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (current) {
          const item = navItems.find((nav) => nav.href === `#${current.target.id}`);
          if (item) setActive(item.label);
        }
      },
      { rootMargin: "-42% 0px -52% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        style={{ background }}
        className="fixed left-1/2 top-4 z-40 w-[min(1120px,calc(100%-28px))] -translate-x-1/2 rounded-full border border-line px-4 py-3 shadow-soft backdrop-blur-xl md:px-5"
      >
        <nav className="flex items-center justify-between gap-5" aria-label="Main navigation">
          <a href="#top" className="font-display text-sm font-extrabold tracking-[0.18em] text-ink">
            ONELI
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm transition-colors hover:text-ink ${
                  active === item.label ? "text-ink" : "text-muted"
                }`}
              >
                {item.label}
                {active === item.label ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-2 left-0 h-px w-full bg-violet"
                  />
                ) : null}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="group rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s Talk{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line text-ink lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-ink px-6 py-6 text-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-extrabold tracking-[0.18em]">ONELI</span>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full border border-white/15"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-20 grid gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
