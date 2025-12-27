"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, Box, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.2, 32, 32]} position={[-4, 2, -5]}>
          <MeshDistortMaterial color="#8b5cf6" distort={0.3} speed={2} roughness={0.4} metalness={0.8} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={0.7} floatIntensity={1.2}>
        <Box args={[1.5, 1.5, 1.5]} position={[4, -2, -4]}>
          <MeshDistortMaterial color="#f97316" distort={0.4} speed={1.5} roughness={0.4} metalness={0.8} />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
        <Sphere args={[0.8, 32, 32]} position={[3, 3, -6]}>
          <MeshDistortMaterial color="#06b6d4" distort={0.25} speed={2.5} roughness={0.3} metalness={0.9} />
        </Sphere>
      </Float>
    </group>
  )
}

export function Education3DScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <FloatingShapes />
        </Canvas>
      </Suspense>
    </div>
  )
}
