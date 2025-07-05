import React, { useEffect, useState } from "react";
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setIsDark(savedTheme === "dark");
  }
}, []);

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="ml-4 px-4 py-2 rounded-md text-xl font-medium bg-transparent text-gray-900 dark:text-white hover:opacity-80 transition"
    >
      {isDark ? <FontAwesomeIcon icon={faCircleHalfStroke} /> : <FontAwesomeIcon icon={faCircleHalfStroke} />}
    </button>
  );
};

export default ThemeToggle;
