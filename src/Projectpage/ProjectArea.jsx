import React, { useState } from "react";
import { projects } from "./project";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const ProjectArea = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full 
                max-w-full
                m-0 p-0
                h-auto
               ">

  <div className="max-w-[1300px] mx-auto 
                  flex flex-col lg:flex-row 
                  gap-8
                 ">

        {/* LEFT SIDE */}
        <motion.div
          ref={leftRef}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
          variants={fadeInUp(0)}
          className="w-full lg:w-3/5 
                     bg-white/25 dark:bg-[#161621]/25
                     rounded-2xl 
                     p-6 sm:p-8 lg:p-12
                     border border-[#D1FAE5] 
                     dark:border-[#2E2E3A]
                     shadow-[0_10px_30px_rgba(16,185,129,0.08)] 
                     dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                     flex flex-col justify-between"
        >
          {/* Title */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 
                           font-bold leading-tight
                           text-[#0F172A] dark:text-[#F5F3FF]">
              It's My{" "}
              <span className="text-[#16A34A] dark:text-[#7C3AED]">
                Work
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg 
                          max-w-xl
                          text-[#334155] dark:text-[#D4D4D8]">
              A curated showcase of projects reflecting my development journey.
            </p>
          </div>

          GitHub Button
          <div className="flex justify-center lg:justify-start mt-8">
            <button
              onClick={() =>
                window.open("https://github.com/Professor134", "_blank")
              }
              className="bg-[#16A34A] hover:bg-[#15803D]
                         dark:bg-[#7C3AED] dark:hover:bg-[#6D28D9]
                         text-white font-semibold 
                         px-7 py-3 
                         rounded-full 
                         transition-all duration-300
                         shadow-lg text-base"
            >
              🔗 View GitHub Repository
            </button>
          </div>

          {/* Selected Project Preview */}
          <div className="hidden lg:block mt-8">
            <div className="rounded-xl overflow-hidden 
                            border-2 
                            border-[#16A34A] 
                            dark:border-[#7C3AED]">
              <img
                src={selectedProject.bgImage}
                alt={selectedProject.name}
                className="w-full h-72 object-cover"
              />
            </div>

            <div className="mt-6 space-y-4">
              <h2 className="text-2xl font-semibold 
                             text-[#0F172A] 
                             dark:text-[#F5F3FF]">
                {selectedProject.name}
              </h2>

              <p className="text-base leading-relaxed
                            text-[#334155] 
                            dark:text-[#D4D4D8]">
                {selectedProject.description}
              </p>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3
                           bg-[#16A34A] hover:bg-[#15803D]
                           dark:bg-[#7C3AED] dark:hover:bg-[#6D28D9]
                           text-white font-medium 
                           px-7 py-3 
                           rounded-full 
                           transition-all duration-300
                           shadow-lg"
              >
                Visit Project
              </a>
            </div>
          </div>

          
        </motion.div>

        {/* RIGHT SIDE */}
        <div
          className="
            w-full lg:w-2/5
            lg:max-h-[780px]
            overflow-y-auto
            pr-1 sm:pr-2
            space-y-5 sm:space-y-6
             bg-white/25 dark:bg-[#161621]/25
                     rounded-2xl 
            no-scrollbar
            "
        >
          {projects.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            const isSelected = selectedProject.name === project.name;

            return (
              <motion.div
                key={index}
                ref={ref}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className={`cursor-pointer
                  rounded-2xl
                  overflow-hidden
                  border
                  transition-all duration-300 ease-in-out
                  ${
                    isSelected
                      ? `
                        border-[#16A34A]
                        dark:border-[#7C3AED]
                        scale-[1.02]
                        shadow-[0_10px_25px_rgba(22,163,74,0.18)]
                        dark:shadow-[0_0_25px_rgba(124,58,237,0.35)]
                      `
                      : `
                        border-[#D1FAE5]
                        dark:border-[#2E2E3A]
                        hover:shadow-[0_8px_20px_rgba(22,163,74,0.1)]
                        dark:hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]
                      `
                  }
                  bg-white
                  dark:bg-[#161621]`}
              >
                {/* Image */}
                <div
                  className="w-full
                            h-60 sm:h-64 lg:h-72
                            bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 bg-white/5">
                  <h3
                    className="text-lg sm:text-xl
                              font-semibold
                              leading-snug
                              text-[#0F172A]
                              dark:text-[#F5F3FF]"
                  >
                    {project.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs sm:text-sm
                                    px-3 py-1
                                    rounded-full
                                    font-medium
                                    transition-all
                          ${
                            isSelected
                              ? `
                                bg-[#16A34A]
                                text-white
                                dark:bg-[#7C3AED]
                              `
                              : `
                                bg-[#DCFCE7]
                                text-[#166534]
                                dark:bg-[#7C3AED]/20
                                dark:text-[#C4B5FD]
                              `
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p
                    className="text-sm sm:text-[15px]
                              leading-relaxed
                              text-[#334155]
                              dark:text-[#D4D4D8]
                              break-words"
                  >
                    {project.description}
                  </p>

                  {/* Visit Project Button for all screen sizes */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3
                              bg-[#16A34A] hover:bg-[#15803D]
                              dark:bg-[#7C3AED] dark:hover:bg-[#6D28D9]
                              text-white font-medium 
                              px-7 py-3 
                              rounded-full 
                              transition-all duration-300
                              shadow-lg"
                  >
                    Visit Project
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectArea;