import Wise from "../assets/Wise.jpg";
import Movie from "../assets/Movie.jpg";
import Quiz from "../assets/Quiz.jpg";
import Far from "../assets/Far.jpg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "WorldWise",
      description: "A sophisticated travel tracking application that allows users to log their journeys on an interactive map.",
      image: Wise,
      github: "https://github.com/Junaidalishah/WorldWise",
      demo: null,
      tags: ["React", "Leaflet", "Context API"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "usePopcorn",
      description: "An interactive movie database search app where users can rate and save movies to their watchlist.",
      image: Movie,
      github: "https://github.com/Junaidalishah/usepopcor",
      demo: "https://usepopcor-ycmu.vercel.app/",
      tags: ["React", "OMDb API", "Hooks"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "React Quiz",
      description: "A high-performance quiz application featuring real-time score tracking and custom difficulty levels.",
      image: Quiz,
      github: "https://github.com/Junaidalishah/react-quiz",
      demo: null,
      tags: ["React", "useReducer", "CSS Modules"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Far Away",
      description: "A travel packing list manager designed to help travelers organize their essentials for upcoming trips.",
      image: Far,
      github: "https://github.com/Junaidalishah/FAR-AWAY",
      demo: null,
      tags: ["React", "Props", "State"],
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
      <header className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Portfolio</h2>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Featured Projects
        </h1>
        <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900"
          >
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40`}></div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                {project.description}
              </p>

              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gray-900 py-3 text-sm font-bold text-white transition-all hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <FaGithub className="text-lg" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
