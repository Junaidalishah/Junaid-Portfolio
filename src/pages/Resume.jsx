import { FaGraduationCap, FaBriefcase, FaDownload } from "react-icons/fa";

function Resume() {
  const education = [
    {
      school: "Bacha Khan University",
      degree: "BS Computer Science",
      period: "2022 — 2026",
      status: "Current"
    },
    {
      school: "Govt. College Charsadda",
      degree: "FSc. Computer Science (HSSC)",
      period: "2020 — 2022",
      status: "Completed"
    }
  ];

  const experience = [
    {
      title: "Course in Frontend Development",
      company: "Saylani Mass IT Training Program",
      period: "Aug 2024 — Feb 2025",
      location: "Peshawar, Pakistan",
      details: [
        "Mastered modern frontend technologies including HTML5, CSS3, JavaScript (ES6+), and React.",
        "Developed responsive and interactive web applications with a focus on user experience.",
        "Collaborated on project-based learning to solve real-world development challenges."
      ]
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
      <header className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Career Path</h2>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Resume
        </h1>
        <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Education Column */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <FaGraduationCap className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>

          <div className="space-y-8 border-l-2 border-gray-100 pl-8 dark:border-gray-800">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-blue-600 dark:border-gray-900" />
                <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-100 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <span className="mb-2 inline-block text-xs font-bold text-blue-600 dark:text-blue-400">{edu.period}</span>
                  <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{edu.school}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Column */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              <FaBriefcase className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
          </div>

          <div className="space-y-8 border-l-2 border-gray-100 pl-8 dark:border-gray-800">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-purple-600 dark:border-gray-900" />
                <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-purple-100 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <span className="mb-2 inline-block text-xs font-bold text-purple-600 dark:text-purple-400">{exp.period}</span>
                  <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">{exp.title}</h3>
                  <p className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-gray-500 dark:text-gray-500">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-300" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="/Junaid_Ali_CV.pdf"
          download
          className="group flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-black hover:shadow-2xl dark:bg-white dark:text-black dark:hover:bg-gray-100"
        >
          <FaDownload className="transition-transform group-hover:translate-y-1" />
          Download Full Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
