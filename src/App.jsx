import React ,{ useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './Hero/Hero';
import './App.css'
import ProjectSlider from './Project/ProjectSlider';
import BgBlur from './components/BgBlur';
import SkillShowcase from './Skill/SkillShowcase';
import Profile from './Profile/Profilee';
import Contact from './components/Contact';
import VideoIntro from './components/VideoIntro';
import Footer from './Hero/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true); // Track whether to show intro video

  const handleVideoEnd = () => {
    setShowIntro(false); // Hide the intro and show main content
  };
  return (
    <div className="h-fit bg-gray-100 text-center">
      {showIntro ? (
        <VideoIntro onEnd={handleVideoEnd} />
      ) : (
      <div className="relative  bg-background text-foreground h-fit">
        <BgBlur />
        <Navbar />
        <div className="relative z-10">
          <section id="home" className="h-fit justify-center  bg-transparent ">
            <Hero/>
          </section>
          <section id="profile" className="h-fit justify-center bg-transparent" >
            <Profile/>
          </section>
          <section id="skills" className="h-fit justify-center bg-transparent ">
            <SkillShowcase/> 
          </section>
          <section id="projects" className="h-fit justify-center bg-transparent ">
          <ProjectSlider />
          </section>
          <section id="contact" className="h-fit justify-center bg-transparent ">
            <Contact/>
          </section>
          <section id="footer" className="h-fit justify-center bg-transparent ">
            <Footer/>
          </section>
        </div>
      </div>
      )}
    </div>
    
  );
}

export default App;