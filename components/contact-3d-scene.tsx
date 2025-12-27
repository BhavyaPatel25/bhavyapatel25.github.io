"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, Octahedron, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <Octahedron args={[1.5, 0]} position={[-4, 1, -5]}>
          <MeshDistortMaterial color="#8b5cf6" distort={0.4} speed={2} roughness={0.3} metalness={0.9} />
        </Octahedron>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <Sphere args={[1.2, 32, 32]} position={[3, -2, -4]}>
          <MeshDistortMaterial color="#f97316" distort={0.35} speed={1.8} roughness={0.4} metalness={0.85} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Octahedron args={[0.9, 0]} position={[4, 3, -6]}>
          <MeshDistortMaterial color="#06b6d4" distort={0.3} speed={2.2} roughness={0.35} metalness={0.9} />
        </Octahedron>
      </Float>
    </group>
  )
}

export function Contact3DScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <FloatingGeometry />
        </Canvas>
      </Suspense>
    </div>
  )
}
