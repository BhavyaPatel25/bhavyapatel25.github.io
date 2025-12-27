export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full space-y-12">
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-mono">About</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              I'm a graduate student at <span className="text-primary font-medium">Concordia University</span> pursuing
              a Master's in Applied Computer Science, with a focus on AI and Machine Learning. Currently maintaining a
              GPA of 3.33/4.0 while working as a Teaching Assistant for Distributed Systems.
            </p>
            <p className="text-muted-foreground">
              With over 2 years of professional experience, I specialize in building AI-driven solutions using
              technologies like <span className="text-primary">TensorFlow</span>,{" "}
              <span className="text-primary">PyTorch</span>, <span className="text-primary">LangChain</span>, and cloud
              platforms including <span className="text-primary">AWS Bedrock</span> and{" "}
              <span className="text-primary">Azure ML</span>.
            </p>
            <p className="text-muted-foreground">
              My work ranges from developing transformer-based architectures for sports action recognition to building
              scalable AI workflows that convert educational content into automated video courses. I'm passionate about
              applying cutting-edge AI research to solve real-world problems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">AI Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">94%</div>
            <div className="text-sm text-muted-foreground">Model Accuracy</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">1</div>
            <div className="text-sm text-muted-foreground">Publication</div>
          </div>
        </div>
      </div>
    </section>
  )
}
