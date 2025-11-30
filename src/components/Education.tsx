import { Calendar } from "lucide-react";

const educationData = [
  {
    period: "2024 - 2028",
    degree: "Bachelor Degree - B.E ( Computer Science And Engineering )",
    institution: "K.S.R College of Engineering, Tiruchengode, Namakkal-637211.",
    score: "9.181 CGPA upto 1st Year.",
  },
  {
    period: "2023 - 2024",
    degree: "Higher Secondary Certificate",
    institution: "G.H.S.S-Errabaiyanahalli, Dharmapuri-636813.",
    score: "76.77 %",
  },
  {
    period: "2021 - 2022",
    degree: "Secondary School Leaving Certificate",
    institution: "G.H.S.S-Errabaiyanahalli, Dharmapuri-636813.",
    score: "81.4 %",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Journey</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Green Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-primary/80 shadow-[0_0_25px_#00ff88] rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative flex gap-4 md:gap-6">
                {/* Neon Glowing Circle */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-white to-primary border-4 border-primary shadow-[0_0_30px_#00ff88]"></div>
                </div>

                {/* Card */}
                <div
                  className="
                    group relative flex-1 bg-card rounded-xl p-4 md:p-6
                    border-2 border-primary/70
                    transition-all duration-500
                    hover:border-primary 
                    hover:shadow-[0_0_30px_#00ff88]
                  "
                >
                  {/* Shine Effect */}
                  <div
                    className="
                      absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 overflow-hidden pointer-events-none
                    "
                  >
                    <div
                      className="
                        absolute inset-0 -translate-x-full
                        group-hover:translate-x-full
                        transition-transform duration-1000
                        bg-gradient-to-r from-transparent via-white/20 to-transparent
                      "
                    ></div>
                  </div>

                  {/* Card Content */}
                  <div className="flex items-center gap-1 md:gap-2 text-primary font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    {edu.period}
                  </div>

                  <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{edu.degree}</h3>

                  <p className="text-muted-foreground text-sm md:text-base">{edu.institution}</p>

                  <p className="font-medium mt-1 md:mt-2 text-sm md:text-base">
                    Score : {edu.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
