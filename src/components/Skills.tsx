
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "JavaScript",
        "React",
        "HTML5",
        "CSS3",
        "TypeScript",
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend",
      skills: [
        "NodeJS",
        "NestJS",
        "Django",
        "Flask",
        "PHP",
        "Springboot",
        "Loopback"
      ]
    },
    {
      title: "Mobile",
      skills: [
        "Android",
        "Java",
        "Kotlin",
        "React Native"
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        "AWS",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "DynamoDB",
        "Firebase"
      ]
    },
    {
      title: "Other Languages",
      skills: [
        "Python",
        "C/C++",
        "Java",
        "Solidity"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "Docker",
        "Web Scraping",
        "Blockchain",
        "Ethereum",
        "CI/CD"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">MY SKILLS</p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="text-tech-purple">Expertise</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            I've worked with a diverse range of technologies across the full stack development
            spectrum. Here are the key skills I bring to the table.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover overflow-hidden border border-muted bg-background">
              <CardContent className="p-0">
                <div className="h-2 bg-gradient-to-r from-tech-purple to-tech-blue"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary text-foreground/80 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <SkillBar skill="Web Development" percentage={95} />
              <SkillBar skill="Mobile App Development" percentage={90} />
              <SkillBar skill="API Development" percentage={95} />
            </div>
            <div className="space-y-6">
              <SkillBar skill="AWS Cloud Services" percentage={85} />
              <SkillBar skill="Database Design" percentage={90} />
              <SkillBar skill="Blockchain Development" percentage={80} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar = ({ skill, percentage }: SkillBarProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-tech-purple font-bold">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-tech-purple to-tech-blue rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Skills;
