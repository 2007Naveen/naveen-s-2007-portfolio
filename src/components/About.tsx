import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import profileImage from '@/assets/profile1.png';
import { useState } from 'react';

const About = () => {
  const [shineActive, setShineActive] = useState(false);

  const handleDownloadClick = () => {
    setShineActive(true);
    setTimeout(() => setShineActive(false), 800);
  };

  return (
    <section id="about" className="py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-justify">
              "Hi !, I'm <span className="font-bold text-primary">Naveenkumar R</span>, and I'm a
              2nd-year Computer Science student passionate about building websites. I am currently
              focused on mastering Full-Stack Development, learning key technologies and Backend
              technologies, Databases connectivities. My focus right now is creating clean code and
              highly performant websites. My goal is to use what I learn about technical's and build
              responsive, fast websites. I am actively looking for projects and opportunities to
              apply my growing skills in a real-world setting."
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleDownloadClick}
                className="relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-semibold inline-flex items-center gap-2 overflow-hidden bg-gradient-to-r from-[#1ed761] to-[#15c46a] text-[#0c0f17] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(30,215,97,0.6)]"
              >
                <a
                  href="https://drive.google.com/file/d/1MJvAH8vn0wd3R-XKwDQHjFX-n8IHJZAi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                {/* Silver shine effect on click */}
                <span className={`absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent transform -skew-x-12 ${shineActive ? 'animate-shine' : ''}`}></span>
              </button>
            </div>
          </div>

          <div className="flex justify-center mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-primary overflow-hidden animate-float hover:scale-105 transition-transform duration-500">
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

export default About;
