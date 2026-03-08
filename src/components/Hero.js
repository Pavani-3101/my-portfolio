import React from "react";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 to-black text-white text-center">

      <h1 className="text-6xl font-bold mb-6">
        Hi, I'm Pavani Manupati 
      </h1>

      <p className="text-2xl mb-4">
        Software Engineer | Web Developer | Problem Solver
      </p>

      

      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 text-white font-medium transition-colors">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 text-white font-medium transition-colors">
          Contact
        </a>
      </div>

    </section>
  );
}

export default Hero;