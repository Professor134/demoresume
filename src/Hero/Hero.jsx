import React from "react";
import { useInView } from "react-intersection-observer";
import SolidTriangle from "./SolidTriangle";
import ImageTriangle from "./ImageTriangle";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";
import { usePortfolio } from "../data/PortfolioContext";
import { scrollToSection } from "../utils/scrollToSection";
import { useLenis } from "lenis/react";

const Hero = () => {
  const portfolio = usePortfolio();
  const lenis = useLenis();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const moveToSection = (id) => {
    const target = document.getElementById(id);
    if (lenis && target) lenis.scrollTo(target, { offset: -76, duration: 1.5 });
    else scrollToSection(id);
  };

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
          bg-emerald-50/20 dark:bg-black/20
          flex items-center justify-center 
          p-6 lg:p-8">
            <img
              src={portfolio.hero.image || "/images.webp"}
              alt={`${portfolio.hero.name} introduction`}
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
                  {portfolio.hero.greeting}
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold 
                text-emerald-600 dark:text-violet-500 leading-tight mt-2">
                  {portfolio.hero.name}
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
                {portfolio.hero.role}
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
                {portfolio.hero.descriptions.map((description, index) => (
                  <h2 key={`${index}-${description}`}>
                    <Typewriter text={description} />
                  </h2>
                ))}
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
                  onClick={() => moveToSection("projects")}
                >
                  {portfolio.hero.primaryButton}
                </motion.button>

                {/* SECONDARY */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 
                  rounded-full 
                  text-sm sm:text-base font-medium
                  border-2 hero-contact-button
                  transition-all duration-300"
                  onClick={() => moveToSection("contact")}
                >
                  {portfolio.hero.secondaryButton}
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
