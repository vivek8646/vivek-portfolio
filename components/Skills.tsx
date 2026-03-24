"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { resumeData } from "@/lib/data";

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3">
          Governance & standards
        </p>
        <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          Credentials
        </h2>
        <p className="mt-4 max-w-xl text-sm text-neutral-500 leading-relaxed">
          Certifications that underpin vendor conversations, cloud guardrails, and delivery hygiene.
        </p>
      </motion.div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {resumeData.certifications.map((cert, i) => (
          <motion.li
            key={cert}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex gap-4 items-start rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 transition-colors hover:border-violet-500/20 hover:bg-white/[0.08]"
          >
            <Award className="shrink-0 text-cyan-400 mt-0.5" size={22} />
            <span className="text-slate-200 text-sm leading-snug">{cert}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
