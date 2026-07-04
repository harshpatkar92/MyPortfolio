"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "MediConnect",
    description:
      "AI-powered healthcare platform with authentication, appointment scheduling, AI symptom checker, chatbot, BMI calculator and premium responsive healthcare dashboard.",
    tech: ["Next.js", "MongoDB", "JWT", "Tailwind"],
    github: "#",
    live: "https://mediconnect-xp3k.onrender.com/",
    images: [
      "/medi1.png", //desktop
      
      "/medi3.png", //tablet
      "/medi2.png", //mobile
      "/medi4.png", //tablet
    ],
  },
  {
    title: "Wanderlust",
    description:
      "Modern food delivery and dining platform with responsive design, authentication, real-time tracking, and dynamic restaurant listings.",
    tech: ["EJS", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "https://wanderlust-majorproject-6-6mkp.onrender.com/listings",
    images: [
      "/wand1.png",
      "/wand2.png",
      "/wand3.png",
      "/wand4.png",
    ],
  },
  {
    title: "Weather - Now",
    description:
      "Machine learning based AQI prediction system using RandomForestRegressor with Flask integration, interactive analytics, and live monitoring dashboards.",
    tech: ["Python", "Flask", "Machine Learning", "Tailwind"],
    github: "#",
    live: "https://weather-now-jade-ten.vercel.app/",
    images: [
      "/wn1.png",
      "/wn2.png",
      "/wn3.png",
      "/wn4.png",
    ],
  },
   {
    title: "ASU - PHOTOGRAPHY",
    description:
      "this is the photography portfolio which i developed with my friend to my photographer Friend .",
    tech: ["Next.js", "React", "javascript", "Tailwind"],
    github: "#",
    live: "https://asuphotography.vercel.app/",
    images: [
      "/asu1.png",
      "/asu2.png",
      "/asu3.png",
      "/asu4.png",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-16 px-4 md:px-10 bg-[#0a0c0b] overflow-hidden text-white"
    >
      {/* Background Subtle Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#00ff87]/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-[#00ff87]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 relative select-none">
          <h2 className="text-[55px] sm:text-[80px] md:text-[100px] font-black text-[#131615] absolute -top-8 md:-top-14 left-0 pointer-events-none tracking-tighter leading-none">
            MY WORK
          </h2>
          <p className="text-[#00ff87] uppercase tracking-[6px] text-xs font-bold relative z-10 pl-1 pt-1">
            03 — Projects
          </p>
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-[28px] border border-white/10 bg-[#0d0f0e] shadow-[0_15px_50px_rgba(0,0,0,0.7)] cursor-pointer transition-all duration-500 hover:border-[#00ff87]/20"
            >
              {/* SHOWCASE WRAPPER (Squeezed heights for compact premium format) */}
              <div className="relative h-[260px] sm:h-[340px] md:h-[380px] w-full overflow-hidden rounded-[28px] flex justify-center items-center">
                
                {/* Accent Active Glow */}
                <div className="absolute w-[35%] h-[35%] bg-[#00ff87]/5 blur-[80px] rounded-full top-[25%] left-1/2 -translate-x-1/2 pointer-events-none" />

                {/* Card Project Number */}
                <span className="absolute top-4 right-6 text-5xl md:text-6xl font-black text-[#161a18] transition-colors duration-500 group-hover:text-[#00ff87]/5 select-none">
                  0{index + 1}
                </span>

                {/* --- COMPACT MOCKUP POSITIONING ENGINE --- */}
                <div className="relative w-full max-w-[700px] aspect-[16/10] h-full flex justify-center items-center scale-[0.85] sm:scale-[0.95] md:scale-100 transition-transform duration-700 group-hover:scale-[1.01]">
                  
                  {/* 1. MAIN DESKTOP INTERFACE */}
                  <div className="absolute w-[58%] aspect-[16/10] z-10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] border-[4px] border-[#222926] rounded-t-xl overflow-hidden bg-[#121413]">
                    <img
                      src={project.images[0]}
                      alt="Main Interface"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.target.src = "https://placehold.co/700x440/121413/00ff87?text=Desktop"; }}
                    />
                  </div>
                  {/* Laptop Base Plate */}
                  <div className="absolute bottom-[13.5%] w-[65%] h-[5px] bg-[#2d3632] rounded-b-md z-10 shadow-md border-t border-white/5"></div>

                  {/* 2. LEFT TABLET UI (Overlaps Laptop) */}
                  <div className="absolute left-[8%] bottom-[16%] w-[21%] aspect-[3/4] z-30 shadow-[5px_10px_30px_rgba(0,0,0,0.7)] border-2 border-[#222926] rounded-lg overflow-hidden bg-[#121413] -rotate-2 group-hover:rotate-0 transition-all duration-500">
                    <img
                      src={project.images[1]}
                      alt="Tablet Left"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.target.src = "https://placehold.co/250x330/121413/00ff87?text=Tablet+L"; }}
                    />
                  </div>

                  {/* 3. RIGHT TABLET BACKDROP */}
                  <div className="absolute right-[8%] bottom-[18%] w-[19%] aspect-[3/4] z-20 shadow-[0_10px_25px_rgba(0,0,0,0.6)] border-2 border-[#222926] rounded-lg overflow-hidden bg-[#121413] rotate-2 group-hover:rotate-0 transition-all duration-500 opacity-80 group-hover:opacity-100">
                    <img
                      src={project.images[3]}
                      alt="Tablet Right"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.target.src = "https://placehold.co/250x330/121413/00ff87?text=Tablet+R"; }}
                    />
                  </div>

                  {/* 4. FRONT MOBILE MOCKUP (Overlaps Laptop & Right Tablet) */}
                  <div className="absolute right-[24%] bottom-[11%] w-[10%] aspect-[9/19] z-40 shadow-[4px_10px_25px_rgba(0,0,0,0.8)] border-[2px] border-[#2d3632] rounded-[12px] overflow-hidden bg-[#0c0e0d]">
                    <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[35%] h-[2.5px] bg-[#2d3632] rounded-full z-50"></div>
                    <img
                      src={project.images[2]}
                      alt="Mobile UI"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.target.src = "https://placehold.co/120x250/0c0e0d/00ff87?text=Phone"; }}
                    />
                  </div>

                </div>
              </div>

              {/* OVERLAPPING GLASSMORPHIC DETAIL CARD (Sleeker vertical padding and margins) */}
              <div className="relative z-50 mx-4 md:mx-8 mb-6 -mt-16 md:-mt-20 rounded-[20px] border border-white/10 bg-[#121514]/90 backdrop-blur-xl p-5 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-[#00ff87]/30">
                
                <div className="flex justify-between items-start mb-0.5">
                  <p className="text-[#00ff87] uppercase tracking-[4px] text-[10px] font-black">
                    Featured Project
                  </p>
                  <span className="text-2xl font-black text-white/5 select-none">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed mb-5 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center border-t border-white/5 pt-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 border border-[#222a26] rounded-full text-[10px] font-semibold text-[#00ff87] bg-[#0c0e0d]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 w-full sm:w-auto text-[10px] font-bold">
                    <a
                      href={project.live}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#00ff87] transition-all"
                    >
                      <span>👁 View Live Site</span>
                    </a>

                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#00ff87] transition-all"
                    >
                      <span>🐙 GitHub Code</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}