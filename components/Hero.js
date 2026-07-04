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
      className="min-h-screen flex items-center justify-center px-6 md:px-16 relative overflow-hidden bg-[#0a0a0a]"
    >

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#00ff8720 1px, transparent 1px), linear-gradient(90deg,#00ff8720 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="glow"></div>

      <div className="relative z-10 max-w-6xl w-full">

        <p className="text-[#00ff87] uppercase tracking-[4px] mb-6 text-sm">
          B.Tech Computer Science
        </p>

        <h1 className="text-6xl md:text-[140px] font-black leading-none mb-8">
          HARSH
          <br />
          <span className="stroke-text">
            PATKAR
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl leading-10 mb-10">
          Software Engineer crafting intelligent digital experiences with modern technologies and futuristic UI interactions.
        </p>

        <div className="flex gap-5 flex-wrap">

          <a
            href="#projects"
            className="px-8 py-4 bg-[#00ff87] text-black font-bold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-[#333] hover:border-[#00ff87] hover:text-[#00ff87] transition"
          >
            Contact Me
          </a>

        </div>

      </div>

      <div className="absolute bottom-10 left-6 md:left-16 flex items-center gap-4 text-xs uppercase tracking-[4px] text-gray-500">

        <div className="w-[1px] h-16 bg-gradient-to-b from-[#00ff87] to-transparent animate-pulse"></div>

        Scroll

      </div>

    </section>
  );
}