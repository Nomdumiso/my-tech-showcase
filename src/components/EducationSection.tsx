import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    title: "Software/Data Engineering Learnership",
    institution: "CapaCiTi",
    year: "2025",
    type: "learnership",
    description: "Comprehensive training in software and data engineering, building technical literacy and analytical thinking."
  },
  {
    title: "FNB App Academy",
    institution: "First National Bank",
    year: "2025",
    type: "certification",
    description: "Intensive coursework in application development and digital solutions."
  },
  {
    title: "Data Analytics Program",
    institution: "ALX Africa",
    year: "2024",
    type: "certification",
    description: "Data analytics fundamentals including data visualization, analysis, and insights generation."
  },
  {
    title: "Software Development Fundamentals",
    institution: "MDL",
    year: "2023",
    type: "certification",
    description: "Core programming concepts and software development principles."
  },
  {
    title: "Microsoft Office Certification",
    institution: "NEMISA",
    year: "2022",
    type: "certification",
    description: "Proficiency in Microsoft Office suite including Excel, Word, and PowerPoint."
  },
  {
    title: "Matric Certificate",
    institution: "Geluksdal Secondary School",
    year: "2015",
    type: "education",
    description: "National Senior Certificate."
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case "learnership":
      return <BookOpen className="h-6 w-6" />;
    case "certification":
      return <Award className="h-6 w-6" />;
    default:
      return <GraduationCap className="h-6 w-6" />;
  }
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning journey in software engineering, data analytics, and digital technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="font-semibold text-foreground mt-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground/80 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
