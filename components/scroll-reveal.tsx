"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  scale?: boolean
}

export function ScrollReveal({ children, delay = 0, direction = "up", scale = false }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const directions = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        ...directions[direction],
        ...(scale && { scale: 0.8 }),
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : {
              ...directions[direction],
              ...(scale && { scale: 0.8 }),
            }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
