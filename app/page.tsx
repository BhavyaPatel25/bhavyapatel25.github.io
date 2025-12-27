import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Publications } from "@/components/publications"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Publications />
        <Contact />
      </main>
    </>
  )
}
