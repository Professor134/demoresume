// src/components/ProjectSlider.jsx
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import {projects} from "./project"


const ProjectSlider = () => {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Split into groups of 4 for 2x2 grid layout per slide
  const slides = [];
  for (let i = 0; i < projects.length; i += 4) {
    slides.push(projects.slice(i, i + 4));
  }

  return (
    <div className="relative w-full overflow-hidden py-10 pt-20">
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-none snap-start px-4"
            style={{ minWidth: "100%" }}
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.map((project, i) => (
                <ProjectCard
                  key={i}
                  logo={project.logo}
                  description={project.description}
                  links={project.links}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
