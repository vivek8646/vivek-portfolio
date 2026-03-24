"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data";
import { ChevronDown, Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="scroll-mt-24 py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
      >
        Organizations
      </motion.h2>
      <motion.h3
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-cyan-200 to-cyan-400"
      >
        Leadership track record
      </motion.h3>

      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.08, type: "spring", stiffness: 100, damping: 20 }}
            className="group relative"
          >
            <motion.div
              layout
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-cyan-500/20 hover:bg-white/[0.08]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-3 mt-1 text-cyan-400/80">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={14} /> {exp.dates}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={14} /> {exp.location}
                  </div>
                </div>
              </div>
              
              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-6 space-y-3 border-l-2 border-cyan-500/30 pl-6">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-slate-300 text-sm leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="mt-4 flex justify-center">
                <ChevronDown
                  className={`text-slate-500 transition-transform duration-300 ${expanded === idx ? "rotate-180" : ""}`}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}