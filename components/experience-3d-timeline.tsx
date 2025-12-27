"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, Suspense } from "react"
import * as THREE from "three"

function AnimatedLine() {
  const lineRef = useRef<THREE.Line>(null)

  const points = []
  for (let i = 0; i < 50; i++) {
    points.push(new THREE.Vector3(0, (i / 50) * 10 - 5, 0))
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  useFrame((state) => {
    if (lineRef.current) {
      const material = lineRef.current.material as THREE.LineBasicMaterial
      if (material) {
        material.opacity = 0.3 + Math.sin(state.clock.elapsedTime) * 0.2
      }
    }
  })

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#00ffff" transparent opacity={0.4} />
    </line>
  )
}

function TimelineNodes() {
  const nodesRef = useRef<THREE.Mesh[]>([])

  useFrame((state) => {
    nodesRef.current.forEach((node, i) => {
      if (node) {
        const newX = Math.sin(state.clock.elapsedTime + i) * 0.5
        node.position.setX(newX)
      }
    })
  })

  return (
    <group>
      {[...Array(4)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) nodesRef.current[i] = el
          }}
          position={[0, i * 2.5 - 3.75, 0]}
        >
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

export function Experience3DTimeline() {
  return (
    <div className="absolute inset-y-0 left-0 w-32 -z-10 opacity-40">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [2, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <AnimatedLine />
          <TimelineNodes />
        </Canvas>
      </Suspense>
    </div>
  )
}
