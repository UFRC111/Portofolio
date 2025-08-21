import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger
import logo from "../logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 py-4 px-6 shadow-lg z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-[#5586F7] shadow-[0_0_10px_rgba(85,134,247,0.8)]"
          />
          <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5586F7] via-[#7BA8FF] to-[#5586F7] drop-shadow-[0_0_15px_rgba(85,134,247,0.8)]">
            Mohamed Mohy
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-200 font-semibold">
          <li>
            <a href="#about" className="hover:text-[#5586F7] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#5586F7] transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#5586F7] transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#5586F7] transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col mt-4 gap-4 text-gray-200 font-semibold bg-gray-900 bg-opacity-95 rounded-lg p-4 shadow-lg">
          <li>
            <a
              href="#about"
              className="hover:text-[#5586F7] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#5586F7] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-[#5586F7] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#5586F7] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
