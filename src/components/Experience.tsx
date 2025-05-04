
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Engineering Manager",
      company: "C1X Adtech Inc.",
      period: "Present",
      description: "Leading cross-device ad rendering solutions targeting offline customers through digital hoardings. Spearheading the implementation of advanced technology using NestJs, Android box, and RPI. Directing the development of the CDMP Platform for customer management and leading Email Promotion and Push Promotion teams.",
      technologies: ["Node.js", "NestJS", "AWS", "React", "Docker", "MongoDB", "Redis", "Leadership"],
      isPPO: false,
      isLatest: true
    },
    {
      role: "Team Lead",
      company: "C1X Adtech Inc.",
      period: "2022 - 2023",
      description: "Promoted to Team Lead for the DOOH project, leading cross-device ad rendering targeting offline customers through digital hoardings. Acknowledged for efficient project execution and leadership skills.",
      technologies: ["Team Leadership", "NestJS", "AWS", "React", "Docker", "Project Management"],
      isPPO: false
    },
    {
      role: "Software Developer",
      company: "C1X Adtech Inc.",
      period: "2021 - 2022",
      description: "Working on multiple projects including adserver, DOOH server, Raspi, and Ad Engines. Implementing innovative solutions and contributing to core platform development.",
      technologies: ["Node.js", "AWS", "React", "Docker", "MongoDB", "Redis"],
      isPPO: true
    },
    {
      role: "SDE Intern",
      company: "C1X Adtech Inc.",
      period: "2020 - 2021",
      description: "Developed an Android SDK for user actions capturing in CDMP platform. Worked on CDMP Platform and ad engines development.",
      technologies: ["Android", "Java", "Kotlin", "JavaScript", "Node.js"]
    },
    {
      role: "Part-Time Instructor",
      company: "Scaler Academy",
      period: "2022 - Present",
      description: "Empowering the next generation of software engineers. Passionately teaching DSA to inspire and equip aspiring talents with essential skills for success in the ever-evolving tech landscape.",
      technologies: ["DSA", "Algorithms", "Teaching", "Mentorship"]
    },
    {
      role: "Overall Lead",
      company: "Developers Student Clubs - IIT Patna",
      period: "2020 - 2021",
      description: "Led a team of student developers working on technology solutions for social good. Organized workshops and hackathons to promote technical skills.",
      technologies: ["Team Leadership", "Project Management", "Web", "Android"]
    },
    {
      role: "Offshore Contractor",
      company: "Oracle",
      period: "2019",
      description: "Worked as an offshore developer on a contract basis, developing SSE's and Oracle Cloud Integration Services.",
      technologies: ["Oracle Cloud", "Java", "JavaScript"]
    },
    {
      role: "Offshore Contractor",
      company: "Deloitte Canada",
      period: "2019",
      description: "Worked as an offshore developer developing SSE's and websites using Oracle Cloud Commerce and Oracle Cloud Integration Service.",
      technologies: ["Oracle Cloud Commerce", "Integration Services", "Web Development"]
    },
    {
      role: "SDE Intern",
      company: "Success Numbers LLC",
      period: "2019",
      description: "Worked with different technologies like NodeJs, Oracle Cloud Commerce, AWS, and Springboot for various projects in the company.",
      technologies: ["Node.js", "AWS", "Springboot", "Oracle Cloud Commerce"]
    },
    {
      role: "GSoC Student Developer",
      company: "FOSSASIA",
      period: "2019",
      description: "Contributed to open source under the FOSSASIA organization during my first year. Worked on SUSI.AI Android Client, integrating SUSI smart speaker with the Android app.",
      technologies: ["Android", "Java", "Open Source", "API Integration"],
      isAward: true
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">WORK EXPERIENCE</p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-tech-purple">Journey</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            My career path includes working with various organizations
            where I've built and deployed innovative solutions across different technology stacks.
            I thrive on learning new technologies and experimenting with them to build impactful products.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`card-hover overflow-hidden border border-muted ${exp.isLatest ? 'ring-2 ring-tech-purple' : ''}`}
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_2fr] h-full">
                  <div className="bg-secondary p-6 md:p-8">
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <div className="text-tech-purple font-semibold mb-4">{exp.company}</div>
                    <div className="text-sm text-foreground/70 mb-4">{exp.period}</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.isPPO && (
                        <Badge className="bg-tech-green/10 text-tech-green border border-tech-green/20">
                          Pre-Placement Offer
                        </Badge>
                      )}
                      {exp.isLatest && (
                        <Badge className="bg-tech-purple/10 text-tech-purple border border-tech-purple/20">
                          Current Role
                        </Badge>
                      )}
                      {exp.isAward && (
                        <Badge className="bg-tech-blue/10 text-tech-blue border border-tech-blue/20">
                          Recognition
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <p className="text-foreground/80">{exp.description}</p>
                    <div>
                      <h4 className="text-sm font-bold mb-2">TECHNOLOGIES</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Experience;
