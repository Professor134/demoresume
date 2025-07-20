import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactIcons from "./ContactIcons";
import Typewriter from "./Typewriter";

const Hero = () => {
  const [step, setStep] = useState(0);

  const text = `Passionate and self-motivated IT Diploma student specializing in full-stack web development.
                Skilled in modern frontend and backend technologies.  
                Eager to work on real-world challenges, contribute to innovative teams, and continuously learn in the tech domain.`;

  const handleClick = () => {
    setStep(1); // Start the animation process
    setTimeout(() => {
      setStep(2); // Show new image
    }, 1000);
    setTimeout(() => {
      setStep(3); // Start typewriter
    }, 3000);
    setTimeout(() => {
      setStep(4); // Slide new image out
    }, 15000);
    setTimeout(() => {
      setStep(0); // Reset everything
    }, 20000);
  };

  return (
    <div className="relative w-full h-screen bg-transparent overflow-hidden">
      {/* Button to start animation */}
      <button
        onClick={handleClick}
        className="absolute z-50 top-44 left-100 px-6 py-2 bg-transparent text-transparent rounded-xl shadow-xl"
      >
        🧱
      </button>

      {/* Text Section */}
      <AnimatePresence>
        {step === 0 || step === 3 || step === 4 ? (
          <motion.div
            key="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-10 h-fit w-96 left-40 top-20 rounded-3xl p-5 shadow-xl bg-transparent"
          >
            <h1 className="text-5xl font-bold text-left dark:text-white">
              and, yes <br /> I am the <b>CODER</b>
            </h1>
            <hr className="text-white my-2" />
            <p className="text-lg text-center dark:text-white">
              {step === 3 ? <Typewriter text={text} /> : text}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ContactIcons />

      {/* Image Section */}
      <AnimatePresence mode="wait">
        {/* Original Image (bg11) */}
        {(step === 0 || step === 4) && (
            <motion.img
            key="image1"
            src="bg11.png"
            alt="Original"
            initial={{ x: step === 0 ? 0 : "100%" }} // animate in from left if returning
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1 }}
            className="absolute left-[500px] top-0 h-full object-cover"
            />
        )}

        {/* New Image (bg111) */}
        {(step === 2 || step === 3) && (
            <motion.img
            key="image2"
            src="bg111.png"
            alt="New"
            initial={{ x: "130%" }}
            animate={{ x: 0 }}
            exit={{ x: "130%" }}
            transition={{ duration: 1 }}
            className="absolute left-[500px] top-0 h-full object-cover"
            />
        )}
        </AnimatePresence>
    </div>
  );
};

export default Hero;
