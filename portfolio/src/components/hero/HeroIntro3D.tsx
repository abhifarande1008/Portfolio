"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { particlePositions } from "./particlesData";

interface HeroIntro3DProps {
  onFinish: () => void;
}

/* ---------------- Camera Rig ---------------- */
function CameraRig({ onFinish }: { onFinish: () => void }) {
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const startTime = useRef<number | null>(null);

  useFrame(({ clock }) => {
    if (!cameraRef.current) return;

    if (startTime.current === null) {
      startTime.current = clock.elapsedTime;
    }

    const t = clock.elapsedTime - startTime.current;

    // Phase 1: slow cinematic push
    if (t < 4) {
      cameraRef.current.position.z = 6 - t * 0.8;
    }

    // Phase 2: dramatic punch-through
    if (t >= 4 && t < 5.5) {
      cameraRef.current.position.z -= 0.35;
    }

    // Finish intro
    if (t >= 6) {
      onFinish();
    }

    cameraRef.current.lookAt(0, 0, 0);
  });

  return (
    <perspectiveCamera
      ref={cameraRef}
      position={[0, 0, 6]}
      fov={45}
      near={0.1}
      far={100}
    />
  );
}

/* ---------------- Particles ---------------- */
function Particles() {
  return (
    <Points positions={particlePositions}>
      <PointMaterial
        transparent
        size={0.015}
        color="#9333ea"
        depthWrite={false}
      />
    </Points>
  );
}

/* ---------------- Logo Text ---------------- */
function LogoText() {
  const textRef = useRef<THREE.Mesh | null>(null);

  useFrame(({ clock }) => {
    if (!textRef.current) return;

    const pulse = 1 + Math.sin(clock.elapsedTime * 1.5) * 0.03;
    textRef.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <Float speed={0.8} floatIntensity={0.3}>
      <Text
        ref={textRef}
        fontSize={1.2}
        color="#a855f7"
        letterSpacing={-0.06}
        anchorX="center"
        anchorY="middle"
      >
        ABHISHEK
      </Text>
    </Float>
  );
}

/* ---------------- Main Canvas ---------------- */
export default function HeroIntro3D({
  onFinish,
}: HeroIntro3DProps) {
  return (
    <Canvas dpr={[1, 1.5]}>
      <color attach="background" args={["#000000"]} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={1.5} />

      <Particles />
      <LogoText />
      <CameraRig onFinish={onFinish} />
    </Canvas>
  );
}
