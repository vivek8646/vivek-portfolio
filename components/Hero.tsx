"use client";

import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/data";
import { ArrowDown, ChevronDown, Mail, Phone } from "lucide-react";
import { useState } from "react";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 1.85 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const [narrativeOpen, setNarrativeOpen] = useState(false);
  const [first, ...rest] = resumeData.basics.name.split(" ");
  const last = rest.join(" ");

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-8">
      <motion.div
        variants={stagger}
        initial={false}
        animate="show"
        className="max-w-4xl"
      >
        <motion.p
          variants={fadeUp}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/90"
        >
          {resumeData.basics.label}
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mb-8 text-sm text-slate-500 md:text-base"
        >
          {resumeData.basics.titleLine}
        </motion.p>

        <motion.div variants={fadeUp} className="mb-8">
          <div className="flex flex-row flex-nowrap items-baseline gap-x-[0.35em] text-5xl font-bold tracking-tight md:text-7xl lg:text-5xl">
            <span className="text-white">{first}</span>
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-900 bg-clip-text text-transparent">
              {last}
            </span>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
        >
          {resumeData.basics.heroPitch}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6">
          <button
            type="button"
            onClick={() => setNarrativeOpen((o) => !o)}
            className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-400/90 transition-colors hover:text-cyan-300"
          >
            <span>{narrativeOpen ? "Hide full narrative" : "Full leadership narrative"}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${narrativeOpen ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {narrativeOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                className="overflow-hidden"
              >
                <p className="mt-4 max-w-2xl border-l-2 border-cyan-500/30 pl-5 text-sm leading-relaxed text-slate-400 md:text-[15px]">
                  {resumeData.basics.summary}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-4">
          <motion.button
            type="button"
            onClick={() =>
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-colors hover:bg-cyan-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Track record
          </motion.button>
          <motion.button
            type="button"
            onClick={() =>
              document.getElementById("mandate")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Strategic mandate
          </motion.button>
          <div className="flex w-full flex-wrap items-center gap-5 pl-0 text-slate-500 sm:w-auto sm:pl-4">
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="transition-colors hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="hidden h-6 w-px bg-slate-800 sm:block" />
            <a
              href={`tel:${resumeData.basics.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm transition-colors hover:text-slate-300"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {resumeData.basics.phone}
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
      >
        <ArrowDown size={28} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
