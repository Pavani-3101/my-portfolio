import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gray-900 text-white sticky top-0 z-50">

      <h1 className="text-2xl font-bold">Pavani Manupati </h1>

      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#experience" className="hover:text-blue-400">Experience</a>
        <a href="#certificates" className="hover:text-blue-400">Certificates</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;