import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo_l from "../assets/logo_l.png";
import logo_d from "../assets/logo_d.png";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "profile", "projects", "skills", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  useEffect(() => {
    const handleScrollActive = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          window.scrollY >= section.offsetTop - 80 &&
          window.scrollY < section.offsetTop + section.offsetHeight - 80
        ) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScrollActive);
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  return (
    <motion.nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#F9FEFB] dark:bg-[#0B0B0F]
        border-b border-[#D1FAE5] dark:border-[#2E2E3A]
        shadow-sm
      "
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="
        max-w-[1200px] mx-auto
        flex justify-between items-center
        px-4 sm:px-6 lg:px-8
        h-[70px]
      ">

        {/* Logo */}
        <div onClick={() => handleScroll("home")} className="cursor-pointer flex items-center">
          <motion.img
            src={logo_l}
            alt="Logo"
            className="w-12 h-12 block dark:hidden"
            whileHover={{ rotateY: 360 }}
            transition={{ duration: 1.5 }}
          />
          <motion.img
            src={logo_d}
            alt="Logo"
            className="w-12 h-12 hidden dark:block"
            whileHover={{ rotateY: 360 }}
            transition={{ duration: 1.5 }}
          />
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              text-[#0F172A] dark:text-[#F5F3FF]
              text-2xl
            "
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Nav Items */}
        <AnimatePresence>
          {(menuOpen || window.innerWidth >= 768) && (
            <motion.ul
              className="
                absolute md:static
                top-[70px] left-0
                w-full md:w-auto
                bg-[#F9FEFB] dark:bg-[#0B0B0F]
                md:bg-transparent
                flex flex-col md:flex-row
                items-center
                gap-2 md:gap-6
                px-4 md:px-0
                py-6 md:py-0
                border-b md:border-0
                border-[#D1FAE5] dark:border-[#2E2E3A]
              "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <li className="md:mr-4">
                <ThemeToggle />
              </li>

              {sections.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="w-full md:w-auto"
                >
                  <button
                    onClick={() => handleScroll(link)}
                    className={`
                      w-full md:w-auto
                      px-5 py-2
                      rounded-full
                      text-[15px] font-medium
                      transition-all duration-300
                      
                      ${
                        active === link
                          ? "bg-[#16A34A] dark:bg-[#7C3AED] text-white shadow-md"
                          : `
                            text-[#0F172A] dark:text-[#D4D4D8]
                            hover:bg-[#DCFCE7] 
                            dark:hover:bg-[#1E1E2A]
                          `
                      }
                    `}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
