import { MdEmail } from "react-icons/md";
import Logo from "./Logo";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="row-span-full mt-4 px-4 py-6 dark:from-gray-800 dark:to-gray-900 lg:mt-10 lg:px-6">
      <div className="flex justify-center">
        <div className="w-full max-w-sm rounded-2xl bg-white p-4 shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-700 sm:p-6 lg:w-[276px] lg:p-8">
          <div className="mb-4 flex justify-center lg:mb-6">
            <div className="relative">
              <div className="h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                <div className="h-full w-full rounded-xl bg-white p-1">
                  <Logo />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full border-2 border-white bg-green-500 shadow-md sm:h-6 sm:w-6"></div>
            </div>
          </div>

          <div className="mb-4 text-center lg:mb-6">
            <h1 className="mb-2 text-lg font-bold text-gray-800 dark:text-white sm:text-xl lg:text-2xl">
              Junaid Ali Shah
            </h1>
            <span className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-medium text-white shadow-md sm:px-4 sm:py-2 sm:text-sm">
              Frontend Web Developer
            </span>
          </div>

          <div className="mb-4 flex justify-center lg:mb-6">
            <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="group flex items-center gap-3 rounded-xl p-2 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-600 sm:gap-4 sm:p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-600 shadow-md transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12">
                <MdEmail className="text-base text-white sm:w-[46px] sm:text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  EMAIL
                </p>
                <a
                  href="mailto:sjunaidali47@gmail.com"
                  className="block truncate text-xs font-medium text-gray-800 transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 sm:text-sm"
                >
                  sjunaidali47@gmail.com
                </a>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl p-2 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-600 sm:gap-4 sm:p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-md transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12">
                <FaWhatsapp className="text-base text-white sm:text-lg" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  WHATSAPP
                </p>
                <a
                  href="https://wa.me/923102991736?text=Hi%20Junaid%2C%20I%20saw%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-gray-800 transition-colors duration-200 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400 sm:text-sm"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl p-2 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-600 sm:gap-4 sm:p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-md transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12">
                <HiLocationMarker className="text-base text-white sm:text-lg" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  LOCATION
                </p>
                <a
                  href="https://www.google.com/maps?q=Peshawar+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-gray-800 transition-colors duration-200 hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400 sm:text-sm"
                >
                  Peshawar, Pakistan
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-3 sm:space-x-4 lg:mt-8">
            <a
              href="https://github.com/Junaidalishah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-white shadow-md transition-all duration-200 hover:scale-110 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 sm:h-12 sm:w-12"
            >
              <FaGithub className="text-base sm:text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/junaid-ali-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md transition-all duration-200 hover:scale-110 hover:bg-blue-700 sm:h-12 sm:w-12"
            >
              <FaLinkedin className="text-base sm:text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
