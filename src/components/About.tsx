import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import profileImage from '@/assets/profile1.png';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              "Hi !, I'm <span className="font-bold text-primary">Naveenkumar R</span>, and I'm a
              2nd-year Computer Science student passionate about building websites. I am currently
              focused on mastering Full-Stack Development, learning key technologies and Backend
              technologies, Databases connectivities. My focus right now is creating clean code and
              highly performant websites. My goal is to use what I learn about technical's and build
              responsive, fast websites. I am actively looking for projects and opportunities to
              apply my growing skills in a real-world setting."
            </p>

            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href="https://drive.google.com/file/d/1MJvAH8vn0wd3R-XKwDQHjFX-n8IHJZAi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
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

export default About;
