import { FaBootstrap, FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { SiFirebase, SiJavascript, SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <div className="text-gray-800 dark:text-white">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl dark:text-white">
          About Me
        </h1>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 sm:w-20"></div>
      </div>

      <div className="mb-8 space-y-4 sm:mb-12 sm:space-y-6">
        <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-gray-300">
          I'm a Frontend Web Developer and currently a 7th semester BS Computer
          Science student. I enjoy creating modern, responsive websites and
          continuously learning new technologies to improve my craft.
        </p>
        <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-gray-300">
          I am seeking a frontend development internship to gain real-world
          experience and contribute to impactful projects.
        </p>
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl lg:text-3xl dark:text-white">
          Skills & Technologies
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
        <div className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-3 sm:p-4 lg:p-6 dark:bg-gray-700">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 sm:gap-3"
          >
            <div className="rounded-xl bg-orange-100 p-2 transition-colors duration-300 group-hover:bg-orange-200 sm:p-3 lg:p-4 dark:bg-orange-900/30">
              <FaHtml5 className="text-2xl text-orange-500 sm:text-3xl lg:text-4xl xl:text-5xl" />
            </div>
            <span className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-orange-500 sm:text-sm dark:text-gray-300">
              HTML5
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-3 sm:p-4 lg:p-6 dark:bg-gray-700">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 sm:gap-3"
          >
            <div className="rounded-xl bg-sky-100 p-2 transition-colors duration-300 group-hover:bg-sky-200 sm:p-3 lg:p-4 dark:bg-sky-900/30">
              <FaCss3 className="text-2xl text-sky-500 sm:text-3xl lg:text-4xl xl:text-5xl" />
            </div>
            <span className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500 sm:text-sm dark:text-gray-300">
              CSS3
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-3 sm:p-4 lg:p-6 dark:bg-gray-700">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 sm:gap-3"
          >
            <div className="rounded-xl bg-yellow-100 p-2 transition-colors duration-300 group-hover:bg-yellow-200 sm:p-3 lg:p-4 dark:bg-yellow-900/30">
              <SiJavascript className="text-2xl text-yellow-500 sm:text-3xl lg:text-4xl xl:text-5xl" />
            </div>
            <span className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-yellow-500 sm:text-sm dark:text-gray-300">
              JavaScript
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-3 sm:p-4 lg:p-6 dark:bg-gray-700">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 sm:gap-3"
          >
            <div className="rounded-xl bg-cyan-100 p-2 transition-colors duration-300 group-hover:bg-cyan-200 sm:p-3 lg:p-4 dark:bg-cyan-900/30">
              <FaReact className="text-2xl text-cyan-500 sm:text-3xl lg:text-4xl xl:text-5xl" />
            </div>
            <span className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-cyan-500 sm:text-sm dark:text-gray-300">
              React
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-3 sm:p-4 lg:p-6 dark:bg-gray-700">
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 sm:gap-3"
          >
            <div className="rounded-xl bg-purple-100 p-2 transition-colors duration-300 group-hover:bg-purple-200 sm:p-3 lg:p-4 dark:bg-purple-900/30">
              <FaBootstrap className="text-2xl text-purple-600 sm:text-3xl lg:text-4xl xl:text-5xl" />
            </div>
            <span className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-purple-600 sm:text-sm dark:text-gray-300">
              Bootstrap
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-3 sm:p-4 lg:p-6 dark:bg-gray-700">
          <a
            href="https://tailwindcss.com/docs/installation/using-vite"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 sm:gap-3"
          >
            <div className="rounded-xl bg-sky-100 p-2 transition-colors duration-300 group-hover:bg-sky-200 sm:p-3 lg:p-4 dark:bg-sky-900/30">
              <SiTailwindcss className="text-2xl text-sky-400 sm:text-3xl lg:text-4xl xl:text-5xl" />
            </div>
            <span className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-400 sm:text-sm dark:text-gray-300">
              Tailwind CSS
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-3 sm:p-4 lg:p-6 dark:bg-gray-700">
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 sm:gap-3"
          >
            <div className="rounded-xl bg-amber-100 p-2 transition-colors duration-300 group-hover:bg-amber-200 sm:p-3 lg:p-4 dark:bg-amber-900/30">
              <SiFirebase className="text-2xl text-amber-500 sm:text-3xl lg:text-4xl xl:text-5xl" />
            </div>
            <span className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-amber-500 sm:text-sm dark:text-gray-300">
              Firebase
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;