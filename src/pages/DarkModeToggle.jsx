import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/useDarkMode";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200/50 bg-white/70 text-gray-600 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:text-blue-600 dark:border-gray-700/50 dark:bg-gray-800/70 dark:text-gray-400 dark:hover:text-blue-400"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <HiOutlineSun className="h-5 w-5" />
      ) : (
        <HiOutlineMoon className="h-5 w-5" />
      )}
    </button>
  );
}

export default DarkModeToggle;
