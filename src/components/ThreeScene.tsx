import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 12;
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#D4AF37" size={0.018} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function FloatingOrb({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.85}
          emissive={color}
          emissiveIntensity={0.25}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function ThreeScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#D4AF37" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#6FCF97" />
          <Particles />
          <FloatingOrb position={[-3, 1, -2]} color="#6FCF97" scale={0.9} />
          <FloatingOrb position={[3, -1, -1]} color="#D4AF37" scale={0.6} />
          <FloatingOrb position={[0, 2, -3]} color="#3A7D44" scale={1.1} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function InteractiveModel() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 55 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#D4AF37" />
          <pointLight position={[-5, -3, 2]} intensity={1} color="#6FCF97" />
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh>
              <torusKnotGeometry args={[1, 0.32, 180, 24]} />
              <meshStandardMaterial color="#3A7D44" roughness={0.2} metalness={0.9} emissive="#1F5E3B" emissiveIntensity={0.4} />
            </mesh>
          </Float>
          <Float speed={1.2} rotationIntensity={1} floatIntensity={1.5}>
            <mesh position={[1.6, 1.2, 0]} scale={0.4}>
              <icosahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
            </mesh>
          </Float>
          <Float speed={1.6} rotationIntensity={1} floatIntensity={1.8}>
            <mesh position={[-1.6, -1, 0]} scale={0.35}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#6FCF97" metalness={0.8} roughness={0.2} />
            </mesh>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
