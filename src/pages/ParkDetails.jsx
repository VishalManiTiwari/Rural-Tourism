import React, { useState } from "react";
import Slider from "react-slick";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom marker icon
const parkIcon = new L.Icon({
  iconUrl:
    "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const parkDetail = [
  {
    image1:
      "https://s7ap1.scene7.com/is/image/incredibleindia/mahatma-gandhi-marine-national-park-port-blair-andaman-and-nicobar-island-1-attr-hero?qlt=82&ts=1726816900914",
    image2:
      "https://s7ap1.scene7.com/is/image/incredibleindia/mahatma-gandhi-marine-national-park-port-blair-andaman-and-nicobar-island-2-attr-hero?qlt=82&ts=1726816832976",
    state: "Andaman and Nicobar Islands",
    name: "Mahatma Gandhi Marine National Park",
    description:
      "A stunning marine park with vibrant coral reefs and diverse marine life, perfect for snorkeling and glass-bottom boat rides.",
    highlights: ["Coral reefs", "Marine biodiversity", "Snorkeling spots"],
    bestTime: "November to April",
    activities: ["Snorkeling", "Glass-bottom boat rides", "Scuba diving"],
    facilities: ["Visitor center", "Restrooms", "Guided tours"],
    location: { lat: 11.5726, lng: 92.6412 },
  },
  {
    image1:
      "https://s7ap1.scene7.com/is/image/incredibleindia/mount-harriet-national-park-port-blair-andaman-&-nicobar-islands-1-attr-hero?qlt=82&ts=1726746385998",
    image2:
      "https://s7ap1.scene7.com/is/image/incredibleindia/mount-harriet-national-park-port-blair-andaman-&-nicobar-islands-2-attr-hero?qlt=82&ts=1726746261480",
    state: "Andaman and Nicobar Islands",
    name: "Mount Manipur National Park",
    description:
      "A stunning marine park with vibrant coral reefs and diverse marine life, perfect for snorkeling and glass-bottom boat rides.",
    highlights: ["Coral reefs", "Marine biodiversity", "Snorkeling spots"],
    bestTime: "November to April",
    activities: ["Snorkeling", "Glass-bottom boat rides", "Scuba diving"],
    facilities: ["Visitor center", "Restrooms", "Guided tours"],
    location: { lat: 11.5726, lng: 92.6412 },
  },
  // ... other park data
];

const ParkDetails = ({ selectedPark, goBack }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const park = parkDetail.find((p) => p.name === selectedPark);

  if (!park) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 max-w-md bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Park Not Found
          </h2>
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={goBack}
          >
            Back to Parks
          </button>
        </div>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Slider {...settings}>
          {[park.image1, park.image2].map((img, i) => (
            <div key={i} className="h-96">
              <img
                src={img}
                alt={park.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x400?text=Park+Image";
                }}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-6">
            <h1 className="text-4xl font-bold text-white">{park.name}</h1>
            <p className="text-green-300">{park.state}</p>
          </div>
        </div>
        <button
          onClick={goBack}
          className="absolute top-4 left-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "overview"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "activities"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("activities")}
          >
            Activities
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "map"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("map")}
          >
            Map
          </button>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About {park.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {park.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Park Highlights
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {park.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Facilities
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {park.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Visitor Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">
                        Best Time to Visit
                      </h4>
                      <p className="text-gray-600">{park.bestTime}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">
                        Location
                      </h4>
                      <p className="text-gray-600">{park.state}</p>
                    </div>

                    <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors shadow-md flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "activities" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Activities at {park.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {park.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {activity}
                    </h3>
                    <p className="text-gray-600">
                      Experience the best {activity.toLowerCase()} opportunities
                      in this breathtaking national park.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "map" && (
            <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
              <MapContainer
                center={[park.location.lat, park.location.lng]}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={[park.location.lat, park.location.lng]}
                  icon={parkIcon}
                >
                  <Popup>{park.name}</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      </div>

      {/* Full-width CTA Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to explore {park.name}?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Plan your visit today and experience the natural beauty of this
            incredible national park.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Book Your Trip
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Download Park Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetails;
