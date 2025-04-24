import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const statesData = {
  "Andhra Pradesh": [
    "Amaravati",
    "Anantapur",
    "Guntur",
    "Kurnool",
    "Tirupati",
    "Visakhapatnam",
  ],
  "Arunachal Pradesh": ["Itanagar", "Mechuka", "Tawang"],
  Assam: ["Dibrugarh", "Guwahati"],
  Bihar: ["Arrah", "Gaya", "Patna"],
  Chhattisgarh: ["Bilaspur", "Jagdalpur", "Raipur"],
  Goa: ["Goa"],
  Gujarat: ["Ahmedabad", "Dwarka", "Kutch", "Surat"],
  Haryana: ["Gurugram", "Kurukshetra"],
  "Himachal Pradesh": [
    "Chamba",
    "Dharamshala",
    "Kangra",
    "Kullu",
    "Manali",
    "Shimla",
  ],
  Jharkhand: ["Deoghar", "Jamshedpur", "Ranchi"],
  Karnataka: [
    "Badami",
    "Bagalkote",
    "Belagavi",
    "Bengaluru",
    "Bidar",
    "Dharwad",
    "Gokarna",
    "Hampi",
    "Kalaburagi",
    "Mangalore",
    "Mysuru",
    "Vijayapura",
  ],
  Kerala: [
    "Kochi",
    "Kollam",
    "Kumarakom",
    "Munnar",
    "Palakkad",
    "Thiruvananthapuram",
    "Thrissur",
  ],
  "Madhya Pradesh": [
    "Bhopal",
    "Gwalior",
    "Indore",
    "Khajuraho",
    "Orchha",
    "Ujjain",
  ],
  Maharashtra: [
    "Amravati",
    "Chhatrapati Sambhaji Nagar",
    "Igatpuri",
    "Kolhapur",
    "Mahabaleshwar",
    "Mumbai",
    "Nagpur",
    "Nashik",
  ],
  Manipur: ["Imphal"],
  Meghalaya: ["Cherrapunjee", "Shillong"],
  Mizoram: ["Aizawl", "Champhai", "Lunglei", "Serchhip"],
  Nagaland: ["Dimapur", "Kohima"],
  Odisha: ["Bhubaneswar", "Cuttack", "Koraput", "Puri"],
  Punjab: ["Amritsar", "Jalandhar", "Kapurthala", "Ludhiana", "Patiala"],
  Rajasthan: [
    "Ajmer",
    "Alwar",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Dholpur",
    "Jaipur",
    "Jaisalmer",
    "Jodhpur",
    "Udaipur",
  ],
  Sikkim: ["Gangtok", "Mangan", "Pelling"],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Kanchipuram",
    "Kanniyakumari",
    "Madurai",
    "Mamallapuram",
    "Rameswaram",
    "Thanjavur",
  ],
  Telangana: ["Hyderabad", "Warangal"],
  Tripura: ["Agartala"],
  "Uttar Pradesh": [
    "Agra",
    "Ayodhya",
    "Jhansi",
    "Kanpur",
    "Lucknow",
    "Mathura",
    "Varanasi",
  ],
  Uttarakhand: [
    "Almora",
    "Badrinath",
    "Chamoli",
    "Dehradun",
    "Haridwar",
    "Kausani",
    "Lansdowne",
    "Mussoorie",
    "Rishikesh",
  ],
  "West Bengal": ["Darjeeling", "Durgapur", "Kalimpong", "Kolkata", "Siliguri"],
  "Andaman and Nicobar Islands": ["Rangat", "Sri Vijaya Puram"],
  Chandigarh: ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  Delhi: ["Delhi"],
  "Jammu and Kashmir": ["Anantnag", "Jammu", "Patnitop"],
};

const Destinations = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="w-full flex justify-center my-8">
        <div className="relative w-[90%] max-w-md">
          <FiSearch className="absolute top-3.5 left-3 text-gray-400" size={20} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl 
            shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
      </div>
      {/* scrollbr */}
       <div className="overflow-y-auto max-h-[500px]">
       {Object.entries(statesData).map(([state, cities]) => {
        const filteredCities = cities.filter((city) =>
          city.toLowerCase().includes(search.toLowerCase())
        );
        const showState =
          state.toLowerCase().includes(search.toLowerCase()) ||
          filteredCities.length > 0;

        return (
          showState && (
            <div key={state} className="mb-8">
              <h2 className="text-2xl text-green-600 font-bold  bg-clip-text mb-3 border-b pb-1 border-gray-200">
                {state}
              </h2>
              <div className="flex flex-wrap gap-3">
                {filteredCities.map((city) => (
                  <span
                    key={city}
                    className="px-4 py-1 cursor-pointer rounded-full text-sm font-medium shadow-sm  transition duration-200"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          )
        );
      })}
       </div>
 
    </div>
  );
};

export default Destinations;
