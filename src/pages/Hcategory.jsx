import React, { useState } from "react";

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
      ],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleOption = (categoryName, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [`${categoryName}-${option}`]: !prev[`${categoryName}-${option}`],
    }));
  };

  const clearAll = () => {
    setSelectedOptions({});
    setSearchTerm("");
  };

  const applyFilters = () => {
    console.log("Applied filters:", selectedOptions);
    alert(
      `Filters applied: ${Object.keys(selectedOptions)
        .filter((key) => selectedOptions[key])
        .join(", ")}`
    );
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

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories..."
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
            <span className="mr-2">{category.icon}</span>
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
              className="bg-white rounded-xl shadow border overflow-hidden"
            >
              <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {category.name}
                    </h2>
                  </div>
                  <span className="text-sm text-gray-500">
                    {category.options.length} options
                  </span>
                </div>
              </div>
              <div className="p-5 max-h-[300px] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {category.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleOption(category.name, option)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all text-sm ${
                        selectedOptions[`${category.name}-${option}`]
                          ? "bg-blue-50 border border-blue-200 text-blue-700"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span
                        className={`inline-block w-5 h-5 rounded border flex items-center justify-center mr-3 ${
                          selectedOptions[`${category.name}-${option}`]
                            ? "bg-red-500 border-red-500 text-white"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedOptions[`${category.name}-${option}`] && (
                          <svg
                            className="w-3 h-3"
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
                      </span>
                      {option}
                    </button>
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
          <h3 className="text-lg font-semibold">No categories found</h3>
          <p className="text-sm">
            {searchTerm
              ? "Try searching for something else."
              : "Currently no categories are available."}
          </p>
        </div>
      )}

      {/* Selected Options */}
      {Object.keys(selectedOptions).some((key) => selectedOptions[key]) && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-red-800">
              Selected options (
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
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={clearAll}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
        >
          Clear
        </button>
        <button
          onClick={applyFilters}
          className="px-6 py-2 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 shadow"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Hcategory;
