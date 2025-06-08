import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

// Fix for default Leaflet marker icon issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Dummy data for rural tourism locations
const ruralLocations = [
  {
    id: 1,
    name: 'Serene Homestay',
    description: 'A cozy homestay amidst nature, perfect for relaxation.',
    category: 'Homestay',
    coordinates: [28.6139, 77.2090], // Delhi coordinates for example
    imageUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    id: 2,
    name: 'Adventure Trails',
    description: 'Explore trekking and nature walks in the hills.',
    category: 'Adventure',
    coordinates: [28.7041, 77.1025], // Another Delhi coordinate
    imageUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    id: 3,
    name: 'Cultural Village Tour',
    description: 'Experience local culture, traditions, and crafts.',
    category: 'Cultural',
    coordinates: [28.5355, 77.3910], // Noida coordinate
    imageUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    id: 4,
    name: 'Riverside Camp',
    description: 'Camping by the river with bonfire and stargazing.',
    category: 'Adventure',
    coordinates: [28.4595, 77.0266], // Gurgaon coordinate
    imageUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    id: 5,
    name: 'Farm Stay Retreat',
    description: 'Learn about organic farming and enjoy farm-fresh food.',
    category: 'Homestay',
    coordinates: [28.6339, 77.2190], // Delhi coordinate
    imageUrl: 'https://via.placeholder.com/150/f66b97',
  },
];

const RegionComponent = () => {
  const [filteredLocations, setFilteredLocations] = useState(ruralLocations);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null); // For modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mapRef = useRef();

  const categories = ['All', ...new Set(ruralLocations.map(loc => loc.category))];

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
        loc.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredLocations(results);
  }, [selectedCategory, searchTerm]);

  // Function to center map on a specific location
  const panToLocation = (coordinates) => {
    if (mapRef.current) {
      mapRef.current.setView(coordinates, 13); // Zoom level 13
    }
  };

  const openLocationModal = (location) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
  };

  const closeLocationModal = () => {
    setIsModalOpen(false);
    setSelectedLocation(null);
  };

  // Component to get map instance
  function MapSetter() {
    const map = useMapEvents({});
    useEffect(() => {
      mapRef.current = map;
    }, [map]);
    return null;
  }


  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Sidebar for Filters and List */}
      <div className="w-full lg:w-1/3 bg-white p-6 shadow-lg overflow-y-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-4">
          Explore Rural India
        </h2>

        {/* Search Input */}
        <div className="mb-6">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Locations
          </label>
          <input
            type="text"
            id="search"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="e.g., homestay, trekking"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Category
          </label>
          <select
            id="category"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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

        {/* Location List */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Found Locations ({filteredLocations.length})
          </h3>
          <ul className="space-y-4">
            {filteredLocations.map(location => (
              <li
                key={location.id}
                className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center space-x-4"
                onClick={() => {
                  panToLocation(location.coordinates);
                  openLocationModal(location);
                }}
              >
                <img src={location.imageUrl} alt={location.name} className="w-16 h-16 rounded-md object-cover" />
                <div>
                  <p className="text-lg font-medium text-gray-900">{location.name}</p>
                  <p className="text-sm text-gray-600 truncate">{location.description}</p>
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                    {location.category}
                  </span>
                </div>
              </li>
            ))}
            {filteredLocations.length === 0 && (
              <p className="text-center text-gray-600 py-8">No locations found matching your criteria.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-2/3 h-96 lg:h-auto">
        <MapContainer
          center={[28.6139, 77.2090]} // Default center (e.g., India's general region)
          zoom={10}
          scrollWheelZoom={true}
          className="h-full w-full rounded-lg shadow-xl"
        >
          <MapSetter />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredLocations.map(location => (
            <Marker
              key={location.id}
              position={location.coordinates}
              eventHandlers={{
                click: () => {
                  openLocationModal(location);
                },
              }}
            >
              <Popup>
                <div className="font-semibold text-lg">{location.name}</div>
                <p className="text-gray-700">{location.description}</p>
                <span className="text-xs text-indigo-600">{location.category}</span>
                <button
                  onClick={() => openLocationModal(location)}
                  className="mt-2 px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors"
                >
                  View Details
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Location Detail Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLocationModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-gray-900"
                  >
                    {selectedLocation?.name}
                  </Dialog.Title>
                  <div className="mt-4">
                    <img src={selectedLocation?.imageUrl} alt={selectedLocation?.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <p className="text-sm text-gray-700">
                      {selectedLocation?.description}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Category: <span className="font-medium text-indigo-600">{selectedLocation?.category}</span>
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                      onClick={closeLocationModal}
                    >
                      Got it, thanks!
                    </button>
                    {/* Add a link to a dedicated page for this location if applicable */}
                    <a
                      href={`/locations/${selectedLocation?.id}`} // Example route
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Learn More
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default RegionComponent;