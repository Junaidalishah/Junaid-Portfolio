function MainNav() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    element?.scrollIntoView({ behavior: "smooth" });

    window.history.pushState(null, null, targetId);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md dark:bg-gray-800/95">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <ul className="flex gap-2 rounded-2xl bg-white/90 p-2 shadow-lg backdrop-blur-md dark:bg-gray-800/90 lg:gap-4 lg:p-3">
            {[
              { href: "#about", label: "About" },
              { href: "#resume", label: "Resume" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white lg:px-6 lg:py-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
