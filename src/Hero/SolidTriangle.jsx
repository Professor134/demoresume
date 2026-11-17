import React from "react";
import { motion } from "framer-motion";

const SolidTriangle = ({ isVisible }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="
        absolute 
        w-[120px] sm:w-[160px] lg:w-[220px]
        h-[120px] sm:h-[160px] lg:h-[220px]
        top-[32%] sm:top-[27%] lg:top-[25%]
        left-[19%] sm:left-[17%] lg:left-[20%]
        -translate-x-1/2 -translate-y-1/2
        rotate-90
        text-emerald-400
        dark:text-violet-500
        opacity-60
        dark:opacity-70
        pointer-events-none
        z-10
        drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]
        dark:drop-shadow-[0_0_25px_rgba(124,58,237,0.35)]
      "
      fill="currentColor"
      initial={{ x: "-100vw", opacity: 0, rotateZ: 90 }}
      animate={isVisible ? { x: 0, opacity: 1, rotateZ: 90 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path
        d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 
        1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
      />
    </motion.svg>
  );
};

export default SolidTriangle;
