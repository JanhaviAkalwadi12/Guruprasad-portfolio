import { useEffect, useRef } from "react";

export function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tx = 50;
    let ty = 30;
    let cx = 50;
    let cy = 30;
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
    };
    let raf = 0;
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.setProperty("--mx", `${cx}%`);
      el.style.setProperty("--my", `${cy}%`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={ref}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,30%), oklch(0.55 0.25 295 / 25%), transparent 55%), radial-gradient(900px circle at 80% 10%, oklch(0.45 0.22 265 / 30%), transparent 60%), radial-gradient(700px circle at 10% 90%, oklch(0.4 0.2 250 / 30%), transparent 60%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* Particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-slow ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 5}s infinite`,
            opacity: 0.2 + Math.random() * 0.6,
          }}
        />
      ))}
    </div>
  );
}