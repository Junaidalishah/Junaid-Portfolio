import { MdEmail } from "react-icons/md";
import Logo from "./Logo";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="row-span-full mt-10 from-gray-50 to-gray-100 px-4 py-6 lg:px-6 dark:from-gray-800 dark:to-gray-900">
      <div className="flex justify-center">
        <div className="w-[276px] max-w-sm rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl lg:p-8 dark:bg-gray-700">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="h-24 w-24 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg lg:h-28 lg:w-28">
                <div className="h-full w-full rounded-xl bg-white p-1">
                  <Logo />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full border-2 border-white bg-green-500 shadow-md"></div>
            </div>
          </div>

          <div className="mb-6 text-center">
            <h1 className="mb-2 text-xl font-bold text-gray-800 lg:text-2xl dark:text-white">
              Junaid Ali Shah
            </h1>
            <span className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md">
              Frontend Web Developer
            </span>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
          </div>

          <div className="space-y-4">
            <div className="group flex items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-600 shadow-md transition-transform duration-200 group-hover:scale-110">
                <MdEmail className="w-[46px] text-lg text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  EMAIL
                </p>
                <a
                  href="mailto:sjunaidali47@gmail.com"
                  className="text-sm font-medium text-gray-800 transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  sjunaidali47@gmail.com
                </a>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-md transition-transform duration-200 group-hover:scale-110">
                <FaWhatsapp className="text-lg text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  WHATSAPP
                </p>
                <a
                  href="https://wa.me/923102991736?text=Hi%20Junaid%2C%20I%20saw%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-800 transition-colors duration-200 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-md transition-transform duration-200 group-hover:scale-110">
                <HiLocationMarker className="text-lg text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  LOCATION
                </p>
                <a
                  href="https://www.google.com/maps?q=Peshawar+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-800 transition-colors duration-200 hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400"
                >
                  Peshawar, Pakistan
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://github.com/Junaidalishah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-white shadow-md transition-all duration-200 hover:scale-110 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/junaid-ali-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md transition-all duration-200 hover:scale-110 hover:bg-blue-700"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
