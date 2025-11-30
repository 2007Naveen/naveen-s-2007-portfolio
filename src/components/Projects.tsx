import { Card, CardContent } from '@/components/ui/card';

const projectsData = [
  {
    title: 'WEB DESIGN',
    description: 'I developed the Portfolio design for Myself.',
    image: 'https://2007naveen.github.io/naveen2007portfolio/portfolio.JPG',
  },
  {
    title: 'REAL TIME CHATBOT',
    description: 'Now, I am working on a real-time chat application.',
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
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
              </div>

              {/* Card Content */}
              <CardContent className="p-4 sm:p-6 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-primary tracking-wider">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
