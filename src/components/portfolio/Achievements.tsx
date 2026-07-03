import { Section } from "./Section";
import { ACHIEVEMENTS, CERTIFICATIONS } from "./data";
import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Numbers that measure momentum."
      subtitle="Sustained performance across territories, distributors and retail networks — the compounding proof of a Fortune-500 sales discipline."
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 transition-all hover:-translate-y-1 hover:border-fuchsia-400/40"
            data-cursor-hover
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <Trophy className="h-5 w-5 text-fuchsia-300" />
            <div className="mt-4 font-display text-3xl font-bold text-gradient">{a.metric}</div>
            <div className="mt-1 text-sm font-semibold text-white">{a.title}</div>
            <div className="mt-1 text-xs leading-relaxed text-white/60">{a.desc}</div>
          </motion.div>
        ))}
      </div>

      <h3 className="mt-16 mb-6 text-sm uppercase tracking-widest text-white/50">Education & Certifications</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <GraduationCap className="h-6 w-6 text-cyan-300" />
            <div className="mt-4 text-base font-semibold text-white">{c.title}</div>
            <div className="mt-1 text-xs text-white/60">{c.org}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}