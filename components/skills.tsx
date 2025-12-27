"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ScrollReveal } from "./scroll-reveal"

const allSkills = [
  // Inner orbit 1 - Best Programming Languages
  { name: "Python", orbit: 1, size: "large", color: "from-blue-400 to-cyan-400" },
  { name: "Java", orbit: 1, size: "large", color: "from-orange-400 to-red-400" },
  { name: "C++", orbit: 1, size: "large", color: "from-purple-400 to-pink-400" },
  { name: "C", orbit: 1, size: "medium", color: "from-blue-500 to-indigo-400" },

  // Inner orbit 2 - Best AI/ML & Core Skills
  { name: "TensorFlow", orbit: 2, size: "large", color: "from-orange-500 to-amber-400" },
  { name: "Django", orbit: 2, size: "large", color: "from-green-500 to-teal-400" },
  { name: "NLP", orbit: 2, size: "large", color: "from-pink-400 to-rose-400" },
  { name: "Scikit-learn", orbit: 2, size: "medium", color: "from-blue-500 to-cyan-400" },
  { name: "Keras", orbit: 2, size: "medium", color: "from-red-400 to-pink-400" },
  { name: "Hugging Face", orbit: 2, size: "medium", color: "from-yellow-400 to-amber-400" },
  { name: "Flutter", orbit: 2, size: "medium", color: "from-blue-300 to-cyan-300" },
  { name: "UI/UX", orbit: 2, size: "medium", color: "from-pink-300 to-rose-300" },

  // Middle orbit 3 - Best Development Skills
  { name: "REST API", orbit: 3, size: "medium", color: "from-purple-300 to-pink-300" },
  { name: "Web Scraping", orbit: 3, size: "medium", color: "from-green-300 to-emerald-300" },
  { name: "Data Analytics", orbit: 3, size: "medium", color: "from-cyan-400 to-blue-400" },
  { name: "LLM", orbit: 3, size: "medium", color: "from-violet-400 to-purple-400" },
  { name: "Prompt Eng", orbit: 3, size: "small", color: "from-amber-400 to-orange-400" },

  // Outer orbit 4 - Intermediate Skills
  { name: "PyTorch", orbit: 4, size: "small", color: "from-red-500 to-orange-400" },
  { name: "LangChain", orbit: 4, size: "small", color: "from-violet-400 to-purple-400" },
  { name: "AWS", orbit: 4, size: "small", color: "from-yellow-400 to-orange-400" },
  { name: "Azure", orbit: 4, size: "small", color: "from-blue-400 to-cyan-400" },
  { name: "Git", orbit: 4, size: "small", color: "from-orange-400 to-red-500" },
  { name: "Docker", orbit: 4, size: "small", color: "from-blue-500 to-blue-300" },
  { name: "Linux", orbit: 4, size: "small", color: "from-yellow-300 to-orange-300" },
  { name: "SQL", orbit: 4, size: "small", color: "from-green-400 to-emerald-400" },
]

const sizeClasses = {
  large: "w-20 h-20 text-xs",
  medium: "w-16 h-16 text-[10px]",
  small: "w-12 h-12 text-[9px]",
}

const orbitSizes = {
  1: "w-[300px] h-[300px] md:w-[400px] md:h-[400px]",
  2: "w-[500px] h-[500px] md:w-[700px] md:h-[700px]",
  3: "w-[700px] h-[700px] md:w-[1000px] md:h-[1000px]",
  4: "w-[900px] h-[900px] md:w-[1300px] md:h-[1300px]",
}

const ORBIT_SPEED = 60 // All skills rotate at same speed (60 seconds per revolution)

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillsByOrbit = allSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.orbit]) acc[skill.orbit] = []
      acc[skill.orbit].push(skill)
      return acc
    },
    {} as Record<number, typeof allSkills>,
  )

  const skillsWithAngles = allSkills.map((skill) => {
    const orbitSkills = skillsByOrbit[skill.orbit]
    const index = orbitSkills.indexOf(skill)
    const angleStep = 360 / orbitSkills.length
    const startAngle = index * angleStep
    return { ...skill, startAngle }
  })

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background" />

      {/* Floating energy particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            animate={{
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full space-y-16 relative z-10">
        <ScrollReveal>
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Skills Atom
              </h2>
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My expertise orbiting like electrons in a chemical atom
            </p>
          </div>
        </ScrollReveal>

        {/* Atomic Model Container */}
        <div ref={ref} className="relative flex items-center justify-center min-h-[1200px] md:min-h-[1500px]">
          {/* Orbital paths */}
          {[1, 2, 3, 4].map((orbit) => {
            const orbitRadius = orbit === 1 ? 180 : orbit === 2 ? 280 : orbit === 3 ? 400 : 520
            const orbitRadiusMd = orbit === 1 ? 240 : orbit === 2 ? 380 : orbit === 3 ? 540 : 700

            return (
              <motion.div
                key={orbit}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: orbit * 0.2 }}
                className="absolute rounded-full border border-purple-500/10"
                style={{
                  width: `${orbitRadius * 2}px`,
                  height: `${orbitRadius * 2}px`,
                }}
              />
            )
          })}

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute z-20"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-600 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

              <div className="text-center relative z-10">
                <div className="text-2xl md:text-3xl font-bold text-white">Skills</div>
              </div>
            </div>
          </motion.div>

          {/* Skill positioning */}
          {skillsWithAngles.map((skill, index) => {
            const orbitRadius = skill.orbit === 1 ? 180 : skill.orbit === 2 ? 280 : skill.orbit === 3 ? 400 : 520

            // Convert angle to radians and calculate position
            const angleInRadians = (skill.startAngle * Math.PI) / 180
            const x = Math.cos(angleInRadians) * orbitRadius
            const y = Math.sin(angleInRadians) * orbitRadius

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  type: "spring",
                }}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                }}
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: ORBIT_SPEED,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "0 0",
                  }}
                >
                  <motion.div
                    className={`${sizeClasses[skill.size as keyof typeof sizeClasses]} rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center font-bold text-white shadow-lg cursor-pointer border-2 border-white/30`}
                    style={{
                      position: "absolute",
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                    whileHover={{
                      scale: 1.3,
                      zIndex: 30,
                      boxShadow: "0 0 30px 10px rgba(255,255,255,0.4)",
                      transition: { duration: 0.2 },
                    }}
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: ORBIT_SPEED,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <div className="text-center px-2 leading-tight">{skill.name}</div>

                    {/* Electron glow pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: [
                          "0 0 15px 3px rgba(255,255,255,0.4)",
                          "0 0 25px 6px rgba(255,255,255,0.6)",
                          "0 0 15px 3px rgba(255,255,255,0.4)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Energy trail effect */}
                    <motion.div
                      className="absolute w-2 h-2 rounded-full bg-white/60 -z-10"
                      style={{ left: "-10px", top: "50%", transform: "translateY(-50%)" }}
                      animate={{
                        opacity: [0.6, 0, 0.6],
                        scale: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <ScrollReveal delay={0.8}>
          <div className="text-center space-y-6">
            <div className="inline-block px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Atomic Model:</span> Skills orbit like electrons around the
                nucleus
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-primary/20">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/50" />
                <span className="text-xs text-muted-foreground">Inner Shell</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-primary/20">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 shadow-lg shadow-orange-400/50" />
                <span className="text-xs text-muted-foreground">Middle Shell</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-primary/20">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 shadow-lg shadow-purple-300/50" />
                <span className="text-xs text-muted-foreground">Outer Shell</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">Hover over electrons to see skill details</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
