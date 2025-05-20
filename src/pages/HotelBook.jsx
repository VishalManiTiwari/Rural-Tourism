import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HotelBook = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/hotel');
  };

  return (
    <motion.div 
      className="relative group top-14"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M4 4a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1-5a1 1 0 100 2h2a1 1 0 100-2H8z" 
            clipRule="evenodd" 
          />
        </svg>
        Book Hotel
      </button>

      {/* Animated underline effect */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-amber-700 rounded-full w-0 group-hover:w-4/5 transition-all duration-300"></div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-amber-400/30 blur-md -z-10"></div>
    </motion.div>
  );
};

export default HotelBook;
