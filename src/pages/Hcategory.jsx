import React, { useState, useEffect } from "react";

// Sample images for different categories
const categoryImages = {
  "Rural": [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1497440001378-f5f2a09a8c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  ],
  "Adventure": [
    "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1518630382445-c5e279ba21e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  ],
  "Wellness": [
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  ],
  "Cultural": [
    "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  ]
};

// New component to display detailed information
const FilterDetails = ({ selectedOptions, onClose, onBookNow }) => {
  const getDetailsForOption = (option) => {
    const detailsDatabase = {
      "All Rural": {
        description: "Experience authentic rural life across all regions with homestays, farm visits, and traditional activities.",
        price: "$50-$200/night",
        rating: 4.7,
        duration: "2-7 days",
        highlights: ["Farm stays", "Local cuisine", "Traditional crafts"]
      },
      "Agro-Tourism": {
        description: "Immerse yourself in agricultural activities from organic farming to wine tasting and cheese making.",
        price: "$70-$250/night",
        rating: 4.8,
        duration: "1-3 days",
        highlights: ["Harvesting", "Wine tasting", "Farm-to-table meals"]
      },
      "Trekking": {
        description: "Guided hiking adventures through scenic mountains, forests, and valleys for all skill levels.",
        price: "$100-$400/trip",
        rating: 4.9,
        duration: "1-10 days",
        highlights: ["Mountain views", "Camping", "Wildlife spotting"]
      },
      "Yoga Retreat": {
        description: "Rejuvenating yoga sessions in serene locations with meditation and wellness activities.",
        price: "$150-$500/night",
        rating: 4.8,
        duration: "3-10 days",
        highlights: ["Daily yoga", "Meditation", "Ayurvedic meals"]
      },
      "Heritage Tour": {
        description: "Explore ancient monuments, historical sites, and cultural landmarks with expert guides.",
        price: "$60-$300/tour",
        rating: 4.6,
        duration: "1-5 days",
        highlights: ["Historical sites", "Local guides", "Cultural shows"]
      }
    };
    
    return detailsDatabase[option] || {
      description: `Detailed information about ${option}`,
      price: "$50-$300",
      rating: 4.5,
      duration: "1-7 days",
      highlights: ["Unique experience", "Local guides", "Memorable activities"]
    };
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Selected Experiences</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-8">
            {Object.entries(selectedOptions)
              .filter(([_, isSelected]) => isSelected)
              .map(([key]) => {
                const option = key.split("-").slice(1).join("-");
                const category = key.split("-")[0];
                const details = getDetailsForOption(option);
                const images = categoryImages[category] || categoryImages["Rural"];
                
                return (
                  <div key={key} className="border-b border-gray-200 pb-8 last:border-0">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full rounded-xl overflow-hidden">
                          <img 
                            src={images[0]} 
                            alt={option}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <span className="text-white font-medium">{option}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="h-24 rounded-lg overflow-hidden">
                            <img src={images[1]} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div className="h-24 rounded-lg overflow-hidden">
                            <img src={images[2]} alt="" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-semibold text-gray-800">{option}</h3>
                        <div className="flex items-center mt-2 space-x-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 text-gray-600">{details.rating}</span>
                          </div>
                          <span className="text-gray-600">{details.duration}</span>
                          <span className="text-green-600 font-medium">{details.price}</span>
                        </div>
                        
                        <p className="mt-4 text-gray-600">{details.description}</p>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-800">Experience Highlights:</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {details.highlights.map((highlight, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-6 flex flex-wrap gap-3">
                          <button
                            onClick={() => onBookNow(option)}
                            className="px-6 py-2 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 shadow flex items-center"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Book Now
                          </button>
                          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Save
                          </button>
                          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Hcategory = () => {
  const categories = [
    {
      name: "Rural",
      icon: "🌄",
      options: [
        "All Rural",
        "Agro-Tourism",
        "Crafts-Tourism",
        "Tribal-Tourism",
        "Eco-Tourism",
        "Wildlife-Tourism",
        "Live Like a Local",
      ],
    },
    {
      name: "Adventure",
      icon: "⛰️",
      options: [
        "Trekking",
        "Water Sports",
        "Mountain Biking",
        "Rock Climbing",
        "Wilderness Camping",
        "Paragliding",
        "Scuba Diving"
      ],
    },
    {
      name: "Wellness",
      icon: "🧘",
      options: [
        "Yoga Retreat",
        "Spa Getaway",
        "Meditation Camp",
        "Ayurvedic Treatment",
        "Detox Program",
        "Hot Springs"
      ],
    },
    {
      name: "Cultural",
      icon: "🏛️",
      options: [
        "Heritage Tour",
        "Festival Experience",
        "Art Workshop",
        "Culinary Tour",
        "Traditional Performances",
        "Museum Visits"
      ],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [durationFilter, setDurationFilter] = useState("Any");
  const [popularFilters, setPopularFilters] = useState({
    "Eco-Friendly": false,
    "Family-Friendly": false,
    "Solo Traveler": false,
    "Pet-Friendly": false
  });

  const toggleOption = (categoryName, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [`${categoryName}-${option}`]: !prev[`${categoryName}-${option}`],
    }));
  };

  const clearAll = () => {
    setSelectedOptions({});
    setSearchTerm("");
    setShowDetails(false);
    setPriceRange([0, 1000]);
    setDurationFilter("Any");
    setPopularFilters({
      "Eco-Friendly": false,
      "Family-Friendly": false,
      "Solo Traveler": false,
      "Pet-Friendly": false
    });
  };

  const applyFilters = () => {
    if (Object.values(selectedOptions).filter(Boolean).length > 0) {
      setShowDetails(true);
    } else {
      alert("Please select at least one option before applying filters");
    }
  };

  const handleBookNow = (option) => {
    alert(`Booking initiated for: ${option}`);
    setShowDetails(false);
  };

  const togglePopularFilter = (filter) => {
    setPopularFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      options: category.options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.options.length > 0);

  const toggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  // Calculate number of active filters
  const activeFilterCount = 
    Object.values(selectedOptions).filter(Boolean).length +
    (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0) +
    (durationFilter !== "Any" ? 1 : 0) +
    Object.values(popularFilters).filter(Boolean).length;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {showDetails && (
        <FilterDetails 
          selectedOptions={selectedOptions} 
          onClose={() => setShowDetails(false)}
          onBookNow={handleBookNow}
        />
      )}
      
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Discover Unique Experiences</h1>
        <p className="text-gray-600">Filter and book authentic travel experiences tailored to your interests</p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-xl shadow-md p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search experiences..."
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">${priceRange[0]}</span>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-gray-500">${priceRange[1]}</span>
            </div>
          </div>
          
          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
            >
              <option value="Any">Any Duration</option>
              <option value="Day">Day Trip</option>
              <option value="Weekend">Weekend</option>
              <option value="Week">1 Week</option>
              <option value="Long">Extended</option>
            </select>
          </div>
        </div>
        
        {/* Popular Filters */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Popular Filters</label>
          <div className="flex flex-wrap gap-2">
            {Object.keys(popularFilters).map((filter) => (
              <button
                key={filter}
                onClick={() => togglePopularFilter(filter)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  popularFilters[filter]
                    ? "bg-blue-100 text-blue-800 border border-blue-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Indicator */}
      {activeFilterCount > 0 && (
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-600">
            {activeFilterCount} active filter{activeFilterCount !== 1 && 's'}
          </div>
          <button
            onClick={clearAll}
            className="text-sm text-red-600 hover:underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => toggleCategory(category.name)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.name
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="mr-2 text-lg">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Category Cards */}
      <div className="space-y-4">
        {filteredCategories
          .filter((category) =>
            activeCategory ? category.name === activeCategory : true
          )
          .map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {category.name} Experiences
                    </h2>
                  </div>
                  <span className="text-sm text-gray-500">
                    {category.options.length} options available
                  </span>
                </div>
              </div>
              <div className="p-5 max-h-[300px] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {category.options.map((option, idx) => (
                    <div
                      key={idx}
                      className={`relative rounded-lg overflow-hidden transition-all ${
                        selectedOptions[`${category.name}-${option}`]
                          ? "ring-2 ring-red-500"
                          : "hover:shadow-md"
                      }`}
                    >
                      <button
                        onClick={() => toggleOption(category.name, option)}
                        className="block w-full text-left"
                      >
                        <div className="h-32 bg-gray-100 relative">
                          <img
                            src={categoryImages[category.name][idx % 3]}
                            alt={option}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <div className="absolute top-2 right-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              selectedOptions[`${category.name}-${option}`]
                                ? "bg-red-500"
                                : "bg-white/90"
                            }`}
                            >
                              {selectedOptions[`${category.name}-${option}`] && (
                                <svg
                                  className="w-4 h-4 text-white"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-gray-800 truncate">{option}</h3>
                          <div className="flex items-center mt-1">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs text-gray-600 ml-1">4.5+</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* No Results */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <div className="text-4xl mb-4">😕</div>
          <h3 className="text-lg font-semibold">No experiences found</h3>
          <p className="text-sm">
            {searchTerm
              ? "Try adjusting your search or filters."
              : "Currently no experiences are available."}
          </p>
          <button
            onClick={clearAll}
            className="mt-4 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Selected Options */}
      {Object.keys(selectedOptions).some((key) => selectedOptions[key]) && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-red-800">
              Selected experiences (
              {Object.values(selectedOptions).filter(Boolean).length})
            </h4>
            <button
              onClick={clearAll}
              className="text-xs text-red-600 hover:underline"
            >
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(selectedOptions)
              .filter(([_, isSelected]) => isSelected)
              .map(([key]) => (
                <span
                  key={key}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-red-800"
                >
                  {key.split("-").slice(1).join("-")}
                  <button
                    onClick={() =>
                      toggleOption(
                        key.split("-")[0],
                        key.split("-").slice(1).join("-")
                      )
                    }
                    className="ml-2 hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <div className="text-sm text-gray-500">
          Showing {filteredCategories.reduce((acc, cat) => acc + cat.options.length, 0)} experiences
        </div>
        <div className="flex gap-3">
          <button
            onClick={clearAll}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Clear
          </button>
          <button
            onClick={applyFilters}
            className="px-6 py-2 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 shadow flex items-center"
            disabled={Object.values(selectedOptions).filter(Boolean).length === 0}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            View Selected ({Object.values(selectedOptions).filter(Boolean).length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hcategory;