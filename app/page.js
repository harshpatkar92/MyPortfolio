import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {

  return (

    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">

      <Loader />
     <Cursor />

      <Navbar />

      <Hero />

      <About />

      <Stats />

      <Skills />

      <Projects />

      <Resume />

      <Contact />

      <Footer />

    </main>

  );
}