import { useMoveBack } from "./useMoveBack";
import { FaHome, FaArrowLeft } from "react-icons/fa";

function PageNotFound() {
  const moveBack = useMoveBack();
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl dark:bg-gray-800">
        <div className="mb-6">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-4xl text-white">
            404
          </div>
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The page you are looking for could not be found 😢
          </p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={moveBack}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <FaArrowLeft />
            Go Back
          </button>
          <a
            href="/"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            <FaHome />
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;