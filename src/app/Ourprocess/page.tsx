import React from 'react';
import Image from 'next/image';
import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiEternalLove } from "react-icons/gi";
import { TfiSupport } from "react-icons/tfi";

import Card from '../Card/page';

const Ourprocess = () => {
return (
     <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
       <div className="container mx-auto px-6 text-center flex flex-col items-center">
         <h1 className="text-5xl font-extrabold mb-4">The process</h1>
         <p className="text-lg max-w-2xl mb-6">
            We understand your struggle and designed our process to heal you faster.
         </p>
 
         <div className='flex flex-row'>
              <Card title="Identify" desc="Identify your problem and the thing for which you need help." Icon={ MdHealthAndSafety } />  
              <Card title="Take therapy" desc="Choose the counsellor which aligns with your problems." Icon={ GiEternalLove } />  
              <Card title="Psychiatrist" desc="Therpist will guide you to a psychiatrist if needed" Icon={ TfiSupport } />   
              <Card title="Follow Up" desc="Follow the advice and the plans adviced by therpists and psychiatrist." Icon={ TfiSupport } />   
              <Card title="Healing journey" desc="Still we are just one phone call away from you. Join the community and keep using our self-help tools for your recovery." Icon={ TfiSupport } />   
         </div>
        
        
       </div>
     </div>
   );
 };


export default Ourprocess
