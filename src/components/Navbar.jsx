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
      className="top-0 z-50 rounded-lg w-full bg-white dark:bg-gray-900 shadow-md px-4 py-2"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div onClick={() => handleScroll("home")} className="cursor-pointer">
          <motion.img
            src={logo_l}
            alt="Logo"
            className="w-16 h-16 block dark:hidden"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 20 }}
            whileHover={{ rotateY: 360 }}
            transition={{ duration: 2 }}
          />
          <motion.img
            src={logo_d}
            alt="Logo"
            className="w-16 h-16 hidden dark:block"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 20 }}
            whileHover={{ rotateY: 360 }}
            transition={{ duration: 2 }}
          />
        </div>

        {/* Hamburger toggle only for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black dark:text-white text-2xl focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Nav Items - horizontal, hidden on small screens unless toggled */}
        <AnimatePresence>
          {(menuOpen || window.innerWidth >= 768) && (
            <motion.ul
              className={`flex flex-wrap justify-center items-center w-full md:w-auto gap-2 md:gap-4 mt-4 md:mt-0`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li><ThemeToggle /></li>
              {sections.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    onClick={() => handleScroll(link)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200
                      ${
                        active === link
                          ? "bg-blue-500 text-white"
                          : "text-black dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
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
