import { FaGraduationCap, FaBriefcase, FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <div className="text-gray-800 dark:text-white">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl dark:text-white">
          Resume
        </h1>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 sm:w-20"></div>
      </div>

      <section className="mb-12 sm:mb-16">
        <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
          <div className="rounded-xl bg-blue-100 p-2 sm:p-3 dark:bg-blue-900/30">
            <FaGraduationCap className="text-xl text-blue-600 sm:text-2xl dark:text-blue-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl dark:text-white">
            Education
          </h2>
        </div>

        <div className="relative space-y-6 border-l-2 border-gray-200 pl-6 sm:space-y-8 sm:pl-8 dark:border-gray-600">
          <div className="relative">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md sm:-left-[13px] sm:h-6 sm:w-6" />
            <div className="rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg sm:p-6 dark:bg-gray-700">
              <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                Bacha Khan University
              </h3>
              <p className="mb-2 text-sm text-gray-600 sm:text-base dark:text-gray-300">
                BS Computer Science
              </p>
              <p className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 sm:px-3 sm:text-sm dark:bg-blue-900/30 dark:text-blue-300">
                2022 — 2026
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md sm:-left-[13px] sm:h-6 sm:w-6" />
            <div className="rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg sm:p-6 dark:bg-gray-700">
              <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                Govt. College Charsadda
              </h3>
              <p className="mb-2 text-sm text-gray-600 sm:text-base dark:text-gray-300">
                FSc. Computer Science (HSSC)
              </p>
              <p className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 sm:px-3 sm:text-sm dark:bg-blue-900/30 dark:text-blue-300">
                2020 — 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 sm:mb-12">
        <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
          <div className="rounded-xl bg-green-100 p-2 sm:p-3 dark:bg-green-900/30">
            <FaBriefcase className="text-xl text-green-600 sm:text-2xl dark:text-green-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl dark:text-white">
            Experience
          </h2>
        </div>

        <div className="relative space-y-6 border-l-2 border-gray-200 pl-6 sm:space-y-8 sm:pl-8 dark:border-gray-600">
          <div className="relative">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-md sm:-left-[13px] sm:h-6 sm:w-6" />
            <div className="rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg sm:p-6 dark:bg-gray-700">
              <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                Course in Frontend Development
              </h3>
              <p className="mb-2 text-sm text-gray-600 sm:text-base dark:text-gray-300">
                Saylani Mass IT Training Program
              </p>
              <p className="mb-2 inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 sm:px-3 sm:text-sm dark:bg-green-900/30 dark:text-green-300">
                Aug, 2024 — Feb, 2025 • 7 mos
              </p>
              <p className="mb-3 text-xs text-gray-500 sm:mb-4 sm:text-sm dark:text-gray-400">
                📍 Peshawar, Pakistan
              </p>
              <ul className="space-y-1 text-sm text-gray-700 sm:space-y-2 sm:text-base dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-blue-500 sm:mt-2.5 sm:h-1.5 sm:w-1.5"></span>
                  <span>Covered HTML, CSS, JavaScript, React.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-blue-500 sm:mt-2.5 sm:h-1.5 sm:w-1.5"></span>
                  <span>
                    Worked on various projects to enhance front-end development
                    skills.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <a
          href="/Junaid_Ali_CV.pdf"
          download
          className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
        >
          <FaDownload className="text-sm transition-transform duration-300 group-hover:scale-110 sm:text-base" />
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Resume;