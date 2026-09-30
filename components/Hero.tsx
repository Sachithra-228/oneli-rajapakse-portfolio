"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative z-10 min-h-screen overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute -bottom-28 -left-28 hidden h-80 w-[46rem] -rotate-12 rounded-[50%] bg-violet/14 blur-2xl lg:block" />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[47vw] lg:block">
        <div className="absolute right-[-4vw] top-[18vh] h-[72vh] w-[45vw] rounded-[48%_0_0_42%] bg-violet/15" />
        <div className="absolute right-[-3vw] top-[13vh] h-[82vh] w-[43vw] overflow-hidden rounded-[48%_0_0_44%]">
          <Image
            src="/image1.jpeg"
            alt=""
            fill
            priority
            sizes="43vw"
            className="object-cover object-[48%_16%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-paper/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/12 via-transparent to-paper/12" />
        </div>
        <div className="absolute right-[4vw] top-[21vh] h-56 w-56 rounded-full border border-violet/55" />
        <div className="absolute right-[2vw] top-[35vh] size-14 rounded-full bg-violet" />
        <div className="absolute right-[-5vw] top-[18vh] h-44 w-44 rounded-full bg-moss/22 blur-2xl" />
      </div>

      <div className="section-shell relative grid min-h-[calc(100vh-8rem)] items-center py-12">
        <div className="relative z-10 max-w-[56rem]">
          <motion.p
            className="mb-5 text-xs font-bold uppercase text-muted md:text-sm"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            IT Undergraduate - SLIIT - Quality Assurance Focus
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(3.35rem,13vw,9.4rem)] font-extrabold uppercase leading-[0.84] tracking-normal text-ink md:leading-[0.82] lg:text-[clamp(5.2rem,8vw,9.4rem)]"
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            Oneli
            <span className="block text-transparent [-webkit-text-stroke:1.5px_#121212]">
              Rajapakse
            </span>
          </motion.h1>
          <motion.div
            className="mt-7 h-1 w-16 rounded-full bg-violet md:mt-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.24, duration: 0.6 }}
          />
          <motion.p
            className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted md:text-xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
          >
            I&apos;m {profile.firstName}, an Information Technology undergraduate at{" "}
            {profile.universityShort} interested in Quality Assurance, software development and
            creating meaningful digital experiences.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
          >
            <a
              href="#work"
              className="group inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-paper/70 px-6 text-sm font-semibold text-ink backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s Connect
              <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          <motion.div
            className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-ink shadow-soft sm:max-w-[420px] lg:hidden"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.75 }}
          >
            <Image
              src="/image1.jpeg"
              alt="Portrait of Oneli Rajapakse"
              fill
              priority
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-cover object-[50%_18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/18 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
