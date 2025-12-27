"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text, Environment, RoundedBox } from "@react-three/drei"
import { Suspense } from "react"

interface Skill3DProps {
  skills: string[]
}

function SkillCubes({ skills }: Skill3DProps) {
  const radius = 4
  const skillsCount = skills.length

  return (
    <group>
      {skills.map((skill, i) => {
        const angle = (i / skillsCount) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <Float key={i} speed={1 + Math.random()} rotationIntensity={0.4} floatIntensity={0.5}>
            <group position={[x, 0, z]}>
              <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.1} smoothness={4}>
                <meshStandardMaterial
                  color="#00ffff"
                  emissive="#00ffff"
                  emissiveIntensity={0.2}
                  metalness={0.6}
                  roughness={0.3}
                  transparent
                  opacity={0.8}
                />
              </RoundedBox>
              <Text
                position={[0, 0, 0.61]}
                fontSize={0.15}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                maxWidth={1}
                textAlign="center"
              >
                {skill}
              </Text>
            </group>
          </Float>
        )
      })}

      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

export function Skills3D({ skills }: Skill3DProps) {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden border border-border bg-card">
      <Suspense
        fallback={
          <div className="w-full h-full bg-card flex items-center justify-center text-muted-foreground">
            Loading 3D...
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />

          <SkillCubes skills={skills} />

          <Environment preset="night" />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
            minDistance={6}
            maxDistance={12}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
