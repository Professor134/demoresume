import { motion } from "framer-motion";
import PcRive from "pc-rive";
import { usePortfolio } from "../data/PortfolioContext";

const SkillShowcase = () => {
  const { skills, site } = usePortfolio();

  return (
    <div className="skill-showcase w-full rounded-2xl relative flex items-center justify-center bg-transparent overflow-hidden">
      <PcRive
        src={site.skillRive}
        stateMachines={site.skillRiveStateMachine}
        autoplay={true}
        className="w-full h-full object-contain"
      />
      {skills.map((skill, index) => (
        <div
          key={`${skill.name}-${index}`}
          className="absolute"
          style={{ left: `${skill.x}%`, top: `${skill.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <motion.div
            title={`${skill.name} · ${skill.percent}%`}
            aria-label={`${skill.name}, ${skill.percent}%`}
            className="grid h-12 w-12 place-items-center rounded-2xl bg-white/80 p-2 shadow-lg backdrop-blur-md dark:bg-zinc-900/80 md:h-20 md:w-20"
            animate={{ y: [0, index % 2 ? 10 : -10, 0], rotate: [0, index % 2 ? -7 : 7, 0] }}
            transition={{ duration: 3 + (index % 4), delay: (index % 5) * 0.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {skill.image && <img src={skill.image} alt={skill.name} className="h-full w-full object-contain" />}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SkillShowcase;
