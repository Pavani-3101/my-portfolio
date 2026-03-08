import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-900 to-black text-white text-center">

      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="text-left max-w-4xl mx-auto">

        <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Languages</h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Python</li>
            <li>C</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Concepts</h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Object-Oriented Programming (OOP)</li>
            <li>Data Structures & Algorithms (DSA)</li>
            <li>DBMS</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Tools</h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Google Colab</li>
            <li>VS Code</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;