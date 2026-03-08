import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-900 to-black text-white text-center">

      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 px-10 max-w-6xl mx-auto">

        <div className="bg-gray-800 p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-white">
          <h3 className="text-xl font-bold mb-2 text-blue-400">Mood Journal</h3>
          <p className="text-gray-200 leading-relaxed mb-4">
            Developed a mood-tracking application with six emojis, calendar-based logging, and emotion trend tracking. 
            <br></br>Enhanced user engagement through personalized quotes, music recommendations, and image-based journaling.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">HTML</span>
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">CSS</span>
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">JavaScript</span>
          </div>
        </div>

        <div className="bg-gray-800 p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-white">
          <h3 className="text-xl font-bold mb-2 text-blue-400">RecycleVision</h3>
          <p className="text-gray-200 leading-relaxed mb-4">
            Built an ML-based system to classify waste images as recyclable or non-recyclable using computer vision. 
            <br></br>Developed an interactive Streamlit web app for real-time image upload and prediction.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">Python</span>
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">scikit-learn</span>
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">OpenCV</span>
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">scikit-image</span>
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">NumPy</span>
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">Pandas</span>
            <span className="text-white px-3 py-1 rounded-full border border-gray-500 text-xs font-medium">Streamlit</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;