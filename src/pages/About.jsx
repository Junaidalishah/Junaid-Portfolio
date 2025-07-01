import { FaBootstrap, FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { SiFirebase, SiJavascript, SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <div className="text-gray-800 dark:text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
          About Me
        </h1>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
      </div>

      <div className="mb-12 space-y-6">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm a Frontend Web Developer and currently a 7th semester BS Computer
          Science student. I enjoy creating modern, responsive websites and
          continuously learning new technologies to improve my craft.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I am seeking a frontend development internship to gain real-world
          experience and contribute to impactful projects.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
          Skills & Technologies
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="rounded-xl bg-orange-100 p-4 transition-colors duration-300 group-hover:bg-orange-200 dark:bg-orange-900/30">
              <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />
            </div>
            <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-orange-500 dark:text-gray-300">
              HTML5
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="rounded-xl bg-sky-100 p-4 transition-colors duration-300 group-hover:bg-sky-200 dark:bg-sky-900/30">
              <FaCss3 className="text-4xl text-sky-500 lg:text-5xl" />
            </div>
            <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500 dark:text-gray-300">
              CSS3
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="rounded-xl bg-yellow-100 p-4 transition-colors duration-300 group-hover:bg-yellow-200 dark:bg-yellow-900/30">
              <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />
            </div>
            <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-yellow-500 dark:text-gray-300">
              JavaScript
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="rounded-xl bg-cyan-100 p-4 transition-colors duration-300 group-hover:bg-cyan-200 dark:bg-cyan-900/30">
              <FaReact className="text-4xl text-cyan-500 lg:text-5xl" />
            </div>
            <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-cyan-500 dark:text-gray-300">
              React
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="rounded-xl bg-purple-100 p-4 transition-colors duration-300 group-hover:bg-purple-200 dark:bg-purple-900/30">
              <FaBootstrap className="text-4xl text-purple-600 lg:text-5xl" />
            </div>
            <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-purple-600 dark:text-gray-300">
              Bootstrap
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
          <a
            href="https://tailwindcss.com/docs/installation/using-vite"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="rounded-xl bg-sky-100 p-4 transition-colors duration-300 group-hover:bg-sky-200 dark:bg-sky-900/30">
              <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />
            </div>
            <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-sky-400 dark:text-gray-300">
              Tailwind CSS
            </span>
          </a>
        </div>

        <div className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="rounded-xl bg-amber-100 p-4 transition-colors duration-300 group-hover:bg-amber-200 dark:bg-amber-900/30">
              <SiFirebase className="text-4xl text-amber-500 lg:text-5xl" />
            </div>
            <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-amber-500 dark:text-gray-300">
              Firebase
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;