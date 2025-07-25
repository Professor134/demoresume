import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedin size={24} />,
    url: "https://www.linkedin.com/in/parth-chavan-6284152a8",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub size={24} />,
    url: "https://github.com/Professor134",
    label: "GitHub",
  },
  {
    icon: <FaInstagram size={24} />,
    url: "https://www.instagram.com/parthchavan653/",
    label: "Instagram",
  },
  {
    icon: <FaPinterest size={24} />,
    url: "https://pin.it/11BuroVx1",
    label: "Pinterest",
  },
  {
    icon: <FaWhatsapp size={24} />,
    url: "https://wa.me/qr/7WYVGT4ISCPJL1",
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <div className="w-full min-h-[500px] md:h-screen overflow-hidden text-white flex flex-col items-center justify-center rounded-2xl bg-gray-300 mt-5 pt-20 md:pt-32">
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-6 px-4 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-start text-white dark:text-black gap-6"
        >
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-2 text-sm text-left md:text-left">
            <h3 className="text-lg font-semibold">Parth Chavan</h3>
            <p>IT Developer & Designer</p>
            <p>Based in Pune, India</p>
            <p>
              Email:{" "}
              <a
                href="mailto:parthchavan653@gmail.com"
                className="underline hover:text-blue-300"
              >
                parth@example.com
              </a>
            </p>
            <p>Phone: +91 9145414488</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-green-500 h-full mx-4"></div>
          <div className="md:hidden block w-full bg-green-500 h-px my-2"></div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 space-y-3 flex flex-col items-center text-center">
            <img
              src="bg11.png"
              alt="Parth Chavan"
              className="w-24 h-24 rounded-full object-cover border-2 border-green-500 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm italic opacity-80">
              "Devlop to Learn. Learn to Devlop."
            </p>
            <p className="text-xs opacity-50">
              Passionate about building impactful digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 px-2">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 md:w-20 md:h-20 bg-green-100/20 dark:bg-violetNeon/10 border border-green-500 dark:border-violetNeon text-white dark:text-black flex items-center justify-center rounded-xl shadow-md backdrop-blur-md transition-all"
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
