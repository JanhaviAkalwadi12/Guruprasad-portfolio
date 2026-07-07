import { a as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CLO7iJc0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DZFSaXYK.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Guruprasad H Vankalakunti — FMCG Sales & Marketing Executive" },
			{
				name: "description",
				content: "Assistant Sales Executive at Godrej Consumer Products. 8+ years driving FMCG growth across HUL, ITC, Parle, Himalaya and Godrej."
			},
			{
				name: "author",
				content: "Guruprasad H Vankalakunti"
			},
			{
				property: "og:title",
				content: "Guruprasad H Vankalakunti — FMCG Sales & Marketing Executive"
			},
			{
				property: "og:description",
				content: "Assistant Sales Executive at Godrej Consumer Products. 8+ years driving FMCG growth across HUL, ITC, Parle, Himalaya and Godrej."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			},
			{
				name: "twitter:title",
				content: "Guruprasad H Vankalakunti — FMCG Sales & Marketing Executive"
			},
			{
				name: "twitter:description",
				content: "Assistant Sales Executive at Godrej Consumer Products. 8+ years driving FMCG growth across HUL, ITC, Parle, Himalaya and Godrej."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da5b5343-4a39-45a6-8b9f-a9ae65a01156/id-preview-af2f7aaa--ea3372ca-7caf-4453-b4c8-412cb209a96e.lovable.app-1783403072587.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da5b5343-4a39-45a6-8b9f-a9ae65a01156/id-preview-af2f7aaa--ea3372ca-7caf-4453-b4c8-412cb209a96e.lovable.app-1783403072587.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-BY0D74YC.mjs");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var SYSTEM_PROMPT = `You are the AI assistant for Guruprasad H Vankalakunti's executive portfolio website.

About Guruprasad:
- FMCG Sales & Marketing Professional based in Bangalore, India
- 8+ years of experience across 5 leading FMCG brands
- Currently Assistant Sales Executive at Godrej Consumer Products (2025 — Present)
- Previously: Hindustan Unilever (2024-25), ITC Limited (2021-24), Parle Products (2019-21), Himalaya Wellness (2017-19)
- Education: MBA in Marketing, Garden City University, Bangalore
- Contact: +91 99804 10833 · gvankalakunti@gmail.com
- Key achievements: +38% territory revenue growth, +42% secondary sales, 100+ retail partners, 112% avg quarterly target, 1000+ customers served
- Expertise: Sales Strategy, Territory Management, Distributor & Dealer Management, Trade Marketing, Channel Sales, Route-to-Market, Business Development, Brand Promotion

Guidelines:
- Answer concisely (1-3 short sentences) unless asked for detail.
- Be warm, professional, and executive in tone.
- For hiring/partnership/contact intent, share phone/email and suggest the Contact section.
- Only answer questions relevant to Guruprasad, his career, expertise, or how to get in touch. Politely redirect off-topic questions.`;
var Route = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const { messages } = await request.json();
		if (!Array.isArray(messages)) return new Response("Messages required", { status: 400 });
		const key = processModule.env.LOVABLE_API_KEY;
		if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
		const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Lovable-API-Key": key
			},
			body: JSON.stringify({
				model: "google/gemini-3-flash-preview",
				messages: [{
					role: "system",
					content: SYSTEM_PROMPT
				}, ...messages]
			})
		});
		if (!res.ok) {
			const text = await res.text();
			return new Response(text || "AI gateway error", { status: res.status });
		}
		const reply = (await res.json()).choices?.[0]?.message?.content ?? "";
		return Response.json({ reply });
	} catch (err) {
		return new Response(err instanceof Error ? err.message : "Server error", { status: 500 });
	}
} } } });
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	ApiChatRoute: Route.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
