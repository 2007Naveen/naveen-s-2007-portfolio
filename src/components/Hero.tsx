import { Button } from '@/components/ui/button';
import { Github, Linkedin, MessageCircle, Globe, Instagram, Facebook, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              NAVEENKUMAR <span className="text-primary">R</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Student of - B.E Computer Science And Engineering
            </p>
            <h2 className="text-3xl font-bold">
              Beginner-Full <span className="text-primary">Stack</span>
            </h2>
            <p className="text-lg leading-relaxed">
              I can create responsive, user-friendly websites. I'm interesting
              to make beautiful designed and specially performable websites.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Code2 className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { Icon: Github, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: MessageCircle, href: '#' },
                { Icon: Globe, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-80 h-80 rounded-full border-4 border-primary overflow-hidden animate-float">
                <img
                  src={profileImage}
                  alt="Naveenkumar R"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
