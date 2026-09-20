"use client";

const skillCategories = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "UI / Client-side Development",
    description:
      "Building responsive and interactive interfaces with modern frontend technologies.",
    skills: [
      { name: "HTML5", level: "95%" },
      { name: "CSS3", level: "95%" },
      { name: "JavaScript", level: "90%" },
      { name: "React.js", level: "88%" },
      { name: "Next.js", level: "82%" },
      { name: "Tailwind CSS", level: "85%" },
    ],
  },
  {
    number: "02",
    title: "Backend",
    subtitle: "Server / APIs",
    description:
      "Developing backend services, APIs and authentication systems for web applications.",
    skills: [
      { name: "Node.js", level: "80%" },
      { name: "Express.js", level: "78%" },
      { name: "REST APIs", level: "85%" },
      { name: "JWT / Auth", level: "75%" },
    ],
  },
  {
    number: "03",
    title: "Database",
    subtitle: "Storage / Queries",
    description:
      "Working with databases, data models and queries for application development.",
    skills: [
      { name: "MongoDB", level: "78%" },
      { name: "MySQL", level: "72%" },
      { name: "PostgreSQL", level: "20%" },
    ],
  },
  {
    number: "04",
    title: "Core CS",
    subtitle: "Computer Science Fundamentals",
    description:
      "Strong foundation in programming concepts and core computer science subjects.",
    skills: [
      { name: "OOPS", level: "90%" },
      { name: "DSA", level: "72%" },
      { name: "DBMS", level: "78%" },
      { name: "Operating Systems", level: "72%" },
      { name: "Computer Networks", level: "70%" },
    ],
  },
  {
    number: "05",
    title: "Tools & DevOps",
    subtitle: "Development Environment",
    description:
      "Using modern development tools for coding, version control and deployment.",
    skills: [
      { name: "VS Code", level: "92%" },
      { name: "Dev C++", level: "90%" },
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
      className="relative py-24 sm:py-28 px-5 sm:px-6 md:px-16 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-[-200px] w-[400px] h-[400px] bg-[#00ff87]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[1px] bg-[#00ff87]" />

            <p className="text-[#00ff87] uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm">
              02 — Skills
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
            TECH <span className="text-[#00ff87]">STACK</span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl text-sm sm:text-base leading-7">
            Technologies and tools I use to design, develop and deploy
            modern digital experiences.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-5 sm:space-y-7">
          {skillCategories.map((category) => (
            <div
              key={category.number}
              className="
                group
                relative
                bg-black
                border border-[#1f1f1f]
                rounded-2xl sm:rounded-[24px]
                p-5 sm:p-7 md:p-9
                overflow-hidden
                transition-all duration-300
                hover:border-[#00ff87]/40
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  w-48
                  h-48
                  rounded-full
                  bg-[#00ff87]/5
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "
              />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-7">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="text-[#00ff87] text-xs sm:text-sm font-mono pt-1">
                      {category.number}
                    </span>

                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        {category.title}
                      </h3>

                      <p className="text-[#00ff87]/70 text-xs sm:text-sm mt-1">
                        {category.subtitle}
                      </p>

                      <p className="text-gray-500 text-xs sm:text-sm mt-3 max-w-xl leading-6">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="hidden md:block text-gray-700 text-5xl font-black select-none">
                    {category.number}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        gap-2
                        px-3.5
                        sm:px-4
                        py-2.5
                        rounded-xl
                        bg-[#111]
                        border border-[#242424]
                        hover:border-[#00ff87]/50
                        hover:bg-[#00ff87]/5
                        transition-all duration-300
                      "
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87]" />

                      <span className="text-gray-200 text-xs sm:text-sm font-medium">
                        {skill.name}
                      </span>

                      <span className="text-[#00ff87] text-[10px] sm:text-xs font-bold">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-14 sm:mt-16 border-t border-[#1f1f1f] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Always exploring new technologies and better ways to build.
          </p>

          <div className="flex items-center gap-2 text-[#00ff87] text-xs uppercase tracking-[2px]">
            <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
            Always Learning
          </div>
        </div>
      </div>
    </section>
  );
}
