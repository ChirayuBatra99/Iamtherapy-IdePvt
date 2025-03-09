import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Your Next Adventure</h1>
        <p className="text-lg max-w-2xl mb-6">
          Discover endless possibilities with our platform. Connect, explore, and build with the best tools and resources available.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">Get Started</button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-500 transition">Learn More</button>
        </div>
        <div className="mt-12">
          <Image 
            src="/images/hero-image.svg" 
            alt="Hero Illustration" 
            width={500} 
            height={300} 
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
