
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Computer, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div
        className="absolute top-40 right-0 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">ABOUT ME</p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building <span className="text-tech-purple">Digital Experiences</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Hello, I am Amartya Mondal, a full stack web and app developer with rich experience in
            building websites, mobile applications and their backends. I'm passionate about
            leveraging technology to create impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-foreground/70">
              As a Mechanical Engineering graduate from IIT Patna, I've combined my analytical
              skills with my passion for coding. I've worked with leading companies like C1X Adtech,
              Oracle, and Deloitte, developing innovative solutions and leading technical teams.
            </p>
            <p className="text-foreground/70">
              Whether it's developing mobile apps, crafting efficient APIs, or implementing blockchain
              solutions, I approach each project with enthusiasm and a commitment to excellence. I
              believe in continuous learning and staying updated with the latest technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <ExperienceCard
              icon={<Code className="text-tech-purple" size={24} />}
              title="Web & Mobile"
              description="Developing responsive websites and native mobile applications"
            />
            <ExperienceCard
              icon={<Computer className="text-tech-purple" size={24} />}
              title="Full Stack"
              description="Building end-to-end solutions including robust backends"
            />
            <ExperienceCard
              icon={<Briefcase className="text-tech-purple" size={24} />}
              title="Cloud Services"
              description="Leveraging AWS for scalable and reliable applications"
            />
            <ExperienceCard
              icon={<Users className="text-tech-purple" size={24} />}
              title="Team Leader"
              description="Leading technical teams across various projects"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <StatsCard value="5+" label="Years Experience" />
          <StatsCard value="30+" label="Projects Completed" />
          <StatsCard value="15+" label="Technologies" />
          <StatsCard value="5+" label="Organizations" />
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExperienceCard = ({ icon, title, description }: ExperienceCardProps) => {
  return (
    <Card className="card-hover border border-muted bg-card/50">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-sm text-foreground/70">{description}</p>
      </CardContent>
    </Card>
  );
};

interface StatsCardProps {
  value: string;
  label: string;
}

const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-br from-tech-purple/10 to-tech-blue/10 border border-muted">
      <div className="text-3xl font-bold text-tech-purple mb-1">{value}</div>
      <div className="text-sm text-foreground/70">{label}</div>
    </div>
  );
};

export default About;
