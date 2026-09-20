"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
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
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-5 sm:px-6 md:px-16 pt-28 md:pt-24 flex items-center"
    >
      {/* ================= BACKGROUND GRID ================= */}

      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00ff87 1px, transparent 1px), linear-gradient(90deg,#00ff87 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background Glow */}
      <div className="absolute left-[-180px] top-[20%] w-[450px] h-[450px] bg-[#00ff87]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="absolute right-[-100px] top-[20%] w-[500px] h-[500px] bg-[#00ff87]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* ================= MAIN ================= */}

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_0.85fr] items-center gap-10 lg:gap-4">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20">

            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 sm:w-12 h-[1px] bg-[#00ff87]" />

              <p className="text-[#00ff87] uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm">
                Computer Science Engineer
              </p>
            </div>

            {/* Name */}
            <h1 className="text-[16vw] sm:text-7xl md:text-[100px] lg:text-[110px] xl:text-[125px] font-black leading-[0.82] tracking-[-4px] sm:tracking-[-5px] mb-8">
              HARSH
              <br />
              <span className="stroke-text">PATKAR</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl leading-7 sm:leading-8 md:leading-9 mb-9">
              I build modern web applications, AI-powered solutions and
              immersive digital experiences using modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#00ff87] text-black font-bold text-sm sm:text-base hover:scale-105 transition-transform duration-300"
              >
                View Projects →
              </a>

              <a
                href="#contact"
                className="px-6 sm:px-8 py-3.5 sm:py-4 border border-[#333] text-white font-bold text-sm sm:text-base hover:border-[#00ff87] hover:text-[#00ff87] transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Tech Tags */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {["Next.js", "React", "Node.js", "MongoDB"].map((item) => (
                <span
                  key={item}
                  className="px-3.5 sm:px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[1.5px] text-gray-400 border border-[#222] bg-[#0d0d0d]/80 hover:border-[#00ff87]/50 hover:text-[#00ff87] transition"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />

              <span className="text-gray-500 text-xs uppercase tracking-[2px]">
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE AREA
          ====================================================== */}

          <div className="relative min-h-[560px] sm:min-h-[650px] lg:min-h-[700px] flex items-center justify-center">

            {/* Large Glow Behind Image */}
            <div className="absolute w-[380px] h-[500px] bg-[#00ff87]/8 blur-[120px] rounded-full pointer-events-none" />

            {/* =================================================
                ROTATED DECORATIVE FRAME — BACK
            ================================================== */}

            <div
              className="
                absolute
                w-[75%]
                sm:w-[68%]
                lg:w-[72%]
                h-[75%]
                border
                border-[#00ff87]/25
                rotate-[-7deg]
                translate-x-4
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                w-[75%]
                sm:w-[68%]
                lg:w-[72%]
                h-[75%]
                border
                border-[#00ff87]/10
                rotate-[5deg]
                translate-x-1
                pointer-events-none
              "
            />

            {/* =================================================
                MAIN PREMIUM IMAGE FRAME
            ================================================== */}

            <div
              className="
                relative
                z-10
                w-[78%]
                sm:w-[65%]
                lg:w-[72%]
                max-w-[480px]
                aspect-[4/5]
                overflow-hidden
                border
                border-[#00ff87]/35
                bg-[#111]
                shadow-[0_0_60px_rgba(0,255,135,0.08)]
              "
            >

              {/* Image */}
              <img
                src="/harsh-hero.png"
                alt="Harsh Patkar"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-center
                  scale-[1.02]
                  transition-transform
                  duration-700
                  hover:scale-[1.05]
                "
              />

              {/* Dark Gradient Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#050505]/85
                  via-transparent
                  to-[#050505]/10
                  pointer-events-none
                "
              />

              {/* Green Cinematic Tint */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#00ff87]/[0.04]
                  via-transparent
                  to-[#00ff87]/[0.08]
                  mix-blend-screen
                  pointer-events-none
                "
              />

              {/* Top Label */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
                <span className="text-[9px] uppercase tracking-[3px] text-white/60">
                  Portfolio / 2026
                </span>

                <span className="flex items-center gap-2 text-[9px] uppercase tracking-[2px] text-[#00ff87]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse" />
                  Online
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <div className="h-px w-full bg-white/10 mb-4" />

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white text-sm font-bold tracking-wide">
                      HARSH PATKAR
                    </p>

                    <p className="text-gray-400 text-[9px] uppercase tracking-[2px] mt-1">
                      Computer Science Engineer
                    </p>
                  </div>

                  <span className="text-[#00ff87] text-xs font-mono">
                    01
                  </span>
                </div>
              </div>

              {/* Corner Accents */}

              <span className="absolute top-0 left-0 w-10 h-px bg-[#00ff87]" />
              <span className="absolute top-0 left-0 w-px h-10 bg-[#00ff87]" />

              <span className="absolute top-0 right-0 w-10 h-px bg-[#00ff87]" />
              <span className="absolute top-0 right-0 w-px h-10 bg-[#00ff87]" />

              <span className="absolute bottom-0 left-0 w-10 h-px bg-[#00ff87]" />
              <span className="absolute bottom-0 left-0 w-px h-10 bg-[#00ff87]" />

              <span className="absolute bottom-0 right-0 w-10 h-px bg-[#00ff87]" />
              <span className="absolute bottom-0 right-0 w-px h-10 bg-[#00ff87]" />
            </div>

            {/* =================================================
                FLOATING STATUS DOT
            ================================================== */}

            <div className="absolute z-30 bottom-[22%] right-[8%] sm:right-[12%] lg:right-[5%]">
              <div className="relative w-11 h-11 rounded-full border border-[#00ff87]/60 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-[#00ff87] shadow-[0_0_15px_#00ff87] animate-pulse" />
              </div>
            </div>

            {/* =================================================
                CODE DECORATION
            ================================================== */}

            <div className="hidden xl:block absolute right-[-20px] top-[24%] z-30 font-mono text-[9px] leading-5">
              <p className="text-[#00ff87]/60">
                const developer = {"{"}
              </p>

              <p className="pl-4 text-gray-600">
                name:{" "}
                <span className="text-gray-500">
                  &quot;Harsh&quot;
                </span>
              </p>

              <p className="pl-4 text-gray-600">
                role:{" "}
                <span className="text-gray-500">
                  &quot;Engineer&quot;
                </span>
              </p>

              <p className="pl-4 text-gray-600">
                passion:{" "}
                <span className="text-gray-500">
                  &quot;Building&quot;
                </span>
              </p>

              <p className="text-[#00ff87]/60">
                {"}"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL ================= */}

      <div className="absolute bottom-8 left-5 sm:left-6 md:left-16 flex items-center gap-4 text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] text-gray-500">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-[#00ff87] to-transparent animate-pulse" />
        Scroll
      </div>
    </section>
  );
}
