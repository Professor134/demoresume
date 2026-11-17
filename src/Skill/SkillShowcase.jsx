import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PcRive from 'pc-rive';
import { skillButtons } from './SkillButtonData';

const SkillShowcase = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="w-full min-h-[500px] md:h-screen rounded-2xl relative flex items-center justify-center bg-transparent overflow-hidden mt-5">
      {/* Background Animation */}
      <PcRive
        src="/parallax_hero.riv"
        stateMachines="MainStateMachine"
        autoplay={true}
        className="w-full h-full object-contain"
      />

      
      {/* Skill Buttons */}
      {skillButtons.map(({ id, className, animate, transition, percent }) => (
        <motion.button
          key={id}
          className={`absolute w-12 md:w-20 h-12 md:h-20 bg-cover ${className}`}
          animate={animate}
          transition={transition}
        />
      ))}

    </div>
  );
};

export default SkillShowcase;
