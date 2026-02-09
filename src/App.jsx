import { useState } from "react";
import Sidebar from "./pages/Sidebar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import DarkModeToggle from "./pages/DarkModeToggle";
import MainNav from "./pages/MainNav";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contacts />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100">
      {/* Navigation Overlay */}
      <MainNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Theme Toggle Overlay */}
      <div className="fixed right-6 top-6 z-50 lg:right-10 lg:top-8">
        <DarkModeToggle />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 lg:gap-8">
          {/* Sidebar Section */}
          <aside className="lg:sticky lg:top-24 lg:col-span-4 lg:h-fit mb-8 lg:mb-0">
            <Sidebar />
          </aside>

          {/* Main Content Section */}
          <main className="lg:col-span-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 dark:bg-gray-800 sm:p-12">
              {renderSection()}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Junaid Ali Shah. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}
