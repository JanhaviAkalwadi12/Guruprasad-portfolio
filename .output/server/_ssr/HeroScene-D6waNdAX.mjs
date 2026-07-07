import { a as __toESM } from "../_runtime.mjs";
import { a as MeshDistortMaterial, i as TorusKnot, l as require_jsx_runtime, n as Float, o as Canvas, r as Icosahedron, s as useFrame, t as Environment, u as require_react } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HeroScene-D6waNdAX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Knot() {
	const ref = (0, import_react.useRef)(null);
	useFrame((_, dt) => {
		if (!ref.current) return;
		ref.current.rotation.x += dt * .15;
		ref.current.rotation.y += dt * .2;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
		speed: 1.2,
		rotationIntensity: .6,
		floatIntensity: 1.2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TorusKnot, {
			ref,
			args: [
				.9,
				.28,
				220,
				32
			],
			position: [
				1.6,
				.6,
				0
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshDistortMaterial, {
				color: "#c026d3",
				emissive: "#7c3aed",
				emissiveIntensity: .35,
				roughness: .15,
				metalness: .8,
				distort: .28,
				speed: 1.4
			})
		})
	});
}
function Crystal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
		speed: 1.6,
		rotationIntensity: .8,
		floatIntensity: 1.6,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icosahedron, {
			args: [.7, 0],
			position: [
				-1.9,
				-.4,
				.2
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#22d3ee",
				emissive: "#0891b2",
				emissiveIntensity: .25,
				roughness: .05,
				metalness: .6,
				transmission: .6,
				thickness: .8,
				clearcoat: 1
			})
		})
	});
}
function Orb() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
		speed: .9,
		rotationIntensity: .4,
		floatIntensity: 2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.2,
				-1.4,
				-.5
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.45,
				64,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshDistortMaterial, {
				color: "#a855f7",
				emissive: "#c026d3",
				emissiveIntensity: .4,
				roughness: .1,
				metalness: .9,
				distort: .5,
				speed: 2
			})]
		})
	});
}
function HeroScene() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		dpr: [1, 1.75],
		camera: {
			position: [
				0,
				0,
				5
			],
			fov: 45
		},
		gl: {
			antialias: true,
			alpha: true
		},
		className: "!absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .4 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					3,
					4,
					5
				],
				intensity: 1.2,
				color: "#f0abfc"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					-4,
					-2,
					-2
				],
				intensity: 1.4,
				color: "#22d3ee"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Knot, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crystal, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Orb, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, { preset: "city" })
				]
			})
		]
	});
}
//#endregion
export { HeroScene };
