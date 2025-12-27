"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { motion } from "framer-motion"
import { Education3DScene } from "./education-3d-scene"

const education = [
  {
    degree: "Master of Applied Computer Science (MApCompSc)",
    institution: "Concordia University",
    location: "Montreal, QC, Canada",
    period: "Sept 2024 - Aug 2026",
    gpa: "3.33/4.0",
    focus: "Specializing in Artificial Intelligence, Machine Learning, and Data Science",
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Charotar University of Science and Technology (CHARUSAT)",
    location: "Changa, India",
    period: "Jun 2020 - May 2024",
    gpa: "9.13/10",
    focus: "Computer Engineering with focus on AI/ML and Software Development",
  },
]

const certifications = [
  {
    title: "Fundamentals of Digital Image and Video Processing",
    issuer: "Coursera – Northwestern University",
    description: "Core concepts in signal processing, motion estimation, and video compression",
  },
  {
    title: "Architecting Smart IoT Devices",
    issuer: "Coursera – EIT Digital",
    description: "IoT system design, sensor integration, edge computing, and secure communication",
  },
  {
    title: "Flutter Development with UI/UX",
    issuer: "Inspire Cyber Security",
    description: "Cross-platform app development with Firebase backend and intuitive UI/UX",
  },
]

export function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-32 overflow-hidden"
    >
      <Education3DScene />

      <div className="max-w-6xl w-full space-y-20 relative z-10">
        <ScrollReveal>
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Education
              </h2>
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation in computer science and engineering
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className="p-8 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10">
                  <div className="space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                          <GraduationCap className="h-6 w-6 text-primary flex-shrink-0" />
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {edu.institution} · {edu.location}
                        </p>
                        <p className="text-base text-muted-foreground italic leading-relaxed">{edu.focus}</p>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <Badge variant="outline" className="font-mono px-4 py-2 text-sm">
                          {edu.period}
                        </Badge>
                        <Badge variant="secondary" className="font-mono px-4 py-2 text-sm">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <Award className="h-10 w-10 text-secondary" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card className="p-6 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 h-full">
                    <div className="space-y-4">
                      <h4 className="font-bold text-base leading-tight">{cert.title}</h4>
                      <p className="text-sm text-primary font-semibold">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
