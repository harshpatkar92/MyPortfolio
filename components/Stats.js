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
      number: 100,
      suffix: "%",
      label: "Passion",
    },
  ];

  return (

    <section className="bg-black py-24 px-6 md:px-16">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-[#111] border border-[#222] p-10 text-center hover:border-[#00ff87]/40 hover:-translate-y-2 transition"
          >

            <h2 className="text-5xl md:text-6xl font-black text-[#00ff87] mb-4">

              <CountUp
                end={item.number}
                duration={3}
              />

              {item.suffix}

            </h2>

            <p className="text-gray-400 uppercase tracking-[2px] text-sm">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}