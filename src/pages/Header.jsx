import { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import signature from "../assets/signature.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md dark:bg-gray-800/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              <img src={signature} alt="Signature" className="h-10 w-36" />
            </span>
          </div>

          <ul className="hidden gap-1 rounded-2xl bg-white/90 p-2 shadow-lg backdrop-blur-md md:flex lg:gap-2 lg:p-3 dark:bg-gray-800/90">
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 lg:px-6 lg:py-3 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="resume"
                className={({ isActive }) =>
                  `relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 lg:px-6 lg:py-3 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  `relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 lg:px-6 lg:py-3 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contacts"
                className={({ isActive }) =>
                  `relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 lg:px-6 lg:py-3 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <DarkModeToggle />

            <button
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:text-gray-800 md:hidden dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="h-5 w-5" />
              ) : (
                <HiMenuAlt3 className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
        >
          <ul className="space-y-2 bg-white/95 p-4 backdrop-blur-md dark:bg-gray-800/95">
            <li>
              <NavLink
                to="about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="resume"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contacts"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
