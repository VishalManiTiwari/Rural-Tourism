import React from 'react'
import RusticCards from './RusticCards'
import Treasure from './Treasure'

const RusticWonders = () => {
  return (
    <>
    <div className="relative">
      {/* Background with rustic texture */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-30"></div>
      
      {/* Content container */}
      <div className="relative mx-[-16px] py-28 px-4 sm:px-6 lg:px-8 bg-amber-900/80 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle with decorative elements */}
          <div className="flex items-center justify-center mb-4">
            <hr className="w-16 border-amber-300 border-t-2" />
            <h2 className="mx-4 text-amber-100 font-serif text-xl tracking-widest">INDIA'S</h2>
            <hr className="w-16 border-amber-300 border-t-2" />
          </div>
          
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-amber-50 font-serif mb-6">
            RUSTIC WONDERS
          </h1>
        </div>
      </div>
    </div>
    <div>
        <RusticCards/>
    </div>
    <div>
      <Treasure/>
    </div>
    </>
  )
}

export default RusticWonders