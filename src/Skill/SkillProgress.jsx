import React, { useEffect, useState, useRef } from 'react';
import { motion, animate } from 'framer-motion';

const SkillProgress = ({ percent, onFinish }) => {
  const [value, setValue] = useState(0);
  const previous = useRef(0);

  useEffect(() => {
    if (percent === previous.current) return;

    const bumpPercent = 100 - percent / 10;

    const controls = animate(previous.current, bumpPercent, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setValue(Math.min(100, Math.round(latest)));
      },
      onComplete: () => {
        animate(bumpPercent, percent, {
          duration: 0.8,
          ease: 'easeOut',
          onUpdate: (latest) => {
            setValue(Math.round(latest));
          },
          onComplete: () => {
            previous.current = percent;
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 5000*60*60);
          },
        });
      },
    });

    return () => controls.stop();
  }, [percent, onFinish]);

  const strokeDasharray = 100;
  const strokeDashoffset = strokeDasharray - value;
  const rotateStart = (value / 100) * 360;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="absolute z-50 w-[40vw] max-w-[160px] aspect-square top-5 right-5 rounded-full bg-transparent flex items-center justify-center"
    >
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: rotateStart }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full h-full"
        viewBox="0 0 36 36"
      >
        {/* Background Track */}
        <path
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4.5"
          fill="none"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />

        {/* Animated Progress */}
        <motion.path
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          stroke="url(#gradient)"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          transition={{ duration: 0.5 }}
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="25%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="75%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Percentage Label */}
      <span className="absolute text-green-500 dark:text-violetNeon font-bold text-base sm:text-lg">
        {value}%
      </span>
    </motion.div>
  );
};

export default SkillProgress;

