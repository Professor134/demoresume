import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo_l from "../assets/logo_l.png";
import logo_d from "../assets/logo_d.png";

const sections = ["home", "profile", "projects", "skills", "contact","footer"];


const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setMenuOpen(false);
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
    <nav className="sticky top-0 z-50  p-4 shadow-md rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
          <img src={logo_l} alt="Logo" className="w-20 h-20 block dark:hidden" />
          <img src={logo_d} alt="Logo" className="w-20 h-20 hidden dark:block" />
        {/* Hamburger Icon (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className=" text-black  dark:text-white text-2xl focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} />           
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li><ThemeToggle /></li>
          {sections.map((link) => (
            <li key={link}>
              <button onClick={() => handleScroll(link)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${active === link ? 'bg-blue-500 text-white' : 'text-black dark:text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden mt-2 bg-sky-200/50 dark:bg-gray-700/50 backdrop-blur-md p-4 rounded-md space-y-2">
          <li><ThemeToggle /></li>
          {sections.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${active === link ? 'bg-black dark:bg-blue-500 text-white' : 'text-black hover:bg-gray-600 hover:text-white'}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            </li>
          ))}
        </ul>   
      )}
    </nav>
  );
};

export default Navbar;
