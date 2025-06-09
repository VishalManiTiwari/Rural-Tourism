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
    icon: "🚜",
    color: "from-lime-100 to-lime-50", 
    link: "/agri-adventures", 
    images: [
      "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/02/full/1722596238-1449.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfytDLNX6Y1p7Ao1rWG66iDv_Hio3iTdJjA&s"
    ],
    featuredLocation: "Green Acre Farms",
    activities: [
      { name: "Farm Stays", detail: "Cozy farmhouses, organic meals, wake up to nature.", image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/08/Untitled-design-91.jpg" },
      { name: "Harvesting", detail: "Seasonal fruit & vegetable picking, learn about crops.", image: "https://img-cdn.krishijagran.com/88278/farmers.jpg" },
      { name: "Milking", detail: "Hands-on experience with dairy animals, fresh milk tasting.", image: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/4OJH7CK5WFPWLJFKFLPBWEOYBQ.jpg" },
      { name: "Cooking Classes", detail: "Traditional recipes with farm-fresh ingredients.", image: "https://i.ytimg.com/vi/E_Sdbw97pGk/maxresdefault.jpg" }
    ]
  },
  {
    id: 2,
    title: "Village Life & Crafts",
    desc: "Immerse in authentic village life, learn traditional crafts, and explore local markets. Discover the heart of rural culture.",
    icon: "🧶", // Yarn/craft icon
    color: "from-orange-100 to-orange-50", // Warm, traditional tones
    link: "/village-crafts",
    images: [
      "https://miro.medium.com/v2/resize:fit:1200/1*lco_ubQwnvJxlpnuSTjcwQ.jpeg",
      "https://i.pinimg.com/736x/d0/7c/ed/d07ced782039749b69775894d1bca572.jpg"
    ],
    featuredLocation: "Artisan Hamlet",
    activities: [
      { name: "Pottery Workshops", detail: "Hand-on clay modeling and wheel throwing.", image: "https://content.jdmagicbox.com/comp/def_content/pottery-classes/basic-pottery-pottery-classes-4-l33q3.jpg" },
      { name: "Weaving Demos", detail: "Observe traditional loom weaving techniques.", image: "https://cdn.shopify.com/s/files/1/1909/1947/articles/handloom_and_khadi_weaving_9efdbffc-823a-4d0a-907d-eb44f59803b2.png?v=1667143209" },
      { name: "Local Festivals", detail: "Participate in vibrant cultural celebrations.", image: "https://www.namasteindiatrip.com/blog/wp-content/uploads/2019/04/Bihu-Festival.jpg" },
      { name: "Homestays", detail: "Authentic village hospitality and local cuisine.", image: "https://www.onmycanvas.com/wp-content/uploads/2021/03/woodhomesnaggarmanalihimachalpradesh-best-homestays-in-india.jpg" }
    ]
  },
  {
    id: 3,
    title: "Eco-Friendly Retreats",
    desc: "Reconnect with nature in sustainable rural accommodations. Enjoy serene environments and learn about ecological practices.",
    icon: "♻️", // Recycle/eco icon
    color: "from-emerald-100 to-emerald-50", // Nature-friendly greens
    link: "/eco-retreats",
    images: [
      "https://www.agoda.com/wp-content/uploads/2019/02/Eco-friendly-hotels-in-India-Banasura-Hill-Resort.jpg",
      "https://im.rediff.com/getahead/2016/feb/19getaways-kerala.jpg"
    ],
    featuredLocation: "The Sustainable Haven",
    activities: [
      { name: "Permaculture Tours", detail: "Learn about sustainable farming and living.", image: "https://media.assettype.com/homegrown%2Fimport%2Fbook%2Fviiolftpmi-1538400841.jpg" },
      { name: "Renewable Energy Workshops", detail: "Understand solar and wind power applications.", image: "https://www.nrdc.org/sites/default/files/styles/social_sharing_1200x630/public/media-uploads/green_village.jpg?h=d71068d9&itok=bV5MKor9" },
      { name: "Nature Trails", detail: "Guided walks through pristine natural landscapes.", image: "https://www.pigeonforgetncabins.com/wp-content/uploads/2020/12/hiking-in-pigeon-forge.jpg" },
      { name: "Yoga & Wellness", detail: "Rejuvenate with sessions amidst peaceful surroundings.", image: "https://i0.wp.com/krct.ac.in/blog/wp-content/uploads/2024/06/1-4.png" }
    ]
  },
  {
    id: 4,
    title: "Rural Heritage Tours",
    desc: "Step back in time and discover the historical significance of rural landscapes, ancient ruins, and forgotten traditions.",
    icon: "🏛️", // Ancient building icon
    color: "from-stone-100 to-stone-50", // Earthy, historical tones
    link: "/rural-heritage",
    images: [
      "https://www.bain.com/contentassets/abc6db2a2d8b441f95772b2fa70292e1/india-rural-economy-16-9.jpg",
      "https://www.ibef.org/uploads/blog/Digital-India-for-Rural-India1.jpg"
    ],
    featuredLocation: "Ancient Crossroads",
    activities: [
      { name: "Historical Walks", detail: "Guided tours through ancient villages and sites.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/63/8f/5b/caption.jpg?w=500&h=400&s=1" },
      { name: "Archeological Sites", detail: "Explore ruins and ancient artifacts.", image: "https://www.financialexpress.com/wp-content/uploads/2021/12/Harappan-site.jpg" },
      { name: "Ancestral Storytelling", detail: "Hear local legends and historical narratives.", image: "https://humanjourney.us/wp-content/uploads/Elder-sharing-a-storyWilliamEWeissArt-Archive-1024x851-1.jpg" },
      { name: "Traditional Cuisine", detail: "Taste forgotten local delicacies and learn recipes.", image: "https://blog.swiggy.com/wp-content/uploads/2024/12/Image-2_-litti-chokha-1024x538.png" }
    ]
  },
];

const CatRegion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showDetailPage, setShowDetailPage] = useState(false);
  const sliderRef = useRef(null);

  // Function to 'navigate' to the region's dedicated page within the same component
  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setShowDetailPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when 'navigating'
  };

  // Function to open the Quick View Modal
  const openQuickViewModal = (region, e) => {
    e.stopPropagation();
    setSelectedRegion(region);
  };

  // Function to close the Quick View Modal
  const closeQuickViewModal = () => {
    setSelectedRegion(null);
  };

  // Function to go back to the main slider view
  const goBackToHome = () => {
    setShowDetailPage(false);
    setSelectedRegion(null);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  // Click handler for individual activities
  const handleActivityClick = (activityName, detail) => {
    alert(`Activity: ${activityName}\nDetails: ${detail}`);
    // In a real app, this could open another modal, or navigate to an activity-specific page.
  };

  // react-slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveIndex(next),
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
    <div className='mx-[-16px]'>
    <div className={`w-full  py-16 ${showDetailPage ? 'bg-white' : `bg-gradient-to-b ${regionsData[activeIndex].color}`}`}>
      

      
      <div className="max-w-6xl mx-auto px-4">
        {/* Conditional rendering based on showDetailPage state */}
        {!showDetailPage ? (
          <>
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
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-lime-200 opacity-20 hidden md:block"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-orange-200 opacity-20 hidden md:block"></div>

              <Slider {...settings} ref={sliderRef}>
                {regionsData.map((region) => (
                  <div key={region.id} className="px-4">
                    {/* Region Card */}
                    <div
                      className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center relative overflow-hidden group transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border-b-4 border-green-400"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-40 rounded-3xl z-0`}></div>

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="text-7xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          {region.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-3">{region.title}</h3>
                        <p className="text-gray-600 mb-6 text-base leading-relaxed max-w-sm">{region.desc}</p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                          <button
                            onClick={() => handleRegionClick(region)}
                            className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg font-medium transform hover:scale-105"
                          >
                            Explore Now
                          </button>
                          <button
                            onClick={(e) => openQuickViewModal(region, e)}
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
                    sliderRef.current.slickGoTo(index);
                    setActiveIndex(index);
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
          </>
        ) : (
          // --- Detailed Region Page View ---
          <div className={`bg-gradient-to-b ${selectedRegion.color} min-h-screen rounded-3xl p-8 flex flex-col items-center text-center`}>
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-8 text-center relative">
              {/* Back Button */}
              <button
                onClick={goBackToHome}
                className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 text-2xl font-bold flex items-center gap-2 z-10"
                aria-label="Back to home"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
                Back to Home
              </button>

              <div className="mt-12 mb-6">
                <div className="text-8xl mb-4">{selectedRegion.icon}</div>
                <h1 className="text-5xl font-extrabold text-gray-900 mb-3">{selectedRegion.title}</h1>
                <p className="text-xl text-gray-700 leading-relaxed">{selectedRegion.desc}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-3">Featured Rural Location:</h2>
                <p className="text-2xl text-green-700 font-bold">{selectedRegion.featuredLocation}</p>
              </div>

              {/* Enhanced Activities Section (Clickable Cards) */}
              {selectedRegion.activities && selectedRegion.activities.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">Experience Highlights:</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {selectedRegion.activities.map((activity, index) => (
                      <div
                        key={index}
                        onClick={() => handleActivityClick(activity.name, activity.detail)}
                        className="bg-green-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden transform hover:scale-105"
                      >
                        {activity.image && (
                          <img src={activity.image} alt={activity.name} className="w-full h-40 object-cover rounded-t-lg" />
                        )}
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-green-800 mb-2">{activity.name}</h3>
                          <p className="text-gray-600 text-sm">{activity.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-3">Rural Gallery:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedRegion.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedRegion.title} - Image ${index + 1}`}
                      className="w-full h-52 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    />
                  ))}
                </div>
              </div>

              {/* Related Experiences Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Discover More Rural Adventures:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {regionsData
                    .filter((region) => region.id !== selectedRegion.id) // Filter out the current region
                    .slice(0, 2) // Limit to 2 related experiences for brevity
                    .map((relatedRegion) => (
                      <div
                        key={relatedRegion.id}
                        onClick={() => handleRegionClick(relatedRegion)} // Click to 'navigate' to this related region's detail page
                        className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer p-4 flex items-center text-left border-l-4 ${relatedRegion.color.replace('from-', 'border-').split(' ')[0]}-400`}
                      >
                        <div className="text-5xl mr-4">{relatedRegion.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{relatedRegion.title}</h3>
                          <p className="text-gray-600 text-sm">{relatedRegion.desc.substring(0, 70)}...</p>
                          <span className="text-green-600 text-sm font-semibold mt-2 block">Explore this &rarr;</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Call to action button at the bottom of the detail page */}
              <button
                onClick={goBackToHome}
                className="mt-12 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg text-lg font-medium transform hover:scale-105"
              >
                Back to All Rural Categories
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick View Modal (remains unchanged, but ensure it doesn't show on detail page) */}
      {selectedRegion && !showDetailPage && (
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
                      {activity.name} {/* Display activity name from the object */}
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
                  closeQuickViewModal();
                  handleRegionClick(selectedRegion);
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
    </div>
  );
};

export default CatRegion;