import React from 'react';
import { motion } from 'framer-motion';
import PcRive from 'pc-rive';
// import PcRive from '@/components/PcRive';

const SkillShowcase = () => {
  return (
    <div className="w-full min-h-[500px] md:h-screen rounded-2xl relative flex items-center justify-center bg-gray-300 overflow-hidden mt-5">
      {/* Background Animation */}
      <PcRive
        src="/parallax_hero.riv"
        stateMachines="MainStateMachine"
        autoplay={true}
        className="w-full h-full object-contain"
      />

      {/* Animated Skill Icons */}
      <motion.button
        className="absolute top-[10%] md:top-[7%] left-[5%] md:left-[10%] w-12 md:w-20 h-12 md:h-20 bg-[url('/logos/git.png')] bg-cover"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[14%] md:top-[10%] left-[20%] md:left-[25%] w-12 md:w-20 h-12 md:h-20 bg-[url('/logos/ChatGPT.png')] bg-cover"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[22%] left-[40%] md:left-[50%] w-10 md:w-16 h-10 md:h-16 bg-[url('/logos/java.png')] bg-cover"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[28%] left-[6%] md:left-[10%] w-10 md:w-14 h-10 md:h-14 bg-[url('/logos/figma.png')] bg-cover"
        animate={{ y: [0, 10, -10, 0] }}
        transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[40%] right-[5%] md:right-[10%] w-12 md:w-20 h-12 md:h-20 bg-[url('/logos/react.png')] bg-cover"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, delay: 0.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.button
        className="absolute top-[44%] left-[5%] w-10 md:w-16 h-10 md:h-16 bg-[url('/logos/vs-code.png')] bg-cover"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, delay: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[18%] left-[75%] md:left-[80%] w-10 md:w-16 h-10 md:h-16 bg-[url('/logos/css.png')] bg-cover"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, delay: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[60%] right-[10%] md:right-[15%] w-10 md:w-14 h-10 md:h-14 bg-[url('/logos/html.png')] bg-cover"
        animate={{ x: [0, -10, 10, 0] }}
        transition={{ duration: 5, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[12%] left-[10%] md:left-[15%] w-10 md:w-12 h-10 md:h-12 bg-[url('/logos/mysql.png')] bg-cover"
        animate={{ scale: [1, 1.2, 1], y: [0, 10, 0] }}
        transition={{ duration: 4.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[25%] right-[15%] md:right-[25%] w-10 md:w-16 h-10 md:h-16 bg-[url('/logos/pintrest.png')] bg-cover"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[20%] left-[5%] w-10 md:w-14 h-10 md:h-14 bg-[url('/logos/spb.png')] bg-cover"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[14%] right-[12%] md:right-[16%] w-10 md:w-12 h-10 md:h-12 bg-[url('/logos/rive.png')] bg-cover"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[10%] left-[50%] md:left-[60%] w-10 md:w-12 h-10 md:h-12 bg-[url('/logos/bgrmv.png')] bg-cover"
        animate={{ x: [0, 20, -20, 0] }}
        transition={{ duration: 7, delay: 1.3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[20%] right-[50%] md:right-[60%] w-14 md:w-24 h-14 md:h-24 bg-[url('/logos/mongo.png')] bg-cover"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, delay: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default SkillShowcase;
