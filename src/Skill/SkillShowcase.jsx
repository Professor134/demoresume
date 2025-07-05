import React, { useState } from "react";
import SkillSlider from "./SkillSlider";
import GifDisplay from "./GifDisplay";
import { skillsData } from "./skills";
import SkillSelector from "./SkillSelector";

export default function SkillShowcase() {
  const [skillType, setSkillType] = useState("frontend");
  const [currentSkill, setCurrentSkill] = useState(skillsData["frontend"][1]);

  return (
    <div className="w-full h-fit flex flex-col items-center justify-start p-6 bg-transparent pt-32">
      <SkillSelector
        selected={skillType}
        onChange={(type) => {
          setSkillType(type);
          setCurrentSkill(skillsData[type][1]);
        }}
      />

      <div className="flex w-full gap-10 justify-around mt-10">
        <div className="w-1/2 flex flex-col items-center">
          <SkillSlider
            skills={skillsData[skillType]}
            onCardSelect={setCurrentSkill}
          />
        </div>
        <div className="w-1/2 h-80 shadow-md ">
          <GifDisplay gif={currentSkill?.gif} />
        </div>
      </div>
    </div>
  );
}

