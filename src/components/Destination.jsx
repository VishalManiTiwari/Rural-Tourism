import React, { useState } from 'react';
import StateUt from '../pages/StateUt';
import Destinations from '../pages/Destinations';
import NationalPark from '../pages/NationalPark';

const Destination = () => {
  const [activeTab, setActiveTab] = useState('states');

  const tabs = [
    { id: 'states', label: 'States and UTs' },
    // { id: 'destinations', label: 'Destinations' },
    { id: 'parks', label: 'National Parks' },
  ];

  return (
    <div className="min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">Explore India</h1>

      <div className="flex justify-center gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 cursor-pointer rounded-full transition-all duration-300 text-sm md:text-base font-semibold shadow-md ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-orange-500 to-violet-500 text-white scale-105'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 animate-fade-in">
        {activeTab === 'states' && <StateUt />}
        {/* {activeTab === 'destinations' && <Destinations />} */}
        {activeTab === 'parks' && <NationalPark />}
      </div>
    </div>
  );
};

export default Destination;
