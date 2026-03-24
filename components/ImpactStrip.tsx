"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Metric = { value: number; suffix: string; label: string; accent: string };

const metrics: Metric[] = [
  {
    value: 40,
    suffix: "%",
    label: "Reduction in support volume (AI-led ops)",
    accent: "from-cyan-400 to-teal-300",
  },
  {
    value: 40,
    suffix: "%+",
    label: "Lift in search & retrieval precision",
    accent: "from-violet-400 to-fuchsia-300",
  },
  {
    value: 30,
    suffix: "%",
    label: "Improvement in decision-support accuracy",
    accent: "from-sky-400 to-blue-300",
  },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [hydrated, setHydrated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || !inView) return;
    const controls = animate(0, value, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1] as const,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [hydrated, inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function ImpactStrip() {
  return (
    <section className="relative border-y border-white/[0.06] bg-gradient-to-b from-black/40 via-slate-950/80 to-black/30 py-16 backdrop-blur-md">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(34,211,238,0.04)_50%,transparent_100%)] animate-[shimmer_14s_ease-in-out_infinite]" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3 md:gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.12,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="text-center"
          >
            <motion.span
              className={`mb-3 block bg-gradient-to-r ${m.accent} bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl`}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <CountUp value={m.value} suffix={m.suffix} />
            </motion.span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              {m.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
