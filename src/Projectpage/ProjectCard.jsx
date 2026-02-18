import React, { useState } from "react";
import { FaGithub, FaLink, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import IconLink from "./IconLink";
const ProjectCard = ({ logo, links, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[500px] h-[280px] bg-[#0e0e0e] rounded-3xl shadow-lg cursor-pointer overflow-hidden group transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="absolute w-full h-full bg-gradient-to-br from-blue-600 dark:from-indigo-700 via-zinc-300 dark:via-transparent to-sky-400 dark:to-purple-800 shadow-xl top-0 left-0 z-0">
        <div
          className={`absolute z-10 top-1/2 transform -translate-y-1/2 w-[130px] h-[130px]
            bg-gradient-to-br from-sky-500 via-zinc-300 to-blue-300 shadow-xl clip-hex1 items-center justify-center
            transition-all duration-700 ease-in-out
            ${hovered ? 'left-[calc(100%-140px)]  clip-hex2 flex text-white flex-col space-y-2 text-xl ' : 'transition-all duration-700 ease-in-out left-10 hidden md:flex'}`}>
          <div>
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </div>
        </div>

        <div className={`absolute z-10 right-10 top-1/2 transform -translate-x-0 -translate-y-1/2 text-white 
            transition-opacity duration-700 ease-in-out ${hovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-4xl font-bold text-white">Project</div>
        </div>

        <div className={`absolute z-10 left-10 top-1/2 transform -translate-x-0 -translate-y-1/2 text-white transition-opacity 
                        duration-700 ease-in-out ${!hovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {description}
          <div >
            {links.github && <IconLink href={links.github} icon={FaGithub} text="Source Link" />}
            {links.live && <IconLink href={links.live} icon={FaLink} text="Live Demo" />}
            {links.email && <IconLink href={`mailto:${links.email}`} icon={FaEnvelope} text="Contact" />}
            {links.info && <IconLink href={links.info} icon={FaInfoCircle} text="More Info" />}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;