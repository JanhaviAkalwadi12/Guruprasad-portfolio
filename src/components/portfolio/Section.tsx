import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-fuchsia-300/80">
              <span className="h-px w-8 bg-fuchsia-400/60" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && <p className="mt-4 text-base text-white/60 md:text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}