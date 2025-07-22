import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" }
  }),
};

const Profile = () => {
  const [ref, inView] = useInView({ threshold: 0.8, triggerOnce: true });

  return (

      <div
        ref={ref}
        className="w-full h-screen bg-gray-300 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl flex flex-col lg:flex-row relative overflow-hidden p-6 sm:p-10 gap-6"
      >
        <div className="absolute lg:block hidden left-1/2 top-0 bottom-0 w-[2px] bg-green-500 dark:bg-violetNeon z-10" />

        <div className="w-full lg:w-1/2 rounded-xl flex flex-col justify-center items-start z-20 gap-2">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
          >
            <h1 className="text-4xl font-bold mb-2">Know About Me</h1>
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.3}
            className="text-3xl font-semibold mb-2"
          >
            <h2 className="inline">Who is </h2>
            <h2 className="inline text-green-500 dark:text-violetNeon">Parth Chavan</h2>
            <h2 className="inline">?</h2>
          </motion.div>

          <motion.p
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.5}
            className="text-md leading-relaxed text-gray-700 dark:text-gray-300"
          >
            I’m a passionate developer with a knack for creating smooth, modern, and interactive web experiences.
            Whether it's building elegant UIs or architecting efficient backends, I thrive on turning ideas into reality.
            I value clean code, thoughtful design, and continuous learning.
          </motion.p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center z-20 gap-8">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.7}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Education</h3>
            <ul className="list-disc ml-5 text-gray-800 dark:text-gray-200 space-y-2">
              <li>
                <p className="bg-green-500 dark:bg-violetNeon w-fit h-fit rounded-lg px-2 py-1">2023-2027</p>
                <p>Polytechnic - P.C.P, Pune</p>
              </li>
              <li>
                <p className="bg-green-500 dark:bg-violetNeon w-fit h-fit rounded-lg px-2 py-1">2022-2023</p>
                <p>HSC - S.G.G.V.M, School</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.9}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Experience</h3>
            <ul className="list-disc ml-5 text-gray-800 dark:text-gray-200 space-y-2">
              <li>
                <p className="bg-green-500 dark:bg-violetNeon w-fit h-fit rounded-lg px-2 py-1">2025</p>
                <p>Intern - Star Maven Digital</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
  );
};

export default Profile;
