const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Get to know me
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Area */}
            <div className="relative">
              <div className="aspect-square rounded-2xl card-gradient border border-border overflow-hidden glow-soft">
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary mb-6 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-foreground">
                        NM
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Add your professional headshot here
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-foreground">
                A passionate technologist focused on{" "}
                <span className="text-gradient">Cloud & AI</span>
              </h4>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated professional with expertise in cloud
                  computing, artificial intelligence, and DevOps practices.
                  Currently completing an intensive bootcamp focused on
                  end-to-end technical solutions.
                </p>

                <p>
                  My journey in tech has equipped me with hands-on experience
                  in designing scalable architectures, implementing CI/CD
                  pipelines, and leveraging AI/ML technologies to solve
                  real-world problems.
                </p>

                <p>
                  I thrive in collaborative environments and am passionate
                  about continuous learning. My goal is to contribute to
                  innovative projects that make a meaningful impact.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-gradient">5+</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Projects
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-gradient">10+</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Technologies
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-gradient">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Committed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
