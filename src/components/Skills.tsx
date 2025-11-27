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
    {
      name: 'Google Cloud',
      image: 'https://2007naveen.github.io/naveen2007portfolio/googlecloud.png',
    },
    { name: 'MATLAB', image: 'https://2007naveen.github.io/naveen2007portfolio/matlab.png' },
    { name: 'GitHub', image: 'https://2007naveen.github.io/naveen2007portfolio/github.png' },
    { name: 'Autodesk', image: 'https://2007naveen.github.io/naveen2007portfolio/autodesk.png' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Frontend Languages Known</h3>
            <div className="flex flex-wrap gap-8">
              {skillsData.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="w-24 h-24 bg-card rounded-lg p-4 flex items-center justify-center hover:border-2 hover:border-primary transition-all hover:scale-110"
                >
                  <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Backend Languages Known</h3>
            <div className="flex flex-wrap gap-8">
              {skillsData.backend.map((skill, index) => (
                <div
                  key={index}
                  className="w-24 h-24 bg-card rounded-lg p-4 flex items-center justify-center hover:border-2 hover:border-primary transition-all hover:scale-110"
                >
                  <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Development Tools Known</h3>
            <div className="flex flex-wrap gap-8">
              {skillsData.tools.map((skill, index) => (
                <div
                  key={index}
                  className="w-24 h-24 bg-card rounded-lg p-4 flex items-center justify-center hover:border-2 hover:border-primary transition-all hover:scale-110"
                >
                  <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
