import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const Profile = () => {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="
      w-full 
      max-w-6xl 
      mx-auto 
      px-4 sm:px-6 lg:px-10 
      py-12 sm:py-16
      "
    >
      <div
        className="
        relative 
        flex flex-col lg:flex-row 
        gap-10 lg:gap-16
        rounded-2xl 
        border 
        p-6 sm:p-8 lg:p-12
        bg-white/25 
        dark:bg-[#161621]/25
        border-[#D1FAE5] 
        dark:border-[#2E2E3A]
        shadow-[0_10px_30px_rgba(16,185,129,0.08)]
        dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)]
        transition-all duration-300
        "
      >
        {/* Vertical Divider (Desktop Only) */}
        <div className="absolute hidden lg:block left-1/2 top-10 bottom-10 w-[2px] bg-[#16A34A] dark:bg-[#7C3AED] opacity-40" />

        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 z-10">
          <motion.h1
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="
              text-3xl sm:text-4xl lg:text-[42px]
              font-bold
              text-[#0F172A]
              dark:text-[#F5F3FF]
              leading-tight
            "
          >
            Know About Me
          </motion.h1>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.3}
            className="
              text-2xl sm:text-3xl lg:text-[32px]
              font-semibold
              text-[#0F172A]
              dark:text-[#F5F3FF]
              flex flex-wrap gap-2
            "
          >
            <span>Who is</span>
            <span className="text-[#16A34A] dark:text-[#7C3AED]">
              Parth Chavan
            </span>
            <span>?</span>
          </motion.div>

          <motion.p
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.5}
            className="
              text-base sm:text-lg
              leading-relaxed
              text-[#334155]
              dark:text-[#D4D4D8]
              max-w-xl
            "
          >
            I’m a passionate developer with a knack for creating smooth,
            modern, and interactive web experiences. Whether it's building
            elegant UIs or architecting efficient backends, I thrive on turning
            ideas into reality. I value clean code, thoughtful design, and
            continuous learning.
          </motion.p>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10 z-10">

          {/* Education */}
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.7}
          >
            <h3
              className="
                text-xl sm:text-2xl
                font-semibold
                mb-4
                text-[#16A34A]
                dark:text-[#A78BFA]
              "
            >
              Education
            </h3>

            <ul className="space-y-6 text-[#334155] dark:text-[#D4D4D8]">
              <li>
                <span className="
                  inline-block
                  bg-[#16A34A]
                  dark:bg-[#7C3AED]
                  text-white
                  text-sm
                  px-3 py-1
                  rounded-full
                  mb-2
                ">
                  2023-2027
                </span>
                <p className="font-medium">Polytechnic - P.C.P, Pune</p>
              </li>

              <li>
                <span className="
                  inline-block
                  bg-[#16A34A]
                  dark:bg-[#7C3AED]
                  text-white
                  text-sm
                  px-3 py-1
                  rounded-full
                  mb-2
                ">
                  2022-2023
                </span>
                <p className="font-medium">HSC - S.G.G.V.M School</p>
              </li>
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.9}
          >
            <h3
              className="
                text-xl sm:text-2xl
                font-semibold
                mb-4
                text-[#16A34A]
                dark:text-[#A78BFA]
              "
            >
              Experience
            </h3>

            <ul className="space-y-6 text-[#334155] dark:text-[#D4D4D8]">
              <li>
                <span className="
                  inline-block
                  bg-[#16A34A]
                  dark:bg-[#7C3AED]
                  text-white
                  text-sm
                  px-3 py-1
                  rounded-full
                  mb-2
                ">
                  2025
                </span>
                <p className="font-medium">
                  Intern - Star Maven Digital
                </p>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Profile;