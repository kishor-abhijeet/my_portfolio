import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";
const Navbar = ({ darkMode, setDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="fixed w-full z-50 bg-gray-300 dark:bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container  mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-3xl font-bold dark:text-white">
            Abhijeet
            <span className="text-cyan-600">Kishor</span>
            <div className="w-4 h-4 bg-cyan-600 rounded-full"></div>
          </a>
        </div>
        <div className="hidden font-semibold text-2xl md:flex space-x-10">
          <a
            href="#home"
            className="relative dark:text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Home</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative dark:text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>About</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative dark:text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Skills</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="relative dark:text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Projects</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#experiance"
            className="relative dark:text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Experiance</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative dark:text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Contact</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition duration-300 ${
              darkMode ? "bg-dark-400" : "bg-dark-300"
            }`}
          >
            <div
              className={`w-6 h-6  bg-white rounded-full shadow-md transform transition duration-300 flex items-center justify-center text-xs ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {darkMode ? "🌙" : "☀️"}
            </div>
          </button>
        </div>
        {/* Mobile button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile menus */}
      {showMenu && (
        <div
          className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg
        p-4 flex flex-col space-y-4 text-center justify-center"
        >
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Home</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>About</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Skills</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#projects"
            className="relative text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Projects</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="experiance"
            className="relative text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Experiance</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-cyan-600 group"
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
