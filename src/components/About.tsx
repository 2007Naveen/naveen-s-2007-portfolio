import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import profileImage from '@/assets/nkphoto.png';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* PROFILE IMAGE WITH BUBBLE ANIMATION */}
          <div className="flex justify-center md:order-none order-first mb-8 md:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Bubble effects */}
              <span className="absolute w-3 h-3 bg-white/30 rounded-full animate-bubble top-10 left-5" />
              <span className="absolute w-4 h-4 bg-white/20 rounded-full animate-bubble delay-200 top-20 left-32" />
              <span className="absolute w-2 h-2 bg-white/25 rounded-full animate-bubble delay-400 top-40 left-16" />
              
              <div className="relative w-full h-full rounded-full border-4 border-primary overflow-hidden animate-float">
                <img
                  src={profileImage}
                  alt="Naveenkumar R"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-6 text-justify">
            <p className="text-sm md:text-base leading-relaxed">
              "Hi !, I'm <span className="font-bold text-primary">Naveenkumar R</span>, and I'm a
              2nd-year Computer Science student passionate about building websites. I am currently
              focused on mastering Full-Stack Development, learning key technologies and Backend
              technologies, Databases connectivities. My focus right now is creating clean code and
              highly performant websites. My goal is to use what I learn about technical's and build
              responsive, fast websites. I am actively looking for projects and opportunities to
              apply my growing skills in a real-world setting."
            </p>

            {/* DOWNLOAD BUTTON WITH SILVER SHINE */}
            <div className="flex justify-center md:justify-start">
              <Button
                asChild
                className="relative bg-primary text-primary-foreground hover:bg-primary/90 overflow-hidden"
              >
                <a
                  href="https://drive.google.com/file/d/1MJvAH8vn0wd3R-XKwDQHjFX-n8IHJZAi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 md:px-6 md:py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                  <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent transform -skew-x-12 animate-shine"></span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
{/* 
      {/* TAILWIND ANIMATIONS 
      <style jsx>{
        @keyframes shine {
          0% { left: -75%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
        .animate-shine {
          animation: shine 1s ease-in-out forwards;
        }

        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.5; }
        }
        .animate-bubble {
          animation: bubble 4s ease-in-out infinite;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      }</style> */}
    </section>
  );
};

export default About;
