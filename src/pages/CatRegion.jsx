import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Region from "./Region";
import Hcategory from "./Hcategory";

const CatRegion = () => {
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleRegion = () => {
    setIsRegionOpen((prev) => !prev);
    if (isCategoryOpen) setIsCategoryOpen(false); // Close other if open
  };

  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
    if (isRegionOpen) setIsRegionOpen(false); // Close other if open
  };

  return (
    <div className="flex flex-col items-center my-6 px-4 gap-6">
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        {/* Category Button */}
        <div
          onClick={toggleCategory}
          className="flex items-center justify-between gap-2 border border-gray-300 bg-white hover:bg-gray-50 transition p-4 px-6 rounded-lg shadow-sm w-full sm:w-fit cursor-pointer"
        >
          <p className="font-medium text-gray-700">Category</p>
          <FaCaretDown
            className={`text-gray-500 transition-transform duration-300 ${
              isCategoryOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Region Button */}
        <div
          onClick={toggleRegion}
          className="flex items-center justify-between gap-2 border border-gray-300 bg-white hover:bg-gray-50 transition p-4 px-6 rounded-lg shadow-sm w-full sm:w-fit cursor-pointer"
        >
          <p className="font-medium text-gray-700">Regions</p>
          <FaCaretDown
            className={`text-gray-500 transition-transform duration-300 ${
              isRegionOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Category Dropdown */}
      {isCategoryOpen && (
        <div className="">
          <Hcategory />
        </div>
      )}

      {/* Region Dropdown */}
      {isRegionOpen && (
        <div className="">
          <Region />
        </div>
      )}
    </div>
  );
};

export default CatRegion;
