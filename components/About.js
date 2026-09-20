import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111111] py-28 px-6 md:px-16 relative overflow-hidden"
    >

      <div className="glow top-0 right-0"></div>

      <Reveal>

        <div className="max-w-7xl mx-auto">

          <p className="text-[#00ff87] uppercase tracking-[4px] text-sm mb-4">
            01 — About
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-20">
            WHO I AM
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-gray-400 leading-8 mb-6 text-lg">
                Hey! I'm{" "}
                <span className="text-white font-semibold">
                  Harsh Patkar
                </span>
                , a Computer Science Engineer who loves building modern web applications, AI-driven solutions, and immersive digital experiences.
              </p>

              <p className="text-gray-400 leading-8 mb-6 text-lg">
               I turn ideas into functional, user-focused products while constantly exploring new technologies and pushing my skills further.
              </p>

              <p className="text-gray-400 leading-8 mb-10 text-lg">
                Always learning, building and exploring new technologies.
              </p>

              <a
                href="#contact"
                className="bg-[#00ff87] text-black px-8 py-4 border-2 border-[#00ff87] hover:bg-transparent hover:text-[#00ff87] transition"
              >
                Let's Connect
              </a>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-[#161616] border border-[#222] p-8 hover:-translate-y-2 transition duration-300 hover:border-[#00ff87]/40">

                <h3 className="text-[#00ff87] text-5xl font-black mb-3">
                  3+
                </h3>

                <p className="text-gray-400 uppercase tracking-[2px] text-sm">
                  Years Coding
                </p>

              </div>

              <div className="bg-[#161616] border border-[#222] p-8 hover:-translate-y-2 transition duration-300 hover:border-[#00ff87]/40">

                <h3 className="text-[#00ff87] text-5xl font-black mb-3">
                  10+
                </h3>

                <p className="text-gray-400 uppercase tracking-[2px] text-sm">
                  Projects
                </p>

              </div>

              <div className="bg-[#161616] border border-[#222] p-8 hover:-translate-y-2 transition duration-300 hover:border-[#00ff87]/40">

                <h3 className="text-[#00ff87] text-5xl font-black mb-3">
                  CSE
                </h3>

                <p className="text-gray-400 uppercase tracking-[2px] text-sm">
                  Branch
                </p>

              </div>

              <div className="bg-[#161616] border border-[#222] p-8 hover:-translate-y-2 transition duration-300 hover:border-[#00ff87]/40">

                <h3 className="text-[#00ff87] text-5xl font-black mb-3">
                  GGITS
                </h3>

                <p className="text-gray-400 uppercase tracking-[2px] text-sm">
                  Jabalpur
                </p>

              </div>

            </div>

          </div>

        </div>

      </Reveal>

    </section>
  );
}
