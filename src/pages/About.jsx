import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { SiFirebase, SiJavascript, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

function About() {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/20", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: FaCss3, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/20", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500", bg: "bg-yellow-100 dark:bg-yellow-900/20", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20", link: "https://www.typescriptlang.org/" },
    { name: "React", icon: FaReact, color: "text-cyan-500", bg: "bg-cyan-100 dark:bg-cyan-900/20", link: "https://react.dev/" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400", bg: "bg-sky-100 dark:bg-sky-900/20", link: "https://tailwindcss.com/" },
    { name: "Vite", icon: SiVite, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/20", link: "https://vitejs.dev/" },
    { name: "Firebase", icon: SiFirebase, color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/20", link: "https://firebase.google.com/" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-12">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">Introduction</h2>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          About Me
        </h1>
        <div className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
      </header>

      <div className="mb-16 space-y-8">
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
          I'm a <span className="font-bold text-gray-900 dark:text-white">Frontend Web Developer</span> and currently a 8th semester BS Computer Science student. I specialize in building high-performance, accessible, and visually stunning web applications.
        </p>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
          My focus is on creating seamless user experiences through clean code and modern design patterns. I'm currently seeking a <span className="font-bold text-blue-600 dark:text-blue-400">Frontend Development Internship</span> to apply my skills to real-world challenges.
        </p>
      </div>

      <section>
        <h3 className="mb-10 text-2xl font-black tracking-tight text-gray-900 dark:text-white">Tech Stack</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:border-blue-900"
            >
              <div className={`mb-4 rounded-2xl ${skill.bg} p-4 transition-transform duration-300 group-hover:scale-110`}>
                <skill.icon className={`text-3xl ${skill.color} sm:text-4xl`} />
              </div>
              <span className="text-sm font-bold tracking-tight text-gray-800 dark:text-gray-200">{skill.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
