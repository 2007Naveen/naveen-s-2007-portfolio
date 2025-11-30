import { Button } from '@/components/ui/button';
import { Github, Linkedin, MessageCircle, Send, Instagram, Facebook, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile.png';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [shineActive, setShineActive] = useState(false);
  
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

  const handleProjectsClick = () => {
    setShineActive(true);
    setTimeout(() => setShineActive(false), 800);
    scrollToSection('projects');
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* UPDATED LAYOUT HERE */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          
          {/* TEXT SECTION */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
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
  {/* BUTTONS */}
            <div className="cta-buttons flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-4 sm:mt-5">
              <button
                onClick={handleProjectsClick}
                className="relative px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold inline-flex items-center gap-1 sm:gap-2 overflow-hidden bg-gradient-to-r from-[#1ed761] to-[#15c46a] text-[#0c0f17] shadow-md hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(30,215,97,0.5)] transition-all duration-300"
              >
                <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
                View Projects
                <span className={`absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent transform -skew-x-12 ${shineActive ? 'animate-shine' : ''}`}></span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="relative px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold inline-flex items-center gap-1 sm:gap-2 border-2 border-primary text-primary overflow-hidden transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                Contact Me
                <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/40 transform -skew-x-12 animate-shine"></span>
              </button>
            </div>

             <div className="flex justify-center md:justify-start gap-3 sm:gap-4 md:gap-5 mt-8 animate-[fadeInUp_1s_ease_forwards]">
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
                  className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#1a1f2e] to-[#232838] text-primary transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(30,215,97,0.3)]"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-center mb-10 md:mb-0">
            <div className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px]">
              
              {/* Pulse rings */}
              <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 animate-pulse-ring" />
              <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 animate-pulse-ring [animation-delay:1s]" />
              <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 animate-pulse-ring [animation-delay:2s]" />
              
              {/* Rotating rings */}
              <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(transparent,hsl(var(--primary)),transparent,transparent)] animate-rotate" />
              <div className="absolute w-[85%] h-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(transparent,hsl(var(--primary)),transparent,transparent)] animate-rotate-reverse blur-[3px]" />
              <div className="absolute w-[75%] h-[75%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(transparent,hsl(var(--primary)),transparent,transparent)] animate-rotate-fast" />
              
              {/* Mask background */}
              <div className="absolute w-[82%] h-[82%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />

              {/* Profile image */}
              <img
                src={profileImage}
                alt="Naveenkumar R"
                className="absolute w-[75%] h-[75%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover border-4 border-background shadow-[0_5px_30px_rgba(0,0,0,0.4)] z-10 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
