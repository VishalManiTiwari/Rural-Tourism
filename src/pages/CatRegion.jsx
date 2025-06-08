import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Updated data tailored for Rural Tourism
const regionsData = [
  {
    id: 1,
    title: "Agri-Adventures",
    desc: "Experience life on the farm, from harvesting to traditional cooking workshops. Connect with the land and local farmers.",
    icon: "🚜", // Tractor icon
    color: "from-lime-100 to-lime-50", // More earthy, agricultural tones
    link: "/agri-adventures",
    images: [
      "https://images.unsplash.com/photo-1544320700-f9de6488d070?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1550953935-430c4e09f583?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featuredLocation: "Green Acre Farms",
    activities: ["Farm Stays", "Harvesting", "Milking", "Cooking Classes"]
  },
  {
    id: 2,
    title: "Village Life & Crafts",
    desc: "Immerse in authentic village life, learn traditional crafts, and explore local markets. Discover the heart of rural culture.",
    icon: "🧶", // Yarn/craft icon
    color: "from-orange-100 to-orange-50", // Warm, traditional tones
    link: "/village-crafts",
    images: [
      "https://images.unsplash.com/photo-1590487009477-8c34f26ee009?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579273163255-75e3c79a941e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featuredLocation: "Artisan Hamlet",
    activities: ["Pottery Workshops", "Weaving Demos", "Local Festivals", "Homestays"]
  },
  {
    id: 3,
    title: "Eco-Friendly Retreats",
    desc: "Reconnect with nature in sustainable rural accommodations. Enjoy serene environments and learn about ecological practices.",
    icon: "♻️", // Recycle/eco icon
    color: "from-emerald-100 to-emerald-50", // Nature-friendly greens
    link: "/eco-retreats",
    images: [
      "https://images.unsplash.com/photo-1502422791881-807d81a95b34?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1620912163749-923c6f113854?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featuredLocation: "The Sustainable Haven",
    activities: ["Permaculture Tours", "Renewable Energy Workshops", "Nature Trails", "Yoga & Wellness"]
  },
  {
    id: 4,
    title: "Rural Heritage Tours",
    desc: "Step back in time and discover the historical significance of rural landscapes, ancient ruins, and forgotten traditions.",
    icon: "🏛️", // Ancient building icon
    color: "from-stone-100 to-stone-50", // Earthy, historical tones
    link: "/rural-heritage",
    images: [
      "https://images.unsplash.com/photo-1549488319-e5a95f2a1b5c?auto=format&fit=crop&q=80&w=2866&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533596773950-c8ff4626786c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featuredLocation: "Ancient Crossroads",
    activities: ["Historical Walks", "Archeological Sites", "Ancestral Storytelling", "Traditional Cuisine"]
  },
];

const CatRegion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState(null); // State to manage the modal
  const sliderRef = useRef(null); // Ref to access Slider methods like slickGoTo

  // Function to simulate navigation (in a real app, use react-router-dom's useNavigate)
  const handleRegionClick = (region) => {
    alert(`Exploring: ${region.title} experience!\nFeatured location: ${region.featuredLocation}\nLink: ${region.link}`);
    // Example with react-router-dom:
    // import { useNavigate } from 'react-router-dom';
    // const navigate = useNavigate();
    // navigate(region.link);
  };

  // Function to open the Quick View Modal
  const openQuickViewModal = (region, e) => {
    e.stopPropagation(); // Prevents event bubbling from card if card itself was clickable
    setSelectedRegion(region); // Set the region data for the modal
  };

  // Function to close the Quick View Modal
  const closeQuickViewModal = () => {
    setSelectedRegion(null); // Clear the region data, hiding the modal
  };

  // react-slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1, // Only one slide visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false, // Hide default arrows, we'll use custom navigation
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveIndex(next), // Update activeIndex for custom dots/thumbnails
    appendDots: dots => (
      <div className="mt-6">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <button
        className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? 'bg-green-600 w-6' : 'bg-green-300'}`}
        aria-label={`Go to slide ${i + 1}`}
      />
    )
  };

  return (
    <div className={`w-full py-16 bg-gradient-to-b ${regionsData[activeIndex].color}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title Section */}
        <h2 className="text-5xl font-extrabold text-center mb-6 text-gray-900 font-sans leading-tight">
          Discover the Soul of <span className="text-green-700">Rural Tourism</span>
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg">
          Embark on an authentic journey to experience the unique charm of rural India. From farm life to traditional crafts,
          find your perfect retreat in the heart of the countryside.
        </p>

        {/* Slider Section */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-lime-200 opacity-20 hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-orange-200 opacity-20 hidden md:block"></div>

          <Slider {...settings} ref={sliderRef}>
            {regionsData.map((region) => (
              <div key={region.id} className="px-4">
                {/* Region Card */}
                <div
                  className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center relative overflow-hidden group transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border-b-4 border-green-400"
                >
                  {/* Background gradient for the card */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-40 rounded-3xl z-0`}></div>

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Region Icon with hover animation */}
                    <div className="text-7xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {region.icon}
                    </div>
                    {/* Region Title and Description */}
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">{region.title}</h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed max-w-sm">{region.desc}</p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                      <button
                        onClick={() => handleRegionClick(region)} // Triggers navigation simulation
                        className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg font-medium transform hover:scale-105"
                      >
                        Explore Now
                      </button>
                      <button
                        onClick={(e) => openQuickViewModal(region, e)} // Triggers modal open
                        className="px-8 py-3 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors duration-300 shadow-md text-lg font-medium transform hover:scale-105"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Thumbnail Navigation (controls the slider) */}
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          {regionsData.map((region, index) => (
            <button
              key={region.id}
              onClick={() => {
                sliderRef.current.slickGoTo(index); // Programmatically changes the slider's current slide
                setActiveIndex(index); // Keeps our activeIndex state in sync for styling
              }}
              className={`flex flex-col items-center group cursor-pointer p-2 rounded-lg transition-all duration-300 ${index === activeIndex ? 'bg-green-50 opacity-100 scale-105' : 'opacity-60 hover:opacity-90'}`}
              aria-label={`Go to ${region.title}`}
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl shadow-md mb-2 border border-gray-200 group-hover:border-green-400 transition-all duration-300">
                {region.icon}
              </div>
              <span className={`text-sm font-semibold ${index === activeIndex ? 'text-green-700' : 'text-gray-700'}`}>
                {region.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedRegion && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full relative transform scale-95 animate-modal-in">
            {/* Close Button */}
            <button
              onClick={closeQuickViewModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">{selectedRegion.icon}</div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{selectedRegion.title}</h3>
              <p className="text-gray-700 text-lg">{selectedRegion.desc}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">Featured Rural Location:</h4>
              <p className="text-xl text-green-700">{selectedRegion.featuredLocation}</p>
            </div>

            {selectedRegion.activities && selectedRegion.activities.length > 0 && (
              <div className="mb-6">
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">Experience Highlights:</h4>
                <ul className="flex flex-wrap gap-2 justify-center">
                  {selectedRegion.activities.map((activity, index) => (
                    <li key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">Rural Gallery:</h4>
              <div className="grid grid-cols-2 gap-4">
                {selectedRegion.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedRegion.title} - Image ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  closeQuickViewModal(); // Close modal first
                  handleRegionClick(selectedRegion); // Then trigger navigation
                }}
                className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg text-lg font-medium"
              >
                Go to {selectedRegion.title} Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatRegion;