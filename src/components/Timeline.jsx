// src/components/Timeline.jsx
import React from "react";

const Timeline = ({ steps, activeStep, onStepClick }) => {
  return (
    <div className="flex flex-col items-start space-y-8 pl-6 relative">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center space-x-2 relative">
          {/* Line */}
          {index !== 0 && (
            <div className="absolute top-[-40px] left-3 w-px h-10 bg-gray-300 z-0"></div>
          )}

          {/* Circle */}
          <div
            onClick={() => onStepClick(index)}
            className={`w-6 h-6 rounded-full border-4 cursor-pointer z-10 ${
              index === activeStep ? "bg-black border-black" : "border-gray-400 bg-white"
            }`}
          ></div>

          {/* Label */}
          <button
            onClick={() => onStepClick(index)}
            className="ml-2 bg-white border px-2 py-1 text-sm capitalize"
          >
            {step.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
