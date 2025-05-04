
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2 group">
          <div className="bg-tech-purple p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Code size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Amartya<span className="text-tech-purple">.dev</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button variant="ghost" className="px-6">
            Resume
          </Button>
          <Button className="bg-tech-purple hover:bg-tech-purple/90 text-white">
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 rounded-md"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg py-4 border-t">
          <div className="container mx-auto flex flex-col space-y-4">
            <NavLinks mobile toggleMenu={toggleMenu} />
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="ghost" className="w-full justify-start">
                Resume
              </Button>
              <Button className="w-full bg-tech-purple hover:bg-tech-purple/90 text-white">
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  toggleMenu?: () => void;
}

const NavLinks = ({ mobile, toggleMenu }: NavLinksProps) => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <div
      className={`${
        mobile ? "flex flex-col space-y-2" : "flex items-center space-x-6"
      }`}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`text-foreground/80 hover:text-tech-purple transition-colors ${
            mobile ? "py-2 px-4" : ""
          }`}
          onClick={toggleMenu}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
