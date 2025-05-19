import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Mock API function to fetch available rooms
const fetchAvailableRooms = async (checkIn, checkOut) => {
  // In a real app, this would be an API call to your backend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'standard',
          name: 'Standard Room',
          description: 'Comfortable room with queen bed',
          price: 120,
          maxOccupancy: 2,
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
          id: 'deluxe',
          name: 'Deluxe Room',
          description: 'Spacious room with king bed and city view',
          price: 180,
          maxOccupancy: 2,
          image: 'https://images.unsplash.com/photo-1566669437685-2c5a1f510d3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
          id: 'suite',
          name: 'Executive Suite',
          description: 'Luxurious suite with separate living area',
          price: 250,
          maxOccupancy: 3,
          image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
          id: 'family',
          name: 'Family Room',
          description: 'Two queen beds perfect for families',
          price: 200,
          maxOccupancy: 4,
          image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        }
      ]);
    }, 500);
  });
};

// Mock API function to submit booking
const submitBooking = async (bookingData) => {
  // In a real app, this would be an API call to your backend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        bookingId: `BOOK-${Math.floor(Math.random() * 1000000)}`,
        ...bookingData
      });
    }, 1000);
  });
};

const HotelBooking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date(Date.now() + 86400000));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('standard');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      loadAvailableRooms();
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (rooms.length > 0) {
      const room = rooms.find(r => r.id === roomType);
      setSelectedRoom(room);
    }
  }, [roomType, rooms]);

  const loadAvailableRooms = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const availableRooms = await fetchAvailableRooms(checkInDate, checkOutDate);
      setRooms(availableRooms);
    } catch (err) {
      setError('Failed to load room availability. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Validate total guests don't exceed room capacity
      if (selectedRoom && (adults + children) > selectedRoom.maxOccupancy) {
        setError(`This room accommodates maximum ${selectedRoom.maxOccupancy} guests`);
        return;
      }

      const bookingData = {
        checkInDate,
        checkOutDate,
        adults,
        children,
        roomType,
        totalNights: calculateNights(),
        totalPrice: calculateTotalPrice(),
        roomDetails: selectedRoom
      };

      const result = await submitBooking(bookingData);
      
      if (result.success) {
        setBookingDetails(result);
        setBookingConfirmed(true);
      }
    } catch (err) {
      setError('Booking failed. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const incrementAdults = () => setAdults(prev => Math.min(prev + 1, 10));
  const decrementAdults = () => setAdults(prev => Math.max(prev - 1, 1));
  const incrementChildren = () => setChildren(prev => Math.min(prev + 1, 10));
  const decrementChildren = () => setChildren(prev => Math.max(prev - 1, 0));

  const calculateNights = () => {
    const diffTime = Math.abs(checkOutDate - checkInDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom) return 0;
    return selectedRoom.price * calculateNights();
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end || new Date(start.getTime() + 86400000));
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <>
      <motion.div 
        className="fixed cursor-pointer w-fit top-18 right-4 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-4 rounded-full shadow-lg flex items-center transition-all duration-300 transform group-hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 cursor-pointer w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1-5a1 1 0 100 2h2a1 1 0 100-2H8z" clipRule="evenodd" />
            </svg>
            Book Hotel
          </button>
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-amber-900/30 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed cursor-pointer inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {bookingConfirmed ? (
              <div className="p-6 cursor-pointer text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600 mb-4">Your reservation has been successfully submitted.</p>
                
                <div className="bg-gray-50 p-4 rounded-lg text-left mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Booking Details</h4>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Confirmation #:</span> {bookingDetails.bookingId}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Room:</span> {selectedRoom.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Dates:</span> {formatDate(checkInDate)} - {formatDate(checkOutDate)}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Guests:</span> {adults} adult{adults !== 1 ? 's' : ''}{children > 0 ? `, ${children} child${children !== 1 ? 'ren' : ''}` : ''}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Total:</span> ${calculateTotalPrice().toFixed(2)}
                  </p>
                </div>
                
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setBookingConfirmed(false);
                  }}
                  className="px-4 py-2 cursor-pointer bg-amber-600 text-white rounded-md hover:bg-amber-700"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="bg-amber-700 px-6 py-4">
                  <h3 className="text-lg font-semibold text-white">Hotel Booking</h3>
                </div>
                <div className="p-6">
                  {isLoading && !selectedRoom && (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
                    </div>
                  )}
                  
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-red-700">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedRoom && (
                    <form onSubmit={handleBooking}>
                      <div className="mb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="w-full md:w-1/3">
                            <img 
                              src={selectedRoom.image} 
                              alt={selectedRoom.name}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          </div>
                          <div className="w-full md:w-2/3">
                            <h3 className="text-lg font-medium text-gray-900">{selectedRoom.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{selectedRoom.description}</p>
                            <p className="text-amber-700 font-medium">
                              ${selectedRoom.price} <span className="text-gray-500 text-sm">per night</span>
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                              Max occupancy: {selectedRoom.maxOccupancy} guest{selectedRoom.maxOccupancy !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Room Type</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          disabled={isLoading}
                        >
                          {rooms.map(room => (
                            <option key={room.id} value={room.id}>{room.name} (${room.price}/night)</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">Dates</label>
                          <DatePicker
                            selected={checkInDate}
                            onChange={handleDateChange}
                            startDate={checkInDate}
                            endDate={checkOutDate}
                            selectsRange
                            minDate={new Date()}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                            disabled={isLoading}
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">Stay Duration</label>
                          <div className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50">
                            <p className="text-gray-800">
                              {calculateNights()} night{calculateNights() !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">Adults</label>
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              type="button"
                              onClick={decrementAdults}
                              className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                              disabled={isLoading || adults <= 1}
                            >
                              -
                            </button>
                            <span className="flex-1 text-center">{adults}</span>
                            <button
                              type="button"
                              onClick={incrementAdults}
                              className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                              disabled={isLoading || adults >= 10}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">Children</label>
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              type="button"
                              onClick={decrementChildren}
                              className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                              disabled={isLoading || children <= 0}
                            >
                              -
                            </button>
                            <span className="flex-1 text-center">{children}</span>
                            <button
                              type="button"
                              onClick={incrementChildren}
                              className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                              disabled={isLoading || children >= 10}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">Price Summary</h4>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>{selectedRoom.name} × {calculateNights()} night{calculateNights() !== 1 ? 's' : ''}</span>
                          <span>${selectedRoom.price * calculateNights()}</span>
                        </div>
                        <div className="border-t border-gray-200 my-2"></div>
                        <div className="flex justify-between font-medium text-gray-900">
                          <span>Total</span>
                          <span>${calculateTotalPrice().toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                          disabled={isLoading}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 flex items-center justify-center"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            'Confirm Booking'
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default HotelBooking;

