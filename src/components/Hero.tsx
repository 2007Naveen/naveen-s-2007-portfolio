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

            <div className="flex flex-wrap gap-5 mt-5 opacity-0 animate-[fadeInUp_1s_ease_forwards_0.8s]">
              <button
                onClick={() => scrollToSection('projects')}
                className="relative px-9 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2.5 overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#1ed761] to-[#15c46a] text-[#0c0f17] shadow-[0_5px_15px_rgba(30,215,97,0.4)] hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(30,215,97,0.6)] before:content-[''] before:absolute before:top-0 before:-left-full before:w-1/2 before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
              >
                <Code2 className="w-5 h-5" />
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-9 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2.5 transition-all duration-300 border-2 border-primary text-primary hover:bg-primary/10 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Me
              </button>
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
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#1a1f2e] to-[#232838] text-primary text-xl transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.2)] relative overflow-hidden hover:-translate-y-[5px] hover:text-[#151925] hover:shadow-[0_8px_20px_rgba(30,215,97,0.3)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-[#1ed761] before:via-primary before:to-[#15c46a] before:opacity-0 before:transition-opacity before:duration-300 before:-z-10 hover:before:opacity-100"
                >
                  <Icon className="w-5 h-5 relative z-10" />
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
