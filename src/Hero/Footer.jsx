import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPinterest, FaWhatsapp ,FaLinkedin , FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedin size={30} />,
    url: "https://www.linkedin.com/in/parth-chavan-6284152a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub size={30} />,
    url: "https://github.com/Professor134",
    label: "GitHub",
  },
  {
    icon: <FaInstagram size={30} />,
    url: "https://www.instagram.com/parthchavan653/?utm_source=qr&r=nametag",
    label: "Instagram",
  },
  {
    icon: <FaPinterest size={30} />,
    url: "https://pin.it/11BuroVx1",
    label: "Pinterest",
  },
  {
    icon: <FaWhatsapp size={30} />,
    url: "https://wa.me/qr/7WYVGT4ISCPJL1",
    label: "WhatsApp",
  },
  
];

const Footer = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white flex flex-col items-center justify-center rounded-2xl bg-gray-300  ">

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-6 px-4 text-center">
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full max-w-5xl backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-start text-white dark:text-black gap-6"
>
  {/* Left Section: Contact & Info */}
  <div className="w-full md:w-1/2 space-y-2">
    <h3 className="text-lg font-semibold">Parth Chavan</h3>
    <p className="text-sm">IT Developer & Designer</p>
    <p className="text-sm">Based in Pune, India</p>
    <p className="text-sm">Email: <a href="mailto:parthchavan653@gmail.com" className="underline hover:text-blue-300">parth@example.com</a></p>
    <p className="text-sm">Phone: +91 9145414488</p>
  </div>

  {/* Vertical Divider */}
  <div className="hidden md:block w-px bg-white/30 dark:bg-violetNeon h-full mx-4"></div>
  <div className="md:hidden block w-full bg-green-500 dark:bg-violetNeon h-px mx-4"></div>

  {/* Right Section: Profile Image & Quote */}
  <div className="w-full md:w-1/2 space-y-3 flex flex-col items-center text-center">
    <img
      src="bg11.png" // Replace with your actual image path
      alt="Parth Chavan"
      className="w-24 h-24 rounded-full object-cover border-2 border-green-500 dark:border-violet-500 shadow-md hover:scale-105 transition-transform duration-300"
    />
    <p className="text-sm italic opacity-80">
      "Devlop to Learn. Learn to Devlop."
    </p>
    <p className="text-xs opacity-50">Passionate about building impactful digital experiences.</p>
  </div>
</motion.div>


        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 bg-green-100/20 dark:bg-violetNeon/10 border border-green-500 dark:border-violetNeon text-white dark:text-black flex items-center justify-center rounded-xl shadow-md backdrop-blur-md transition-all"
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
