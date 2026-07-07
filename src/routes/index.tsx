import { createFileRoute } from "@tanstack/react-router";
<<<<<<< HEAD
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Expertise } from "@/components/portfolio/Expertise";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Chatbot } from "@/components/Chatbot";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <SmoothScroll />
      <CustomCursor />
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
=======
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import {
  Download, Mail, Phone, MapPin, ArrowRight, ArrowUp, Sparkles, Zap, TrendingUp,
  Target, BarChart3, Users, Award, Briefcase, Building2, GraduationCap,
  Send, AtSign, ExternalLink, ChevronRight, Star, Trophy,
  LineChart, PieChart, DollarSign, Package, Truck, Globe as GlobeIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guruprasad H Vankalakunti — FMCG Sales & Marketing Professional" },
      { name: "description", content: "Driving FMCG growth through strategic sales & marketing excellence. 8+ years of experience across Godrej, HUL, ITC, Parle & Himalaya." },
      { property: "og:title", content: "Guruprasad H Vankalakunti — FMCG Sales & Marketing" },
      { property: "og:description", content: "Assistant Sales Executive at Godrej Consumer Products. Strategic sales leader driving revenue growth across India's leading FMCG brands." },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Portfolio,
});

/* ---------- Data ---------- */
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const ROTATING = [
  "Assistant Sales Executive",
  "Sales Professional",
  "Marketing Strategist",
  "Territory Growth Expert",
  "Business Development Specialist",
  "Channel Sales Expert",
];

const COMPANIES = [
  { name: "Godrej", short: "Godrej", years: "2025 — Present", role: "Assistant Sales Executive (ASE)", color: "#7c3aed", achievement: "Leading regional sales operations", angle: -90 },
  { name: "HUL", short: "HUL", years: "2024 — 2025", role: "Sales & Marketing Professional", color: "#1f4ba8", achievement: "Drove FMCG growth across territories", angle: -30 },
  { name: "ITC", short: "ITC", years: "2021 — 2024", role: "Sales Executive", color: "#c81c2a", achievement: "Expanded distribution network 40%", angle: 30 },
  { name: "Parle", short: "Parle", years: "2019 — 2021", role: "Sales Representative", color: "#e63946", achievement: "Exceeded quarterly sales targets", angle: 90 },
  { name: "Himalaya", short: "Himalaya", years: "2017 — 2019", role: "Marketing & Sales Executive", color: "#0a7d3f", achievement: "Built 100+ retail partnerships", angle: 150 },
];

const STATS = [
  { icon: Briefcase, value: 8, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 5, suffix: "", label: "Leading Companies" },
  { icon: Users, value: 100, suffix: "+", label: "Retail Partners" },
  { icon: TrendingUp, value: 1000, suffix: "+", label: "Customers Served" },
  { icon: Trophy, value: null, label: "Proven", sub: "Track Record" },
];

const TIMELINE = [
  { year: "2017 — 2019", company: "Himalaya Wellness", role: "Marketing & Sales Executive", color: "#0a7d3f", points: ["Launched wellness product lines across Karnataka", "Built 40+ retail partner relationships", "Grew territory revenue 25% YoY"] },
  { year: "2019 — 2021", company: "Parle Products", role: "Sales Representative", color: "#e63946", points: ["Managed FMCG distribution across 3 zones", "Exceeded quarterly targets by 18%", "Onboarded 60+ new retail accounts"] },
  { year: "2021 — 2024", company: "ITC Limited", role: "Sales Executive", color: "#c81c2a", points: ["Led secondary sales for personal care category", "Expanded distributor network by 40%", "Trained & mentored 12 field executives"] },
  { year: "2024 — 2025", company: "Hindustan Unilever", role: "Sales & Marketing Professional", color: "#1f4ba8", points: ["Managed strategic key accounts", "Rolled out trade promotion campaigns", "Drove 30% category growth in region"] },
  { year: "2025 — Present", company: "Godrej Consumer Products", role: "Assistant Sales Executive (ASE)", color: "#7c3aed", points: ["Leading territory sales operations", "Managing distributor & retail ecosystem", "Executing GTM strategy for new launches"] },
];

const EXPERTISE = [
  { icon: TrendingUp, title: "Sales Strategy", sub: "Growth & Execution" },
  { icon: Users, title: "Distributor Management", sub: "Network Strengthening" },
  { icon: BarChart3, title: "Market Expansion", sub: "New Markets Development" },
  { icon: Target, title: "Trade Marketing", sub: "Brand & Retail Growth" },
  { icon: Package, title: "Retail Excellence", sub: "Execution & Merchandising" },
  { icon: LineChart, title: "Business Analytics", sub: "Data Driven Decisions" },
];

const SKILLS = [
  "Sales Strategy", "Territory Management", "Business Development", "Distributor Management",
  "Dealer Management", "Retail Sales", "Trade Marketing", "Channel Sales", "Market Expansion",
  "Sales Forecasting", "Route-to-Market", "Customer Acquisition", "Revenue Growth",
  "Brand Promotion", "Consumer Behaviour", "Product Positioning", "Market Research",
  "Retail Branding", "Visual Merchandising", "Trade Promotions", "Shopper Marketing",
  "Pricing Strategy", "Competitive Analysis", "Customer Engagement",
];

const TOOLS = ["Excel", "PowerPoint", "Word", "Google Sheets", "Microsoft 365", "CRM", "SAP Sales", "Power BI", "Tableau", "Sales Dashboards", "KPI Tracking", "Business Analytics"];

const SOFT = ["Leadership", "Communication", "Negotiation", "Strategic Thinking", "Decision Making", "Relationship Building", "Team Leadership", "Time Management", "Public Speaking", "Client Management", "Adaptability"];

const ACHIEVEMENTS = [
  { icon: TrendingUp, title: "Business Growth", desc: "Consistent YoY revenue expansion across territories" },
  { icon: DollarSign, title: "Revenue Increase", desc: "Delivered double-digit growth across product categories" },
  { icon: Package, title: "Retail Expansion", desc: "Onboarded 100+ new retail partners in 3 years" },
  { icon: Target, title: "Sales Targets", desc: "Exceeded quarterly targets in 18 of last 20 quarters" },
  { icon: GlobeIcon, title: "Market Development", desc: "Opened untapped rural & semi-urban markets" },
  { icon: Truck, title: "Distribution Growth", desc: "40% expansion in distributor network coverage" },
];

const CERTS = [
  { icon: GraduationCap, title: "MBA in Marketing", sub: "Garden City University, Bangalore" },
  { icon: Award, title: "Sales Excellence Program", sub: "Corporate Training" },
  { icon: Trophy, title: "Leadership & Management", sub: "Executive Workshops" },
  { icon: Star, title: "Trade Marketing", sub: "FMCG Specialization" },
];

/* ---------- Components ---------- */

function CompanyLogo({ name, className = "" }: { name: string; className?: string }) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    Godrej: { bg: "#0b1e3f", text: "#ffffff", label: "Godrej" },
    HUL: { bg: "#1f4ba8", text: "#ffffff", label: "HUL" },
    ITC: { bg: "#c81c2a", text: "#ffffff", label: "ITC" },
    Parle: { bg: "#e63946", text: "#ffffff", label: "PARLE" },
    Himalaya: { bg: "#0a3d1f", text: "#ff9500", label: "Himalaya" },
  };
  const s = styles[name] ?? { bg: "#333", text: "#fff", label: name };
  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold ${className}`}
      style={{ background: s.bg, color: s.text, fontSize: "0.65em", letterSpacing: "0.02em" }}
    >
      {s.label}
    </div>
  );
}

function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);
  const bx = useTransform(mx, (v) => `${20 + v * 30}%`);
  const by = useTransform(my, (v) => `${20 + v * 30}%`);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, oklch(0.15 0.06 285) 0%, oklch(0.09 0.02 280) 60%)" }} />
      <motion.div
        className="absolute h-[60vw] w-[60vw] rounded-full animate-aurora"
        style={{ left: bx, top: by, background: "radial-gradient(circle, oklch(0.55 0.28 285 / 0.35), transparent 60%)", filter: "blur(80px)" }}
      />
      <div className="absolute right-0 top-1/3 h-[50vw] w-[50vw] rounded-full animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.25 320 / 0.25), transparent 60%)", filter: "blur(100px)", animationDelay: "-6s" }} />
      <div className="absolute -bottom-40 left-1/4 h-[50vw] w-[50vw] rounded-full animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.22 260 / 0.22), transparent 60%)", filter: "blur(100px)", animationDelay: "-12s" }} />
      {/* stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>
      {/* grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
    </div>
  );
}

function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className={`glass-strong flex items-center justify-between rounded-2xl px-4 py-3 ${scrolled ? "shadow-[0_10px_40px_oklch(0_0_0_/_0.5)]" : ""}`}>
          <button onClick={() => go("home")} className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, oklch(0.65 0.25 295), oklch(0.5 0.28 275))" }}>
              <span className="font-display text-sm font-bold text-white">GV</span>
              <span className="absolute inset-0 rounded-xl blur-md opacity-60" style={{ background: "oklch(0.65 0.25 295)" }} />
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-sm font-semibold leading-tight">Guruprasad H Vankalakunti</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Sales & Marketing Professional</div>
            </div>
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${active === n.id ? "text-white" : "text-muted-foreground hover:text-white"}`}
              >
                {active === n.id && (
                  <motion.span layoutId="navpill" className="absolute inset-0 rounded-full" style={{ background: "oklch(0.65 0.25 295 / 0.2)", border: "1px solid oklch(0.65 0.25 295 / 0.5)" }} />
                )}
                <span className="relative">{n.label}</span>
              </button>
            ))}
          </nav>
          <button
            onClick={() => go("contact")}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium transition-all hover:border-violet/60"
            style={{ background: "linear-gradient(135deg, oklch(0.2 0.06 285 / 0.6), oklch(0.1 0.03 280 / 0.4))" }}
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left"
      style={{
        scaleX: x,
        background: "linear-gradient(90deg, oklch(0.65 0.25 295), oklch(0.75 0.2 320), oklch(0.7 0.22 220))",
        boxShadow: "0 0 10px oklch(0.65 0.25 295)",
      }}
    />
  );
}

function GlowButton({ children, variant = "primary", onClick, icon: Icon }: {
  children: React.ReactNode; variant?: "primary" | "ghost"; onClick?: () => void; icon?: any;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`group relative flex items-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
        variant === "primary"
          ? "text-white shadow-[0_10px_40px_oklch(0.55_0.28_285_/_0.5)]"
          : "glass-strong text-white hover:border-violet/60"
      }`}
      style={variant === "primary" ? { background: "linear-gradient(135deg, oklch(0.6 0.28 285), oklch(0.5 0.3 275))" } : undefined}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      )}
      {Icon && <Icon className="relative h-4 w-4" />}
      <span className="relative">{children}</span>
      {variant === "primary" && <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </motion.button>
  );
}

function HeroGlobe() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* base pedestal glow */}
      <div className="absolute bottom-6 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-[50%]"
        style={{ background: "radial-gradient(ellipse, oklch(0.65 0.25 295 / 0.6), transparent 70%)", filter: "blur(30px)" }} />

      {/* orbit rings */}
      <div className="absolute inset-8 rounded-full border border-violet/30 animate-spin-slow" />
      <div className="absolute inset-16 rounded-full border border-violet/20" style={{ animation: "spin-slow 60s linear infinite reverse" }} />
      <div className="absolute inset-24 rounded-full border border-cyan-glow/20" />

      {/* the globe */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, oklch(0.7 0.25 295 / 0.9), oklch(0.35 0.2 285 / 0.8) 40%, oklch(0.15 0.1 280 / 0.9) 80%),
            repeating-linear-gradient(90deg, transparent 0 8px, oklch(1 0 0 / 0.08) 8px 9px),
            repeating-linear-gradient(0deg, transparent 0 8px, oklch(1 0 0 / 0.08) 8px 9px)
          `,
          boxShadow: `
            inset -20px -20px 60px oklch(0.1 0.05 280 / 0.9),
            inset 20px 20px 60px oklch(0.85 0.2 300 / 0.3),
            0 0 60px oklch(0.6 0.28 285 / 0.6),
            0 0 100px oklch(0.55 0.28 285 / 0.4)
          `,
        }}
      >
        <div className="absolute inset-0 rounded-full" style={{
          background: "radial-gradient(circle at 65% 70%, transparent 30%, oklch(0.1 0.05 280 / 0.4) 70%)",
        }} />
      </motion.div>

      {/* orbiting company logos */}
      {COMPANIES.map((c, i) => {
        const angle = (i / COMPANIES.length) * 360 - 90;
        const r = 42; // percentage
        const x = 50 + r * Math.cos((angle * Math.PI) / 180);
        const y = 50 + r * Math.sin((angle * Math.PI) / 180);
        return (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
            whileHover={{ scale: 1.15, zIndex: 40 }}
            className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="animate-float-orb" style={{ animationDelay: `${i * 0.5}s` }}>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium tracking-widest text-muted-foreground">
                {c.years}
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-lg opacity-70" style={{ background: c.color }} />
                <CompanyLogo name={c.name} className="relative h-16 w-16 border-2 border-white/20 shadow-[0_0_30px_oklch(0.65_0.25_295_/_0.6)]" />
              </div>
              {/* tooltip on hover */}
              <div className="pointer-events-none absolute left-1/2 top-full mt-3 w-52 -translate-x-1/2 rounded-xl glass-strong p-3 text-center opacity-0 shadow-xl transition-all group-hover:opacity-100 group-hover:translate-y-1">
                <div className="text-sm font-semibold text-white">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.role}</div>
                <div className="mt-1 text-[10px] text-violet-glow">{c.achievement}</div>
              </div>
            </div>
            {/* connection line to center */}
            <svg className="pointer-events-none absolute left-1/2 top-1/2 -z-10" style={{ width: "1px", height: "1px", overflow: "visible" }}>
              <line x1="0" y1="0"
                x2={-r * Math.cos((angle * Math.PI) / 180) * 5}
                y2={-r * Math.sin((angle * Math.PI) / 180) * 5}
                stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
              <defs>
                <linearGradient id="lineGrad">
                  <stop offset="0%" stopColor="oklch(0.65 0.25 295)" />
                  <stop offset="100%" stopColor="oklch(0.5 0.28 275)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        );
      })}

      {/* floating micro icons */}
      {[
        { Icon: BarChart3, x: 8, y: 20 },
        { Icon: LineChart, x: 88, y: 30 },
        { Icon: DollarSign, x: 12, y: 78 },
        { Icon: Trophy, x: 90, y: 82 },
      ].map((f, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className="absolute flex h-10 w-10 items-center justify-center rounded-lg glass-strong"
          style={{ left: `${f.x}%`, top: `${f.y}%` }}
        >
          <f.Icon className="h-4 w-4 text-violet-glow" />
        </motion.div>
      ))}
    </div>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2600);
    return () => clearInterval(t);
  }, []);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-glow animate-pulse" />
            Driving Growth. Building Relationships.
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-white">Guruprasad</span>
            <br />
            <span className="text-gradient-violet">H Vankalakunti</span>
          </h1>

          <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
            Driving FMCG Growth Through Strategic Sales & Marketing Excellence.
          </p>

          <div className="mt-5 flex h-7 items-center gap-2 text-sm text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">I am a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="font-semibold text-gradient-violet"
              >
                {ROTATING[idx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { dot: "oklch(0.6 0.25 285)", label: "Sales Leader" },
              { dot: "oklch(0.7 0.22 320)", label: "Marketing Strategist" },
              { dot: "oklch(0.7 0.2 220)", label: "Growth Driver" },
            ].map((p) => (
              <span key={p.label} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full" style={{ background: p.dot, boxShadow: `0 0 10px ${p.dot}` }} />
                {p.label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <GlowButton onClick={() => go("experience")}>View Experience</GlowButton>
            <GlowButton variant="ghost" onClick={() => go("contact")} icon={Mail}>Contact Me</GlowButton>
            <GlowButton variant="ghost" icon={Download}>Download Resume</GlowButton>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}>
          <HeroGlobe />
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = Date.now();
        const dur = 1600;
        const tick = () => {
          const p = Math.min(1, (Date.now() - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        tick();
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function StatsBar() {
  return (
    <section className="relative px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-strong grid grid-cols-2 gap-6 rounded-2xl p-6 sm:grid-cols-3 md:grid-cols-5 md:p-8"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <s.icon className="mx-auto mb-3 h-6 w-6 text-violet-glow" />
              <div className="font-display text-3xl font-bold text-gradient-violet md:text-4xl">
                {s.value !== null ? <Counter value={s.value} suffix={s.suffix ?? ""} /> : "Proven"}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}{s.sub ? <><br />{s.sub}</> : null}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, Icon }: { eyebrow: string; title: string; Icon: any }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
      <div className="inline-flex items-center gap-2 text-sm text-violet-glow">
        <Icon className="h-4 w-4" />
        <span className="font-medium tracking-wide">{eyebrow}</span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-bold text-gradient md:text-5xl">{title}</h2>
    </motion.div>
  );
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="relative px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="glass-strong rounded-2xl p-6 md:p-10">
          <SectionHeader eyebrow="My Experience Journey" title="Career Milestones" Icon={Sparkles} />

          {/* Horizontal on desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-16 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.65 0.25 295 / 0.6), transparent)" }} />
              <div className="grid grid-cols-5 gap-4">
                {TIMELINE.map((t, i) => (
                  <motion.div
                    key={t.company}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="group text-center"
                  >
                    <div className="text-xs font-medium tracking-widest text-muted-foreground">{t.year}</div>
                    <div className="relative mx-auto mt-3 h-24 w-24">
                      <div className="absolute inset-0 rounded-full blur-xl transition-opacity group-hover:opacity-100 opacity-60" style={{ background: t.color }} />
                      <CompanyLogo name={t.company.split(" ")[0] === "Hindustan" ? "HUL" : t.company.split(" ")[0].replace("Godrej", "Godrej").replace("Himalaya", "Himalaya").replace("Parle", "Parle").replace("ITC", "ITC")}
                        className="relative h-24 w-24 border-2 border-white/20" />
                    </div>
                    <div className="mt-4 text-sm font-semibold">{t.role}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t.company}</div>
                    <div className="mt-3 max-h-0 overflow-hidden text-left text-xs text-muted-foreground transition-all duration-500 group-hover:max-h-40 group-hover:mt-4">
                      <ul className="space-y-1 rounded-lg glass p-3">
                        {t.points.slice(0, 2).map((p) => (
                          <li key={p} className="flex gap-1.5">
                            <ChevronRight className="h-3 w-3 flex-shrink-0 text-violet-glow" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical on mobile */}
          <div className="space-y-6 lg:hidden">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.company}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 rounded-xl glass p-4"
              >
                <div className="flex-shrink-0">
                  <CompanyLogo name={t.company.split(" ")[0] === "Hindustan" ? "HUL" : t.company.split(" ")[0]} className="h-14 w-14 border-2 border-white/20" />
                </div>
                <div>
                  <div className="text-[10px] font-medium tracking-widest text-violet-glow">{t.year}</div>
                  <div className="text-sm font-semibold">{t.role}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow="About Me" title="Building brands, driving markets" Icon={Sparkles} />
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm an FMCG sales & marketing professional with <span className="text-white font-medium">8+ years</span> of experience across
              India's leading consumer brands — Godrej, HUL, ITC, Parle, and Himalaya. I specialize in
              territory growth, distributor management, trade marketing, and building high-performing
              retail ecosystems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From onboarding hundreds of retail partners to executing category-defining go-to-market
              campaigns, my work is grounded in strategy, relationships, and measurable business impact.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Current Role", value: "Assistant Sales Executive" },
                { label: "Company", value: "Godrej Consumer Products" },
                { label: "Education", value: "MBA, Marketing" },
                { label: "Location", value: "Bangalore, India" },
              ].map((d) => (
                <div key={d.label} className="rounded-xl glass p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.label}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{d.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass-strong rounded-2xl p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Career Snapshot</div>
                  <div className="mt-1 font-display text-xl font-semibold">Performance Overview</div>
                </div>
                <PieChart className="h-6 w-6 text-violet-glow" />
              </div>
              <div className="space-y-4">
                {[
                  { label: "Sales Strategy & Execution", pct: 95 },
                  { label: "Distributor Management", pct: 92 },
                  { label: "Trade Marketing", pct: 90 },
                  { label: "Market Expansion", pct: 88 },
                  { label: "Data & Analytics", pct: 82 },
                ].map((s, i) => (
                  <div key={s.label}>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="text-violet-glow font-semibold">{s.pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, oklch(0.55 0.28 285), oklch(0.75 0.2 320))", boxShadow: "0 0 10px oklch(0.65 0.25 295)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section id="expertise" className="relative px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="glass-strong rounded-2xl p-6 md:p-10">
          <div className="mb-8 flex items-center gap-2 text-sm text-violet-glow">
            <Zap className="h-4 w-4" />
            <span className="font-medium tracking-wide">My Expertise</span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {EXPERTISE.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-xl glass p-5 text-center transition-all hover:border-violet/60"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "radial-gradient(circle at top, oklch(0.55 0.28 285 / 0.3), transparent 70%)" }} />
                <div className="relative">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, oklch(0.3 0.1 285 / 0.6), oklch(0.15 0.05 280 / 0.4))", border: "1px solid oklch(0.65 0.25 295 / 0.4)" }}>
                    <e.icon className="h-5 w-5 text-violet-glow" />
                  </div>
                  <div className="text-sm font-semibold">{e.title}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{e.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills cloud */}
          <div className="mt-10">
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Core Competencies</div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="cursor-default rounded-full glass px-3.5 py-1.5 text-xs transition-colors hover:border-violet/60 hover:text-violet-glow"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tools + Soft skills */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Business Tools</div>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <span key={t} className="rounded-lg glass px-3 py-2 text-xs">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Soft Skills</div>
              <div className="flex flex-wrap gap-2">
                {SOFT.map((t) => (
                  <span key={t} className="rounded-lg glass px-3 py-2 text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="relative px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Achievements" title="Impact & Recognition" Icon={Trophy} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-6 transition-all hover:border-violet/60"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 transition-opacity group-hover:opacity-40" style={{ background: "radial-gradient(circle, oklch(0.65 0.25 295), transparent 70%)" }} />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, oklch(0.6 0.28 285), oklch(0.5 0.3 275))", boxShadow: "0 8px 24px oklch(0.55 0.28 285 / 0.4)" }}>
                  <a.icon className="h-5 w-5 text-white" />
                </div>
                <div className="font-display text-lg font-semibold">{a.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{a.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <div className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">Certifications & Education</div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl glass p-5"
              >
                <c.icon className="mb-3 h-6 w-6 text-violet-glow" />
                <div className="text-sm font-semibold">{c.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const items = [
    { icon: Phone, label: "Phone", value: "9980410833", href: "tel:9980410833" },
    { icon: Mail, label: "Email", value: "gvankalakunti@gmail.com", href: "mailto:gvankalakunti@gmail.com" },
    { icon: MapPin, label: "Location", value: "Bangalore, Karnataka, India" },
    { icon: GraduationCap, label: "Education", value: "MBA in Marketing" },
    { icon: Building2, label: "Current Company", value: "Godrej Consumer Products Ltd." },
  ];
  return (
    <section id="contact" className="relative px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="glass-strong rounded-2xl p-6 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Let's Connect" title="Start a Conversation" Icon={Mail} />
              <p className="max-w-md text-base text-muted-foreground">
                Passionate about building strong relationships, driving sales growth and creating
                lasting impact. Let's talk about how we can grow the next big brand together.
              </p>

              <div className="mt-8 space-y-3">
                {items.map((it) => {
                  const Wrap = it.href ? "a" : "div";
                  return (
                    <Wrap
                      key={it.label}
                      {...(it.href ? { href: it.href } : {})}
                      className="group flex items-center gap-4 rounded-xl glass p-4 transition-all hover:border-violet/60 hover:translate-x-1"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, oklch(0.6 0.28 285), oklch(0.5 0.3 275))" }}>
                        <it.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{it.label}</div>
                        <div className="text-sm font-semibold text-white">{it.value}</div>
                      </div>
                    </Wrap>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <blockquote className="relative rounded-2xl glass p-8">
                <span className="absolute -top-4 left-6 font-display text-6xl text-violet-glow opacity-60">"</span>
                <p className="text-lg italic leading-relaxed text-white/90">
                  Passionate about building strong relationships, driving sales growth and creating lasting impact.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full" style={{ background: "linear-gradient(135deg, oklch(0.65 0.25 295), oklch(0.5 0.28 275))" }} />
                  <div>
                    <div className="text-sm font-semibold">Guruprasad H Vankalakunti</div>
                    <div className="text-xs text-muted-foreground">Assistant Sales Executive · Godrej</div>
                  </div>
                </div>
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-3">
                <GlowButton icon={Mail} onClick={() => (window.location.href = "mailto:gvankalakunti@gmail.com")}>Email Me</GlowButton>
                <GlowButton variant="ghost" icon={Phone} onClick={() => (window.location.href = "tel:9980410833")}>Call Now</GlowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <div className="font-display text-lg font-bold text-gradient">Guruprasad H Vankalakunti</div>
            <div className="mt-1 text-xs text-muted-foreground">© 2026 · Designed with ❤ for Guruprasad H Vankalakunti</div>
          </div>
          <div className="flex items-center gap-3">
            {[
              { Icon: Send, href: "#" },
              { Icon: AtSign, href: "#" },
              { Icon: Mail, href: "mailto:gvankalakunti@gmail.com" },
              { Icon: Phone, href: "tel:9980410833" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i} href={href} whileHover={{ y: -3, scale: 1.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:border-violet/60 hover:text-violet-glow"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Developed by</span>
            <a
              href="https://janhaviakalwadi.site"
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-1 rounded-full glass px-3 py-1.5 text-white transition-all hover:border-violet/60 hover:text-violet-glow"
            >
              JANHAVI AKALWADI
              <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white animate-pulse-glow"
          style={{ background: "linear-gradient(135deg, oklch(0.6 0.28 285), oklch(0.5 0.3 275))" }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 200;
      let curr = "home";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) curr = n.id;
      }
      setActive(curr);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

function Portfolio() {
  const active = useActiveSection();
  return (
    <div className="dark relative min-h-screen text-foreground">
      <AuroraBackground />
      <ScrollProgress />
      <Navbar active={active} />
      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
        <ExperienceTimeline />
        <ExpertiseSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
>>>>>>> 87a364204bc7e090ea92dee4ec01d1c1f80bb2ec
    </div>
  );
}
