"use client";

import dynamic from "next/dynamic";
import type { IconType } from 'react-icons';

import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiEternalLove } from "react-icons/gi";
import { TfiSupport } from "react-icons/tfi";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

interface CardWithFormProps {
  title: string;
  desc: string;
  Icon: IconType;
}

export default function TiltCard({ title, desc, Icon}: CardWithFormProps) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <Tilt
        className="w-80 h-48 bg-gradient-to-r from-blue-500 to-purple-600 
                  rounded-2xl shadow-xl flex items-center justify-center flex-col"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareEnable={true}
        glareMaxOpacity={0.45}
        glareColor="white"
        glarePosition="bottom"
        glareBorderRadius="12px"
      >
            {/* {Icon && <Icon className="w-20 h-20"/>} */}
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <p className="text-white text-1xl font-bold">{desc}</p>
      </Tilt>
    </div>
  );
}
