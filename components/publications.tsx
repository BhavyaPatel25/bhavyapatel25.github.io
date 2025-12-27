"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { motion } from "framer-motion"
import { Publications3DScene } from "./publications-3d-scene"

export function Publications() {
  return (
    <section
      id="publications"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-32 overflow-hidden"
    >
      <Publications3DScene />

      <div className="max-w-6xl w-full space-y-20 relative z-10">
        <ScrollReveal>
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Publications
              </h2>
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Research contributions in AI, machine learning, and computer vision
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.div whileHover={{ scale: 1.01, y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
            <Card className="p-10 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <motion.div
                    className="p-4 bg-primary/10 rounded-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BookOpen className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div className="flex-1 space-y-6">
                    <Badge variant="secondary" className="font-mono px-4 py-2">
                      June 2024
                    </Badge>
                    <h3 className="text-3xl font-bold leading-tight">
                      Vision Transformer in Sport Action: Recognizing Athletic Activities across Varied Sporting Domain
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Co-authored a research paper introducing a novel Vision Transformer (ViT)–based approach for
                      sports action recognition, enhancing classification accuracy across multiple athletic categories.
                    </p>

                    <div className="space-y-4 pt-2">
                      <p className="text-base text-muted-foreground flex items-start gap-3">
                        <span className="text-primary text-xl">•</span>
                        <span>
                          Validated the model on a dataset of 10,000+ frames, achieving substantial performance
                          improvements over traditional CNN architectures
                        </span>
                      </p>
                      <p className="text-base text-muted-foreground flex items-start gap-3">
                        <span className="text-primary text-xl">•</span>
                        <span>
                          Presented findings at the International Conference on Data Science Applications (ICDSA 2024),
                          India
                        </span>
                      </p>
                      <p className="text-base text-muted-foreground flex items-start gap-3">
                        <span className="text-primary text-xl">•</span>
                        <span>Published in the Springer Book Series</span>
                      </p>
                    </div>

                    <div className="pt-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild size="lg" className="gap-2 text-base px-6 py-6">
                          <a
                            href="https://link.springer.com/chapter/10.1007/978-981-96-2179-8_35"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Publication
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Card className="p-8 bg-card/50 backdrop-blur-sm">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Co-Curricular Activities</h3>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h4 className="text-xl font-bold">Professional Service Director</h4>
                    <Badge variant="outline" className="font-mono w-fit px-4 py-2">
                      Sep 2022 – Aug 2023
                    </Badge>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Rotaract Club of CHARUSAT, CHARUSAT University, Changa, India
                  </p>
                  <ul className="text-base text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary text-xl">•</span>
                      <span>
                        Coordinated and led 10+ social, technical, and cultural events, impacting over 500 students
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary text-xl">•</span>
                      <span>Improved coordination efficiency by 25% through effective team operations</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h4 className="text-xl font-bold">Event Volunteer</h4>
                    <Badge variant="outline" className="font-mono w-fit px-4 py-2">
                      Jul 2022
                    </Badge>
                  </div>
                  <p className="text-base text-muted-foreground">Hackathon India, CHARUSAT, Changa, India</p>
                  <ul className="text-base text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary text-xl">•</span>
                      <span>Participated in coding challenges and real-time product design sprints</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary text-xl">•</span>
                      <span>Volunteered in operations helping over 200 participants during the event</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
