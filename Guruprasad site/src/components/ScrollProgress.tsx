import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0%" }}
      className="fixed left-0 right-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
    />
  );
}