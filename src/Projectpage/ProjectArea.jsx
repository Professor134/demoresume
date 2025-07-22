import React from 'react';
import { projects } from './project';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PcRive from '@/components/PcRive';

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  }
});

const ProjectArea = () => {
  // InView for Left Side animation
  const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.7 });

  return (
    <div className="h-screen w-full py-1 top-1 bg-transpant flex relative pb-2 ">
      {/* Left Side */}
      <motion.div
        ref={leftRef}
        initial="hidden"
        animate={leftInView ? 'visible' : 'hidden'}
        variants={fadeInUp(0)}
        className="w-3/5 h-full bg-white dark:bg-gray-600 backdrop-blur-md rounded-l-2xl p-6 flex flex-col justify-between"
      >
        {/* Title */}
        <motion.div className="text-5xl font-bold mb-4" variants={fadeInUp(0)}>
          <h1 className="inline text-black/30 dark:text-white/50">It's My</h1>{' '}
          <h1 className="inline text-green-500 dark:text-violetNeon">Work</h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div className=" text-3xl mb-4" variants={fadeInUp(0.5)}>
          <h2 className="inline text-black dark:text-white">A showcase of my recent projects</h2>
        </motion.div>

        {/* Info */}
        <motion.div
          className="text-gray-800 dark:text-gray-100 text-base flex-1 overflow-y-auto mb-4 pr-2"
          variants={fadeInUp(1)}
        >
          <p>
            Welcome to my project collection. Below you'll find several tools,
            applications, and platforms I've crafted with care.
            From Frontend to BackEnd systems, each project reflects my growth as a developer.
          </p>
        </motion.div>

        {/* Astro and Buttons */}
        <motion.div className="flex flex-col" variants={fadeInUp(1.5)}>
            <PcRive
            src= "astro3.riv"
            stateMachines= "State Machine 1"
            autoplay = {true}
            className="absolute top-80 sm:top-48 h-24 w-24 sm:h-44 sm:w-44"
         />

          <div className="grid grid-cols-3 gap-2 sm:gap-x-10 gap-y-6 w-full max-w-md mx-auto p-2">
            {[,].map((label, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 0.9 }}
                className="w-full aspect-square bg-green-500 dark:bg-violet-500 rounded-xl text-white font-semibold hover:bg-vio transition flex items-center justify-center text-[clamp(0.75rem,3vw,1.1rem)] px-2 text-center"
              >
                {label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Vertical Line */}
      <div className="min-w-0.5 h-[90%] bg-green-600 dark:bg-violetNeon absolute left-[60%] top-[5%] z-10" />

      {/* Right Side */}
      <div className="w-2/5 h-full bg-gray-600 dark:bg-white/80 backdrop-blur-md rounded-r-2xl p-6 overflow-y-auto space-y-4 no-scrollbar">
        {projects.map((project, index) => {
          const [ref, inView] = useInView({
            threshold: [0.4, 0.7], // Controls entry/exit
          });

          const isVisibleEnough = inView;

          return (
            <motion.div
              key={index}
              ref={ref}
              className="w-full min-h-[18rem] sm:min-h-[22rem] md:min-h-[26rem] lg:min-h-[30rem] rounded-xl shadow-lg text-white relative overflow-hidden border-l-4 border-green-500 dark:border-violetNeon"
              initial={{ opacity: 0, y: -30 }}
              animate={
                isVisibleEnough
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -30 }
              }
              transition={{ duration: 0.6 }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-xl z-0"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              ></div>

              <div className="absolute bottom-0 right-0 w-full h-fit z-10 flex flex-col justify-end items-end text-right p-4 bg-gradient-to-br from-green-50 via-transparent to-white/60 backdrop-blur-sm space-y-2">
                <h3 className="text-[clamp(0.9rem,2vw,1.2rem)] font-bold">{project.name}</h3>
                <div className="flex flex-wrap justify-end gap-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-green-500/80 dark:bg-violetNeon/60 text-white px-2 py-0.5 rounded text-[clamp(0.6rem,1.3vw,0.8rem)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[clamp(0.65rem,1.2vw,0.9rem)] text-black/80">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 dark:bg-violet-600 hover:bg-emerald-600 dark:hover:bg-violet-700 text-white font-semibold py-1 px-3 text-[clamp(0.65rem,1.2vw,0.9rem)] rounded transition"
                >
                  Visit My Site
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectArea;
