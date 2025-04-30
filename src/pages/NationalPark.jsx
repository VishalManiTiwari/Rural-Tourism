import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ParkDetails from "./ParkDetails";

const nationalParksData = {
  "Andaman and Nicobar Islands": [
    "Mahatma Gandhi Marine National Park",
    "Mount Manipur National Park",
  ],
  "Andhra Pradesh": ["Sri Venkateswara National Park"],
  "Arunachal Pradesh": ["Namdapha National Park"],
  Assam: ["Dibru Saikhowa National Park"],
  Goa: ["Mollem National Park"],
  Gujarat: ["Sarthana National Park", "Velavadar Blackbuck National Park"],
  "Himachal Pradesh": [
    "Great Himalayan National Park",
    "Khirganga National Park",
  ],
  "Jammu and Kashmir": [
    "Dachigam National Park",
    "Kishtwar National Park",
    "Salim Ali National Park",
  ],
  Jharkhand: ["Betla National Park"],
  Karnataka: ["Dandeli National Park", "Kudremukh National Park"],
  Kerala: [
    "Blossom International Park",
    "Eravikulam National Park",
    "Periyar National Park",
    "Silent Valley National Park",
  ],
  Ladakh: ["Hemis National Park"],
  "Madhya Pradesh": ["Kuno National Park", "Panna National Park"],
  Maharashtra: ["Chandoli National Park", "Sanjay Gandhi National Park"],
  Mizoram: ["Murlen National Park"],
  Odisha: ["Bhitarkanika National Park"],
  Rajasthan: ["Desert National Park", "Sariska National Park"],
  Sikkim: ["Khangchendzonga National Park"],
  Telangana: ["KBR National Park", "Mrugavani National Park"],
  Uttarakhand: ["Nanda Devi National Park", "Rajaji National Park"],
  UttarPradesh: [
    "Dudhwa National Park",
    "Kishanpur Wildlife Sanctuary",
    "Katarniaghat Wildlife Sanctuary",
  ],
  "West Bengal": [
    "Gorumara National Park",
    "Neora Valley National Park",
    "Singalila National Park",
  ],
};

const NationalPark = () => {
  const [search, setSearch] = useState("");
  const [selectedPark, setSelectedPark] = useState(null);

  const handleParkClick = (parkName) => {
    setSelectedPark(parkName);
  };

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <div className="w-full flex justify-center my-8">
        <div className="relative w-[90%] max-w-md">
          <FiSearch
            className="absolute top-3.5 left-3 text-gray-400"
            size={20}
          />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
      </div>

      {!selectedPark ? (
        <div className="overflow-y-auto max-h-[500px]">
          {Object.entries(nationalParksData).map(([state, parks], index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4">
              <h3 className="text-xl font-semibold mb-2 text-green-600">
                {state}
              </h3>
              <ul className="list-none flex gap-5 list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {parks
                  .filter((park) =>
                    park.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((park, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer hover:text-blue-500"
                      onClick={() => handleParkClick(park)}
                    >
                      {park}
                    </li>
                  ))}
              </ul>
              <hr className="text-gray-300 my-3 border-t-2" />
            </div>
          ))}
        </div>
      ) : (
        <ParkDetails selectedPark={selectedPark} goBack={() => setSelectedPark(null)} />
      )}
    </div>
  );
};

export default NationalPark;
