"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Environment, PerspectiveCamera } from "@react-three/drei"
import { useRef, useMemo, Suspense } from "react"
import * as THREE from "three"

function FloatingCode() {
  const groupRef = useRef<THREE.Group>(null)

  const codeData = useMemo(() => {
    const symbols = ["<>", "{}", "[]", "/>", "()", "=>", "fn", "AI", "ML", "01"]
    return symbols.map((symbol) => ({
      symbol,
      position: new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8),
    }))
  }, [])

  return (
    <group ref={groupRef}>
      {codeData.map((item, i) => (
        <Float
          key={i}
          speed={1 + Math.random() * 2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={[item.position.x, item.position.y, item.position.z]}
        >
          <Text3D font="/fonts/Geist_Bold.json" size={0.3} height={0.1} curveSegments={12}>
            {item.symbol}
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </Text3D>
        </Float>
      ))}
    </group>
  )
}

function NeuralNetwork() {
  const nodes = useMemo(() => {
    const nodePositions: THREE.Vector3[] = []
    for (let i = 0; i < 20; i++) {
      nodePositions.push(
        new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10),
      )
    }
    return nodePositions
  }, [])

  const connections = useMemo(() => {
    const conns: Array<[THREE.Vector3, THREE.Vector3]> = []
    nodes.forEach((start, i) => {
      nodes.slice(i + 1).forEach((end) => {
        if (start.distanceTo(end) < 5) {
          conns.push([start, end])
        }
      })
    })
    return conns
  }, [nodes])

  return (
    <group>
      {nodes.map((pos, i) => (
        <Float key={i} speed={0.5 + Math.random()} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh position={[pos.x, pos.y, pos.z]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
          </mesh>
        </Float>
      ))}

      {connections.map((conn, i) => {
        const points = conn
        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#00ffff" opacity={0.2} transparent />
          </line>
        )
      })}
    </group>
  )
}

function GeometricShapes() {
  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[-4, 2, -3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8b5cf6" wireframe emissive="#8b5cf6" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.4}>
        <mesh position={[4, -1, -2]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#06b6d4" wireframe emissive="#06b6d4" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[2, 3, -4]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshStandardMaterial color="#00ffff" wireframe emissive="#00ffff" emissiveIntensity={0.2} />
        </mesh>
      </Float>
    </group>
  )
}

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />

          <FloatingCode />
          <NeuralNetwork />
          <GeometricShapes />

          <Environment preset="night" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
