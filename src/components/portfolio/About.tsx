import { Section } from "./Section";
import { Counter } from "./Counter";
import { Award, Building2, Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Award, n: 8, s: "+", label: "Years FMCG Experience" },
  { icon: Building2, n: 5, s: "", label: "Leading FMCG Companies" },
  { icon: Handshake, n: 100, s: "+", label: "Retail Partners" },
  { icon: Users, n: 1000, s: "+", label: "Customers Served" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Eight years. Five brands. One relentless focus on growth."
      subtitle="MBA-trained sales & marketing professional with a track record of scaling territories, activating channels, and building durable retail relationships across India's most competitive FMCG landscape."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
          <p className="mt-4 text-white/70 leading-relaxed">
            Results-driven Sales & Marketing professional with 8+ years across five
            industry-defining FMCG companies — Himalaya, Parle, ITC, HUL and now Godrej
            Consumer Products. Passionate about building strong distributor and dealer
            networks, expanding retail footprints, and delivering consistent revenue
            growth through disciplined territory management and trade marketing.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-white/50">Education</div>
              <div className="text-white">MBA — Marketing</div>
              <div className="text-white/60 text-xs">Garden City University, Bangalore</div>
            </div>
            <div>
              <div className="text-white/50">Currently</div>
              <div className="text-white">Assistant Sales Executive</div>
              <div className="text-white/60 text-xs">Godrej Consumer Products Ltd.</div>
            </div>
            <div>
              <div className="text-white/50">Based in</div>
              <div className="text-white">Bangalore, Karnataka</div>
            </div>
            <div>
              <div className="text-white/50">Specialisation</div>
              <div className="text-white">FMCG Sales & Marketing</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-fuchsia-400/40"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl transition-all group-hover:bg-fuchsia-500/30" />
              <s.icon className="h-6 w-6 text-fuchsia-300" />
              <div className="mt-4 font-display text-4xl font-bold text-gradient">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}