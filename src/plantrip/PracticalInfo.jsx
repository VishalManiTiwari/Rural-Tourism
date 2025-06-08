// src/components/PracticalInfo.jsx

import React, { useState, useEffect } from 'react';

const PracticalInfo = () => {
  const [amountUSD, setAmountUSD] = useState('');
  const [amountINR, setAmountINR] = useState('');
  const [currentExchangeRate, setCurrentExchangeRate] = useState(83.50); // A more realistic initial rate as of mid-2024

  // Function to simulate fetching a live exchange rate (replace with actual API call in production)
  useEffect(() => {
    const fetchExchangeRate = async () => {
      // In a real application, you would fetch from an API like:
      // const response = await fetch('YOUR_CURRENCY_API_ENDPOINT?base=USD&symbols=INR');
      // const data = await response.json();
      // setCurrentExchangeRate(data.rates.INR);

      // For now, let's simulate a slight fluctuation
      const simulatedRate = (83 + Math.random() * 1).toFixed(2); // Rate between 83 and 84
      setCurrentExchangeRate(parseFloat(simulatedRate));
    };

    fetchExchangeRate();
    const interval = setInterval(fetchExchangeRate, 60000); // Update every minute (for simulation)
    return () => clearInterval(interval);
  }, []);

  const handleUSDChange = (e) => {
    const usd = e.target.value;
    setAmountUSD(usd);
    if (usd) {
      setAmountINR((parseFloat(usd) * currentExchangeRate).toFixed(2));
    } else {
      setAmountINR('');
    }
  };

  const handleINRChange = (e) => {
    const inr = e.target.value;
    setAmountINR(inr);
    if (inr) {
      setAmountUSD((parseFloat(inr) / currentExchangeRate).toFixed(2));
    } else {
      setAmountUSD('');
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Practical Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Weather */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-green-800 mb-2">Weather</h3>
          <p className="text-gray-700">
            India experiences diverse weather patterns. Northern regions have distinct seasons, while the south is generally tropical.
            <br />
            <strong>Best time to visit rural areas:</strong> Generally, October to March offers pleasant weather across most of India. Summers (April-June) can be very hot, especially in plains, and monsoons (July-September) bring heavy rainfall.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <em>Consider checking local forecasts before your trip.</em>
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-medium text-green-700 mb-2">Weather Resources:</h4>
            <ul className="list-disc list-inside text-blue-600">
              <li>
                <a href="https://www.accuweather.com/en/in/india-weather" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  AccuWeather - India
                </a>
              </li>
              <li>
                <a href="https://www.imd.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  India Meteorological Department (IMD)
                </a>
              </li>
              <li>
                <a href="https://www.weather.com/en-IN/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  The Weather Channel - India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Tourism Information Centre */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-green-800 mb-2">Tourism Information Centre</h3>
          <p className="text-gray-700">
            The Ministry of Tourism operates several information centers across major cities and tourist destinations.
            You can find contact details and services on the official Incredible India website.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <em>Look for "Tourist Information" signs in airports and railway stations.</em>
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-medium text-green-700 mb-2">Useful Links:</h4>
            <ul className="list-disc list-inside text-blue-600">
              <li>
                <a href="https://tourism.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Ministry of Tourism, Government of India
                </a>
              </li>
              <li>
                <a href="https://www.incredibleindia.gov.in/content/incredible-india-v2/en/plan-your-trip/travel-information-centres.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Incredible India - Tourist Information Centres
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-green-800 mb-2">Emergency Numbers</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Police: 100</li>
            <li>Fire: 101</li>
            <li>Ambulance: 102</li>
            <li>National Emergency Number: 112</li>
            <li>Tourist Helpline: 1363 (Multilingual, 24/7)</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            <em>Save these numbers in your phone before your trip. Always be aware of your surroundings, especially in unfamiliar rural areas.</em>
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-medium text-green-700 mb-2">Safety Tips:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Keep copies of your passport and visa.</li>
              <li>Inform your family/friends about your itinerary.</li>
              <li>Avoid traveling alone at night in remote areas.</li>
              <li>Trust your instincts.</li>
            </ul>
          </div>
        </div>

        {/* Public Holidays */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-green-800 mb-2">Public Holidays</h3>
          <p className="text-gray-700">
            India observes national holidays (Republic Day - Jan 26, Independence Day - Aug 15, Gandhi Jayanti - Oct 2) and numerous regional and religious holidays.
            Travel during major festivals can be exciting but also lead to crowded transport and closures of some services or attractions.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <em>Always check the calendar for public holidays that might affect your travel plans, especially state-specific ones for rural areas.</em>
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-medium text-green-700 mb-2">Resources for Public Holidays:</h4>
            <ul className="list-disc list-inside text-blue-600">
              <li>
                <a href="https://www.india.gov.in/calendar" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  National Portal of India - Calendar
                </a>
              </li>
              <li>
                <a href="https://www.officeholidays.com/countries/india" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Office Holidays - India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Currency Converter */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-green-800 mb-2">Currency Converter</h3>
          <p className="text-gray-700 mb-3">
            The local currency is the Indian Rupee (INR).
            Current estimated rate: 1 USD = <span className="font-semibold text-green-700">{currentExchangeRate.toFixed(2)}</span> INR
          </p>
          <div className="flex flex-col space-y-4">
            {/* USD to INR */}
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Amount (USD)"
                value={amountUSD}
                onChange={handleUSDChange}
                className="w-32 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
              <span className="text-gray-700">USD is approximately</span>
              <span className="font-semibold text-green-700 w-24 text-right">{amountINR || '0.00'} INR</span>
            </div>
            {/* INR to USD */}
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Amount (INR)"
                value={amountINR}
                onChange={handleINRChange}
                className="w-32 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
              <span className="text-gray-700">INR is approximately</span>
              <span className="font-semibold text-green-700 w-24 text-right">{amountUSD || '0.00'} USD</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <em>Live rates would require a real-time API integration (e.g., ExchangeRate-API, Open Exchange Rates). The rates shown here are for demonstration purposes only and may not reflect current market rates. Exchange foreign currency at authorized centers or banks.</em>
          </p>
        </div>

        {/* Travel Insurance */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-green-800 mb-2">Travel Insurance</h3>
          <p className="text-gray-700">
            It is highly recommended to purchase comprehensive travel insurance before your trip to India. This should cover medical emergencies, trip cancellations, lost luggage, and other unforeseen circumstances.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <em>Ensure your policy covers activities you plan to undertake, especially if you're venturing into remote rural areas.</em>
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-medium text-green-700 mb-2">Consider Providers like:</h4>
            <ul className="list-disc list-inside text-blue-600">
              <li>
                <a href="https://www.worldnomads.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  World Nomads
                </a>
              </li>
              <li>
                <a href="https://www.allianztravelinsurance.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Allianz Travel Insurance
                </a>
              </li>
              <li>
                <a href="https://www.travelguard.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Travel Guard
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Local Etiquette & Customs */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-green-800 mb-2">Local Etiquette & Customs</h3>
          <p className="text-gray-700">
            Respecting local customs and traditions will significantly enhance your rural tourism experience.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li><strong>Dress modestly:</strong> Especially in rural areas and when visiting religious sites, modest clothing is appreciated.</li>
            <li><strong>Greetings:</strong> A 'Namaste' (joining palms) is a common and respectful greeting.</li>
            <li><strong>Footwear:</strong> Remove your shoes before entering homes or places of worship.</li>
            <li><strong>Eating:</strong> Use your right hand for eating and giving/receiving items.</li>
            <li><strong>Photography:</strong> Always ask for permission before taking photos of people, especially in villages.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            <em>A little awareness goes a long way in connecting with local communities.</em>
          </p>
        </div>

        {/* Health & Safety */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-green-800 mb-2">Health & Safety</h3>
          <p className="text-gray-700">
            Before your trip, consult your doctor about recommended vaccinations (e.g., Tetanus, Hepatitis A & B, Typhoid).
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Drink only bottled or filtered water.</li>
            <li>Carry a basic first-aid kit.</li>
            <li>Use mosquito repellent, especially in rural areas.</li>
            <li>Be mindful of street food hygiene.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            <em>It's always better to be prepared.</em>
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-medium text-green-700 mb-2">Health Resources:</h4>
            <ul className="list-disc list-inside text-blue-600">
              <li>
                <a href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/india" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  CDC Travel Health - India
                </a>
              </li>
              <li>
                <a href="https://www.who.int/countries/ind/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WHO - India
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PracticalInfo;