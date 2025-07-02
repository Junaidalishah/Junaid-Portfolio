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
      description: "A Travel Tracker Web App",
      image: Wise,
      github: "https://github.com/Junaidalishah/WorldWise",
      demo: null,
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "usePopcorn",
      description: "Movie search app",
      image: Movie,
      github: "https://github.com/Junaidalishah/usepopcor",
      demo: "https://usepopcor-ycmu.vercel.app/",
      tags: ["React", "API", "JavaScript"],
    },
    {
      id: 3,
      title: "React Quiz",
      description: "React Quiz App",
      image: Quiz,
      github: "https://github.com/Junaidalishah/react-quiz",
      demo: null,
      tags: ["React", "State Management"],
    },
    {
      id: 4,
      title: "Far Away",
      description: "Far Away Travel",
      image: Far,
      github: "https://github.com/Junaidalishah/FAR-AWAY",
      demo: null,
      tags: ["React", "Components"],
    },
  ];

  return (
    <div className="text-gray-800 dark:text-white">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white sm:mb-4 sm:text-3xl lg:text-4xl">
          Projects
        </h1>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 sm:w-20"></div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110 sm:h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            {/* Project Content */}
            <div className="p-4 sm:p-6">
              <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                {project.title}
              </h2>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-300 sm:mb-4 sm:text-base">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-3 flex flex-wrap gap-1 sm:mb-4 sm:gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 sm:px-3"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 sm:gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-xl bg-gray-800 px-3 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 sm:gap-2 sm:px-4 sm:text-sm"
                >
                  <FaGithub className="text-xs sm:text-sm" />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-2 text-xs font-medium text-white transition-all duration-200 hover:scale-105 sm:gap-2 sm:px-4 sm:text-sm"
                  >
                    <FaExternalLinkAlt className="text-xs sm:text-sm" />
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
