import React, { useState } from 'react';
import PracticalInfo from '../plantrip/PracticalInfo';
import VisaGuide from '../plantrip/VisaGuide';
import AirportInfo from '../plantrip/AirportInfo';
import TravelPartners from '../plantrip/TravelPartners';
import ItinerariesPackages from '../plantrip/ItinerariesPackages';
import FestivalsEvents from '../plantrip/FestivalsEvents';
import RuralTourismInfo from '../plantrip/RuralTourismInfo';
import IncredibleIndiaLink from '../plantrip/IncredibleIndiaLink'

const PlanATrip = () => {
  const [activeTab, setActiveTab] = useState('practicalInfo'); // State to manage active tab

  const tabs = [
    { id: 'practicalInfo', name: 'Practical Information' },
    { id: 'travel', name: 'Travel' },
    { id: 'exploreIndia', name: 'Explore India' },
    { id: 'ruralTourism', name: 'Rural Tourism' },
  ];

  return (
    <section className="py-12 mt-20  bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Plan Your Incredible Trip to Rural India</h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 my-2 rounded-lg font-semibold transition-colors duration-300
                ${activeTab === tab.id
                  ? 'bg-green-700 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Sections based on activeTab */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {activeTab === 'practicalInfo' && <PracticalInfo />}
          {activeTab === 'travel' && (
            <>
              <VisaGuide />
              <AirportInfo />
              <TravelPartners />
            </>
          )}
          {activeTab === 'exploreIndia' && (
            <>
              <ItinerariesPackages />
              <FestivalsEvents />
            </>
          )}
          {activeTab === 'ruralTourism' && (
            <>
              <RuralTourismInfo />
              <IncredibleIndiaLink />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlanATrip;