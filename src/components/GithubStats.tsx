
import { Card, CardContent } from "@/components/ui/card";
import { Github, Star, GitFork, Users, Code } from "lucide-react";
import { useState, useEffect } from "react";

interface GithubStats {
  repos: number;
  followers: number;
  stars: number;
  forks: number;
  contributions: number;
}

const GithubStats = () => {
  const [stats, setStats] = useState<GithubStats>({
    repos: 61,
    followers: 72,
    stars: 216,
    forks: 94,
    contributions: 1329,
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

    const element = document.getElementById('github-stats');
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

  return (
    <section id="github-stats" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">CODE CONTRIBUTIONS</p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            GitHub <span className="text-tech-purple">Stats</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Metrics reflecting my contributions to open source and personal projects.
            I'm passionate about sharing knowledge and contributing to the developer community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {statItems.map((item, index) => (
            <Card 
              key={index}
              className="card-hover border border-muted overflow-hidden"
            >
              <CardContent className={`p-6 bg-gradient-to-br ${item.color} flex flex-col items-center text-center h-full`}>
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

        <div className="mt-12 flex justify-center">
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
