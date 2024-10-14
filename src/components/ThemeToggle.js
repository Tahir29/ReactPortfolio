import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
      <span className="hidden">Light/Dark Theme</span>
    </button>
  );
};

export default ThemeToggle;
