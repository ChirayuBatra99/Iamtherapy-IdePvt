import React from 'react';
import Image from 'next/image';
import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiEternalLove } from "react-icons/gi";
import { TfiSupport } from "react-icons/tfi";

import Card from '../Card/page';

const HeroWithCards = () => {
  return (
    <div className="bg-gradient-to-r from-green-600  to-purple-500 text-white pt-40">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4">Why Choose Us ?</h1>
        <p className="text-lg max-w-2xl mb-6">
         We value our patient's privacy, well-being, and provide them with most personalised support.
        </p>

        {/* <div className="mt-12"> */}
        <div className='flex flex-row'>
             <Card title="Holistic Approach" desc="Access a wide range of wellness tools, including nutrition planning, fitness guidance, and stress management techniques to enhance your overall well-being." Icon={ MdHealthAndSafety } />  
             <Card title="Proven Methods" desc="Our wellness programs are grounded in evidence-based research, ensuring that you receive effective and sustainable solutions for a healthier lifestyle." Icon={ GiEternalLove } />  
             <Card title="Tailored Service" desc="Our wellness plans are customized to meet your unique needs and goals, providing you with the right guidance and support every step of the way." Icon={ TfiSupport } />  
             <Card title="Convenient Support" desc="Enjoy seamless access to our wellness services and resources from anywhere, at any time, allowing you to maintain your health journey with ease and flexibility." Icon={ RiMentalHealthLine

              } />  

        </div>
            
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroWithCards;
