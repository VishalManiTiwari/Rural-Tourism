import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiExternalLink, FiDownload, FiMapPin, FiCalendar, FiInfo } from 'react-icons/fi';

const PlanTrip = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('practical');
  const [weatherData, setWeatherData] = useState(null);
  const [activeTab, setActiveTab] = useState('info');
  const [searchQuery, setSearchQuery] = useState('');

  // Enhanced data structure
  const tripData = {
    practical: [
      {
        title: "Weather",
        icon: <FiCalendar className="mr-2" />,
        content: {
          info: "India has diverse weather patterns. The Himalayas have alpine conditions (best visited May-Oct), while the south is tropical year-round. Central India is ideal Oct-Mar, with monsoon season Jun-Sep.",
          tips: "Pack according to region: light cotton for summer, warm layers for winter, and rain gear during monsoon."
        },
        action: () => fetchWeatherData()
      },
      {
        title: "Tourism Information",
        icon: <FiInfo className="mr-2" />,
        content: {
          info: "Government of India Tourism Offices are located in all major cities and tourist destinations. They provide maps, brochures and assistance in multiple languages.",
          locations: ["Delhi: 88 Janpath, New Delhi", "Mumbai: 123 Maharshi Karve Road", "Kolkata: 4 Shakespeare Sarani"]
        }
      },
      {
        title: "Emergency Contacts",
        icon: <FiMapPin className="mr-2" />,
        content: {
          info: "Important emergency numbers for travelers in India:",
          contacts: [
            { name: "Police", number: "100" },
            { name: "Ambulance", number: "102/108" },
            { name: "Fire", number: "101" },
            { name: "Tourist Helpline", number: "1363 (24/7 multi-language)" },
            { name: "Women's Helpline", number: "1091" }
          ]
        }
      },
      {
        title: "Public Holidays",
        icon: <FiCalendar className="mr-2" />,
        content: {
          info: "Major national holidays in India (dates vary yearly):",
          holidays: [
            "Republic Day - January 26",
            "Independence Day - August 15",
            "Gandhi Jayanti - October 2",
            "Diwali (Festival of Lights) - Oct/Nov",
            "Holi (Festival of Colors) - Mar",
            "Eid al-Fitr - Varies",
            "Christmas - December 25"
          ]
        }
      },
      {
        title: "Currency Converter",
        icon: <FiDownload className="mr-2" />,
        content: {
          info: "Convert between Indian Rupee (INR) and other major currencies."
        },
        component: <CurrencyConverter />
      }
    ],
    travel: [
      {
        title: "Visa Guide",
        icon: <FiExternalLink className="mr-2" />,
        content: {
          info: "Most foreign nationals need a visa to enter India. Options include:",
          types: [
            "e-Tourist Visa (30/90/180 days)",
            "Regular Tourist Visa (up to 10 years)",
            "Business Visa",
            "Medical Visa"
          ],
          link: "https://indianvisaonline.gov.in"
        }
      },
      {
        title: "Airport Guide",
        icon: <FiMapPin className="mr-2" />,
        content: {
          info: "Major international airports in India:",
          airports: [
            { name: "Delhi (DEL)", code: "Indira Gandhi International" },
            { name: "Mumbai (BOM)", code: "Chhatrapati Shivaji Maharaj" },
            { name: "Bangalore (BLR)", code: "Kempegowda" },
            { name: "Chennai (MAA)", code: "Chennai International" }
          ],
          tips: "Arrive 3 hours early for international flights. Metro connects to Delhi airport."
        }
      },
      {
        title: "Transport Options",
        icon: <FiChevronRight className="mr-2" />,
        content: {
          info: "Getting around India:",
          options: [
            "Domestic flights (connect major cities)",
            "Indian Railways (book at irctc.co.in)",
            "Metro (Delhi, Bangalore, Mumbai etc)",
            "App-based taxis (Ola, Uber)",
            "Auto-rickshaws (negotiate fare first)"
          ]
        }
      }
    ],
    explore: [
      {
        title: "Popular Itineraries",
        icon: <FiMapPin className="mr-2" />,
        content: {
          info: "Suggested travel routes:",
          itineraries: [
            {
              name: "Golden Triangle",
              duration: "7-10 days",
              route: "Delhi → Agra (Taj Mahal) → Jaipur"
            },
            {
              name: "Kerala Backwaters",
              duration: "10-14 days",
              route: "Cochin → Alleppey → Kumarakom → Munnar"
            },
            {
              name: "Himalayan Trek",
              duration: "14-21 days",
              route: "Delhi → Rishikesh → Leh → Ladakh"
            }
          ]
        }
      },
      {
        title: "Festivals Calendar",
        icon: <FiCalendar className="mr-2" />,
        content: {
          info: "Major festivals by season:",
          festivals: [
            {
              season: "Winter (Dec-Feb)",
              events: ["Kumbh Mela", "Jaipur Literature Fest", "Republic Day Parade"]
            },
            {
              season: "Summer (Mar-May)",
              events: ["Holi", "Baisakhi", "Thrissur Pooram"]
            },
            {
              season: "Monsoon (Jun-Sep)",
              events: ["Rath Yatra", "Onam", "Ganesh Chaturthi"]
            },
            {
              season: "Autumn (Oct-Nov)",
              events: ["Diwali", "Durga Puja", "Pushkar Camel Fair"]
            }
          ]
        }
      },
      {
        title: "Cultural Experiences",
        icon: <FiInfo className="mr-2" />,
        content: {
          info: "Authentic Indian experiences:",
          experiences: [
            "Homestays in Kerala villages",
            "Textile workshops in Jaipur",
            "Yoga retreats in Rishikesh",
            "Tea plantation stays in Darjeeling",
            "Desert camping in Rajasthan"
          ]
        }
      }
    ]
  };

  // Filter items based on search query
  const filteredData = {
    practical: tripData.practical.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      JSON.stringify(item.content).toLowerCase().includes(searchQuery.toLowerCase())
    ),
    travel: tripData.travel.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      JSON.stringify(item.content).toLowerCase().includes(searchQuery.toLowerCase())
    ),
    explore: tripData.explore.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      JSON.stringify(item.content).toLowerCase().includes(searchQuery.toLowerCase())
    )
  };

  // Mock weather API call
  const fetchWeatherData = () => {
    // In a real app, this would be an actual API call
    setWeatherData({
      delhi: { temp: "32°C", condition: "Sunny", icon: "☀️" },
      mumbai: { temp: "28°C", condition: "Humid", icon: "🌤️" },
      bangalore: { temp: "24°C", condition: "Partly Cloudy", icon: "⛅" },
      kolkata: { temp: "30°C", condition: "Rainy", icon: "🌧️" }
    });
  };

  useEffect(() => {
    // Set default selected item
    if (!selectedItem && tripData.practical.length > 0) {
      setSelectedItem(tripData.practical[0]);
    }
  }, []);

  const handleItemClick = (category, index) => {
    setActiveCategory(category);
    setSelectedItem(tripData[category][index]);
    setActiveTab('info');
    
    // Execute action if exists (like fetching weather)
    if (tripData[category][index].action) {
      tripData[category][index].action();
    }
  };

  const renderContent = () => {
    if (!selectedItem) return null;

    const content = selectedItem.content;
    
    return (
      <div className="mt-6">
        <div className="flex border-b border-gray-200 mb-4">
          {content.info && (
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'info' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('info')}
            >
              Information
            </button>
          )}
          {content.tips && (
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'tips' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('tips')}
            >
              Travel Tips
            </button>
          )}
          {selectedItem.title === "Weather" && weatherData && (
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'forecast' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('forecast')}
            >
              Forecast
            </button>
          )}
        </div>

        <div className="p-4">
          {activeTab === 'info' && (
            <div>
              <p className="text-gray-700 mb-4">{content.info}</p>
              
              {content.locations && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Office Locations:</h4>
                  <ul className="space-y-2">
                    {content.locations.map((location, idx) => (
                      <li key={idx} className="flex items-start">
                        <FiMapPin className="mt-1 mr-2 text-indigo-500" />
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.contacts && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Emergency Numbers:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.contacts.map((contact, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-lg font-bold text-indigo-600">{contact.number}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.holidays && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Major Holidays:</h4>
                  <ul className="space-y-2">
                    {content.holidays.map((holiday, idx) => (
                      <li key={idx} className="flex items-start">
                        <FiCalendar className="mt-1 mr-2 text-indigo-500" />
                        <span>{holiday}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.link && (
                <a 
                  href={content.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  <FiExternalLink className="mr-2" />
                  Visit Official Visa Website
                </a>
              )}
            </div>
          )}

          {activeTab === 'tips' && content.tips && (
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <p className="text-gray-700">{content.tips}</p>
            </div>
          )}

          {activeTab === 'forecast' && weatherData && (
            <div>
              <h4 className="font-semibold mb-4">Current Weather in Major Cities:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(weatherData).map(([city, data]) => (
                  <div key={city} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h5 className="font-medium capitalize">{city}</h5>
                    <div className="flex items-center mt-2">
                      <span className="text-3xl mr-2">{data.icon}</span>
                      <div>
                        <p className="text-2xl font-bold">{data.temp}</p>
                        <p className="text-gray-500">{data.condition}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedItem.component && (
            <div className="mt-6">
              {selectedItem.component}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='mt-20 p-4 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Plan Your Trip to India</h1>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          Essential information and tools to help you prepare for an unforgettable journey
        </p>
        <hr className='w-24 mx-auto border-t-2 border-indigo-500 mt-6' />
      </div>

      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for information (weather, visas, festivals...)"
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Categories Sidebar */}
        <div className='lg:w-1/3'>
          <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-3 font-medium ${activeCategory === 'practical' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                onClick={() => {
                  setActiveCategory('practical');
                  if (filteredData.practical.length > 0) {
                    setSelectedItem(filteredData.practical[0]);
                  }
                }}
              >
                Practical Info
              </button>
              <button
                className={`flex-1 py-3 font-medium ${activeCategory === 'travel' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                onClick={() => {
                  setActiveCategory('travel');
                  if (filteredData.travel.length > 0) {
                    setSelectedItem(filteredData.travel[0]);
                  }
                }}
              >
                Travel
              </button>
              <button
                className={`flex-1 py-3 font-medium ${activeCategory === 'explore' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                onClick={() => {
                  setActiveCategory('explore');
                  if (filteredData.explore.length > 0) {
                    setSelectedItem(filteredData.explore[0]);
                  }
                }}
              >
                Explore
              </button>
            </div>

            <div className="p-4 max-h-[500px] overflow-y-auto">
              {filteredData[activeCategory].length > 0 ? (
                <ul className='space-y-2'>
                  {filteredData[activeCategory].map((item, index) => (
                    <li 
                      key={index}
                      className={`p-3 rounded-lg cursor-pointer transition-all flex items-center ${selectedItem?.title === item.title ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'hover:bg-gray-50'}`}
                      onClick={() => handleItemClick(activeCategory, tripData[activeCategory].findIndex(i => i.title === item.title))}
                    >
                      {item.icon}
                      <span className="font-medium">{item.title}</span>
                      <FiChevronRight className="ml-auto text-gray-400" />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
          </div>

          {/* Download Guide Button */}
          <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center">
            <FiDownload className="mr-2" />
            Download Complete Travel Guide (PDF)
          </button>
        </div>

        {/* Content Area */}
        <div className='lg:w-2/3'>
          {selectedItem ? (
            <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 mr-4">
                  {selectedItem.icon}
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-800'>{selectedItem.title}</h2>
                  <p className="text-gray-500">Category: {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</p>
                </div>
              </div>

              {renderContent()}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Select an item to view details</h3>
              <p className="text-gray-500">Choose from the options on the left to see helpful information for your trip planning</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced Currency Converter Component
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  // More comprehensive currency rates
  const rates = {
    USD: 83.5,
    EUR: 89.2,
    GBP: 104.3,
    AUD: 55.8,
    CAD: 61.2,
    JPY: 0.56,
    SGD: 61.8,
    AED: 22.7,
    INR: 1
  };

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    setLastUpdated(new Date());
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
    setLastUpdated(new Date());
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setLastUpdated(new Date());
  };

  const convertCurrency = () => {
    if (fromCurrency === toCurrency) return amount.toFixed(2);
    if (fromCurrency === 'INR') return (amount / rates[toCurrency]).toFixed(2);
    if (toCurrency === 'INR') return (amount * rates[fromCurrency]).toFixed(2);
    return (amount * rates[fromCurrency] / rates[toCurrency]).toFixed(2);
  };

  return (
    <div className='bg-white p-5 rounded-lg border border-gray-200 shadow-sm'>
      <div className="flex justify-between items-center mb-4">
        <h3 className='font-bold text-lg'>Currency Converter</h3>
        <p className="text-sm text-gray-500">Rates updated: {lastUpdated.toLocaleTimeString()}</p>
      </div>
      
      <div className='space-y-4'>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='flex-1'>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type='number'
              value={amount}
              onChange={handleAmountChange}
              className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
              min="0"
              step="0.01"
            />
          </div>
          
          <div className='flex-1'>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <select
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
            >
              {Object.keys(rates).map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={swapCurrencies}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Swap currencies"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>

        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='flex-1'>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <select
              value={toCurrency}
              onChange={handleToCurrencyChange}
              className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
            >
              {Object.keys(rates).map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          
          <div className='flex-1'>
            <label className="block text-sm font-medium text-gray-700 mb-1">Result</label>
            <div className='w-full p-3 bg-gray-50 rounded-lg'>
              <p className='text-xl font-bold text-indigo-600'>
                {convertCurrency()} {toCurrency}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {Object.entries(rates)
          .filter(([currency]) => currency !== 'INR')
          .map(([currency, rate]) => (
            <div key={currency} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">1 {currency}</p>
              <p className="font-medium">{rate.toFixed(2)} INR</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlanTrip;