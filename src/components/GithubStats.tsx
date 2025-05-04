import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Star,
  GitFork,
  Users,
  Code,
  Award,
  Activity,
  TrendingUp,
  FileCode,
} from "lucide-react";
import { useState, useEffect } from "react";

interface GithubStats {
  repos: number;
  followers: number;
  stars: number;
  forks: number;
  contributions: number;
  projects: number;
  openSource: number;
  technologies: number;
  organizations: number;
}

const GithubStats = () => {
  const [stats, setStats] = useState<GithubStats>({
    repos: 61,
    followers: 72,
    stars: 216,
    forks: 94,
    contributions: 1329,
    projects: 30,
    openSource: 15,
    technologies: 23,
    organizations: 5,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("github-stats");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const statItems = [
    {
      icon: <Github size={28} className="text-tech-purple" />,
      value: stats.repos,
      label: "Repositories",
      color: "from-tech-purple/20 to-tech-purple/10",
    },
    {
      icon: <Star size={28} className="text-tech-cyan" />,
      value: stats.stars,
      label: "Stars Earned",
      color: "from-tech-cyan/20 to-tech-cyan/10",
    },
    {
      icon: <GitFork size={28} className="text-tech-blue" />,
      value: stats.forks,
      label: "Forks",
      color: "from-tech-blue/20 to-tech-blue/10",
    },
    {
      icon: <Users size={28} className="text-tech-green" />,
      value: stats.followers,
      label: "Followers",
      color: "from-tech-green/20 to-tech-green/10",
    },
    {
      icon: <Code size={28} className="text-tech-purple" />,
      value: stats.contributions,
      label: "Contributions",
      color: "from-tech-purple/20 to-tech-purple/10",
    },
  ];

  const additionalStats = [
    {
      icon: <FileCode size={28} className="text-tech-purple" />,
      value: stats.projects,
      label: "Projects Completed",
      color: "from-tech-purple/20 to-tech-purple/10",
    },
    {
      icon: <Award size={28} className="text-tech-cyan" />,
      value: stats.openSource,
      label: "Open Source Projects",
      color: "from-tech-cyan/20 to-tech-cyan/10",
    },
    {
      icon: <Activity size={28} className="text-tech-blue" />,
      value: stats.technologies,
      label: "Technologies Used",
      color: "from-tech-blue/20 to-tech-blue/10",
    },
    {
      icon: <TrendingUp size={28} className="text-tech-green" />,
      value: stats.organizations,
      label: "Organizations",
      color: "from-tech-green/20 to-tech-green/10",
    },
  ];

  const achievementStats = [
    { label: "GSoC Student Developer", value: "2019" },
    { label: "KickStart Best Rank", value: "968" },
    { label: "CodeChef Rank", value: "173" },
    { label: "Bronze Medal Inter-IIT", value: "2019" },
    { label: "KVPY Scholarship", value: "2018" },
    { label: "JEE Advance Rank", value: "6920" },
    { label: "WBJEE Rank", value: "310" },
    { label: "Math Olympiad AIR", value: "4" },
  ];

  return (
    <section id="github-stats" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">
                CODE CONTRIBUTIONS
              </p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            GitHub <span className="text-tech-purple">Stats</span> &{" "}
            <span className="text-tech-cyan">Achievements</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Metrics reflecting my contributions to open source and personal
            projects. I'm passionate about sharing knowledge and contributing to
            the developer community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
          {statItems.map((item, index) => (
            <Card
              key={index}
              className="card-hover border border-muted overflow-hidden"
            >
              <CardContent
                className={`p-6 bg-gradient-to-br ${item.color} flex flex-col items-center text-center h-full`}
              >
                <div className="p-3 bg-background rounded-full mb-4">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold mb-2">
                  {animate ? item.value : "0"}
                </div>
                <div className="text-sm text-foreground/70">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              Professional Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {additionalStats.map((item, index) => (
                <Card
                  key={index}
                  className="card-hover border border-muted overflow-hidden"
                >
                  <CardContent
                    className={`p-6 bg-gradient-to-br ${item.color} flex flex-col items-center text-center h-full`}
                  >
                    <div className="p-2 bg-background rounded-full mb-3">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold mb-1">
                      {animate ? item.value : "0"}+
                    </div>
                    <div className="text-sm text-foreground/70">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              Achievements
            </h3>
            <Card className="border border-muted overflow-hidden">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {achievementStats.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 bg-secondary/50 rounded-lg"
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm bg-tech-purple/20 text-tech-purple px-2 py-1 rounded">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/atm1504"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-tech-purple hover:underline"
          >
            <Github size={16} />
            Visit my GitHub profile @atm1504
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
