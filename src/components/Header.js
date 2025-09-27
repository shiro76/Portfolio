import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Nom */}
        <a href="/" className="text-2xl font-bold text-blue-600">MonPortfolio</a>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors">
                Accueil
              </a>
            </li>
            <li>
              <a href="/#skills" className="hover:text-blue-600 transition-colors">
                Compétences
              </a>
            </li>
            <li>
              <a href="/#projects" className="hover:text-blue-600 transition-colors">
                Projets
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
