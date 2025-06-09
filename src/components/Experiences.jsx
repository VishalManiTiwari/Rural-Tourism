import React from "react";
import Region from "../pages/Region"; // Only importing Region now

const Experiences = () => {
  return (
    <div className="relative">
      {/* Main container */}
      <div className="mt-[9rem] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/*
          Removed the sticky header and tab selection buttons
          as there's no longer a need to switch between Category and Region.
        */}

        {/* Directly render the Region component */}
        <Region />
      </div>
    </div>
  );
};

export default Experiences;