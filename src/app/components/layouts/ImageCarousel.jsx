// src/app/components/sections/ImageCarousel.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import CarouselControls from '../fragments/CarouselControls';

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-full">
      {/* Current Image */}
      <div className="relative max-w-[634px] h-[494px]">
        <Image
          src={images[activeIndex]}
          alt={`Carousel image ${activeIndex + 1}`}
          fill
          className="object-cover rounded-[40px] rounded-br-[100px]"
          priority
        />
        
        {/* Dots Navigation */}
        <CarouselControls 
          count={images.length} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;