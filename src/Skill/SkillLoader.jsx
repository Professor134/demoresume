// components/SkillLoader.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SkillLoader({ skill, percent }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(percent), 300); // Delay for animation
    return () => clearTimeout(timeout);
  }, [percent]);

  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 2, type: "spring" }}
    >
      <svg width={radius * 2} height={radius * 2}>
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f50057" />
            <stop offset="100%" stopColor="#651fff" />
          </linearGradient>
        </defs>
        <circle
          stroke="#e0e0e0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeInOut" }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      <div className="absolute flex flex-col items-center justify-center text-sm sm:text-base font-semibold text-gray-800">
        <div>{skill}</div>
        <div>{progress}%</div>
      </div>
    </motion.div>
  );
}


