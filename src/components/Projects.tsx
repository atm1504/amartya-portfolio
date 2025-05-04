
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "DOOH",
      description: "A technology platform to reform how digital ads are shown on large LCD screens. Leading the development team at C1X for this massive project.",
      technologies: ["Node.js", "React", "AWS", "Docker", "MongoDB"],
      category: "web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      featured: true
    },
    {
      title: "Stocktick Capital",
      description: "A financial management tool portal with Android app, website and backend. Led team development for this contracted financial management solution.",
      technologies: ["Android", "React", "Node.js", "MongoDB", "REST API"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Barbera",
      description: "Developed the entire project including Android app, backend, and admin panel for this startup. The app is available on Play Store.",
      technologies: ["Android", "Kotlin", "Node.js", "MongoDB", "Firebase"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "WhatsApp Bot",
      description: "Developed scripts that act as WhatsApp Bots to spy on online times, send automatic replies, and send multiple messages to users.",
      technologies: ["Python", "JavaScript", "Web Scraping", "API Integration"],
      category: "automation",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Digital Identity",
      description: "A blockchain-based system where each person has one unique identity. Personal information is stored in Hyperledger Blockchain for increased efficiency.",
      technologies: ["Blockchain", "Hyperledger", "JavaScript", "Node.js"],
      category: "blockchain",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      featured: true
    },
    {
      title: "SUSI.AI Android Client",
      description: "GSoC'19 project focusing on integrating SUSI smart speaker with the Android app. Contributed to FOSSASIA organization.",
      technologies: ["Android", "Java", "AI", "API Integration"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "blockchain", label: "Blockchain" },
    { id: "automation", label: "Automation" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">MY PROJECTS</p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-tech-purple">Work</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            A showcase of my projects spanning web, mobile, blockchain, and automation technologies.
            Each project represents unique challenges and solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                className={`rounded-full ${
                  filter === category.id
                    ? "bg-tech-purple hover:bg-tech-purple/90"
                    : "border-tech-purple/50 text-foreground/70 hover:text-tech-purple"
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-tech-purple text-tech-purple">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  featured?: boolean;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden card-hover border border-muted h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/80 to-transparent z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {project.featured && (
          <Badge className="absolute top-4 right-4 z-20 bg-tech-purple">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4 text-sm flex-grow">{project.description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-secondary text-xs text-foreground/70 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-secondary text-xs text-foreground/70 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="w-full flex items-center gap-1">
              <Github size={16} /> Code
            </Button>
            <Button variant="default" size="sm" className="w-full flex items-center gap-1 bg-tech-purple hover:bg-tech-purple/90">
              <ExternalLink size={16} /> Demo
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
