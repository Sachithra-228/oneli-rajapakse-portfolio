"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 500, damping: 36 });
  const y = useSpring(mouseY, { stiffness: 500, damping: 36 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX - 18);
      mouseY.set(event.clientY - 18);
      setVisible(true);
      const target = event.target as HTMLElement;
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      setLabel(cursorTarget?.dataset.cursor ?? "");
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-9 min-w-9 items-center justify-center rounded-full border border-ink/25 bg-paper/70 px-2 text-[0.58rem] font-extrabold uppercase text-ink shadow-soft backdrop-blur md:flex"
      style={{ x, y, opacity: visible ? 1 : 0 }}
      animate={{ scale: label ? 1.75 : 1 }}
    >
      {label}
    </motion.div>
  );
}
