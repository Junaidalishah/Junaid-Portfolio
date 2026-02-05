import { useEffect } from "react";
import Sidebar from "./pages/Sidebar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import DarkModeToggle from "./pages/DarkModeToggle";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="fixed right-4 top-4 z-50">
        <DarkModeToggle />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
          <aside className="lg:sticky lg:top-20 lg:col-span-1 lg:mt-20 lg:self-start">
            <Sidebar />
          </aside>

          <main className="lg:col-span-3">
            <section id="about" className="min-h-screen py-16">
              <About />
            </section>

            <section
              id="resume"
              className="min-h-screen bg-white py-16 dark:bg-gray-800"
            >
              <Resume />
            </section>

            <section id="projects" className="min-h-screen py-16">
              <Projects />
            </section>

            <section
              id="contact"
              className="min-h-screen bg-white py-16 dark:bg-gray-800"
            >
              <Contacts />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
