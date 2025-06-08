// src/components/AirportInfo.jsx

import React from 'react';

const AirportInfo = () => {
  const majorAirports = [
    { name: 'Indira Gandhi International Airport (DEL)', city: 'Delhi' },
    { name: 'Chhatrapati Shivaji Maharaj International Airport (BOM)', city: 'Mumbai' },
    { name: 'Kempegowda International Airport (BLR)', city: 'Bengaluru' },
    { name: 'Chennai International Airport (MAA)', city: 'Chennai' },
    { name: 'Netaji Subhas Chandra Bose International Airport (CCU)', city: 'Kolkata' },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-3xl font-semibold text-green-700 mb-4">Airport Information</h3>
      <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 mb-3">
          India has several international and domestic airports connecting major cities and regions.
          Here are some of the major international airports:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          {majorAirports.map((airport, index) => (
            <li key={index}>
              <strong>{airport.name}</strong> ({airport.city})
            </li>
          ))}
        </ul>
        <p className="mt-3 text-gray-700">
          Many rural destinations are accessible via regional airports, followed by road or rail.
          Check domestic flight connections for your specific rural destination.
        </p>
      </div>
    </div>
  );
};

export default AirportInfo;