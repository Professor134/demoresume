import React, { createElement } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { usePortfolio } from "../data/PortfolioContext";

const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
};

const Footer = () => {
  const portfolio = usePortfolio();
  const { footer, contact } = portfolio;

  return (
    <footer className="w-full bg-[#F9FEFB]/30 dark:bg-[#0B0B0F]/30 text-[#0F172A] dark:text-[#F5F3FF] mt-2 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center">

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white/35 dark:bg-[#161621]/35
          border border-[#D1FAE5] dark:border-[#2E2E3A]
          rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.08)] 
          dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)]
          p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10"
        >

          {/* Left Section */}
          <div className="flex-1 space-y-2 sm:space-y-3 text-sm sm:text-base">
            <h3 className="text-xl font-semibold">{footer.name}</h3>
            <p className="text-[#334155] dark:text-[#D4D4D8]">{footer.role}</p>
            <p className="text-[#64748B] dark:text-[#A1A1AA]">{footer.location}</p>
            <p className="text-[#64748B] dark:text-[#A1A1AA]">
              Email:{" "}
              <a
                href={`mailto:${footer.email}`}
                className="underline text-[#16A34A] dark:text-[#A78BFA] hover:opacity-80"
              >
                {footer.email}
              </a>
            </p>
            <p className="text-[#64748B] dark:text-[#A1A1AA]">Phone: {footer.phone}</p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-[#D1FAE5] dark:bg-[#2E2E3A]"></div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <img
              src={footer.portrait}
              alt={footer.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover 
              border-2 border-[#16A34A] dark:border-[#7C3AED]
              shadow-md transition-transform duration-300 scale-100 hover:scale-105"
            />
            <p className="text-sm italic text-[#334155] dark:text-[#D4D4D8]">
              {`"${footer.quote}"`}
            </p>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#A1A1AA]">
              {footer.description}
            </p>
          </div>
        </motion.div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
          {contact.socials.map((link, idx) => {
            const label = link.label || "Social";
            const Icon = socialIcons[label.toLowerCase()] ?? FaGithub;
            return (
            <motion.a
              key={`${label}-${idx}`}
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
              {createElement(Icon, { size: 22 })}
            </motion.a>
            );
          })}
        </div>

        {/* Bottom Copyright */}
        <p className="text-xs mt-8 text-[#64748B] dark:text-[#A1A1AA] text-center">
          © {new Date().getFullYear()} {footer.name}. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;