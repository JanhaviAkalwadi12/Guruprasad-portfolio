<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor-hover],input,textarea,select"));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    let raf = 0;
    const tick = () => {
      // Dot: fast follow
      dot.current.x += (target.current.x - dot.current.x) * 0.35;
      dot.current.y += (target.current.y - dot.current.y) * 0.35;
      // Ring: silky trailing follow
      ring.current.x += (target.current.x - ring.current.x) * 0.14;
      ring.current.y += (target.current.y - ring.current.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${pressed ? 0.85 : hover ? 1.6 : 1})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [hover, pressed, visible]);
=======
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
>>>>>>> 87a364204bc7e090ea92dee4ec01d1c1f80bb2ec

  return (
    <>
      <div
<<<<<<< HEAD
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2.5 w-2.5 rounded-full bg-white mix-blend-difference md:block"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 rounded-full border border-white/40 md:block"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease, background 250ms ease, border-color 250ms ease",
          background: hover ? "oklch(0.65 0.26 295 / 15%)" : "transparent",
          borderColor: hover ? "oklch(0.85 0.15 320 / 70%)" : "oklch(1 0 0 / 40%)",
          willChange: "transform",
=======
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
>>>>>>> 87a364204bc7e090ea92dee4ec01d1c1f80bb2ec
        }}
      />
    </>
  );
}