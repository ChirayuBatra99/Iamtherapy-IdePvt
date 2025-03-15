import React from 'react';
import Image from 'next/image';

import Card from '../Card/page';

const ServicesLongPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Your Next Adventure</h1>
        <p className="text-lg max-w-2xl mb-6">
          Discover endless possibilities with our platform. Connect, explore, and build with the best tools and resources available.
          Some more shit, Some more shit, Some more shit, Some more shit, Some more shit, Some more shit, Some more shit, Some more shit, 
          Some more shit, Some more shit, Some more shit, Some more shit, Some more shit, Some more shit, Some more shit, Some more shit.
        </p>
        <div className='flex flex-col'>
            {/* <div className='flex flex-row'>
                <Card /> <Card />
            </div>
            <div className='flex flex-row'>
                <Card /> <Card />
            </div>
            <div className='flex flex-row'>
                <Card /> <Card />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesLongPage;
