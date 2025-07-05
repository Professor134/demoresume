import React from "react";

const SkillSelector = ({ selected, onChange }) => {
  return (
    <div className="flex gap-4 justify-center my-6">
      {["frontend", "backend", "other"].map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`px-6 py-2 rounded-md font-semibold border ${
            selected === type ? "bg-blue-600 dark:bg-blue-700 text-white" : "bg-white dark:bg-violet-500 text-black dark:text-zinc-100"
          }`}
        >
          {type} skills
        </button>
      ))}
    </div>
  );
};

export default SkillSelector;
