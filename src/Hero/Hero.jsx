import React from "react";
import { useInView } from "react-intersection-observer";
import SolidTriangle from "./SolidTriangle";
import ImageTriangle from "./ImageTriangle";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";


const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7, 
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-screen rounded-xl bg-transparent overflow-hidden"
    >
      <div className="w-[30%] h-screen float-left bg-gray-800 dark:bg-white rounded-l-xl">
        
      </div>

      <motion.div
        className="w-[70%] h-screen float-right bg-white dark:bg-gray-800 rounded-r-xl"
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <p className="text-6xl font-bold dark:text-white/60 text-black/40">Hi, I&apos;m</p>
            <p className="text-6xl font-bold dark:text-violet-600 text-emerald-500">Parth Chavan</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4 }}
          >
            <p className="text-xl font-medium text-black/70 dark:text-white/70">
              Full Stack Developer | Tech Explorer
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl text-base text-gray-600 dark:text-gray-300 space-y-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.6 }}
          >
            <h1>
              <Typewriter text="Passionate about building interactive web apps and backend systems." />
            </h1>
            <h1>
              <Typewriter text="Always exploring new technologies and turning ideas into scalable software." />
            </h1>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.8 }}
          >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 text-white bg-emerald-400 dark:bg-violet-600 hover:bg-emerald-600 dark:hover:bg-violet-700 rounded-xl transition duration-300"
                onClick={() => {
                  const section = document.getElementById("projects");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-300"
              onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Triangles */}
      <SolidTriangle isVisible={inView} />
      <ImageTriangle isVisible={inView} />
    </div>
  );
};

export default Hero;
