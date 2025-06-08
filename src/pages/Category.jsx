import React, { useState, useEffect } from 'react';

const Category = ({ onFilterChange }) => {
  // Define the core categories and their options
  const allCategories = [
    
    {
      name: "Heritage",
      icon: "🏛️",
      options: [
        "Monuments",
        "Museums",
        "Historical Buildings",
        "UNESCO World Heritage Sites",
        "Archeological Sites"
      ]
    },
    
    {
      name: "Gastronomy",
      icon: "🍽️",
      options: [
        "Street Food",
        "Authentically Local",
        "Beverages",
        "Farm to Table",
        "Spices",
        "Local Cuisine" 
      ]
    },
    
    {
      name: "Arts",
      icon: "🎨",
      options: [
        "Dance",
        "Music",
        "Painting",
        "Literature",
        "Theatre",
        "Crafts", 
        "Workshops",
        "Cultural Performances"
      ]
    },
    {
      name: "Rural", 
      icon: "🏡",
      options: [
        "Agro-Tourism",
        "Crafts-Tourism",
        "Tribal-Tourism",
        "Eco-Tourism",
        "Wildlife-Tourism", // Can overlap with 'Wildlife' category but specific to rural context
        "Live Like a Local",
        "Orchard Visits", // Added from Treasure component's activities
        "Agri-tourism",
        "Village Visits",
        "Heritage Exploration" // Specific to rural heritage
      ]
    },
    
  ];

  // State for category search term
  const [categorySearchTerm, setCategorySearchTerm] = useState('');
  // State to hold the currently selected options across all categories
  // Format: { categoryName: ['option1', 'option2'], ... }
  const [selectedOptions, setSelectedOptions] = useState({});

  // Filter categories based on search term
  const filteredCategories = allCategories.filter(category =>
    category.name.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  // Function to handle individual option checkbox changes
  const handleOptionChange = (categoryName, option) => {
    setSelectedOptions(prevSelected => {
      const currentCategoryOptions = prevSelected[categoryName] || [];
      let newCategoryOptions;

      if (currentCategoryOptions.includes(option)) {
        // If option is already selected, remove it
        newCategoryOptions = currentCategoryOptions.filter(item => item !== option);
      } else {
        // If option is not selected, add it
        newCategoryOptions = [...currentCategoryOptions, option];
      }

      return {
        ...prevSelected,
        [categoryName]: newCategoryOptions,
      };
    });
  };

  // Function to handle "Select All" for a category
  const handleSelectAll = (categoryName, options, isChecked) => {
    setSelectedOptions(prevSelected => {
      return {
        ...prevSelected,
        [categoryName]: isChecked ? [...options] : [],
      };
    });
  };

  // Function to clear all selected filters
  const clearAllFilters = () => {
    setSelectedOptions({});
    setCategorySearchTerm('');
  };

  // Effect to call parent's onFilterChange prop whenever selectedOptions changes
  useEffect(() => {
    if (onFilterChange) {
      // Flatten the selected options into a single array for easier consumption by parent
      const activeFilters = Object.entries(selectedOptions)
        .flatMap(([category, options]) => options.map(option => ({ category, option })))
        .filter(filter => filter.option !== `All ${filter.category}`); // Exclude "All X" options if they were mistakenly selected
      onFilterChange(activeFilters);
    }
  }, [selectedOptions, onFilterChange]);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 mt-4">
        Explore Travel Categories
      </h1>

      {/* Global Controls: Search & Clear All */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4 px-4">
        <input
          type="text"
          placeholder="Search categories (e.g., 'Rural', 'Art')..."
          className="p-3 border border-gray-300 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          value={categorySearchTerm}
          onChange={(e) => setCategorySearchTerm(e.target.value)}
        />
        <button
          onClick={clearAllFilters}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Clear All Filters
        </button>
      </div>

      {/* Categories Display */}
      <div className="space-y-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-blue-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-800">{category.name}</h2>
                  </div>
                  {/* "Select All" Checkbox for the category */}
                  <div className="flex items-center">
                    <input
                      id={`select-all-${category.name}`}
                      type="checkbox"
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      checked={
                        selectedOptions[category.name]?.length === category.options.length &&
                        category.options.length > 0 // Ensure it's not checked if no options
                      }
                      onChange={(e) => handleSelectAll(category.name, category.options, e.target.checked)}
                    />
                    <label
                      htmlFor={`select-all-${category.name}`}
                      className="ml-2 text-md text-gray-700 font-medium cursor-pointer"
                    >
                      Select All
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-6">
                  {category.options.map((option, idx) => (
                    <div key={idx} className="flex items-center group">
                      <input
                        id={`${category.name}-${idx}`}
                        type="checkbox"
                        className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-all"
                        checked={selectedOptions[category.name]?.includes(option)}
                        onChange={() => handleOptionChange(category.name, option)}
                      />
                      <label
                        htmlFor={`${category.name}-${idx}`}
                        className="ml-3 text-base text-gray-700 group-hover:text-indigo-700 cursor-pointer transition-colors"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                {category.options.length === 0 && (
                    <p className="text-gray-500 italic mt-2">No specific options available for this category.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg mx-auto max-w-md">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">No categories found</h3>
            <p className="mt-1 text-md text-gray-500">Try adjusting your category search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;