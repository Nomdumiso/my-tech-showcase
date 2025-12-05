import profilePhoto from "@/assets/profile-photo.jpeg";

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
                <img 
                  src={profilePhoto} 
                  alt="Nomdumiso Irene Mtshilibe - Professional Headshot" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-foreground">
                Software & Data Engineering professional focused on{" "}
                <span className="text-gradient">Cloud & AI Solutions</span>
              </h4>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a motivated and analytical Software/Data Engineering Learnership Candidate at CapaCiTi 
                  with a strong foundation in data entry, reporting, digital facilitation, and problem-solving. 
                  With 2+ years' experience working with learner data and school systems, I bring attention 
                  to detail, structured thinking, and user support capability.
                </p>

                <p>
                  Currently developing skills in software engineering, data analytics, databases, and digital 
                  systems through intensive training at CapaCiTi and FNB App Academy. My background in 
                  administration and reporting supports my technical growth in building data-driven solutions.
                </p>

                <p>
                  I'm passionate about exploring AI, cloud technologies, and DevOps practices. My goal is to 
                  contribute to innovative projects that leverage technology to solve real-world problems 
                  and make a meaningful impact.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-gradient">100+</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Learners Supported
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-gradient">2+</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-gradient">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Data Accuracy
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
