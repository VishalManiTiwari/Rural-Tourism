import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HotelBooking = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [location, setLocation] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const incrementAdults = () => setAdults(prev => Math.min(prev + 1, 10));
  const decrementAdults = () => setAdults(prev => Math.max(prev - 1, 1));
  const incrementChildren = () => setChildren(prev => Math.min(prev + 1, 10));
  const decrementChildren = () => setChildren(prev => Math.max(prev - 1, 0));

  const hotelPlatforms = [
    {
      name: "OYO Rooms",
      link: "https://www.oyorooms.com/",
      logo: "https://imgs.search.brave.com/DgN3mtHmT309EbQp3vM1j1S5zUQaMq2wrfWH5QtLKDM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzQyMzgxOWI4/ODVmYTljMTk1OTRh/N2M2YmQwNDRiMzE3/ZTgzNzIwYjE5ZWNl/ZjM1NjViNzM3ZDlh/OTAwMmRjNC93d3cu/b3lvcm9vbXMuY29t/Lw",
      description: "Affordable hotels and homes across India"
    },
    {
      name: "MakeMyTrip",
      link: "https://www.makemytrip.com/hotels/",
      logo: "https://imgs.search.brave.com/SDWEgz6k6fTaw2Qb1qrz45ZrJa9pMMWInoQJezQLEt0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmM4MDRmMjI2/NjhmMTgxNWVmZjlm/NjQ3NjlmYjdjM2Zl/MjEwMDZhMzliOWI2/ZThmOWRkNGEzNjFl/Mzc5NzYyMy93d3cu/bWFrZW15dHJpcC5j/b20v",
      description: "Best deals on domestic & international hotels"
    },
    {
      name: "Booking.com",
      link: "https://www.booking.com/",
      logo: "https://imgs.search.brave.com/yVtfDzhLUKXR4BwrvHnobhCk5we7vX5gBrQvN1hmnWQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzA3OGRmM2Ex/ZmJiMDgyMDllMWMx/ZjRiMjc5YzM1OGZh/NmJlZGQxYzAzODYx/YTljZTVjZGQ0YjRm/ZTg1YjI2ZC93d3cu/Ym9va2luZy5jb20v",
      description: "Worldwide hotel bookings with free cancellation"
    },
    {
      name: "Agoda",
      link: "https://www.agoda.com/",
      logo: "https://imgs.search.brave.com/9dhvV2Hk52o2hMq2FTBDIyh0uALl6BViVFsXAvvO6_o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDM0ZWRlNjI2/ODAxMDNkNmJkN2Q3/ZWMzY2Q0YjZhYTc1/MGZiOWY2NTgyNzk0/NTdiZTcxNjVkYmVm/Y2FjOWFjMi93d3cu/YWdvZGEuY29tLw",
      description: "Great discounts on hotels in Asia"
    },
    {
      name: "Goibibo",
      link: "https://www.goibibo.com/hotels/",
      logo: "https://imgs.search.brave.com/qHxURvzFVLMYjpGkucBn3KazN6owqVKDhmdsX7FgYVM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzE0OWExZTE3/NTk3YmU5MDA2ZjI3/YzViZTFkYWQ2NjJh/NWMyYWM5Mzg3MzEx/ZGRiZmQwYzhlYzdm/MDM4YWQ0NS93d3cu/Z29pYmliby5jb20v",
      description: "Smart hotel bookings with instant discounts"
    },
    {
      name: "Trivago",
      link: "https://www.trivago.in/",
      logo: "https://imgs.search.brave.com/86pjdr4KsH6UZzRF71_woduyZZaOJtifzQruArNbMQ0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzNjY2M0NzQ3/N2VhOTMwZTQ4YTBl/MjA1ZDA3ZmE2Nzc1/ZDJhMjM1YTg2NGY0/MmM4ZmExMmI4NmI5/NjljYWEzZS93d3cu/dHJpdmFnby5pbi8",
      description: "Compare prices across multiple platforms"
    }
  ];

  const generateBookingLink = (platform) => {
    const baseUrl = platform.link;
    const params = new URLSearchParams();
    
    if (location) params.append("searchText", location);
    params.append("checkin", checkIn.toISOString().split('T')[0]);
    params.append("checkout", checkOut.toISOString().split('T')[0]);
    params.append("adults", adults);
    if (children > 0) params.append("children", children);
    
    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Book Your Perfect Stay
        </h1>

        {/* Search Form */}
        <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="City, area or hotel"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                minDate={new Date()}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                minDate={checkIn}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    type="button"
                    onClick={decrementAdults}
                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
                    disabled={adults <= 1}
                  >
                    -
                  </button>
                  <span className="flex-1 text-center">{adults}</span>
                  <button
                    type="button"
                    onClick={incrementAdults}
                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
                    disabled={adults >= 10}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    type="button"
                    onClick={decrementChildren}
                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
                    disabled={children <= 0}
                  >
                    -
                  </button>
                  <span className="flex-1 text-center">{children}</span>
                  <button
                    type="button"
                    onClick={incrementChildren}
                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
                    disabled={children >= 10}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Platforms */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Book on Top Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={generateBookingLink(platform)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="h-12 object-contain mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {platform.description}
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <span className="text-blue-600 font-medium">Search Hotels</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Tips for Booking Hotels</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Compare prices across multiple platforms for the best deal</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Check cancellation policies before booking</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Look for properties with free cancellation options</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Read recent guest reviews for authentic feedback</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;




// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const RuralTourismBooking = () => {
//   const [checkIn, setCheckIn] = useState(new Date());
//   const [checkOut, setCheckOut] = useState(() => {
//     const date = new Date();
//     date.setDate(date.getDate() + 2);
//     return date;
//   });
//   const [location, setLocation] = useState("");
//   const [guests, setGuests] = useState(2);
//   const [experienceType, setExperienceType] = useState("all");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   // Rural destinations and experiences
//   const ruralDestinations = [
//     "Himachal Pradesh Villages",
//     "Kerala Backwaters Homestays",
//     "Rajasthan Desert Camps",
//     "Sikkim Organic Farms",
//     "Assam Tea Estates",
//     "Goan Countryside",
//     "Western Ghats Eco Lodges",
//     "Ladakh Homestays",
//     "Uttarakhand Mountain Villages",
//     "Tamil Nadu Rural Heritage"
//   ];

//   const experienceTypes = [
//     { id: "all", name: "All Experiences" },
//     { id: "farm", name: "Farm Stays" },
//     { id: "eco", name: "Eco Lodges" },
//     { id: "homestay", name: "Village Homestays" },
//     { id: "camping", name: "Rural Camping" },
//     { id: "heritage", name: "Heritage Stays" }
//   ];

//   useEffect(() => {
//     if (location.length > 1) {
//       const filtered = ruralDestinations.filter(dest =>
//         dest.toLowerCase().includes(location.toLowerCase())
//       );
//       setSuggestions(filtered);
//       setShowSuggestions(true);
//     } else {
//       setShowSuggestions(false);
//     }
//   }, [location]);

//   const incrementGuests = () => setGuests(prev => Math.min(prev + 1, 8));
//   const decrementGuests = () => setGuests(prev => Math.max(prev - 1, 1));

//   const ruralPlatforms = [
//     {
//       name: "Rural Odyssey",
//       link: "https://www.ruralodyssey.com/",
//       logo: "https://via.placeholder.com/32?text=RO",
//       description: "Authentic village experiences across India",
//       specializesIn: ["homestay", "farm"]
//     },
//     {
//       name: "EcoStay",
//       link: "https://www.ecostay.org/",
//       logo: "https://via.placeholder.com/32?text=ES",
//       description: "Sustainable rural accommodations",
//       specializesIn: ["eco", "camping"]
//     },
//     {
//       name: "FarmTrails",
//       link: "https://www.farmtrails.in/",
//       logo: "https://via.placeholder.com/32?text=FT",
//       description: "Agricultural tourism and farm stays",
//       specializesIn: ["farm"]
//     },
//     {
//       name: "Village Ways",
//       link: "https://www.villageways.com/",
//       logo: "https://via.placeholder.com/32?text=VW",
//       description: "Community-based rural tourism",
//       specializesIn: ["homestay", "heritage"]
//     },
//     {
//       name: "NatureHomes",
//       link: "https://www.naturehomes.co/",
//       logo: "https://via.placeholder.com/32?text=NH",
//       description: "Eco-friendly rural retreats",
//       specializesIn: ["eco", "camping"]
//     },
//     {
//       name: "Rural Roots",
//       link: "https://www.ruralroots.travel/",
//       logo: "https://via.placeholder.com/32?text=RR",
//       description: "Cultural immersion in rural India",
//       specializesIn: ["heritage", "homestay"]
//     }
//   ];

//   const filteredPlatforms = experienceType === "all" 
//     ? ruralPlatforms 
//     : ruralPlatforms.filter(platform => 
//         platform.specializesIn.includes(experienceType)
//       );

//   const generateBookingLink = (platform) => {
//     const baseUrl = platform.link;
//     const params = new URLSearchParams();
    
//     if (location) params.append("destination", location);
//     params.append("checkin", checkIn.toISOString().split('T')[0]);
//     params.append("checkout", checkOut.toISOString().split('T')[0]);
//     params.append("guests", guests);
//     params.append("type", experienceType);
    
//     return `${baseUrl}?${params.toString()}`;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10 px-4 md:px-10">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-green-800 mb-6">
//           Discover Rural India
//         </h1>
//         <p className="text-lg text-center text-gray-600 mb-10">
//           Book authentic village stays, farm experiences, and eco-retreats
//         </p>

//         {/* Search Form */}
//         <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 mb-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Rural Destination</label>
//               <input
//                 type="text"
//                 placeholder="Village, region or experience"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 onFocus={() => setShowSuggestions(true)}
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               {showSuggestions && suggestions.length > 0 && (
//                 <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
//                   {suggestions.map((suggestion, index) => (
//                     <li 
//                       key={index}
//                       className="p-2 hover:bg-green-50 cursor-pointer"
//                       onClick={() => {
//                         setLocation(suggestion);
//                         setShowSuggestions(false);
//                       }}
//                     >
//                       {suggestion}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
//               <DatePicker
//                 selected={checkIn}
//                 onChange={(date) => setCheckIn(date)}
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//                 minDate={new Date()}
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
//               <DatePicker
//                 selected={checkOut}
//                 onChange={(date) => setCheckOut(date)}
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//                 minDate={checkIn}
//               />
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
//                 <div className="flex items-center border border-gray-300 rounded-lg">
//                   <button
//                     type="button"
//                     onClick={decrementGuests}
//                     className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
//                     disabled={guests <= 1}
//                   >
//                     -
//                   </button>
//                   <span className="flex-1 text-center">{guests}</span>
//                   <button
//                     type="button"
//                     onClick={incrementGuests}
//                     className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
//                     disabled={guests >= 8}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
//                 <select
//                   value={experienceType}
//                   onChange={(e) => setExperienceType(e.target.value)}
//                   className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//                 >
//                   {experienceTypes.map(type => (
//                     <option key={type.id} value={type.id}>{type.name}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Rural Experience Platforms */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-gray-700">
//             Book Rural Experiences
//           </h2>
//           <div className="flex space-x-2 overflow-x-auto">
//             {experienceTypes.map(type => (
//               <button
//                 key={type.id}
//                 onClick={() => setExperienceType(type.id)}
//                 className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
//                   experienceType === type.id 
//                     ? 'bg-green-600 text-white' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {type.name}
//               </button>
//             ))}
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredPlatforms.map((platform) => (
//             <a
//               key={platform.name}
//               href={generateBookingLink(platform)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden hover:-translate-y-1 border border-green-100"
//             >
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
//                     <img
//                       src={platform.logo}
//                       alt={platform.name}
//                       className="h-8 object-contain"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-gray-800">
//                       {platform.name}
//                     </h3>
//                     <p className="text-sm text-gray-500">
//                       {platform.description}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {platform.specializesIn.map(type => {
//                     const typeInfo = experienceTypes.find(t => t.id === type);
//                     return (
//                       <span key={type} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
//                         {typeInfo?.name || type}
//                       </span>
//                     );
//                   })}
//                 </div>
//                 <div className="mt-4 bg-green-50 p-3 rounded-lg text-center hover:bg-green-100 transition">
//                   <span className="text-green-700 font-medium">Explore Stays</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Additional Information */}
//         <div className="mt-12 bg-green-50 rounded-xl p-6 border border-green-100">
//           <h3 className="text-xl font-semibold text-green-800 mb-4">Why Choose Rural Tourism?</h3>
//           <ul className="space-y-3 text-gray-700">
//             <li className="flex items-start">
//               <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               <span><strong>Authentic Experiences:</strong> Immerse yourself in local cultures and traditions</span>
//             </li>
//             <li className="flex items-start">
//               <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               <span><strong>Sustainable Travel:</strong> Support local communities and eco-friendly practices</span>
//             </li>
//             <li className="flex items-start">
//               <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               <span><strong>Unique Activities:</strong> Farming, handicrafts, nature walks and more</span>
//             </li>
//             <li className="flex items-start">
//               <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               <span><strong>Peaceful Surroundings:</strong> Escape city noise and reconnect with nature</span>
//             </li>
//           </ul>
          
//           <div className="mt-6 pt-6 border-t border-green-200">
//             <h4 className="font-medium text-green-800 mb-3">Travel Tips for Rural Stays:</h4>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex items-start">
//                 <div className="bg-green-100 p-2 rounded-full mr-3">
//                   <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">Pack appropriate clothing for rural environments</span>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-green-100 p-2 rounded-full mr-3">
//                   <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">Respect local customs and traditions</span>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-green-100 p-2 rounded-full mr-3">
//                   <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">Be prepared for limited urban amenities</span>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-green-100 p-2 rounded-full mr-3">
//                   <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">Carry cash as digital payments may be limited</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RuralTourismBooking;