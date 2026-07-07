import { useEffect, useState } from "react";
import { ArrowUp, ExternalLink, Heart, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/gv-logo.png";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-14">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-2xl" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GV" className="h-10 w-10 rounded-lg ring-1 ring-white/10" />
          <div>
            <div className="text-sm font-semibold text-white">Guruprasad H Vankalakunti</div>
            <div className="text-xs text-white/50">Growth · Vision · Value</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {[
            { i: Mail, h: "mailto:gvankalakunti@gmail.com" },
            { i: Phone, h: "tel:+919980410833" },
            { i: Linkedin, h: "#" },
          ].map(({ i: Icon, h }, k) => (
            <a
              key={k}
              href={h}
              className="glass grid h-11 w-11 place-items-center rounded-full text-white/80 transition-all hover:-translate-y-1 hover:text-white hover:border-fuchsia-400/40"
              data-cursor-hover
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="text-center text-xs text-white/50 md:text-right">
          <div className="flex items-center justify-center gap-1.5 md:justify-end">
            Designed with <Heart className="h-3.5 w-3.5 fill-fuchsia-400 text-fuchsia-400" /> for Guruprasad H Vankalakunti
          </div>
          <div className="mt-1 flex items-center justify-center gap-1.5 md:justify-end">
            Developed by
            <a
              href="https://janhaviakalwadi.site"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-fuchsia-300 hover:text-fuchsia-200"
            >
              Janhavi Akalwadi <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="mt-2 text-white/40">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </div>

      <a
        href="#home"
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white shadow-lg glow-purple transition-all duration-300 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        data-cursor-hover
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </footer>
  );
}