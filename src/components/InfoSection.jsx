
import React, { useEffect, useRef, useState } from "react";
import {
  FaSchool,
  FaUniversity,
  FaGraduationCap,
  FaSuitcase,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa";

const iconMap = {
  education: [FaSchool, FaUniversity, FaGraduationCap],
  work: [FaSuitcase, FaBuilding, FaClipboardList],
};

const InfoSection = ({ data: initialData, type }) => {
  const [data, setData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);
  const iconSet = iconMap[type] || [FaClipboardList];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [data]);

  const handleClick = (index) => {
    itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveIndex(index);
  };

  const handleChange = (index, key, value) => {
    const updated = [...data];
    updated[index][key] = value;
    setData(updated);
  };

  const renderRightContent = () => {
    const item = data[activeIndex];
    if (!item) return <p className="text-gray-400">Click on a timeline card to view details</p>;

    return (
      <div className="space-y-2 animate-fade-in">
        <h2 className="text-xl font-semibold text-blue-600">{item.title}</h2>
        {type === "education" ? (
          <>
            <label className="block">
              Completion:
              <input
                className="w-full border px-2 py-1 rounded"
                value={item.complition}
                onChange={(e) => handleChange(activeIndex, "complition", e.target.value)}
              />
            </label>
            <label className="block">
              College:
              <input
                className="w-full border px-2 py-1 rounded"
                value={item.collage}
                onChange={(e) => handleChange(activeIndex, "collage", e.target.value)}
              />
            </label>
            <label className="block">
              University/Board:
              <input
                className="w-full border px-2 py-1 rounded"
                value={item["univercity/bord"]}
                onChange={(e) => handleChange(activeIndex, "univercity/bord", e.target.value)}
              />
            </label>
            <label className="block">
              Percentage:
              <input
                className="w-full border px-2 py-1 rounded"
                value={item.Percentage}
                onChange={(e) => handleChange(activeIndex, "Percentage", e.target.value)}
              />
            </label>
          </>
        ) : (
          <>
            <label className="block">
              Post:
              <input
                className="w-full border px-2 py-1 rounded"
                value={item.post}
                onChange={(e) => handleChange(activeIndex, "post", e.target.value)}
              />
            </label>
            <label className="block">
              Duration:
              <input
                className="w-full border px-2 py-1 rounded"
                value={item.duration}
                onChange={(e) => handleChange(activeIndex, "duration", e.target.value)}
              />
            </label>
            <label className="block">
              Description:
              <textarea
                className="w-full border px-2 py-1 rounded"
                value={item.discriptionofwork}
                onChange={(e) => handleChange(activeIndex, "discriptionofwork", e.target.value)}
              />
            </label>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex gap-8">
      <div className="relative border-l-2 border-blue-300 ml-6 w-2/3 pr-6 overflow-y-auto max-h-[80vh]">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeIndex === index;
          const Icon = iconSet[index % iconSet.length];

          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => handleClick(index)}
              className={`mb-20 flex justify-${isLeft ? "start" : "end"} relative cursor-pointer transition-all duration-700 ease-in-out`}
            >
              <div
                className={`absolute left-[-20px] top-2 w-6 h-6 flex items-center justify-center rounded-full text-white z-20 ${
                  isActive ? "bg-blue-600 ring-4 ring-blue-300 scale-110" : "bg-blue-400"
                }`}
              >
                <Icon className="text-sm" />
              </div>
              <div
                className={`w-[80%] md:w-1/2 p-4 rounded-xl shadow bg-white transform transition-all duration-700 ease-in-out ${
                  isLeft ? "ml-4" : "mr-4"
                } ${
                  isActive
                    ? "opacity-100 scale-105 translate-y-0 border border-blue-400"
                    : "opacity-60 scale-95 translate-y-2"
                }`}
              >
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-1/3 p-4 bg-white shadow rounded-xl max-h-[80vh] overflow-y-auto animate-fade-in">
        {renderRightContent()}
      </div>
    </div>
  );
};

export default InfoSection;
