import React from 'react';
import { motion } from 'framer-motion';
import PcRive from '@/components/PcRive';

const SkillShowcase = () => {

  return (
    <div className="w-full h-screen rounded-2xl top-1 relative flex items-center justify-center bg-gray-300 overflow-hidden">
      {/* Background Animation */}
      <PcRive 
      src="/parallax_hero.riv"
      stateMachines="MainStateMachine"
      autoplay={true}
      className="w-full h-full object-contain"
    />


      <motion.button
        className="absolute top-[7%] left-[10%] w-20 h-20 bg-[url('/logos/git.png')] bg-cover"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, delay: 0, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[10%] left-[25%] w-20 h-20 bg-[url('/logos/ChatGPT.png')] bg-cover"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, delay: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[20%] left-[50%] w-16 h-16 bg-[url('/logos/java.png')] bg-cover"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 5, delay: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[25%] left-[10%] w-14 h-14 bg-[url('/logos/figma.png')] bg-cover"
        animate={{ y: [0, 10, -10, 0] }}
        transition={{ duration: 4, delay: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[40%] right-[10%] w-20 h-20 bg-[url('/logos/react.png')] bg-cover"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, delay: 0.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.button
        className="absolute top-[40%] left-[7%] w-16 h-16 bg-[url('/logos/vs-code.png')] bg-cover"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, delay: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[15%] left-[80%] w-16 h-16 bg-[url('/logos/css.png')] bg-cover"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, delay: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute top-[60%] right-[15%] w-14 h-14 bg-[url('/logos/html.png')] bg-cover"
        animate={{ x: [0, -10, 10, 0] }}
        transition={{ duration: 5, delay: 1.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[10%] left-[15%] w-12 h-12 bg-[url('/logos/mysql.png')] bg-cover"
        animate={{ scale: [1, 1.2, 1], y: [0, 10, 0] }}
        transition={{ duration: 4.5, delay: 0.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[25%] right-[25%] w-16 h-16 bg-[url('/logos/pintrest.png')] bg-cover"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[20%] left-[5%] w-14 h-14 bg-[url('/logos/spb.png')] bg-cover"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, delay: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[14%] right-[16%] w-12 h-12 bg-[url('/logos/rive.png')] bg-cover"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, delay: 0.6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[10%] left-[60%] w-12 h-12 bg-[url('/logos/bgrmv.png')] bg-cover"
        animate={{ x: [0, 20, -20, 0] }}
        transition={{ duration: 7, delay: 1.3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.button
        className="absolute bottom-[20%] right-[60%] w-24 h-24 bg-[url('/logos/mongo.png')] bg-cover"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, delay: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default SkillShowcase;

