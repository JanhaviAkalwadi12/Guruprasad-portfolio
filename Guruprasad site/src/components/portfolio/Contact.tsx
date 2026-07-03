import { Section } from "./Section";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, GraduationCap, Building2, ArrowRight } from "lucide-react";

const items = [
  { icon: MapPin, label: "Location", value: "Bangalore, Karnataka, India" },
  { icon: Phone, label: "Phone", value: "+91 99804 10833", href: "tel:+919980410833" },
  { icon: Mail, label: "Email", value: "gvankalakunti@gmail.com", href: "mailto:gvankalakunti@gmail.com" },
  { icon: GraduationCap, label: "Education", value: "MBA — Marketing, Garden City University" },
  { icon: Building2, label: "Currently", value: "Assistant Sales Executive, Godrej CPL" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Let's Connect"
      title="Open to strategic conversations."
      subtitle="Whether it's a growth mandate, a partnership discussion, or a hiring conversation — reach out directly."
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-cyan-500/10 p-8 md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
              Start a conversation about <span className="text-gradient">growth</span>.
            </h3>
            <p className="mt-4 max-w-md text-white/70">
              I collaborate with FMCG brands, distributors and retail partners across
              India. If you're looking to expand a territory, launch a channel, or
              activate a market — let's talk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+919980410833"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-5 py-3 text-sm font-medium text-white glow-purple transition hover:brightness-110"
                data-cursor-hover
              >
                <Phone className="h-4 w-4" /> Call Directly <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:gvankalakunti@gmail.com"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition hover:border-white/30"
                data-cursor-hover
              >
                <Mail className="h-4 w-4" /> Send Email
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((it, i) => {
              const El = (it.href ? "a" : "div") as any;
              return (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <El
                    href={it.href}
                    className="glass group flex h-full flex-col gap-3 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-fuchsia-400/40"
                    data-cursor-hover
                  >
                    <it.icon className="h-5 w-5 text-fuchsia-300" />
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-white/50">{it.label}</div>
                      <div className="mt-1 text-sm font-medium text-white">{it.value}</div>
                    </div>
                  </El>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}