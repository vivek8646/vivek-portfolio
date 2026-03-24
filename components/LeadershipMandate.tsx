"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Building2,
  Users,
  CloudCog,
} from "lucide-react";
import { resumeData } from "@/lib/data";

const icons = [BrainCircuit, Building2, Users, CloudCog];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

export default function LeadershipMandate() {
  return (
    <section
      id="mandate"
      className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden scroll-mt-24"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-500 mb-4">
          Strategic mandate
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Direction, not just delivery
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Operating at the intersection of executive intent, platform architecture, and regulated
          execution—setting roadmaps teams can ship against.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial={false}
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {resumeData.competencies.map((c, i) => {
          const Icon = icons[i] ?? BrainCircuit;
          return (
            <motion.article
              key={c.title}
              variants={card}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-transparent p-8 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.15)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 transition-colors group-hover:border-cyan-400/40 group-hover:bg-cyan-500/15">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{c.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed md:text-[15px]">{c.desc}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
