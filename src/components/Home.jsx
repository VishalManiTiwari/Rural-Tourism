import React from 'react';
import Hero from '../pages/Hero';
import Search from '../pages/Search';
import CatRegion from '../pages/CatRegion';
import RusticWonders from '../pages/RusticWonders';
import HotelBooking from '../pages/HotelBooking';

const Home = () => {
  return (
    <div className="mt-12  p-4">
      
      <Hero/>
      <Search/>
      <CatRegion/>
      <RusticWonders/>
      <HotelBooking/>
    </div>
  );
};

export default Home;