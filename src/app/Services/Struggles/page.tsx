import React from 'react';
import Image from 'next/image';
import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiEternalLove } from "react-icons/gi";
import { TfiSupport } from "react-icons/tfi";

import TiltCard from '../TiltCards/page';

const Struggles = () => {
  return (
    <div className=" bg-white pt-6 ">

      <div className="container mx-auto  text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4">What are you struggling with?</h1>
        <p className="text-lg max-w-2xl mb-6">
          We value our patient's privacy, well-being, and provide them with most personalised support.
        </p>

        <div className='flex flex-row'>
          <TiltCard title="Stress & Anxiety" desc="Social Anxiety.Chronic stress.Financial stress.Family concerns" Icon="MdHealthAndSafety" />
          <TiltCard title="Depression" desc="Self-esteem.Worthlessness.Dealing with loss.Postpartum depression.Clinical depression" Icon="GiEternalLove" />
          <TiltCard title="Interpersonal issues" desc="Marriage issues.Relationship issues.Divorce/seperation.Breakup" Icon="TfiSupport" />
        </div>
        <div className='flex flex-row'>
          <TiltCard title="Addictions" desc="Smoking/Tobacco.Alcohol Addiction.Adult content.Other addictions" Icon="TfiSupport" />
          <TiltCard title="Job related" desc="Unemployment.No recognition.Bad boss.Switching jobs" Icon="MdHealthAndSafety" />
          <TiltCard title="Body Related issues" desc="Body image issues.Stress eating.Inferiority complex" Icon="GiEternalLove" />
        </div>
        <div className='flex flex-row'>
          <TiltCard title="Individuality" desc="Inferiority complex.Self-care.Peer pressure.Interaction with opposite gender" Icon="TfiSupport" />
          <TiltCard title="Existential issues" desc="Midlife-crisis.Quarter life crisis.Finding purpose" Icon="MdHealthAndSafety" />
          <TiltCard title="Others" desc="If you are facing things that don't match to any category here, or your issue is a mix of multiple, don't worry we will completely understand and will compassionately try to fix your issues" Icon="GiEternalLove" />
        </div>
        <div className='flex flex-row'>
          <TiltCard title="Abuse" desc="Physical abuse. Domestic violence. Emotional Neglect" Icon="MdHealthAndSafety" />
        </div>
      </div>

    </div>
  );
};

export default Struggles;


// <div className='flex flex-row'>
//     <TiltCard title="Anxiety" desc="Access a wide range of wellness tools, including nutrition planning, fitness guidance, and stress management techniques to enhance your overall well-being." Icon={MdHealthAndSafety} />
//     <TiltCard title="Depression" desc="Our wellness programs are grounded in evidence-based research, ensuring that you receive effective and sustainable solutions for a healthier lifestyle." Icon={GiEternalLove} />
//     <TiltCard title="ADHD" desc="Our wellness plans are customized to meet your unique needs and goals, providing you with the right guidance and support every step of the way." Icon={TfiSupport} />
//   </div>
//   <div className='flex flex-row'>
//     <TiltCard title="OCD" desc="Access a wide range of wellness tools, including nutrition planning, fitness guidance, and stress management techniques to enhance your overall well-being." Icon={MdHealthAndSafety} />
//     <TiltCard title="Bipolar Disorder" desc="Our wellness programs are grounded in evidence-based research, ensuring that you receive effective and sustainable solutions for a healthier lifestyle." Icon={GiEternalLove} />
//     <TiltCard title="Chronic Stress" desc="Our wellness plans are customized to meet your unique needs and goals, providing you with the right guidance and support every step of the way." Icon={TfiSupport} />
//   </div>