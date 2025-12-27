"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Torus, Sphere, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Torus args={[1.5, 0.4, 16, 32]} position={[-3, 2, -5]} rotation={[0.5, 0, 0]}>
          <MeshDistortMaterial color="#8b5cf6" distort={0.2} speed={3} roughness={0.2} metalness={0.9} />
        </Torus>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
        <Sphere args={[1, 32, 32]} position={[4, -1, -4]}>
          <MeshDistortMaterial color="#f97316" distort={0.35} speed={2} roughness={0.3} metalness={0.8} />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.2}>
        <Torus args={[0.8, 0.3, 16, 32]} position={[2, 3, -6]} rotation={[1, 0, 0]}>
          <MeshDistortMaterial color="#06b6d4" distort={0.3} speed={2.5} roughness={0.4} metalness={0.85} />
        </Torus>
      </Float>
    </group>
  )
}

export function Publications3DScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97316" />
          <FloatingElements />
        </Canvas>
      </Suspense>
    </div>
  )
}
