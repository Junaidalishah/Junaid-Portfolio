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
      tags: ["React", "CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "usePopcorn",
      description: "Movie search app",
      image: Movie,
      github: "https://github.com/Junaidalishah/usepopcor",
      demo: "https://usepopcor-ycmu.vercel.app/",
      tags: ["React", "API", "JavaScript"]
    },
    {
      id: 3,
      title: "React Quiz",
      description: "React Quiz App",
      image: Quiz,
      github: "https://github.com/Junaidalishah/react-quiz",
      demo: null,
      tags: ["React", "State Management"]
    },
    {
      id: 4,
      title: "Far Away",
      description: "Far Away Travel",
      image: Far,
      github: "https://github.com/Junaidalishah/FAR-AWAY",
      demo: null,
      tags: ["React", "Components"]
    }
  ];

  return (
    <div className="text-gray-800 dark:text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
          Projects
        </h1>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
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
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
                >
                  <FaGithub className="text-sm" />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105"
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