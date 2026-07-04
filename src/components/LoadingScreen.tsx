import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/gv-logo.png";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] grid place-items-center bg-black"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-full bg-fuchsia-500/30 blur-3xl animate-pulse-glow" />
              <img src={logo.url} alt="GV" className="relative h-32 w-32 rounded-2xl object-cover ring-1 ring-white/20" />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="mx-auto mt-6 h-px w-40 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400"
            />
            <div className="mt-4 text-center text-[11px] uppercase tracking-[0.4em] text-white/60">
              Growth · Vision · Value
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}