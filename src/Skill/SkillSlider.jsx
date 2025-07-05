import React, { useRef, useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const SkillSlider = ({ skills, onCardSelect }) => {
  const scrollRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
    onCardSelect(skills[0]);
    centerCard(0);
  }, [skills, onCardSelect]);

  const centerCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index];
    if (!card) return;

    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const containerCenter = container.clientWidth / 2;

    container.scrollTo({
      left: cardCenter - containerCenter,
      behavior: "smooth",
    });
  };

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    onCardSelect(skills[index]);
    centerCard(index);
  };

  return (
    <div className="w-[576px] mx-auto"> 
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll no-scrollbar gap-6 px-4 py-4 scroll-smooth"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer w-48" 
            onClick={() => handleCardClick(index)}
          >
            <SkillCard
              skill={skill}
              isActive={index === selectedIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSlider;
