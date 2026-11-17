import React, { useEffect, useState } from "react";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      className="
        ml-2 md:ml-4
        px-3 md:px-5
        py-2
        rounded-full
        text-lg md:text-xl
        font-medium
        transition-all duration-300 ease-in-out
        bg-green-100 text-green-700
        hover:bg-green-200
        dark:bg-purple-900
        dark:text-purple-300
        dark:hover:bg-purple-800
        shadow-sm
        dark:shadow-lg
      "
    >
      <FontAwesomeIcon icon={faCircleHalfStroke} />
    </button>
  );
};

export default ThemeToggle;