import React, { useEffect, useRef, useState } from "react";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

const icons = [FaSchool, FaUniversity, FaGraduationCap];

const EducationSection = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(null);
  const refs = useRef([]);
  const scrollContainerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Scroll observer for active highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.index));
        }),
      { threshold: 0.6 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [data]);

  const handleClick = (i) => {
    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveIndex(i);
  };

  const debounce = (func, delay = 20) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleScroll = debounce(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollTop, scrollHeight, clientHeight } = container;
    const progress = Math.min(1, scrollTop / (scrollHeight - clientHeight));
    setLineHeight(progress * scrollHeight);
  });

  return (
    <div className="flex gap-4 h-[80vh] overflow-hidden">
      {/* Timeline */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="relative w-2/3 pl-10 pr-4 overflow-y-scroll no-scrollbar scroll-smooth"
      >
        {/* Growing animated vertical line */}
        <div
          className="absolute left-6 top-0 w-2 bg-green-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ height: `${lineHeight}px` }}
        ></div>

        {data.map((item, index) => {
          const isActive = index === activeIndex;
          const Icon = icons[index % icons.length];

          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => (refs.current[index] = el)}
              onClick={() => handleClick(index)}
              className="mb-16 flex items-center gap-4 relative z-10 cursor-pointer group"
            >
              {/* Timeline Circle */}
              <div className="relative z-20">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Card */}
              <div
                className={`relative transition-all duration-500 ease-in-out transform w-64 p-4 shadow-md ${
                  isActive
                    ? "bg-blue-500 text-white rounded-tr-[70px] rounded-br-[30px] rounded-tl-[20px] rounded-bl-[30px] scale-105"
                    : "bg-white text-gray-800 border border-red-400 rounded-lg group-hover:scale-[1.02]"
                }`}
              >
                {/* Active Ring */}
                {isActive && (
                  <div className="absolute -left-9 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-4 border-red-500"></div>
                )}
                <div className="flex items-center gap-2">
                  <Icon className="text-xl" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Panel */}
      <div className="w-1/3 flex items-center justify-center">
        {activeIndex !== null ? (
          <div className="p-6 w-[90%] bg-white/50 shadow-lg rounded-xl space-y-4 text-gray-900 backdrop-blur-md transition-all duration-500 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-700">
              {data[activeIndex].title}
            </h2>

            <div className="flex items-start gap-2">
              <h3 className="font-semibold">Completion:</h3>
              <span>{data[activeIndex].complition}</span>
            </div>

            <div className="flex items-start gap-2">
              <h3 className="font-semibold">College:</h3>
              <span>{data[activeIndex].collage}</span>
            </div>

            <div className="flex items-start gap-2">
              <h3 className="font-semibold">University / Board:</h3>
              <span>{data[activeIndex]["univercity/bord"]}</span>
            </div>

            <div className="flex items-start gap-2">
              <h3 className="font-semibold">Percentage:</h3>
              <span>{data[activeIndex].Percentage}</span>
            </div>
          </div>
        ) : (
          <div className="text-gray-400 text-center px-6">
            <p className="italic animate-pulse">
              Scroll or click any step from the timeline to see details here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationSection;

