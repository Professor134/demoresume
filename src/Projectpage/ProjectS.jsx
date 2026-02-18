import React, { useRef } from "react";

const ProjectS = () => {
  return (
    <div className="h-screen w-full py-5 bg-black/10 flex relative">
      {/* Left Side - 60% */}
      <div className="w-3/5 h-full bg-white/20 backdrop-blur-md rounded-l-2xl p-6 flex flex-col justify-between">
        {/* Title */}
        <div className="text-white text-3xl font-bold mb-4">
          It's My Work
        </div>
        {/* Subtitle */}
        <div className="text-white text-lg mb-4">
          A showcase of my recent projects
        </div>

        {/* Info */}
        <div className="text-white text-base flex-1 overflow-y-auto mb-4">
          <p>
            This is the info section. You can put bio, description, or any
            content here. It scrolls if content exceeds height.
          </p>
        </div>

        {/* 4 Square Buttons */}
        <div className="grid grid-rows-1 grid-cols-4 gap-1">
          <button className="h-24 w-5/6 bg-violet-600 rounded-xl text-white font-semibold hover:bg-violet-700 transition">
            Button 1
          </button>
          <button className="h-24 w-5/6 bg-violet-600 rounded-xl text-white font-semibold hover:bg-violet-700 transition">
            Button 2
          </button>
          <button className="h-24 w-5/6 bg-violet-600 rounded-xl text-white font-semibold hover:bg-violet-700 transition">
            Button 3
          </button>
          <button className="h-24 w-5/6 bg-violet-600 rounded-xl text-white font-semibold hover:bg-violet-700 transition">
            Button 4
          </button>
        </div>
      </div>

      {/* Vertical Line */}
      <div className="w-px h-[90%] bg-white/30 absolute left-[60%] top-[5%] z-10" />

      {/* Right Side - 40% */}
      <div className="w-2/5 h-full bg-white/10 backdrop-blur-md rounded-r-2xl p-6 overflow-y-auto space-y-4">
        {/* Scrollable Cards */}
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="w-full aspect-square bg-white/30 rounded-xl shadow-md text-white flex items-center justify-center text-xl font-medium"
          >
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectS;
