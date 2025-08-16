import React from "react";
import logo from "../logo.png"; // replace with your logo path

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 py-4 px-8 shadow-lg z-50 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 rounded-full border-2 border-[#5586F7] shadow-[0_0_10px_rgba(85,134,247,0.8)]"
        />
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5586F7] via-[#7BA8FF] to-[#5586F7] drop-shadow-[0_0_15px_rgba(85,134,247,0.8)]">
          Mohamed Mohy
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-gray-200 font-semibold">
        <li>
          <a href="#about" className="hover:text-[#5586F7] transition-colors">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#5586F7] transition-colors">Projects</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-[#5586F7] transition-colors">Skills</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#5586F7] transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
