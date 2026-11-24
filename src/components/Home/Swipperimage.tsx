"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../asstets/imageh.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';


export default function App() {
  return (
    <>
    
<div className="w-full  mx-auto h-[250px] overflow-hidden">
  <Swiper
    navigation={true}
    modules={[Navigation]}
    className="w-full h-full"
  >
    <SwiperSlide>
      <Image
        src={image}
        alt="HeroImage"
         width={1200}
  height={400}
        className="w-full h-full object-contain"
      />
    </SwiperSlide>
  </Swiper>
</div>
  
     
    </>
  );
}
