import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, TorusKnot, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.15;
    ref.current.rotation.y += dt * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <TorusKnot ref={ref} args={[0.9, 0.28, 220, 32]} position={[1.6, 0.6, 0]}>
        <MeshDistortMaterial
          color="#c026d3"
          emissive="#7c3aed"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.8}
          distort={0.28}
          speed={1.4}
        />
      </TorusKnot>
    </Float>
  );
}

function Crystal() {
  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.6}>
      <Icosahedron args={[0.7, 0]} position={[-1.9, -0.4, 0.2]}>
        <meshPhysicalMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={0.25}
          roughness={0.05}
          metalness={0.6}
          transmission={0.6}
          thickness={0.8}
          clearcoat={1}
        />
      </Icosahedron>
    </Float>
  );
}

function Orb() {
  return (
    <Float speed={0.9} rotationIntensity={0.4} floatIntensity={2}>
      <mesh position={[0.2, -1.4, -0.5]}>
        <sphereGeometry args={[0.45, 64, 64]} />
        <MeshDistortMaterial
          color="#a855f7"
          emissive="#c026d3"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
          distort={0.5}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color="#f0abfc" />
      <pointLight position={[-4, -2, -2]} intensity={1.4} color="#22d3ee" />
      <Suspense fallback={null}>
        <Knot />
        <Crystal />
        <Orb />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}