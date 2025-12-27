"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { motion } from "framer-motion"
import { Contact3DScene } from "./contact-3d-scene"

export function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-32 overflow-hidden"
    >
      <Contact3DScene />

      <div className="max-w-6xl w-full space-y-20 relative z-10">
        <ScrollReveal>
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Get In Touch
              </h2>
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just chatting about AI and technology.
              Feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.2} direction="left">
            <motion.div
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card className="p-8 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 h-full">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Contact Information</h3>

                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email</p>
                        <a
                          href="mailto:bhavyarpatel22@gmail.com"
                          className="text-base font-medium hover:text-primary transition-colors"
                        >
                          bhavyarpatel22@gmail.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                        <a
                          href="tel:+14388339398"
                          className="text-base font-medium hover:text-primary transition-colors"
                        >
                          +1 (438) 833-9398
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Location</p>
                        <p className="text-base font-medium">Montreal, Quebec, Canada</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <motion.div
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card className="p-8 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 h-full">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Social Profiles</h3>

                  <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start gap-3 h-14 text-base bg-transparent"
                      >
                        <a href="https://www.linkedin.com/in/bhavyapatel1000" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                          LinkedIn Profile
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start gap-3 h-14 text-base bg-transparent"
                      >
                        <a href="https://github.com/bhavyapatel1000" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          GitHub Profile
                        </a>
                      </Button>
                    </motion.div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Open to opportunities in AI/ML engineering, research positions, and collaborative projects in data
                      science and artificial intelligence.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </ScrollReveal>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-16 text-center text-base text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Bhavya Patel. Built with Next.js and v0.</p>
        </motion.footer>
      </div>
    </section>
  )
}
