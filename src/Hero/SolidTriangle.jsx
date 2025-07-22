import React from "react";
import { motion } from "framer-motion";

const SolidTriangle = ({ isVisible }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20vw"
      height="20vw"
      viewBox="0 0 16 16"
      className="absolute top-[27%] left-[23%] transform -translate-x-1/2 -translate-y-1/2 dark:text-violetNeon text-emerald-400 rotate-90"
      fill="currentColor"
      initial={{ x: "-100vw", opacity: 0,rotateZ: 90 }}
      animate={isVisible ? { x: 0, opacity: 1, rotateZ: 90 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path
        fillRule="evenodd"
        d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 
        1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
      />
    </motion.svg>
  );
};

export default SolidTriangle;
