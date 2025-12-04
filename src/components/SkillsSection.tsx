import { Cloud, Brain, GitBranch, Database, Blocks, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["Python", "TensorFlow", "OpenAI", "LangChain", "Hugging Face"],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"],
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Data",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MongoDB", "ETL", "Data Pipelines"],
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Low-Code",
    icon: Blocks,
    skills: ["Power Apps", "Power Automate", "Retool", "Zapier", "n8n"],
    color: "from-indigo-500 to-violet-400",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "REST APIs", "GraphQL", "Microservices"],
    color: "from-rose-500 to-red-400",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Skills & Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Technical Proficiencies
            </h3>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit spanning cloud infrastructure, AI/ML,
              DevOps automation, and data engineering.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:glow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h4>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
