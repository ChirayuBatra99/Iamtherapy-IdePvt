import React from 'react';
import HeroImage from "../../../../public/tuxpi.png";
import Image from 'next/image';

const ConsultCoach = () => {
  return (
    <div className=" text-black pt-20 h-[95vh] bg-emerald-400">
      <div className="container mx-auto px-6 text-center flex flex-row items-center content-around">

        {/* Text    Section */}
        <div className='flex flex-col items-center max-w-3/6'>
          <h1 className="text-5xl font-extrabold mb-4">Not sure what kind of care you need?</h1>
          <p className="text-lg max-w-2xl mb-6">
                If you are not aware of what kind of treatment you need, consult one of our coach by
                clicking on the button below. You will be guided to the best therapist for you.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">Consult a coach for free</button>
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

export default ConsultCoach;
