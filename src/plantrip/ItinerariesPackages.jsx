// src/components/ItinerariesPackages.jsx

import React from 'react';

const ItinerariesPackages = () => {
  const packages = [
    {
      name: 'Himalayan Foothills Retreat',
      description: 'Explore the serene villages and majestic mountains of Uttarakhand. Includes village walks, local cuisine, and cultural interactions.',
      image: 'https://via.placeholder.com/300x200/90EE90/000000?text=Himalayan', // Placeholder image
      link: '#',
    },
    {
      name: 'Rajasthan Desert Trail',
      description: 'Discover the vibrant culture and history of rural Rajasthan with stays in traditional Havelis and desert safaris.',
      image: 'https://via.placeholder.com/300x200/ADD8E6/000000?text=Rajasthan',
      link: '#',
    },
    {
      name: 'Kerala Backwater Villages',
      description: 'Experience the tranquil backwaters, lush greenery, and unique village life of Kerala.',
      image: 'https://via.placeholder.com/300x200/DDA0DD/000000?text=Kerala',
      link: '#',
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Itineraries & Packages</h2>
      <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 mb-4">
          Discover specially curated itineraries and packages designed to offer authentic rural experiences across India.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-medium text-purple-800 mb-2">{pkg.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{pkg.description}</p>
                <a href={pkg.link} className="text-blue-600 hover:underline">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <em>More packages coming soon!</em>
        </p>
      </div>
    </div>
  );
};

export default ItinerariesPackages;