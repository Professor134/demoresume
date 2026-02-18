import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const skills = [
  {
    name: "React",
    level: 90,
    description: "Used to build dynamic UIs, reusable components, and handle frontend routing and state.",
  },
  {
    name: "Java",
    level: 85,
    description: "Used for object-oriented programming, backend logic, and enterprise-level applications.",
  },
  {
    name: "SpringBoot",
    level: 80,
    description: "Handles backend APIs, authentication, service layers, and MySQL database interaction.",
  },
];

const SkillCards = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (index) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 w-full max-w-md p-2">
      {skills.map((skill, i) => (
        <div key={i} className="relative w-full">
          <motion.button
            onClick={() => toggleSkill(i)}
            whileHover={{ scale: 0.95 }}
            className="w-full aspect-square bg-green-500 dark:bg-violet-500 rounded-xl text-white font-semibold flex items-center justify-center text-[clamp(0.75rem,3vw,1.1rem)] text-center"
          >
            {skill.name}
          </motion.button>

          <AnimatePresence>
            {activeSkill === i && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 z-20"
              >
                <p className="text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
                  {skill.description}
                </p>
                <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-green-500 dark:bg-violet-500 rounded-full"
                  />
                </div>
                <p className="text-xs mt-1 text-right text-gray-600 dark:text-gray-400">
                  Mastery: {skill.level}%
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
