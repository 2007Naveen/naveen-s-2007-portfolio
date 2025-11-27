import { Card, CardContent } from '@/components/ui/card';

const projectsData = [
  {
    title: 'WEB DESIGN',
    description: 'I developed the Portfolio design for MySelf.',
    image: 'https://2007naveen.github.io/naveen2007portfolio/portfolio.JPG',
  },
  {
    title: 'REAL TIME CHATBOT',
    description: 'Now, I moving on the project real time chat application.',
    image: 'https://2007naveen.github.io/naveen2007portfolio/chatbot.JPG',
  },
  {
    title: 'CROP DISEASE ANALYSER',
    description: "Next Project, I'm going to develop a Crop Disease Analyser using AI, ML.",
    image: 'https://2007naveen.github.io/naveen2007portfolio/crop%20disease%20analyser.JPG',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Project's</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-sm font-bold text-primary tracking-wider">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
