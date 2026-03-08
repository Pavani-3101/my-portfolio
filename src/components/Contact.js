import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-black text-white text-center">

      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-300">pavanimanupati2005@gmail.com</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4">🐙</div>
          <h3 className="text-xl font-semibold mb-2">GitHub</h3>
          <a href="https://github.com/Pavani-3101" className="text-blue-400 hover:text-blue-300 transition-colors">Pavani-3101</a>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4">💼</div>
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <a href="https://www.linkedin.com/in/pavani-manupati-835824286" className="text-blue-400 hover:text-blue-300 transition-colors">pavani-manupati-835824286</a>
        </div>

      </div>

    </section>
  );
}

export default Contact;