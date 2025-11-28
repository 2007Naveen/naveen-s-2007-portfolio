import { Button } from '@/components/ui/button';
import { Github, Linkedin, MessageCircle, Send, Instagram, Facebook, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile.png';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Full Stack Developer', 'Web Developer', 'UI/UX Designer'];

  useEffect(() => {
    const currentText = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCurrentRole(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);
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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              NAVEENKUMAR R
            </h1>
            <p className="text-muted-foreground text-lg">
              Student of - B.E Computer Science And Engineering
            </p>
            <h2 className="text-3xl font-bold h-12">
              {currentRole}<span className="animate-blink">|</span>
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

            <div className="flex gap-5 mt-8 opacity-0 animate-[fadeInUp_1s_ease_forwards_1.1s]">
              {[
                { Icon: Github, href: 'https://github.com/NaveenkumarR2007' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/naveenkumar-r-be-cse-6b44aa319/' },
                { Icon: MessageCircle, href: 'https://wa.me/919087885455' },
                { Icon: Send, href: 'https://t.me/naveenkumar_r_cse' },
                { Icon: Instagram, href: 'https://www.instagram.com/r.naveenkumar2007/' },
                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61582503039413' },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-card to-card/80 text-primary text-xl transition-all duration-300 shadow-[0_0_15px_rgba(42,252,133,0.4)] relative overflow-hidden group hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(42,252,133,0.6)] active:translate-y-[-8px] active:shadow-[0_0_30px_rgba(42,252,133,0.8)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#15c46a] opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                  <Icon className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:text-background" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[360px] h-[360px]">
              {/* Pulse rings */}
              <div className="absolute w-[360px] h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 animate-pulse-ring" />
              <div className="absolute w-[360px] h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 animate-pulse-ring [animation-delay:1s]" />
              <div className="absolute w-[360px] h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 animate-pulse-ring [animation-delay:2s]" />
              
              {/* Rotating outer ring */}
              <div className="absolute w-[360px] h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(transparent,hsl(var(--primary)),transparent,transparent)] animate-rotate" />
              
              {/* Rotating middle ring */}
              <div className="absolute w-[330px] h-[330px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(transparent,hsl(var(--primary)),transparent,transparent)] animate-rotate-reverse blur-[3px] z-[2]" />
              
              {/* Rotating inner ring */}
              <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(transparent,hsl(var(--primary)),transparent,transparent)] animate-rotate-fast z-[3]" />
              
              {/* Border container mask */}
              <div className="absolute w-[320px] h-[320px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background z-[5]" />
              
              {/* Profile image */}
              <img
                src={profileImage}
                alt="Naveenkumar R"
                className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover border-4 border-background shadow-[0_5px_30px_rgba(0,0,0,0.4)] z-10 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
