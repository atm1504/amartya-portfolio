
import { Card, CardContent } from "@/components/ui/card";
import { Book, Globe, HeadphonesIcon, Code, Users, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hobbies = () => {
  const books = [
    { title: "Atomic Habits", author: "James Clear", category: "Self Help" },
    { title: "Deep Work", author: "Cal Newport", category: "Productivity" },
    { title: "Zero to One", author: "Peter Thiel", category: "Business" },
    { title: "The Lean Startup", author: "Eric Ries", category: "Business" },
    { title: "Sapiens", author: "Yuval Noah Harari", category: "History" },
    { title: "Think and Grow Rich", author: "Napoleon Hill", category: "Self Help" },
    { title: "The Psychology of Money", author: "Morgan Housel", category: "Finance" },
    { title: "Ikigai", author: "Héctor García", category: "Philosophy" },
  ];

  const interests = [
    { 
      icon: <Code className="text-tech-purple" size={24} />, 
      title: "Coding",
      description: "Experimenting with new technologies and building innovative solutions."
    },
    { 
      icon: <Book className="text-tech-blue" size={24} />, 
      title: "Reading",
      description: "Learning from books about technology, business, and personal growth."
    },
    { 
      icon: <Globe className="text-tech-green" size={24} />, 
      title: "Traveling",
      description: "Exploring new places and experiencing different cultures."
    },
    { 
      icon: <HeadphonesIcon className="text-tech-cyan" size={24} />, 
      title: "Music",
      description: "Listening to various genres of music to relax and find inspiration."
    },
    { 
      icon: <Users className="text-tech-purple" size={24} />, 
      title: "Networking",
      description: "Connecting with people and learning from their experiences."
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">BEYOND TECH</p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Personal <span className="text-tech-purple">Interests</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Life isn't just about coding! I enjoy exploring various interests that keep me
            balanced and continuously learning outside the tech world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="card-hover overflow-hidden border border-muted bg-background">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Heart className="text-tech-purple" size={20} />
                <span>What I Love</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <div key={index} className="flex flex-col items-center md:items-start gap-3">
                    <div className="p-3 bg-secondary rounded-full">
                      {interest.icon}
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="font-bold mb-1">{interest.title}</h4>
                      <p className="text-sm text-foreground/70">{interest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover overflow-hidden border border-muted bg-background">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Book className="text-tech-purple" size={20} />
                <span>Books I've Read</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {books.map((book, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{book.title}</h4>
                      <p className="text-sm text-foreground/70">by {book.author}</p>
                    </div>
                    <Badge className="bg-tech-purple/10 text-tech-purple border border-tech-purple/20">
                      {book.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-br from-tech-purple/10 to-tech-blue/10 p-6 rounded-xl border border-muted">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-background rounded-full">
              <Globe className="text-tech-purple" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">International Traveler</h3>
              <p className="text-foreground/70">
                My work has taken me across the globe, expanding my cultural perspective and professional network. 
                I regularly travel between my home in Durgapur, office in Chennai, and international locations for 
                client meetings and collaborative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
