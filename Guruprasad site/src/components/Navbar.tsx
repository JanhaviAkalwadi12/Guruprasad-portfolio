import { useEffect, useState } from "react";
import logo from "@/assets/gv-logo.png.asset.json";
import { Download } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[min(1200px,94%)] -translate-x-1/2 rounded-2xl transition-all duration-500 ${
        scrolled ? "glass py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo.url} alt="GV" className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/10" />
          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-semibold">Guruprasad H Vankalakunti</div>
            <div className="text-[11px] text-muted-foreground">Sales & Marketing Professional</div>
          </div>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-transform duration-300 hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group relative hidden overflow-hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:border-white/30 md:inline-flex md:items-center md:gap-2"
        >
          <Download className="h-3.5 w-3.5" /> Download Resume
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      </div>
    </header>
  );
}