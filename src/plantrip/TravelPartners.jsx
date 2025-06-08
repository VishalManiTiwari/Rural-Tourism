import React from 'react';

const TravelPartners = () => {
  const partners = [
    { name: 'Air India', logo: 'https://via.placeholder.com/80x40/f8f8f8/000000?text=AirIndia', link: '#' }, // Replace with actual logos and links
    { name: 'Indigo Airlines', logo: 'https://via.placeholder.com/80x40/f8f8f8/000000?text=Indigo', link: '#' },
    { name: 'MakeMyTrip', logo: 'https://via.placeholder.com/80x40/f8f8f8/000000?text=MakeMyTrip', link: '#' },
    { name: 'Goibibo', logo: 'https://via.placeholder.com/80x40/f8f8f8/000000?text=Goibibo', link: '#' },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-3xl font-semibold text-green-700 mb-4">Our Travel Partners</h3>
      <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 mb-4">
          We collaborate with various airlines, tour operators, and booking platforms to ensure a seamless travel experience for our visitors.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          {partners.map((partner, index) => (
            <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-200">
              <img src={partner.logo} alt={partner.name} className="h-16 object-contain rounded-md" />
              <p className="text-center text-sm text-gray-600 mt-1">{partner.name}</p>
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <em>Disclaimer: Links to partners are for informational purposes. Please review their terms and conditions.</em>
        </p>
      </div>
    </div>
  );
};

export default TravelPartners;