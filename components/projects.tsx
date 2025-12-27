"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Eye } from "lucide-react"
import { Projects3DBackground } from "./projects-3d-background"
import { ScrollReveal } from "./scroll-reveal"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Multilingual Video Script Generation Web App",
    description:
      "Formulated an AI pipeline that transformed PowerPoint slides into narrated videos using GPT models and TTS APIs. Integrated automated script extraction, multi-language selection (5+ languages), and animation into a single seamless workflow.",
    impact:
      "Accelerated video production by ~70%, embedding generated scripts into slide notes and exporting finalized outputs as MP4.",
    technologies: ["Python", "GPT Models", "TTS APIs", "Streamlit", "LangChain", "RAG"],
    icon: Sparkles,
  },
  {
    title: "Museum View Detection - AI/ML",
    description:
      "Constructed baseline classifiers (Decision Tree, Random Forest, XGBoost) to distinguish indoor vs. outdoor museum imagery. Developed and fine-tuned a PyTorch CNN on the MIT Places dataset (10,000 images).",
    impact:
      "Attained 91.5% accuracy and 91.4% F1-score, surpassing baseline models by 16–22% in classification performance.",
    technologies: ["Python", "PyTorch", "CNN", "XGBoost", "Computer Vision", "MIT Places Dataset"],
    icon: Eye,
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-32 overflow-hidden"
    >
      <Projects3DBackground />

      <div className="max-w-6xl w-full space-y-20 relative z-10">
        <ScrollReveal>
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Projects
              </h2>
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Featured work showcasing AI/ML expertise and innovation
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="h-full"
                >
                  <Card className="p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 bg-card/50 backdrop-blur-sm h-full flex flex-col">
                    <div className="space-y-6 flex-1 flex flex-col">
                      <motion.div
                        className="p-4 bg-primary/10 rounded-xl w-fit"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8 text-primary" />
                      </motion.div>

                      <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>

                      <p className="text-base text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                      <div className="p-5 bg-primary/5 rounded-xl border border-primary/20 space-y-1">
                        <p className="text-sm font-semibold text-primary">Impact</p>
                        <p className="text-sm text-foreground leading-relaxed">{project.impact}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
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
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
