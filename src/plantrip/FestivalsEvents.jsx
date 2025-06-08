// src/components/FestivalsEvents.jsx

import React from 'react';

const FestivalsEvents = () => {
  const events = [
    {
      name: 'Diwali (Festival of Lights)',
      date: 'October/November (Dates vary)',
      description: 'The most important and widely celebrated Hindu festival, symbolizing the victory of light over darkness.',
    },
    {
      name: 'Holi (Festival of Colors)',
      date: 'March (Dates vary)',
      description: 'A vibrant and joyous Hindu festival celebrating spring, love, and new life, often involving playful throwing of colored powders.',
    },
    {
      name: 'Pushkar Camel Fair',
      date: 'November (Dates vary)',
      description: 'An annual five-day livestock fair and cultural festival in Pushkar, Rajasthan, attracting thousands of camels and cattle.',
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-3xl font-semibold text-green-700 mb-4">Festivals & Events</h3>
      <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 mb-4">
          India's calendar is dotted with countless festivals and events, offering unique cultural experiences.
          Here are a few prominent ones:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-purple-800 mb-1">{event.name}</h4>
              <p className="text-sm text-gray-600 mb-2"><strong>When:</strong> {event.date}</p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <em>Festival dates vary annually based on lunar calendars. Please verify for your travel dates.</em>
        </p>
      </div>
    </div>
  );
};

export default FestivalsEvents;