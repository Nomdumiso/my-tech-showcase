import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Capstone Project",
    description:
      "End-to-end cloud solution integrating AI, data pipelines, and DevOps automation. Showcases full-stack capabilities across multiple technologies.",
    tools: ["AWS", "Python", "Docker", "Terraform", "OpenAI"],
    featured: true,
    image: null,
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "AI/LLM Demo Application",
    description:
      "Interactive AI-powered application leveraging large language models for intelligent text processing and generation.",
    tools: ["Python", "LangChain", "OpenAI", "Streamlit"],
    featured: false,
    image: null,
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Power Apps Business Solution",
    description:
      "Low-code business application built with Microsoft Power Platform to automate workflows and improve productivity.",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
    featured: false,
    image: null,
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "CI/CD Pipeline Implementation",
    description:
      "Automated deployment pipeline with infrastructure as code, containerization, and continuous integration practices.",
    tools: ["GitHub Actions", "Docker", "Kubernetes", "Terraform"],
    featured: false,
    image: null,
    github: "https://github.com",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h3>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my technical work spanning cloud architecture, AI
              applications, and automation solutions.
            </p>
          </div>

          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="mb-12 p-8 rounded-2xl card-gradient border border-primary/30 glow-soft"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-primary text-primary-foreground">
                    Featured
                  </span>
                  <span className="text-muted-foreground text-sm">
                    Capstone Project
                  </span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h4>

                <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="hero" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="heroOutline" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:glow-soft flex flex-col"
                >
                  {/* Project placeholder image */}
                  <div className="aspect-video rounded-lg bg-secondary/50 mb-5 flex items-center justify-center border border-border overflow-hidden">
                    <span className="text-muted-foreground text-sm">
                      Screenshot
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="ml-auto text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Details <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
