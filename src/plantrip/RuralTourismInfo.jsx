// src/components/RuralTourismInfo.jsx

import React from 'react';

const RuralTourismInfo = () => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Rural Tourism: Exquisite Crafts, People & Culture</h2>
      <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 mb-4">
          Rural tourism in India offers a unique opportunity to experience the authentic heart of the country.
          It's a journey into vibrant traditions, skilled craftsmanship, and the warmth of local communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <h3 className="text-xl font-medium text-yellow-800 mb-2">Exquisite Crafts</h3>
            <p className="text-gray-700">
              Witness artisans at work, creating intricate textiles, pottery, woodwork, metal crafts, and more,
              often passed down through generations. Many rural areas specialize in unique crafts like:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Pottery from various regions</li>
              <li>Handloom weaving (e.g., silk, cotton, wool)</li>
              <li>Block printing and tie-dye</li>
              <li>Terracotta art</li>
              <li>Wood carving and metal craft</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-yellow-800 mb-2">People and Culture</h3>
            <p className="text-gray-700">
              Immerse yourself in the daily life of rural communities, participate in local festivals,
              savor traditional cuisine, and learn about indigenous customs and folklore.
              Experience genuine hospitality and the rich cultural tapestry that defines rural India.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Homestays with local families</li>
              <li>Participation in village activities (farming, cooking)</li>
              <li>Traditional music and dance performances</li>
              <li>Storytelling sessions</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          <em>These experiences foster sustainable tourism and support local livelihoods.</em>
        </p>
      </div>
    </div>
  );
};

export default RuralTourismInfo;