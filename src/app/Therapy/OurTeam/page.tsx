import React from 'react';
import HeroImage from "../../../../public/therapists.png";
import Image from 'next/image';

const OurTeam = () => {
  return (
    <div className=" text-black pt-20 h-[95vh] white">
      <div className="container mx-auto px-6 text-center flex flex-row items-center content-around">

        {/* Text    Section */}
        <div className='flex flex-col items-center max-w-3/6'>
          <h1 className="text-5xl font-extrabold mb-4">Our mental health professionals</h1>
          <p className="text-lg max-w-2xl mb-6">
              We have a team of well-trained experienced professionals, that will take care of your privacy.
              Our therapists will create plans for you that suite the best for you.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">Meet our team</button>
          </div>
        </div>

        {/* Image Section with Overlapping Effect */}
        <div className="relative w-[350px] h-[350px] mt-12 ml-4">
          <Image
            src={HeroImage}
            alt="Hero Illustration 1"
            width={200}
            height={200}
            className="rounded-xl h-[100%] w-[100%] ml-24 absolute top-20 left-0  z-10"
          />
        </div>

      </div>
    </div>
  )
}

export default OurTeam;
