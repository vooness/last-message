"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMessageSquare, FiUser } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-12 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-[#ffddd8] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#home"
        className="flex items-center gap-2 text-lg font-extrabold text-gray-800"
      >
        <FiMessageSquare size={33} className="text-gray-800" />
        <span>Last Message</span>
      </a>

      {/* Language Selector (Mobile - Left of Menu) */}
      <div className="md:hidden">
        <select className="bg-[#ffddd8] border border-gray-300 text-gray-800 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600">
          <option value="cz">CZ</option>
          <option value="en">ENG</option>
          <option value="de">DE</option>
          <option value="pl">PL</option>
        </select>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center">
        <a
          href="#home"
          className="text-gray-800 hover:text-blue-500 relative group"
        >
         Hlavní stránka
          <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#features"
          className="text-gray-800 hover:text-blue-500 relative group"
        >
           Naše služby
          <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#pricing"
          className="text-gray-800 hover:text-blue-500 relative group"
        >
          Ceník
          <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#contact"
          className="text-gray-800 hover:text-blue-500 relative group"
        >
          Kontakt
          <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#contact"
          className="text-gray-800 hover:text-blue-500 relative group"
        >
          O nás
          <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#contact"
          className="text-gray-800 hover:text-blue-500 relative group"
        >
          FAQ
          <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

      {/* Actions (Language & Login) */}
      <div className="hidden md:flex items-center gap-6">
        {/* Language Selector */}
        <select className="bg-transparent border border-gray-300 text-gray-800 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600">
          <option value="cz">CZ</option>
          <option value="en">ENG</option>
          <option value="de">DE</option>
          <option value="pl">PL</option>
        </select>
        {/* Login */}
        <button className="flex items-center gap-2 text-gray-800 hover:text-blue-500">
          <FiUser size={20} />
          <span>Přihlásit se</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button
          className="text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center py-4 gap-4 md:hidden">
          <a href="#home" className="text-gray-800 hover:text-blue-500">
            Hlavní stránka
          </a>
          <a href="#features" className="text-gray-800 hover:text-blue-500">
            Naše služby
          </a>
          <a href="#pricing" className="text-gray-800 hover:text-blue-500">
            Ceník
          </a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500">
            Kontakt
          </a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500">
            O nás
          </a>
          {/* Login */}
          <button className="flex items-center gap-2 text-gray-800 hover:text-blue-500">
            <FiUser size={20} />
            <span>Přihlásit se</span>
          </button>
        </div>
      )}
    </nav>
  );
}
