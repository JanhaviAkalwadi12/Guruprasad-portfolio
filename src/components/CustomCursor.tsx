import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden h-3 w-3 rounded-full bg-white mix-blend-difference md:block"
        style={{ left: pos.x - 6, top: pos.y - 6, transition: "transform 120ms ease-out" }}
      />
      <div
        className="pointer-events-none fixed z-[9998] hidden rounded-full border border-white/40 md:block"
        style={{
          left: pos.x - (hover ? 24 : 16),
          top: pos.y - (hover ? 24 : 16),
          width: hover ? 48 : 32,
          height: hover ? 48 : 32,
          transition: "width 200ms ease, height 200ms ease, left 200ms ease, top 200ms ease, background 200ms ease",
          background: hover ? "oklch(0.65 0.26 295 / 15%)" : "transparent",
        }}
      />
    </>
  );
}