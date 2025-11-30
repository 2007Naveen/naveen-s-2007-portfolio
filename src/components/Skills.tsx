const skillsData = {
  frontend: [
    { name: 'HTML', image: 'https://2007naveen.github.io/naveen2007portfolio/html.png' },
    { name: 'CSS', image: 'https://2007naveen.github.io/naveen2007portfolio/css.png' },
  ],
  backend: [
    { name: 'C', image: 'https://2007naveen.github.io/naveen2007portfolio/c.png' },
    { name: 'Python', image: 'https://2007naveen.github.io/naveen2007portfolio/python.png' },
    { name: 'Java', image: 'https://2007naveen.github.io/naveen2007portfolio/java.png' },
  ],
  tools: [
    { name: 'Eclipse', image: 'https://2007naveen.github.io/naveen2007portfolio/eclipse.png' },
    { name: 'VS Code', image: 'https://2007naveen.github.io/naveen2007portfolio/vscode.png' },
    { name: 'Google Cloud', image: 'https://2007naveen.github.io/naveen2007portfolio/googlecloud.png' },
    { name: 'MATLAB', image: 'https://2007naveen.github.io/naveen2007portfolio/matlab.png' },
    { name: 'GitHub', image: 'https://2007naveen.github.io/naveen2007portfolio/github.png' },
    { name: 'Autodesk', image: 'https://2007naveen.github.io/naveen2007portfolio/autodesk.png' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
          {/* FRONTEND */}
          <SkillSection title="Frontend Languages Known" items={skillsData.frontend} />

          {/* BACKEND */}
          <SkillSection title="Backend Languages Known" items={skillsData.backend} />

          {/* TOOLS */}
          <SkillSection title="Development Tools Known" items={skillsData.tools} />
        </div>
      </div>
    </section>
  );
};

const SkillSection = ({ title, items }) => (
  <div className="text-center">
    <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-6">{title}</h3>

    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {items.map((skill, index) => (
        <div
          key={index}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
                     rounded-full 
                     flex items-center justify-center
                     bg-gradient-to-br from-green-300 to-white
                     shadow-md hover:shadow-xl
                     transition-transform hover:scale-110"
        >
          <img
            src={skill.image}
            alt={skill.name}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
