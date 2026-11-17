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
  { icon: <FaLinkedin size={22} />, url: "https://www.linkedin.com/in/parth-chavan-6284152a8", label: "LinkedIn" },
  { icon: <FaGithub size={22} />, url: "https://github.com/Professor134", label: "GitHub" },
  { icon: <FaInstagram size={22} />, url: "https://www.instagram.com/parthchavan653/", label: "Instagram" },
  { icon: <FaPinterest size={22} />, url: "https://pin.it/11BuroVx1", label: "Pinterest" },
  { icon: <FaWhatsapp size={22} />, url: "https://wa.me/qr/7WYVGT4ISCPJL1", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#F9FEFB] dark:bg-[#0B0B0F] text-[#0F172A] dark:text-[#F5F3FF] mt-2 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center">

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white dark:bg-[#161621] 
          border border-[#D1FAE5] dark:border-[#2E2E3A]
          rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.08)] 
          dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)]
          p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10"
        >

          {/* Left Section */}
          <div className="flex-1 space-y-2 sm:space-y-3 text-sm sm:text-base">
            <h3 className="text-xl font-semibold">Parth Chavan</h3>
            <p className="text-[#334155] dark:text-[#D4D4D8]">IT Developer & Designer</p>
            <p className="text-[#64748B] dark:text-[#A1A1AA]">Based in Pune, India</p>
            <p className="text-[#64748B] dark:text-[#A1A1AA]">
              Email:{" "}
              <a
                href="mailto:parthchavan653@gmail.com"
                className="underline text-[#16A34A] dark:text-[#A78BFA] hover:opacity-80"
              >
                parthchavan653@gmail.com
              </a>
            </p>
            <p className="text-[#64748B] dark:text-[#A1A1AA]">Phone: +91 9145414488</p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-[#D1FAE5] dark:bg-[#2E2E3A]"></div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <img
              src="ayo.png"
              alt="Parth Chavan"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover 
              border-2 border-[#16A34A] dark:border-[#7C3AED]
              shadow-md transition-transform duration-300 scale-100 hover:scale-105"
            />
            <p className="text-sm italic text-[#334155] dark:text-[#D4D4D8]">
              "Develop to Learn. Learn to Develop."
            </p>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#A1A1AA]">
              Passionate about building impactful digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
              rounded-xl bg-[#ECFDF5] dark:bg-[#1E1E2A]
              border border-[#16A34A] dark:border-[#7C3AED]
              text-[#16A34A] dark:text-[#C4B5FD]
              transition-all duration-300 shadow-sm
              hover:shadow-[0_10px_20px_rgba(22,163,74,0.25)]
              dark:hover:shadow-[0_0_25px_rgba(124,58,237,0.35)]"
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom Copyright */}
        <p className="text-xs mt-8 text-[#64748B] dark:text-[#A1A1AA] text-center">
          © {new Date().getFullYear()} Parth Chavan. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;