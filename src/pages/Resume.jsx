import { FaGraduationCap, FaBriefcase, FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <div className="text-gray-800 dark:text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
          Resume
        </h1>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
      </div>

      <section className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
            <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
            Education
          </h2>
        </div>

        <div className="relative space-y-8 border-l-2 border-gray-200 pl-8 dark:border-gray-600">
          <div className="relative">
            <div className="absolute -left-[13px] top-2 h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md" />
            <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Bacha Khan University
              </h3>
              <p className="mb-2 text-gray-600 dark:text-gray-300">
                BS Computer Science
              </p>
              <p className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                2022 — 2026
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[13px] top-2 h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md" />
            <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Govt. College Charsadda
              </h3>
              <p className="mb-2 text-gray-600 dark:text-gray-300">
                FSc. Computer Science (HSSC)
              </p>
              <p className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                2020 — 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-xl bg-green-100 p-3 dark:bg-green-900/30">
            <FaBriefcase className="text-2xl text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
            Experience
          </h2>
        </div>

        <div className="relative space-y-8 border-l-2 border-gray-200 pl-8 dark:border-gray-600">
          <div className="relative">
            <div className="absolute -left-[13px] top-2 h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-md" />
            <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Course in Frontend Development
              </h3>
              <p className="mb-2 text-gray-600 dark:text-gray-300">
                Saylani Mass IT Training Program
              </p>
              <p className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                Aug, 2024 — Feb, 2025 • 7 mos
              </p>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                📍 Peshawar, Pakistan
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  <span>Covered HTML, CSS, JavaScript, React.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
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
          className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <FaDownload className="transition-transform duration-300 group-hover:scale-110" />
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Resume;
