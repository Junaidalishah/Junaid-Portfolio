import { MdEmail } from "react-icons/md";
import Logo from "./Logo";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="w-full">
      <div className="rounded-3xl bg-white p-6 shadow-xl transition-all duration-300 dark:bg-gray-800/50 dark:backdrop-blur-md sm:p-8">
        <div className="mb-6 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="h-32 w-32 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="h-full w-full rounded-[1.4rem] bg-white p-1 dark:bg-gray-800">
                <Logo />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-white bg-green-500 shadow-md dark:border-gray-800"></div>
          </div>

          <div className="text-center">
            <h1 className="mb-2 text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Junaid Ali Shah
            </h1>
            <span className="inline-block rounded-2xl bg-blue-600/10 px-4 py-1.5 text-xs font-bold text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              Frontend Web Developer
            </span>
          </div>
        </div>

        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"></div>

        <div className="space-y-4">
          <div className="group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-500/20 transition-transform duration-300 group-hover:scale-110">
              <MdEmail className="text-xl" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Email
              </p>
              <a
                href="mailto:sjunaidali47@gmail.com"
                className="block truncate text-sm font-bold text-gray-800 transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                sjunaidali47@gmail.com
              </a>
            </div>
          </div>

          <div className="group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg shadow-green-500/20 transition-transform duration-300 group-hover:scale-110">
              <FaWhatsapp className="text-xl" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Whatsapp
              </p>
              <a
                href="https://wa.me/923102991736?text=Hi%20Junaid%2C%20I%20saw%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-gray-800 transition-colors duration-200 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
              >
                WhatsApp Me
              </a>
            </div>
          </div>

          <div className="group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-110">
              <HiLocationMarker className="text-xl" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Location
              </p>
              <a
                href="https://www.google.com/maps?q=Peshawar+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-gray-800 transition-colors duration-200 hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400"
              >
                Peshawar, Pakistan
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/Junaidalishah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/junaid-ali-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
