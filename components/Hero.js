"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-5 sm:px-6 md:px-16 relative overflow-hidden bg-[#0a0a0a] pt-24 md:pt-20"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00ff8720 1px, transparent 1px), linear-gradient(90deg,#00ff8720 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Glow */}
      <div className="glow pointer-events-none" />

      {/* Extra Ambient Glow */}
      <div className="absolute right-[-180px] top-[20%] w-[400px] h-[400px] bg-[#00ff87]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full">
        {/* Top Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 sm:w-12 h-[1px] bg-[#00ff87]" />

          <p className="text-[#00ff87] uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm">
            Computer Science Engineer
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-[15vw] sm:text-7xl md:text-[120px] lg:text-[140px] font-black leading-[0.85] tracking-[-4px] sm:tracking-[-5px] mb-8">
          HARSH
          <br />
          <span className="stroke-text">PATKAR</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg md:text-2xl max-w-3xl leading-7 sm:leading-8 md:leading-10 mb-10">
          I build modern web applications, AI-powered solutions and
          immersive digital experiences using modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-5 flex-wrap">
          <a
            href="#projects"
            className="
              px-6 sm:px-8
              py-3.5 sm:py-4
              bg-[#00ff87]
              text-black
              font-bold
              text-sm sm:text-base
              hover:scale-105
              transition-transform
              duration-300
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              px-6 sm:px-8
              py-3.5 sm:py-4
              border border-[#333]
              text-white
              font-bold
              text-sm sm:text-base
              hover:border-[#00ff87]
              hover:text-[#00ff87]
              transition-all
              duration-300
            "
          >
            Contact Me
          </a>
        </div>

        {/* Developer Tags */}
        <div className="mt-12 sm:mt-14 flex flex-wrap gap-2.5 sm:gap-3">
          {[
            "Full Stack Development",
            "AI / ML",
            "Next.js",
            "MongoDB",
          ].map((item) => (
            <span
              key={item}
              className="
                px-3.5
                sm:px-4
                py-2
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[1.5px]
                text-gray-400
                border
                border-[#222]
                bg-[#0d0d0d]
                hover:border-[#00ff87]/40
                hover:text-[#00ff87]
                transition
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />

            <span className="text-gray-500 text-xs uppercase tracking-[2px]">
              Open to Opportunities
            </span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-[#333]" />

          <span className="text-gray-600 text-xs uppercase tracking-[2px]">
            Based in India
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-5 sm:left-6 md:left-16 flex items-center gap-4 text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] text-gray-500">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-[#00ff87] to-transparent animate-pulse" />
        Scroll
      </div>
    </section>
  );
}
