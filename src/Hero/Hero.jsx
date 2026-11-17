import React from "react";
import { useInView } from "react-intersection-observer";
import SolidTriangle from "./SolidTriangle";
import ImageTriangle from "./ImageTriangle";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="
        relative w-full 
        overflow-hidden 
        mt-2 
        px-4 sm:px-6 lg:px-8
        bg-transparent
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-emerald-100 dark:border-zinc-800">

        <div className="flex flex-col lg:flex-row">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[32%] min-h-[260px] lg:min-h-[600px] 
          bg-emerald-50 dark:bg-black 
          flex items-center justify-center 
          p-6 lg:p-8">
            <img
              src="/images.webp"
              alt="Decoration"
              className="w-60 sm:w-72 lg:w-full max-w-xs object-contain"
            />
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="w-full lg:w-[68%] 
            bg-white/25 dark:bg-zinc-900/25
            px-6 sm:px-10 lg:px-16 
            py-12 lg:py-20"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col justify-center h-full text-center lg:text-left space-y-8">

              {/* NAME SECTION */}
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2 }}
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold 
                text-slate-500 dark:text-zinc-400">
                  Hi, I'm
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold 
                text-emerald-600 dark:text-violet-500 leading-tight mt-2">
                  Parth Chavan
                </h1>
              </motion.div>

              {/* ROLE */}
              <motion.p
                className="text-base sm:text-lg lg:text-xl font-medium 
                text-slate-600 dark:text-zinc-300"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.4 }}
              >
                Full Stack Developer | Tech Explorer
              </motion.p>

              {/* DESCRIPTION */}
              <motion.div
                className="max-w-2xl mx-auto lg:mx-0 
                text-sm sm:text-base 
                text-slate-600 dark:text-zinc-400 
                leading-relaxed space-y-3"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1.6 }}
              >
                <h2>
                  <Typewriter text="Passionate about building interactive web apps and backend systems." />
                </h2>
                <h2>
                  <Typewriter text="Always exploring new technologies and turning ideas into scalable software." />
                </h2>
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                className="flex flex-col sm:flex-row 
                gap-4 pt-4 
                justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1.8 }}
              >
                {/* PRIMARY */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 
                  rounded-full 
                  text-sm sm:text-base font-medium 
                  text-white
                  bg-emerald-600 hover:bg-emerald-700
                  dark:bg-violet-600 dark:hover:bg-violet-700
                  transition-all duration-300
                  shadow-md hover:shadow-lg"
                  onClick={() => {
                    const section = document.getElementById("projects");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View My Work
                </motion.button>

                {/* SECONDARY */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 
                  rounded-full 
                  text-sm sm:text-base font-medium
                  border-2 
                  border-emerald-600 text-emerald-600
                  hover:bg-emerald-600 hover:text-white
                  dark:border-violet-500 dark:text-violet-400
                  dark:hover:bg-violet-600 dark:hover:text-white
                  transition-all duration-300"
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
        </div>
      </div>

      {/* TRIANGLES - only visible on large screens */}
      <div className="hidden lg:block">
        <SolidTriangle isVisible={inView} />
        <ImageTriangle isVisible={inView} />
      </div>
    </section>
  );
};

export default Hero;
