import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    period: '2024 - 2028',
    degree: 'Bachelor Degree - B.E ( Computer Science And Engineering )',
    institution: 'K.S.R College of Engineering, Tiruchengode, Namakkal-637211.',
    score: '9.181 CGPA upto 1st Year.',
  },
  {
    period: '2023 - 2024',
    degree: 'Higher Secondary Certificate',
    institution: 'G.H.S.S-Errabaiyanahalli, Dharmapuri-636813.',
    score: '76.77 %.',
  },
  {
    period: '2021 - 2022',
    degree: 'Secondary School Leaving Certificate',
    institution: 'G.H.S.S-Errabaiyanahalli, Dharmapuri-636813.',
    score: '81.4 %.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-primary font-semibold">{edu.period}</p>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="font-medium">Score : {edu.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
