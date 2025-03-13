"use client";

import dynamic from "next/dynamic";
import type { IconType } from "react-icons";
import * as MdIcons from "react-icons/md"; // Material Design Icons
import * as RiIcons from "react-icons/ri"; // Remix Icons
import * as GiIcons from "react-icons/gi"; // Game Icons
import * as TfiIcons from "react-icons/tfi"; // Themify Icons

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

// Combine all icons into one object
const Icons: Record<string, IconType> = {
  ...MdIcons,
  ...RiIcons,
  ...GiIcons,
  ...TfiIcons,
};

interface CardWithFormProps {
  title: string;
  desc: string;
  Icon: string;
}

export default function TiltCard({ title, desc, Icon }: CardWithFormProps) {
  const IconComponent = Icons[Icon]; // Get icon dynamically

  return (
    <div className="flex justify-center items-center  p-7">
      <Tilt
        className="w-80 h-90  bg-emerald-600 border-2 border-white-950
                  rounded-2xl shadow-xl flex items-center justify-center flex-col"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareEnable={true}
        glareMaxOpacity={0.45}
        glareColor="white"
        glarePosition="bottom"
        glareBorderRadius="12px"
      >
        {IconComponent ? (
          <IconComponent className="w-14 h-14 text-white" />
        ) : (
          <p className="text-white">Invalid Icon</p> // Handle missing icons
        )}
        <h2 className="text-black text-2xl font-bold py-5">{title}</h2>
        <p className="text-black text-1xl font-bold py-5 px-4">{desc}</p>
      </Tilt>
    </div>
  );
}




// bg-gradient-to-r from-blue-500 to-purple-600
// bg-gradient-to-r   bg-blue-500 to-emerald-600