import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiSearch, FiFilter, FiMapPin, FiStar, FiCalendar, FiUsers, FiDollarSign, FiHome,  FiBookOpen, FiFeather } from 'react-icons/fi'; 
import { Link } from 'react-router-dom';

// Dummy data for rural tourism locations with more details
const ruralLocations = [
  {
    id: 1,
    name: 'Serene Homestay',
    description: 'Experience authentic rural living in this cozy homestay nestled in the foothills of the Himalayas. Wake up to the sound of birds and enjoy organic farm-to-table meals.',
    category: 'Homestay',
    imageUrl: 'https://www.homestaysofindia.com/wp-content/uploads/2024/07/Exterior-1-Serene-Wooden-Homestay-Mori-Uttarkash.jpg',
    price: 1500,
    rating: 4.7,
    capacity: 4,
    activities: ['Village walks', 'Cooking classes', 'Bird watching'],
    amenities: ['WiFi', 'Hot water', 'Private bathroom'],
    availability: 'Year-round'
  },
  {
    id: 2,
    name: 'Adventure Trails Camp',
    description: 'Thrilling trekking and nature walks through untouched wilderness. Our expert guides will take you through scenic trails and hidden waterfalls.',
    category: 'Adventure',
    imageUrl: 'https://www.treksandtrails.org/system/images/000/713/398/547704acaf58bc787ff1de13a90196f9/x600gt/Wayanad_camp.jpeg?1703438164',
    price: 2500,
    rating: 4.9,
    capacity: 12,
    activities: ['Trekking', 'Rock climbing', 'Night safaris'],
    amenities: ['Tents', 'Campfire', 'Meals included'],
    availability: 'October to May'
  },
  {
    id: 3,
    name: 'Cultural Village Experience',
    description: 'Immerse yourself in local traditions with artisan workshops, folk performances, and hands-on craft experiences. Meet the community and learn age-old techniques.',
    category: 'Cultural',
    imageUrl: 'https://www.sharpholidays.in/blog/wp-content/uploads/2018/08/Bishnoi-villages-850x540.jpg',
    price: 1200,
    rating: 4.5,
    capacity: 8,
    activities: ['Pottery making', 'Textile weaving', 'Folk dance'],
    amenities: ['Workshop space', 'Local guides', 'Cultural shows'],
    availability: 'Year-round'
  },
  {
    id: 4,
    name: 'Riverside Eco Camp',
    description: 'Sustainable camping by the river with bonfire nights and stargazing. Our eco-friendly tents minimize environmental impact while maximizing comfort.',
    category: 'Adventure',
    imageUrl: 'https://www.teavillagehomestay.in/wp-content/uploads/2019/04/IMG-20150807-WA0014.jpg',
    price: 1800,
    rating: 4.6,
    capacity: 6,
    activities: ['Kayaking', 'Fishing', 'Nature photography'],
    amenities: ['Solar power', 'Compost toilets', 'Organic meals'],
    availability: 'November to March'
  },
  {
    id: 5,
    name: 'Organic Farm Retreat',
    description: 'Learn about sustainable agriculture while enjoying fresh produce straight from the farm. Participate in farming activities or simply relax in the countryside.',
    category: 'Homestay',
    imageUrl: 'https://swan-yoga-goa.com/wp-content/uploads/2015/12/organic-farm-at-swan-yoga-retreat.jpg',
    price: 2000,
    rating: 4.8,
    capacity: 5,
    activities: ['Farm tours', 'Milking cows', 'Cooking workshops'],
    amenities: ['Farm fresh meals', 'Bicycle rental', 'Library'],
    availability: 'Year-round'
  },
  {
    id: 6,
    name: 'Wildlife Safari Lodge',
    description: 'Stay at the edge of a national park with daily safari tours to spot tigers, elephants and hundreds of bird species. Expert naturalists guide all excursions.',
    category: 'Wildlife',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/bc/a5/19/bandipur-safari-lodge.jpg?w=900&h=500&s=1',
    price: 3500,
    rating: 4.9,
    capacity: 10,
    activities: ['Jeep safaris', 'Bird watching', 'Nature walks'],
    amenities: ['Swimming pool', 'Restaurant', 'Observation deck'],
    availability: 'November to June'
  }
];

const categoryIcons = {
  Homestay: FiHome,
  // Adventure: FiMountain,
  Cultural: FiBookOpen,
  Wildlife: FiFeather,
  // Add more as needed
};

const Region = () => {
  const [filteredLocations, setFilteredLocations] = useState(ruralLocations);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...new Set(ruralLocations.map(loc => loc.category))];
  const maxPrice = Math.max(...ruralLocations.map(loc => loc.price));

  useEffect(() => {
    let results = ruralLocations;

    // Filter by category
    if (selectedCategory !== 'All') {
      results = results.filter(loc => loc.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      results = results.filter(loc =>
        loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.activities.some(activity =>
          activity.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by price range
    results = results.filter(loc =>
      loc.price >= priceRange[0] && loc.price <= priceRange[1]
    );

    setFilteredLocations(results);
  }, [selectedCategory, searchTerm, priceRange]);

  const openLocationModal = (location) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
  };

  const closeLocationModal = () => {
    setIsModalOpen(false);
    setSelectedLocation(null);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="flex flex-col py-2 min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542456488-8120b42f2b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Uncover the Soul of Rural India
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">
            Discover unique homestays, thrilling adventures, and authentic cultural experiences off the beaten path.
          </p>
          <div className="flex justify-center">
            {/* Search input in hero section */}
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg shadow-lg"
                placeholder="Search for your next rural adventure..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Header & Search/Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-lg mb-8 -mt-20 relative z-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 md:mb-0 flex items-center">
            <FiMapPin className="mr-3 text-green-600" />
            Explore Destinations
          </h2>
          <div className="flex space-x-2 w-full md:w-auto justify-end">
            {/* Search input - moved to hero, kept for filtering if needed */}
            {/* <div className="relative flex-1 md:flex-none">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Search locations, activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div> */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            >
              <FiFilter className="mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl mb-8 space-y-5 shadow-lg">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-base py-2.5"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: <span className="font-semibold">{formatPrice(priceRange[0])}</span> - <span className="font-semibold">{formatPrice(priceRange[1])}</span>
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  id="price-min"
                  min="0"
                  max={maxPrice}
                  step="100"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), Math.max(parseInt(e.target.value), priceRange[1])])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <input
                  type="range"
                  id="price-max"
                  min="0"
                  max={maxPrice}
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([Math.min(priceRange[0], parseInt(e.target.value)), parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
              </div>
            </div>
          </div>
        )}

        {/* Category Showcase Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Popular Experiences</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.filter(cat => cat !== 'All').map(category => {
              const Icon = categoryIcons[category] || FiMapPin; // Fallback icon
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowFilters(true); // Open filters to show applied category
                    setSearchTerm(''); // Clear search when selecting category
                  }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
                >
                  <Icon className="text-5xl text-green-600 mb-4 group-hover:text-green-700 transition-colors" />
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">{category}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Location List */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              {filteredLocations.length} {filteredLocations.length === 1 ? 'Experience' : 'Experiences'} Found
            </h3>
            <span className="text-md text-gray-500">
              Sorted by: <span className="font-semibold">Rating</span>
            </span>
          </div>

          {filteredLocations.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <div className="text-gray-500 mb-4 text-xl">No experiences match your criteria.</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setPriceRange([0, maxPrice]);
                  setShowFilters(false); // Close filters after reset
                }}
                className="text-green-600 hover:text-green-800 font-medium text-lg transition-colors duration-200"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLocations.map(location => (
                <div
                  key={location.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                  onClick={() => openLocationModal(location)}
                >
                  <img
                    src={location.imageUrl}
                    alt={location.name}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-gray-900 pr-4">{location.name}</h4>
                      <span className="flex items-center text-base text-yellow-600 flex-shrink-0">
                        <FiStar className="mr-1 fill-current" />
                        {location.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{location.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                        {location.category}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                        <FiUsers className="mr-1" /> {location.capacity}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                        <FiDollarSign className="mr-1" /> {formatPrice(location.price)}/night
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Location Detail Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeLocationModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-2xl transition-all">
                  {selectedLocation && (
                    <>
                      <div className="relative">
                        <img
                          src={selectedLocation.imageUrl}
                          alt={selectedLocation.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <Dialog.Title
                            as="h3"
                            className="text-3xl font-bold leading-6 text-white"
                          >
                            {selectedLocation.name}
                          </Dialog.Title>
                          <div className="flex items-center mt-2 text-white">
                            <div className="flex items-center text-yellow-400 mr-4">
                              <FiStar className="mr-1 fill-current" />
                              <span>{selectedLocation.rating} Rating</span>
                            </div>
                            <div>
                              <span className="font-medium">{selectedLocation.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="md:col-span-2">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">About This Experience</h4>
                            <p className="text-gray-700 mb-6 text-base leading-relaxed">{selectedLocation.description}</p>

                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Activities</h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {selectedLocation.activities.map((activity, index) => (
                                <span key={index} className="inline-flex items-center rounded-full bg-green-50 px-3.5 py-1.5 text-sm font-medium text-green-700">
                                  {activity}
                                </span>
                              ))}
                            </div>

                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedLocation.amenities.map((amenity, index) => (
                                <span key={index} className="inline-flex items-center rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700">
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="md:col-span-1">
                            <div className="bg-gray-50 p-5 rounded-xl shadow-inner">
                              <h4 className="text-xl font-bold text-gray-800 mb-5">Booking Details</h4>
                              <div className="space-y-5">
                                <div className="flex items-center">
                                  <FiDollarSign className="text-gray-500 text-xl mr-4 flex-shrink-0" />
                                  <div>
                                    <div className="text-sm text-gray-500">Price per night</div>
                                    <div className="text-2xl font-bold text-green-600">
                                      {formatPrice(selectedLocation.price)}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center">
                                  <FiUsers className="text-gray-500 text-xl mr-4 flex-shrink-0" />
                                  <div>
                                    <div className="text-sm text-gray-500">Capacity</div>
                                    <div className="font-semibold text-lg text-gray-800">
                                      Up to {selectedLocation.capacity} people
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center">
                                  <FiCalendar className="text-gray-500 text-xl mr-4 flex-shrink-0" />
                                  <div>
                                    <div className="text-sm text-gray-500">Availability</div>
                                    <div className="font-semibold text-lg text-gray-800">
                                      {selectedLocation.availability}
                                    </div>
                                  </div>
                                </div>

                                <button className="w-full mt-6 py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                                  
                                  <Link to='/hotel'>
                                  Book Now
                                  </Link>
                                </button>

                                <button className="w-full py-2.5 px-4 border border-green-600 text-green-600 hover:bg-green-50 font-medium rounded-lg transition duration-300">
                                  Contact Host
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3 border-t border-gray-100">
                    <button
                      type="button"
                      className="px-5 py-2.5 text-gray-700 hover:text-gray-900 font-medium rounded-md transition-colors"
                      onClick={closeLocationModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow-md transition-colors"
                    >
                      Save to Wishlist
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Footer Section (Optional, but good practice) */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Rural India Explorer</p>
          <p className="text-sm mb-4">Discover the hidden gems of rural India.</p>
          <div className="flex justify-center space-x-6 text-xl">
            <a href="#" className="hover:text-green-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-green-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-green-400 transition-colors">Twitter</a>
          </div>
          <p className="text-xs mt-4 opacity-75">&copy; {new Date().getFullYear()} Rural India Explorer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Region;