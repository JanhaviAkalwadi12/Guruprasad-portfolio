import { Section } from "./Section";
import { SKILLS, TOOLS, SOFT_SKILLS } from "./data";
import { motion } from "framer-motion";
import {
  BarChart3, Briefcase, Target, TrendingUp, Users2, LineChart,
  Layers, Rocket, Presentation, MessageSquare, Handshake, Lightbulb,
  Brain, Clock, Mic, UserCheck, Zap, Crown,
} from "lucide-react";

const softIcons = [Crown, MessageSquare, Handshake, Brain, Target, Users2, Rocket, Clock, Mic, UserCheck, Zap];

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Expertise"
      title="A full-stack sales & marketing operating system."
      subtitle="From strategy and analytics to execution and negotiation — every skill sharpened on the ground across India's toughest FMCG territories."
    >
      {/* Skills orbit */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="glass relative overflow-hidden rounded-3xl p-8">
          <h3 className="text-lg font-semibold text-white">Core Sales & Marketing Capabilities</h3>
          <p className="mt-1 text-sm text-white/60">24 core disciplines applied across the FMCG value chain.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 transition-all hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 hover:text-white"
                data-cursor-hover
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="glass relative overflow-hidden rounded-3xl p-8">
          <h3 className="text-lg font-semibold text-white">Business Tools & Analytics</h3>
          <p className="mt-1 text-sm text-white/60">Fluent across the modern sales operations stack.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {TOOLS.map((t, i) => {
              const icons = [BarChart3, Presentation, Briefcase, Layers, Layers, Briefcase, Users2, LineChart, BarChart3, LineChart, Target, TrendingUp, BarChart3, Lightbulb];
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40"
                  data-cursor-hover
                >
                  <Icon className="h-4 w-4 text-cyan-300 transition-transform group-hover:scale-110" />
                  <span className="text-xs text-white/80">{t}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Soft skills */}
      <div className="mt-8">
        <h3 className="mb-4 text-sm uppercase tracking-widest text-white/50">Leadership & Soft Skills</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {SOFT_SKILLS.map((s, i) => {
            const Icon = softIcons[i % softIcons.length];
            return (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-5 transition-all hover:-translate-y-1 hover:border-fuchsia-400/40"
                data-cursor-hover
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-500/0 blur-2xl transition-all group-hover:bg-fuchsia-500/30" />
                <Icon className="h-5 w-5 text-fuchsia-300" />
                <div className="mt-3 text-sm font-medium text-white">{s}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}