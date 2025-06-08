import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ParkDetails from "./ParkDetails"; 

const nationalParksData = {
  "Andaman and Nicobar Islands": [
    "Mahatma Gandhi Marine National Park",
    "Mount Manipur National Park",
    "Rani Jhansi Marine National Park",
    "Saddle Peak National Park",
  ],
  "Andhra Pradesh": [
    "Sri Venkateswara National Park",
    "Papikonda National Park",
    "Rajiv Gandhi National Park",
  ],
  "Arunachal Pradesh": [
    "Namdapha National Park",
    "Mouling National Park",
  ],
  Assam: [
    "Kaziranga National Park",
    "Manas National Park",
    "Nameri National Park",
    "Orang National Park",
    "Raimona National Park",
    "Dehing Patkai National Park",
  ],
  Bihar: ["Valmiki National Park"],
  Chhattisgarh: [
    "Indravati National Park",
    "Kanger Ghati National Park",
    "Guru Ghasidas (Sanjay) National Park",
  ],
  Goa: ["Mollem National Park (Bhagwan Mahavir Sanctuary)"],
  Gujarat: [
    "Sarthana National Park",
    "Velavadar Blackbuck National Park",
    "Gir Forest National Park",
    "Marine National Park, Gulf of Kutch",
  ],
  Haryana: ["Sultanpur National Park", "Kalesar National Park"],
  "Himachal Pradesh": [
    "Great Himalayan National Park",
    "Khirganga National Park",
    "Pin Valley National Park",
    "Inderkilla National Park",
    "Simbalbara National Park",
  ],
  "Jammu and Kashmir": [
    "Dachigam National Park",
    "Kishtwar National Park",
    "Salim Ali National Park",
  ],
  Jharkhand: ["Betla National Park"],
  Karnataka: [
    "Dandeli National Park",
    "Kudremukh National Park",
    "Bandipur National Park",
    "Bannerghatta National Park",
    "Nagarhole (Rajiv Gandhi) National Park",
  ],
  Kerala: [
    "Blossom International Park",
    "Eravikulam National Park",
    "Periyar National Park",
    "Silent Valley National Park",
    "Anamudi Shola National Park",
    "Mathikettan Shola National Park",
    "Pambadum Shola National Park",
  ],
  Ladakh: ["Hemis National Park"],
  "Madhya Pradesh": [
    "Kuno National Park",
    "Panna National Park",
    "Bandhavgarh National Park",
    "Kanha National Park",
    "Madhav National Park",
    "Mandla Plant Fossils National Park",
    "Pench National Park",
    "Sanjay National Park",
    "Satpura National Park",
    "Van Vihar National Park",
  ],
  Maharashtra: [
    "Chandoli National Park",
    "Sanjay Gandhi National Park (Borivali National Park)",
    "Gugamal National Park",
    "Navegaon National Park",
    "Pench National Park",
    "Tadoba National Park",
  ],
  Manipur: ["Keibul Lamjao National Park"],
  Meghalaya: ["Balphakram National Park", "Nokrek Ridge National Park"],
  Mizoram: ["Murlen National Park", "Phawngpui Blue Mountain National Park"],
  Nagaland: ["Intanki National Park"],
  Odisha: ["Bhitarkanika National Park", "Simlipal National Park"],
  Rajasthan: [
    "Desert National Park",
    "Sariska National Park",
    "Ranthambore National Park",
    "Keoladeo Ghana National Park",
    "Mukundra Hills (Darrah) National Park",
  ],
  Sikkim: ["Khangchendzonga National Park"],
  "Tamil Nadu": [
    "Guindy National Park",
    "Gulf of Mannar Marine National Park",
    "Indira Gandhi (Annamalai) National Park",
    "Mudumalai National Park",
    "Mukurthi National Park",
  ],
  Telangana: ["KBR National Park", "Mrugavani National Park", "Mahavir Harina Vanasthali National Park"],
  Tripura: ["Clouded Leopard National Park", "Bison (Rajbari) National Park"],
  Uttarakhand: [
    "Nanda Devi National Park",
    "Rajaji National Park",
    "Corbett National Park",
    "Gangotri National Park",
    "Valley of Flowers National Park",
    "Govind Pashu Vihar National Park",
  ],
  UttarPradesh: [
    "Dudhwa National Park",
    "Kishanpur Wildlife Sanctuary",
    "Katarniaghat Wildlife Sanctuary",
  ],
  "West Bengal": [
    "Gorumara National Park",
    "Neora Valley National Park",
    "Singalila National Park",
    "Buxa National Park",
    "Jaldapara National Park",
    "Sunderbans National Park",
  ],
};

const NationalPark = () => {
  const [search, setSearch] = useState("");
  const [selectedPark, setSelectedPark] = useState(null);

  const handleParkClick = (parkName) => {
    // In a real application, you might want to find the full park object
    // from nationalParksData or fetch more details here.
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
              <ul className="list-none flex flex-wrap gap-5 list-inside space-y-1 text-gray-700 dark:text-gray-300">
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
              {/* Only render hr if there are filtered parks for the state */}
              {parks.filter((park) =>
                park.toLowerCase().includes(search.toLowerCase())
              ).length > 0 && <hr className="text-gray-300 my-3 border-t-2" />}
            </div>
          ))}
        </div>
      ) : (
        // Pass selectedPark to ParkDetails. If you had more data, you'd pass an object.
        <ParkDetails selectedPark={selectedPark} goBack={() => setSelectedPark(null)} />
      )}
    </div>
  );
};

export default NationalPark;