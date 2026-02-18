import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PcRive from 'pc-rive';
import SkillProgress from './SkillProgress';
import { skillButtons } from './SkillButtonData';

const SkillShowcase = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="w-full min-h-[500px] md:h-screen rounded-2xl relative flex items-center justify-center bg-gray-300 overflow-hidden mt-5">
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
          onClick={() => setActiveSkill({ id, percent })}
        />
      ))}

      {/* Progress Loader (shows for 5 seconds) */}
      <AnimatePresence>
        {activeSkill && (
          <SkillProgress
            key={activeSkill.id}
            percent={activeSkill.percent}
            onFinish={() => setActiveSkill(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillShowcase;
