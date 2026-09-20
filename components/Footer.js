export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-[#222] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-[-150px] bottom-[-150px] w-[350px] h-[350px] bg-[#00ff87]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-16">
        {/* Main Footer */}
        <div className="py-16 sm:py-20 grid md:grid-cols-[1.4fr_0.7fr_0.8fr] gap-12 md:gap-16">
          
          {/* Brand */}
          <div>
            <img
              src="/harsh.png"
              alt="Harsh Patkar"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain mb-6"
            />

            <p className="text-gray-500 text-sm sm:text-base leading-7 max-w-md">
              Computer Science Engineer passionate about building modern web
              applications, AI-powered solutions and meaningful digital
              experiences.
            </p>

            <div className="flex items-center gap-3 mt-7">
              <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />

              <span className="text-gray-500 text-xs uppercase tracking-[2px]">
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#00ff87] text-xs uppercase tracking-[3px] mb-6">
              Navigate
            </p>

            <div className="flex flex-col items-start gap-3">
              <a
                href="#hero"
                className="text-gray-400 text-sm hover:text-[#00ff87] hover:translate-x-1 transition-all"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-400 text-sm hover:text-[#00ff87] hover:translate-x-1 transition-all"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-gray-400 text-sm hover:text-[#00ff87] hover:translate-x-1 transition-all"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-gray-400 text-sm hover:text-[#00ff87] hover:translate-x-1 transition-all"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-gray-400 text-sm hover:text-[#00ff87] hover:translate-x-1 transition-all"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[#00ff87] text-xs uppercase tracking-[3px] mb-6">
              Connect
            </p>

            <div className="flex flex-col items-start gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-[#00ff87] hover:translate-x-1 transition-all"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-[#00ff87] hover:translate-x-1 transition-all"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:harshupatkar12@gmail.com"
                className="text-gray-400 text-sm hover:text-[#00ff87] hover:translate-x-1 transition-all"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        {/* Large Closing Text */}
        <div className="border-t border-[#1f1f1f] py-10 sm:py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-gray-600 text-[10px] sm:text-xs uppercase tracking-[3px] mb-3">
                Thanks for visiting
              </p>

              <h2 className="text-4xl sm:text-3xl md:text-5xl font-black leading-none tracking-tight">
                LET&apos;S BUILD
                <br />
                <span className="text-[#00ff87]">SOMETHING GREAT.</span>
              </h2>
            </div>

            {/* Back To Top */}
            <a
              href="#hero"
              className="group flex items-center gap-3 text-gray-500 text-xs uppercase tracking-[2px] hover:text-[#00ff87] transition-all"
            >
              Back to top

              <span className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center group-hover:border-[#00ff87] group-hover:bg-[#00ff87] group-hover:text-black transition-all">
                ↑
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1f1f1f] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-[10px] sm:text-xs uppercase tracking-[1.5px] text-center sm:text-left">
            © {currentYear} Harsh Patkar — All Rights Reserved
          </p>

          <p className="text-gray-700 text-[10px] sm:text-xs uppercase tracking-[1.5px]">
            Built with Next.js • React • Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
