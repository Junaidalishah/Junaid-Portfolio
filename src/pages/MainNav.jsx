function MainNav({ activeSection, setActiveSection }) {
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 transform">
      <ul className="flex items-center gap-1 rounded-full border border-gray-200/50 bg-white/70 p-1.5 shadow-xl backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-800/70 sm:gap-2">
        {[
          { id: "about", label: "About" },
          { id: "resume", label: "Resume" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className={`relative block rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 sm:px-7 sm:py-2.5 sm:text-sm ${
                activeSection === item.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
