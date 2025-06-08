// src/components/IncredibleIndiaLink.jsx

import React from 'react';

const IncredibleIndiaLink = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-xl text-gray-800 mb-4">
        For more comprehensive information about tourism in India, visit the official
      </p>
      <a
        href="https://www.incredibleindia.gov.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        Incredible India Website
      </a>
    </div>
  );
};

export default IncredibleIndiaLink;