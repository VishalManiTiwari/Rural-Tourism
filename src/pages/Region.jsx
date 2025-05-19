import React, { useState } from 'react';

const regions = [
  {
    name: 'North',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/North?qlt=82&ts=1727762218512',
    states: ['Jammu & Kashmir', 'Himachal Pradesh', 'Punjab', 'Uttarakhand', 'Haryana', 'Delhi'],
  },
  {
    name: 'South',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/South?qlt=82&ts=1727762218512',
    states: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana', 'Puducherry'],
  },
  {
    name: 'East',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/East?qlt=82&ts=1727762218512',
    states: ['West Bengal', 'Bihar', 'Odisha', 'Jharkhand', 'Assam', 'Sikkim'],
  },
  {
    name: 'West',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/West?qlt=82&ts=1727762218512',
    states: ['Rajasthan', 'Gujarat', 'Goa', 'Maharashtra'],
  },
  {
    name: 'Central',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/West?qlt=82&ts=1727762218512',
    states: ['Madhya Pradesh', 'Chhattisgarh'],
  },
  {
    name: 'North East',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/Central?qlt=82&ts=1727762218512',
    states: ['Meghalaya', 'Manipur', 'Nagaland', 'Tripura', 'Arunachal Pradesh', 'Mizoram'],
  },
];

const Region = () => {
  const [selectedStates, setSelectedStates] = useState({});

  const handleCheckboxChange = (stateName) => {
    setSelectedStates((prev) => ({
      ...prev,
      [stateName]: !prev[stateName],
    }));
  };

  const handleApply = () => {
    const selected = Object.entries(selectedStates)
      .filter(([_, isChecked]) => isChecked)
      .map(([state]) => state);

    console.log('Selected States:', selected);
    alert('Applied States:\n' + selected.join(', ') || 'None');
  };

  const handleClear = () => {
    setSelectedStates({});
  };

  return (
    <div className="px-4 py-10">
      <div className="grid gap-6 xl:grid-cols-6 sm:grid-cols-2 grid-cols-1 md:grid-cols-4 justify-center">
        {regions.map((region, index) => (
          <div key={index} className="grid justify-center">
            <img src={region.image} alt={region.name} className="w-[5rem]" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {region.name} India
              </h2>
              <div className="space-y-3">
                {region.states.map((state, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={`${region.name}-${idx}`}
                      className="accent-blue-500 w-4 h-4"
                      checked={!!selectedStates[state]}
                      onChange={() => handleCheckboxChange(state)}
                    />
                    <label
                      htmlFor={`${region.name}-${idx}`}
                      className="text-sm text-center text-gray-700 dark:text-gray-200"
                    >
                      {state}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <button
          onClick={handleApply}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Apply
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Region;
