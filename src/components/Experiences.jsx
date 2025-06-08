import React, { useState } from "react";
import Category from "../pages/Category";
import Region from "../pages/Region";

const Experiences = () => {
  const [activeTab, setActiveTab] = useState("category"); 

  return (
    <div className="relative">
      {/* Main container */}
      <div className="mt-[9rem] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Sticky header - only changed the parent div */}
        <div className="sticky top-0 z-10 bg-white pb-2">
          <div className="mb-8">
            <div className="flex relative justify-center mt-4 space-x-4">
              <button 
                onClick={() => setActiveTab("category")}
                className={`px-6 py-2 cursor-pointer border w-[38rem] transition-colors duration-200 ${
                  activeTab === "category" 
                    ? "bg-red-500 text-white border-red-500" 
                    : "border-red-500 text-red-500 hover:bg-red-50" 
                }`}
              >
                Category
              </button>
              <button 
                onClick={() => setActiveTab("region")}
                className={`px-6 py-2 cursor-pointer border w-[38rem] transition-colors duration-200 ${
                  activeTab === "region" 
                    ? "bg-red-500 text-white border-red-500" 
                    : "border-red-500 text-red-500 hover:bg-blue-50"
                }`}
              >
                Regions
              </button>
            </div>
          </div>
        </div>

        {/* Content remains exactly the same */}
        {activeTab === "category" ? <Category /> : <Region />}
      </div>
      <div className="flex gap-5 p-5 justify-center">
        <button className="border p-2 rounded text-white bg-red-500 px-9 py-2 hover:bg-red-800">Apply</button>
        <button className="border p-2 rounded text-white bg-red-500 px-9 py-2 hover:bg-red-800">Clear</button>
      </div>
    </div>
  );
};

export default Experiences;