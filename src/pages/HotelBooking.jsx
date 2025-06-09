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

  // New data for rural accommodation platforms
  const ruralPlatforms = [
    {
      name: "Airbnb",
      link: "https://www.airbnb.co.in/",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAgVBMVEX/Wl//VVr/T1X/TVP/io3/y8z/jpH/S1H/w8X/////6uv/U1j/oaT/SU//nZ//kpX/8PH/2tv/1tf/+Pn/mJv/cXX/V1z/bHD/z9D/XWL/v8D/7u//SE7/dnr/pqn/4+T/fYH/g4b2////Ulf/t7nVw8Psz9D/ra/y8/Psw8TQ0NB9coXpAAABLUlEQVR4Aa2SRYLDMAxFbamJojA6jOXe/36BMq5mtNTT+0bxPyUB5C+GK03T8Tsjg02TNfrGLJ1tx3HZs76JfuAI4YQRfRFjTpQQKmXX+oR+huddZZH1wdyzeFbtd4pRSAKIQFEWwaco86L0i1wm72o1i1bJRcG+nNXqRfS4hoZTwpQbSDh+VqEMELR2Fpw2Awx9eDC54k6CUc4tNA1QNevyDqmdJelxqlS6RDptS3exO09ilDmkMZyT+psKmb8MWjb39dCsl6gywyt0og2cL6L1t7uFifWGnRvk/bmlBB+UOsPmDjEwl1PL9fHEwVoud9IGt1jZs7Em7Mqh69jvkNbFY0MCbI4Ck83ashKTyyDiBp5uKN2Ehk7ztKKVEW7SJzb31gjy9j9xrcQfawK2mxMZFR8t7QAAAABJRU5ErkJggg==",
      description: "Unique homes and experiences worldwide, including rural stays"
    },
    {
      name: "Homestay.com",
      link: "https://www.homestay.com/",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAABSlBMVEX////62MZRAAD8qgBlKQD1dADwSAD8pwBiIwBZAAD88+30bgD60b3759tWAAD99un89vTxVx1udQDXAEfZAFTzhWb5zcLp5uQqAAD9/Pj8z4v8owD81p/3mV/zfyf+4c+giH3e1dL958n9xG34q4D4tI30j0v1hjn3oGyJbGC8qaP+7tj93bD815n4xan5y7J0QyuWd2nKu7T8vFb1exaOZl/EsbHG5ab3u5uTzEms2XrM56+BwR7O5bX3pXbOvr+bzFpbEQCx14TnxLHk8NTs9OJwOhPa68a83JX9yXyNaFZ+VUHJx7Hb2si8v5manWKtsYGGiTX4v7LyakCwmI3xXy3sjqf0w8/2pZH94Ojxck3rorXS7/uP1fNpyPD1lHm04vbp///dQG7hZYfvMwBTPjxyZGKJgH8SAACjnJsfAABjUVBCKCQwFA8DyLtjAAADOklEQVRIie3T21fiVhQH4B1CInMyR4KQHKJyOQ4XQQcwQ0EsmME6M8rUViP3eKHWJMbY//+1x+nqQ9s1AXyYh675vSVrfdl7n7MD8D3/y2iwvrKxKXN/P3OpdCZLs3Pd1hvg13nI5QvPT0grytu4FCqHCAl2Oxu7UX7zLRKEClQ1VC3gukZre3pk9dWciu92UKaKU3UJIUng0oVURqK0oZV/aDQDG+V3oVIVXqfrFa4iCPu4fgisog6tgx/bnaB6PA+HRaGa4+rSfiFXZGcj7Zciq0ar3Wm9D4A8vxUt1oXXWKjXixyuCClI5UvhLnl/0joKgNENnn+HpcOKlCqyPtNS4aeSDrXaK+34w/GHjhYgtzbXozJsb6P0IZJyuBwKr9KPevf44FO7dRLgTk95no9ipEkpQDif1/VaiBik0Wx3mgefvg61Xeb4rbyAsQYFochB76Ou9z6Xj9pHP5/9EnA4b1dO3/BRYV/ahqpQz6cxIXu9SGTvpHn06/l5ANw5ja7wSKpmEOQEoYCgQfay4fDnZqd5sXYWAFWMMrtsRU3lUsVVoLWuTrOlsA4aObsIcABYZJFFMRYTB5AN9Wtd2u8DnK+tXQRcxhfIiAJoEBNN6IW7/V5WHsZHZ0xGAyFMRXw5xsrgcgzQ70ZW9Uk8kRgxF3Q0X0remzAWlTGoUwVBmYziViIhX11dzXEAshpj7cbAnIqigmE0seITuL6ZD+FWUcWYCKYYuzVHIwss62o2u57v2P5MRTalqcIkzuaLD3+7mc0WcQBjZD7fCsCQzZewZjcL1XvOQBwobExtMmQVJwsN+FewgqbiFKaT+N3QguuFHQs3NkG5v4XR8O5OXsKBqWCZLS4Mf48Pl3FMXqr3XGxg3VnLOfajqOKY7fuyDJ6Xjy3QSyCoovIix9b2ZeybhNhAnP+8dReASaA2+DZtuLZnG8R3NNf3HnzDdqkL/tdnJg/JpOPoJOl6nk9tv+y6jzo8EtKwjST7ZGBF3zHkpGvoLnnyvQaljpfUHqlvuE9GAPTZjLL9RD2DerJDbJuyvlm3vkPJw/xR//kxQmVKCfzhLQld6jmus8DJ/iuGYbC+KV0afs83zZ/ZSYoq8H+TjQAAAABJRU5ErkJggg==",
      description: "Authentic cultural experiences with local hosts"
    },
    {
      name: "Ecophiles (Eco-friendly stays)",
      link: "https://ecophiles.com/sustainable-travel-destinations-eco-hotels/", // Example, specific link might vary
      logo: "data:image/webp;base64,UklGRtICAABXRUJQVlA4WAoAAAAQAAAAJgAAJgAAQUxQSBIBAAARd6CgbRs2p74dbMO0iIhb6RvrDQGAVm3brq2InM/xhhBUoAcnlAPG+K40h4l9QENE/yfg+6pltUr58erv3NT0qd7UzLUspfpSbVCt1qqrUyz77WUe1Vz7DYsdnLWr0+xZPRQJKcVxZNlqNeMyktPBhlxCIbhBBdcqzzU3q6tm6TYgkqutSmuVxUWVg7VN4tBJ1Zwd5kApB7In7fngaJmzJpVHlhkExRdrD8/HZxBGwlxzXMxO21YgNxuYxBCRC6X6q1YR67ZMqOlIdk8rWLFO7lY1yz11Y/MhPdhlf7xW3ezBYwvZVav24Kp2d07GzCUHhxAFsFuBISDk4EZ+MZ4XwPUPfz6E91//f/gJ/OQXwLcXVlA4IJoBAABwBwCdASonACcAPpEqpFIloaWlk5CwEglAGNV81qAdJvMONU9ixP9Hy/fmj0SeqSYVth/DGWnedKU1yle+z+0hxsScAAD51oZCsa2RV90wtgI9cx+Nb/5afvQFS3HZM2QMlGvkLMZo6/g96CkIKHf+Au3OpX7/6yv/9ZX/+sryLyH8s+oCO0MwJzFUaPge0Oh+hZg0B/6J+rvlpVHuu5xCEMsBxNWDPeEdfIP/JbQiCX3ZN8PzPwS7oTfFexhf9yZ7jKuQ09vEyNZGXsbaXLPO1ayUS1taRLF4ZSIgbxLszzvLP32FR/9LTn/+c98loEGXVP068nK/+7Ww+4KWLJfagRqeqYPf9f+f9/OqYALM8/ez+juB7mN0V1s5tzhFfruZdhn3Ta+01eMUTZNzHslrj54KabwDfT5g63ddX7dvnzs2U7A/7/34YqRyiMoWapQ/ZDUnRHVrBBGHieBuo09Ig7LBFGzCuP+ef1Koqd3f9VeEUFEhGiy3yXtDv0/rtbU1DkbOn+14gJZPCwP5E6M3DStNe31K9TAAAA==",
      description: "Sustainable and eco-friendly accommodations"
    },
    {
      name: "Local Tourism Boards",
      link: "https://www.incredibleindia.org/content/incredible-india-new/en/destinations.html", // Example for India
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEVHcEz/a0X/bEj/aUP/aUP/a0b/bEf/Z0H/aEH/Z0H/Zj//akT/Yjn/XC//d1X/xLX/0cP/3dL/9e7/oYr//Pb/+PL/rpr/uKX/7OP/l33/aEL/jHD/6OD/+fL/xbX/9e7/9O3/9e5cQb5WAAAAInRSTlMAO4TC5/+FZ//eIdP//////////////////4X/LUPkhcLn+hVGywAAAR5JREFUeAF90te2hCAMQFEsjFEDQobYp/3/T16WRG6f/XoslKisKKta67q6FOqnpoasbb6lrocI0ZiU+05lhYbIDs7TFVMuvjewgTmMErXUDhLNRGGSCDp9uQdBROwMiP5YJwj0TOwNgmhibCGx1jMz+fzhOq4GEpzC7L0bpgUhr2kFoTWgMQYRTqWqIEM7TRYhq1QNmZ1DmC1ktYIMpyAbFfp9fPfZ9wtaczpYqzVA2s9FFVLsMviZQsTz7IYtXVsdE1w9BaYTc1gQ2uPgzXVmpoyjWaeDV70LRJQrD4ObHaYrUzsT8TxqlzqP5hglGaMbsdNoZkrRGxkiqQ4BLJ2sNNG1gBtLiytNo5k17XhGvjfqp/3xfBG9no9dnT4AMAsexrw7T6IAAAAASUVORK5CYII=",
      description: "Official resources for guesthouses and local stays"
    }
  ];

  const generateBookingLink = (platform) => {
    const baseUrl = platform.link;
    const params = new URLSearchParams();

    // Specific logic for platforms that use "searchText" or similar
    if (platform.name === "MakeMyTrip" || platform.name === "Goibibo") {
      if (location) params.append("searchText", location);
    } else if (platform.name === "Booking.com" || platform.name === "Agoda") {
      if (location) params.append("ss", location); // Booking.com and Agoda often use 'ss' for destination
    } else if (platform.name === "Airbnb") {
        if (location) params.append("query", location);
        params.append("checkin", checkIn.toISOString().split('T')[0]);
        params.append("checkout", checkOut.toISOString().split('T')[0]);
        params.append("adults", adults);
        if (children > 0) params.append("children", children);
        return `${baseUrl}s/homes?${params.toString()}`; // Airbnb has a specific search path
    } else if (platform.name === "Homestay.com") {
        if (location) params.append("destination", location);
    }


    params.append("checkin", checkIn.toISOString().split('T')[0]);
    params.append("checkout", checkOut.toISOString().split('T')[0]);
    params.append("adults", adults);
    if (children > 0) params.append("children", children);

    // Some platforms may not support all parameters directly in the URL in the same way.
    // This is a simplified example. For full integration, you might need to consult
    // each platform's developer documentation or mimic their search URL structure closely.
    return `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}${params.toString()}`;
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
          Search on Top Hotel Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        {/* Rural Accommodations Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Exploring Rural Areas? Try These Options!
        </h2>
        <div className="bg-blue-50 rounded-xl p-6 mb-12 shadow-xl">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            In many beautiful rural parts of India, traditional hotels might be scarce. Instead, you'll find charming homestays, eco-friendly lodges, and unique guesthouses that offer an authentic local experience. These options often provide a deeper connection to the culture and nature of the region.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ruralPlatforms.map((platform) => (
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
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <span className="text-green-600 font-medium">Find Stays</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p className="font-semibold mb-2">Can't find what you're looking for?</p>
            <p>Consider reaching out to local tourism offices or community-based tourism initiatives in the specific rural area you wish to visit. They often have unlisted gems!</p>
          </div>
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