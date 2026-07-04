import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/gv-portrait.png";
import { COMPANIES } from "./data";
import { CompanyBadge } from "./CompanyBadge";

const TITLES = [
  "Assistant Sales Executive",
  "Sales Professional",
  "Marketing Strategist",
  "Territory Growth Expert",
  "Business Development Specialist",
  "Channel Sales Expert",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % TITLES.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 md:pt-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 lg:grid-cols-[1.05fr_1fr]">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
            <span className="tracking-wide">Godrej Consumer Products · Assistant Sales Executive</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-gradient">Guruprasad H</span>
            <span className="block text-gradient">Vankalakunti</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-white/70 md:text-lg"
          >
            Driving FMCG Growth Through Strategic Sales & Marketing Excellence — across
            five industry-leading brands and eight years of measurable territory impact.
          </motion.p>

          {/* Rotating title */}
          <div className="mt-6 flex h-10 items-center gap-3 text-lg font-medium">
            <span className="h-px w-8 bg-gradient-to-r from-fuchsia-400 to-transparent" />
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300"
                >
                  {TITLES[idx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticButton href="#experience" variant="primary">
              View Experience <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#contact">
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
            <MagneticButton href="#contact">
              <Download className="h-4 w-4" /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Start a Project <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>

          {/* Mini stats */}
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              ["8+", "Years"],
              ["5", "Brands"],
              ["1000+", "Customers"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-semibold text-gradient">{n}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Portrait + orbiting logos */}
        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          {/* Rings */}
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/10" />
          <div className="absolute inset-6 animate-spin-reverse rounded-full border border-dashed border-white/10" />
          <div className="absolute inset-16 rounded-full border border-fuchsia-500/20" />

          {/* Glow behind */}
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-fuchsia-600/30 via-violet-600/20 to-cyan-500/20 blur-3xl" />

          {/* Portrait */}
          <div className="absolute inset-[18%] overflow-hidden rounded-full ring-1 ring-white/20 glow-purple">
            <img src={portrait.url} alt="Guruprasad H Vankalakunti" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Orbiting company badges */}
          {COMPANIES.map((c, i) => {
            const angle = (i / COMPANIES.length) * Math.PI * 2 - Math.PI / 2;
            const r = 46; // percent
            const x = 50 + Math.cos(angle) * r;
            const y = 50 + Math.sin(angle) * r;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                data-cursor-hover
              >
                <div className="animate-float-slow" style={{ animationDelay: `${i * 0.6}s` }}>
                  <CompanyBadge letters={c.letters} color={c.color} accent={c.accent} size={64} />
                </div>
                {/* Tooltip */}
                <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-black/80 p-3 text-left opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1">
                  <div className="text-xs font-semibold text-white">{c.name}</div>
                  <div className="mt-0.5 text-[11px] text-white/60">{c.role}</div>
                  <div className="mt-0.5 text-[11px] text-fuchsia-300">{c.years}</div>
                </div>
              </motion.div>
            );
          })}

          {/* Floating chips */}
          {[
            { t: "+38% Growth", top: "6%", left: "0%" },
            { t: "100+ Retailers", top: "88%", left: "10%" },
            { t: "112% Target", top: "10%", left: "82%" },
            { t: "1000+ Customers", top: "84%", left: "78%" },
          ].map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              className="glass absolute rounded-full px-3 py-1 text-[11px] font-medium text-white/80"
              style={{ top: f.top, left: f.left }}
            >
              {f.t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MagneticButton({
  children,
  href,
  variant = "secondary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white glow-purple hover:brightness-110"
      : variant === "ghost"
      ? "text-white/80 hover:text-white"
      : "glass text-white hover:border-white/30";
  return (
    <a href={href} className={`${base} ${styles}`} data-cursor-hover>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </a>
  );
}