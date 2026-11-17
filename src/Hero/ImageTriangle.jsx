import React from "react";
import { motion } from "framer-motion";

const ImageTriangle = ({ isVisible }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="
        absolute 
        w-[140px] sm:w-[180px] lg:w-[240px]
        h-[140px] sm:h-[180px] lg:h-[240px]
        top-[35%] sm:top-[30%] lg:top-[28%]
        left-[15%] sm:left-[12%] lg:left-[17%]
        -translate-x-1/2 -translate-y-1/2
        rotate-90
        opacity-20
        dark:opacity-25
        pointer-events-none
        z-0
      "
      initial={{ x: "-100vw", opacity: 0, rotateZ: 90 }}
      animate={isVisible ? { x: 0, opacity: 1, rotateZ: 90 } : {}}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <defs>
        <pattern id="imgFill" patternUnits="objectBoundingBox" width="1" height="1">
          <image
            href="bg1.png"
            width="200"
            height="200"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>

      <path
        fill="url(#imgFill)"
        d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 
        1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
      />
    </motion.svg>
  );
};

export default ImageTriangle;
