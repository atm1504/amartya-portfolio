import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-tech-purple">atm</span>1504
              <span className="text-tech-purple">.dev</span>
            </h3>
            <p className="text-white/70 mb-4 max-w-md">
              Full stack developer with expertise in web, mobile, cloud, and
              blockchain technologies, focused on building impactful digital
              solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/atm1504"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/atm1504"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/AmartyaMondal7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:atm1504.in@gmail.com"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#github-stats"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  GitHub Stats
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 text-tech-purple" />
                <span className="text-white/70">
                  Personal: atm1504.in@gmail.com
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 text-tech-purple" />
                <span className="text-white/70">Work: amartya@work.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-[18px] h-[18px] mt-1 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-tech-purple"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-white/70">Durgapur, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {currentYear} Amartya Mondal (atm1504). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
