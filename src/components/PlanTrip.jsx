import React from 'react'

const PlanTrip = () => {
  return (
    <div className='mt-20 p-4 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Plan Your Trip</h1>
        <hr className='w-24 mx-auto border-t-2 border-indigo-500' />
      </div>
      
      <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-24 my-10 px-4'>
        <div className='flex-1 max-w-xs'>
          <h2 className='text-xl font-bold mb-4 text-gray-800'>Practical Information</h2>
          <ul className='space-y-3 text-gray-600'>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Weather</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Tourism information center</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Emergency numbers</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Public holidays</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Currency converter</li>
          </ul>
        </div>
        
        <div className='flex-1 max-w-xs'>
          <h2 className='text-xl font-bold mb-4 text-gray-800'>Travel</h2>
          <ul className='space-y-3 text-gray-600'>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Visa Guide</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Airport info</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Travel Partners</li>
          </ul>
        </div>
        
        <div className='flex-1 max-w-xs'>
          <h2 className='text-xl font-bold mb-4 text-gray-800'>Explore India</h2>
          <ul className='space-y-3 text-gray-600'>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Itineraries & packages</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Festivals & events</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Rural Tourism</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>Exquisite craft</li>
            <li className='hover:text-indigo-600 cursor-pointer transition duration-200'>People and culture</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlanTrip