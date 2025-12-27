"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { Experience3DTimeline } from "./experience-3d-timeline"
import { ScrollReveal } from "./scroll-reveal"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Teaching Assistant",
    company: "Concordia University",
    location: "Montreal, Canada",
    period: "Sep 2025 – Present",
    description: [
      "Guided 20+ students in mastering Distributed Systems concepts such as Java RMI, CORBA, and SOAP-based Web Services",
      "Facilitated weekly tutorials and 5+ lab sessions, aligning course content with practical exercises",
      "Evaluated assignments and projects with feedback delivered within 5 days",
    ],
    technologies: ["Java", "Distributed Systems", "CORBA", "SOAP"],
  },
  {
    title: "Data Science Intern",
    company: "Blue Data Consulting & IT Services",
    location: "Surat, India",
    period: "Dec 2023 – Jun 2024",
    description: [
      "Devised an AI-driven workflow converting 50+ PowerPoint Presentations into video courses using LLMs, RAG, and Streamlit",
      "Benchmarked 4 LLMs achieving 25% higher script accuracy and 35% faster generation with GPT-3.5-Turbo",
      "Produced 10+ AI-based course modules in collaboration with a 5-member team, boosting content scalability by 3×",
    ],
    technologies: ["Python", "LLMs", "RAG", "Streamlit", "GPT-3.5", "LangChain"],
  },
  {
    title: "Machine Learning Research Student",
    company: "CHARUSAT University",
    location: "Changa, India",
    period: "Mar 2022 – Jun 2023",
    description: [
      "Extracted and prepared 13K+ video frames from the UCF-101 Sports Action Dataset to train deep learning models",
      "Optimized Vision Transformer (ViT) model, boosting classification accuracy from 84% to 94%",
      "Enhanced training stability and reduced validation loss by ~9% through hyperparameter tuning",
    ],
    technologies: ["Python", "PyTorch", "Vision Transformers", "Computer Vision"],
  },
  {
    title: "Flutter Development Trainee",
    company: "Inspire Cyber Security",
    location: "Surat, India",
    period: "May – Oct 2022",
    description: [
      "Prototyped 3+ mobile applications in Adobe XD, converting wireframes into responsive Flutter interfaces",
      "Constructed a Notes App using SQFLite for offline storage with CRUD functionality",
      'Delivered client project "Palm Box Cricket Booking System" increasing user engagement by ~40%',
    ],
    technologies: ["Flutter", "Dart", "SQFLite", "Adobe XD", "UI/UX"],
  },
  {
    title: "Python Developer Intern",
    company: "Jemistry Info Solutions",
    location: "Surat, India",
    period: "May 2022 – Jul 2022",
    description: [
      "Supervised a 4-member intern team to create a PC health monitoring tool using Python",
      "Implemented secure authentication in Django with PostgreSQL, reducing login latency by ~30%",
      "Reengineered backend modules, lowering system resource consumption by 40%",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Socket Programming"],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-32 overflow-hidden"
    >
      <Experience3DTimeline />

      <div className="max-w-7xl w-full space-y-20 relative z-10">
        <ScrollReveal>
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Experience
              </h2>
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey across AI/ML, data science, and software development
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform lg:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className={`relative flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-0 lg:left-1/2 top-8 transform lg:-translate-x-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-lg"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/30"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />

                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Card className="p-8 hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 relative">
                        <div className="space-y-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-2 flex-1">
                              <h3 className="text-2xl font-bold flex items-center gap-3">
                                <Briefcase className="h-6 w-6 text-primary flex-shrink-0" />
                                {exp.title}
                              </h3>
                              <p className="text-lg text-muted-foreground">
                                {exp.company} · {exp.location}
                              </p>
                            </div>

                            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                              <div className="px-4 py-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="h-4 w-4 text-primary" />
                                  <span className="font-semibold text-primary">{exp.period}</span>
                                </div>
                              </div>
                            </motion.div>
                          </div>

                          <ul className="space-y-3 text-base text-muted-foreground">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2 pt-4">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="px-3 py-1 hover:bg-primary/20 transition-colors cursor-default"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
