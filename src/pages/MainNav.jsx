import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function MainNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md dark:bg-gray-800/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <ul className="flex gap-1 rounded-2xl bg-white/90 p-2 shadow-lg backdrop-blur-md lg:gap-2 lg:p-3 dark:bg-gray-800/90">
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
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
