import React ,{ useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './Hero/Hero';
import './App.css'
import BgBlur from './components/BgBlur';
import SkillShowcase from './Skill/SkillShowcase';
import Profile from './Profile/Profilee';
import Contact from './components/Contact';
import VideoIntro from './components/VideoIntro';
import Footer from './Hero/Footer';
import ProjectArea from './Projectpage/ProjectArea';
import PcRive from 'pc-rive';

function App() {
  const [showIntro, setShowIntro] = useState(true); // Track whether to show intro video

  const handleVideoEnd = () => {
    setShowIntro(false); // Hide the intro and show main content
  };
  return (
    // <div className="h-full bg-gray-100 text-center">
    //   {showIntro ? (
    //     <VideoIntro onEnd={handleVideoEnd} />
    //   ) : (
      <div className=" h-fit bg-background text-foreground ">
        <BgBlur />
        <Navbar />

          <section id="home" className="h-full justify-center  bg-transparent ">
            <Hero/>
          </section>
          <section id="profile" className="h-full justify-center bg-transparent" >
            <Profile/>
          </section>
          <section id="skills" className="h-fit justify-center bg-transparent ">
            <SkillShowcase/> 
          </section>
          <section id="projects" className="h-fit justify-center bg-transparent ">
            <ProjectArea />
          </section>
          <section id="contact" className="h-fit justify-center bg-transparent ">
            <Contact/>
          </section>
          <section id="footer" className="h-fit justify-center bg-transparent ">
            <Footer/>
          </section>

          
      </div>
    //   )}
      
    // </div>
    
  );
}

export default App;