"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Statement() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.28, 1, 0.28]);

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-36">
      <div className="section-shell">
        <motion.p
          style={{ opacity }}
          className="text-balance font-display text-5xl font-semibold leading-[0.98] text-ink md:text-8xl"
        >
          I don&apos;t just want software to work.
          <span className="block text-violet">I want it to work well.</span>
        </motion.p>
      </div>
    </section>
  );
}
