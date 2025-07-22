import React from "react";
import { motion } from "framer-motion";

const ImageTriangle = ({ isVisible }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20vw"
      height="20vw"
      viewBox="0 0 16 16"
      className="absolute top-[30%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 rotate-90 "
      initial={{ x: "-100vw", opacity: 0 , rotateZ: 90 }}
      animate={isVisible ? { x: 0, opacity: 1, rotateZ: 90 } : {}}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <defs>
        <pattern id="imgFill" patternUnits="objectBoundingBox" width="1" height="1">
          <image
            href="bg1.png"
            width="150"
            height="150"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>
      <path
        fill="url(#imgFill)"
        fillRule="evenodd"
        d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 
        1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
      />
    </motion.svg>
  );
};

export default ImageTriangle;
