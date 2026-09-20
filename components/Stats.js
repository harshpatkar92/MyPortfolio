"use client";

import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    {
      number: 15,
      suffix: "+",
      label: "Projects Built",
    },
    {
      number: 3,
      suffix: "+",
      label: "Years Coding",
    },
    {
      number: 20,
      suffix: "+",
      label: "Technologies",
    },
    {
      number: 10,
      suffix: "+",
      label: "GitHub Repositories",
    },
  ];

  return (
    <section className="bg-black py-20 sm:py-24 px-5 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-[#00ff87] text-xs sm:text-sm tracking-[4px] uppercase mb-3">
            Developer Snapshot
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            BY THE NUMBERS
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                bg-[#111]
                border border-[#222]
                p-6 sm:p-8 md:p-10
                text-center
                transition-all
                duration-300
                hover:border-[#00ff87]/50
                hover:-translate-y-2
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-32
                  h-32
                  bg-[#00ff87]/5
                  blur-3xl
                  rounded-full
                  group-hover:bg-[#00ff87]/10
                  transition
                "
              />

              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#00ff87] mb-3">
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h2>

                <p className="text-gray-400 uppercase tracking-[1.5px] sm:tracking-[2px] text-[10px] sm:text-xs md:text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
