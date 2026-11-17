import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero/Hero";
import BgBlur from "./components/BgBlur";
import SkillShowcase from "./Skill/SkillShowcase";
import Profile from "./Profile/Profilee";
import Contact from "./components/Contact";
import VideoIntro from "./components/VideoIntro";
import Footer from "./Hero/Footer";
import ProjectArea from "./Projectpage/ProjectArea";
import PcRive from "pc-rive";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleVideoEnd = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative w-full bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-500">

      {showIntro ? (
        <VideoIntro onEnd={handleVideoEnd} />
      ) : (
        <>
          <BgBlur />

          {/* Navbar */}
          <div className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-black/40 border-b border-[var(--border)] w-full">
            <Navbar />
          </div>

          {/* Main Wrapper */}
          <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            

            {/* Hero */}
            <section id="home" className="pt-16 md:pt-24 pb-8">
              <Hero />
            </section>

            {/* Profile */}
            <section id="profile" className="py-8 md:py-10">
              <Profile />
            </section>

            {/* Skills */}
            <section id="skills" className="py-8 md:py-10">
              <SkillShowcase />
            </section>

            {/* Projects */}
            <section id="projects" className="py-8 md:py-10">
              <ProjectArea />
            </section>

            {/* Contact */}
            <section id="contact" className="py-8 md:py-10">
              <Contact />
            </section>

            {/* Footer */}
            <section id="footer" className="pt-8 pb-4">
              <Footer />
            </section>

          </main>
        </>
      )}
      
    </div>
  );
}

export default App;