import React, { useState } from "react";

// Region data
const regionData = [
  {
    region: "North",
    states: [
      "Chandigarh",
      "Delhi",
      "Haryana",
      "Himanchal Pradesh",
      "Jammu and Kashmir",
      "Ladakh",
      "Punjab",
      "Rajsthan",
      "Uttar Pradesh",
    ],
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    region: "North East",
    states: [
      "Arunchal Pradesh",
      "Assam",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Sikkim",
      "Tripura",
    ],
    image:
      "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    region: "East",
    states: [
      "Andaman and Nicobar Islands",
      "Bihar",
      "Jharkhand",
      "Odisha",
      "West Bengal",
    ],
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    region: "Central",
    states: ["Chhatisgarh", "Madhya Pradesh"],
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/narmada-ghat-madhya-pradesh-tri-hero?qlt=82&ts=1727164598025&wid=800",
  },
  {
    region: "West",
    states: [
      "Dadra and Nagar Haveli and Daman diu",
      "Goa",
      "Gujrat",
      "Maharashtra",
    ],
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    region: "South",
    states: [
      "Andhra Pradesh",
      "Karnataka",
      "Kerla",
      "Lakshadweep",
      "Punducherry",
      "Tamil Nadu",
      "Telangana",
    ],
    image:
      "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/kerala/munnar/external-blogs/munnar-travel-blog/munnar-travel-blog-masthead-popular-popular.jpg",
  },
];

// Rural tourism data
const ruralTourismData = {
  Chandigarh: [
    {
      name: "Rock Garden",
      description:
        "A unique garden featuring sculptures made from industrial and home waste",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Sukhna Lake Village",
      description: "Serene lakeside village offering boating and nature walks",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Le Corbusier Center",
      description: "Dedicated to the famous architect who designed Chandigarh",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ],
  Delhi: [
    {
      name: "Hauz Khas Village",
      description:
        "Historic village with medieval architecture and vibrant nightlife",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Mehrauli Archaeological Park",
      description: "Spread over 200 acres with numerous historical monuments",
      image:
        "https://images.unsplash.com/photo-1581852017103-68e8115e1e50?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Tughlaqabad Fort",
      description: "Massive ruined fort from the Tughlaq dynasty period",
      image:
        "https://images.unsplash.com/photo-1524492412937-b33874b7bdd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ],
  // Add more states...
};

// Modal Component
const RuralTourism = ({ state, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
          <h2 className="text-3xl font-bold text-green-800">
            Rural Tourism in {state}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ruralTourismData[state]?.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">
                    {place.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full">
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
            >
              Back to States
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const StateUt = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleStateClick = (state) => {
    setSelectedState(state);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseModal = () => {
    setSelectedState(null);
  };

  const filteredRegions = regionData
    .map((region) => ({
      ...region,
      states: region.states.filter((state) =>
        state.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((region) => region.states.length > 0);

  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Explore India by Regions
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search states..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {filteredRegions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.region}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {item.region}
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {item.states.map((state, idx) => (
                    <p
                      className="text-gray-700 hover:text-green-600 cursor-pointer transition-colors duration-200 py-1 px-3 hover:bg-green-50 rounded-md"
                      key={idx}
                      onClick={() => handleStateClick(state)}
                    >
                      {state}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedState && (
        <RuralTourism state={selectedState} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default StateUt;
