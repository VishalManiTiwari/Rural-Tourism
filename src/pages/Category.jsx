import React, { useState } from 'react';

const Category = () => {
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

  const [filteredCategories, setFilteredCategories] = useState(categories); // Default shows all

  return (
    <div className="p-4">
      {/* Categories */}
      <div className="space-y-6">
        {filteredCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-blue-50">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.options.map((option, idx) => (
                  <div key={idx} className="flex items-center group">
                    <input
                      id={`${category.name}-${idx}`}
                      type="checkbox"
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-all"
                    />
                    <label
                      htmlFor={`${category.name}-${idx}`}
                      className="ml-3 text-sm text-gray-700 group-hover:text-indigo-600 cursor-pointer transition-colors"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">No results found</h3>
          <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
};

export default Category;
