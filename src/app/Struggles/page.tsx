import React from 'react';
import Image from 'next/image';
import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiEternalLove } from "react-icons/gi";
import { TfiSupport } from "react-icons/tfi";

import Card from '../Card/page';
const Struggles = () => {
 return (
     <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
       <div className="container mx-auto px-6 text-center flex flex-col items-center">
         <h1 className="text-5xl font-extrabold mb-4">What are you struggling with?</h1>
         <p className="text-lg max-w-2xl mb-6">
          We value our patient's privacy, well-being, and provide them with most personalised support.
         </p>
 
         {/* <div className="mt-12"> */}
         <div className='flex flex-row'>
              <Card title="Anxiety" desc="Access a wide range of wellness tools, including nutrition planning, fitness guidance, and stress management techniques to enhance your overall well-being." Icon={ MdHealthAndSafety } />  
              <Card title="Depression" desc="Our wellness programs are grounded in evidence-based research, ensuring that you receive effective and sustainable solutions for a healthier lifestyle." Icon={ GiEternalLove } />  
              <Card title="ADHD" desc="Our wellness plans are customized to meet your unique needs and goals, providing you with the right guidance and support every step of the way." Icon={ TfiSupport } />   
         </div>
         <div className='flex flex-row'>
              <Card title="OCD" desc="Access a wide range of wellness tools, including nutrition planning, fitness guidance, and stress management techniques to enhance your overall well-being." Icon={ MdHealthAndSafety } />  
              <Card title="Bipolar Disorder" desc="Our wellness programs are grounded in evidence-based research, ensuring that you receive effective and sustainable solutions for a healthier lifestyle." Icon={ GiEternalLove } />  
              <Card title="Chronic Stress" desc="Our wellness plans are customized to meet your unique needs and goals, providing you with the right guidance and support every step of the way." Icon={ TfiSupport } />   
         </div>
         {/* </div> */}
       </div>
     </div>
   );
 };

export default Struggles;
