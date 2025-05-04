import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Technology",
      field: "Mechanical Engineering",
      institution: "Indian Institute of Technology Patna",
      period: "2016 - 2020",
      description:
        "Pursued my undergraduate degree from IIT Patna, one of India's premier engineering institutions. While my formal degree was in Mechanical Engineering, I developed a strong passion for software development and pursued it extensively.",
      achievements: [
        "Secured 3rd Prize at Inter IIT Tech Meet 8.O Coding Hackathon",
        "Selected for Google Summer of Code 2019",
        "Led multiple technical teams and projects",
      ],
    },
    {
      degree: "Higher Secondary Education",
      field: "Science & Mathematics",
      institution: "Amrita Vidyalayam, Durgapur",
      period: "2014 - 2016",
      description:
        "Completed my higher secondary education with a focus on Science and Mathematics, building a strong foundation for my engineering education and technical career.",
      achievements: [],
    },
    {
      degree: "Secondary Education",
      field: "General Education",
      institution: "Amrita Vidyalayam, Durgapur",
      period: "2004 - 2014",
      description:
        "Received my primary and secondary education from Amrita Vidyalayam, a premier educational institution in Durgapur, where I developed a strong foundation in academics and extracurricular activities.",
      achievements: [],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">
                EDUCATION
              </p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Academic <span className="text-tech-purple">Background</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            My educational journey has equipped me with analytical thinking,
            problem-solving abilities, and a strong technical foundation that
            complements my software development skills.
          </p>
        </div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <Card
              key={index}
              className="card-hover overflow-hidden border border-muted"
            >
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                  <div>
                    <div className="mb-4">
                      <Badge className="bg-tech-purple mb-2">
                        {item.period}
                      </Badge>
                      <h3 className="text-2xl font-bold">{item.degree}</h3>
                      <p className="text-tech-purple font-medium">
                        {item.field}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <span className="font-bold">
                          {item.institution.charAt(0)}
                        </span>
                      </div>
                      <div className="text-lg font-medium">
                        {item.institution}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-foreground/70">{item.description}</p>

                    {item.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold uppercase mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {item.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-tech-purple mt-1.5 mr-2"></div>
                                <span className="text-sm text-foreground/80">
                                  {achievement}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
