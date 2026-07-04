import Reveal from "./Reveal";

export default function Resume() {

  return (

    <section
      id="resume"
      className="bg-[#111111] py-28 px-6 md:px-16"
    >

      <Reveal>

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#00ff87] uppercase tracking-[4px] text-sm mb-4">
            05 — Resume
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-10">
            MY RESUME
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-12">
            Download my resume to know more about my education,
            skills and experience.
          </p>

          <a
            href="/resume.pdf"
            download
            className="magnetic-btn inline-block bg-[#00ff87] text-black px-10 py-5 border-2 border-[#00ff87] hover:bg-transparent hover:text-[#00ff87] transition"
          >
            Download Resume
          </a>

        </div>

      </Reveal>

    </section>
  );
}