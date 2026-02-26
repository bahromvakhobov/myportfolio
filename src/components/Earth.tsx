import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Globe() {
  const texture = useTexture("/earth_daymap.jpg");
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Slightly smaller radius */}
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

export default function EarthScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],   // 🔥 move camera back
        fov: 55                // 🔥 slightly wider field of view
      }}
      style={{ width: "100%", height: "100%" }}
      gl={{ alpha: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} />

      <Globe />

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}