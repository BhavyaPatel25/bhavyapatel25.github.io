"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, useMemo, Suspense } from "react"
import type * as THREE from "three"

function ParticleField() {
  const ref = useRef<THREE.Points>(null)

  const particlesCount = 1000
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [particlesCount])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00ffff" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  )
}

function CodeMatrix() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const radius = 5
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, -5]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color="#8b5cf6" wireframe emissive="#8b5cf6" emissiveIntensity={0.3} />
          </mesh>
        )
      })}
    </group>
  )
}

export function Projects3DBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <ParticleField />
          <CodeMatrix />
        </Canvas>
      </Suspense>
    </div>
  )
}
