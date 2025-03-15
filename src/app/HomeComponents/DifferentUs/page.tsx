import React from 'react';
import Image from 'next/image';
import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiEternalLove } from "react-icons/gi";
import { TfiSupport } from "react-icons/tfi";

import DifferentUsCard from '../DifferentUsCard/White/page';
import DifferentUsCardBlue from '../DifferentUsCard/Blue/page';

const DifferentUs = () => {
  return (
    <div className="bg-gradient-to-r from-green-400  to-yellow-400 text-white pt-40">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4">Begin therapy ?</h1>
        <p className="text-lg max-w-2xl mb-6">
                Book therapy section
        </p>

        {/* <div className="mt-12"> */}
        <div className='flex flex-row items-center'>
             <DifferentUsCard title="Holistic Approach" desc="Access a wide range of wellness tools, including nutrition planning, fitness guidance, and stress management techniques to enhance your overall well-being." Icon={ MdHealthAndSafety } />  
             <DifferentUsCardBlue title="Call For Enquiry" desc="If you are having difficulty in booking a therpay session, call us at this number, our team will assist you." Icon={ MdHealthAndSafety } />  
        </div>
            
        {/* </div> */}
      </div>
    </div>
  );
};

export default DifferentUs;
