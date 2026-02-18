import React from "react";

const SkillCard = ({ skill, isActive }) => {
  return (    
    <div>
      <div
        className={`w-full h-64 rounded-xl text-white flex items-center justify-center shadow-lg transition-transform duration-300 bg-center bg-no-repeat bg-contain bg-[url(${skill.bgImage})] ${
          isActive ? "scale-110 shadow-purple-600 dark:shadow-blue-400 opacity-100" : "scale-100 opacity-50"
        }`}
      >
      </div>
      <div className="dark:bg-black bg-cyan-300 bg-opacity-60 px-4 py-2 rounded-md text-xl font-bold">
          {skill.name}
      </div>
    </div>
  );
};

export default SkillCard;





