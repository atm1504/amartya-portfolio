
import { Card, CardContent } from "@/components/ui/card";
import { Book, Globe, HeadphonesIcon, Code, Users, Heart, Scroll, BookText, MessageSquareCode } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const Hobbies = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const bookCategories = [
    { id: "all", name: "All" },
    { id: "self-help", name: "Self Help" },
    { id: "productivity", name: "Productivity" },
    { id: "business", name: "Business" },
    { id: "finance", name: "Finance" },
    { id: "history", name: "History" },
    { id: "philosophy", name: "Philosophy" }
  ];
  
  const books = [
    { 
      title: "Atomic Habits", 
      author: "James Clear", 
      category: "Self Help",
      cover: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "Deep Work", 
      author: "Cal Newport", 
      category: "Productivity",
      cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "Zero to One", 
      author: "Peter Thiel", 
      category: "Business",
      cover: "https://m.media-amazon.com/images/I/71Xygne8+qL._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "The Lean Startup", 
      author: "Eric Ries", 
      category: "Business",
      cover: "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "Sapiens", 
      author: "Yuval Noah Harari", 
      category: "History",
      cover: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "Think and Grow Rich", 
      author: "Napoleon Hill", 
      category: "Self Help",
      cover: "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "The Psychology of Money", 
      author: "Morgan Housel", 
      category: "Finance",
      cover: "https://m.media-amazon.com/images/I/81Lb75rUhLL._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "Ikigai", 
      author: "Héctor García", 
      category: "Philosophy",
      cover: "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "Rich Dad Poor Dad", 
      author: "Robert Kiyosaki", 
      category: "Finance",
      cover: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "The 4-Hour Work Week", 
      author: "Timothy Ferriss", 
      category: "Productivity",
      cover: "https://m.media-amazon.com/images/I/81qW97ndkvL._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "The Subtle Art of Not Giving a F*ck", 
      author: "Mark Manson", 
      category: "Self Help",
      cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "How to Win Friends and Influence People", 
      author: "Dale Carnegie", 
      category: "Self Help",
      cover: "https://m.media-amazon.com/images/I/71uLHJrAgbL._AC_UF1000,1000_QL80_.jpg" 
    },
  ];

  const filteredBooks = activeCategory === "all" 
    ? books 
    : books.filter(book => book.category.toLowerCase() === activeCategory);

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
      icon: <MessageSquareCode className="text-tech-cyan" size={24} />, 
      title: "Innovation",
      description: "Exploring new AI and tech trends, finding creative solutions to problems."
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
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Book className="text-tech-purple" size={20} />
                <span>Books I've Read</span>
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {bookCategories.map(category => (
                  <Badge 
                    key={category.id}
                    className={`cursor-pointer ${
                      activeCategory === category.id 
                        ? "bg-tech-purple text-white" 
                        : "bg-secondary text-foreground/70 hover:bg-tech-purple/20"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
              
              <ScrollArea className="h-[320px] pr-4">
                <div className="grid grid-cols-2 gap-3">
                  {filteredBooks.map((book, index) => (
                    <div key={index} className="flex flex-col bg-secondary/50 rounded-lg overflow-hidden">
                      <div className="h-32 overflow-hidden">
                        <img 
                          src={book.cover} 
                          alt={`${book.title} cover`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm line-clamp-1">{book.title}</h4>
                        <p className="text-xs text-foreground/70">by {book.author}</p>
                        <Badge className="mt-2 bg-tech-purple/10 text-tech-purple border border-tech-purple/20 text-xs">
                          {book.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
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
