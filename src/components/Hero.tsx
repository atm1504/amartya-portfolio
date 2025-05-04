
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 pb-10 flex items-center relative overflow-hidden"
    >
      <div
        className="absolute -top-40 -right-40 w-96 h-96 bg-tech-purple/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="h-1 w-10 bg-tech-purple rounded"></div>
            <p className="text-tech-purple font-mono text-sm tracking-wider">
              FULL STACK DEVELOPER
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Building digital <br />
            <span className="text-gradient">solutions with code</span>
          </h1>
          
          <div className="relative pl-4 border-l-2 border-tech-purple">
            <p className="text-lg text-foreground/80">
              Hello, I'm <span className="font-bold text-foreground">Amartya Mondal</span>,
              a passionate full stack developer with expertise in web, mobile, and blockchain
              technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-tech-purple hover:bg-tech-purple/90 text-white">
              View Projects
            </Button>
            <Button variant="outline" className="border-tech-purple text-tech-purple">
              Download CV
            </Button>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:atm1504.in@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative">
          <Card className="relative bg-gradient-to-br from-tech-dark to-tech-dark/90 text-white p-6 overflow-hidden terminal">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="font-mono">
              <span className="text-tech-green">$</span> <span className="text-tech-cyan">cd</span> amartya/portfolio
              <br />
              <br />
              <span className="text-tech-green">$</span> <span className="text-tech-cyan">cat</span> summary.json
              <br />
              {`{`}
              <br />
              {"  "}<span className="text-tech-purple">"name"</span>: <span className="text-tech-cyan">"Amartya Mondal"</span>,
              <br />
              {"  "}<span className="text-tech-purple">"role"</span>: <span className="text-tech-cyan">"Full Stack Developer"</span>,
              <br />
              {"  "}<span className="text-tech-purple">"location"</span>: <span className="text-tech-cyan">"Durgapur, India"</span>,
              <br />
              {"  "}<span className="text-tech-purple">"expertise"</span>: [
              <br />
              {"    "}<span className="text-tech-cyan">"Web Development"</span>,
              <br />
              {"    "}<span className="text-tech-cyan">"Mobile Apps"</span>,
              <br />
              {"    "}<span className="text-tech-cyan">"Cloud Services"</span>,
              <br />
              {"    "}<span className="text-tech-cyan">"Blockchain"</span>
              <br />
              {"  "}],
              <br />
              {"  "}<span className="text-tech-purple">"contact"</span>: <span className="text-tech-cyan">"atm1504.in@gmail.com"</span>
              <br />
              {`}`}
              <br />
              <br />
              <span className="text-tech-green">$</span> <span className="inline-block h-5 w-2 bg-white/70 animate-blink"></span>
            </pre>
          </Card>
          <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 bg-tech-purple/20 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
