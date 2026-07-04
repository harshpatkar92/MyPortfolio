"use client";

const skillCategories = [
  {
    title: "Frontend",
    subtitle: "UI / Client-side",
    skills: [
      { name: "HTML5", level: "95%" },
      { name: "CSS3", level: "95%" },
      { name: "JavaScript", level: "90%" },
      { name: "React.js", level: "88%" },
      { name: "Next.js", level: "82%" },
      { name: "Tailwind", level: "85%" },
     
    ],
  },

  {
    title: "Backend",
    subtitle: "Server / APIs",
    skills: [
      { name: "Node.js", level: "80%" },
      { name: "Express.js", level: "78%" },
      { name: "REST APIs", level: "85%" },
      { name: "JWT / Auth", level: "75%" },
    ],
  },

  {
    title: "Database",
    subtitle: "Storage / Queries",
    skills: [
      { name: "MongoDB", level: "78%" },
      { name: "MySQL", level: "72%" },
      { name: "PostgreSQL", level: "20%" },
    ],
  },

  {
    title: "Core CS",
    subtitle: "Fundamentals",
    skills: [
      { name: "OOPS", level: "90%" },
      { name: "DSA", level: "72%" },
      { name: "DBMS", level: "78%" },
      { name: "OS", level: "72%" },
      { name: "Networks", level: "70%" },
    ],
  },

  {
    title: "Tools & DevOps",
    subtitle: "Development Environment",
    skills: [
      { name: "VS Code", level: "92%" },
      { name: "DEV C++", level: "90%"},
      { name: "Git", level: "88%" },
      { name: "GitHub", level: "88%" },
      { name: "Docker", level: "55%" },
      { name: "npm", level: "85%" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 md:px-16 bg-[#0d0d0d]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-[#00ff87] uppercase tracking-[4px] text-sm mb-4">
          02 — Skills
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-20">
          TECH STACK
        </h2>

        <div className="space-y-8">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="bg-black border border-[#00ff87]/20 rounded-[24px] p-6 md:p-8 hover:border-[#00ff87]/40 transition-all duration-300"
            >
              <div className="mb-6">

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {category.subtitle}
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-[#00ff87]/50 transition-all duration-300"
                  >
                    <span className="text-gray-200 text-sm font-medium">
                      {skill.name}
                    </span>

                    <span className="text-[#00ff87] text-sm font-bold">
                      {skill.level}
                    </span>
                  </div>

                ))}

              </div>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}