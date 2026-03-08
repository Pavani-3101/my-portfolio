import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-900 to-black text-white text-center">

      <h2 className="text-4xl font-bold mb-10">Experience</h2>

      <div className="max-w-3xl mx-auto">

        <div className="p-8 bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">
            AI Intern – Edunet Foundation
          </h3>
          <p className="text-gray-400 mb-4">
            Aug 2025 – Sep 2025
          </p>
          <ul className="text-gray-300 text-left list-disc ml-6 space-y-2">
            <li>
              Built a machine learning model to classify waste images as
              recyclable or non-recyclable using computer vision.
            </li>
            <li>
              Developed an interactive Streamlit web application
              for real-time image upload and prediction.
            </li>
            <li>
              Worked with Python, OpenCV, scikit-learn, NumPy, Pandas,
              and Streamlit.
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Experience;