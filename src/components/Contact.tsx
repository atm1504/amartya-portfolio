
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-tech-purple" size={24} />,
      title: "Email",
      value: "atm1504.in@gmail.com",
      link: "mailto:atm1504.in@gmail.com"
    },
    {
      icon: <Phone className="text-tech-purple" size={24} />,
      title: "Phone",
      value: "Available on request",
      link: "#"
    },
    {
      icon: <User className="text-tech-purple" size={24} />,
      title: "Location",
      value: "Durgapur, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
              <p className="text-tech-purple font-mono text-sm tracking-wider">GET IN TOUCH</p>
              <div className="h-1 w-10 bg-tech-purple rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-tech-purple">Connect</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Have a project in mind or want to explore potential collaborations?
            Feel free to reach out, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <Card key={index} className="card-hover border border-muted bg-card/50">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="p-4 bg-secondary rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <a 
                  href={item.link} 
                  className="text-tech-purple hover:underline"
                >
                  {item.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden border border-muted">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-tech-purple to-tech-blue text-white">
                <h3 className="text-2xl font-bold mb-4">Send Me a Message</h3>
                <p className="mb-6 text-white/80">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Mail me at</div>
                      <div className="font-medium">atm1504.in@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Call me at</div>
                      <div className="font-medium">Available on request</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium block mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium block mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium block mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium block mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-tech-purple hover:bg-tech-purple/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
