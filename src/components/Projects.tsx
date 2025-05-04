import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code,
  ExternalLink,
  Github,
  Play,
  MessageSquareCode,
  Layers,
} from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Claude MCP Integration",
      description:
        "Developed a system integrating Claude's Model Context Protocol (MCP) to enhance content generation capabilities for ad rendering with personalized content delivery.",
      technologies: [
        "Python",
        "Claude API",
        "MCP",
        "RAG",
        "FastAPI",
        "TypeScript",
      ],
      category: ["ai", "llm", "professional", "web"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
      featured: true,
      private: true,
    },
    {
      title: "Social Media Ad Analytics",
      description:
        "Created a server to fetch and analyze ad information from Facebook and Instagram, with an LLM-powered query interface for advanced ad performance insights.",
      technologies: [
        "Node.js",
        "LangChain",
        "Meta API",
        "Python",
        "MongoDB",
        "Vector DB",
      ],
      category: ["ai", "llm", "data", "professional"],
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
      featured: true,
      private: true,
    },
    {
      title: "DOOH (Digital Out Of Home)",
      description:
        "Led cross-device ad rendering targeting offline customers through digital hoardings. Spearheading implementation using NestJS, Android box, and RPI.",
      technologies: ["Node.js", "NestJS", "React", "AWS", "Docker", "MongoDB"],
      category: ["web", "cloud", "professional"],
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      featured: true,
      private: true,
    },
    {
      title: "CDMP Platform",
      description:
        "Directed the development of a comprehensive Customer Data Management Platform for customer management and led Email Promotion and Push Promotion teams.",
      technologies: ["Node.js", "React", "AWS", "Docker", "MongoDB", "Redis"],
      category: ["web", "cloud", "professional"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      featured: true,
      private: true,
    },
    {
      title: "Copy2Paste",
      description:
        "Chrome extension that lets you upload multiple files and copy all their details in one click. Great for extracting text to use in multiple AI chats or websites.",
      technologies: ["JavaScript", "Chrome API", "HTML", "CSS"],
      category: ["web", "extension", "personal"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      github: "https://github.com/atm1504/copy2paste",
      demo: "https://chromewebstore.google.com/detail/copy2paste/xyz",
    },
    {
      title: "Stocktick Capital",
      description:
        "A financial management tool portal with Android app, website and backend. Led team development for this contracted financial management solution.",
      technologies: ["Android", "React", "Node.js", "MongoDB", "REST API"],
      category: ["mobile", "web", "professional"],
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      github: "https://github.com/atm1504/stocktick-capital",
    },
    {
      title: "Barbera",
      description:
        "A salon service app for a startup. Developed the entire project including Android app, backend, and admin panel. The app is available on Play Store.",
      technologies: [
        "Android",
        "Kotlin",
        "Node.js",
        "MongoDB",
        "AWS",
        "DynamoDB",
        "Lambda",
      ],
      category: ["mobile", "cloud", "professional"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      demo: "https://play.google.com/store/apps/details?id=com.barbera.app",
    },
    {
      title: "Greymatter Tech",
      description:
        "An Agritech startup platform to supply farmers with basic supplies and farm equipment. Created solutions to bridge the technology gap in agriculture.",
      technologies: ["Flutter", "Python", "AWS", "MySQL"],
      category: ["mobile", "cloud", "professional"],
      image:
        "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      video: "https://www.youtube.com/watch?v=xyz",
    },
    {
      title: "WhatsApp Bot",
      description:
        "Developed scripts that act as WhatsApp Bots to spy on online times, send automatic replies, and send multiple messages to users.",
      technologies: ["Python", "JavaScript", "Web Scraping", "API Integration"],
      category: ["automation", "personal"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      github: "https://github.com/atm1504/whatsapp-bot",
    },
    {
      title: "Digital Identity",
      description:
        "A blockchain-based system where each person has one unique identity. Personal information is stored in Hyperledger Blockchain for increased efficiency.",
      technologies: ["Blockchain", "Hyperledger", "JavaScript", "Node.js"],
      category: ["blockchain", "web"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      featured: true,
      github: "https://github.com/atm1504/digital-identity",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & LLM" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "blockchain", label: "Blockchain" },
    { id: "automation", label: "Automation" },
    { id: "extension", label: "Extensions" },
    { id: "cloud", label: "Cloud" },
    { id: "professional", label: "Professional" },
    { id: "personal", label: "Personal" },
    { id: "llm", label: "LLM" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">
                MY PROJECTS
              </p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-tech-purple">Work</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            A showcase of my innovative projects spanning web, mobile, AI,
            blockchain, and automation technologies. Each project represents
            unique challenges and creative solutions I've developed.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-4xl">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                className={`rounded-full ${
                  filter === category.id
                    ? "bg-tech-purple hover:bg-tech-purple/90"
                    : "border-tech-purple/50 text-foreground/70 hover:text-tech-purple"
                } mb-2`}
                onClick={() => setFilter(category.id)}
                size="sm"
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
          <Button
            variant="outline"
            className="border-tech-purple text-tech-purple"
            onClick={() => window.open("https://github.com/atm1504", "_blank")}
          >
            View More Projects on GitHub
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
  category: string[];
  image: string;
  featured?: boolean;
  private?: boolean;
  github?: string;
  demo?: string;
  video?: string;
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
        <div className="absolute top-4 right-4 z-20 space-y-2">
          {project.featured && (
            <Badge className="bg-tech-purple">Featured</Badge>
          )}
          {project.private && (
            <Badge className="bg-tech-dark text-white">Private</Badge>
          )}
          {project.category.includes("llm") && (
            <Badge className="bg-tech-cyan">
              <Layers className="mr-1 h-3 w-3" /> LLM
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          {project.category.includes("ai") && (
            <MessageSquareCode size={16} className="text-tech-purple" />
          )}
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
        <p className="text-foreground/70 mb-4 text-sm flex-grow">
          {project.description}
        </p>

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
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github size={16} /> Code
              </Button>
            )}
            {project.demo && (
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-1 bg-tech-purple hover:bg-tech-purple/90"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <ExternalLink size={16} /> Demo
              </Button>
            )}
            {project.video && (
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-1 bg-tech-blue hover:bg-tech-blue/90"
                onClick={() => window.open(project.video, "_blank")}
              >
                <Play size={16} /> Video
              </Button>
            )}
            {!project.github &&
              !project.demo &&
              !project.video &&
              project.private && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 opacity-50"
                  disabled
                >
                  <Code size={16} /> Private Project
                </Button>
              )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
