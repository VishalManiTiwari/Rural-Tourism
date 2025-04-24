import React from 'react';
import Hero from '../pages/Hero';
import Search from '../pages/Search';
import CatRegion from '../pages/CatRegion';
import RusticWonders from '../pages/RusticWonders';

const Home = () => {
  return (
    <div className="mt-20  p-4">
      <Hero/>
      <Search/>
      <CatRegion/>
      <RusticWonders/>
    </div>
  );
};

export default Home;