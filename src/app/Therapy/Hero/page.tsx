import React from 'react'
import  Video from 'next-video';
// import BackgroundVideo from 'next-video/background-video';
import BackgroundPlayer from 'next-video/background-player';

const Hero = () => {
  return (
    <div>
            <BackgroundPlayer src="/TherapyHero.mp4" />

    </div>
  )
}

export default Hero;
