import React from "react";

function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-blue-900 to-black text-white text-center">

      <h2 className="text-4xl font-bold mb-10">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        <div className="p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-white">
          <h3 className="text-xl font-semibold">
            Salesforce Certified Agentforce Specialist
          </h3>
          <p className="text-gray-400">2025</p>
        </div>

        <div className="p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-white">
          <h3 className="text-xl font-semibold">
            Python for Beginners
          </h3>
          <p className="text-gray-400">Infosys Springboard • 2023</p>
        </div>

        <div className="p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-white">
          <h3 className="text-xl font-semibold">
            Problem Solving Through Programming in C
          </h3>
          <p className="text-gray-400">NPTEL • 2024</p>
        </div>

        <div className="p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-white">
          <h3 className="text-xl font-semibold">
            Deloitte Data Analytics Job Simulation
          </h3>
          <p className="text-gray-400">Forage • 2024</p>
        </div>

        <div className="p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-white">
          <h3 className="text-xl font-semibold">
            CBIT COSC Hackathon Participation
          </h3>
          <p className="text-gray-400">2024</p>
        </div>

      </div>

    </section>
  );
}

export default Certificates;