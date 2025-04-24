import React from 'react';
import { IoSearch } from 'react-icons/io5';

const Search = () => {
  return (
    <div className="flex justify-center my-7 w-full py-4 px-4">
      <div className=" flex items-center border border-gray-700 bg-white rounded-full shadow-md overflow-hidden">
        <input
          className="flex-grow w-[32rem]  py-4 px-5 outline-none  text-gray-800 placeholder-gray-700"
          type="text"
          placeholder="Search..."
          aria-label="Search input"
        />
        <IoSearch className='text-[22px]  mr-4' />
      </div>
    </div>
  );
};

export default Search;