import React from 'react';
import Image from 'next/image';
import HeroImage from "../../../../public/heroImage.jpg";
import HeroImage2 from "../../../../public/heroImage2.jpg";
import HeroImage3 from "../../../../public/heroImage3.jpg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-purple-500 text-white pt-20 h-[95vh]">
      <div className="container mx-auto px-6 text-center flex flex-row items-center content-around">

        {/* Text Section */}
        <div className='flex flex-col items-center max-w-3/6'>
          <h1 className="text-5xl font-extrabold mb-4">Care for mental health</h1>
          <p className="text-lg max-w-2xl mb-6">
            We provide you with self-care tools, a team of qualified therapists, and psychiatrists to help you deal with your mental 
            health issues.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">Therapy</button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-500 transition">Self Assessment</button>
          </div>
        </div>

        {/* Image Section with Overlapping Effect */}
        <div className="relative w-[350px] h-[350px] mt-12 ml-4">
          <Image
            src={HeroImage}
            alt="Hero Illustration 1"
            width={200}
            height={200}
            className="rounded-xl shadow-lg absolute top-20 left-0 rotate-[-10deg] z-10"
          />
          <Image
            src={HeroImage2}
            alt="Hero Illustration 2"
            width={200}
            height={200}
            className="rounded-xl shadow-lg absolute top-0 left-44 rotate-[2deg] z-20"
          />
          <Image
            src={HeroImage3}
            alt="Hero Illustration 3"
            width={200}
            height={200}
            className="rounded-xl shadow-lg absolute top-24 left-90 rotate-[5deg] z-30"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
