"use client"

import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero3DScene } from "./hero-3d-scene"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 pt-32 pb-32 overflow-hidden"
    >
      <Hero3DScene />

      <motion.div style={{ opacity, y }} className="max-w-6xl w-full relative z-10">
        <div className="text-center space-y-12">
          {/* Name with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                Bhavya Patel
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground font-light"
            >
              AI/ML Developer & Researcher
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Transforming data into intelligence through cutting-edge AI and machine learning solutions
          </motion.p>

          {/* Contact Info with 3D card effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center text-lg"
          >
            {[
              { icon: MapPin, text: "Montreal, QC" },
              { icon: Mail, text: "bhavyarpatel22@gmail.com", href: "mailto:bhavyarpatel22@gmail.com" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20"
              >
                <item.icon className="h-5 w-5 text-primary" />
                {item.href ? (
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{item.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotateX: 5, z: 30 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button asChild size="lg" className="text-lg px-10 py-7 rounded-2xl shadow-2xl">
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08, rotateX: 5, z: 30 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-10 py-7 rounded-2xl bg-transparent border-2"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with 3D cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex items-center gap-6 justify-center pt-6"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/bhavyapatel1000", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/bhavyapatel1000", label: "GitHub" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotateY: 15, z: 30 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-center justify-center h-16 w-16 rounded-2xl border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all shadow-lg"
              >
                <social.icon className="h-6 w-6 text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator with 3D animation */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0], rotateX: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Number.POSITIVE_INFINITY }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <ChevronDown className="h-10 w-10 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
