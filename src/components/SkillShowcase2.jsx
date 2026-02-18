import React, { useState, useRef } from "react";

const skills = [
  {
    name: "React",
    gif: "https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif",
  },
  {
    name: "JavaScript",
    gif: "https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif",
  },
  {
    name: "TailwindCSS",
    gif: "https://media.giphy.com/media/Y4ak9Ki2GZCbJxAnJD/giphy.gif",
  },
  {
    name: "Node.js",
    gif: "https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif",
  },
  {
    name: "MongoDB",
    gif: "https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif",
  },
];

export default function SkillShowcase2() {
  const [centerIndex, setCenterIndex] = useState(0);
  const startX = useRef(null);

  const mod = (n, m) => ((n % m) + m) % m;

  const handlePrev = () => {
    setCenterIndex((prev) => mod(prev - 1, skills.length));
  };

  const handleNext = () => {
    setCenterIndex((prev) => mod(prev + 1, skills.length));
  };



  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center px-6 overflow-hidden">
      {/* LEFT: Slider */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="relative w-full flex items-center justify-center py-10 touch-pan-y">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
            onScroll={(e) => {
              const scrollLeft = e.target.scrollLeft;
              const width = e.target.offsetWidth;
              const index = Math.round(scrollLeft / width);
              setCurrentIndex(index);
            }}>

            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-full flex-none snap-start px-4 flex items-center justify-center"
                style={{ minWidth: "100%" }}
              >
                <div className="w-48 h-64 bg-white rounded-xl shadow-xl flex items-center justify-center text-xl font-bold">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* RIGHT: GIF Display */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-[300px] h-[300px] border-4 border-blue-400 rounded-lg overflow-hidden shadow-xl bg-white">
          <img
            src={skills[centerIndex].gif}
            alt={`${skills[centerIndex].name} GIF`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
