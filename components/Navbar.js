"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const navLinks = [
    "about",
    "skills",
    "projects",
    "contact",
  ];

  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-[#222]"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <h1 className="text-[#00ff87] text-3xl font-black tracking-[4px]">
         <img 
    src="/harsh.png" 
    alt="HP Logo" 
    className="h-16 md:h-24 w-auto object-contain inline-block" 
  />
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 items-center">

          {navLinks.map((item, index) => (

            <a
              key={index}
              href={`#${item}`}
              className="uppercase text-sm tracking-[3px] hover:text-[#00ff87] relative after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-[#00ff87] hover:after:w-full after:transition-all"
            >
              {item}
            </a>

          ))}

          {/* Resume Dropdown */}
          <div className="relative group">

            <button className="flex items-center gap-2 uppercase text-sm tracking-[3px] hover:text-[#00ff87] transition">

              Resume

              <ChevronDown
                size={16}
                className="group-hover:rotate-180 transition duration-300"
              />

            </button>

            <div className="absolute top-full left-0 mt-4 w-60 bg-[#111] border border-[#222] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden shadow-2xl">

              <a
                href="/resume.pdf"
                target="_blank"
                className="block px-5 py-4 hover:bg-[#1a1a1a] hover:text-[#00ff87] transition"
              >
                👁 View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="block px-5 py-4 hover:bg-[#1a1a1a] hover:text-[#00ff87] transition border-t border-[#222]"
              >
                ⬇ Download Resume
              </a>

            </div>

          </div>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >

        <div className="flex flex-col p-6 gap-6">

          {navLinks.map((item, index) => (

            <a
              key={index}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="uppercase tracking-[3px] text-lg hover:text-[#00ff87]"
            >
              {item}
            </a>

          ))}

          <div className="border-t border-[#222] pt-4">

            <a
              href="/resume.pdf"
              target="_blank"
              onClick={() => setOpen(false)}
              className="block uppercase tracking-[3px] text-lg hover:text-[#00ff87] mb-4"
            >
              👁 View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="block uppercase tracking-[3px] text-lg hover:text-[#00ff87]"
            >
              ⬇ Download Resume
            </a>

          </div>

        </div>

      </div>

    </nav>

  );
}