import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const textArray = [
    "building digital solutions",
    "creating innovative apps",
    "engineering web platforms",
    "experimenting with cloud tech",
    "developing blockchain systems",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentText = textArray[currentTextIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentText) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
      } else {
        setTypedText(
          isDeleting
            ? currentText.substring(0, typedText.length - 1)
            : currentText.substring(0, typedText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex, isDeleting, textArray]);

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
            Passionate about <br />
            <span className="text-gradient min-h-[96px] lg:min-h-[72px] block">
              {typedText}
              {showCursor && <span className="animate-blink">|</span>}
            </span>
          </h1>

          <div className="relative pl-4 border-l-2 border-tech-purple">
            <p className="text-lg text-foreground/80">
              Hello, I'm{" "}
              <span className="font-bold text-foreground">Amartya Mondal</span>{" "}
              (atm), an innovative full stack developer with expertise in web,
              mobile, and blockchain technologies. Always eager to learn,
              experiment, and build impactful solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-tech-purple hover:bg-tech-purple/90 text-white"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              className="border-tech-purple text-tech-purple"
            >
              Download CV
            </Button>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://github.com/atm1504"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/atm1504"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/AmartyaMondal7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
            >
              <Twitter size={20} />
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
              <span className="text-tech-green">$</span>{" "}
              <span className="text-tech-cyan">whoami</span>
              <br />
              atm1504
              <br />
              <br />
              <span className="text-tech-green">$</span>{" "}
              <span className="text-tech-cyan">cat</span> atm_profile.json
              <br />
              {`{`}
              <br />
              {"  "}
              <span className="text-tech-purple">"name"</span>:{" "}
              <span className="text-tech-cyan">"Amartya Mondal"</span>,
              <br />
              {"  "}
              <span className="text-tech-purple">"alias"</span>:{" "}
              <span className="text-tech-cyan">"atm1504"</span>,
              <br />
              {"  "}
              <span className="text-tech-purple">"role"</span>:{" "}
              <span className="text-tech-cyan">"Engineering Manager"</span>,
              <br />
              {"  "}
              <span className="text-tech-purple">"location"</span>:{" "}
              <span className="text-tech-cyan">"Durgapur/Chennai/Global"</span>,
              <br />
              {"  "}
              <span className="text-tech-purple">"traits"</span>: [
              <br />
              {"    "}
              <span className="text-tech-cyan">"Innovative"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"Experimental"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"Curious"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"Problem Solver"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"Leader"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"Life-long Learner"</span>
              <br />
              {"  "}],
              <br />
              {"  "}
              <span className="text-tech-purple">"expertise"</span>: [
              <br />
              {"    "}
              <span className="text-tech-cyan">"Web Development"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"Mobile Apps"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"Cloud Services"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"Blockchain"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"Team Leadership"</span>,
              <br />
              {"    "}
              <span className="text-tech-cyan">"System Design"</span>
              <br />
              {"  "}]
              <br />
              {`}`}
              <br />
              <br />
              <span className="text-tech-green">$</span>{" "}
              <span className="inline-block h-5 w-2 bg-white/70 animate-blink"></span>
            </pre>
          </Card>
          <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 bg-tech-purple/20 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
