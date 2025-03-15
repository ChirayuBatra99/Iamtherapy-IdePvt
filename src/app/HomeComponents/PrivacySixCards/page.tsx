import React from 'react';
import Image from 'next/image';

import Card from '../HomeComponents/Card/page';

const PrivacySixCards = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Your Next Adventure, and add some more shit about privacy here.</h1>
        {/* <div className="mt-12"> */}
        <div className='flex flex-row'>
            <Card />  <Card /> 
            <Card />  <Card /> 
        </div>
            
        {/* </div> */}
      </div>
    </div>
  );
};

export default PrivacySixCards;
