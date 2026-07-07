import { a as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { a as motion, i as useScroll, n as animate, o as AnimatePresence, r as useSpring, t as useInView } from "../_libs/framer-motion.mjs";
import { A as ChartColumn, C as Handshake, D as Clock, E as Crown, F as ArrowUp, I as ArrowRight, M as Briefcase, N as Brain, O as CircleCheck, P as Award, S as Heart, T as ExternalLink, _ as MapPin, a as UserCheck, b as Lightbulb, c as Target, d as Rocket, f as Presentation, g as MessageCircle, h as MessageSquare, i as UsersRound, j as Building2, k as ChartLine, l as Sparkles, m as Mic, n as X, o as Trophy, p as Phone, r as Users, s as TrendingUp, t as Zap, u as Send, v as Mail, w as GraduationCap, x as Layers, y as Linkedin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BY0D74YC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			lerp: .09,
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 1.5,
			syncTouch: true,
			syncTouchLerp: .09
		});
		window.__lenis = lenis;
		let raf;
		const loop = (t) => {
			lenis.raf(t);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return null;
}
function CustomCursor() {
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	const target = (0, import_react.useRef)({
		x: -100,
		y: -100
	});
	const dot = (0, import_react.useRef)({
		x: -100,
		y: -100
	});
	const ring = (0, import_react.useRef)({
		x: -100,
		y: -100
	});
	const [hover, setHover] = (0, import_react.useState)(false);
	const [pressed, setPressed] = (0, import_react.useState)(false);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const move = (e) => {
			target.current.x = e.clientX;
			target.current.y = e.clientY;
			if (!visible) setVisible(true);
		};
		const over = (e) => {
			const t = e.target;
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
			dot.current.x += (target.current.x - dot.current.x) * .35;
			dot.current.y += (target.current.y - dot.current.y) * .35;
			ring.current.x += (target.current.x - ring.current.x) * .14;
			ring.current.y += (target.current.y - ring.current.y) * .14;
			if (dotRef.current) dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate(-50%, -50%)`;
			if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${pressed ? .85 : hover ? 1.6 : 1})`;
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
	}, [
		hover,
		pressed,
		visible
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dotRef,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2.5 w-2.5 rounded-full bg-white mix-blend-difference md:block",
		style: {
			opacity: visible ? 1 : 0,
			transition: "opacity 200ms ease"
		}
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ringRef,
		className: "pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 rounded-full border border-white/40 md:block",
		style: {
			opacity: visible ? 1 : 0,
			transition: "opacity 200ms ease, background 250ms ease, border-color 250ms ease",
			background: hover ? "oklch(0.65 0.26 295 / 15%)" : "transparent",
			borderColor: hover ? "oklch(0.85 0.15 320 / 70%)" : "oklch(1 0 0 / 40%)",
			willChange: "transform"
		}
	})] });
}
function AuroraBackground() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let tx = 50;
		let ty = 30;
		let cx = 50;
		let cy = 30;
		const onMove = (e) => {
			tx = e.clientX / window.innerWidth * 100;
			ty = e.clientY / window.innerHeight * 100;
		};
		let raf = 0;
		const tick = () => {
			cx += (tx - cx) * .08;
			cy += (ty - cy) * .08;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				className: "absolute inset-0",
				style: { background: "radial-gradient(600px circle at var(--mx,50%) var(--my,30%), oklch(0.55 0.25 295 / 25%), transparent 55%), radial-gradient(900px circle at 80% 10%, oklch(0.45 0.22 265 / 30%), transparent 60%), radial-gradient(700px circle at 10% 90%, oklch(0.4 0.2 250 / 30%), transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.05]",
				style: {
					backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
					maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
				}
			}),
			Array.from({ length: 40 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute rounded-full bg-white/40",
				style: {
					width: `${Math.random() * 2 + 1}px`,
					height: `${Math.random() * 2 + 1}px`,
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					animation: `float-slow ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 5}s infinite`,
					opacity: .2 + Math.random() * .6
				}
			}, i))
		]
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const x = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			scaleX: x,
			transformOrigin: "0%"
		},
		className: "fixed left-0 right-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
	});
}
var gv_logo_default = "/assets/gv-logo-DlR8QBtY.png";
var links = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Expertise",
		href: "#expertise"
	},
	{
		label: "Achievements",
		href: "#achievements"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed left-1/2 top-4 z-50 w-[min(1200px,94%)] -translate-x-1/2 rounded-2xl transition-all duration-500 ${scrolled ? "glass py-2" : "bg-transparent py-3"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: gv_logo_default.url,
						alt: "GV",
						className: "h-10 w-10 rounded-lg object-cover ring-1 ring-white/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden leading-tight sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: "Guruprasad H Vankalakunti"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted-foreground",
							children: "Sales & Marketing Professional"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						className: "relative rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:text-white",
						children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-transform duration-300 hover:scale-x-100" })]
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "group relative hidden overflow-hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:border-white/30 md:inline-flex md:items-center md:gap-2",
					children: ["Get in Touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" })]
				})
			]
		})
	});
}
function LoadingScreen() {
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setDone(true), 1600);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .8,
			ease: "easeInOut"
		},
		className: "fixed inset-0 z-[9999] grid place-items-center bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .6,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: {
						duration: .9,
						ease: "easeOut"
					},
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 rounded-full bg-fuchsia-500/30 blur-3xl animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/gv-logo-DlR8QBtY.png",
						alt: "GV",
						className: "relative h-32 w-32 rounded-2xl object-cover ring-1 ring-white/20"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { scaleX: 0 },
					animate: { scaleX: 1 },
					transition: {
						duration: 1.4,
						ease: "easeInOut"
					},
					className: "mx-auto mt-6 h-px w-40 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-center text-[11px] uppercase tracking-[0.4em] text-white/60",
					children: "Growth · Vision · Value"
				})
			]
		})
	}) });
}
var gv_portrait_default = "/assets/gv-portrait-l6o8TalU.png";
var COMPANIES = [
	{
		id: "godrej",
		name: "Godrej Consumer Products Ltd.",
		short: "Godrej",
		role: "Assistant Sales Executive (ASE)",
		years: "2025 — Present",
		color: "#0a3d62",
		accent: "#4facfe",
		letters: "GC",
		achievements: [
			"Leading territory growth strategy for consumer product portfolio",
			"Driving distributor & dealer expansion across Bangalore",
			"Managing retail relationships across 100+ outlets"
		]
	},
	{
		id: "hul",
		name: "Hindustan Unilever Ltd.",
		short: "HUL",
		role: "Sales & Marketing Professional",
		years: "2024 — 2025",
		color: "#1e40af",
		accent: "#60a5fa",
		letters: "HUL",
		achievements: [
			"Expanded retail distribution across key urban markets",
			"Launched trade marketing initiatives across 200+ stores",
			"Delivered consistent quarterly sales targets"
		]
	},
	{
		id: "itc",
		name: "ITC Limited",
		short: "ITC",
		role: "Sales Executive",
		years: "2021 — 2024",
		color: "#0f172a",
		accent: "#a78bfa",
		letters: "ITC",
		achievements: [
			"Grew territory revenue through channel partner activation",
			"Onboarded new distributors and improved route-to-market",
			"Recognised for consistent target achievement"
		]
	},
	{
		id: "parle",
		name: "Parle Products Pvt. Ltd.",
		short: "Parle",
		role: "Sales Representative",
		years: "2019 — 2021",
		color: "#7f1d1d",
		accent: "#f87171",
		letters: "P",
		achievements: [
			"Managed retail sales operations across assigned beat",
			"Improved shelf visibility and secondary sales",
			"Built strong retailer relationships and repeat orders"
		]
	},
	{
		id: "himalaya",
		name: "Himalaya Wellness Company",
		short: "Himalaya",
		role: "Marketing & Sales Executive",
		years: "2017 — 2019",
		color: "#166534",
		accent: "#4ade80",
		letters: "H",
		achievements: [
			"Executed brand promotion & consumer engagement drives",
			"Supported product positioning across retail channels",
			"First step into FMCG — foundational sales & marketing skills"
		]
	}
];
var SKILLS = [
	"Sales Strategy",
	"Territory Management",
	"Business Development",
	"Distributor Management",
	"Dealer Management",
	"Retail Sales",
	"Trade Marketing",
	"Channel Sales",
	"Market Expansion",
	"Sales Forecasting",
	"Route-to-Market",
	"Customer Acquisition",
	"Revenue Growth",
	"Brand Promotion",
	"Consumer Behaviour",
	"Product Positioning",
	"Market Research",
	"Retail Branding",
	"Visual Merchandising",
	"Trade Promotions",
	"Shopper Marketing",
	"Pricing Strategy",
	"Competitive Analysis",
	"Customer Engagement"
];
var TOOLS = [
	"Excel",
	"PowerPoint",
	"Word",
	"Google Sheets",
	"Google Workspace",
	"Microsoft 365",
	"CRM",
	"SAP Sales",
	"Power BI",
	"Tableau",
	"Sales Dashboards",
	"KPI Tracking",
	"Business Analytics",
	"Data Visualization"
];
var SOFT_SKILLS = [
	"Leadership",
	"Communication",
	"Negotiation",
	"Strategic Thinking",
	"Decision Making",
	"Relationship Building",
	"Team Leadership",
	"Time Management",
	"Public Speaking",
	"Client Management",
	"Adaptability"
];
var ACHIEVEMENTS = [
	{
		title: "Business Growth",
		metric: "+38%",
		desc: "Territory revenue lift YoY across managed accounts."
	},
	{
		title: "Revenue Increase",
		metric: "+42%",
		desc: "Secondary sales expansion via distributor activation."
	},
	{
		title: "Retail Expansion",
		metric: "100+",
		desc: "Active retail partners onboarded and serviced."
	},
	{
		title: "Sales Target",
		metric: "112%",
		desc: "Consistent quarterly target achievement average."
	},
	{
		title: "Market Development",
		metric: "5 Cos",
		desc: "Cross-portfolio experience across leading FMCG brands."
	},
	{
		title: "Distribution Growth",
		metric: "+25%",
		desc: "New dealer onboarding across urban and semi-urban markets."
	},
	{
		title: "Customer Base",
		metric: "1000+",
		desc: "End customers served through retail network."
	},
	{
		title: "Relationships",
		metric: "8+ Yrs",
		desc: "Long-term partnerships with retailers and distributors."
	}
];
var CERTIFICATIONS = [
	{
		title: "MBA in Marketing",
		org: "Garden City University, Bangalore"
	},
	{
		title: "Sales Excellence Programs",
		org: "FMCG industry workshops"
	},
	{
		title: "Leadership & Management",
		org: "Corporate training programs"
	},
	{
		title: "Trade Marketing",
		org: "Applied learning across FMCG portfolios"
	}
];
function CompanyBadge({ letters, color, accent, size = 56 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid place-items-center rounded-full ring-1 ring-white/20",
		style: {
			width: size,
			height: size,
			background: `radial-gradient(circle at 30% 30%, ${accent}, ${color} 70%)`,
			boxShadow: `0 0 30px -5px ${accent}80, inset 0 0 20px ${color}`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display font-bold tracking-tight text-white",
			style: {
				fontSize: size * .32,
				textShadow: "0 2px 8px rgba(0,0,0,0.5)"
			},
			children: letters
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full ring-1 ring-inset ring-white/30" })]
	});
}
var HeroScene = (0, import_react.lazy)(() => import("./HeroScene-D6waNdAX.mjs").then((m) => ({ default: m.HeroScene })));
var TITLES = [
	"Assistant Sales Executive",
	"Sales Professional",
	"Marketing Strategist",
	"Territory Growth Expert",
	"Business Development Specialist",
	"Channel Sales Expert"
];
function Hero() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setIdx((i) => (i + 1) % TITLES.length), 2400);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "relative min-h-screen overflow-hidden pt-32 md:pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 lg:grid-cols-[1.05fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-fuchsia-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tracking-wide",
						children: "Godrej Consumer Products · Assistant Sales Executive"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .1
					},
					className: "mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-gradient",
						children: "Guruprasad H"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-gradient",
						children: "Vankalakunti"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .25
					},
					className: "mt-6 max-w-xl text-base text-white/70 md:text-lg",
					children: "Driving FMCG Growth Through Strategic Sales & Marketing Excellence — across five industry-leading brands and eight years of measurable territory impact."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex h-10 items-center gap-3 text-lg font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gradient-to-r from-fuchsia-400 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									y: 24,
									opacity: 0
								},
								animate: {
									y: 0,
									opacity: 1
								},
								exit: {
									y: -24,
									opacity: 0
								},
								transition: {
									duration: .45,
									ease: "easeOut"
								},
								className: "block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300",
								children: TITLES[idx]
							}, idx)
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							href: "#experience",
							variant: "primary",
							children: ["View Experience ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							href: "#contact",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Contact Me"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							href: "#contact",
							variant: "ghost",
							children: ["Start a Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6",
					children: [
						["8+", "Years"],
						["5", "Brands"],
						["1000+", "Customers"]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl font-semibold text-gradient",
						children: n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-white/50",
						children: l
					})] }, l))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto aspect-square w-full max-w-[560px]",
				children: [
					mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-[-8%] z-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
							fallback: null,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroScene, {})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-spin-slow rounded-full border border-white/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-6 animate-spin-reverse rounded-full border border-dashed border-white/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-16 rounded-full border border-fuchsia-500/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-10 rounded-full bg-gradient-to-br from-fuchsia-600/30 via-violet-600/20 to-cyan-500/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-[18%] overflow-hidden rounded-full ring-1 ring-white/20 glow-purple",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gv_portrait_default.url,
							alt: "Guruprasad H Vankalakunti",
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" })]
					}),
					COMPANIES.map((c, i) => {
						const angle = i / COMPANIES.length * Math.PI * 2 - Math.PI / 2;
						const r = 46;
						const x = 50 + Math.cos(angle) * r;
						const y = 50 + Math.sin(angle) * r;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .5
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								delay: .6 + i * .1,
								type: "spring"
							},
							className: "group absolute -translate-x-1/2 -translate-y-1/2",
							style: {
								left: `${x}%`,
								top: `${y}%`
							},
							"data-cursor-hover": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-float-slow",
								style: { animationDelay: `${i * .6}s` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyBadge, {
									letters: c.letters,
									color: c.color,
									accent: c.accent,
									size: 64
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-black/80 p-3 text-left opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold text-white",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 text-[11px] text-white/60",
										children: c.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 text-[11px] text-fuchsia-300",
										children: c.years
									})
								]
							})]
						}, c.id);
					}),
					[
						{
							t: "+38% Growth",
							top: "6%",
							left: "0%"
						},
						{
							t: "100+ Retailers",
							top: "88%",
							left: "10%"
						},
						{
							t: "112% Target",
							top: "10%",
							left: "82%"
						},
						{
							t: "1000+ Customers",
							top: "84%",
							left: "78%"
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: 1 + i * .15 },
						className: "glass absolute rounded-full px-3 py-1 text-[11px] font-medium text-white/80",
						style: {
							top: f.top,
							left: f.left
						},
						children: f.t
					}, f.t))
				]
			})]
		})
	});
}
function MagneticButton({ children, href, variant = "secondary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: `group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${variant === "primary" ? "bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white glow-purple hover:brightness-110" : variant === "ghost" ? "text-white/80 hover:text-white" : "glass text-white hover:border-white/30"}`,
		"data-cursor-hover": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 inline-flex items-center gap-2",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" })]
	});
}
function Section({ id, eyebrow, title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 18
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-15% 0px -10% 0px"
				},
				transition: {
					duration: .55,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: { duration: .7 },
				className: "mb-14 max-w-3xl",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-fuchsia-300/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-fuchsia-400/60" }), eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl font-semibold leading-tight text-white md:text-5xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: title
						})
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-white/60 md:text-lg",
						children: subtitle
					})
				]
			}), children]
		})
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const controls = animate(0, to, {
			duration: 1.8,
			ease: "easeOut",
			onUpdate: (v) => setN(Math.round(v))
		});
		return () => controls.stop();
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n, suffix]
	});
}
var stats = [
	{
		icon: Award,
		n: 8,
		s: "+",
		label: "Years FMCG Experience"
	},
	{
		icon: Building2,
		n: 5,
		s: "",
		label: "Leading FMCG Companies"
	},
	{
		icon: Handshake,
		n: 100,
		s: "+",
		label: "Retail Partners"
	},
	{
		icon: Users,
		n: 1e3,
		s: "+",
		label: "Customers Served"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About",
		title: "Eight years. Five brands. One relentless focus on growth.",
		subtitle: "MBA-trained sales & marketing professional with a track record of scaling territories, activating channels, and building durable retail relationships across India's most competitive FMCG landscape.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .7 },
				className: "glass rounded-3xl p-8 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-semibold text-white",
						children: "Professional Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/70 leading-relaxed",
						children: "Results-driven Sales & Marketing professional with 8+ years across five industry-defining FMCG companies — Himalaya, Parle, ITC, HUL and now Godrej Consumer Products. Passionate about building strong distributor and dealer networks, expanding retail footprints, and delivering consistent revenue growth through disciplined territory management and trade marketing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-2 gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-white/50",
									children: "Education"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-white",
									children: "MBA — Marketing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-white/60 text-xs",
									children: "Garden City University, Bangalore"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-white/50",
									children: "Currently"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-white",
									children: "Assistant Sales Executive"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-white/60 text-xs",
									children: "Godrej Consumer Products Ltd."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-white/50",
								children: "Based in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-white",
								children: "Bangalore, Karnataka"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-white/50",
								children: "Specialisation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-white",
								children: "FMCG Sales & Marketing"
							})] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4",
				children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: "group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-fuchsia-400/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl transition-all group-hover:bg-fuchsia-500/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6 text-fuchsia-300" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 font-display text-4xl font-bold text-gradient",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.n,
								suffix: s.s
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs uppercase tracking-wider text-white/60",
							children: s.label
						})
					]
				}, s.label))
			})]
		})
	});
}
var TIMELINE = [...COMPANIES].reverse();
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		eyebrow: "Career Journey",
		title: "From foundational FMCG training to Fortune-scale execution.",
		subtitle: "A progression across India's most trusted consumer brands — each chapter compounding into deeper territory mastery.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-fuchsia-500/60 via-violet-500/40 to-cyan-400/40 md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-8",
				children: TIMELINE.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-12% 0px -8% 0px"
					},
					transition: {
						duration: .5,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: i * .04
					},
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .6,
						delay: i * .05
					},
					className: "group relative md:pl-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-0 top-4 hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid h-12 w-12 place-items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-fuchsia-500/30 blur-md animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400 ring-4 ring-black/60" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-fuchsia-400/40 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60",
							style: { background: `radial-gradient(circle, ${c.accent}, transparent 70%)` }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 md:flex-row md:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyBadge, {
								letters: c.letters,
								color: c.color,
								accent: c.accent,
								size: 72
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-semibold text-white",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium uppercase tracking-widest text-fuchsia-300",
											children: c.years
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm text-white/70",
										children: c.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 grid gap-2 text-sm text-white/70 md:grid-cols-2",
										children: c.achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 flex-none text-fuchsia-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
										}, a))
									})
								]
							})]
						})]
					})]
				}, c.id))
			})]
		})
	});
}
var softIcons = [
	Crown,
	MessageSquare,
	Handshake,
	Brain,
	Target,
	UsersRound,
	Rocket,
	Clock,
	Mic,
	UserCheck,
	Zap
];
function Expertise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "expertise",
		eyebrow: "Expertise",
		title: "A full-stack sales & marketing operating system.",
		subtitle: "From strategy and analytics to execution and negotiation — every skill sharpened on the ground across India's toughest FMCG territories.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass relative overflow-hidden rounded-3xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold text-white",
						children: "Core Sales & Marketing Capabilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-white/60",
						children: "24 core disciplines applied across the FMCG value chain."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: SKILLS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								scale: .9
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: { delay: i * .02 },
							className: "cursor-default rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 transition-all hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 hover:text-white",
							"data-cursor-hover": true,
							children: s
						}, s))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass relative overflow-hidden rounded-3xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold text-white",
						children: "Business Tools & Analytics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-white/60",
						children: "Fluent across the modern sales operations stack."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: TOOLS.map((t, i) => {
							const icons = [
								ChartColumn,
								Presentation,
								Briefcase,
								Layers,
								Layers,
								Briefcase,
								UsersRound,
								ChartLine,
								ChartColumn,
								ChartLine,
								Target,
								TrendingUp,
								ChartColumn,
								Lightbulb
							];
							const Icon = icons[i % icons.length];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: i * .03 },
								className: "group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40",
								"data-cursor-hover": true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-cyan-300 transition-transform group-hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/80",
									children: t
								})]
							}, t);
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-4 text-sm uppercase tracking-widest text-white/50",
				children: "Leadership & Soft Skills"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
				children: SOFT_SKILLS.map((s, i) => {
					const Icon = softIcons[i % softIcons.length];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 15
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .04 },
						className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-5 transition-all hover:-translate-y-1 hover:border-fuchsia-400/40",
						"data-cursor-hover": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-500/0 blur-2xl transition-all group-hover:bg-fuchsia-500/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-fuchsia-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-sm font-medium text-white",
								children: s
							})
						]
					}, s);
				})
			})]
		})]
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "achievements",
		eyebrow: "Achievements",
		title: "Numbers that measure momentum.",
		subtitle: "Sustained performance across territories, distributors and retail networks — the compounding proof of a Fortune-500 sales discipline.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-4",
				children: ACHIEVEMENTS.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-10% 0px"
					},
					transition: {
						duration: .45,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: i * .04
					},
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .05
					},
					className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 transition-all hover:-translate-y-1 hover:border-fuchsia-400/40",
					"data-cursor-hover": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5 text-fuchsia-300" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 font-display text-3xl font-bold text-gradient",
							children: a.metric
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm font-semibold text-white",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs leading-relaxed text-white/60",
							children: a.desc
						})
					]
				}, a.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-16 mb-6 text-sm uppercase tracking-widest text-white/50",
				children: "Education & Certifications"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: CERTIFICATIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-10% 0px"
					},
					transition: {
						duration: .45,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: i * .04
					},
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .05
					},
					className: "glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-6 w-6 text-cyan-300" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 text-base font-semibold text-white",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-white/60",
							children: c.org
						})
					]
				}, c.title))
			})
		]
	});
}
var items = [
	{
		icon: MapPin,
		label: "Location",
		value: "Bangalore, Karnataka, India"
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+91 99804 10833",
		href: "tel:+919980410833"
	},
	{
		icon: Mail,
		label: "Email",
		value: "gvankalakunti@gmail.com",
		href: "mailto:gvankalakunti@gmail.com"
	},
	{
		icon: GraduationCap,
		label: "Education",
		value: "MBA — Marketing, Garden City University"
	},
	{
		icon: Building2,
		label: "Currently",
		value: "Assistant Sales Executive, Godrej CPL"
	}
];
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Let's Connect",
		title: "Open to strategic conversations.",
		subtitle: "Whether it's a growth mandate, a partnership discussion, or a hiring conversation — reach out directly.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-cyan-500/10 p-8 md:p-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-3xl font-bold text-white md:text-4xl",
							children: [
								"Start a conversation about ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "growth"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-white/70",
							children: "I collaborate with FMCG brands, distributors and retail partners across India. If you're looking to expand a territory, launch a channel, or activate a market — let's talk."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+919980410833",
								className: "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-5 py-3 text-sm font-medium text-white glow-purple transition hover:brightness-110",
								"data-cursor-hover": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
									" Call Directly ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:gvankalakunti@gmail.com",
								className: "glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition hover:border-white/30",
								"data-cursor-hover": true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Send Email"]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
						children: items.map((it, i) => {
							const El = it.href ? "a" : "div";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: i * .06 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(El, {
									href: it.href,
									className: "glass group flex h-full flex-col gap-3 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-fuchsia-400/40",
									"data-cursor-hover": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5 text-fuchsia-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-widest text-white/50",
										children: it.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm font-medium text-white",
										children: it.value
									})] })]
								})
							}, it.label);
						})
					})]
				})
			]
		})
	});
}
function Footer() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShow(window.scrollY > 500);
		window.addEventListener("scroll", on);
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-white/10 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-2xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gv_logo_default,
							alt: "GV",
							className: "h-10 w-10 rounded-lg ring-1 ring-white/10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-white",
							children: "Guruprasad H Vankalakunti"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-white/50",
							children: "Growth · Vision · Value"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: [
							{
								i: Mail,
								h: "mailto:gvankalakunti@gmail.com"
							},
							{
								i: Phone,
								h: "tel:+919980410833"
							},
							{
								i: Linkedin,
								h: "#"
							}
						].map(({ i: Icon, h }, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: h,
							className: "glass grid h-11 w-11 place-items-center rounded-full text-white/80 transition-all hover:-translate-y-1 hover:text-white hover:border-fuchsia-400/40",
							"data-cursor-hover": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center text-xs text-white/50 md:text-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-1.5 md:justify-end",
								children: [
									"Designed with ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5 fill-fuchsia-400 text-fuchsia-400" }),
									" for Guruprasad H Vankalakunti"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-center justify-center gap-1.5 md:justify-end",
								children: ["Developed by", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://janhaviakalwadi.site",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1 text-fuchsia-300 hover:text-fuchsia-200",
									children: ["Janhavi Akalwadi ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 text-white/40",
								children: [
									"© ",
									(/* @__PURE__ */ new Date()).getFullYear(),
									" All rights reserved."
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#home",
				"aria-label": "Back to top",
				className: `fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white shadow-lg glow-purple transition-all duration-300 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`,
				"data-cursor-hover": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
			})
		]
	});
}
var CONTACT_KEYWORDS = [
	"contact",
	"reach",
	"email",
	"phone",
	"call",
	"mail",
	"get in touch",
	"connect",
	"hire",
	"message",
	"number",
	"whatsapp"
];
function wantsContact(text) {
	const t = text.toLowerCase();
	return CONTACT_KEYWORDS.some((k) => t.includes(k));
}
var SUGGESTIONS = [
	"Summarize Guruprasad's experience",
	"Which brands has he worked with?",
	"Key achievements?",
	"How can I contact him?"
];
function Chatbot() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [input, setInput] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		role: "assistant",
		content: "Hi! I'm Guruprasad's AI assistant. Ask me about his FMCG experience, achievements, or how to get in touch."
	}]);
	const scrollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, loading]);
	async function send(text) {
		const trimmed = text.trim();
		if (!trimmed || loading) return;
		const next = [...messages, {
			role: "user",
			content: trimmed
		}];
		setMessages(next);
		setInput("");
		setLoading(true);
		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: next.map(({ role, content }) => ({
					role,
					content
				})) })
			});
			if (!res.ok) {
				const errText = await res.text();
				const friendly = res.status === 429 ? "Too many requests right now. Please try again in a moment." : res.status === 402 ? "AI credits exhausted. Please try again later." : errText || "Something went wrong.";
				setMessages((m) => [...m, {
					role: "assistant",
					content: friendly
				}]);
			} else {
				const data = await res.json();
				setMessages((m) => [...m, {
					role: "assistant",
					content: data.reply || "(no response)"
				}]);
			}
		} catch {
			setMessages((m) => [...m, {
				role: "assistant",
				content: "Network error. Please try again."
			}]);
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		"aria-label": open ? "Close AI chat" : "Open AI chat",
		onClick: () => setOpen((o) => !o),
		initial: {
			scale: 0,
			opacity: 0
		},
		animate: {
			scale: 1,
			opacity: 1
		},
		transition: {
			delay: 1.4,
			type: "spring"
		},
		className: "fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white shadow-[0_10px_40px_-10px_rgba(217,70,239,0.7)] ring-1 ring-white/20 transition hover:brightness-110",
		"data-cursor-hover": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			initial: false,
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					rotate: -90,
					opacity: 0
				},
				animate: {
					rotate: 0,
					opacity: 1
				},
				exit: {
					rotate: 90,
					opacity: 0
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
			}, "x") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					rotate: 90,
					opacity: 0
				},
				animate: {
					rotate: 0,
					opacity: 1
				},
				exit: {
					rotate: -90,
					opacity: 0
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
			}, "m")
		}), !open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 animate-ping rounded-full bg-fuchsia-500/40" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 20,
			scale: .95
		},
		transition: { duration: .25 },
		className: "fixed bottom-24 right-4 z-[60] flex h-[min(560px,80vh)] w-[min(380px,92vw)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-fuchsia-600/20 to-violet-600/20 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-white",
							children: "AI Assistant"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-white/60",
							children: "Ask about Guruprasad's career"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400" }), " Online"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "flex-1 space-y-3 overflow-y-auto p-4",
				children: [messages.map((m, i) => {
					const prevUser = i > 0 ? messages[i - 1] : null;
					const showContactCta = m.role === "assistant" && i > 0 && (wantsContact(m.content) || prevUser?.role === "user" && wantsContact(prevUser.content));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex flex-col gap-2 ${m.role === "user" ? "items-end" : "items-start"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${m.role === "user" ? "bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white" : "border border-white/10 bg-white/5 text-white/90"}`,
							children: m.content
						}), showContactCta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setOpen(false);
								const el = document.getElementById("contact");
								if (el) el.scrollIntoView({
									behavior: "smooth",
									block: "start"
								});
								else window.location.hash = "#contact";
							},
							className: "group inline-flex items-center gap-1.5 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-3 py-1.5 text-[11px] font-medium text-fuchsia-200 transition hover:border-fuchsia-300 hover:bg-fuchsia-500/20 hover:text-white",
							children: ["Jump to Contact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-0.5" })]
						})]
					}, i);
				}), loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.3s]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.15s]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-white/60" })
						]
					})
				})]
			}),
			messages.length <= 1 && !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5 border-t border-white/10 p-3",
				children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => send(s),
					className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70 transition hover:border-fuchsia-400/40 hover:text-white",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					send(input);
				},
				className: "flex items-center gap-2 border-t border-white/10 bg-black/40 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Ask anything...",
					className: "flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-fuchsia-400/50 focus:outline-none",
					disabled: loading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: loading || !input.trim(),
					className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white transition hover:brightness-110 disabled:opacity-40",
					"aria-label": "Send",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
				})]
			})
		]
	}) })] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chatbot, {})
		]
	});
}
//#endregion
export { Index as component };
