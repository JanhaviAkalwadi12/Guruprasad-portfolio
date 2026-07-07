import { Section } from "./Section";
import { COMPANIES } from "./data";
import { CompanyBadge } from "./CompanyBadge";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Reverse to chronological order
const TIMELINE = [...COMPANIES].reverse();

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career Journey"
      title="From foundational FMCG training to Fortune-scale execution."
      subtitle="A progression across India's most trusted consumer brands — each chapter compounding into deeper territory mastery."
    >
      <div className="relative">
        {/* Vertical glowing line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-fuchsia-500/60 via-violet-500/40 to-cyan-400/40 md:block" />
        <div className="space-y-8">
          {TIMELINE.map((c, i) => (
            <motion.article
              key={c.id}

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}

              className="group relative md:pl-20"
            >
              {/* Node */}
              <div className="absolute left-0 top-4 hidden md:block">
                <div className="relative grid h-12 w-12 place-items-center">
                  <span className="absolute inset-0 rounded-full bg-fuchsia-500/30 blur-md animate-pulse-glow" />
                  <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400 ring-4 ring-black/60" />
                </div>
              </div>

              <div className="glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-fuchsia-400/40 md:p-8">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
                  style={{ background: `radial-gradient(circle, ${c.accent}, transparent 70%)` }}
                />
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <CompanyBadge letters={c.letters} color={c.color} accent={c.accent} size={72} />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-xl font-semibold text-white">{c.name}</h3>
                      <span className="text-xs font-medium uppercase tracking-widest text-fuchsia-300">{c.years}</span>
                    </div>
                    <div className="mt-1 text-sm text-white/70">{c.role}</div>
                    <ul className="mt-4 grid gap-2 text-sm text-white/70 md:grid-cols-2">
                      {c.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-fuchsia-300" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}