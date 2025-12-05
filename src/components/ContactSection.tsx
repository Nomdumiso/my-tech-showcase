import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Contact
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm actively seeking opportunities in Cloud Engineering, AI/ML,
              and DevOps. Let's discuss how I can contribute to your team.
            </p>
          </div>

          {/* Contact Card */}
          <div className="p-8 md:p-12 rounded-2xl card-gradient border border-border glow-soft text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you have a question, want to discuss a project, or just
              want to say hello, I'd love to hear from you.
            </p>

            {/* Primary CTA */}
            <Button variant="hero" size="xl" className="mb-10" asChild>
              <a href="mailto:n.mtshilibe6@gmail.com">
                <Send className="w-5 h-5" />
                Send Me an Email
              </a>
            </Button>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:n.mtshilibe6@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nomdumiso-irene-mtshilibe-a1a115290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Nomdumiso"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="/resume/Nomdumiso_Irene_Mtshilibe_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
