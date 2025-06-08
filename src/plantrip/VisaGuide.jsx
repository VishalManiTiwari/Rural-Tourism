// src/components/VisaGuide.jsx

import React from 'react';

const VisaGuide = () => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Visa Guide</h2>
      <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 mb-3">
          Most foreign nationals require a visa to enter India. The type of visa depends on your nationality and the purpose of your visit.
          Common visa types include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li><strong>e-Visa:</strong> Available for tourism, business, and medical visits for citizens of many countries. Apply online well in advance.</li>
          <li><strong>Regular Visa:</strong> Obtained from Indian Embassies or Consulates in your country of residence.</li>
        </ul>
        <p className="text-gray-700">
          For the most up-to-date and specific requirements, it is highly recommended to visit the official website of the Indian Ministry of Home Affairs or the Indian Embassy/Consulate in your country.
        </p>
        <a
          href="https://indianvisaonline.gov.in/visa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-3 inline-block"
        >
          Apply for Indian Visa Online (Official Website)
        </a>
      </div>
    </div>
  );
};

export default VisaGuide;