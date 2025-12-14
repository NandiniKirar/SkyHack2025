import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const EarthMesh = () => {
  const earthRef = useRef(null);
  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={earthRef} scale={1.2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#2a7fff"
        emissive="#103063"
        emissiveIntensity={0.3}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  );
};

const Atmosphere = () => (
  <mesh scale={1.26}>
    <sphereGeometry args={[1, 64, 64]} />
    <meshPhongMaterial color="#78d7ff" transparent opacity={0.15} side={2} />
  </mesh>
);

const EarthHalo = () => (
  <mesh scale={1.4}>
    <sphereGeometry args={[1, 32, 32]} />
    <meshBasicMaterial color="#3bd9ff" transparent opacity={0.08} />
  </mesh>
);

const ThreeDEarth = () => {
  return (
    <div className="relative h-[320px] w-full sm:h-[360px] lg:h-[420px]">
      <Suspense fallback={<div className="grid h-full place-items-center text-xs text-white/60">Initializing orbit…</div>}>
        <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }} dpr={[1, 1.5]}>
          <color attach="background" args={["#010014"]} />
          <fog attach="fog" args={["#010014", 4, 9]} />
          <ambientLight intensity={0.35} />
          <directionalLight position={[4, 2, 4]} intensity={1.2} color="#6dd3ff" />
          <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#8247ff" />
          <Stars radius={40} depth={25} count={2000} factor={3} fade speed={0.6} />
          <EarthMesh />
          <Atmosphere />
          <EarthHalo />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </Suspense>
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(2,8,40,0.8)]" />
    </div>
  );
};

export default ThreeDEarth;


