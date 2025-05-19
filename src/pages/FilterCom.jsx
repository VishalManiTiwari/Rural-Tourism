import React, { useState, useEffect } from 'react';

const FilterComponent = () => {
  const categories = [
    {
      name: "Wildlife",
      icon: "🦁",
      options: [
        "All wildlife",
        "Wildlife Sanctuaries",
        "Zoological Parks",
        "Bird Watching",
        "Marine Life",
        "National Parks"
      ]
    },
    {
      name: "Heritage",
      icon: "🏛️",
      options: [
        "All Heritage",
        "Monuments",
        "Museums",
        "Historical Buildings",
        "UNESCO World Heritage Sites",
        "Archeological Sites"
      ]
    },
    {
      name: "Adventure",
      icon: "🧗",
      options: [
        "All Adventure",
        "Rafting",
        "Paragliding",
        "Parasailing",
        "Skiing",
        "Sky Diving"
      ]
    },
    {
      name: "Gastronomy",
      icon: "🍽️",
      options: [
        "All Gastronomy",
        "Street Food",
        "Authentically Local",
        "Beverages",
        "Farm to Table",
        "Spices"
      ]
    },
    {
      name: "Weddings",
      icon: "💍",
      options: [
        "All Weddings",
        "Palace Weddings",
        "Beach Weddings",
        "Mountain Wedding",
        "Island Wedding",
        "Vineyard Wedding"
      ]
    },
    {
      name: "Wellness",
      icon: "🧘",
      options: [
        "All Wellness",
        "Yoga",
        "Ayurveda",
        "Meditation",
        "Naturopathy"
      ]
    },
    {
      name: "Arts",
      icon: "🎨",
      options: [
        "All Arts",
        "Dance",
        "Music",
        "Painting",
        "Literature",
        "Theatre"
      ]
    },
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
        "Live Like a Local"
      ]
    },
    {
      name: "Nature",
      icon: "🌿",
      options: [
        "All Nature",
        "Deserts",
        "Sustainable Tourism",
        "Beaches & Cruises",
        "Hills & Mountains",
        "Forests & Gardens",
        "Rivers & Lakes"
      ]
    },
    {
      name: "Recreation",
      icon: "🎭",
      options: [
        "All Recreation",
        "Cinema",
        "Night Life",
        "Sports",
        "Amusement & Theme Parks"
      ]
    }
  ];

  // State management
  const [selectedFilters, setSelectedFilters] = useState({});
  const [categorySearchTerms, setCategorySearchTerms] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  // Initialize states
  useEffect(() => {
    const initialStates = {};
    categories.forEach(category => {
      initialStates[category.name] = false; // Collapsed by default
    });
    setExpandedCategories(initialStates);
  }, []);

  // Handle option selection
  const handleOptionSelect = (categoryName, option) => {
    setSelectedFilters(prev => {
      const newSelection = { ...prev };
      
      if (!newSelection[categoryName]) {
        newSelection[categoryName] = [];
      }

      // Handle "All" options
      if (option.startsWith("All ")) {
        const category = categories.find(cat => cat.name === categoryName);
        if (newSelection[categoryName].includes(option)) {
          // If "All" is already selected, deselect everything in this category
          newSelection[categoryName] = [];
        } else {
          // Select only the "All" option
          newSelection[categoryName] = [option];
        }
      } else {
        // For regular options
        if (newSelection[categoryName].includes(option)) {
          // Deselect the option
          newSelection[categoryName] = newSelection[categoryName].filter(
            item => item !== option
          );
          // Also deselect "All" if it was selected
          newSelection[categoryName] = newSelection[categoryName].filter(
            item => !item.startsWith("All ")
          );
        } else {
          // Select the option
          newSelection[categoryName] = [...newSelection[categoryName], option];
          // If all options except "All" are selected, replace with "All"
          const category = categories.find(cat => cat.name === categoryName);
          const regularOptions = category.options.filter(opt => !opt.startsWith("All "));
          const selectedRegularOptions = newSelection[categoryName].filter(
            opt => !opt.startsWith("All ")
          );
          if (selectedRegularOptions.length === regularOptions.length) {
            newSelection[categoryName] = [`All ${categoryName}`];
          }
        }
      }

      return newSelection;
    });
  };

  // Check if an option is selected
  const isOptionSelected = (categoryName, option) => {
    return selectedFilters[categoryName]?.includes(option) || false;
  };

  // Get selected count for a category
  const getSelectedCount = (categoryName) => {
    return selectedFilters[categoryName]?.length || 0;
  };

  // Toggle category expansion
  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Handle category-specific search
  const handleCategorySearch = (categoryName, term) => {
    setCategorySearchTerms(prev => ({
      ...prev,
      [categoryName]: term.toLowerCase()
    }));
  };

  // Filter options based on search term
  const getFilteredOptions = (category) => {
    const searchTerm = categorySearchTerms[category.name] || '';
    if (!searchTerm) return category.options;
    
    return category.options.filter(option =>
      option.toLowerCase().includes(searchTerm)
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedFilters({});
    setCategorySearchTerms({});
    setGlobalSearchTerm('');
  };

  // Apply filters (in a real app, this would trigger data fetching)
  const applyFilters = () => {
    console.log("Applied filters:", selectedFilters);
    // Close mobile filters after applying
    setIsMobileFiltersOpen(false);
  };

  // Filter categories based on global search
  const filteredCategories = categories.filter(category => {
    if (!globalSearchTerm) return true;
    
    return (
      category.name.toLowerCase().includes(globalSearchTerm.toLowerCase()) ||
      category.options.some(option =>
        option.toLowerCase().includes(globalSearchTerm.toLowerCase())
      )
    );
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile filter toggle */}
      <div className="md:hidden p-4 bg-white shadow-sm">
        <button
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          {isMobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
          <svg
            className={`ml-2 h-5 w-5 ${isMobileFiltersOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Filter sidebar */}
      <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-80 bg-white p-4 shadow-md md:shadow-none md:border-r md:border-gray-200`}>
        <div className="sticky top-0 bg-white pt-4 pb-2 z-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>
          
          {/* Global search */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search all filters..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                value={globalSearchTerm}
                onChange={(e) => setGlobalSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-6 pb-24">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleCategory(category.name)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{category.icon}</span>
                      <h3 className="font-medium text-gray-800">{category.name}</h3>
                    </div>
                    <div className="flex items-center">
                      {getSelectedCount(category.name) > 0 && (
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2 py-0.5 rounded-full">
                          {getSelectedCount(category.name)}
                        </span>
                      )}
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedCategories[category.name] ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {expandedCategories[category.name] && (
                  <div className="px-4 pb-4">
                    {/* Category-specific search */}
                    <div className="mb-3">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder={`Search ${category.name}...`}
                          className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          value={categorySearchTerms[category.name] || ''}
                          onChange={(e) => handleCategorySearch(category.name, e.target.value)}
                        />
                        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Options */}
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {getFilteredOptions(category).length > 0 ? (
                        getFilteredOptions(category).map((option, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id={`${category.name}-${idx}`}
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                checked={isOptionSelected(category.name, option)}
                                onChange={() => handleOptionSelect(category.name, option)}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor={`${category.name}-${idx}`}
                                className={`font-medium ${isOptionSelected(category.name, option) ? 'text-indigo-600' : 'text-gray-700'}`}
                              >
                                {option}
                              </label>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500 py-2">No options match your search</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No filters found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Sticky footer with buttons */}
        <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="flex space-x-3">
            <button
              onClick={resetFilters}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Reset
            </button>
            <button
              onClick={applyFilters}
              className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        {/* Selected filters chips */}
        {Object.keys(selectedFilters).length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {Object.entries(selectedFilters).map(([category, options]) =>
                options.map((option, idx) => (
                  <span
                    key={`${category}-${idx}`}
                    className="inline-flex items-center py-1 pl-3 pr-2 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {option}
                    <button
                      type="button"
                      className="flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 focus:outline-none focus:bg-indigo-500 focus:text-white"
                      onClick={() => handleOptionSelect(category, option)}
                    >
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                ))
              )}
              {Object.keys(selectedFilters).length > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        )}

        {/* Content placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Results</h2>
          <p className="mt-2 text-sm text-gray-500">
            {Object.keys(selectedFilters).length > 0
              ? "Showing results based on your filters"
              : "Showing all results. Use filters to narrow your search."}
          </p>
          {/* In a real app, you would render filtered content here */}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;