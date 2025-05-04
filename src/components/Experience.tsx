import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRightIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "lucide-react";
import { useState } from "react";

const Experience = () => {
  // Default all companies to be open
  const [openCompany, setOpenCompany] = useState<string[]>([
    "C1X Adtech Inc.",
    "Scaler Academy",
    "Developers Student Clubs - IIT Patna",
    "Oracle",
    "Deloitte Canada",
    "Success Numbers LLC",
    "FOSSASIA",
  ]);

  const toggleCompany = (company: string) => {
    if (openCompany.includes(company)) {
      setOpenCompany(openCompany.filter((c) => c !== company));
    } else {
      setOpenCompany([...openCompany, company]);
    }
  };

  const companyExperiences = [
    {
      company: "C1X Adtech Inc.",
      duration: "2020 - Present",
      logo: "c1x-logo.png",
      description:
        "Leading adtech company specializing in programmatic advertising and digital out-of-home solutions.",
      roles: [
        {
          role: "Engineering Manager",
          period: "2023 - Present",
          description:
            "Leading cross-device ad rendering solutions targeting offline customers through digital hoardings. Spearheading the implementation of advanced technology using NestJs, Android box, and RPI. Directing the development of the CDMP Platform for customer management and leading Email Promotion and Push Promotion teams.",
          technologies: [
            "Node.js",
            "NestJS",
            "AWS",
            "React",
            "Docker",
            "MongoDB",
            "Redis",
            "Leadership",
          ],
          isLatest: true,
        },
        {
          role: "Team Lead",
          period: "2022 - 2023",
          description:
            "Promoted to Team Lead for the DOOH project, leading cross-device ad rendering targeting offline customers through digital hoardings. Acknowledged for efficient project execution and leadership skills.",
          technologies: [
            "Team Leadership",
            "NestJS",
            "AWS",
            "React",
            "Docker",
            "Project Management",
          ],
        },
        {
          role: "Software Developer",
          period: "2021 - 2022",
          description:
            "Working on multiple projects including adserver, DOOH server, Raspi, and Ad Engines. Implementing innovative solutions and contributing to core platform development.",
          technologies: [
            "Node.js",
            "AWS",
            "React",
            "Docker",
            "MongoDB",
            "Redis",
          ],
          isPPO: true,
        },
        {
          role: "SDE Intern",
          period: "2020 - 2021",
          description:
            "Developed an Android SDK for user actions capturing in CDMP platform. Worked on CDMP Platform and ad engines development.",
          technologies: ["Android", "Java", "Kotlin", "JavaScript", "Node.js"],
        },
      ],
    },
    {
      company: "Scaler Academy",
      duration: "2022 - Present",
      description:
        "Leading tech education platform focused on upskilling software engineers.",
      roles: [
        {
          role: "Part-Time Instructor",
          period: "2022 - Present",
          description:
            "Empowering the next generation of software engineers. Passionately teaching DSA to inspire and equip aspiring talents with essential skills for success in the ever-evolving tech landscape.",
          technologies: ["DSA", "Algorithms", "Teaching", "Mentorship"],
        },
      ],
    },
    {
      company: "Developers Student Clubs - IIT Patna",
      duration: "2020 - 2021",
      description:
        "Google-supported technical community that bridges the gap between theory and practical application.",
      roles: [
        {
          role: "Overall Lead",
          period: "2020 - 2021",
          description:
            "Led a team of student developers working on technology solutions for social good. Organized workshops and hackathons to promote technical skills.",
          technologies: [
            "Team Leadership",
            "Project Management",
            "Web",
            "Android",
          ],
        },
      ],
    },
    {
      company: "Oracle",
      duration: "2019",
      description:
        "Multinational technology corporation specializing in database software and technology, cloud systems.",
      roles: [
        {
          role: "Offshore Contractor",
          period: "2019",
          description:
            "Worked as an offshore developer on a contract basis, developing SSE's and Oracle Cloud Integration Services.",
          technologies: ["Oracle Cloud", "Java", "JavaScript"],
        },
      ],
    },
    {
      company: "Deloitte Canada",
      duration: "2019",
      description:
        "Global professional services network providing audit, consulting, financial advisory, risk advisory services.",
      roles: [
        {
          role: "Offshore Contractor",
          period: "2019",
          description:
            "Worked as an offshore developer developing SSE's and websites using Oracle Cloud Commerce and Oracle Cloud Integration Service.",
          technologies: [
            "Oracle Cloud Commerce",
            "Integration Services",
            "Web Development",
          ],
        },
      ],
    },
    {
      company: "Success Numbers LLC",
      duration: "2019",
      description: "Technology consulting and solutions company.",
      roles: [
        {
          role: "SDE Intern",
          period: "2019",
          description:
            "Worked with different technologies like NodeJs, Oracle Cloud Commerce, AWS, and Springboot for various projects in the company.",
          technologies: [
            "Node.js",
            "AWS",
            "Springboot",
            "Oracle Cloud Commerce",
          ],
        },
      ],
    },
    {
      company: "FOSSASIA",
      duration: "2019",
      description:
        "Open source organization developing software applications for social change using a wide range of technologies.",
      roles: [
        {
          role: "GSoC Student Developer",
          period: "2019",
          description:
            "Contributed to open source under the FOSSASIA organization during my first year. Worked on SUSI.AI Android Client, integrating SUSI smart speaker with the Android app.",
          technologies: ["Android", "Java", "Open Source", "API Integration"],
          isAward: true,
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">
                WORK EXPERIENCE
              </p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-tech-purple">Journey</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            My career path includes working with various organizations where
            I've built and deployed innovative solutions across different
            technology stacks.
          </p>
        </div>

        <div className="space-y-8">
          {companyExperiences.map((company, companyIndex) => (
            <Card
              key={companyIndex}
              className={`card-hover overflow-hidden border border-muted ${
                company.company === "C1X Adtech Inc."
                  ? "ring-2 ring-tech-purple"
                  : ""
              }`}
            >
              <CardContent className="p-0">
                <div
                  className="p-6 cursor-pointer flex justify-between items-center bg-secondary"
                  onClick={() => toggleCompany(company.company)}
                >
                  <div>
                    <div className="flex items-center">
                      <div className="mr-3">
                        <BriefcaseIcon className="text-tech-purple" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{company.company}</h3>
                        <div className="text-sm text-foreground/70">
                          {company.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-foreground/70">
                    {openCompany.includes(company.company) ? (
                      <ChevronDownIcon size={20} />
                    ) : (
                      <ChevronRightIcon size={20} />
                    )}
                  </div>
                </div>

                {openCompany.includes(company.company) && (
                  <div className="bg-gradient-to-b from-secondary/30 to-background">
                    <div className="p-6">
                      <p className="text-foreground/80 mb-6">
                        {company.description}
                      </p>

                      <div className="space-y-8">
                        {company.roles.map((role, roleIndex) => (
                          <div key={roleIndex} className="relative">
                            {/* Career Timeline Visualization */}
                            {roleIndex < company.roles.length - 1 && (
                              <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-tech-purple/30"></div>
                            )}

                            <div className="flex">
                              {/* Role Timeline Marker */}
                              <div className="relative z-10 mr-6">
                                <div
                                  className={`w-8 h-8 rounded-full ${
                                    role.isLatest
                                      ? "bg-tech-purple text-white"
                                      : "bg-secondary border border-tech-purple/30"
                                  } flex items-center justify-center`}
                                >
                                  {role.isLatest ? (
                                    <ArrowUpRightIcon size={16} />
                                  ) : (
                                    roleIndex + 1
                                  )}
                                </div>
                              </div>

                              {/* Role Content */}
                              <div className="flex-1">
                                <div className="mb-4">
                                  <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <h4 className="text-lg font-bold">
                                      {role.role}
                                    </h4>
                                    <div className="text-sm text-foreground/70">
                                      {role.period}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {role.isPPO && (
                                        <Badge className="bg-tech-green/10 text-tech-green border border-tech-green/20">
                                          Pre-Placement Offer
                                        </Badge>
                                      )}
                                      {role.isLatest && (
                                        <Badge className="bg-tech-purple/10 text-tech-purple border border-tech-purple/20">
                                          Current Role
                                        </Badge>
                                      )}
                                      {role.isAward && (
                                        <Badge className="bg-tech-blue/10 text-tech-blue border border-tech-blue/20">
                                          Recognition
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                  <p className="text-foreground/80">
                                    {role.description}
                                  </p>
                                </div>

                                <div>
                                  <h5 className="text-sm font-bold mb-2">
                                    TECHNOLOGIES
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    {role.technologies.map(
                                      (tech, techIndex) => (
                                        <span
                                          key={techIndex}
                                          className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-sm"
                                        >
                                          {tech}
                                        </span>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
